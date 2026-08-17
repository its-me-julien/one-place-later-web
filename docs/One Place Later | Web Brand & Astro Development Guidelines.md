# One Place Later
## Web Brand & Astro Development Guidelines v1.0

---

# 1. Purpose

The One Place Later website is the **home of the films and the world around them**.

It should not feel like:

- a YouTube creator landing page
- a travel blog
- a personal résumé
- a tourism website
- a SaaS template with vlog content dropped into it

It should feel like:

**a quiet editorial archive of places, movement and ordinary life.**

The experience should be:

**visual first  
fast  
calm  
clear  
human  
editorial  
slightly understated**

The website should make visitors want to watch.

It should not compete with the films.

---

# 2. Core Web Principle

## Show the place. Then provide the context.

The hierarchy is:

**Image / film**
→ **title**
→ **small context**
→ **action**

Not:

navigation  
→ introduction  
→ branding  
→ explanation  
→ finally the film

The work comes first.

---

# 3. Website Goals

The site has four jobs.

### 1. Introduce One Place Later

A new visitor should understand the tone quickly without reading a manifesto.

### 2. Make films easy to discover

Recent and representative films should be immediately visible.

### 3. Give the channel a permanent home

YouTube is distribution.

The website is the archive and identity.

### 4. Create continuity

Korea, Europe, home life and travel should feel like parts of the same world.

---

# 4. UX Principles

## Quiet interface

The UI should recede behind the photography and film stills.

## Low cognitive load

Do not make visitors choose between twelve categories.

## Familiar interactions

Links should look clickable.

Navigation should behave normally.

Scrolling should behave normally.

No experimental UX simply to appear creative.

## Content before chrome

The page should contain more imagery and editorial content than visible interface.

## Restraint creates identity

One distinctive interaction repeated carefully is stronger than ten visual effects.

---

# 5. Information Architecture

Launch with only what is necessary.

```text
/
├── Films
│   └── /films/[slug]
├── About
└── YouTube ↗
```

## Navigation

**One Place Later**

Films  
About  
YouTube ↗

That is enough.

Do not launch with:

Journal  
Gear  
Newsletter  
Shop  
Korea Guide  
France Guide  
Resources  
Categories  
Tags  
Search

unless actual content eventually justifies them.

---

# 6. Homepage Structure

Recommended homepage:

```text
HEADER

LATEST FILM
large visual
title
one-line description
Watch film →

RECENT FILMS
editorial grid

SHORT BRAND STATEMENT
Ordinary life, noticed in motion.

SELECTED / FEATURED FILMS
only if enough content exists

ABOUT
small portrait or environmental image
short paragraph
About →

FOOTER
```

Do not create a giant introductory hero saying:

**WELCOME TO ONE PLACE LATER**

The latest film should be the hero.

---

# 7. Film Page Structure

Each film gets a permanent page.

Recommended structure:

```text
Film title

Location · Date
Short editorial introduction

16:9 film / YouTube player

Optional short note or story context

Selected stills

Previous film ←     One place later →
```

## Signature navigation

The next-film interaction may use:

**One place later →**

This is one of the few places where the channel name becomes interface language.

Use it naturally.

Do not turn every button into a variation of the name.

---

# 8. Visual Direction

The website should feel:

**editorial rather than app-like**

Think:

film journal  
independent magazine  
photographic essay  
quiet contemporary publication

Not:

rounded dashboard cards  
floating glass panels  
gradient blobs  
oversized pills  
neon gradients  
feature grids  
startup landing-page UI

---

# 9. Design Personality

Translate the brand personality into UI.

## Warm

Warm paper surfaces rather than clinical white.

Real photography.

Comfortable spacing.

## Observant

Details and captions matter.

Metadata is useful but subtle.

## Intelligent

Strong hierarchy.

No decorative complexity.

## Dry

Copy can occasionally carry understated humour.

UI itself should not perform jokes.

## Evocative

Photography creates emotion.

CSS does not need to.

---

# 10. Colour System

## Core palette

### Carbon

```css
#1A1A18
```

Primary text and dark surfaces.

### Paper

```css
#F2EFE7
```

