function DesertCase({ go }) {
  const next = PROJECTS[2];
  const proj = PROJECTS.find((p) => p.id === "desertification");
  const splitNum = (n) => {
    const m = String(n).match(/^([^0-9.]*)(.+)$/);
    return m ? { prefix: m[1], value: m[2] } : { prefix: "", value: String(n) };
  };
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
    {
      portrait: "assets/desert/persona_sterre.jpg",
      name: "Sterre Janssen",
      meta: "30 \xB7 Journalist & activist \xB7 Receptive amplifier",
      body: "High awareness, festival-goer, blogger. Yoga, photography, politics, veganism. Already cares \u2014 will share content the moment it lands. The audience that turns one post into ten."
    },
    {
      portrait: "assets/desert/persona_floris.jpg",
      name: "Floris van den Berg",
      meta: "21 \xB7 IBA student \xB7 Hard-to-reach",
      body: "Low environmental awareness, right-leaning, outgoing. Football, beer, Viper at parties. Doesn't follow climate accounts. The audience the campaign was actually designed to break through to."
    }
  ];
  const theories = [
    ["01", "Media Richness Theory", "Daft & Lengel (1986). Richer media \u2014 face-to-face, multi-sensory \u2014 outperform digital alone for low-involvement topics. The festival became the high-bandwidth medium the strategy hinged on."],
    ["02", "Framing \u2014 Loss vs Gain", "Carnahan, Hao & Yan (2019). All messages led with what audiences stand to lose \u2014 wine production, harvests, the landscape \u2014 not abstract environmental responsibility. Oracle: 48% of social users disengage from ads without an emotional trigger."],
    ["03", "Authority Persuasion", "Lee, Tsohou & Choi (2017). Source credibility transfers from messenger to message. Justified the influencer activation: 85% of young adults follow \u22651 influencer (Artevelde, 2021); 25% report purchase decisions shaped by one."]
  ];
  const outputs = [
    ["01", "Festival as rich-media anchor", `"Into the Desert \u2014 Benefit Festival, 25\u201327 July." Co-hosted by Viper, ticket revenue funding Commonland's reforestation. The live event is the rich-media moment Media Richness Theory predicts moves attitudes, not the social feed around it.`],
    ["02", "Loss-aversion content system", 'Every post leads with a specific loss \u2014 Spain as 4th largest wine exporter, harvests, the landscape. Loss framing outperforms gain framing for low-involvement audiences. Reframe: not "the land is dying," but "no wine to drink when we retire."'],
    ["03", '"Save the Land" infographic', "Long-form Illustrator infographic \u2014 causes, soil and biodiversity impact, statistics, the degradation process, solutions \u2014 designed for festival flyer and digital-post repurposing."],
    ["04", "KOL activation strategy", "Artists and festival headliners as authority figures. Outreach across TikTok, Spotify, and Instagram for pre- and post-event reach. Source credibility transferred from performer to cause."]
  ];
  const keyMessages = [
    "Sustainable land use is essential for a flourishing future.",
    "Protecting ecosystems today secures harvests for tomorrow.",
    "A healthy planet depends on balanced resource management."
  ];
  const ctas = [
    "Save the land, secure our future.",
    "Protect nature, grow tomorrow.",
    "Restore today, harvest tomorrow."
  ];
  const posts = [
    "assets/desert/post_who_cares.png",
    "assets/desert/post_dying.png",
    "assets/desert/post_spain_2050.png",
    "assets/desert/post_save_land.png",
    "assets/desert/post_friend.png",
    "assets/desert/post_festival.png",
    "assets/desert/post_video.png",
    "assets/desert/post_viper_cactus.png"
  ];
  return /* @__PURE__ */ React.createElement("article", { "data-screen-label": "Case: Desertification" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero-left" }, /* @__PURE__ */ React.createElement("div", { className: "brick-eyebrow" }, "02 \xB7 Content Strategy & Campaign Design"), /* @__PURE__ */ React.createElement("h1", { className: "brick-title brick-title-logo" }, /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "Into the Desert \u2014 Content Strategy & Campaign Design for a Desertification Awareness Project"), /* @__PURE__ */ React.createElement("img", { src: "assets/desert/title_logo.png", alt: "", draggable: "false" })), /* @__PURE__ */ React.createElement("p", { className: "brick-subtitle" }, "A theory-driven awareness campaign for Commonland \xD7 Viper \u2014 turning a slow climate crisis into a benefit festival Dutch 18\u201334s would actually attend."), /* @__PURE__ */ React.createElement("div", { className: "brick-tags" }, "Content Strategy  \xB7  Campaign Design  \xB7  Visual Communication"), /* @__PURE__ */ React.createElement("div", { className: "brick-meta" }, [
    ["Role", "Strategist & Visual Designer"],
    ["Contributions", "I co-led the framing strategy and personally produced the \u201CSave the Land\u201D infographic and bilingual content templates."],
    ["Context", "Module 1, BSc Communication Science, University of Twente \xB7 Team of 4"],
    ["Status", "Academic deliverable \u2014 strategy + creative system, not deployed"],
    ["Tools", "Adobe Illustrator \xB7 Miro \xB7 Canva"]
  ].map(
    ([k, v]) => /* @__PURE__ */ React.createElement("div", { className: "brick-meta-row", key: k }, /* @__PURE__ */ React.createElement("span", { className: "brick-meta-key" }, k), /* @__PURE__ */ React.createElement("span", { className: "brick-meta-val" }, v))
  ))), /* @__PURE__ */ React.createElement("div", { className: "brick-hero-right" }, /* @__PURE__ */ React.createElement("img", { className: "brick-hero-img", src: "assets/desert/viper_cactus_hero.jpg", alt: "Viper \xD7 Into the Desert \u2014 Cactus Edition", draggable: "false", style: { objectPosition: "top center", padding: 0 } }))), /* @__PURE__ */ React.createElement("div", { className: "brick-strip" }, [
    ["10", "Weeks, end-to-end"],
    ["3", "Theoretical frameworks"],
    ["8", "Social posts mocked"],
    ["3M", "Target audience"]
  ].map(([n, d]) => {
    const { prefix, value } = splitNum(n);
    return /* @__PURE__ */ React.createElement("div", { className: "brick-strip-cell", key: d }, /* @__PURE__ */ React.createElement(ScrambleNum, { value, prefix }), /* @__PURE__ */ React.createElement("span", { className: "brick-strip-desc" }, d));
  })), /* @__PURE__ */ React.createElement("nav", { className: "brick-toc", "aria-label": "Section navigation" }, /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement("option", { value: "desert-problem" }, "The Problem"),
    /* @__PURE__ */ React.createElement("option", { value: "desert-audience" }, "Target Audience"),
    /* @__PURE__ */ React.createElement("option", { value: "desert-strategy" }, "The Strategy"),
    /* @__PURE__ */ React.createElement("option", { value: "desert-takeaway" }, "Takeaway")
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "desert-problem" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "The Problem", /* @__PURE__ */ React.createElement("img", { className: "brick-label-asset", src: "assets/desert/sdg15.jpeg", alt: "UN SDG 15 \u2014 Life on Land", style: { width: "243px" } })), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead" }, "40% of Earth's land is degraded. The Sahara is creeping into southern Spain. The Dutch 18\u201334 cohort \u2014 the people whose generation will inherit the consequence \u2014 mostly couldn't tell you what desertification means."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Commonland"), " is an NGO targeting 100M hectares of restored land by 2040. ", /* @__PURE__ */ React.createElement("b", null, "Viper"), " is a Dutch hard-seltzer with 30% market share of its segment. The brief: design a campaign that lets the brand's reach carry the NGO's message \u2014 without it dissolving into corporate climate fluff."), /* @__PURE__ */ React.createElement("p", { className: "brick-statement-sm", style: { marginTop: 20 } }, "How do you make a slow crisis feel like it is happening now \u2014 to someone scrolling Instagram at 11 pm?"))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "desert-goal" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "SMART Goal"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-statement", style: { fontSize: "30px" } }, "Increase desertification awareness among Dutch 18\u201334 year-olds by 10% within 3 months \u2014 measured by social engagement metrics and festival participation."))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "desert-audience" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Target Audience"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead-sm", style: { fontSize: "30px" } }, "3M people. 95% online daily. One shared interest."), /* @__PURE__ */ React.createElement("p", null, "The Dutch 18\u201334 cohort is \u22483M people (CBS, 2019) \u2014 17% of the Dutch population, 95% of whom use social media daily. The age band is internally diverse: ideologies, classes, channel preferences differ widely. The reliable common ground was ", /* @__PURE__ */ React.createElement("b", null, "festivals"), " (Brecht, 2024). The strategy used that as the anchor."), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "Audience Personas"), /* @__PURE__ */ React.createElement("p", { style: { fontSize: "15px", color: "rgba(0,0,0,0.6)", marginBottom: 16 } }, "Two ends of the spectrum the campaign had to address \u2014 one needs to be persuaded, the other needs to be activated."), /* @__PURE__ */ React.createElement("div", { className: "brick-personas brick-personas-portrait" }, personas.map(
    (p) => /* @__PURE__ */ React.createElement("div", { className: "brick-persona", key: p.name }, /* @__PURE__ */ React.createElement("div", { className: "brick-persona-portrait" }, /* @__PURE__ */ React.createElement("img", { src: p.portrait, alt: p.name, draggable: "false" })), /* @__PURE__ */ React.createElement("div", { className: "brick-persona-name-lg" }, p.name), /* @__PURE__ */ React.createElement("div", { className: "brick-persona-meta" }, p.meta), /* @__PURE__ */ React.createElement("p", { className: "brick-persona-body" }, p.body))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "desert-theory" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Theory"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "30px" } }, "Three frameworks did the load-bearing work."), /* @__PURE__ */ React.createElement("div", { className: "brick-findings", style: { marginTop: 18 } }, theories.map(
    ([num, h, p]) => /* @__PURE__ */ React.createElement("div", { className: "brick-finding", key: num }, /* @__PURE__ */ React.createElement("span", { className: "brick-finding-num" }, num), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "brick-finding-title", style: { fontSize: "22px" } }, h), /* @__PURE__ */ React.createElement("p", null, p)))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section brick-section-wide", id: "desert-strategy" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "The Strategy"), /* @__PURE__ */ React.createElement("div", { className: "brick-body brick-body-wide" }, /* @__PURE__ */ React.createElement("div", { className: "brick-strategy-grid" }, outputs.map(
    ([num, h, p]) => /* @__PURE__ */ React.createElement("div", { className: "brick-strategy-card", key: num }, /* @__PURE__ */ React.createElement("span", { className: "brick-finding-num" }, num), /* @__PURE__ */ React.createElement("h3", { className: "brick-finding-title", style: { fontSize: "22px" } }, h), /* @__PURE__ */ React.createElement("p", null, p))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "desert-messages" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Messages & CTAs"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("div", { className: "brick-reflect brick-reflect-spaced" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "30px" } }, "Key messages"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, keyMessages.map((m) => /* @__PURE__ */ React.createElement("li", { key: m, style: { fontSize: "22px" } }, m)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "30px" } }, "Calls-to-action"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets brick-bullets-mark" }, ctas.map(
    (c, i) => /* @__PURE__ */ React.createElement("li", { key: c, style: { fontSize: "22px" }, className: i === 0 ? "is-chosen" : void 0 }, c, i === 0 && /* @__PURE__ */ React.createElement("span", { className: "brick-bullet-tag" }, " \xB7 Final pick"))
  )))))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "desert-posts", style: { paddingBottom: 0 } }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Selected Visuals"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" })), /* @__PURE__ */ React.createElement("div", { className: "brick-screens-grid", "aria-label": "Selected campaign posts" }, posts.map(
    (src, i) => /* @__PURE__ */ React.createElement("figure", { className: "brick-screen-fig", key: i }, /* @__PURE__ */ React.createElement(
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
        "aria-label": "Hold to enlarge campaign post"
      },
      /* @__PURE__ */ React.createElement("img", { src, alt: "Campaign post " + (i + 1), draggable: "false" })
    ))
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "desert-infographic", style: { paddingBottom: 0 } }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Save the Land"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", null, "End-to-end infographic in Adobe Illustrator \u2014 six sections (Causes \u2192 Process \u2192 Impact \u2192 Soil & Biodiversity \u2192 Population \u2192 Solutions) wrapped around a central cactus, ending on the campaign CTA."))), /* @__PURE__ */ React.createElement("div", { className: "desert-infographic-wrap" }, /* @__PURE__ */ React.createElement("img", { className: "desert-infographic", src: "assets/desert/save_the_land_infographic.png", alt: "Save the Land \u2014 desertification infographic", draggable: "false" })), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "desert-reflection" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Reflection"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("div", { className: "brick-reflect" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "What worked"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, /* @__PURE__ */ React.createElement("li", null, "Loss-framing as the editorial backbone made every post writeable to one principle."), /* @__PURE__ */ React.createElement("li", null, "Anchoring to the festival kept Media Richness from being an academic claim \u2014 it became the deliverable."), /* @__PURE__ */ React.createElement("li", null, "Two-extreme personas (Sterre / Floris) kept the team honest about who we were actually trying to move."), /* @__PURE__ */ React.createElement("li", null, "Theory citations forced the strategy to be defensible at each decision point."))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "What I'd change"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, /* @__PURE__ */ React.createElement("li", null, "Pilot-test the loss-framing on 5\u201310 actual Floris-types before committing the whole content system to it."), /* @__PURE__ */ React.createElement("li", null, "Mock up gain-framed alternatives for A/B in the social plan \u2014 claim was theoretical, not validated."), /* @__PURE__ */ React.createElement("li", null, `Production-test the "Save the Land" infographic on phone screens; festival flyer at A3 doesn't transfer to 9:16 cleanly.`), /* @__PURE__ */ React.createElement("li", null, "Build a real measurement plan, not just engagement metrics \u2014 survey baseline + post-festival lift would be the actual evidence.")))), /* @__PURE__ */ React.createElement("div", { className: "brick-reflect brick-reflect-spaced" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "Limitations"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "No audience research."), " Personas were synthesized from secondary literature \u2014 no interviews with actual Floris-types."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Not deployed."), " Festival, posts, infographic exist as concepts. No reach data, no engagement data, no awareness-lift survey."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Single-market focus (NL)."), " Strategy doesn't transfer to the actual desertification regions (Spain, North Africa) without rework."))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "If I had another module"), /* @__PURE__ */ React.createElement("p", null, `I'd run 8\u201310 short interviews with the Floris persona \u2014 actual UT students who don't follow environmental accounts \u2014 to test whether the "no wine to drink when we retire" loss frame lands as predicted, or reads as cynical. The whole strategy depends on that one frame working.`), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 12 } }, "Then I'd shop the festival concept to Viper's actual marketing team. The point of a corporate-NGO partnership case is that the partnership has to be plausible to the corporate side \u2014 and that's a conversation we never had."))))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "desert-takeaway" }, /* @__PURE__ */ React.createElement("div", { className: "brick-label" }, "Takeaway"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-statement", style: { fontSize: "44px", textAlign: "left" } }, "People don't act on big, distant problems. They act on things close to them."), /* @__PURE__ */ React.createElement("p", null, `The campaign was about desertification \u2014 a slow problem on land most of our audience had never seen. Telling people "the land is dying" didn't work. So we flipped it: "the wine, the food, the places you already love are disappearing." Same facts, but now it felt personal \u2014 close enough for a 21-year-old at a festival to care.`), /* @__PURE__ */ React.createElement("h4", { style: { fontSize: "22px", fontWeight: 500, margin: "24px 0 8px" } }, "Key design learning"), /* @__PURE__ */ React.createElement("p", null, "Everything in the campaign came back to that one idea, which is a good sign the strategy was clear. If a whole creative system can grow from a single rule, you've got the foundation right."), /* @__PURE__ */ React.createElement("p", null, `The part I'd check first next time is the "loss" angle itself \u2014 it might feel motivating to some people and preachy to others. With what I have now, the smart next step is talking to 8\u201310 people from the hard-to-reach group before building everything on that one assumption.`))), /* @__PURE__ */ React.createElement(OutroCTA, null), /* @__PURE__ */ React.createElement("footer", { className: "proj-footer" }, /* @__PURE__ */ React.createElement("a", { onClick: () => go("home"), style: { cursor: "pointer" } }, "\u2190 Home"), /* @__PURE__ */ React.createElement("a", { className: "proj-footer-next", onClick: () => go("case", next.id), style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("img", { src: next.src, alt: next.title, draggable: "false" }), /* @__PURE__ */ React.createElement("span", null, next.title), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192"))), peekIdx !== null && /* @__PURE__ */ React.createElement("div", { className: "brick-peek brick-peek-" + peekPhase, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("img", { src: posts[peekIdx], alt: "", draggable: "false" })));
}
function VRCase({ go }) {
  const next = PROJECTS[3];
  const proj = PROJECTS.find((p) => p.id === "supermarket");
  const splitNum = (n) => {
    const m = String(n).match(/^([^0-9.]*)(.+)$/);
    return m ? { prefix: m[1], value: m[2] } : { prefix: "", value: String(n) };
  };
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
  const theories = [
    ["01", "Social proof as a navigation cue", 'When uncertain, people copy others. We tested whether a virtual crowd in the healthy aisle would act as a descriptive norm \u2014 a soft signal that "this is what to choose."'],
    ["02", "Stimulus \u2192 Organism \u2192 Response", "A model framing why a crowd could pull shoppers in, what shifts internally, and what to measure when it doesn't translate to action."],
    ["03", "Susceptibility to Social Influence", "Some people copy others more than others. SSI was measured post-task to test whether high-SSI participants would respond more strongly to the crowd."]
  ];
  const hypotheses = [
    ["H1", "Crowded healthy aisles increase the proportion of healthy products (Nutri-Score A/B) selected vs. control."],
    ["H2", "Participants spend significantly more time in crowded healthy aisles than in empty ones."],
    ["H3", "The effect of social density on healthy selection is stronger for participants high in SSI."]
  ];
  const stimuli = [
    ["assets/vr/aisle_unhealthy.jpg", "Unhealthy aisle", "Snacks, sugary cereals, confectionery."],
    ["assets/vr/aisle_neutral.jpg", "Neutral aisle", "Milk, bread, breakfast staples."],
    ["assets/vr/aisle_healthy.jpg", "Healthy aisle", "Fresh produce, organic. The target aisle for the manipulation."]
  ];
  const conditions = [
    ["assets/vr/cond_a.jpg", "Condition A \xB7 Experimental", "Healthy section populated with 5\u20137 static NPC avatars. Unhealthy section empty. Avatars positioned to function as a social-proof cue at the shelf edge."],
    ["assets/vr/cond_b.jpg", "Condition B \xB7 Control", "Supermarket empty except for one NPC walking across non-target aisles. Auditory and environmental factors held constant across both conditions."]
  ];
  const results = [
    ["H1", "Healthy product proportion", "0.47 vs 0.49", "p = .717", "d = \u22120.10", "ns"],
    ["H2a", "Dwell \u2014 healthy aisle (s)", "83.3 vs 100.4", "p = .356", "d = \u22120.27", "ns"],
    ["H2b", "Dwell \u2014 unhealthy aisle (s)", "66.1 vs 44.3", "p = .133", "d = 0.43", "trend"],
    ["H3", "Condition \xD7 SSI interaction", "\u2014", "p = .118", "\u2014", "ns"]
  ];
  const findings = [
    ["01", "Path changed, choice didn't.", "Final product selection was statistically identical between groups (47% vs 49% healthy, p = .717). Dwell time in the unhealthy aisle, however, dropped from 66s (control) to 44s (experimental) \u2014 a medium effect (d = 0.43). The crowd didn't make people pick healthy. The absence of a crowd in the unhealthy aisle made them leave faster."],
    ["02", "Manipulation check failure.", "An independent t-test on perceived crowding showed no significant difference between groups (M = 3.86 vs 3.57, p = .433). Participants didn't consciously register the experimental condition as more crowded. Static avatars read as obstacles, not as social referents. Without perceived social presence, Social Impact Theory predicts what we observed: no effect on choice."],
    ["03", "SSI direction inverted.", "The Condition \xD7 SSI interaction term was not significant (p = .118), but the regression lines crossed: in the control group, higher SSI predicted more healthy choices; in the experimental condition, higher SSI predicted slightly fewer. A statically populated aisle may have signalled \u201Cthis is congested\u201D rather than \u201Cthis is desirable\u201D to SSI-sensitive shoppers."]
  ];
  return /* @__PURE__ */ React.createElement("article", { "data-screen-label": "Case: VR Supermarket" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero-left" }, /* @__PURE__ */ React.createElement("div", { className: "brick-eyebrow" }, "03 \xB7 VR Research & Behavioural Science"), /* @__PURE__ */ React.createElement("h1", { className: "brick-title brick-title-red", "aria-label": "VR Supermarket \u2014 Behavioural Science Research in Virtual Reality" }, "VR", /* @__PURE__ */ React.createElement("br", null), "Supermarket"), /* @__PURE__ */ React.createElement("p", { className: "brick-subtitle" }, "A between-subjects VR experiment (N = 50) testing whether virtual crowd presence in healthy aisles nudges food selection \u2014 and what a null result says about social realism in immersive retail."), /* @__PURE__ */ React.createElement("div", { className: "brick-tags" }, "VR Research  \xB7  Behavioural Science  \xB7  Statistical Analysis"), /* @__PURE__ */ React.createElement("div", { className: "brick-meta" }, [
    ["Role", "Designer & Statistical Analyst"],
    ["Contributions", "I built the Unity store environment, designed the aisle layout, and ran the statistical analysis in R."],
    ["Context", "BSc CS \xB7 Module 7 \xB7 UT \xB7 Team of 4"],
    ["Tools", "Unity \xB7 Meta Quest VR \xB7 Qualtrics \xB7 R"]
  ].map(
    ([k, v]) => /* @__PURE__ */ React.createElement("div", { className: "brick-meta-row", key: k }, /* @__PURE__ */ React.createElement("span", { className: "brick-meta-key" }, k), /* @__PURE__ */ React.createElement("span", { className: "brick-meta-val" }, v))
  ))), /* @__PURE__ */ React.createElement("div", { className: "brick-hero-right" }, /* @__PURE__ */ React.createElement("img", { className: "brick-hero-img", src: "assets/vr/store_cutaway.jpg", alt: "3D cutaway of the VR supermarket environment", draggable: "false", style: { objectPosition: "top center", padding: 0 } }))), /* @__PURE__ */ React.createElement("div", { className: "brick-strip" }, [
    ["50", "Participants"],
    ["2", "Conditions"],
    ["d = 0.43", "Effect on unhealthy dwell"],
    ["3", "Hypotheses tested"]
  ].map(([n, d]) => {
    const { prefix, value } = splitNum(n);
    return /* @__PURE__ */ React.createElement("div", { className: "brick-strip-cell", key: d }, /* @__PURE__ */ React.createElement(ScrambleNum, { value, prefix }), /* @__PURE__ */ React.createElement("span", { className: "brick-strip-desc" }, d));
  })), /* @__PURE__ */ React.createElement("nav", { className: "brick-toc", "aria-label": "Section navigation" }, /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement("option", { value: "vr-problem" }, "The Problem"),
    /* @__PURE__ */ React.createElement("option", { value: "vr-theory" }, "Setup"),
    /* @__PURE__ */ React.createElement("option", { value: "vr-results" }, "Results"),
    /* @__PURE__ */ React.createElement("option", { value: "vr-takeaway" }, "Takeaway")
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "vr-problem" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "The Problem"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead" }, "Unhealthy diets persist in retail environments that prioritise convenience. Could a virtual crowd, placed in the right aisle, nudge people toward healthier choices?"), /* @__PURE__ */ React.createElement("p", null, "Supermarkets are the primary decision environment for what people eat \\u2014 and one of the hardest places to isolate a single behavioural cue. VR lets us hold everything constant (store, products, lighting) and vary only the one thing that matters: the presence of others."), /* @__PURE__ */ React.createElement("p", { className: "brick-statement-sm", style: { marginTop: 20, fontSize: "30px" } }, "\u201CTo what extent does social density in healthy aisles influence consumers' food choices and spatial engagement in a virtual supermarket?\u201D"))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "vr-theory" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Theory"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: "17px" } }, "Three frameworks did the load-bearing work."), /* @__PURE__ */ React.createElement("div", { className: "brick-findings", style: { marginTop: 18 } }, theories.map(
    ([num, h, p]) => /* @__PURE__ */ React.createElement("div", { className: "brick-finding", key: num }, /* @__PURE__ */ React.createElement("span", { className: "brick-finding-num" }, num), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "brick-finding-title" }, h), /* @__PURE__ */ React.createElement("p", null, p)))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "vr-hypotheses" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Hypotheses"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("div", { className: "vr-hyp-list" }, hypotheses.map(
    ([id, body]) => /* @__PURE__ */ React.createElement("div", { className: "vr-hyp", key: id }, /* @__PURE__ */ React.createElement("span", { className: "vr-hyp-id" }, id), /* @__PURE__ */ React.createElement("p", null, body))
  )), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "Research framework"), /* @__PURE__ */ React.createElement("div", { className: "vr-framework" }, /* @__PURE__ */ React.createElement("img", { src: "assets/vr/framework.png", alt: "Research framework: Social Density \u2192 Healthy Choices, moderated by SSI", draggable: "false" })))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "vr-method" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Method", /* @__PURE__ */ React.createElement("img", { className: "brick-label-asset vr-method-photo", src: "assets/vr/lab_session.jpeg", alt: "Participant wearing a Meta Quest headset during a VR session at the BMS Lab", draggable: "false" })), /* @__PURE__ */ React.createElement("div", { className: "brick-body", style: { paddingTop: 48 } }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead-sm", style: { fontSize: "30px" } }, "A 3D supermarket in Unity. Meta Quest. 50 participants. Two conditions."), /* @__PURE__ */ React.createElement("p", null, "Participants entered a customised supermarket in Unity via Meta Quest headsets at the University of Twente's BMS Lab. After a teleportation-movement habituation phase, they were instructed to ", /* @__PURE__ */ React.createElement("b", null, "\u201Ccollect five breakfast items.\u201D"), " All movement was logged via Unity positional tracking. Post-task, participants completed a Qualtrics questionnaire covering the SSI scale, the manipulation check, and demographic controls."))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", style: { paddingTop: 0, paddingBottom: 16 } }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel", style: { marginTop: 0 } }, "The environment"), /* @__PURE__ */ React.createElement("p", null, "Three aisles \u2014 unhealthy, neutral, healthy \u2014 with identical shelf space and product counts. Only the social cue varied."))), /* @__PURE__ */ React.createElement("div", { className: "vr-stimuli-grid" }, stimuli.map(
    ([src, name, body], i) => /* @__PURE__ */ React.createElement("figure", { className: "vr-stimulus", key: src }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "vr-stimulus-img",
        onPointerDown: (e) => {
          if (window.matchMedia("(max-width: 640px)").matches) return;
          e.currentTarget.setPointerCapture(e.pointerId);
          openPeek(i);
        },
        onPointerUp: closePeek,
        onPointerCancel: closePeek
      },
      /* @__PURE__ */ React.createElement("img", { src, alt: name, draggable: "false" })
    ), /* @__PURE__ */ React.createElement("figcaption", { className: "vr-stimulus-cap" }, /* @__PURE__ */ React.createElement("span", { className: "vr-stimulus-name" }, name), /* @__PURE__ */ React.createElement("span", { className: "vr-stimulus-body" }, body)))
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", style: { paddingTop: 0 } }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Store layout", /* @__PURE__ */ React.createElement("img", { className: "brick-label-asset vr-method-photo", src: "assets/vr/layout_top.jpg", alt: "Top-down layout of the VR supermarket", draggable: "false" })), /* @__PURE__ */ React.createElement("div", { className: "brick-body", style: { paddingTop: 48 } }, /* @__PURE__ */ React.createElement("p", null, "Top-down view of the Unity store. Participants entered through the right, encountered non-target aisles first, then traversed unhealthy \u2192 neutral \u2192 healthy sections."))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", style: { paddingTop: 0 } }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced" }, "The two conditions"), /* @__PURE__ */ React.createElement("p", null, "Between-subjects assignment. Same environment, same products. Only NPC presence differed."))), /* @__PURE__ */ React.createElement("div", { className: "vr-cond-grid" }, conditions.map(
    ([src, name, body], i) => /* @__PURE__ */ React.createElement("figure", { className: "vr-cond", key: src }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "vr-cond-img",
        onPointerDown: (e) => {
          if (window.matchMedia("(max-width: 640px)").matches) return;
          e.currentTarget.setPointerCapture(e.pointerId);
          openPeek(3 + i);
        },
        onPointerUp: closePeek,
        onPointerCancel: closePeek
      },
      /* @__PURE__ */ React.createElement("img", { src, alt: name, draggable: "false" })
    ), /* @__PURE__ */ React.createElement("figcaption", { className: "vr-cond-cap" }, /* @__PURE__ */ React.createElement("span", { className: "vr-cond-name" }, name), /* @__PURE__ */ React.createElement("p", null, body)))
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "vr-results" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Results", /* @__PURE__ */ React.createElement("img", { className: "brick-label-asset vr-results-plot", src: "assets/vr/interaction_plot.png", alt: "Interaction effect of SSI and condition on healthy product proportion", draggable: "false" })), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", null, "Independent samples t-tests on the primary outcomes; multiple linear regression for the moderation. All tests at \u03B1 = .05, two-tailed."), /* @__PURE__ */ React.createElement("div", { className: "vr-results-table" }, /* @__PURE__ */ React.createElement("div", { className: "vr-results-row vr-results-head" }, /* @__PURE__ */ React.createElement("span", null, "Hypothesis"), /* @__PURE__ */ React.createElement("span", null, "Measure"), /* @__PURE__ */ React.createElement("span", null, "Control vs Exp."), /* @__PURE__ */ React.createElement("span", null, "p"), /* @__PURE__ */ React.createElement("span", null, "Effect")), results.map(
    ([hyp, dv, mean, p, d, status]) => /* @__PURE__ */ React.createElement("div", { className: "vr-results-row " + (status === "trend" ? "is-trend" : "is-ns"), key: hyp }, /* @__PURE__ */ React.createElement("span", { className: "vr-results-hyp" }, hyp), /* @__PURE__ */ React.createElement("span", null, dv), /* @__PURE__ */ React.createElement("span", { className: "vr-results-mean" }, mean), /* @__PURE__ */ React.createElement("span", { className: "vr-results-p" }, p), /* @__PURE__ */ React.createElement("span", { className: "vr-results-d" }, d))
  )), /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-spaced", style: { marginTop: 36 } }, "SSI \xD7 Condition interaction"), /* @__PURE__ */ React.createElement("p", null, "Regression of healthy-choice proportion on Condition, mean-centered SSI, and their interaction. F(3,46) = 1.00, p = .401, R\xB2 = .06."), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 12 } }, "The lines cross \u2014 in the control group, higher SSI predicts more healthy choices; in the experimental condition the slope flattens and slightly reverses. The interaction term itself is not significant (p = .118), but the directional pattern is opposite to H3's prediction."))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "vr-findings" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Findings"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("div", { className: "brick-findings" }, findings.map(
    ([num, h, p]) => /* @__PURE__ */ React.createElement("div", { className: "brick-finding", key: num }, /* @__PURE__ */ React.createElement("span", { className: "brick-finding-num" }, num), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "brick-finding-title" }, h), /* @__PURE__ */ React.createElement("p", null, p)))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "vr-reflection" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Reflection"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("div", { className: "brick-reflect" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "What worked"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, /* @__PURE__ */ React.createElement("li", null, "Pre-registered hypotheses forced clean separation of selection vs. spatial outcomes \\u2014 which revealed the d = 0.43 unhealthy-dwell effect."), /* @__PURE__ */ React.createElement("li", null, "Behavioural logs + survey caught the failed manipulation check that pure choice data would have hidden."))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "Limitations"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Failed manipulation check."), " Participants didn't perceive the condition as more crowded (p = .433) \\u2014 caveats every test that followed."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "Underpowered."), " N = 50, n = 25 per cell."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("b", null, "VR novelty."), " First-time-in-VR participants attended to the environment, not the cue.")))), /* @__PURE__ */ React.createElement("div", { className: "brick-reflect brick-reflect-spaced" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "brick-sublabel brick-sublabel-cased", style: { fontSize: "22px" } }, "Next iteration"), /* @__PURE__ */ React.createElement("ul", { className: "brick-bullets" }, /* @__PURE__ */ React.createElement("li", null, "Dynamic NPCs with gaze + product interaction \\u2014 static avatars read as furniture."), /* @__PURE__ */ React.createElement("li", null, "Pilot the manipulation on 5\\u201310 users before the full run."), /* @__PURE__ */ React.createElement("li", null, 'Eye-tracking (Quest Pro) to separate \\"noticed\\" from \\"responded to.\\"'), /* @__PURE__ */ React.createElement("li", null, "Reframe the DV: measure aisle entry / dwell / exit, not basket composition. d = 0.43 says density operates on ", /* @__PURE__ */ React.createElement("b", null, "navigation"), ", not ", /* @__PURE__ */ React.createElement("b", null, "decision"), ".")))))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "vr-takeaway" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Takeaway"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-statement", style: { fontSize: "44px", textAlign: "left" } }, "Sometimes the result you didn't expect is more useful than the one you were chasing."), /* @__PURE__ */ React.createElement("p", null, "I expected that a crowd of avatars near the healthy food would make people pick healthier items. It didn't \u2014 baskets looked about the same either way (p = .717). But people spent roughly a third less time in the unhealthy aisle when it was empty (d = 0.43). The crowd didn't pull people in; an empty aisle quietly pushed them out."), /* @__PURE__ */ React.createElement("h4", { style: { fontSize: "22px", fontWeight: 500, margin: "24px 0 8px" } }, "Key design learning"), /* @__PURE__ */ React.createElement("p", null, `Why it didn't fully work: the avatars just stood there, so people read them as objects, not shoppers. For a "crowd" to influence anyone, the people have to look like they're actually making a choice \u2014 not just standing around.`), /* @__PURE__ */ React.createElement("p", null, "With what I have now, the next experiment is obvious \u2014 test the opposite idea directly: does an empty, quiet unhealthy aisle move people on its own, without needing a crowd anywhere at all?"))), /* @__PURE__ */ React.createElement(OutroCTA, null), /* @__PURE__ */ React.createElement("footer", { className: "proj-footer" }, /* @__PURE__ */ React.createElement("a", { onClick: () => go("home"), style: { cursor: "pointer" } }, "\u2190 Home"), /* @__PURE__ */ React.createElement("a", { className: "proj-footer-next", onClick: () => go("case", next.id), style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("img", { src: next.src, alt: next.title, draggable: "false" }), /* @__PURE__ */ React.createElement("span", null, next.title), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192"))), peekIdx !== null && /* @__PURE__ */ React.createElement("div", { className: "brick-peek brick-peek-" + peekPhase, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("img", { src: [
    ...stimuli.map((s) => s[0]),
    ...conditions.map((c) => c[0])
  ][peekIdx], alt: "", draggable: "false" })));
}
function KNSContribSlideshow({ images }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % images.length), 2500);
    return () => clearInterval(id);
  }, [images.length]);
  return /* @__PURE__ */ React.createElement("div", { className: "kns-slideshow" }, images.map(
    (src, idx) => /* @__PURE__ */ React.createElement(
      "img",
      {
        key: src,
        src,
        alt: "",
        draggable: "false",
        style: { opacity: idx === i ? 1 : 0, transition: "opacity 0.6s ease" }
      }
    )
  ));
}
function KNSCase({ go }) {
  const next = PROJECTS[4];
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
  const splitNum = (n) => {
    const m = String(n).match(/^([^0-9.]*)(.+)$/);
    return m ? { prefix: m[1], value: m[2] } : { prefix: "", value: String(n) };
  };
  const phases = [
    ["01", "Merchant onboarding", "Partner Japanese-cuisine venues first, mechanics second. We onboarded 15+ stores (yakiniku, yakitori, izakaya, ramen, caf\xE9s, curry, tea) into the cultural map before any holder-facing occupation feature launched \u2014 stores needed to see a real audience before joining a token economy.", "assets/kns/merchant.jpg"],
    ["02", "User research & community activation", "Ongoing community research, including the 4/15 town hall (\u91CC\u6C11\u5927\u6703) that surfaced what holders actually wanted versus what the team assumed. Activation ran through cross-NFT whitelist collaborations (Neocypher, \u5462\u5583\u8C93, RPF, Kaiju, Mepunk, Elysium DAO, Demi-human) and the food-scene partner network. Town-hall concerns \u2014 runway, second-wave pricing, physical utility \u2014 fed directly into the map roadmap.", "assets/kns/ama.jpg"],
    ["03", "Occupation reward system", "Holders could claim partner shops with real-time leaderboards. Reward design favored repeat engagement over one-time hype \u2014 daily activity, contested territories, merchant-issued perks. Off-ramps (shop-wide discount drops, not just top-occupier rewards) gave casual holders a reason to stay.", "assets/kns/occupation.jpg"]
  ];
  const contributions = [
    ["User research \u2014 topic-testing protocol", "Ran the team's formal method for deciding which topics earned action. Shaped Discord IA, town-hall agendas, and merchant onboarding scripts. Co-facilitated the 4/15 town hall on the post-launch drop.", [
      ["01", "Float a topic"],
      ["02", "Count responses"],
      ["03", "Retire if quiet"],
      ["04", "Escalate after 3 confirmations"]
    ]],
    ["Merchant & cross-community liaison", "Partner-outreach POC. The job was translation \u2014 between Web3 jargon and what felt natural to a shop owner reading a one-pager over the counter. Grew the network across yakiniku, yakitori, izakaya, caf\xE9, curry, ramen, and tea."],
    ["Social content (team output)", "Part of a campaign that shipped ~400 posts across IG, Twitter, and Discord. My pieces: bilingual EN/ZH copy for major announcements, merchant-feature templates, and the editorial-voice guidelines used across both pods."],
    ["Offline events", "Co-hosted IRL events at partner shops to make membership feel embodied. Co-planned the 2/12 Discord-stage town hall \u2014 the inflection point where concerns were addressed in public. We tracked repeat attendance, not headcount."]
  ];
  const contribSlides = [
    "assets/kns/contrib_offline_1.jpeg",
    "assets/kns/contrib_voicechat.jpeg",
    "assets/kns/contrib_instagram.jpeg",
    "assets/kns/contrib_offline_2.jpeg",
    "assets/kns/contrib_planning.jpeg"
  ];
  const posts = [
    "assets/kns/post_event_3.jpg",
    "assets/kns/post_event.jpeg",
    "assets/kns/post_event_2.jpg",
    "assets/kns/post_launch.jpeg",
    "assets/kns/post_ramen_collab.png",
    "assets/kns/post_launch_2.jpeg"
  ];
  return /* @__PURE__ */ React.createElement("article", { "data-screen-label": "Case: Katana" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero" }, /* @__PURE__ */ React.createElement("div", { className: "brick-hero-left" }, /* @__PURE__ */ React.createElement("div", { className: "brick-eyebrow" }, "04 \xB7 Community Strategy & NFT Utility"), /* @__PURE__ */ React.createElement("h1", { className: "brick-title brick-title-red", "aria-label": "Katana N' Samurai \u2014 Visual Design, Branding & Community Management" }, "Katana N'", /* @__PURE__ */ React.createElement("br", null), "Samurai"), /* @__PURE__ */ React.createElement("p", { className: "brick-subtitle" }, "A six-month rescue mission for a 2,000-piece ukiyo-e NFT \u2014 turning the collectible into a key to Taipei's Japanese-food scene."), /* @__PURE__ */ React.createElement("div", { className: "brick-tags" }, "User Research  \xB7  Community Strategy  \xB7  KOL Partnerships"), /* @__PURE__ */ React.createElement("div", { className: "brick-meta" }, [
    ["Role", "Community Strategist & Researcher"],
    ["Contributions", "I led the community-research protocol and town-hall facilitation, built the merchant-onboarding SOP, and authored the bilingual editorial guidelines \u2014 within a 6-person mod team."],
    ["Context", "Internship \xB7 TORIII / KNS \xB7 Taipei \xB7 Feb\u2013Jul 2022"],
    ["Team", "6-person mod team \u2014 events + marketing pods"],
    ["Tools", "Discord \xB7 Twitter \xB7 IG \xB7 Notion \xB7 Google Sheets \xB7 Procreate \xB7 Adobe"]
  ].map(
    ([k, v]) => /* @__PURE__ */ React.createElement("div", { className: "brick-meta-row", key: k }, /* @__PURE__ */ React.createElement("span", { className: "brick-meta-key" }, k), /* @__PURE__ */ React.createElement("span", { className: "brick-meta-val" }, v))
  ))), /* @__PURE__ */ React.createElement("div", { className: "brick-hero-right" }, /* @__PURE__ */ React.createElement("img", { className: "brick-hero-img", src: "assets/kns/hero_artworks.jpeg", alt: "Katana N' Samurai ukiyo-e characters", draggable: "false", style: { objectPosition: "top center", padding: 0 } }))), /* @__PURE__ */ React.createElement("div", { className: "brick-strip" }, [
    ["1,134", "Community members"],
    ["~400", "Posts shipped (team)"],
    ["15+", "Partner venues onboarded"]
  ].map(([n, d]) => {
    const { prefix, value } = splitNum(n);
    return /* @__PURE__ */ React.createElement("div", { className: "brick-strip-cell", key: d }, /* @__PURE__ */ React.createElement(ScrambleNum, { value, prefix }), /* @__PURE__ */ React.createElement("span", { className: "brick-strip-desc" }, d));
  })), /* @__PURE__ */ React.createElement("nav", { className: "brick-toc", "aria-label": "Section navigation" }, /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement("option", { value: "kns-brief" }, "The Brief"),
    /* @__PURE__ */ React.createElement("option", { value: "kns-strategy" }, "Strategy"),
    /* @__PURE__ */ React.createElement("option", { value: "kns-contribution" }, "My Contribution"),
    /* @__PURE__ */ React.createElement("option", { value: "kns-map" }, "Cultural Map"),
    /* @__PURE__ */ React.createElement("option", { value: "kns-takeaway" }, "Takeaway")
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "kns-brief" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label kns-brief-label" }, /* @__PURE__ */ React.createElement("span", null, "The Brief"), /* @__PURE__ */ React.createElement("div", { className: "kns-brief-media" }, /* @__PURE__ */ React.createElement("img", { className: "kns-brief-img", src: "assets/kns/brief_samurai.jpeg", alt: "Ukiyo-e samurai NFT artwork", draggable: "false" }))), /* @__PURE__ */ React.createElement("div", { className: "brick-body", style: { paddingTop: 48 } }, /* @__PURE__ */ React.createElement("p", { className: "brick-lead" }, "KNS launched in 2021 as the world's first ukiyo-e collectible community \u2014 2,000 first-generation pieces sold by October. By the time I joined the mod team in February 2022, the post-launch attention had collapsed: pieces trading below original price, ~6 months of runway left. This was a rescue, not a growth play."), /* @__PURE__ */ React.createElement("p", null, "Members owned ukiyo-e art they were proud of but had no reason to engage day-to-day. The team's bet was that ", /* @__PURE__ */ React.createElement("b", null, "real-world value \u2014 anchored in Japanese food culture in Taipei (ramen, yakiniku, izakaya, caf\xE9s)"), " \u2014 could give the community a second life. The cultural map at ", /* @__PURE__ */ React.createElement("code", null, "yamato.katanansamurai.art"), " would let members find, review, and eventually claim partner shops \u2014 turning the membership from a collectible into a key."), /* @__PURE__ */ React.createElement("p", null, "On a 6-person mod team I led the human layer \u2014 community research, merchant + influencer liaison, bilingual editorial \u2014 and helped prove the post-hype community could be sustained at all."))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "kns-strategy" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Strategy"), /* @__PURE__ */ React.createElement("div", { className: "brick-body", style: { paddingTop: 48 } }, /* @__PURE__ */ React.createElement("div", { className: "brick-findings" }, phases.map(
    ([num, h, p, img]) => /* @__PURE__ */ React.createElement("div", { className: "brick-finding" + (img ? " kns-phase-withimg" : ""), key: num }, img && /* @__PURE__ */ React.createElement("div", { className: "kns-phase-imgwrap" }, /* @__PURE__ */ React.createElement("img", { src: img, alt: h, draggable: "false" })), /* @__PURE__ */ React.createElement("div", { className: "kns-phase-text" }, /* @__PURE__ */ React.createElement("span", { className: "brick-finding-num" }, num), /* @__PURE__ */ React.createElement("h3", { className: "brick-finding-title" }, h), /* @__PURE__ */ React.createElement("p", null, p)))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "kns-contribution" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label kns-contrib-label" }, /* @__PURE__ */ React.createElement("span", { className: "kns-contrib-heading" }, "My Contribution"), /* @__PURE__ */ React.createElement("div", { className: "kns-contrib-media" }, /* @__PURE__ */ React.createElement("span", { className: "brick-label-asset kns-contrib-asset" }, /* @__PURE__ */ React.createElement(KNSContribSlideshow, { images: contribSlides })), /* @__PURE__ */ React.createElement("img", { className: "kns-contrib-team", src: "assets/kns/team_onsite.jpg", alt: "The KNS mod team on-site at the partner katana studio", draggable: "false" }))), /* @__PURE__ */ React.createElement("div", { className: "brick-body", style: { paddingTop: 48 } }, /* @__PURE__ */ React.createElement("div", { className: "kns-contrib-list" }, contributions.map(
    ([h, p, flow]) => /* @__PURE__ */ React.createElement("div", { className: "kns-contrib", key: h }, /* @__PURE__ */ React.createElement("h3", { className: "kns-contrib-title" }, h), /* @__PURE__ */ React.createElement("p", null, p), flow && /* @__PURE__ */ React.createElement("div", { className: "kns-flow" }, flow.map(
      ([n, label], idx) => /* @__PURE__ */ React.createElement(React.Fragment, { key: n }, /* @__PURE__ */ React.createElement("div", { className: "kns-flow-step" }, /* @__PURE__ */ React.createElement("span", { className: "kns-flow-num" }, n), /* @__PURE__ */ React.createElement("span", { className: "kns-flow-label" }, label)), idx < flow.length - 1 && /* @__PURE__ */ React.createElement("span", { className: "kns-flow-arrow" }, "\u2193"))
    ), /* @__PURE__ */ React.createElement("div", { className: "kns-flow-loop", "aria-hidden": "true" })))
  )))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "kns-map" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label kns-map-label" }, "Cultural Map", /* @__PURE__ */ React.createElement("div", { className: "kns-ig-embed" }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src: "https://www.instagram.com/p/CedxjSxJtRp/embed",
      title: "Katana N' Samurai \u2014 cultural map on Instagram",
      loading: "lazy",
      scrolling: "no",
      frameBorder: "0",
      allowtransparency: "true",
      allow: "encrypted-media"
    }
  ), /* @__PURE__ */ React.createElement("a", { className: "kns-ig-link", href: "https://www.instagram.com/p/CedxjSxJtRp/", target: "_blank", rel: "noopener noreferrer" }, "View on Instagram \u2197"))), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", null, "The cultural map was Phase 1's headline deliverable \u2014 a web app (", /* @__PURE__ */ React.createElement("code", null, "yamato.katanansamurai.art"), ") where holders could find, review, and eventually occupy partnered Japanese-cuisine venues across Taipei, co-built with \u4E32\u71D2\u5C0F\u6B21\u90CE (@kojiroutaipei) as anchor merchant partner. I coordinated portions of the merchant onboarding pipeline, wrote launch copy and merchant-facing templates, and helped produce the launch visuals."), /* @__PURE__ */ React.createElement("img", { className: "kns-map-banner", src: "assets/kns/collab_post.jpeg", alt: "KNS \xD7 Kojirou collaboration banner", draggable: "false", style: { height: "158px" } }), /* @__PURE__ */ React.createElement("p", null, "The map wasn't a directory. It was where the digital layer(NFTs, social media) and the IRL layer (real shops, real owners, real seats) met \u2014 so the visual language mattered. We chose a hand-drawn cultural-map aesthetic over generic map tiles because it needed to feel like something you'd save, not a tool you'd close after one use."), /* @__PURE__ */ React.createElement("div", { className: "kns-map-tail" }, /* @__PURE__ */ React.createElement("div", { className: "kns-map-grid" }, /* @__PURE__ */ React.createElement("img", { src: "assets/kns/ramenmap_0.jpeg", alt: "Cultural map brand graphic", draggable: "false", style: { height: "148px", width: "148px" } }), /* @__PURE__ */ React.createElement("img", { src: "assets/kns/ramenmap_3.jpeg", alt: "Cultural map \u2014 partner stores", draggable: "false", style: { objectFit: "fill", width: "148px", height: "148px" } })), /* @__PURE__ */ React.createElement("a", { className: "kns-map-video", href: "https://www.youtube.com/watch?v=_ObWZJ5_URM", target: "_blank", rel: "noopener noreferrer", "aria-label": "Watch cultural map walkthrough on YouTube", style: { opacity: "1", height: "148px", width: "100%", maxWidth: "none", aspectRatio: "auto" } }, /* @__PURE__ */ React.createElement("img", { src: "https://img.youtube.com/vi/_ObWZJ5_URM/mqdefault.jpg", alt: "Cultural map walkthrough \u2014 YouTube", draggable: "false", style: { width: "100%", height: "100%", objectFit: "cover" } }), /* @__PURE__ */ React.createElement("span", { className: "kns-map-video-play", "aria-hidden": "true" }, "\u25B6"), /* @__PURE__ */ React.createElement("span", { className: "kns-map-video-label" }, "Watch on YouTube \u2197"))))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", style: { paddingBottom: 24 } }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Selected Posts"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", null, "A sample from the ~400 posts shipped across the campaign. Editorial rule: write like a regular, not an operator. Bilingual EN/ZH across IG, Twitter, and Discord."))), /* @__PURE__ */ React.createElement("div", { className: "brick-screens-grid brick-screens-swipe", "aria-label": "Selected campaign posts" }, posts.map(
    (src, i) => /* @__PURE__ */ React.createElement("figure", { className: "brick-screen-fig", key: i }, /* @__PURE__ */ React.createElement(
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
        "aria-label": "Hold to enlarge campaign post"
      },
      /* @__PURE__ */ React.createElement("img", { src, alt: "Campaign post " + (i + 1), draggable: "false" })
    ))
  )), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "kns-outcome" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Outcome"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-statement", style: { fontSize: "30px" } }, "Survived 6 months on real-world value \u2014 not speculation."), /* @__PURE__ */ React.createElement("p", null, "The three-phase strategy gave the KNS community competition and real-world rewards embedded in Taipei's Japanese-food scene. It kept a 2022-launch alive through the bear market without collapsing into the staking-and-raffle pattern that hollowed out most peer projects."), /* @__PURE__ */ React.createElement("p", null, "The model \u2014 ", /* @__PURE__ */ React.createElement("b", null, "scene-anchored value, merchant-first sequencing, rewards with off-ramps"), " \u2014 became a reference template for the team's later launches."))), /* @__PURE__ */ React.createElement("section", { className: "brick-section", id: "kns-takeaway" }, /* @__PURE__ */ React.createElement("h2", { className: "brick-label" }, "Takeaway"), /* @__PURE__ */ React.createElement("div", { className: "brick-body" }, /* @__PURE__ */ React.createElement("p", { className: "brick-statement", style: { fontSize: "44px", textAlign: "left" } }, "Value built in a vacuum gets ignored. Value tied to something people already love grows on its own."), /* @__PURE__ */ React.createElement("p", null, "My first instinct was to build new features for the NFT community. The better question turned out to be: what are these people already into? The answer \u2014 Taipei's Japanese-food scene \u2014 became the whole strategy. We signed up real shops before launching anything to holders, so the map had real places to visit before we asked anyone to care."), /* @__PURE__ */ React.createElement("h4", { style: { fontSize: "22px", fontWeight: 500, margin: "24px 0 8px" } }, "Key design learning"), /* @__PURE__ */ React.createElement("p", null, "Looking back, most of the big calls were really about tone, not features \u2014 like how to explain crypto ideas to a shop owner in plain words, or noticing the gap between what members said and what they actually did."), /* @__PURE__ */ React.createElement("p", null, "The real lesson: you can't force people to care from inside the product. You build the conditions outside it \u2014 partner with places they already go, work with voices they already trust \u2014 and let them find the value themselves."))), /* @__PURE__ */ React.createElement(OutroCTA, null), /* @__PURE__ */ React.createElement("footer", { className: "proj-footer" }, /* @__PURE__ */ React.createElement("a", { onClick: () => go("home"), style: { cursor: "pointer" } }, "\u2190 Home"), /* @__PURE__ */ React.createElement("a", { className: "proj-footer-next", onClick: () => go("case", next.id), style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("img", { src: next.src, alt: next.title, draggable: "false" }), /* @__PURE__ */ React.createElement("span", null, next.title), /* @__PURE__ */ React.createElement("span", { "aria-hidden": "true" }, "\u2192"))), peekIdx !== null && /* @__PURE__ */ React.createElement("div", { className: "brick-peek brick-peek-" + peekPhase, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("img", { src: posts[peekIdx], alt: "", draggable: "false" })));
}
Object.assign(window, { DesertCase, VRCase, KNSCase });
