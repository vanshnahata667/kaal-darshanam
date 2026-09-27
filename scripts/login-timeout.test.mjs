import {chromium} from 'playwright';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'msedge',headless:true});
try{
 const page=await browser.newPage();
 const errors=[];page.on('pageerror',error=>errors.push(error.message));
 await page.addInitScript(()=>{
  if(sessionStorage.getItem('timeout-tested'))return;
  const original=window.fetch;
  window.fetch=(input,init)=>String(input).includes('/api/config')?new Promise((_resolve,reject)=>{
   init.signal.addEventListener('abort',()=>{sessionStorage.setItem('timeout-tested','1');reject(new DOMException('Aborted','AbortError'))},{once:true});
  }):original(input,init);
 });
 await page.route('**/api/config',route=>route.fulfill({json:{supabaseUrl:'https://kaal-test.supabase.co',supabaseKey:'sb_publishable_test_configuration'}}));
 await page.route('https://kaal-test.supabase.co/**',route=>route.fulfill({json:{external:{google:false}}}));
 await page.goto((process.env.QA_BASE_URL||'http://localhost:5173')+'/login');
 const retry=page.getByRole('button',{name:'Retry connection',exact:true});
 try{await retry.waitFor({timeout:25000})}catch(error){console.error(await page.locator('body').innerText());throw error}
 await retry.click();
 await page.waitForFunction(()=>{const button=document.querySelector('.auth-submit');return button&&!button.disabled});
 assert.equal(await page.getByRole('button',{name:'Sign in',exact:true}).isEnabled(),true);
 assert.deepEqual(errors,[]);
 console.log('Stalled login configuration times out; Retry connection restores sign-in.');
}finally{await browser.close()}