Primary background.

### Paper Light

```css
#F8F5EF
```

Subtle raised or alternate surface.

### Stone

```css
#77736C
```

Secondary information.

### Stone Dark

```css
#57544F
```

Readable muted copy.

### Route Red

```css
#C95C43
```

Brand accent.

### Route Red Dark

```css
#923D2D
```

Interactive or text use where stronger contrast is required.

---

# 11. Colour Behaviour

Default experience:

**Paper background + Carbon type**

Route Red is punctuation.

Use it for:

- route markers
- arrows
- small active states
- selected metadata
- occasional rules
- focus accents
- tiny editorial details

Do not use it for:

- large backgrounds
- entire headings
- long paragraphs
- every button
- decorative gradients

The accent should feel discovered rather than sprayed across the interface.

---

# 12. Semantic Colour Tokens

Never write palette values directly throughout components.

Use semantic variables.

```css
:root {
  --color-bg: #f2efe7;
  --color-bg-soft: #f8f5ef;

  --color-text: #1a1a18;
  --color-text-muted: #57544f;

  --color-border: #d8d2c7;

  --color-accent: #c95c43;
  --color-accent-strong: #923d2d;

  --color-surface-dark: #1a1a18;
  --color-text-on-dark: #f2efe7;
}
```

Components should ask for:

`--color-text`

not:

`#1A1A18`

This makes future brand refinement inexpensive.

---

# 13. Dark Mode

Do **not** add a dark-mode toggle at launch.

It adds interface, testing and visual decisions without improving the core experience.

One Place Later has a defined warm editorial surface.

Use occasional dark sections when the content benefits from them.

Example:

```html
<section data-surface="dark">
```

with:

```css
[data-surface="dark"] {
  color: var(--color-text-on-dark);
  background: var(--color-surface-dark);
}
```

If a full dark theme is introduced later, implement it through semantic tokens rather than rewriting components.

---

# 14. Typography

## Primary Typeface

**Pretendard Variable**

Reason:

- contemporary
- understated
- works well with Korean and Latin typography
- appropriate for both editorial and interface use

Fallback:

```css
font-family:
  "Pretendard Variable",
  "Pretendard",
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

One type family is enough.

Do not add a serif simply to make the site look editorial.

The editorial character should come from layout and typography, not font collecting.

---

# 15. Font Weights

Use only:

```text
400 Regular
500 Medium
600 SemiBold
```

Default to 400.

Use 500 for:

navigation  
metadata emphasis  
buttons  
small labels

Use 600 sparingly for major title emphasis.

Avoid heavy 700–900 display typography.

One Place Later should not shout.

---

# 16. Type Scale

Use fluid typography.

```css
:root {
  --text-xs: clamp(0.75rem, 0.72rem + 0.1vw, 0.8125rem);
  --text-sm: clamp(0.875rem, 0.84rem + 0.15vw, 0.95rem);
  --text-base: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
  --text-lg: clamp(1.2rem, 1.1rem + 0.45vw, 1.45rem);
  --text-xl: clamp(1.55rem, 1.3rem + 1vw, 2.1rem);
  --text-2xl: clamp(2rem, 1.55rem + 1.8vw, 3.25rem);
  --text-3xl: clamp(2.8rem, 1.8rem + 4vw, 5.75rem);
}
```

---

# 17. Typography Rules

## Body

```css
font-size: var(--text-base);
line-height: 1.6;
```

Maximum reading width:

```css
65ch
```

## Large titles

```css
font-size: var(--text-3xl);
font-weight: 500;
line-height: 0.98;
letter-spacing: -0.035em;
```

## Film titles

Medium weight.

Never all caps.

## Metadata

Small.

Quiet.

Slight letter spacing is acceptable.

## Uppercase

Reserve for tiny interface labels only.

Example:

```text
LATEST FILM
SEOUL · AUGUST 2026
```

Do not uppercase titles or paragraphs.

---

# 18. Spacing System

Use a small intentional scale.

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: clamp(2.5rem, 5vw, 4rem);
  --space-8: clamp(4rem, 8vw, 7rem);
  --space-9: clamp(6rem, 12vw, 11rem);
}
```

