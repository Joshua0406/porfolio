// build.js — runs after esbuild compilation.
// Patches index.html to drop the in-browser Babel runtime and load
// the pre-compiled .js files instead of .jsx + text/babel.
// Idempotent: safe to re-run any number of times.

const fs = require("fs");
const FILE = "index.html";

let html = fs.readFileSync(FILE, "utf8");
const before = html;

// 1. Drop the Babel standalone <script> tag (and any leading whitespace).
html = html.replace(
  /[ \t]*<script[^>]*@babel\/standalone[^>]*><\/script>\r?\n?/g,
  ""
);

// 2. Rewrite each <script type="text/babel" src="X.jsx?..."> to <script src="X.js">.
html = html.replace(
  /<script\s+type="text\/babel"\s+src="([^"]+)\.jsx[^"]*"><\/script>/g,
  '<script src="$1.js"></script>'
);

if (html === before) {
  console.log("index.html already up to date.");
} else {
  fs.writeFileSync(FILE, html);
  console.log("index.html patched: Babel removed, .jsx -> .js.");
}
