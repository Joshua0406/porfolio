const CASE_DATA = {
  brick: {
    eyebrow: "Case Study 01",
    title: "Brick",
    tags: "UX Research \xB7 UI Design \xB7 Usability Testing",
    meta: [["Role", "UX Research \xB7 UI Design"], ["Year", "2025"], ["Team", "Solo \xB7 6-week sprint"], ["Tools", "Figma \xB7 Axure \xB7 R"]],
    lead: "Brick is a focus app that physically locks distracting apps behind an NFC tag. The redesign asked a hard question: what happens when the blocking is too easy to turn off?",
    body: "Through twelve think-aloud usability sessions, the friction model was rebuilt so that disabling a block became a deliberate, slightly effortful act \u2014 without tipping into punishment.",
    callout: "The blocking only works if turning it off costs something.",
    metrics: [["12", "Usability sessions"], ["\u03BA = 0.89", "Inter-coder reliability"], ["~400", "Survey responses"], ["4", "Core screens"]],
    findingsLabel: "Findings",
    findings: [
      ["01", "The blocking was too easy to bypass.", "Six of twelve participants disabled a session within seconds \u2014 the exit was a single, frictionless tap."],
      ["02", "Users wanted proof of progress.", "Streaks and recovered-time totals mattered more than the lock itself; the reward had to be visible."],
      ["03", "Onboarding buried the NFC step.", "The physical tag \u2014 the whole point \u2014 was introduced three screens too late."]
    ],
    quote: ["The blocking is too easy to turn off. It defeats the whole point.", "\u2014 Participant 6, Finnish, 21"],
    stats: [["1,134", "Members tracked"], ["82", "Task success %"], ["3.1", "Avg. SUS delta"], ["15", "Iterations"]],
    cta: ["Interactive prototype", "Walk the full locked-focus flow, from onboarding to recovery.", "Open in Axure Cloud \u2192"]
  },
  desertification: {
    eyebrow: "Case Study 02",
    title: "Desert",
    tags: "Content Strategy \xB7 Campaign Design \xB7 Visual Communication",
    meta: [["Role", "Content Strategy \xB7 Design"], ["Year", "2024"], ["Team", "Studio of 3"], ["Scope", "Awareness campaign"]],
    lead: "A public-awareness campaign on desertification, built to make a slow, abstract crisis feel immediate and local.",
    body: "The work translated dense climate data into a visual language non-specialists could act on \u2014 without alarmism, without losing the rigour of the source material.",
    callout: "Make a slow crisis feel like it is happening now.",
    metrics: [["1", "Campaign system"], ["6", "Poster variants"], ["3", "Languages"], ["12", "Data sources"]],
    findingsLabel: "Approach",
    findings: [
      ["01", "Lead with the local.", "Global statistics flatten urgency; the campaign anchored every claim to a place the viewer recognised."],
      ["02", "One number per surface.", "Each poster carried a single figure, large, so the message survived a three-second glance."]
    ],
    quote: ["You stopped me because of the number, not the picture.", "\u2014 Pilot test respondent"],
    stats: [["~400", "Reach (pilot)"], ["6", "Surfaces"], ["3", "Languages"]],
    cta: ["Campaign system", "See the full poster grid and the data behind each figure.", "View the campaign \u2192"]
  },
  supermarket: {
    eyebrow: "Case Study 03",
    title: "VR",
    tags: "VR Research \xB7 Behavioural Science \xB7 Statistical Analysis",
    meta: [["Role", "Researcher"], ["Year", "2025"], ["Team", "Lab study"], ["Tools", "Unity \xB7 R \xB7 SPSS"]],
    lead: "A VR supermarket experiment measuring how shelf placement and signage nudge purchasing decisions under realistic shopping conditions.",
    body: "Participants shopped a simulated store while gaze and choice were logged; the data was modelled with factor analysis and linear regression to isolate what actually moved behaviour.",
    callout: "Does a nudge survive a realistic shopping trip?",
    metrics: [["48", "Participants"], ["2", "Conditions"], ["\u03BA = 0.82", "Coding reliability"], ["R\xB2=.37", "Model fit"]],
    findingsLabel: "Findings",
    findings: [
      ["01", "Eye-level placement won.", "Position outperformed signage by a wide margin \u2014 visibility, not messaging, drove the choice."],
      ["02", "Signage helped only when paired.", "Labels mattered only once a product was already in the gaze path."]
    ],
    quote: ["I didn't even read the sign \u2014 I just grabbed what I saw first.", "\u2014 Participant 19"],
    stats: [["48", "Participants"], ["2", "Conditions"], ["37", "Variance explained %"]],
    cta: ["Method & results", "Read the full statistical write-up and the VR build notes.", "Read the report \u2192"]
  },
  kns: {
    eyebrow: "Case Study 04",
    title: "KNS",
    tags: "Visual Design \xB7 Branding \xB7 Community Management",
    meta: [["Role", "Visual Design \xB7 Community"], ["Year", "2022"], ["Team", "Core of 4"], ["Scope", "Brand + Web3"]],
    lead: "Katana N' Samurai is a Web3 community where owning the collectible had to mean something beyond the mint \u2014 a key that opened a real door.",
    body: "The brand tied digital ownership to physical presence: holders unlocked perks at partner ramen venues, onboarded under a formal SOP before any holder-facing feature shipped.",
    callout: "A collectible turned into a key that opens a real door.",
    metrics: [["1,134", "Members tracked"], ["28", "Partner venues"], ["40+", "Events run"], ["3", "Drop phases"]],
    findingsLabel: "Decisions",
    findings: [
      ["01", "Merchants first, holders second.", "Without venue buy-in the occupation mechanic was theatre \u2014 stores onboarded before any holder feature shipped."],
      ["02", "The key had to open a real door.", "Utility was tied to physical presence: scanning in at a partner venue, not a screen tap."]
    ],
    quote: ["I came for the art and stayed because the ramen guy knew my handle.", "\u2014 Community member"],
    stats: [["1,134", "Members tracked"], ["28", "Partner venues"], ["40", "Events run"]],
    cta: ["Brand & community", "Browse the drop artwork, the ramen map, and the event archive.", "See the collection \u2192"]
  }
};
function CaseStudy({ current, go }) {
  const d = CASE_DATA[current];
  const proj = PROJECTS.find((p) => p.id === current);
  const idx = PROJECTS.findIndex((p) => p.id === current);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return /* @__PURE__ */ React.createElement("article", { "data-screen-label": "Case: " + proj.title }, /* @__PURE__ */ React.createElement("div", { className: "proj-hero" }, /* @__PURE__ */ React.createElement("div", { className: "proj-hero-left" }, /* @__PURE__ */ React.createElement("div", { className: "proj-eyebrow" }, d.eyebrow), /* @__PURE__ */ React.createElement("h1", { className: "proj-title" }, d.title), /* @__PURE__ */ React.createElement("div", { className: "proj-tags" }, d.tags), /* @__PURE__ */ React.createElement("div", { className: "proj-meta" }, d.meta.map(([k, v]) => /* @__PURE__ */ React.createElement("div", { className: "proj-meta-row", key: k }, /* @__PURE__ */ React.createElement("span", { className: "meta-label" }, k), /* @__PURE__ */ React.createElement("span", { className: "meta-value" }, v))))), /* @__PURE__ */ React.createElement("div", { className: "proj-hero-right" }, /* @__PURE__ */ React.createElement("img", { className: "proj-hero-obj", src: proj.src, alt: proj.title }))), /* @__PURE__ */ React.createElement("section", { className: "content-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "The Brief"), /* @__PURE__ */ React.createElement("div", { className: "section-body" }, /* @__PURE__ */ React.createElement("p", { className: "lead-text" }, d.lead), /* @__PURE__ */ React.createElement("p", null, d.body))), /* @__PURE__ */ React.createElement("section", { className: "callout-section" }, /* @__PURE__ */ React.createElement("div", { className: "callout-label" }, "In one line"), /* @__PURE__ */ React.createElement("div", { className: "callout-text" }, d.callout)), /* @__PURE__ */ React.createElement("div", { className: "metrics-strip" }, d.metrics.map(([n, desc]) => /* @__PURE__ */ React.createElement("div", { className: "metric-cell", key: desc }, /* @__PURE__ */ React.createElement("span", { className: "metric-num" }, n), /* @__PURE__ */ React.createElement("span", { className: "metric-desc" }, desc)))), /* @__PURE__ */ React.createElement("section", { className: "content-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, d.findingsLabel), /* @__PURE__ */ React.createElement("div", { className: "section-body" }, /* @__PURE__ */ React.createElement("div", { className: "findings-list" }, d.findings.map(([num, h, p]) => /* @__PURE__ */ React.createElement("div", { className: "finding", key: num }, /* @__PURE__ */ React.createElement("span", { className: "finding-num mono" }, num), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", null, h), /* @__PURE__ */ React.createElement("p", null, p))))), /* @__PURE__ */ React.createElement("div", { className: "pull-quote", style: { marginTop: 32 } }, /* @__PURE__ */ React.createElement("p", null, "\u201C", d.quote[0], "\u201D", /* @__PURE__ */ React.createElement("span", { className: "source" }, d.quote[1]))))), /* @__PURE__ */ React.createElement("div", { className: "stats-section" }, d.stats.map(([n, l]) => {
    const m = String(n).match(/^([^0-9]*)(.+)$/);
    return /* @__PURE__ */ React.createElement("div", { className: "stat", key: l }, /* @__PURE__ */ React.createElement(ScrambleNum, { value: m[2], prefix: m[1] }), /* @__PURE__ */ React.createElement("span", { className: "stat-label" }, l));
  })), /* @__PURE__ */ React.createElement("section", { className: "content-section" }, /* @__PURE__ */ React.createElement("div", { className: "section-label" }, "Prototype"), /* @__PURE__ */ React.createElement("div", { className: "section-body" }, /* @__PURE__ */ React.createElement("div", { className: "proto-label t-caption", style: { fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 8 } }, d.cta[0]), /* @__PURE__ */ React.createElement("p", { style: { marginBottom: 20 } }, d.cta[1]), /* @__PURE__ */ React.createElement("button", { className: "proto-btn" }, d.cta[2]))), /* @__PURE__ */ React.createElement("footer", { className: "proj-footer" }, /* @__PURE__ */ React.createElement("a", { onClick: () => go("home"), style: { cursor: "pointer" } }, "\u2190 Home"), /* @__PURE__ */ React.createElement("a", { onClick: () => go("case", next.id), style: { cursor: "pointer" } }, next.title, " \u2192")));
}
Object.assign(window, { CASE_DATA, CaseStudy });