Prefer generous vertical rhythm.

Do not compensate for weak hierarchy with extra boxes.

---

# 19. Layout System

Use three primary content widths.

```css
:root {
  --width-copy: 46rem;
  --width-content: 72rem;
  --width-page: 90rem;

  --gutter:
    clamp(1rem, 3vw, 2.75rem);
}
```

Standard page container:

```css
.wrapper {
  width:
    min(
      calc(100% - (var(--gutter) * 2)),
      var(--width-page)
    );

  margin-inline: auto;
}
```

Copy:

```css
.prose {
  max-width: var(--width-copy);
}
```

---

# 20. Grid

Use CSS Grid.

Desktop editorial grid:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--space-6);
}
```

Do not force every page into visible twelve-column symmetry.

The grid is infrastructure.

Visitors should not notice it.

---

# 21. Responsive Strategy

Design mobile first.

Prefer content-driven breakpoints rather than device names.

Suggested baseline breakpoints:

```css
@media (min-width: 40rem) { }
@media (min-width: 64rem) { }
@media (min-width: 90rem) { }
```

Use these only when the layout genuinely needs to change.

For reusable components, prefer container queries where appropriate rather than making every component depend on viewport width.

---

# 22. Shape Language

One Place Later is not a rounded-card brand.

Use:

```css
--radius-sm: 0.125rem;
--radius-md: 0.375rem;
--radius-media: 0.25rem;
```

Images may have a very subtle radius.

Buttons may have a small radius.

Avoid:

```text
20px cards
32px cards
pill navigation
pill tags everywhere
large floating rounded containers
```

The geometry should feel editorial and architectural.

---

# 23. Borders

Use fine borders for structure.

```css
--border-default:
  1px solid var(--color-border);
```

Good:

section separators  
metadata rules  
footer boundary  
menu separation

Avoid boxing every piece of content.

---

# 24. Shadows

Default:

**none**

Photography already provides visual depth.

If absolutely necessary:

```css
box-shadow:
  0 8px 28px rgb(26 26 24 / 0.08);
```

Use for genuinely elevated UI only.

Not for ordinary film cards.

---

# 25. The Arrow

The arrow is the primary graphic device.

```text
→
```

It represents:

movement  
continuation  
transition  
sequence  
arrival

Web uses:

```text
Watch film →
About →
YouTube ↗
One place later →
```

Do not replace every arrow with an illustrated icon.

A typographic arrow is more consistent with the editorial identity.

---

# 26. Links

Text links should remain obvious.

Default:

```css
a {
  color: inherit;
  text-decoration-color:
    color-mix(in srgb, currentColor 35%, transparent);
  text-underline-offset: 0.18em;
}
```

Navigation and image-card links may remove the underline where context clearly communicates interaction.

On hover:

- darken
- reveal underline
- move arrow very slightly

Do not animate entire paragraphs or large images dramatically.

---

# 27. Buttons

Buttons are rare.

Most navigation should use links.

## Primary button

Carbon surface.

Paper text.

```css
.button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  min-height: 2.75rem;
  padding-inline: 1rem;

  color: var(--color-text-on-dark);
  background: var(--color-text);

  border: 0;
  border-radius: var(--radius-md);

  font-weight: 500;
}
```

No gradients.

No oversized pill buttons.

No button shadows.

---

# 28. Film Cards

The film card is the primary repeated component.

Structure:

```text
[ 16:9 still ]

Location · Date

