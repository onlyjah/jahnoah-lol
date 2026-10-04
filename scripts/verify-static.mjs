import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";
async function walk(path) {
  const entries = await readdir(path);
  const files = [];
  for (const name of entries) {
    const child = join(path, name);
    if (name === "_worker.js" || name === "functions") throw new Error(`Unexpected runtime output: ${child}`);
    if ((await stat(child)).isDirectory()) files.push(...await walk(child));
    else files.push(child);
  }
  return files;
}
const files = await walk("dist");
for (const expected of ["dist/index.html", "dist/about/index.html", "dist/blog/index.html", "dist/rss.xml"]) {
  if (!files.includes(expected)) throw new Error(`Missing static route: ${expected}`);
}
console.log(`Verified ${files.filter(path => path.endsWith(".html")).length} static pages with RSS and no Worker runtime.`);
