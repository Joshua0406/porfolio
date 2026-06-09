// build.js — runs after esbuild compilation.
// 1. Converts assets/ images to .webp (idempotent — skips up-to-date files)
// 2. Updates .js and .css files to reference .webp versions
// 3. Patches index.html (removes Babel runtime, rewrites .jsx -> .js)

const fs = require("fs");
const path = require("path");

// ── 1. WebP conversion ────────────────────────────────────────────────────

async function convertImages() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.log("⚠  sharp not found — skipping WebP step. Run: npm install");
    return;
  }

  const EXTS = new Set([".png", ".jpg", ".jpeg"]);
  // og-cover.png is only used in <meta> tags for social sharing — must stay PNG
  const SKIP = new Set(["og-cover.png"]);

  function walk(dir) {
    const out = [];
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) out.push(...walk(full));
      else out.push(full);
    }
    return out;
  }

  const candidates = walk("assets").filter(f => {
    const ext = path.extname(f).toLowerCase();
    return EXTS.has(ext) && !SKIP.has(path.basename(f));
  });

  let converted = 0, upToDate = 0;

  for (const src of candidates) {
    const dest = src.replace(/\.(png|jpe?g)$/i, ".webp");
    const srcMtime = fs.statSync(src).mtimeMs;

    if (fs.existsSync(dest) && fs.statSync(dest).mtimeMs >= srcMtime) {
      upToDate++;
      continue;
    }

    await sharp(src).webp({ quality: 85 }).toFile(dest);
    const origKB = Math.round(fs.statSync(src).size / 1024);
    const webpKB = Math.round(fs.statSync(dest).size / 1024);
    console.log(`  ${src.replace(/\\/g, "/")}  ${origKB} KB → ${webpKB} KB`);
    converted++;
  }

  console.log(`WebP: ${converted} converted, ${upToDate} already up to date.`);
}

// ── 2. Update file references ─────────────────────────────────────────────

function updateRefs() {
  const JS_FILES = [
    "Home.js", "BrickCase.js", "CanvasCase.js", "OtherCases.js",
    "Playground.js", "About.js", "CaseStudy.js", "components.js", "app.js",
  ];
  const CSS_FILES = ["styles.css", "brick.css", "canvas.css"];

  // og-cover.png stays as PNG — referenced in <meta og:image> for social sharing
  const KEEP = new Set(["og-cover.png"]);

  let updated = 0;

  for (const file of [...JS_FILES, ...CSS_FILES]) {
    if (!fs.existsSync(file)) continue;
    const before = fs.readFileSync(file, "utf8");

    const after = before.replace(
      /(['"`])(assets\/[^'"`]+)\.(png|jpe?g)(['"`])/gi,
      (match, q1, name, _ext, q2) => {
        if (KEEP.has(path.basename(name + "." + _ext))) return match;
        return `${q1}${name}.webp${q2}`;
      }
    );

    if (after !== before) {
      fs.writeFileSync(file, after);
      console.log(`  ${file}: .png/.jpg → .webp`);
      updated++;
    }
  }

  // Also handle CSS url() without quotes: url(assets/head.png)
  for (const file of CSS_FILES) {
    if (!fs.existsSync(file)) continue;
    const before = fs.readFileSync(file, "utf8");

    const after = before.replace(
      /url\((assets\/[^)'"]+)\.(png|jpe?g)\)/gi,
      (match, name, _ext) => {
        if (KEEP.has(path.basename(name + "." + _ext))) return match;
        return `url(${name}.webp)`;
      }
    );

    if (after !== before) {
      fs.writeFileSync(file, after);
      console.log(`  ${file}: url() .png/.jpg → .webp`);
      updated++;
    }
  }

  console.log(`Refs: ${updated} file(s) updated.`);
}

// ── 3. Patch index.html ───────────────────────────────────────────────────

function patchHtml() {
  const FILE = "index.html";
  let html = fs.readFileSync(FILE, "utf8");
  const before = html;

  html = html.replace(
    /[ \t]*<script[^>]*@babel\/standalone[^>]*><\/script>\r?\n?/g,
    ""
  );
  html = html.replace(
    /<script\s+type="text\/babel"\s+src="([^"]+)\.jsx[^"]*"><\/script>/g,
    '<script src="$1.js"></script>'
  );

  if (html === before) {
    console.log("index.html: already up to date.");
  } else {
    fs.writeFileSync(FILE, html);
    console.log("index.html: patched.");
  }
}

// ── main ──────────────────────────────────────────────────────────────────

async function main() {
  console.log("=== build ===");
  await convertImages();
  updateRefs();
  patchHtml();
}

main().catch(err => { console.error(err); process.exit(1); });