Film title
Optional one-line deck
```

The image should dominate.

The card should not have:

background panel  
border box  
shadow  
large radius  
button inside it

The entire title/image region can be the link.

---

# 29. Film Card Behaviour

Default image:

```css
aspect-ratio: 16 / 9;
object-fit: cover;
```

Hover:

- extremely subtle image scale, maximum around 1–2%
- title underline or arrow movement
- never darken the image dramatically

The hover state should indicate interactivity.

Not perform a transition reel.

---

# 30. Editorial Image Ratios

Use recurring ratios intentionally.

## Film / thumbnail

```text
16:9
```

## Environmental editorial image

```text
3:2
```

## Portrait / human detail

```text
4:5
```

## Full-width landscape

Native ratio allowed.

Do not crop every photograph into identical cards.

Variation makes the site feel editorial.

---

# 31. Image Treatment

The photography is the brand.

Do not add:

colour overlays  
heavy gradients  
fake film grain through CSS  
vignettes  
posterization  
duotones

Preserve the real environment.

The website should respect the same colour philosophy as the films:

Seoul summer can feel humid.

Winter can feel cold.

France can feel warm.

Grey weather can remain grey.

---

# 32. Video

Do not autoplay video backgrounds.

Do not autoplay sound.

Prefer:

**poster image → user intent → video**

For embedded YouTube films, use a lightweight poster-first approach where practical so the heavy player does not dominate initial page loading.

The video belongs inside the page.

It should not turn the site into a media-player interface.

---

# 33. Header

Recommended:

```text
ONE PLACE LATER                 Films  About  YouTube ↗
```

Or normal title casing:

```text
One Place Later                 Films  About  YouTube ↗
```

Preferred:

**One Place Later**

Do not over-brand the navigation.

Header:

- sticky is acceptable
- compact
- no giant logo
- no burger menu on desktop
- no animation beyond subtle state changes

Mobile:

Brand left.

Simple menu trigger right if needed.

---

# 34. Header Behaviour

The header may use:

```css
position: sticky;
top: 0;
```

As the page scrolls, allow the Paper background to remain slightly opaque.

Avoid:

disappearing/reappearing headers  
complex scroll detection  
animated resizing  
glassmorphism blur as a defining effect

The header is navigation.

Not entertainment.

---

# 35. Footer

Keep it simple.

Example:

```text
One Place Later

Seoul, South Korea

YouTube ↗
Instagram ↗

© 2026
```

A small brand line may appear:

**Ordinary life, noticed in motion.**

Do not repeat the entire About section.

---

# 36. Copy UX

Interface copy should sound like the channel.

Use:

**Watch film →**

Not:

**Click here to watch**

Use:

**More films →**

Not:

**Explore our content library**

Use:

**About**

Not:

**Discover the story behind One Place Later**

Use:

**One place later →**

where the brand connection is genuinely useful.

---

# 37. Empty States

Keep them human.

Example:

**Nothing here yet. Probably filming.**

Use dry personality very sparingly.

The website should not constantly wink at the visitor.

---

# 38. Motion Philosophy

Motion communicates:

movement  
continuity  
state change

This fits the One Place Later identity particularly well.

But movement should be restrained.

Use three speeds:

```css
:root {
  --motion-fast: 120ms;
  --motion-base: 220ms;
  --motion-slow: 450ms;

  --ease-standard:
    cubic-bezier(0.2, 0.7, 0.2, 1);
}
```

---

# 39. Allowed Motion

Good:

arrow moving 2–4px  
small opacity changes  
subtle image scale  
page crossfade  
content entering naturally  
one continuity transition between related images

Avoid:

parallax  
scroll-jacking  
cursor followers  
magnetic buttons  
tilting cards  
continuous floating animation  
large staggered entrance animations  
everything fading upward on scroll

The films move.

The interface does not need to constantly move too.

---

# 40. Reduced Motion

Motion must respect user preference.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

# 41. Accessibility Standard

Target:

**WCAG 2.2 AA**

Non-negotiable:

- semantic HTML
- keyboard navigation
- visible focus
- sufficient text contrast
- meaningful alternative text
- heading hierarchy
- skip link
- labelled controls
- no information communicated through colour alone
- reduced-motion support
- comfortable touch targets

Body text and backgrounds should meet at least the WCAG AA minimum contrast requirement.

Route Red is therefore an accent first, not a default small-text colour.

---

# 42. Focus Style

Never remove outlines without replacing them.

```css
:focus-visible {
  outline: 3px solid var(--color-accent-strong);
  outline-offset: 3px;
}
```

On dark surfaces:

```css
[data-surface="dark"] :focus-visible {
  outline-color: var(--color-text-on-dark);
}
```

Focus should be obvious.

Not aesthetically hidden.

---

# 43. HTML Semantics

Prefer:

```html
<header>
<nav>
<main>
<article>
<section>
<figure>
<figcaption>
<footer>
```

Film entries should generally be `<article>` elements.

Navigation lists should be actual lists.

Buttons perform actions.

Links navigate.

Do not use clickable `<div>` elements.

---

# 44. Astro Development Philosophy

The site is primarily content.

Therefore:

## Astro first

Use `.astro` components for the majority of the interface.

## HTML first

Render useful HTML before adding JavaScript.

## CSS first

Use native CSS for layout, interaction and responsive behaviour.

## JavaScript only when behaviour requires it

Do not hydrate components simply because a framework is available.

---

# 45. CSS Architecture

Use:

**global tokens + global foundations + scoped component CSS**

Recommended files:

```text
src/styles/
├── tokens.css
├── global.css
└── utilities.css
```

Astro component-specific styles live inside their respective `.astro` components.

Example:

```astro
<style>
  .film-card {
    /* local component rules */
  }
