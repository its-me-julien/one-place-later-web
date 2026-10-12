# Local film projects and website copies

Author in `projects/<id>/` on this machine. This directory is ignored by Git;
it holds the local working source, not a public web route. The current project
is `projects/back-to-korea/`.

Its three authoring documents are:

- `main-brief.astro`: the existing detailed brief, preserved as its rich page
  source. Retain its imports relative to the generated web page location.
- `ai-brief.md`: the concise, evidence-aware interpretation.
- `video-page.md`: simple audience copy and metadata; currently a private preview.

Run `npm run projects:sync` after local edits. Build and deploy also run sync.
The three intentional website copies live in `src/pages/film-plans/<id>.astro`
and `src/project-documents/<id>/`. They are saved in Git and published to the
protected project URLs. Other local records and media are not copied. Keep raw
paths, transcripts and detailed reviews in local `review/` records.

The website registry is `src/data/filmProjects.json`. Add a unique project id and
its factual summary, stage and route there when its three documents exist.
The private workspace and document routes use this registry.

On another checkout, `npm run projects:restore` recreates missing local
source files from website copies and leaves existing authoring files intact.
It does not restore footage, Resolve projects or local-only changes. Maintain
an independent project/media backup. A machine without the local folder builds
from the saved website copies, without manufacturing new local source files.

Browser narration editing remains a draft workspace. Use Download draft or
Copy, ask Codex to update the local main brief, review the change, then sync.
A browser save, download or deployment is not creative approval.

Preview: `/film-plans/back-to-korea/video/`.
AI brief download: `/film-plans/back-to-korea/ai-brief.md`.
Both inherit the existing `/film-plans` Cloudflare Access protection. There is
no public `/films/` page for this unpublished project. Publish an audience page
only after explicit release approval and a verified video link.
