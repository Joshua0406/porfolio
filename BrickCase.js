function BrickCase({ go }) {
  const next = PROJECTS[1];
  const [peekIdx, setPeekIdx] = React.useState(null);
  const [peekPhase, setPeekPhase] = React.useState("closed");
  const openPeek = (i) => {
    setPeekIdx(i);
    setPeekPhase("entering");
    requestAnimationFrame(() => requestAnimationFrame(() => setPeekPhase("open")));
  };
  const closePeek = () => {
    setPeekPhase((p) => p === "closed" ? p : "exiting");
    setTimeout(() => {
      setPeekIdx(null);
      setPeekPhase("closed");
    }, 260);
  };
  const personas = [
    [
      "Anna",
      "Anna",
      "25 \xB7 Berlin, Germany \xB7 Yoga teacher",
      "Easily frustrated, sensitive to feelings. Values authentic connection. Wants tools that don't shame her for slipping up."
    ],
    [
      "James",
      "James",
      "15 \xB7 Enschede, NL \xB7 Student",
      "Kind, family-oriented. Spends time on football and games. Wants to focus for university applications but needs social motivation."
    ]
  ];
  const requirements = [
    ["REQ_01", "Customizable competition", "5 of 6 participants wanted leaderboards. 1 of 6 reported stress. Competition must be opt-in, not default."],
    ["REQ_02", "Stress-free motivation", "Users want progress without pressure. Gamified rewards yes; punishment no."],
    ["REQ_03", "Social with privacy control", "Friend visibility motivates, but users need granular control over what's shared."],
    ["REQ_04", "Clear visual feedback", "Weekly summaries and visual progress were universally requested across all 6 interviews."],
    ["REQ_05", "Gentle, not forceful", "Past tools failed because enforcement felt punitive. Soft nudges over hard blocks."]
  ];
  const objectives = [
    "Evaluate the usability of Brick's core flows through structured think-aloud testing",
    "Identify points of confusion, friction, or failed task completion",
    "Surface user motivations and mental models around screen-time management",
    "Assess how well the gamification mechanics communicate their purpose"
  ];
  const decisions = [
    [
      "01",
      "Forced compliance",
      "Self-determined autonomy",
      "Soft notifications + user-controlled blocking with friend daily-photo nudges (BeReal-style peer accountability).",
      "Self-determination theory shows autonomy is critical for sustained motivation. Forceful blocking damages long-term use \u2014 confirmed by all 6 participants."
    ],
    [
      "02",
      "Mandatory leaderboards",
      "Opt-in competition",
      "Leaderboards and challenges are optional with an anonymous-mode toggle. Default view encourages but doesn't enforce comparison.",
      "5 of 6 participants responded positively; 1 of 6 reported stress. Forcing competition would alienate stress-sensitive users."
    ],
    [
      "03",
      "External rewards",
      "Identity-based rewards",
      "Dual-track: avatar cosmetics (identity expression) + real-world coupons (tangible benefit). Avatar growth visible in social spaces.",
      "Rewards don't erode intrinsic motivation when they're tied to identity or progress. Customization reinforces self-efficacy."
    ],
    [
      "04",
      "Rich visuals",
      "Minimalist surface",
      "White-and-red minimalism with isometric 3D brick avatars as the only ornament. Stats prominent; chrome invisible.",
      "A visually noisy app that fights distraction would be self-contradictory. Minimalism reduces cognitive load \u2014 the irony is the point."
    ]
  ];
  const screens = [
    ["assets/brick/page_01.webp", "01", "Splash", "First-run brand entry."],
    ["assets/brick/page_02.webp", "02", "Onboarding", "Sign in \u2014 no commitments upfront."],
    ["assets/brick/page_03.webp", "03", "Lobby", "Friends as bricks in a shared social space."],
    ["assets/brick/page_04.webp", "04", "Profile", "Streak, rank, achievements \u2014 and the relocated App Block."],
    ["assets/brick/page_05.webp", "05", "Shop", "Avatar cosmetics + real-world coupons."],
    ["assets/brick/rank.webp", "06", "Rank", "Leaderboard \u2014 least screen time wins the week."],
    ["assets/brick/page_07.webp", "07", "Settings", "Notifications, themes, privacy."],
    ["assets/brick/page_08.webp", "08", "App Block selection", "Choose categories of distracting apps to lock."]
  ];
  const categories = [
    ["Suggested Improvement", 19.1],
    ["Visual Praise", 19.1],
    ["Easy Navigation", 14.9],
    ["Unclear Feature", 10.6],
    ["Navigation Issue", 9.2],
    ["Too Many Steps", 6.7],
    ["Unclear Labels", 5.7],
    ["Feature Negation", 4.3],
    ["Visual Clutter", 3.5]
  ];
  const findings = [
    ["01", "Icon ambiguity", "The Achievement and App-Block icons looked like inverses of each other and were misread mid-task. The Settings cog blended into the all-red palette \u2014 P1: \u201CSettings being the same color as everything else made it hard to find. Settings could be standard black to stand out.\u201D"],
    ["02", "Orientation", "Multiple participants reached the right mental model only after several minutes of exploration. P1: \u201CWithout a tutorial, it would be quite difficult for people to understand.\u201D Three of six explicitly asked for an introduction overlay."],
    ["03", "Visual weight", "Screen Time, Apps Blocked, and Streak \u2014 the three metrics that drive the entire reward loop \u2014 were too small to anchor the homepage hierarchy. P1: \u201CThe numbers under Screen Time, Apps Blocked, and Streak could be larger \u2014 they seem important.\u201D"]
  ];
  return /* @__PURE__ */ React.createElement("article", { "data-screen-label": "Case: Brick" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero-left" }, /* @__PURE__ */ React.createElement("div", { className: "brick-eyebrow" }, "01 \xB7 UX Research & Design"), /* @__PURE__ */ React.createElement("h1", { className: "brick-title brick-title-logo" }, /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Brick \u2014 A Usability Study & Redesign of a Gamified Screen-Time App"), /* @__PURE__ */ React.createElement("img", { src: "assets/brick/brick_logo.webp", alt: "", draggable: "false" })), /* @__PURE__ */ React.createElement("p", { className: "brick-subtitle" }, "A 10-week usability study and redesign of a gamified screen-time app \u2014 surfacing the hidden primary action and yielding 14 prioritised recommendations."), /* @__PURE__ */ React.createElement("div", { className: "brick-tags" }, "UX Research  \xB7  UI Design  \xB7  Usability Testing"), /* @__PURE__ */ React.createElement("div", { className: "brick-meta" }, [
    ["Role", "UX Researcher & Design Lead"],
    ["Contributions", "I led research design and moderation, and owned the qualitative coding, analysis, and recommendation synthesis."],
    ["Timeline", "10 weeks \xB7 2025"],
    ["Team", "4"],
    ["Tools", "Figma \xB7 Axure RP"]
  ].map(
    ([k, v]) => /* @__PURE__ */ React.createElement("div", { className: "brick-meta-row", key: k }, /* @__PURE__ */ React.createElement("span", { className: "brick-meta-key" }, k), /* @__PURE__ */ React.createElement("span", { className: "brick-meta-val" }, v))
  ))), /* @__PURE__ */ React.createElement("div", { className: "brick-hero-right" }, /* @__PURE__ */ React.createElement(
    "video",
    {
      className: "brick-hero-video",
      src: "assets/brick/iphone-zoom-out-middle-move-out.mp4",
      autoPlay: true,
      loop: true,
      muted: true,
      playsInline: true,
      preload: "metadata",
      "aria-label": "Brick app preview"
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "brick-strip" }, [
    ["10", "Weeks, end-to-end"],
    ["6", "Participants from 6 countries"],
    ["141", "Coded research segments"],
    ["14", "Prioritised recommendations"]
  ].map(
    ([n, d]) => /* @__PURE__ */ React.createElement("div", { className: "brick-strip-cell", key: d }, /* @__PURE__ */ React.createElement(ScrambleNum, { value: n }), /* @__PURE__ */ React.createElement("span", { className: "brick-strip-desc" }, d))
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
    /* @__PURE__ */ React.createElement("option", { value: "brick-problem" }, "The Problem"),
    /* @__PURE__ */ React.createElement("option", { value: "brick-research" }, "Research"),
    /* @__PURE__ */ React.createElement("option", { value: "brick-testing" }, "Testing"),
    /* @__PURE__ */ React.createElement("option", { value: "brick-outcome" }, "Outcome"),
    /* @__PURE__ */ React.createElement("option", { value: "brick-reflection" }, "Reflection")
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "brick-problem" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "The Problem"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead" }, "Young people know they're on their phones too much. But existing tools punish them for it \u2014 and they stop using them within a week."), /* @__PURE__ */ React.createElement("p", null, "Brick is a gamified screen-time management app built for users aged 13\u201325. Instead of restricting access, it uses rewards and streaks to make self-regulation feel worth it. The design hypothesis was promising. But did the interface actually support the behavior it was trying to build?"), /* @__PURE__ */ React.createElement("div", { className: "brick-quote" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "22px" } }, "\u201CI've tried screen-time apps before. The blocking is too easy to turn off. It defeats the whole point.\u201D"), /* @__PURE__ */ React.createElement("span", { className: "brick-quote-src" }, "\u2014 Participant 6, Finnish, 21")), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "17px" } }, "In pre-design interviews, all 6 participants reported having tried screen-time tools and abandoned them \u2014 often because enforcement felt either coercive or trivially defeated."), /* @__PURE__ */ React.createElement("p", { className: "brick-statement-sm", style: { marginTop: 20 } }, "The design challenge: build something both effective and respectful of user autonomy."))), /* @__PURE__ */ React.createElement("section", { className: "brick-section" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Research Question"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-statement", style: { textAlign: "left", fontSize: "30px" } }, "\u201CHow usable is the gamified screentime app for users aged 13\u201325, and what redesign changes would most improve their experience?\u201D"))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "brick-research" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Research"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead-sm", style: { fontSize: "30px" } }, "6 users. 6 countries. 5 requirements."), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel" }, "Method"), /* @__PURE__ */ React.createElement("p", null, "Semi-structured interviews with 6 participants aged 21\u201324 recruited from six different national backgrounds. Each session covered screen-time habits, past attempts to reduce use, and reactions to proposed features."), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel" }, "Why this composition"), /* @__PURE__ */ React.createElement("p", null, "Cross-cultural recruitment surfaced design-relevant tensions that a single-market study would miss \u2014 most notably, one participant's stress response to competition, which became a load-bearing constraint for the gamification system."), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "User personas"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "15px", color: "rgba(0,0,0,0.6)", marginBottom: 16 } }, "Two extremes from the 6-person sample \u2014 chosen to bracket the design space. Anna anchors the stress-sensitive end; James anchors the externally-motivated end. The remaining 4 participants fell between them."), /* @__PURE__ */ React.createElement("div", { className: "brick-personas" }, personas.map(
    ([initial, name, meta, body]) => /* @__PURE__ */ React.createElement("div", { className: "brick-persona", key: name }, /* @__PURE__ */ React.createElement("div", { className: "brick-persona-initial" }, initial), /* @__PURE__ */ React.createElement("div", { className: "brick-persona-meta" }, meta), /* @__PURE__ */ React.createElement("p", { className: "brick-persona-body" }, body))
  )), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "Five requirements drawn from the pre-design interviews"), /* @__PURE__ */ React.createElement("div", { className: "brick-reqlist" }, requirements.map(
    ([k, title, body]) => /* @__PURE__ */ React.createElement("div", { className: "brick-req", key: k }, /* @__PURE__ */ React.createElement("span", { className: "brick-req-key" }, k), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "brick-req-title", style: { fontSize: "22px" } }, title), /* @__PURE__ */ React.createElement("p", { className: "brick-req-body" }, body)))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Pre-design Rationale"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "30px" } }, "4 trade-offs grounded in behavior-change theory."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 12 } }, "The original design decisions baked into Brick's first build \u2014 each surfaced from the pre-design interviews, then stress-tested in the usability research that follows."), /* @__PURE__ */ React.createElement("div", { className: "brick-decisions" }, decisions.map(
    ([num, a, b, chosen, why]) => /* @__PURE__ */ React.createElement("div", { className: "brick-decision", key: num }, /* @__PURE__ */ React.createElement("h3", { className: "brick-decision-title", style: { textAlign: "justify" } }, /* @__PURE__ */ React.createElement("span", { className: "brick-decision-num" }, num), /* @__PURE__ */ React.createElement("span", { className: "brick-decision-a", style: { fontSize: "22px" } }, a), /* @__PURE__ */ React.createElement("span", { className: "brick-decision-vs" }, " vs "), /* @__PURE__ */ React.createElement("span", { className: "brick-decision-b", style: { fontSize: "22px" } }, b)), /* @__PURE__ */ React.createElement("div", { className: "brick-decision-grid" }, /* @__PURE__ */ React.createElement("div", { className: "brick-decision-cell" }, /* @__PURE__ */ React.createElement("span", { className: "brick-decision-cap" }, "Chosen"), /* @__PURE__ */ React.createElement("p", null, chosen)), /* @__PURE__ */ React.createElement("div", { className: "brick-decision-cell" }, /* @__PURE__ */ React.createElement("span", { className: "brick-decision-cap" }, "Why"), /* @__PURE__ */ React.createElement("p", null, why))))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", style: { paddingBottom: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Prototype"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "30px" } }, "Eight screens \u2014 trade-offs and requirements made visible."))), /* @__PURE__ */ React.createElement("div", { className: "brick-screens-grid brick-screens-swipe", "aria-label": "Brick app screens" }, screens.map(
    ([src, num, name, body], i) => /* @__PURE__ */ React.createElement("figure", { className: "brick-screen-fig", key: i }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "brick-screen",
        onPointerDown: (e) => {
          if (window.matchMedia("(max-width: 640px)").matches) return;
          e.currentTarget.setPointerCapture(e.pointerId);
          openPeek(i);
        },
        onPointerUp: closePeek,
        onPointerCancel: closePeek,
        "aria-label": `Hold to enlarge ${name}`
      },
      /* @__PURE__ */ React.createElement("img", { src, alt: name, draggable: "false" })
    ), /* @__PURE__ */ React.createElement("figcaption", { className: "brick-screen-cap" }, /* @__PURE__ */ React.createElement("span", { className: "brick-screen-name" }, name), /* @__PURE__ */ React.createElement("span", { className: "brick-screen-body" }, body)))
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "brick-testing" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Usability Testing"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead-sm" }, "What 6 users told us \u2014 and what we missed."), /* @__PURE__ */ React.createElement("div", { className: "brick-stats brick-stats-inline" }, /* @__PURE__ */ React.createElement("div", { className: "brick-stat" }, /* @__PURE__ */ React.createElement(ScrambleNum, { value: "6" }), /* @__PURE__ */ React.createElement("span", null, "Participants")), /* @__PURE__ */ React.createElement("div", { className: "brick-stat" }, /* @__PURE__ */ React.createElement(ScrambleNum, { value: "7" }), /* @__PURE__ */ React.createElement("span", null, "Tasks")), /* @__PURE__ */ React.createElement("div", { className: "brick-stat" }, /* @__PURE__ */ React.createElement(ScrambleNum, { value: "141" }), /* @__PURE__ */ React.createElement("span", null, "Coded segments")), /* @__PURE__ */ React.createElement("div", { className: "brick-stat" }, /* @__PURE__ */ React.createElement("span", { className: "brick-stat-num brick-stat-num-plain" }, "\u03BA = 0.89"), /* @__PURE__ */ React.createElement("span", null, "Inter-rater reliability"))), /* @__PURE__ */ React.createElement("p", null, "A think-aloud usability study with 6 participants completing 7 core tasks, followed by semi-structured interviews. Sessions were recorded, transcribed, segmented, and double-coded \u2014 inter-rater reliability reached Cohen's \u03BA = 0.89, near-perfect agreement."), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "What users said, by category"), /* @__PURE__ */ React.createElement("div", { className: "brick-bars" }, categories.map(
    ([label, pct]) => /* @__PURE__ */ React.createElement("div", { className: "brick-bar-row", key: label }, /* @__PURE__ */ React.createElement("span", { className: "brick-bar-label" }, label), /* @__PURE__ */ React.createElement("div", { className: "brick-bar-track" }, /* @__PURE__ */ React.createElement("div", { className: "brick-bar-fill", style: { width: pct * 3 + "%" } })), /* @__PURE__ */ React.createElement("span", { className: "brick-bar-pct" }, pct.toFixed(1), "%"))
  )), /* @__PURE__ */ React.createElement("div", { className: "brick-quote", style: { marginTop: 28 } }, /* @__PURE__ */ React.createElement("p", null, "\u201CIt says \u2018Leaderboard.\u2019 I can't see exactly where the blocking page is. I'll look through these tabs\u2026 Hmm, I still can't find it.\u201D"), /* @__PURE__ */ React.createElement("span", { className: "brick-quote-src" }, "\u2014 Participant 1, attempting Task 1: Block 5 apps")), /* @__PURE__ */ React.createElement("p", null, "Most participants struggled with the first task. The app-blocking button \u2014 central to the app's core value proposition \u2014 was buried inside Profile, behind a dismissable notification. The most important feature was the hardest to find."))), /* @__PURE__ */ React.createElement("section", { className: "brick-section" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Key Findings"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("div", { className: "brick-findings" }, findings.map(
    ([num, h, p]) => /* @__PURE__ */ React.createElement("div", { className: "brick-finding", key: num }, /* @__PURE__ */ React.createElement("span", { className: "brick-finding-num" }, num), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "brick-finding-title", style: { fontSize: "30px" } }, h), /* @__PURE__ */ React.createElement("p", null, p)))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "brick-outcome" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Outcome"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-statement", style: { fontSize: "30px" } }, "14 prioritised redesign recommendations \u2014 Navigation, Hierarchy, Mechanics."), /* @__PURE__ */ React.createElement("div", { className: "brick-outcome-themes" }, /* @__PURE__ */ React.createElement("div", { className: "brick-outcome-theme" }, /* @__PURE__ */ React.createElement("h3", { className: "brick-outcome-title" }, "Navigation & discoverability ", /* @__PURE__ */ React.createElement("span", { className: "brick-outcome-count" }, "04 / 14")), /* @__PURE__ */ React.createElement("p", null, "Elevate App Block to the homepage. Collapse the profile notification banner by default. Add a one-time spotlight tutorial. Differentiate the Achievement and App-Block icons.")), /* @__PURE__ */ React.createElement("div", { className: "brick-outcome-theme" }, /* @__PURE__ */ React.createElement("h3", { className: "brick-outcome-title" }, "Visual hierarchy ", /* @__PURE__ */ React.createElement("span", { className: "brick-outcome-count" }, "05 / 14")), /* @__PURE__ */ React.createElement("p", null, "Enlarge headline stat numerals. Raise Settings-icon contrast. Broaden the palette beyond red/white. Strengthen the heart-favourite affordance. Surface coupon progress on Profile.")), /* @__PURE__ */ React.createElement("div", { className: "brick-outcome-theme" }, /* @__PURE__ */ React.createElement("h3", { className: "brick-outcome-title" }, "Behavioural mechanics ", /* @__PURE__ */ React.createElement("span", { className: "brick-outcome-count" }, "05 / 14")), /* @__PURE__ */ React.createElement("p", null, "30-second cool-down before any unblock action. Contextual daily-photo reminders. Add a weekly-summary view. Optional anonymous leaderboard mode. Reorder onboarding to defer commitment."))))), /* @__PURE__ */ React.createElement("section", { className: "brick-section" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Iteration"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "30px" } }, "Fixing the discoverability bug."), /* @__PURE__ */ React.createElement("div", { className: "brick-ba" }, /* @__PURE__ */ React.createElement("div", { className: "brick-ba-pair" }, /* @__PURE__ */ React.createElement("div", { className: "brick-ba-card" }, /* @__PURE__ */ React.createElement("span", { className: "brick-ba-tag brick-ba-tag-before" }, "Before"), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-media" }, /* @__PURE__ */ React.createElement("img", { src: "assets/brick/before_1.webp", alt: "App Block buried in Profile \u2014 before", draggable: "false" })), /* @__PURE__ */ React.createElement("h3", { className: "brick-ba-title" }, "App Block buried in Profile"), /* @__PURE__ */ React.createElement("p", null, "Users had to tap Profile \u2192 dismiss a notification banner \u2192 scroll \u2192 tap App Block. Average task time was high, and 3 of 6 participants needed prompting.")), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-card" }, /* @__PURE__ */ React.createElement("span", { className: "brick-ba-tag brick-ba-tag-after" }, "After"), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-media" }, /* @__PURE__ */ React.createElement("img", { src: "assets/brick/after_1.webp", alt: "App Block elevated to Homepage \u2014 after", draggable: "false" })), /* @__PURE__ */ React.createElement("h3", { className: "brick-ba-title" }, "App Block elevated to Homepage"), /* @__PURE__ */ React.createElement("p", null, "App Block becomes a primary action on the dashboard. The dismissable notification collapses by default. The core value of the product is now one tap away."))), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-pair" }, /* @__PURE__ */ React.createElement("div", { className: "brick-ba-card" }, /* @__PURE__ */ React.createElement("span", { className: "brick-ba-tag brick-ba-tag-before" }, "Before"), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-media" }, /* @__PURE__ */ React.createElement("video", { src: "assets/brick/before_2.mp4", autoPlay: true, loop: true, muted: true, playsInline: true })), /* @__PURE__ */ React.createElement("h3", { className: "brick-ba-title" }, "No friction on unblocking"), /* @__PURE__ */ React.createElement("p", null, "One tap dismissed an active block. Participant 6: \u201CThe blocking is too easy to turn off. It defeats the whole point.\u201D The feature existed; the deterrent didn\u2019t.")), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-card" }, /* @__PURE__ */ React.createElement("span", { className: "brick-ba-tag brick-ba-tag-after" }, "After"), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-media" }, /* @__PURE__ */ React.createElement("img", { src: "assets/brick/after_2.webp", alt: "A 30-second cool-down before unblock \u2014 after", draggable: "false" })), /* @__PURE__ */ React.createElement("h3", { className: "brick-ba-title" }, "A 30-second cool-down before unblock"), /* @__PURE__ */ React.createElement("p", null, "Directly suggested by Participant 2: \u201CYou should add some features that you need to wait for a bit \u2014 if you can unblock easily, it\u2019s not stopping me.\u201D A visible countdown gates every unblock action: small enough not to feel punitive, large enough to interrupt impulse."))), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-pair" }, /* @__PURE__ */ React.createElement("div", { className: "brick-ba-card" }, /* @__PURE__ */ React.createElement("span", { className: "brick-ba-tag brick-ba-tag-before" }, "Before"), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-media" }, /* @__PURE__ */ React.createElement("img", { src: "assets/brick/before_3.webp", alt: "First-time users dropped at Lobby \u2014 before", draggable: "false" })), /* @__PURE__ */ React.createElement("h3", { className: "brick-ba-title" }, "First-time users dropped at Lobby"), /* @__PURE__ */ React.createElement("p", null, "The isometric social space had no introduction. New users tapped around for a while before realising friends-as-bricks was the core social loop.")), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-card" }, /* @__PURE__ */ React.createElement("span", { className: "brick-ba-tag brick-ba-tag-after" }, "After"), /* @__PURE__ */ React.createElement("div", { className: "brick-ba-media" }, /* @__PURE__ */ React.createElement("img", { src: "assets/brick/after_3.webp", alt: "One-time tutorial overlay \u2014 after", draggable: "false" })), /* @__PURE__ */ React.createElement("h3", { className: "brick-ba-title" }, "One-time tutorial overlay"), /* @__PURE__ */ React.createElement("p", null, "A dismissable spotlight tour on first launch points at the App Block, the streak counter, and the friend lobby \u2014 then never reappears. No mandatory onboarding wall.")))))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "brick-reflection" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Reflection"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-statement", style: { fontSize: "44px", textAlign: "left", marginBottom: 28 } }, "A good idea is worthless if people can't find it."), /* @__PURE__ */ React.createElement("div", { className: "brick-reflect" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "What worked"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, /* @__PURE__ */ React.createElement("li", null, "Real-life setting (own devices) increased ecological validity."), /* @__PURE__ */ React.createElement("li", null, "Concurrent think-aloud + post-task interviews captured behavior and self-explanation."), /* @__PURE__ */ React.createElement("li", null, "Cross-cultural recruitment surfaced differences a homogeneous sample would miss."), /* @__PURE__ */ React.createElement("li", null, "Pre-defined codebook + inductive additions + \u03BA added rigor uncommon in early-stage UX work."))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "What I'd change"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, /* @__PURE__ */ React.createElement("li", null, "Run an earlier pilot \u2014 the App Block discoverability issue should have been caught before main sessions."), /* @__PURE__ */ React.createElement("li", null, "Reorder tasks: low-stakes before high-stakes."), /* @__PURE__ */ React.createElement("li", null, 'Write vivid scenarios ("imagine you just finished studying").'), /* @__PURE__ */ React.createElement("li", null, "Looser moderator stance \u2014 gentle prompting would have unlocked more insight.")))), /* @__PURE__ */ React.createElement("div", { className: "brick-reflect brick-reflect-spaced" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "Limitations"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Sample size (n = 6)."), " Patterns are qualitative; quantifying them requires a follow-up survey (n \u2265 50) before claiming generality."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Age gap."), " The product targets 13\u201325, but participants were 21\u201324 \u2014 a convenience sample drawn from the university environment. The 13\u201317 cohort, the demographic with the lowest self-regulation, was not represented."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Single re-test cycle."), " The redesigned flows were not re-tested with new users within the 10-week window. Recommendations are evidence-based but not empirically re-validated."))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "If I had another sprint..."), /* @__PURE__ */ React.createElement("p", null, "I\u2019d run the highest-impact redesign \u2014 App Block on the homepage \u2014 through a focused A/B test with 8\u201310 new users from the 13\u201317 cohort, measuring task time-to-first-block as the primary metric."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 12 } }, "The cool-down delay would follow as a behavioural-change study with a 2-week diary phase to measure actual unblock frequency, not just intent."))))), /* @__PURE__ */ React.createElement(OutroCTA, null), /* @__PURE__ */ React.createElement("footer", { className: "proj-footer" }, /* @__PURE__ */ React.createElement("a", { onClick: () => go("home"), style: { cursor: "pointer" } }, "\u2190 Home"), /* @__PURE__ */ React.createElement("a", { className: "proj-footer-next", onClick: () => go("case", next.id), style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("img", { src: next.src, alt: next.title, draggable: "false" }), /* @__PURE__ */ React.createElement("span", null, next.title), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192"))), peekIdx !== null && /* @__PURE__ */ React.createElement("div", { className: "brick-peek brick-peek-" + peekPhase, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("img", { src: screens[peekIdx][0], alt: "", draggable: "false" })));
}
Object.assign(window, { BrickCase });
