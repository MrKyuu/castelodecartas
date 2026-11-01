const C='t20-v20',F=['./','manifest.json','fundo.png','icon-180.png','icon-192.png','icon-512.png','pdf-lib.min.js','crown.png','btn_next.png','ic_sword.png','ic_shield.png','ic_rod.png','atk.png','hab.png','ring_g.png','ring_b.png','shield.png','def.png','panel.png','fundo_retrato.png'];
async function add(c,u){const r=await fetch(u,{cache:'reload'});if(!r.ok)throw 0;await c.put(u,new Response(await r.blob(),{status:200,headers:r.headers}))}
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>Promise.allSettled(F.map(u=>add(c,u)))))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!=C).map(n=>caches.delete(n)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET')return;e.respondWith(fetch(r).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||(r.mode=='navigate'?caches.match('./'):Response.error()))))});
