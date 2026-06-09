// prerender.js — generates per-route HTML files with page-specific SEO metadata.
// Run after build.js. Uses only Node's built-in fs and path — no extra dependencies.
//
// Replaces the block between <!-- SEO:START --> and <!-- SEO:END --> in index.html
// and writes each route to <route>/index.html (cleanUrls-compatible).
// Also injects a visually-hidden <p> in the body for each route that has h1 set.

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.plsxou.com';
const DEFAULT_IMAGE = BASE_URL + '/assets/og-cover.png';
const TODAY = '2026-06-09';
const MARKER_START = '<!-- SEO:START -->';
const MARKER_END   = '<!-- SEO:END -->';

const AUTHOR = { '@type': 'Person', 'name': 'Joshua Lee', 'url': BASE_URL + '/' };

const PERSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': 'Joshua Lee',
  'url': BASE_URL + '/',
  'image': BASE_URL + '/assets/joshua_portrait.jpeg',
  'jobTitle': 'UX Researcher & Visual Designer',
  'description': 'UX researcher and visual designer seeking internship opportunities from August 2026.',
  'email': 'plsxou46@gmail.com',
  'address': { '@type': 'PostalAddress', 'addressLocality': 'Hengelo', 'addressCountry': 'NL' },
  'alumniOf': [
    { '@type': 'CollegeOrUniversity', 'name': 'University of Twente' },
    { '@type': 'CollegeOrUniversity', 'name': 'Minerva Art Academy' }
  ],
  'knowsAbout': ['UX Research', 'Usability Testing', 'Visual Communication', 'UI Design', 'Behavioural Science', 'Brand Design'],
  'sameAs': [
    'https://www.linkedin.com/in/joshua-lee-1576b720b/',
    'https://www.instagram.com/p1sxou/'
  ]
};

function breadcrumb(name, route) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Portfolio', 'item': BASE_URL + '/' },
      { '@type': 'ListItem', 'position': 2, 'name': name, 'item': BASE_URL + route }
    ]
  };
}

