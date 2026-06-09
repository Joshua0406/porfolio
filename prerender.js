// prerender.js — generates per-route HTML files with page-specific SEO metadata.
// Run after build.js. Uses only Node's built-in fs and path — no extra dependencies.
//
// Replaces the block between <!-- SEO:START --> and <!-- SEO:END --> in index.html
// and writes each route to <route>/index.html (cleanUrls-compatible).

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.plsxou.com';
const DEFAULT_IMAGE = BASE_URL + '/assets/og-cover.png';
const AUTHOR = { '@type': 'Person', 'name': 'Joshua Lee', 'url': BASE_URL + '/' };
const MARKER_START = '<!-- SEO:START -->';
const MARKER_END   = '<!-- SEO:END -->';

const ROUTES = [
  {
    route: '/',
    title:         'Joshua Lee — UX Researcher & Visual Designer · Portfolio',
    description:   'Portfolio of Joshua Lee, a UX researcher and visual designer at the University of Twente. UX research, usability testing, and visual design case studies.',
    ogTitle:       'Joshua Lee — UX Researcher & Visual Designer',
    ogDescription: 'Portfolio of Joshua Lee, a UX researcher and visual designer at the University of Twente. UX research, usability testing, and visual design case studies.',
  },
  {
    route: '/about',
    title:         'About — Joshua Lee · UX Researcher & Visual Designer',
    description:   'Joshua Lee — BSc Communication Science (University of Twente). Background, education, skills, and contact. Available for a UX research or design internship from August 2026.',
    ogTitle:       'About — Joshua Lee · UX Researcher & Visual Designer',
    ogDescription: 'Joshua Lee — BSc Communication Science (University of Twente). Background, education, skills, and contact. Available for a UX research or design internship from August 2026.',
  },
  {
    route: '/brick',
    title:         'Brick — A Usability Study & Redesign of a Gamified Screen-Time App · Joshua Lee',
    description:   'A 10-week UX research and usability study of Brick, a gamified screen-time app. Think-aloud testing with 6 users and 14 prioritised design recommendations.',
    ogTitle:       'Brick — A Usability Study & Redesign of a Gamified Screen-Time App · Joshua Lee',
    ogDescription: 'A 10-week UX research and usability study of Brick, a gamified screen-time app. Think-aloud testing with 6 users and 14 prioritised design recommendations.',
    image:         BASE_URL + '/assets/og-brick.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': 'Brick — A Usability Study & Redesign of a Gamified Screen-Time App',
      'url': BASE_URL + '/brick',
      'description': 'A 10-week UX research and usability study redesigning Brick, a gamified screen-time app. Think-aloud testing with 6 users and 14 prioritised design recommendations.',
      'author': AUTHOR,
      'keywords': 'UX Research, Usability Testing, Gamified App, Screen-Time App, Think-Aloud Testing, Qualitative Research, UX Design, Joshua Lee',
    },
  },
  {
    route: '/desertification',
    title:         'Into the Desert — Content Strategy & Campaign Design for a Desertification Awareness Project · Joshua Lee',
    description:   'Desertification awareness campaign by Joshua Lee — content strategy, art direction, and visual communication for Commonland × Viper, targeting Dutch 18–34s.',
    ogTitle:       'Into the Desert — Content Strategy & Campaign Design · Joshua Lee',
    ogDescription: 'Desertification awareness campaign by Joshua Lee — content strategy, art direction, and visual communication for Commonland × Viper, targeting Dutch 18–34s.',
    image:         BASE_URL + '/assets/og-desertification.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': 'Into the Desert — Content Strategy & Campaign Design for a Desertification Awareness Project',
      'url': BASE_URL + '/desertification',
      'description': 'Theory-driven awareness campaign on desertification for Commonland × Viper — content strategy, art direction, and visual communication targeting Dutch 18–34s.',
      'author': AUTHOR,
      'keywords': 'Content Strategy, Campaign Design, Visual Communication, Art Direction, Desertification Awareness, Climate Communication, Joshua Lee',
    },
  },
  {
    route: '/supermarket',
    title:         'VR Supermarket — Behavioural Science Research in Virtual Reality · Joshua Lee',
    description:   'Between-subjects VR experiment testing social nudging in a Unity supermarket — behavioural science research, N=50, R statistical analysis by Joshua Lee.',
    ogTitle:       'VR Supermarket — Behavioural Science Research in Virtual Reality · Joshua Lee',
    ogDescription: 'Between-subjects VR experiment testing social nudging in a Unity supermarket — behavioural science research, N=50, R statistical analysis by Joshua Lee.',
    image:         BASE_URL + '/assets/og-supermarket.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': 'VR Supermarket — Behavioural Science Research in Virtual Reality',
      'url': BASE_URL + '/supermarket',
      'description': 'Between-subjects VR experiment (N=50) testing whether virtual crowd presence nudges food choices in a Unity supermarket. Behavioural science and R statistical analysis.',
      'author': AUTHOR,
      'keywords': 'Behavioural Science, VR Research, Virtual Reality, Unity, Consumer Behaviour, Social Nudging, Statistical Analysis, Joshua Lee',
    },
  },
  {
    route: '/kns',
    title:         "Katana N' Samurai — Visual Design, Branding & Community Management · Joshua Lee",
    description:   "Visual identity and brand design for Katana N' Samurai — logo system, colour palette, social assets, and launch materials by visual designer Joshua Lee.",
    ogTitle:       "Katana N' Samurai — Visual Design, Branding & Community Management · Joshua Lee",
    ogDescription: "Visual identity and brand design for Katana N' Samurai — logo system, colour palette, social assets, and launch materials by visual designer Joshua Lee.",
    image:         BASE_URL + '/assets/og-kns.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': "Katana N' Samurai — Visual Design, Branding & Community Management",
      'url': BASE_URL + '/kns',
      'description': "Full visual identity and brand design for Katana N' Samurai — logo system, colour palette, social media assets, and community launch materials.",
      'author': AUTHOR,
      'keywords': 'Brand Design, Visual Identity, Logo Design, Brand System, Social Media Design, Community Management, Joshua Lee',
    },
  },
  {
    route: '/canvas',
    title:         'Canvas LMS — UX Research & UI Redesign with Usability Testing · Joshua Lee',
    description:   'Self-initiated UX case study redesigning Canvas LMS mobile to surface submission state — 6-participant research, Figma prototype, and usability testing.',
    ogTitle:       'Canvas LMS — UX Research & UI Redesign with Usability Testing · Joshua Lee',
    ogDescription: 'Self-initiated UX case study redesigning Canvas LMS mobile to surface submission state — 6-participant research, Figma prototype, and usability testing.',
    image:         BASE_URL + '/assets/og-canvas.jpg',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': 'Canvas LMS — UX Research & UI Redesign with Usability Testing',
      'url': BASE_URL + '/canvas',
      'description': "Self-initiated UX case study redesigning Canvas LMS mobile's assignment list to surface submission state — 6-participant research, Figma prototype, and usability testing.",
      'author': AUTHOR,
      'keywords': 'UX Research, Canvas LMS, Mobile UI Redesign, Usability Testing, Figma Prototype, UX Case Study, Joshua Lee',
    },
  },
  {
    route: '/playground',
    title:         'Playground — Selected Work · Joshua Lee',
    description:   'Miscellaneous and experimental visual work by Joshua Lee — motion, illustration, and design explorations.',
    ogTitle:       'Playground — Selected Work · Joshua Lee',
    ogDescription: 'Miscellaneous and experimental visual work by Joshua Lee — motion, illustration, and design explorations.',
  },
];

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function buildSeoBlock(r) {
  const url = BASE_URL + r.route;
  const img = r.image || DEFAULT_IMAGE;
  const imgType = img.endsWith('.jpg') || img.endsWith('.jpeg') ? 'image/jpeg' : 'image/png';
  const lines = [
    MARKER_START,
    '  <title>' + esc(r.title) + '</title>',
    '  <meta name="description" content="' + esc(r.description) + '">',
    '  <link rel="canonical" href="' + url + '">',
    '  <meta property="og:url" content="' + url + '">',
    '  <meta property="og:title" content="' + esc(r.ogTitle) + '">',
    '  <meta property="og:description" content="' + esc(r.ogDescription) + '">',
    '  <meta property="og:image" content="' + img + '">',
    '  <meta property="og:image:secure_url" content="' + img + '">',
    '  <meta property="og:image:type" content="' + imgType + '">',
    '  <meta property="og:image:width" content="1200">',
    '  <meta property="og:image:height" content="630">',
    '  <meta property="og:image:alt" content="' + esc(r.ogTitle) + '">',
    '  <meta name="twitter:url" content="' + url + '">',
    '  <meta name="twitter:title" content="' + esc(r.ogTitle) + '">',
    '  <meta name="twitter:description" content="' + esc(r.description) + '">',
    '  <meta name="twitter:image" content="' + img + '">',
    '  <meta name="twitter:image:alt" content="' + esc(r.ogTitle) + '">',
  ];
  if (r.jsonLd) {
    lines.push('  <script type="application/ld+json">');
    lines.push('  ' + JSON.stringify(r.jsonLd));
    lines.push('  </script>');
  }
  lines.push(MARKER_END);
  return lines.join('\n');
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
    process.stdout.write('  /  -> index.html\n');
  } else {
    const dir = r.route.slice(1);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    process.stdout.write('  ' + r.route + '  -> ' + dir + '/index.html\n');
  }
  count++;
}

process.stdout.write('prerender: ' + count + ' pages generated.\n');
