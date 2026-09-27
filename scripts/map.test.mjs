import {createServer} from 'node:http';
import {readFileSync, existsSync, mkdirSync} from 'node:fs';
import {resolve, extname, sep} from 'node:path';
import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {mockMapSession} from './map-test-session.mjs';

const root=resolve('dist-firebase');
const headers=Object.fromEntries(JSON.parse(readFileSync('firebase.json','utf8')).hosting.headers[0].headers.map(h=>[h.key,h.value]));
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.xml':'application/xml','.jpg':'image/jpeg','.png':'image/png','.webp':'image/webp','.svg':'image/svg+xml','.wasm':'application/wasm'};
const server=createServer((req,res)=>{
 const path=resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
 if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403);res.end();return;}
 const file=existsSync(path)&&extname(path)?path:resolve(root,'index.html');
 res.writeHead(200,{...headers,'Content-Type':mime[extname(file)]||'application/octet-stream'});res.end(readFileSync(file));
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base=process.env.QA_BASE_URL||`http://127.0.0.1:${server.address().port}`;
const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-unsafe-swiftshader']});
mkdirSync('outputs',{recursive:true});
try{
 for(const mobile of [false,true]){
  const page=await browser.newPage({viewport:mobile?{width:390,height:844}:{width:1440,height:1000}});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await mockMapSession(page);
  await page.route('**/api/integrations',r=>r.abort());
  if(!process.env.QA_LIVE_TILES)await page.route('https://tile.openstreetmap.org/**',r=>r.abort());
  await page.goto(base,{waitUntil:'domcontentloaded'});
  await page.locator('footer[data-ready=true]').waitFor();
  await page.getByRole('button',{name:'Globe',exact:true}).click();
  await page.waitForFunction(()=>document.querySelector('.earth-canvas canvas')&&!document.querySelector('.earth-toolbar button').disabled,null,{timeout:45000});
  await page.getByLabel('Globe place').selectOption('nalanda');
  await page.waitForFunction(()=>document.querySelector('.earth-canvas').dataset.cameraTarget==='nalanda');
  await page.waitForTimeout(2500);
  assert.match(await page.locator('.earth-places a').getAttribute('href'),/25.1367,85.4437/);
  await page.getByTitle('Zoom in',{exact:true}).click();
  await page.getByTitle('Zoom out',{exact:true}).click();
  await page.waitForFunction(()=>{const canvas=document.querySelector('.earth-canvas canvas');if(!canvas)return false;const c=document.createElement('canvas');c.width=32;c.height=32;const ctx=c.getContext('2d');ctx.drawImage(canvas,0,0,32,32);const d=ctx.getImageData(0,0,32,32).data;let sum=0;for(let i=0;i<d.length;i+=4)sum+=d[i]+d[i+1]+d[i+2];return sum/(32*32*3)>30},null,{timeout:45000});
  const pixels=await page.locator('.earth-canvas canvas').evaluate(canvas=>{const c=document.createElement('canvas');c.width=64;c.height=64;const ctx=c.getContext('2d');ctx.drawImage(canvas,0,0,64,64);const d=ctx.getImageData(0,0,64,64).data;let sum=0;for(let i=0;i<d.length;i+=4)sum+=d[i]+d[i+1]+d[i+2];return sum/(64*64*3)});
  assert.ok(pixels>30,`Canvas blank: ${pixels}`);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  assert.deepEqual(errors,[]);
  await page.locator('.earth-experience').screenshot({path:`outputs/map-${mobile?'mobile':'desktop'}.png`});
  console.log(JSON.stringify({test:mobile?'mobile':'desktop',pixels,status:await page.locator('.earth-status').textContent(),passed:true}));
  await page.close();
 }
 const page=await browser.newPage({viewport:{width:390,height:844}});
 await mockMapSession(page);
 await page.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/.test(type)?null:original.call(this,type,...args)}});
 await page.route('**/api/integrations',r=>r.abort());
 await page.goto(base,{waitUntil:'domcontentloaded'});
 await page.locator('footer[data-ready=true]').waitFor();
 await page.getByRole('button',{name:'Globe',exact:true}).click();
 await page.waitForFunction(()=>document.querySelector('.earth-status')?.textContent.includes('Interactive globe unavailable'),null,{timeout:45000});
 assert.ok(await page.locator('.regional-map img').evaluate(img=>img.complete&&img.naturalWidth>0));
 await page.getByRole('button',{name:'Locate Nalanda',exact:true}).click();
 assert.match(await page.locator('.earth-places a').getAttribute('href'),/25.1367,85.4437/);
 await page.locator('.earth-experience').screenshot({path:'outputs/map-no-webgl.png'});
 console.log('No-WebGL fallback and location selection passed.');
}finally{await browser.close();server.close();}