const ROUTES = [
  {
    route: '/',
    ogType: 'website',
    h1:            'Joshua Lee',
    title:         'Joshua Lee — UX Researcher & Visual Designer · Portfolio',
    description:   'Portfolio of Joshua Lee, a UX researcher and visual designer at the University of Twente. UX research, usability testing, and visual design case studies.',
    ogTitle:       'Joshua Lee — UX Researcher & Visual Designer',
    ogDescription: 'Portfolio of Joshua Lee, a UX researcher and visual designer at the University of Twente. UX research, usability testing, and visual design case studies.',
  },
  {
    route: '/about',
    ogType: 'website',
    h1:            null,
    title:         'About — Joshua Lee · UX Researcher & Visual Designer',
    description:   'Joshua Lee — BSc Communication Science, University of Twente. UX research and visual design portfolio. Open to internships from August 2026.',
    ogTitle:       'About — Joshua Lee · UX Researcher & Visual Designer',
    ogDescription: 'Joshua Lee — BSc Communication Science, University of Twente. UX research and visual design portfolio. Open to internships from August 2026.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      'dateCreated': '2025-01-01',
      'dateModified': TODAY,
      'mainEntity': PERSON_LD,
    },
  },
  {
    route: '/brick',
    ogType: 'article',
    datePublished: '2025-03-15',
    articleSection: 'UX Research',
    h1:            'Brick',
    title:         'Brick — UX Research & App Redesign · Joshua Lee',
    description:   'A 10-week UX research and usability study of Brick, a gamified screen-time app. Think-aloud testing with 6 users and 14 prioritised design recommendations.',
    ogTitle:       'Brick — UX Research & App Redesign · Joshua Lee',
    ogDescription: 'A 10-week UX research and usability study of Brick, a gamified screen-time app. Think-aloud testing with 6 users and 14 prioritised design recommendations.',
    image:         BASE_URL + '/assets/og-brick.jpg',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        'name': 'Brick — A Usability Study & Redesign of a Gamified Screen-Time App',
        'url': BASE_URL + '/brick',
        'image': BASE_URL + '/assets/og-brick.jpg',
        'datePublished': '2025-03-15',
        'dateModified': TODAY,
        'description': 'A 10-week UX research and usability study redesigning Brick, a gamified screen-time app. Think-aloud testing with 6 users and 14 prioritised design recommendations.',
        'author': AUTHOR,
        'keywords': 'UX Research, Usability Testing, Gamified App, Screen-Time App, Think-Aloud Testing, Qualitative Research, UX Design, Joshua Lee',
      },
      breadcrumb('Brick', '/brick'),
    ],
  },
  {
    route: '/desertification',
    ogType: 'article',
    datePublished: '2024-11-15',
    articleSection: 'Campaign Design',
    h1:            'Into the Desert',
    title:         'Into the Desert — Content Strategy & Campaign Design · Joshua Lee',
    description:   'Desertification awareness campaign by Joshua Lee — content strategy, art direction, and visual communication for Commonland × Viper, targeting Dutch 18–34s.',
    ogTitle:       'Into the Desert — Content Strategy & Campaign Design · Joshua Lee',
    ogDescription: 'Desertification awareness campaign by Joshua Lee — content strategy, art direction, and visual communication for Commonland × Viper, targeting Dutch 18–34s.',
    image:         BASE_URL + '/assets/og-desertification.jpg',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        'name': 'Into the Desert — Content Strategy & Campaign Design for a Desertification Awareness Project',
        'url': BASE_URL + '/desertification',
        'image': BASE_URL + '/assets/og-desertification.jpg',
        'datePublished': '2024-11-15',
        'dateModified': TODAY,
        'description': 'Theory-driven awareness campaign on desertification for Commonland × Viper — content strategy, art direction, and visual communication targeting Dutch 18–34s.',
        'author': AUTHOR,
        'keywords': 'Content Strategy, Campaign Design, Visual Communication, Art Direction, Desertification Awareness, Climate Communication, Joshua Lee',
      },
      breadcrumb('Into the Desert', '/desertification'),
    ],
  },
  {
    route: '/supermarket',
    ogType: 'article',
    datePublished: '2025-01-15',
    articleSection: 'Behavioural Science',
    h1:            'VR Supermarket',
    title:         'VR Supermarket — Behavioural Science Research · Joshua Lee',
    description:   'Between-subjects VR experiment testing social nudging in a Unity supermarket — behavioural science research, N=50, R statistical analysis by Joshua Lee.',
    ogTitle:       'VR Supermarket — Behavioural Science Research · Joshua Lee',
    ogDescription: 'Between-subjects VR experiment testing social nudging in a Unity supermarket — behavioural science research, N=50, R statistical analysis by Joshua Lee.',
    image:         BASE_URL + '/assets/og-supermarket.jpg',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        'name': 'VR Supermarket — Behavioural Science Research in Virtual Reality',
        'url': BASE_URL + '/supermarket',
        'image': BASE_URL + '/assets/og-supermarket.jpg',
        'datePublished': '2025-01-15',
        'dateModified': TODAY,
        'description': 'Between-subjects VR experiment (N=50) testing whether virtual crowd presence nudges food choices in a Unity supermarket. Behavioural science and R statistical analysis.',
        'author': AUTHOR,
        'keywords': 'Behavioural Science, VR Research, Virtual Reality, Unity, Consumer Behaviour, Social Nudging, Statistical Analysis, Joshua Lee',
      },
      breadcrumb('VR Supermarket', '/supermarket'),
    ],
  },
  {
    route: '/kns',
    ogType: 'article',
    datePublished: '2024-10-15',
    articleSection: 'Brand Design',
    h1:            "Katana N' Samurai",
    title:         "Katana N' Samurai — Visual Design & Branding · Joshua Lee",
    description:   "Visual identity and brand design for Katana N' Samurai — logo system, colour palette, social assets, and launch materials by visual designer Joshua Lee.",
    ogTitle:       "Katana N' Samurai — Visual Design & Branding · Joshua Lee",
    ogDescription: "Visual identity and brand design for Katana N' Samurai — logo system, colour palette, social assets, and launch materials by visual designer Joshua Lee.",
    image:         BASE_URL + '/assets/og-kns.jpg',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        'name': "Katana N' Samurai — Visual Design, Branding & Community Management",
        'url': BASE_URL + '/kns',
        'image': BASE_URL + '/assets/og-kns.jpg',
        'datePublished': '2024-10-15',
        'dateModified': TODAY,
        'description': "Full visual identity and brand design for Katana N' Samurai — logo system, colour palette, social media assets, and community launch materials.",
        'author': AUTHOR,
        'keywords': 'Brand Design, Visual Identity, Logo Design, Brand System, Social Media Design, Community Management, Joshua Lee',
      },
      breadcrumb("Katana N' Samurai", '/kns'),
    ],
  },
  {
    route: '/canvas',
    ogType: 'article',
    datePublished: '2025-04-15',
    articleSection: 'UX Research',
    h1:            'Canvas LMS',
    title:         'Canvas LMS — UX Research & Usability Testing · Joshua Lee',
    description:   'Self-initiated UX case study redesigning Canvas LMS mobile to surface submission state — 6-participant research, Figma prototype, and usability testing.',
    ogTitle:       'Canvas LMS — UX Research & Usability Testing · Joshua Lee',
    ogDescription: 'Self-initiated UX case study redesigning Canvas LMS mobile to surface submission state — 6-participant research, Figma prototype, and usability testing.',
    image:         BASE_URL + '/assets/og-canvas.jpg',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        'name': 'Canvas LMS — UX Research & UI Redesign with Usability Testing',
        'url': BASE_URL + '/canvas',
        'image': BASE_URL + '/assets/og-canvas.jpg',
        'datePublished': '2025-04-15',
        'dateModified': TODAY,
        'description': "Self-initiated UX case study redesigning Canvas LMS mobile's assignment list to surface submission state — 6-participant research, Figma prototype, and usability testing.",
        'author': AUTHOR,
        'keywords': 'UX Research, Canvas LMS, Mobile UI Redesign, Usability Testing, Figma Prototype, UX Case Study, Joshua Lee',
      },
      breadcrumb('Canvas LMS', '/canvas'),
    ],
  },
  {
    route: '/playground',
    ogType: 'website',
    h1:            null,
    title:         'Playground — Selected Work · Joshua Lee',
    description:   'Miscellaneous visual work by Joshua Lee — motion, illustration, typography, and creative experiments that live outside the case studies.',
    ogTitle:       'Playground — Selected Work · Joshua Lee',
    ogDescription: 'Miscellaneous visual work by Joshua Lee — motion, illustration, typography, and creative experiments that live outside the case studies.',
  },
];