</style>
```

Keep component selectors shallow.

Astro already provides component scoping.

Do not recreate CSS Modules/BEM complexity unless needed.

---

# 46. Cascade Layers

Global CSS can use explicit cascade layers:

```css
@layer reset, tokens, base, layout, utilities;
```

Example:

```css
@layer reset {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  p,
  figure {
    margin: 0;
  }
}

@layer tokens {
  :root {
    /* tokens */
  }
}

@layer base {
  body {
    background: var(--color-bg);
    color: var(--color-text);
  }
}

@layer utilities {
  .u-visually-hidden {
    /* accessibility utility */
  }
}
```

Do not build a giant utility framework.

---

# 47. CSS Naming

Because Astro styles are scoped, component classes can remain simple.

Good:

```css
.card {}
.image {}
.meta {}
.title {}
```

Global layout classes:

```css
.l-wrapper {}
.l-stack {}
.l-cluster {}
```

Utilities:

```css
.u-visually-hidden {}
.u-no-wrap {}
```

Component variants should preferably use data attributes:

```html
<section data-surface="dark">
```

or:

```html
<FilmCard data-size="featured" />
```

Avoid:

```text
card-wrapper-container-inner-v2
```

---

# 48. CSS Tokens

Recommended starter system:

```css
@layer tokens {
  :root {
    /* Colour */
    --color-bg: #f2efe7;
    --color-bg-soft: #f8f5ef;

    --color-text: #1a1a18;
    --color-text-muted: #57544f;

    --color-border: #d8d2c7;

    --color-accent: #c95c43;
    --color-accent-strong: #923d2d;

    --color-surface-dark: #1a1a18;
    --color-text-on-dark: #f2efe7;

    /* Typography */
    --font-sans:
      "Pretendard Variable",
      "Pretendard",
      Inter,
      ui-sans-serif,
      system-ui,
      sans-serif;

    --text-xs: clamp(.75rem, .72rem + .1vw, .8125rem);
    --text-sm: clamp(.875rem, .84rem + .15vw, .95rem);
    --text-base: clamp(1rem, .96rem + .2vw, 1.125rem);
    --text-lg: clamp(1.2rem, 1.1rem + .45vw, 1.45rem);
    --text-xl: clamp(1.55rem, 1.3rem + 1vw, 2.1rem);
    --text-2xl: clamp(2rem, 1.55rem + 1.8vw, 3.25rem);
    --text-3xl: clamp(2.8rem, 1.8rem + 4vw, 5.75rem);

    /* Spacing */
    --space-1: .25rem;
    --space-2: .5rem;
    --space-3: .75rem;
    --space-4: 1rem;
    --space-5: 1.5rem;
    --space-6: 2rem;
    --space-7: clamp(2.5rem, 5vw, 4rem);
    --space-8: clamp(4rem, 8vw, 7rem);
    --space-9: clamp(6rem, 12vw, 11rem);

    /* Width */
    --width-copy: 46rem;
    --width-content: 72rem;
    --width-page: 90rem;
    --gutter: clamp(1rem, 3vw, 2.75rem);

    /* Shape */
    --radius-sm: .125rem;
    --radius-md: .375rem;
    --radius-media: .25rem;

    /* Motion */
    --motion-fast: 120ms;
    --motion-base: 220ms;
    --motion-slow: 450ms;

    --ease-standard:
      cubic-bezier(.2, .7, .2, 1);
  }
}
```

This file is the main visual source of truth.

---

# 49. Global CSS

Recommended foundation:

```css
@layer reset, tokens, base, layout, utilities;

