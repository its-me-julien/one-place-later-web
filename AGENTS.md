# One Place Later project guidance

For film planning, footage review, media processing or editing work, read
`src/content/ai-guideline.md` before acting. It is the canonical Codex film
workflow published at `/ai/guideline`, with plain Markdown at `/ai/guideline.md`.

Use one folder and living brief per video. Follow its timeline and batch
approvals, sequential narration reviews, source preservation and verification.
Create and maintain three linked project documents: the private main brief,
its concise AI Markdown interpretation, and a simple audience-facing video page.
Author the three documents locally in the video project folder; the local main
brief is authoritative. Git and Cloudflare hold website copies. Keep derived
documents in sync. For the current project, edit `projects/back-to-korea/` first
and run `npm run projects:sync` to refresh website copies. Browser edits are
drafts until saved into the local source. Keep the
video page as a private preview until the user approves and authorises release.
Keep private project records outside public website content. The protocol does
not require media-processing approval for routine authorised website work.

Assume the user runs the latest Resolve Studio; avoid repeated version audits.
Use Resolve AI and automation only for needed, verified operations. All generated
audio (voice, narration, music and effects) must come from ElevenLabs. Resolve
may edit, clean and mix recorded or generated audio.

For editorial choices, read `docs/One Place Later | AI Brand & Creative Direction.md`
first (also served at `/ai/brand.md`). Read the full brand document only for
additional detail. Use `docs/One Place Later | Web Brand & Astro Development Guidelines.md`
for web changes. Preserve unrelated workspace edits and distinguish local
validation from deployment. Current user instructions take precedence over
project guidance.
