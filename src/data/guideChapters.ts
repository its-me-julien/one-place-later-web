export interface GuideSection {
  number: number;
  id: string;
  title: string;
}

export interface GuideChapter {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  sections: GuideSection[];
}

const sections = (items: Array<[number, string, string]>): GuideSection[] =>
  items.map(([number, id, title]) => ({ number, id, title }));

export const guideChapters: GuideChapter[] = [
  {
    slug: 'identity',
    title: 'Identity',
    shortTitle: 'Identity',
    summary: 'The fixed perspective, home base and relationship between ordinary life and travel.',
    sections: sections([
      [1, '1-channel-identity', 'Channel Identity'],
      [2, '2-the-idea-behind-one-place-later', 'The Idea Behind One Place Later'],
      [3, '3-the-channel-perspective', 'The Channel Perspective'],
      [4, '4-what-makes-the-channel-different', 'What Makes the Channel Different'],
      [5, '5-the-creator-perspective', 'The Creator Perspective'],
      [6, '6-home-and-travel', 'Home and Travel'],
    ]),
  },
  {
    slug: 'story',
    title: 'Story',
    shortTitle: 'Story',
    summary: 'The directing questions, underlying meaning and change that give each film a reason to exist.',
    sections: sections([
      [7, '7-the-fundamental-story-rule', 'The Fundamental Story Rule'],
      [8, '8-the-directing-line', 'The Directing Line'],
      [9, '9-the-surface-and-underneath-rule', 'The Surface and Underneath Rule'],
      [10, '10-the-change-of-state', 'The Change of State'],
      [11, '11-the-story-shape', 'The Story Shape'],
      [12, '12-the-first-minute', 'The First Minute'],
      [13, '13-creator-presence', 'Creator Presence'],
    ]),
  },
  {
    slug: 'filming',
    title: 'Filming',
    shortTitle: 'Filming',
    summary: 'The visual grammar, movement, perspectives, camera roles and technical restraint of the films.',
    sections: sections([
      [14, '14-core-visual-grammar', 'Core Visual Grammar'],
      [15, '15-movement-as-storytelling', 'Movement as Storytelling'],
      [16, '16-perspective-strategy', 'Perspective Strategy'],
      [17, '17-camera-roles', 'Camera Roles'],
      [18, '18-technical-style', 'Technical Style'],
    ]),
  },
  {
    slug: 'sound-language',
    title: 'Sound & Language',
    shortTitle: 'Sound & Language',
    summary: 'How sound, text, narration, humour and cultural observation make the channel feel authored.',
    sections: sections([
      [19, '19-sound-philosophy', 'Sound Philosophy'],
      [20, '20-music', 'Music'],
      [21, '21-sound-bridges', 'Sound Bridges'],
      [22, '22-on-screen-text', 'On-Screen Text'],
      [23, '23-brand-graphic-language', 'Brand Graphic Language'],
      [24, '24-narration-voice', 'Narration Voice'],
      [25, '25-one-place-later-language', 'One Place Later Language'],
      [26, '26-humour', 'Humour'],
      [27, '27-cultural-observation', 'Cultural Observation'],
    ]),
  },
  {
    slug: 'editing-continuity',
    title: 'Editing & Continuity',
    shortTitle: 'Editing',
    summary: 'Rhythm, transitions and recurring devices that connect places without becoming a formula.',
    sections: sections([
      [28, '28-editing-rhythm', 'Editing Rhythm'],
      [29, '29-transitions', 'Transitions'],
      [30, '30-location-geography-and-time', 'Location, Geography and Time'],
      [31, '31-timelapse', 'Timelapse'],
      [32, '32-endings', 'Endings'],
      [33, '33-return-journeys', 'Return Journeys'],
      [34, '34-recurring-objects', 'Recurring Objects'],
      [35, '35-recurring-themes', 'Recurring Themes'],
    ]),
  },
  {
    slug: 'fieldwork-travel',
    title: 'Fieldwork & Travel',
    shortTitle: 'Fieldwork',
    summary: 'Practical planning, coverage and rescue tools for filming ordinary days and longer journeys.',
    sections: sections([
      [36, '36-pre-production-brief', 'Worked Pre-Production Brief'],
      [37, '37-filming-priority', 'Filming Priority'],
      [38, '38-the-shot-test', 'The Shot Test'],
      [39, '39-the-scene-test', 'The Scene Test'],
      [40, '40-travel-coverage-rule', 'Travel Coverage Rule'],
      [41, '41-multi-week-travel', 'Multi-Week Travel'],
      [42, '42-story-rescue-and-edit-mode', 'Story Rescue and Edit Mode'],
      [43, '43-channel-editing-signature', 'Channel Editing Signature'],
    ]),
  },
  {
    slug: 'publishing',
    title: 'Publishing',
    shortTitle: 'Publishing',
    summary: 'Titles, thumbnails and channel presentation that communicate the story without overselling it.',
    sections: sections([
      [44, '44-titles', 'Titles'],
      [45, '45-thumbnails', 'Thumbnails'],
      [46, '46-title-and-thumbnail-relationship', 'Title and Thumbnail Relationship'],
      [47, '47-channel-presentation', 'Channel Presentation'],
      [48, '48-channel-description', 'Channel Description'],
      [49, '49-what-the-channel-must-not-become', 'What the Channel Must Not Become'],
      [50, '50-what-cinematic-means', 'What Cinematic Means'],
    ]),
  },
  {
    slug: 'decisions-references',
    title: 'Decisions & References',
    shortTitle: 'Decisions',
    summary: 'The hierarchy and practical references used when creative choices compete.',
    sections: sections([
      [51, '51-brand-decision-filter', 'Brand Decision Filter'],
      [52, '52-creative-hierarchy', 'Creative Hierarchy'],
      [53, '53-first-project-reference', 'First Project Reference'],
      [54, '54-european-travel-framework', 'European Travel Framework'],
      [55, '55-after-publishing', 'After Publishing'],
    ]),
  },
  {
    slug: 'working-system',
    title: 'Working System',
    shortTitle: 'Working System',
    summary: 'The reusable brief, manifesto and North Star that close the creative system.',
    sections: sections([
      [56, '56-the-one-place-later-working-brief', 'The One Place Later Working Brief'],
      [57, '57-the-one-place-later-manifesto', 'The One Place Later Manifesto'],
      [58, '58-north-star', 'North Star'],
    ]),
  },
];

export const guideBasePath = '/creative-field-guide';

export const guideChapterPath = (chapter: GuideChapter) =>
  `${guideBasePath}/${chapter.slug}/`;
