import { readFile, access } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import assert from 'node:assert/strict';
const pages = ['index.html','products.html','acupuncture.html','visit.html'].flatMap(file => [file, 'zh/'+file]);
let links = 0;
for (const file of pages) {
  const html = await readFile('dist/'+file,'utf8');
  assert.equal((html.match(/<h1>/g)||[]).length,1,`${file}: one main heading`);
  assert.ok(html.includes('<title>') && html.includes('name="description"'),`${file}: metadata`);
  assert.ok(html.includes('tel:+17704528289'),`${file}: store phone`);
  assert.ok(!/\bdoctor\b|\bDr\./i.test(html),`${file}: practitioner title`);
  for (const image of html.matchAll(/<img\b[^>]*>/g)) assert.match(image[0],/alt="[^"]+"/,`${file}: image description`);
  for (const [,value] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|tel:|mailto:)/.test(value)) continue;
    const [path,anchor] = value.split('#');
    const target = path ? resolve('dist',dirname(file),path) : resolve('dist',file);
    await access(target);
    if (anchor) assert.ok((await readFile(target,'utf8')).includes(`id="${anchor}"`),`${file}: missing #${anchor}`);
    links++;
  }
}
console.log(`Checked ${pages.length} bilingual pages and ${links} internal links/assets.`);
