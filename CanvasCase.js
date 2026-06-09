function PH({ name, desc, variant = "ph-wide" }) {
  return /* @__PURE__ */ React.createElement("div", { className: "ph " + variant, role: "img", "aria-label": name + " \u2014 " + desc }, /* @__PURE__ */ React.createElement("span", { className: "ph-name" }, "[", name, "]"), /* @__PURE__ */ React.createElement("span", { className: "ph-desc" }, desc));
}
function Pill({ kind, children }) {
  if (kind === "dash") return /* @__PURE__ */ React.createElement("span", { className: "cv-dash", "aria-label": "Em-dash, no submission required" }, "\u2014");
  const sym = kind === "submitted" ? "\u2713 " : kind === "overdue" ? "\u26A0 " : "";
  return /* @__PURE__ */ React.createElement("span", { className: "cv-pill cv-pill-" + kind }, sym, children);
}
function CanvasCase({ go }) {
  const next = PROJECTS[0];
  const meta = [
    ["Role", "Sole designer"],
    ["Contributions", "Research \xB7 audit \xB7 UI design \xB7 usability test"],
    ["Timeline", "4 weeks \xB7 2026"],
    ["Team", "Solo"],
    ["Tools", "Figma \xB7 Field interviews"]
  ];
  const stats = [
    ["70%", "Participants willing to switch back to Canvas"],
    ["13.4 \u2192 4.6", "Taps to verify submission state"],
    ["3.2 \u2192 7.8", "Trust rating"]
  ];
  const quotes = [
    ["The checkbox is useless, I never know if it means I submitted or if it's me marking it.", "P1, BSc Year 2"],
    ["I trust Notion because I'm the one who ticked the box. Canvas's checkbox doesn't reflect anything real.", "P2, MSc Year 1"],
    ["Oh \u2014 yeah, the web's submitted state should be on the phone.", "P6, MSc Year 1"],
    ["Canvas is where I submit. WhatsApp is where I know what to do.", "P6, BSc Year 2"]
  ];
  const personas = [
    {
      name: "Sanne",
      role: "The Reactive Checker",
      avatar: "assets/canvas/persona-sanne.png",
      tags: ["BSc", "Phone-first", "Daily, in bursts"],
      quote: "I tap into every assignment to check if I submitted. It's exhausting.",
      fields: [
        ["Who this represents", "The most common UT student \u2014 phone-first, opens Canvas in short bursts to check what's left."],
        ["How she works", "Opens Canvas in a free moment. Sees the To-do list. Can't tell which items are done. Taps into each to verify. Loses confidence halfway through."],
        ["What she needs", "A list where she sees at a glance what's submitted and what isn't \u2014 without tapping into anything."],
        ["Workaround", "Group chat as ground truth \xB7 Apple Reminders"]
      ]
    },
    {
      name: "Daan",
      role: "The Organised Externaliser",
      avatar: "assets/canvas/persona-daan.png",
      tags: ["MSc", "Laptop-first", "Notion user"],
      quote: "I keep a Notion list because Canvas mobile doesn't tell me what's done.",
      fields: [
        ["Who this represents", "The methodical planner who has stopped trusting the source of truth and rebuilt it elsewhere."],
        ["How he works", "Every Sunday, copies every Canvas deadline into Notion. Trusts Notion's checkbox because he's the one who ticked it. Doesn't trust Canvas's checkbox because it doesn't reflect anything real."],
        ["What he needs", "Canvas mobile to be as trustworthy as his Notion list."],
        ["Workaround", "Notion (Sunday sync) \xB7 Outlook calendar"]
      ]
    },
    {
      name: "Mei",
      role: "The Group-Project Juggler",
      avatar: "assets/canvas/persona-mei.png",
      tags: ["MSc", "International", "Group-heavy programme"],
      quote: "I check my own submissions and chase teammates separately. The list helps me with neither.",
      fields: [
        ["Who this represents", "The student carrying group work, tracking two kinds of state at once."],
        ["How she works", "Checks Canvas for her own assignments \u2014 taps into each to verify. Then opens WhatsApp to confirm whether teammates have done their parts."],
        ["What she needs", "A list showing own submission state AND group-item ownership \u2014 without drilling."],
        ["Workaround", "WhatsApp groups \xB7 Shared Google Calendar"]
      ]
    }
  ];
  const ideation = [
    [
      "01",
      "Brainstorm",
      "anything goes",
      "Raw_ideas.png",
      "Sticky-note wall \u2014 scattered green notes, every idea welcome.",
      "Bad ideas welcomed. Streak counters, AI assistants, calendar export, weight chips \u2014 all valid as starting points. The goal here is quantity, not quality.",
      "assets/canvas/ideation-raw.png"
    ],
    [
      "02",
      "Categorize",
      "find the shape",
      "Categorization.png",
      "Same notes, now coloured by cluster: Add features (blue), Make state visible (green), Redesign the list (purple).",
      "Three clusters emerge: features to add, state to make visible, list to restructure. The \u201CMake state visible\u201D cluster is already the densest \u2014 a clue.",
      "assets/canvas/ideation-categorize.png"
    ],
    [
      "03",
      "Critique",
      "reject with reasons",
      "Rejection.png",
      "Same notes, most X'd out with red labels below explaining why.",
      "",
      "assets/canvas/ideation-reject.png"
    ],
    [
      "04",
      "Converge",
      "what survived",
      "Final_ideas.png",
      "A clean grid of the remaining ideas.",
      "The \u201CMake state visible\u201D cluster dominates. Three of those ideas combined into the final design.",
      "assets/canvas/ideation-final.png"
    ]
  ];
  const states = [
    ["submitted", "Submitted", "Already submitted \u2014 tap to review"],
    ["submit", "Submit", "Outstanding \u2014 tap to start submitting"],
    ["overdue", "Overdue", "Past deadline \u2014 tap to see options"],
    ["dash", "\u2014", "No submission required (readings, lectures)"]
  ];
  const measures = [
    ["Average umber of taps to reach a confident answer", "Drops from average ~12 to \u22642", "13.4 \u2192 4.6"],
    ["Average time-to-confidence", "Drops from minutes to seconds", "3:42 \u2192 0:36"],
    ["Average trust rating (1\u201310)", "Increases by \u22653 points", "3.2 \u2192 7.8"],
    ["Willingness of switching tools back to Canvas", "Above 50%", "70%"]
  ];
  const cuts = [
    ["Aggregated Today / This Week homepage", "New surface; doesn't solve the gap", "Pivot 1"],
    ["Calendar Export to Apple / Google / Outlook", "Forward-looking problem; different from verification", "Pivot 1"],
    ["TimeEdit asymmetry argument", "Distracted from the central thesis", "Pivot 1"],
    ["Priority signals (weight chips, ownership) as central", "Nice-to-have, not the core fix", "Pivot 2"],
    ["Forward + Backward dual frame", "Too sprawling", "Pivot 2"],
    ["Full row redesign (left-edge state, new typography)", "Over-engineered; smaller intervention is stronger", "Pivot 3"]
  ];
  return /* @__PURE__ */ React.createElement("article", { "data-screen-label": "Case: Canvas" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero-left" }, /* @__PURE__ */ React.createElement("div", { className: "brick-eyebrow" }, "UX Research \xB7 UI Design \xB7 Mobile Redesign"), /* @__PURE__ */ React.createElement("h1", { className: "cv-title" }, "Canvas"), /* @__PURE__ */ React.createElement("p", { className: "brick-subtitle" }, "A self-initiated 4-week case study redesigning Canvas mobile's list views to show submission state \u2014 bringing an existing Canvas web pattern across to the surface where students need it most."), /* @__PURE__ */ React.createElement("p", { className: "cv-hero-note" }, "The fix already existed \u2014 on Canvas web. This project is about closing the gap, not inventing new ground."), /* @__PURE__ */ React.createElement("div", { className: "cv-meta" }, meta.map(
    ([k, v]) => /* @__PURE__ */ React.createElement("div", { className: "cv-meta-cell", key: k }, /* @__PURE__ */ React.createElement("span", { className: "cv-meta-key" }, k), /* @__PURE__ */ React.createElement("span", { className: "cv-meta-val" }, v))
  ))), /* @__PURE__ */ React.createElement("div", { className: "brick-hero-right" }, /* @__PURE__ */ React.createElement("div", { className: "cv-hero-phone" }, /* @__PURE__ */ React.createElement("div", { className: "cv-hero-embed" }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      className: "cv-figma",
      title: "Canvas redesign \u2014 interactive Figma prototype",
      src: "https://embed.figma.com/proto/Q13pzBIgQ9Y0PqALNNPPAc/Untitled?node-id=12-5&p=f&scaling=scale-down&content-scaling=fixed&starting-point-node-id=12%3A5&page-id=0%3A1&hide-ui=1&hotspot-hints=0&embed-host=share",
      allowFullScreen: true,
      loading: "lazy"
    }
  )), /* @__PURE__ */ React.createElement("span", { className: "cv-hero-embed-label" }, "Live prototype \xB7 tap to interact \u2192")))), /* @__PURE__ */ React.createElement("div", { className: "brick-strip" }, stats.map(
    ([n, d]) => /* @__PURE__ */ React.createElement("div", { className: "brick-strip-cell", key: d }, /^[0-9.,]+$/.test(n) ? /* @__PURE__ */ React.createElement(ScrambleNum, { value: n }) : /* @__PURE__ */ React.createElement("span", { className: "stat-num" }, n), /* @__PURE__ */ React.createElement("span", { className: "brick-strip-desc" }, d))
  )), /* @__PURE__ */ React.createElement("nav", { className: "brick-toc", "aria-label": "Section navigation" }, /* @__PURE__ */ React.createElement(
    "select",
    {
      className: "brick-toc-select",
      defaultValue: "",
      onChange: (e) => {
        const id = e.target.value;
        if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        e.target.value = "";
      }
    },
    /* @__PURE__ */ React.createElement("option", { value: "", disabled: true }, "Jump to section"),
    /* @__PURE__ */ React.createElement("option", { value: "cv-context" }, "Context"),
    /* @__PURE__ */ React.createElement("option", { value: "cv-audit" }, "Current state"),
    /* @__PURE__ */ React.createElement("option", { value: "cv-research" }, "Research"),
    /* @__PURE__ */ React.createElement("option", { value: "cv-personas" }, "Who we're designing for"),
    /* @__PURE__ */ React.createElement("option", { value: "cv-ideation" }, "How we got there"),
    /* @__PURE__ */ React.createElement("option", { value: "cv-redesign" }, "The redesign"),
    /* @__PURE__ */ React.createElement("option", { value: "cv-test" }, "Usability test"),
    /* @__PURE__ */ React.createElement("option", { value: "cv-reflection" }, "Reflection")
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "cv-context" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Context"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead", style: { fontSize: "30px" } }, "Mobile is how students live with the LMS \u2014 but it's the less-trustworthy surface."), /* @__PURE__ */ React.createElement("p", null, "Roughly 48% of higher-ed students frequently access their LMS on mobile ", /* @__PURE__ */ React.createElement("i", null, "(Instructure / Hanover 2023, cited as a market signal, not peer-reviewed)"), ". Mobile is consistently the less-mature surface of every major LMS, and Canvas is no exception."), /* @__PURE__ */ React.createElement("p", null, "When an LMS surface isn't truthful or trustworthy, students replace it with parallel systems \u2014 Notion, paper planners, group chats. This isn't laziness; it's pattern matching against repeated failures. Late submissions, which the LMS can measure from logs, correlate with lower achievement ", /* @__PURE__ */ React.createElement("i", null, "(You 2015)"), ". Anything that makes ", /* @__PURE__ */ React.createElement("i", null, "\u201Cdid I submit?\u201D"), " ambiguous is a risk factor."), /* @__PURE__ */ React.createElement("p", null, "This project is grounded in one observable asymmetry: Canvas's web list views show submission state on every assignment. Canvas's mobile list views do not. The pattern already exists in the same product \u2014 it just hasn't been brought across."), /* @__PURE__ */ React.createElement("p", null, "And the cost isn't only the student's. Every time the LMS can't be trusted, the institution loses its own source of truth: planning migrates to Notion and WhatsApp, the engagement signal leaks out of the system meant to measure it, and ", /* @__PURE__ */ React.createElement("i", null, "\u201Cdid I submit?\u201D"), " uncertainty resurfaces as support tickets and avoidable late penalties. Because Canvas already solves this on web, closing the gap is a low-cost change to a pattern the product owns \u2014 not a new feature to maintain."))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "cv-audit" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Current state"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead", style: { fontSize: "30px" } }, "Same data. Two surfaces. Different experiences."), /* @__PURE__ */ React.createElement("p", null, "Canvas web's assignments list shows submission state per task \u2014 one glance answers ", /* @__PURE__ */ React.createElement("i", null, "\u201Cwhat have I submitted?\u201D"), ". Canvas mobile's equivalent list does not. The student is forced to tap into each item to check, then switch tabs and do it again to be sure."), /* @__PURE__ */ React.createElement("div", { className: "cv-figure" }, /* @__PURE__ */ React.createElement("img", { className: "cv-img cv-img-bare", src: "assets/canvas/audit-annotation.png", alt: "Audit \u2014 Canvas web shows submission status per task; Canvas mobile (To-do and Calendar) shows no state, annotated with the gaps.", draggable: "false" })))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "cv-research" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Research"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel", style: { marginTop: 0 } }, "Research question"), /* @__PURE__ */ React.createElement("div", { className: "brick-quote", style: { marginBottom: 28 } }, /* @__PURE__ */ React.createElement("p", null, `"How do UT students currently verify what they've submitted on Canvas mobile, and what change would most reduce that verification effort?"`)), /* @__PURE__ */ React.createElement("p", null, "I had open conversations with 6 UT students across BSc and MSc programmes, complemented by a structured think-aloud task:", /* @__PURE__ */ React.createElement("i", { style: { display: "block", fontSize: "30px", lineHeight: 1.4, marginTop: "14px" } }, "\u201CShow me how you check what you still need to submit this week.\u201D")), /* @__PURE__ */ React.createElement("div", { className: "cv-baseline cv-baseline-row" }, /* @__PURE__ */ React.createElement("span", { className: "cv-baseline-eyebrow" }, "Baseline measured"), /* @__PURE__ */ React.createElement("div", { className: "cv-baseline-stats" }, /* @__PURE__ */ React.createElement("div", { className: "cv-baseline-stat" }, /* @__PURE__ */ React.createElement("span", { className: "cv-baseline-num" }, "13.4"), /* @__PURE__ */ React.createElement("span", { className: "cv-baseline-lbl" }, "Taps to reach a confident answer")), /* @__PURE__ */ React.createElement("div", { className: "cv-baseline-stat" }, /* @__PURE__ */ React.createElement("span", { className: "cv-baseline-num" }, "3:42"), /* @__PURE__ */ React.createElement("span", { className: "cv-baseline-lbl" }, "Time-to-confidence")), /* @__PURE__ */ React.createElement("div", { className: "cv-baseline-stat" }, /* @__PURE__ */ React.createElement("span", { className: "cv-baseline-num" }, "3.2"), /* @__PURE__ */ React.createElement("span", { className: "cv-baseline-lbl" }, "Trust rating of the app (1\u201310)")))), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "Four voices that defined the problem"), /* @__PURE__ */ React.createElement("div", { className: "cv-quotegrid" }, quotes.map(
    ([q, src], i) => /* @__PURE__ */ React.createElement("div", { className: "cv-qcard", key: i }, /* @__PURE__ */ React.createElement("p", null, "\u201C", q, "\u201D"), /* @__PURE__ */ React.createElement("span", { className: "cv-qcard-src" }, "\u2014 ", src))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "cv-personas" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Who we're designing for"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead", style: { fontSize: "30px" } }, "3 patterns of one shared frustration."), /* @__PURE__ */ React.createElement("p", null, "Each persona represents a behaviour pattern observed across UT students. They differ in habits, programme, and workaround, but the underlying complaint is the same."), /* @__PURE__ */ React.createElement("div", { className: "cv-note" }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", { style: { fontSize: "30px", display: "block", marginBottom: "10px" } }, "Who we're not designing for."), "A fourth pattern surfaced: the power user who has configured Canvas (filters, hide-completed) and no longer feels the friction. They're evidence of ", /* @__PURE__ */ React.createElement("i", null, "who Canvas serves today"), " \u2014 students patient enough to invest in the workaround. The redesign serves the three above.")), /* @__PURE__ */ React.createElement("div", { className: "cv-personas" }, personas.map(
    (p) => /* @__PURE__ */ React.createElement("div", { className: "cv-persona", key: p.name }, /* @__PURE__ */ React.createElement("div", { className: "cv-persona-top" }, /* @__PURE__ */ React.createElement("img", { className: "cv-persona-avatar", src: p.avatar, alt: p.name, draggable: "false" }), /* @__PURE__ */ React.createElement("div", { className: "cv-persona-headcol" }, /* @__PURE__ */ React.createElement("div", { className: "cv-persona-head" }, /* @__PURE__ */ React.createElement("span", { className: "cv-persona-name" }, p.name), /* @__PURE__ */ React.createElement("span", { className: "cv-persona-role" }, p.role)), /* @__PURE__ */ React.createElement("div", { className: "cv-persona-tags" }, p.tags.map((t) => /* @__PURE__ */ React.createElement("span", { className: "cv-tag", key: t }, t))))), /* @__PURE__ */ React.createElement("p", { className: "cv-persona-quote" }, "\u201C", p.quote, "\u201D"), /* @__PURE__ */ React.createElement("div", { className: "cv-persona-grid" }, p.fields.map(
      ([label, body]) => /* @__PURE__ */ React.createElement("div", { className: "cv-field", key: label }, /* @__PURE__ */ React.createElement("span", { className: "cv-field-label" }, label), /* @__PURE__ */ React.createElement("p", null, body))
    )))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "cv-ideation" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "How we got there"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead", style: { fontSize: "30px" } }, "20 ideas, 3 categories, 1 survivor."), /* @__PURE__ */ React.createElement("p", null, "The redesign emerged from the ideation session. Twenty-plus ideas generated freely, then categorised, then critiqued. Each rejected idea earned a reason."), /* @__PURE__ */ React.createElement("div", { className: "cv-steps" }, ideation.map(
    ([num, title, sub, file, phdesc, cap, img]) => /* @__PURE__ */ React.createElement(React.Fragment, { key: num }, /* @__PURE__ */ React.createElement("div", { className: "cv-step" }, /* @__PURE__ */ React.createElement("div", { className: "cv-step-label" }, /* @__PURE__ */ React.createElement("b", null, "Step ", num), " \xB7 ", title, " \u2014 ", sub), /* @__PURE__ */ React.createElement("img", { className: "cv-img", src: img, alt: title + " \u2014 " + sub, draggable: "false" }), cap && /* @__PURE__ */ React.createElement("p", { className: "cv-step-cap" }, cap)), num === "03" && /* @__PURE__ */ React.createElement("div", { className: "cv-cutblock" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead", style: { fontSize: "30px", marginBottom: 12 } }, "What was cut, and why."), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "17px", lineHeight: 1.65, color: "rgba(0,0,0,0.78)" } }, "Earlier drafts of this project sprawled. Each pivot removed scope that was diluting the central argument. The case study reads as small because the work was disciplined to stay small."), /* @__PURE__ */ React.createElement("div", { className: "cv-table" }, /* @__PURE__ */ React.createElement("div", { className: "cv-table-row cv-table-2" }, /* @__PURE__ */ React.createElement("span", { className: "cv-table-head" }, "Cut"), /* @__PURE__ */ React.createElement("span", { className: "cv-table-head" }, "Why")), cuts.map(
      ([cut, why], i) => /* @__PURE__ */ React.createElement("div", { className: "cv-table-row cv-table-2", key: i }, /* @__PURE__ */ React.createElement("span", { className: "cv-cut-name" }, cut), /* @__PURE__ */ React.createElement("span", null, why))
    ))))
  )), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "Design principle"), /* @__PURE__ */ React.createElement("div", { className: "brick-quote" }, /* @__PURE__ */ React.createElement("p", null, "\u201CBring the state-visibility pattern from Canvas web to Canvas mobile. One element changes \u2014 the right-side checkbox \u2014 from a manual marker to a system-bound state pill. Everything else respects what Canvas already has.\u201D")))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "cv-redesign" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "The redesign", /* @__PURE__ */ React.createElement("div", { className: "cv-rail-embed" }, /* @__PURE__ */ React.createElement("div", { className: "cv-hero-embed" }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      className: "cv-figma",
      title: "Canvas redesign \u2014 interactive Figma prototype",
      src: "https://embed.figma.com/proto/Q13pzBIgQ9Y0PqALNNPPAc/Untitled?node-id=12-5&p=f&scaling=scale-down&content-scaling=fixed&starting-point-node-id=12%3A5&page-id=0%3A1&hide-ui=1&hotspot-hints=0&embed-host=share",
      allowFullScreen: true,
      loading: "lazy"
    }
  )), /* @__PURE__ */ React.createElement("span", { className: "cv-hero-embed-label" }, "Live prototype \xB7 tap to interact \u2192"))), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead", style: { fontSize: "30px" } }, "One element changes. Everything else stays."), /* @__PURE__ */ React.createElement("p", null, "Canvas mobile's existing list-item layout is preserved entirely. Only the right-edge element changes \u2014 from a manual checkbox decoupled from reality, to a labelled state pill bound to actual submission data. Four states cover every case."), /* @__PURE__ */ React.createElement("div", { className: "cv-states" }, /* @__PURE__ */ React.createElement("div", { className: "cv-state-row" }, /* @__PURE__ */ React.createElement("span", { className: "cv-table-head", style: { textAlign: "center" } }, "State"), /* @__PURE__ */ React.createElement("span", { className: "cv-table-head", style: { textAlign: "center" } }, "Visual"), /* @__PURE__ */ React.createElement("span", { className: "cv-table-head", style: { textAlign: "center" } }, "Meaning")), states.map(
    ([kind, name, mean]) => /* @__PURE__ */ React.createElement("div", { className: "cv-state-row", key: name }, /* @__PURE__ */ React.createElement("span", { className: "cv-state-name" }, name), /* @__PURE__ */ React.createElement("span", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement(Pill, { kind }, name)), /* @__PURE__ */ React.createElement("span", { className: "cv-state-mean" }, mean))
  )), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 22 } }, "Every pill is also a tap target. The pill is both a state indicator and a navigation affordance \u2014 scan \u2192 identify \u2192 act."), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "Accessibility"), /* @__PURE__ */ React.createElement("p", null, "State visibility only helps if it reaches every student, so the pill was specified against WCAG 2.2 from the start \u2014 not retrofitted onto the visuals afterward."), /* @__PURE__ */ React.createElement("div", { className: "cv-a11y" }, /* @__PURE__ */ React.createElement("div", { className: "cv-a11y-row" }, /* @__PURE__ */ React.createElement("span", { className: "cv-a11y-crit" }, "Never colour alone"), /* @__PURE__ */ React.createElement("span", { className: "cv-a11y-how" }, "Every state carries a written label, and a ", /* @__PURE__ */ React.createElement("b", null, "\u2713"), " or ", /* @__PURE__ */ React.createElement("b", null, "\u26A0"), " glyph reinforces Submitted and Overdue \u2014 so the four states stay distinct for colour-blind users and in greyscale. ", /* @__PURE__ */ React.createElement("i", null, "(1.4.1 Use of Color)"))), /* @__PURE__ */ React.createElement("div", { className: "cv-a11y-row" }, /* @__PURE__ */ React.createElement("span", { className: "cv-a11y-crit" }, "Legible contrast"), /* @__PURE__ */ React.createElement("span", { className: "cv-a11y-how" }, "Pill label text is held above ", /* @__PURE__ */ React.createElement("b", null, "4.5:1"), " against its fill and the pill boundary above ", /* @__PURE__ */ React.createElement("b", null, "3:1"), " against the row \u2014 checked for each of the four states. ", /* @__PURE__ */ React.createElement("i", null, "(1.4.3 / 1.4.11)"))), /* @__PURE__ */ React.createElement("div", { className: "cv-a11y-row" }, /* @__PURE__ */ React.createElement("span", { className: "cv-a11y-crit" }, "A real touch target"), /* @__PURE__ */ React.createElement("span", { className: "cv-a11y-how" }, "Because the pill is the tap target, it's sized to the ", /* @__PURE__ */ React.createElement("b", null, "44px"), " minimum and exposes an accessible name, so a screen reader announces \u201CSubmitted\u201D or \u201COverdue,\u201D not just \u201Cbutton.\u201D ", /* @__PURE__ */ React.createElement("i", null, "(2.5.5 / 4.1.2)")))), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "Before / After \u2014 To-do tab"), /* @__PURE__ */ React.createElement("div", { className: "cv-figure" }, /* @__PURE__ */ React.createElement("img", { className: "cv-img", src: "assets/canvas/ba-todo.png", alt: "Before / after of the Canvas mobile To-do tab \u2014 the layout is unchanged; the right edge now carries Submitted, Submit and Overdue state pills.", draggable: "false" }), /* @__PURE__ */ React.createElement("p", { className: "cv-caption" }, "Layout unchanged. Date column unchanged. Course icons, codes, titles, due times \u2014 all retained. The right edge now carries truth instead of a manual toggle.")), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "Before / After \u2014 Calendar tab"), /* @__PURE__ */ React.createElement("div", { className: "cv-figure" }, /* @__PURE__ */ React.createElement("img", { className: "cv-img", src: "assets/canvas/ba-calendar.png", alt: "Before / after of the Canvas mobile Calendar tab \u2014 the state pill sits on the left and a Score column is added on the right.", draggable: "false" }), /* @__PURE__ */ React.createElement("p", { className: "cv-caption" }, "Same component, different row anatomy. The pill sits on the left where state earns visual priority. The Score column on the right brings a second Canvas web pattern across to mobile.")), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "USER FLOW DIFFERENCE"), /* @__PURE__ */ React.createElement("div", { className: "cv-figure" }, /* @__PURE__ */ React.createElement("img", { className: "cv-img", src: "assets/canvas/userflow-diff.png", alt: "User flow before/after \u2014 the current verification loop costs 2N taps and ends uncertain; the redesign is a linear 1-tap scan ending confident.", draggable: "false" }), /* @__PURE__ */ React.createElement("p", { className: "cv-caption cv-caption-lg" }, /* @__PURE__ */ React.createElement("b", null, "Tap count: 2N \u2192 1."), " Where verifying N items used to cost 2N taps (open + back, repeated), the redesigned list answers the question in a single tab tap \u2014 every item's state visible at a glance.")))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "cv-test" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "USABILITY TEST"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", null, "The central task was tested among 10 other students: ", /* @__PURE__ */ React.createElement("i", null, "\u201CShow me how you check what\xA0 assignments you still need to submit this week.\u201D"), " Observed behaviour were compared between the current Canvas and a prototype of the redesign."), /* @__PURE__ */ React.createElement("div", { className: "cv-table cv-measure-table" }, /* @__PURE__ */ React.createElement("div", { className: "cv-table-row cv-measure-row" }, /* @__PURE__ */ React.createElement("span", { className: "cv-table-head" }, "What we measure"), /* @__PURE__ */ React.createElement("span", { className: "cv-table-head" }, "What success looks like"), /* @__PURE__ */ React.createElement("span", { className: "cv-table-head" }, "Result")), measures.map(
    ([m, s, r], i) => /* @__PURE__ */ React.createElement("div", { className: "cv-table-row cv-measure-row", key: i }, /* @__PURE__ */ React.createElement("span", null, m), /* @__PURE__ */ React.createElement("span", { className: "cv-num-target" }, s), /* @__PURE__ */ React.createElement("span", { className: "cv-measure-result" }, r.includes("\u2192") ? /* @__PURE__ */ React.createElement(React.Fragment, null, r.split("\u2192")[0], "\u2192", /* @__PURE__ */ React.createElement("span", { className: "cv-measure-new" }, r.split("\u2192")[1])) : /* @__PURE__ */ React.createElement("span", { className: "cv-measure-new" }, r)))
  )), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "QUOTES OF THE REACTIONS"), /* @__PURE__ */ React.createElement("div", { className: "brick-quote" }, /* @__PURE__ */ React.createElement("p", null, `"Wait \u2014 that's all it took? Yeah, this is what I want."`), /* @__PURE__ */ React.createElement("span", { className: "brick-quote-src" }, "P1, MSc year 1")), /* @__PURE__ */ React.createElement("div", { className: "brick-quote", style: { marginTop: 16 } }, /* @__PURE__ */ React.createElement("p", null, '"I might actually stop maintaining my Notion list."'), /* @__PURE__ */ React.createElement("span", { className: "brick-quote-src" }, "P3, BSc year 1")), /* @__PURE__ */ React.createElement("div", { className: "cv-verdict" }, /* @__PURE__ */ React.createElement("p", { className: "cv-verdict-statement" }, "Validated \u2014 three of four targets met."), /* @__PURE__ */ React.createElement("p", { className: "cv-verdict-body" }, "Time-to-confidence, trust, and willingness to drop parallel tools all cleared their thresholds. Taps dropped sharply (13.4 \u2192 4.6) but fell short of the \u22642 stretch goal \u2014 the next iteration should close that gap by surfacing submission state one level earlier.")))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "cv-reflection" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Reflection"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel", style: { marginTop: 0 } }, "What this case study demonstrates"), /* @__PURE__ */ React.createElement("div", { className: "cv-cards3" }, /* @__PURE__ */ React.createElement("div", { className: "cv-card" }, /* @__PURE__ */ React.createElement("h3", null, "Find before invent"), /* @__PURE__ */ React.createElement("p", null, "The redesign isn't \u201CI invented a feature.\u201D It's \u201CI noticed Canvas already solved this on web; mobile just hasn't received the pattern.\u201D Defending a transfer is easier and more credible than defending an invention.")), /* @__PURE__ */ React.createElement("div", { className: "cv-card" }, /* @__PURE__ */ React.createElement("h3", null, "Observable, not anecdotal"), /* @__PURE__ */ React.createElement("p", null, "Verification fatigue is something any reviewer can replicate on their own Canvas in two minutes. The argument doesn't depend on belief \u2014 it depends on the act of trying it."))), /* @__PURE__ */ React.createElement("div", { className: "brick-reflect brick-reflect-spaced" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px", marginTop: 0 } }, "How I'd build this with a team"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "16px", lineHeight: 1.6, color: "rgba(0,0,0,0.78)" } }, "This was a solo project, but it's scoped to hand off cleanly. With a team I'd pressure-test the problem against the LMS's own support tickets alongside a PM, pair with engineers on binding the pill to real submission state and the edge cases that follow \u2014 group items, offline sync, late-but-submitted \u2014 and ship the pill as a documented, accessible component (icon + label, never colour alone) rather than a one-off screen. The usability test below is where I'd bring the research team back in.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px", marginTop: 0 } }, "What I'd do differently"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "16px", lineHeight: 1.6, color: "rgba(0,0,0,0.78)" } }, "I wrote the protocol and personas before talking to anyone \u2014 that's backwards. A single pilot interview would have caught leading questions and tightened the central task. I'd also resist designing four states at once and validate the most common one first. To stop it recurring, I've made that a rule rather than a regret: no protocol or persona leaves draft until at least one unscripted pilot conversation has tested its assumptions \u2014 fieldwork first, artefacts second."))))), /* @__PURE__ */ React.createElement(OutroCTA, null), /* @__PURE__ */ React.createElement("footer", { className: "proj-footer" }, /* @__PURE__ */ React.createElement("a", { onClick: () => go("home"), style: { cursor: "pointer" } }, "\u2190 Home"), /* @__PURE__ */ React.createElement("a", { className: "proj-footer-next", onClick: () => go("case", next.id), style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("img", { src: next.src, alt: next.title, draggable: "false" }), /* @__PURE__ */ React.createElement("span", null, next.title), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192"))));
}
Object.assign(window, { CanvasCase, PH, Pill });