function esc(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function buildSeoBlock(r) {
  const url = BASE_URL + r.route;
  const img = r.image || DEFAULT_IMAGE;
  const imgType = img.endsWith('.jpg') || img.endsWith('.jpeg') ? 'image/jpeg' : 'image/png';
  const ogType = r.ogType || 'website';
  const lines = [
    MARKER_START,
    '  <title>' + esc(r.title) + '</title>',
    '  <meta name="description" content="' + esc(r.description) + '">',
    '  <link rel="canonical" href="' + url + '">',
    '  <meta property="og:type" content="' + ogType + '">',
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

  if (ogType === 'article') {
    lines.push('  <meta property="article:author" content="https://www.linkedin.com/in/joshua-lee-1576b720b/">');
    if (r.datePublished) {
      lines.push('  <meta property="article:published_time" content="' + r.datePublished + 'T00:00:00Z">');
      lines.push('  <meta property="article:modified_time" content="' + TODAY + 'T00:00:00Z">');
    }
    if (r.articleSection) {
      lines.push('  <meta property="article:section" content="' + esc(r.articleSection) + '">');
    }
  }

  const ldItems = Array.isArray(r.jsonLd) ? r.jsonLd : r.jsonLd ? [r.jsonLd] : [];
  for (const ld of ldItems) {
    lines.push('  <script type="application/ld+json">');
    lines.push('  ' + JSON.stringify(ld));
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
  let html = template.replace(templateBlock, function () { return buildSeoBlock(r); });

  // Inject per-page static text node for crawlers — NOT an h1, so the React-rendered
  // visual heading remains the sole <h1> on the page. Idempotent: strip prior injection first.
  html = html.replace(/<p class="visually-hidden" aria-hidden="true">[^<]*<\/p>\n  /g, '');
  // also clean up any old <h1 class="visually-hidden"> injections from a previous run
  html = html.replace(/<h1 class="visually-hidden" aria-hidden="true">[^<]*<\/h1>\n  /g, '');
  if (r.h1) {
    html = html.replace(
      '<div id="app"></div>',
      '<p class="visually-hidden" aria-hidden="true">' + esc(r.h1) + '</p>\n  <div id="app"></div>'
    );
  }

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
