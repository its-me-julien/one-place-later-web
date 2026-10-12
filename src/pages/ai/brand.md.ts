import type { APIRoute } from 'astro';
import brand from '../../../docs/One Place Later | AI Brand & Creative Direction.md?raw';

export const GET: APIRoute = () => new Response(brand, {
  headers: {
    'Content-Type': 'text/markdown; charset=utf-8',
    'X-Robots-Tag': 'noindex, nofollow',
  },
});
