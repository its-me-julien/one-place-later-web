import type { APIRoute } from 'astro';
import { filmProjects } from '../../../data/filmProjects';
const sources = import.meta.glob('../../../project-documents/*/ai-brief.md', { eager: true, query: '?raw', import: 'default' });
export function getStaticPaths() {
  return filmProjects.map(project => {
    const markdown = sources[`../../../project-documents/${project.id}/ai-brief.md`];
    if (typeof markdown !== 'string') throw new Error(`Missing AI brief for ${project.id}`);
    return { params: { project: project.id }, props: { markdown } };
  });
}
export const GET: APIRoute = ({ props }) => new Response(props.markdown, {
  headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'X-Robots-Tag': 'noindex, nofollow' },
});
