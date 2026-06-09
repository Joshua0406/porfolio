// prerender.js — generates per-route HTML files with page-specific SEO metadata.
// Run after build.js. Uses only Node's built-in fs and path — no extra dependencies.
//
// Replaces the block between <!-- SEO:START --> and <!-- SEO:END --> in index.html
// and writes each route to <route>/index.html (cleanUrls-compatible).

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://plsxou.com';
const DEFAULT_IMAGE = BASE_URL + '/assets/og-cover.png';
const MARKER_START = '<!-- SEO:START -->';
const MARKER_END   = '<!-- SEO:END -->';

const ROUTES = [
  {
    route: '/',
    title:         'Joshua Lee — UX Researcher & Visual Designer · Portfolio',
    description:   'UX research and visual design portfolio. Case studies in research, usability testing, campaign and brand design. Available for an internship from August 2026.',
    ogTitle:       'Joshua Lee — UX Researcher & Visual Designer',
    ogDescription: 'UX research and visual design portfolio — case studies in research, usability testing, and brand design. Available for an internship from August 2026.',
  },
  {
    route: '/about',
    title:         'About — Joshua Lee · UX Researcher & Visual Designer',
    description:   'Joshua Lee — BSc Communication Science (University of Twente). Background, education, skills, and contact. Available from August 2026.',
    ogTitle:       'About — Joshua Lee · UX Researcher & Visual Designer',
    ogDescription: 'Joshua Lee — BSc Communication Science (University of Twente). Background, education, skills, and contact. Available from August 2026.',
  },
  {
    route: '/brick',
    title:         'Brick App — UX Research & Usability Testing · Joshua Lee',
    description:   'UX research and usability testing for a merchant-first NFT loyalty platform: methods, findings, and design decisions.',
    ogTitle:       'Brick App — UX Research & Usability Testing · Joshua Lee',
    ogDescription: 'UX research and usability testing for a merchant-first NFT loyalty platform: methods, findings, and design decisions.',
  },
  {
    route: '/desertification',
    title:         'Desertification — Campaign & Visual Communication · Joshua Lee',
    description:   'A visual communication campaign on desertification — concept, art direction, and outcome.',
    ogTitle:       'Desertification — Campaign & Visual Communication · Joshua Lee',
    ogDescription: 'A visual communication campaign on desertification — concept, art direction, and outcome.',
  },
  {
    route: '/supermarket',
    title:         'VR Supermarket — Behavioural Science Study · Joshua Lee',
    description:   'A behavioural science study run in a virtual supermarket environment — design, stimuli, and results.',
    ogTitle:       'VR Supermarket — Behavioural Science Study · Joshua Lee',
    ogDescription: 'A behavioural science study run in a virtual supermarket environment — design, stimuli, and results.',
  },
  {
    route: '/kns',
    title:         "Katana N’ Samurai — Brand & Visual Identity · Joshua Lee",
    description:   "Visual identity and brand design for Katana N’ Samurai (KNS) — system, social, and launch assets.",
    ogTitle:       "Katana N’ Samurai — Brand & Visual Identity · Joshua Lee",
    ogDescription: "Visual identity and brand design for Katana N’ Samurai (KNS) — system, social, and launch assets.",
  },
  {
    route: '/canvas',
    title:         'Canvas — UX Research & Mobile Redesign · Joshua Lee',
    description:   "A self-initiated UX case study redesigning Canvas mobile’s assignment list to surface submission state — 6-participant research, Figma prototype, and usability test.",
    ogTitle:       'Canvas — UX Research & Mobile Redesign · Joshua Lee',
    ogDescription: "A self-initiated UX case study redesigning Canvas mobile’s assignment list to surface submission state — research, prototype, and usability test.",
  },
  {
    route: '/playground',
    title:         'Playground — Selected Work · Joshua Lee',
    description:   'Miscellaneous and experimental work by Joshua Lee.',
    ogTitle:       'Playground — Selected Work · Joshua Lee',
    ogDescription: 'Miscellaneous and experimental work by Joshua Lee.',
  },
];

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function buildSeoBlock(r) {
  const url = BASE_URL + r.route;
  const img = r.image || DEFAULT_IMAGE;
  return [
    MARKER_START,
    '  <title>' + esc(r.title) + '</title>',
    '  <meta name="description" content="' + esc(r.description) + '">',
    '  <link rel="canonical" href="' + url + '">',
    '  <meta property="og:url" content="' + url + '">',
    '  <meta property="og:title" content="' + esc(r.ogTitle) + '">',
    '  <meta property="og:description" content="' + esc(r.ogDescription) + '">',
    '  <meta property="og:image" content="' + img + '">',
    '  <meta property="og:image:secure_url" content="' + img + '">',
    '  <meta property="og:image:alt" content="' + esc(r.ogTitle) + '">',
    '  <meta name="twitter:url" content="' + url + '">',
    '  <meta name="twitter:title" content="' + esc(r.ogTitle) + '">',
    '  <meta name="twitter:description" content="' + esc(r.description) + '">',
    '  <meta name="twitter:image" content="' + img + '">',
    '  <meta name="twitter:image:alt" content="' + esc(r.ogTitle) + '">',
    MARKER_END,
  ].join('\n');
}

const template = fs.readFileSync('index.html', 'utf8');
const startIdx = template.indexOf(MARKER_START);
const endIdx   = template.indexOf(MARKER_END) + MARKER_END.length;

if (startIdx === -1 || endIdx < MARKER_END.length) {
  process.stderr.write('prerender: SEO markers not found in index.html — aborting.\n');
  process.exit(1);
}

const templateBlock = template.slice(startIdx, endIdx);
let count = 0;

for (const r of ROUTES) {
  const html = template.replace(templateBlock, function () { return buildSeoBlock(r); });

  if (r.route === '/') {
    fs.writeFileSync('index.html', html, 'utf8');
    process.stdout.write('  /  → index.html\n');
  } else {
    const dir = r.route.slice(1);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    process.stdout.write('  ' + r.route + '  → ' + dir + '/index.html\n');
  }
  count++;
}

process.stdout.write('prerender: ' + count + ' pages generated.\n');
