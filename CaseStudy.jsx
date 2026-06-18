/* Case study — the long-form template, reused across all four projects.
   Left meta rail + right body, 42/58 split, hairline rhythm, number-led. */

const CASE_DATA = {
  brick: {
    eyebrow: "Case Study 01",
    title: "Brick",
    tags: "UX Research · UI Design · Usability Testing",
    meta: [["Role","UX Research · UI Design"],["Year","2025"],["Team","Solo · 6-week sprint"],["Tools","Figma · Axure · R"]],
    lead: "Brick is a focus app that physically locks distracting apps behind an NFC tag. The redesign asked a hard question: what happens when the blocking is too easy to turn off?",
    body: "Through twelve think-aloud usability sessions, the friction model was rebuilt so that disabling a block became a deliberate, slightly effortful act — without tipping into punishment.",
    callout: "The blocking only works if turning it off costs something.",
    metrics: [["12","Usability sessions"],["κ = 0.89","Inter-coder reliability"],["~400","Survey responses"],["4","Core screens"]],
    findingsLabel: "Findings",
    findings: [
      ["01","The blocking was too easy to bypass.","Six of twelve participants disabled a session within seconds — the exit was a single, frictionless tap."],
      ["02","Users wanted proof of progress.","Streaks and recovered-time totals mattered more than the lock itself; the reward had to be visible."],
      ["03","Onboarding buried the NFC step.","The physical tag — the whole point — was introduced three screens too late."],
    ],
    quote: ["The blocking is too easy to turn off. It defeats the whole point.","— Participant 6, Finnish, 21"],
    stats: [["2,612","Members tracked"],["82","Task success %"],["3.1","Avg. SUS delta"],["15","Iterations"]],
    cta: ["Interactive prototype","Walk the full locked-focus flow, from onboarding to recovery.","Open in Axure Cloud →"],
  },
  desertification: {
    eyebrow: "Case Study 02",
    title: "Desert",
    tags: "Content Strategy · Campaign Design · Visual Communication",
    meta: [["Role","Content Strategy · Design"],["Year","2024"],["Team","Studio of 3"],["Scope","Awareness campaign"]],
    lead: "A public-awareness campaign on desertification, built to make a slow, abstract crisis feel immediate and local.",
    body: "The work translated dense climate data into a visual language non-specialists could act on — without alarmism, without losing the rigour of the source material.",
    callout: "Make a slow crisis feel like it is happening now.",
    metrics: [["1","Campaign system"],["6","Poster variants"],["3","Languages"],["12","Data sources"]],
    findingsLabel: "Approach",
    findings: [
      ["01","Lead with the local.","Global statistics flatten urgency; the campaign anchored every claim to a place the viewer recognised."],
      ["02","One number per surface.","Each poster carried a single figure, large, so the message survived a three-second glance."],
    ],
    quote: ["You stopped me because of the number, not the picture.","— Pilot test respondent"],
    stats: [["~400","Reach (pilot)"],["6","Surfaces"],["3","Languages"]],
    cta: ["Campaign system","See the full poster grid and the data behind each figure.","View the campaign →"],
  },
  supermarket: {
    eyebrow: "Case Study 03",
    title: "VR",
    tags: "VR Research · Behavioural Science · Statistical Analysis",
    meta: [["Role","Researcher"],["Year","2025"],["Team","Lab study"],["Tools","Unity · R · SPSS"]],
    lead: "A VR supermarket experiment measuring how shelf placement and signage nudge purchasing decisions under realistic shopping conditions.",
    body: "Participants shopped a simulated store while gaze and choice were logged; the data was modelled with factor analysis and linear regression to isolate what actually moved behaviour.",
    callout: "Does a nudge survive a realistic shopping trip?",
    metrics: [["48","Participants"],["2","Conditions"],["κ = 0.82","Coding reliability"],["R²=.37","Model fit"]],
    findingsLabel: "Findings",
    findings: [
      ["01","Eye-level placement won.","Position outperformed signage by a wide margin — visibility, not messaging, drove the choice."],
      ["02","Signage helped only when paired.","Labels mattered only once a product was already in the gaze path."],
    ],
    quote: ["I didn't even read the sign — I just grabbed what I saw first.","— Participant 19"],
    stats: [["48","Participants"],["2","Conditions"],["37","Variance explained %"]],
    cta: ["Method & results","Read the full statistical write-up and the VR build notes.","Read the report →"],
  },
  kns: {
    eyebrow: "Case Study 04",
    title: "KNS",
    tags: "Visual Design · Branding · Community Management",
    meta: [["Role","Visual Design · Community"],["Year","2022"],["Team","Core of 4"],["Scope","Brand + Web3"]],
    lead: "Katana N' Samurai is a Web3 community where owning the collectible had to mean something beyond the mint — a key that opened a real door.",
    body: "The brand tied digital ownership to physical presence: holders unlocked perks at partner ramen venues, onboarded under a formal SOP before any holder-facing feature shipped.",
    callout: "A collectible turned into a key that opens a real door.",
    metrics: [["2,612","Members tracked"],["28","Partner venues"],["40+","Events run"],["3","Drop phases"]],
    findingsLabel: "Decisions",
    findings: [
      ["01","Merchants first, holders second.","Without venue buy-in the occupation mechanic was theatre — stores onboarded before any holder feature shipped."],
      ["02","The key had to open a real door.","Utility was tied to physical presence: scanning in at a partner venue, not a screen tap."],
    ],
    quote: ["I came for the art and stayed because the ramen guy knew my handle.","— Community member"],
    stats: [["2,612","Members tracked"],["28","Partner venues"],["40","Events run"]],
    cta: ["Brand & community","Browse the drop artwork, the ramen map, and the event archive.","See the collection →"],
  },
};

