// Local paths are the default. A public base URL is optional deployment metadata.
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const input=process.argv[2] || '--local';
const local=input==='--local';
let base='./';
if(!local){
 const u=new URL(input);
 if(!['http:','https:'].includes(u.protocol)||u.search||u.hash)throw Error('Provide --local or a public HTTP(S) base URL without query or hash.');
 u.pathname=u.pathname.replace(/\/?$/,'/');base=u.href;
}
const imagePath='assets/images/api-console-loading-v2.jpg';
const put=(source,pattern,tag)=>pattern.test(source)?source.replace(pattern,tag):tag?source.replace('</head>',tag+'</head>'):source;
for(const f of ['index.html','gear.html','privacy.html','404.html']){
 let s=await readFile(f,'utf8');
 const canonical=f==='index.html'?base:base+f;
 s=s.replace(/(<meta name="site-base" content=")[^"]+("\s*\/?>)/,`$1${base}$2`);
 s=s.replace(/(<base href=")[^"]+("\s*\/?>)/,`$1${base}$2`);
 // Local packages make no canonical-host claim. Publishing can add one explicitly.
 s=put(s,/<link rel="canonical" href="[^"]+"\s*\/?>/,local?'':`<link rel="canonical" href="${canonical}">`);
 if(f!=='404.html'){
  s=put(s,/<meta property="og:url" content="[^"]+"\s*\/?>/,local?'':`<meta property="og:url" content="${canonical}">`);
  s=s.replace(/(<meta property="og:image" content=")[^"]+("\s*\/?>)/,`$1${base}${imagePath}$2`);
  s=s.replace(/(<meta name="twitter:image" content=")[^"]+("\s*\/?>)/,`$1${base}${imagePath}$2`);
 }
 if(f==='index.html'){
  s=s.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,(_,a,j,b)=>{
   const data=JSON.parse(j);if(local)delete data.url;else data.url=base;data.image=base+imagePath;return a+JSON.stringify(data)+b;
  });
 }
 await writeFile(f,s);
}
const entries=local?'':['','gear.html','privacy.html'].map(p=>`  <url><loc>${(base+p).replaceAll('&','&amp;')}</loc></url>`).join('\n');
await writeFile('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`);
await writeFile('robots.txt',`User-agent: *\nAllow: /\n${local?'':`Sitemap: ${base}sitemap.xml\n`}`);
const legacy={home:'',story:'#rooms',gear:'gear.html',staff:'#people',gallery:'#gallery',contact:'#contact',sample:'#listen',mixing:'#contact',mastering:'?room=master#rooms'};
for(const [route,target] of Object.entries(legacy)){
 await mkdir(route,{recursive:true});
 const href=target==='gear.html'?'../gear.html':'../index.html'+target;
 const canonical=target==='gear.html'?base+'gear.html':base;
 const publicTags=local?'':`<link rel="canonical" href="${canonical}"><meta property="og:url" content="${canonical}">`;
 const image=(local?'../':base)+imagePath;
 await writeFile(`${route}/index.html`,`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="refresh" content="0;url=${href}">${publicTags}<title>The Church Recording Studio</title><meta property="og:type" content="website"><meta property="og:title" content="The Church Recording Studio"><meta property="og:image" content="${image}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="The Church loading screen with the API 2448 console"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${image}"><meta name="twitter:image:alt" content="The Church loading screen with the API 2448 console"><link rel="stylesheet" href="../assets/style.css"></head><body><main class="document"><h1>The Church</h1><p>This part of the studio has a new home. <a href="${href}">Continue to the studio</a>.</p></main></body></html>`);
}
console.log(local?'Local relative paths configured; no publishing host is embedded.':'Public metadata configured for '+base);
