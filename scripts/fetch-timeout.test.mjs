import assert from 'node:assert/strict';
import {fetchWithTimeout} from '../lib/fetch-timeout.ts';
const original=globalThis.fetch;
try{
 globalThis.fetch=async()=>new Response('ok');
 assert.equal(await (await fetchWithTimeout('https://example.test')).text(),'ok');
 globalThis.fetch=(_url,{signal})=>new Promise((_resolve,reject)=>{
  if(signal.aborted)reject(new DOMException('Aborted','AbortError'));
  else signal.addEventListener('abort',()=>reject(new DOMException('Aborted','AbortError')),{once:true});
 });
 await assert.rejects(fetchWithTimeout('https://example.test',{},10),{name:'AbortError'});
 const controller=new AbortController();controller.abort();
 await assert.rejects(fetchWithTimeout('https://example.test',{signal:controller.signal}),{name:'AbortError'});
 console.log('Request timeout, successful fetch and caller cancellation passed.');
}finally{globalThis.fetch=original}
