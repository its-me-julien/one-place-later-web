# Private website pages

Configured on 12 October 2026 in Cloudflare Access.

- Application: `One Place Later — Private guides`
- Application ID: `3080cfb7-aa8e-4b66-a194-7fa0517de952`
- Policy ID: `901c5a4b-58e3-4981-afad-2c17ed006c7a`
- Login: One-time PIN sent by email; application session duration 24 hours.
- Allowed emails: `julien@unet.club`, `jp.tollie@gmail.com`.
- Protected paths on `oneplacelater.com`: `/workspace`, `/creative-field-guide`, `/ai`, `/film-plans`, including descendants and the AI Markdown download.
- Homepage and `/gear` remain public.

Manage the application in the Cloudflare One dashboard. The path rules and
email allowlist are managed there, not by Wrangler deployment.

`wrangler.jsonc` disables workers.dev and version preview URLs to prevent
alternate-host access to the private content. Keep these disabled unless
equivalent protection is configured for those hosts first.

Verified after deployment: public pages return HTTP 200; protected roots,
chapters, index.html URLs and the Markdown download redirect to Cloudflare
Access; the former workers.dev URL returns HTTP 404. The browser displays
the email-code login form. Successful email delivery and authenticated
page rendering have not been tested.

## Workspace navigation

`/login/` is the public sign-in entry. Its Sign in link opens `/workspace/`,
where Access requests an email code before serving the private library.
The library groups creative guides, AI workflow downloads and film plans.
Private HTML pages link back to the workspace; its Sign out link uses
`/cdn-cgi/access/logout`. Public footer navigation includes Login.

Project document links now include the AI Markdown brief and the unpublished
video preview under `/film-plans/<id>/`. These inherit the protected prefix.
Local source and website copy handling is described in `Local Film Projects.md`.
