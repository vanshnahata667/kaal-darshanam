import assert from 'node:assert/strict';

// Only public credentials and read-only probes. Never log response records or keys.
const origin='https://kaal-darshanam.jainashwin400.chatgpt.site';
const url=process.env.SUPABASE_URL;
const key=process.env.SUPABASE_PUBLISHABLE_KEY;
assert.ok(url&&new URL(url).hostname.endsWith('.supabase.co'),'Expected Supabase project URL');
assert.ok(key?.startsWith('sb_publishable_'),'Use only the public publishable key');
const results=[];
async function probe(name,target,init,allowed){
 const response=await fetch(target,{...init,signal:AbortSignal.timeout(20000)});
 const body=await response.json().catch(()=>null);
 const emptyListing=name==='Anonymous private object listing'&&response.status===200&&Array.isArray(body)&&body.length===0;
 const concealedBucket=name==='Anonymous bucket metadata'&&body?.code==='NoSuchBucket';
 results.push({name,status:response.status,passed:emptyListing||concealedBucket?null:allowed.includes(response.status),code:typeof body?.code==='string'?body.code:undefined,...(emptyListing||concealedBucket?{note:'No objects or bucket metadata exposed. Owner inspection is required to confirm bucket existence, privacy and policies.'}:{})});
}
for(const table of ['profiles','user_libraries']){
 await probe(`Anonymous ${table} read`,`${url}/rest/v1/${table}?select=*&limit=0`,{headers:{apikey:key}},[401,403]);
 await probe(`Forged token ${table} read`,`${url}/rest/v1/${table}?select=*&limit=0`,{headers:{apikey:key,Authorization:'Bearer invalid-test-token'}},[401,403]);
}
await probe('Anonymous bucket metadata',`${url}/storage/v1/bucket/heritage-media`,{headers:{apikey:key}},[400,401,403,404]);
await probe('Anonymous private object listing',`${url}/storage/v1/object/list/heritage-media`,{method:'POST',headers:{apikey:key,'Content-Type':'application/json'},body:JSON.stringify({prefix:'',limit:1})},[401,403]);
for(const path of ['/api/library','/api/preferences','/api/catalogue']){
 await probe(`API forged user ID ${path}`,origin+path,{headers:{'x-user-id':'11111111-1111-4111-8111-111111111111'}},[401]);
 await probe(`API forged token ${path}`,origin+path,{headers:{Authorization:'Bearer invalid-test-token'}},[401]);
}
console.log(JSON.stringify({checkedAt:new Date().toISOString(),results,scope:'Anonymous and forged credentials only. Owner policy inspection and authenticated cross-user tests are separate.'},null,2));
assert.ok(results.every(result=>result.passed!==false),'One or more hosted permission probes need investigation');
