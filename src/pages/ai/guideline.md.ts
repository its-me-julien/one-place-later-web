import type { APIRoute } from 'astro';
import guideline from '../../content/ai-guideline.md?raw';

export const GET: APIRoute = () => new Response(guideline, {
  headers: {
    'Content-Type': 'text/markdown; charset=utf-8',
    'X-Robots-Tag': 'noindex, nofollow',
  },
});