function CaseStudy({ current, go }) {
  const d = CASE_DATA[current];
  const proj = PROJECTS.find(p => p.id === current);
  const idx = PROJECTS.findIndex(p => p.id === current);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <article data-screen-label={"Case: " + proj.title}>
      <div className="proj-hero">
        <div className="proj-hero-left">
          <div className="proj-eyebrow">{d.eyebrow}</div>
          <h1 className="proj-title">{d.title}</h1>
          <div className="proj-tags">{d.tags}</div>
          <div className="proj-meta">
            {d.meta.map(([k,v]) => (
              <div className="proj-meta-row" key={k}>
                <span className="meta-label">{k}</span>
                <span className="meta-value">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="proj-hero-right">
          <img className="proj-hero-obj" src={proj.src} alt={proj.title} width={proj.w} height={proj.h} />
        </div>
      </div>

      <section className="content-section">
        <div className="section-label">The Brief</div>
        <div className="section-body">
          <p className="lead-text">{d.lead}</p>
          <p>{d.body}</p>
        </div>
      </section>

      <section className="callout-section">
        <div className="callout-label">In one line</div>
        <div className="callout-text">{d.callout}</div>
      </section>

      <div className="metrics-strip">
        {d.metrics.map(([n,desc]) => (
          <div className="metric-cell" key={desc}>
            <span className="metric-num">{n}</span>
            <span className="metric-desc">{desc}</span>
          </div>
        ))}
      </div>

      <section className="content-section">
        <div className="section-label">{d.findingsLabel}</div>
        <div className="section-body">
          <div className="findings-list">
            {d.findings.map(([num,h,p]) => (
              <div className="finding" key={num}>
                <span className="finding-num mono">{num}</span>
                <div><h3>{h}</h3><p>{p}</p></div>
              </div>
            ))}
          </div>
          <div className="pull-quote" style={{ marginTop: 32 }}>
            <p>&ldquo;{d.quote[0]}&rdquo;<span className="source">{d.quote[1]}</span></p>
          </div>
        </div>
      </section>

      <div className="stats-section">
        {d.stats.map(([n,l]) => {
          const m = String(n).match(/^([^0-9]*)(.+)$/);
          return (
            <div className="stat" key={l}>
              <ScrambleNum value={m[2]} prefix={m[1]} />
              <span className="stat-label">{l}</span>
            </div>
          );
        })}
      </div>

      <section className="content-section">
        <div className="section-label">Prototype</div>
        <div className="section-body">
          <div className="proto-label t-caption" style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(0,0,0,0.4)", marginBottom: 8 }}>{d.cta[0]}</div>
          <p style={{ marginBottom: 20 }}>{d.cta[1]}</p>
          <button className="proto-btn">{d.cta[2]}</button>
        </div>
      </section>

      <footer className="proj-footer">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}>← Home</a>
        <a onClick={() => go("case", next.id)} style={{ cursor: "pointer" }}>{next.title} →</a>
      </footer>
    </article>
  );
}

Object.assign(window, { CASE_DATA, CaseStudy });
