import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const projects = JSON.parse(await readFile(resolve(root, 'src/data/filmProjects.json'), 'utf8'));
if (!Array.isArray(projects)) throw new Error('Project index must be a list.');
const ids = projects.map(project => project.id);
if (ids.some(id => typeof id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id))) throw new Error('Invalid project identifier.');
if (!ids.length || new Set(ids).size !== ids.length) throw new Error('Project identifiers must exist and be unique.');
const restore = process.argv.includes('--restore');
for (const id of ids) {
  const local = resolve(root, 'projects', id);
  const copies = [
    ['main-brief.astro', `src/pages/film-plans/${id}.astro`],
    ['ai-brief.md', `src/project-documents/${id}/ai-brief.md`],
    ['video-page.md', `src/project-documents/${id}/video-page.md`],
  ];
  if (restore) {
    await mkdir(local, { recursive: true });
    for (const [name, target] of copies) {
      try { await access(resolve(local, name)); }
      catch (error) {
        if (error.code !== 'ENOENT') throw error;
        await writeFile(resolve(local, name), await readFile(resolve(root, target)));
      }
    }
  }
  try { await access(local); }
  catch (error) {
    if (error.code !== 'ENOENT') throw error;
    await Promise.all(copies.map(([, target]) => readFile(resolve(root, target))));
    console.log(`${id}: using saved website copies; restore local authoring files with npm run projects:restore.`);
    continue;
  }
  // Read every required source first so a missing document cannot produce a partial sync.
  const contents = await Promise.all(copies.map(([name]) => readFile(resolve(local, name))));
  for (let i = 0; i < copies.length; i++) {
    const target = resolve(root, copies[i][1]);
    await mkdir(resolve(target, '..'), { recursive: true });
    await writeFile(target, contents[i]);
  }
  console.log(`${id}: synced three website copies from local project documents.`);
}
