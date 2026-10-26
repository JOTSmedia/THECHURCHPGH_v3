import {cp,mkdir,rm} from 'node:fs/promises';
const files=['index.html','gear.html','privacy.html','404.html','assets','robots.txt','sitemap.xml','.nojekyll','home','story','gear','staff','gallery','contact','sample','mixing','mastering'];
await rm('_site',{recursive:true,force:true});await mkdir('_site',{recursive:true});
for(const file of files)await cp(file,`_site/${file}`,{recursive:true});
console.log('Static website ready in _site/');