@layer reset {
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    text-size-adjust: 100%;
  }

  body,
  h1,
  h2,
  h3,
  p,
  figure,
  blockquote {
    margin: 0;
  }

  img,
  picture,
  video,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }
}

@layer base {
  html {
    background: var(--color-bg);
    color: var(--color-text);
  }

  body {
    min-height: 100vh;
    font-family: var(--font-sans);
    font-size: var(--text-base);
    line-height: 1.6;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3 {
    font-weight: 500;
    line-height: 1.05;
    text-wrap: balance;
  }

  p {
    text-wrap: pretty;
  }

  a {
    color: inherit;
  }

  ::selection {
    color: var(--color-bg);
    background: var(--color-text);
  }
}
```

---

# 50. Astro Project Structure

Recommended:

```text
src/
├── assets/
│   ├── images/
│   └── fonts/
│
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── FilmCard.astro
│   ├── FilmGrid.astro
│   ├── FilmMeta.astro
│   ├── ArrowLink.astro
│   ├── Picture.astro
│   └── YouTubeEmbed.astro
│
├── data/
│   └── films/
│
├── layouts/
│   ├── BaseLayout.astro
│   └── FilmLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── about.astro
│   └── films/
│       ├── index.astro
│       └── [slug].astro
│
├── styles/
│   ├── tokens.css
│   ├── global.css
│   └── utilities.css
│
└── content.config.ts
```

Keep the architecture boring.

Boring architecture gives the creative layer room to be interesting.

---

# 51. Base Layout

Global CSS belongs at the layout level.

Example:

```astro
---
import "../styles/tokens.css";
import "../styles/global.css";
import "../styles/utilities.css";

import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";

interface Props {
  title: string;
  description?: string;
}

const {
  title,
  description = "Ordinary life, noticed in motion."
} = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width"
    />

    <title>{title}</title>
    <meta
      name="description"
      content={description}
    />
  </head>

  <body>
    <a class="u-skip-link" href="#main">
      Skip to content
    </a>

    <Header />

    <main id="main">
      <slot />
    </main>

    <Footer />
  </body>
</html>
```

---

# 52. Film Content Model

Films should be content, not hard-coded page markup.

Suggested fields:

```text
title
slug
date
location
country
description
youtubeId
duration
cover
coverAlt
featured
draft
```

Optional:

```text
coordinates
chapter
relatedFilms
gallery
```

Do not invent thirty metadata fields before they are needed.

---

# 53. Content Collection Shape

Conceptually:

```ts
{
  title: string;
  date: Date;
  location: string;
  country: string;
  description: string;
  youtubeId: string;
  duration?: string;
  cover: Image;
  coverAlt: string;
  featured?: boolean;
  draft?: boolean;
}
```

Content should remain editable independently of component implementation.

---

# 54. Astro Assets

Use Astro's image pipeline for site-owned imagery.

Prefer:

```astro
---
import { Image } from "astro:assets";
import cover from "../assets/images/film-cover.jpg";
---

<Image
  src={cover}
  alt="Cycling beside the Han River in Seoul"
/>
```

Avoid putting every image into `/public` simply for convenience.

Store editable site assets in `src/assets` when they should participate in the asset pipeline.

---

# 55. Image Alt Text

Alt text describes the meaningful visual information.

Good:

**Cycling along the Han River with Seoul apartment towers behind the path**

Weak:

**Image**

Weak:

**One Place Later cinematic Seoul lifestyle travel vlog thumbnail**

Do not turn alt text into SEO copy.

Decorative images should be treated as decorative.

---

# 56. Fonts in Astro

If using the selected font through the Astro font system, expose it through a CSS variable and let the design tokens consume that variable.

Conceptually:

```css
--font-sans:
  var(--font-pretendard),
  system-ui,
  sans-serif;
```

Load only the weights actually used.

For this site:

```text
400
500
600
```

Do not ship five unused weights.

---

# 57. JavaScript Rule

Default:

**no client JavaScript**

Add it only for a real interaction.

Good reasons:

mobile navigation  
video consent/loading interaction  
future filtering  
small progressive enhancement

Weak reasons:

hover effects  
simple disclosure  
layout  
scroll animation  
typography  
responsive behaviour

Modern CSS and HTML should handle those where possible.

---

# 58. Framework Components

Do not add React, Vue or Svelte just because Astro supports them.

If a future feature genuinely benefits from a framework component, hydrate it deliberately.

The rest of the page should remain normal Astro-rendered HTML.

This keeps the implementation aligned with the brand:

quiet  
fast  
purposeful

---

# 59. View Transitions

View transitions are optional.

If used, limit the brand language to:

### Page fade

Very restrained.

### Shared film image

The film thumbnail may visually continue into its detail page.

That transition maps naturally to the brand idea:

**one state → another**

Do not animate:

navigation labels  
every paragraph  
footer  
random cards  
every page element

The transition should communicate continuity rather than advertise the framework.

---

# 60. Performance Principles

Priority order:

## 1. Useful HTML quickly

## 2. Optimized imagery

## 3. Minimal font payload

## 4. Minimal JavaScript

## 5. Third-party content only when necessary

Especially avoid:

autoplay background video  
multiple YouTube players on listing pages  
large JS animation libraries  
unnecessary analytics scripts  
huge font families  
oversized original photographs

A beautiful site that feels slow is off-brand.

---

# 61. YouTube Integration

On index pages:

show a site-owned poster image.

Do not instantiate multiple full YouTube players.

On film pages:

use one player.

Prefer lazy or click-to-load behaviour if practical.

External links to YouTube should remain clearly identifiable:

**Watch on YouTube ↗**

---

# 62. SEO Structure

Every page should have:

unique `<title>`

unique meta description

canonical URL

Open Graph title

Open Graph description

Open Graph image

meaningful document headings

Film pages should use the actual film title.

Do not stuff repetitive phrases such as:

```text
Korea vlog Seoul vlog cinematic vlog lifestyle vlog...
```

into visible page copy.

Brand clarity beats keyword stuffing.

---

# 63. Page Titles

Suggested structure:

Homepage:

```text
One Place Later
```

Film:

```text
Escaping Gangnam Without Leaving Seoul | One Place Later
```

Films archive:

```text
Films | One Place Later
```

About:

```text
About | One Place Later
```

---

# 64. URL Design

Keep URLs human.

Good:

```text
/films/escaping-gangnam
/films/seoul-after-work
/about
```

Avoid:

```text
/blog/category/korea/vlog/post-001
/watch?vlog_id=234
/content/2026/08/17/...
```

URLs should survive future redesigns.

---

# 65. Responsive Film Grid

Mobile:

```text
1 column
```

Medium:

```text
2 columns
```

Wide:

allow selective editorial asymmetry.

For example:

```text
featured item: 7 columns
secondary item: 5 columns
```

Not every section needs identical cards.

Use asymmetry deliberately.

Never let it become a Pinterest masonry wall.

---

# 66. Loading States

Avoid skeleton interfaces for statically available content.

The page should render actual content.

For deferred media:

use the film poster itself as the loading state.

Do not show generic grey shimmer blocks unless genuinely necessary.

---

# 67. Error Pages

404 copy can carry a little personality.

Example:

## One place too far.

**That page isn't here.**

**Back home →**

Keep the joke short.

The recovery action matters more than the line.

---

# 68. Mobile Experience

Mobile is not the reduced version of the desktop site.

It is likely one of the primary viewing contexts.

Priorities:

large film imagery  
comfortable title size  
generous touch targets  
minimal header  
no hover-dependent meaning  
fast media loading  
no horizontal overflow  
no miniature metadata

Keep the site composed rather than cramped.

---

# 69. Things We Explicitly Do Not Build

Unless a real future need appears:

- custom cursor
- splash screen
- intro animation
- loading percentage
- horizontal-scroll site
- scroll hijacking
- parallax hero
- autoplay audio
- background video
- floating social dock
- elaborate dropdown navigation
- infinite scroll
- carousels
- testimonial cards
- tag clouds
- glassmorphism
- neumorphism
- giant rounded containers
- theme toggle
- animated logo
- fake film grain interface layer

Restraint is not missing functionality.

It is the design.

---

# 70. Accessibility QA

Before release, verify:

- keyboard can reach every interaction
- tab order follows visual order
- focus state is always visible
- skip link works
- headings form a logical hierarchy
- images have correct alt treatment
- embedded video has an accessible title
- controls have names
- body text meets contrast requirements
- muted text still meets contrast requirements
- interface does not rely only on Route Red
- reduced motion removes unnecessary animation
- page works at large text zoom
- landscape mobile does not break
- no horizontal scrolling is introduced accidentally

---

# 71. Responsive QA

Test at minimum:

```text
320px
375px
430px
768px
1024px
1440px
1920px
```

But fix layouts based on when the design breaks, not based on named devices.

Test real content.

A card with:

**When the Holiday Finally Slows Down**

is more useful than testing:

**Sample Title**

---

# 72. Content QA

Before publishing a film page:

- title is correct
- date is correct
- location is correct
- description adds context rather than repeating the title
- poster works at mobile size
- alt text describes the image
- YouTube ID is correct
- thumbnail crop does not hide the creator
- metadata is concise
- next/previous film links work
- social preview uses a strong image

---

# 73. Development QA

Before production:

```text
No console errors
No broken internal links
No missing image dimensions
No accidental layout shift
No unnecessary client hydration
No unused large assets
No duplicate page titles
No inaccessible controls
No forgotten draft content
No localhost URLs
```

---

# 74. Brand QA

Ask five questions.

## Does the footage still dominate?

If not, simplify the UI.

## Does it feel like an editorial home rather than a creator template?

If not, remove components.

## Is the Route Red behaving as punctuation?

If not, reduce it.

## Is movement purposeful?

If not, remove animation.

## Could this still work if the next film were in Seoul, France or somewhere entirely new?

If yes, the system is doing its job.

---

# 75. Astro Source of Truth

The recommended implementation hierarchy is:

```text
TOKENS
↓
GLOBAL FOUNDATIONS
↓
LAYOUTS
↓
ASTRO COMPONENTS
↓
CONTENT
↓
OPTIONAL INTERACTION
```

Not:

```text
PLUGIN
↓
THEME
↓
UTILITY FRAMEWORK
↓
COMPONENT LIBRARY
↓
BRAND
```

The brand should determine the implementation.

The implementation should not determine the brand.

---

# 76. Core Component Set

Build these first:

```text
BaseLayout
Header
Footer
Wrapper
FilmCard
FilmGrid
FilmMeta
ArrowLink
YouTubeEmbed
```

Then stop.

Only add another abstraction after the site has demonstrated that it needs one.

---

# 77. Design Tokens Are Locked

The following form the initial web design system:

### Colour

Paper  
Carbon  
Stone  
Route Red

### Type

Pretendard Variable  
400 / 500 / 600

### Geometry

Mostly square  
subtle radius  
fine rules  
no card-heavy UI

### Spacing

Generous  
fluid  
editorial

### Motion

Subtle  
directional  
rare

### Graphic language

**→**

### Photography

Natural  
unfiltered by UI  
environment first

---

# 78. Web Personality in One Screen

A One Place Later page should ideally contain:

**one strong image**

**one strong title**

a little context

a little space

and something that takes you somewhere else:

**→**

That is the interface.

---

# 79. Implementation Rule

When deciding whether to add something, ask:

**Does this help someone understand, experience or move through the work?**

If yes:

build it well.

If no:

leave it out.

---

# 80. North Star

## The website should feel like One Place Later before the visitor has read the words “One Place Later.”

The identity should come from:

pace  
space  
imagery  
restraint  
movement  
language  
detail

Not decorative branding.