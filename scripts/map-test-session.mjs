export async function mockMapSession(page) {
 const user={id:'11111111-1111-4111-8111-111111111111',aud:'authenticated',role:'authenticated',email:'map-test@example.test',user_metadata:{display_name:'Map tester'},app_metadata:{provider:'email'},created_at:new Date().toISOString()};
 const token=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url')+'.'+Buffer.from(JSON.stringify({sub:user.id,exp:Math.floor(Date.now()/1000)+3600})).toString('base64url')+'.test';
 await page.addInitScript(({user,token})=>localStorage.setItem('sb-kaal-test-auth-token',JSON.stringify({access_token:token,refresh_token:'test-refresh',token_type:'bearer',expires_at:Math.floor(Date.now()/1000)+3600,user})),{user,token});
 await page.route('**/api/config',r=>r.fulfill({json:{supabaseUrl:'https://kaal-test.supabase.co',supabaseKey:'sb_publishable_test_configuration'}}));
 await page.route('**/api/library',r=>r.fulfill({json:{content:null}}));
 await page.route('**/api/catalogue',r=>r.fulfill({json:{content:null}}));
 await page.route('**/api/preferences',r=>r.fulfill({json:{saved:[],visited:[]}}));
 await page.route('https://kaal-test.supabase.co/**',r=>r.fulfill({json:r.request().url().includes('/user')?user:{},headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'*'}}));
}
