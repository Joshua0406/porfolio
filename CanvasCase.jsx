/* Canvas — self-initiated UX case study.
   Reuses the Brick case-study layout vocabulary (brick.css) plus
   canvas.css for personas, state pills, ideation steps, tables and
   image placeholders. Magenta accent lives only inside this article. */

/* Dashed placeholder box — user replaces with Figma exports. */
function PH({ name, desc, variant = "ph-wide" }) {
  return (
    <div className={"ph " + variant} role="img" aria-label={name + " — " + desc}>
      <span className="ph-name">[{name}]</span>
      <span className="ph-desc">{desc}</span>
    </div>);
}

/* A redesign state pill (matches the four states in the redesign table). */
function Pill({ kind, children }) {
  if (kind === "dash") return <span className="cv-dash" aria-label="Em-dash, no submission required">—</span>;
  const sym = kind === "submitted" ? "✓ " : kind === "overdue" ? "⚠ " : "";
  return <span className={"cv-pill cv-pill-" + kind}>{sym}{children}</span>;
}

function CanvasCase({ go }) {
  const next = PROJECTS[0]; // brick
  const meta = [
  ["Role", "Sole designer"],
  ["Contributions", "Research · audit · UI design · usability test"],
  ["Timeline", "4 weeks · 2026"],
  ["Team", "Solo"],
  ["Tools", "Figma · Field interviews"]];

  const stats = [
  ["70%", "Participants willing to switch back to Canvas"],
  ["13.4 → 4.6", "Taps to verify submission state"],
  ["3.2 → 7.8", "Trust rating"]];

  const quotes = [
  ["The checkbox is useless, I never know if it means I submitted or if it's me marking it.", "P1, BSc Year 2"],
  ["I trust Notion because I'm the one who ticked the box. Canvas's checkbox doesn't reflect anything real.", "P2, MSc Year 1"],
  ["Oh — yeah, the web's submitted state should be on the phone.", "P6, MSc Year 1"],
  ["Canvas is where I submit. WhatsApp is where I know what to do.", "P6, BSc Year 2"]];

  const personas = [
  {
    name: "Sanne", role: "The Reactive Checker", avatar: "assets/canvas/persona-sanne.png",
    tags: ["BSc", "Phone-first", "Daily, in bursts"],
    quote: "I tap into every assignment to check if I submitted. It's exhausting.",
    fields: [
    ["Who this represents", "The most common UT student — phone-first, opens Canvas in short bursts to check what's left."],
    ["How she works", "Opens Canvas in a free moment. Sees the To-do list. Can't tell which items are done. Taps into each to verify. Loses confidence halfway through."],
    ["What she needs", "A list where she sees at a glance what's submitted and what isn't — without tapping into anything."],
    ["Workaround", "Group chat as ground truth · Apple Reminders"]]
  },
  {
    name: "Daan", role: "The Organised Externaliser", avatar: "assets/canvas/persona-daan.png",
    tags: ["MSc", "Laptop-first", "Notion user"],
    quote: "I keep a Notion list because Canvas mobile doesn't tell me what's done.",
    fields: [
    ["Who this represents", "The methodical planner who has stopped trusting the source of truth and rebuilt it elsewhere."],
    ["How he works", "Every Sunday, copies every Canvas deadline into Notion. Trusts Notion's checkbox because he's the one who ticked it. Doesn't trust Canvas's checkbox because it doesn't reflect anything real."],
    ["What he needs", "Canvas mobile to be as trustworthy as his Notion list."],
    ["Workaround", "Notion (Sunday sync) · Outlook calendar"]]
  },
  {
    name: "Mei", role: "The Group-Project Juggler", avatar: "assets/canvas/persona-mei.png",
    tags: ["MSc", "International", "Group-heavy programme"],
    quote: "I check my own submissions and chase teammates separately. The list helps me with neither.",
    fields: [
    ["Who this represents", "The student carrying group work, tracking two kinds of state at once."],
    ["How she works", "Checks Canvas for her own assignments — taps into each to verify. Then opens WhatsApp to confirm whether teammates have done their parts."],
    ["What she needs", "A list showing own submission state AND group-item ownership — without drilling."],
    ["Workaround", "WhatsApp groups · Shared Google Calendar"]]
  }];

  const ideation = [
  ["01", "Brainstorm", "anything goes", "Raw_ideas.png",
  "Sticky-note wall — scattered green notes, every idea welcome.",
  "Bad ideas welcomed. Streak counters, AI assistants, calendar export, weight chips — all valid as starting points. The goal here is quantity, not quality.", "assets/canvas/ideation-raw.png"],
  ["02", "Categorize", "find the shape", "Categorization.png",
  "Same notes, now coloured by cluster: Add features (blue), Make state visible (green), Redesign the list (purple).",
  "Three clusters emerge: features to add, state to make visible, list to restructure. The “Make state visible” cluster is already the densest — a clue.", "assets/canvas/ideation-categorize.png"],
  ["03", "Critique", "reject with reasons", "Rejection.png",
  "Same notes, most X'd out with red labels below explaining why.",
  "", "assets/canvas/ideation-reject.png"],
  ["04", "Converge", "what survived", "Final_ideas.png",
  "A clean grid of the remaining ideas.",
  "The “Make state visible” cluster dominates. Three of those ideas combined into the final design.", "assets/canvas/ideation-final.png"]];

  const states = [
  ["submitted", "Submitted", "Already submitted — tap to review"],
  ["submit", "Submit", "Outstanding — tap to start submitting"],
  ["overdue", "Overdue", "Past deadline — tap to see options"],
  ["dash", "—", "No submission required (readings, lectures)"]];

  const measures = [
  ["Average umber of taps to reach a confident answer", "Drops from average ~12 to ≤2", "13.4 → 4.6"],
  ["Average time-to-confidence", "Drops from minutes to seconds", "3:42 → 0:36"],
  ["Average trust rating (1–10)", "Increases by ≥3 points", "3.2 → 7.8"],
  ["Willingness of switching tools back to Canvas", "Above 50%", "70%"]];

  const cuts = [
  ["Aggregated Today / This Week homepage", "New surface; doesn't solve the gap", "Pivot 1"],
  ["Calendar Export to Apple / Google / Outlook", "Forward-looking problem; different from verification", "Pivot 1"],
  ["TimeEdit asymmetry argument", "Distracted from the central thesis", "Pivot 1"],
  ["Priority signals (weight chips, ownership) as central", "Nice-to-have, not the core fix", "Pivot 2"],
  ["Forward + Backward dual frame", "Too sprawling", "Pivot 2"],
  ["Full row redesign (left-edge state, new typography)", "Over-engineered; smaller intervention is stronger", "Pivot 3"]];

  return (
    <article data-screen-label="Case: Canvas">
      {/* HERO */}
      <div className="brick-hero">
        <div className="brick-hero-left">
          <div className="brick-eyebrow">UX Research · UI Design · Mobile Redesign</div>
          <h1 className="cv-title">Canvas</h1>
          <p className="brick-subtitle">A self-initiated 4-week case study redesigning Canvas mobile's list views to show submission state — bringing an existing Canvas web pattern across to the surface where students need it most.</p>
          <p className="cv-hero-note">The fix already existed — on Canvas web. This project is about closing the gap, not inventing new ground.</p>
          <div className="cv-meta">
            {meta.map(([k, v]) =>
            <div className="cv-meta-cell" key={k}>
                <span className="cv-meta-key">{k}</span>
                <span className="cv-meta-val">{v}</span>
              </div>
            )}
          </div>
        </div>
        <div className="brick-hero-right">
          <div className="cv-hero-phone">
            <div className="cv-hero-embed">
              <iframe
                className="cv-figma"
                title="Canvas redesign — interactive Figma prototype"
                src="https://embed.figma.com/proto/Q13pzBIgQ9Y0PqALNNPPAc/Untitled?node-id=12-5&p=f&scaling=scale-down&content-scaling=fixed&starting-point-node-id=12%3A5&page-id=0%3A1&hide-ui=1&hotspot-hints=0&embed-host=share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <span className="cv-hero-embed-label">Live prototype · tap to interact →</span>
          </div>
        </div>
      </div>

      {/* HERO STATS */}
      <div className="brick-strip">
        {stats.map(([n, d]) =>
        <div className="brick-strip-cell" key={d}>
            {/^[0-9.,]+$/.test(n) ? <ScrambleNum value={n} /> : <span className="stat-num">{n}</span>}
            <span className="brick-strip-desc">{d}</span>
          </div>
        )}
      </div>

      {/* TOC */}
      <nav className="brick-toc" aria-label="Section navigation">
        <select
          className="brick-toc-select"
          defaultValue=""
          onChange={(e) => {
            const id = e.target.value;
            if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            e.target.value = "";
          }}>
          <option value="" disabled>Jump to section</option>
          <option value="cv-context">Context</option>
          <option value="cv-audit">Current state</option>
          <option value="cv-research">Research</option>
          <option value="cv-personas">Who we're designing for</option>
          <option value="cv-ideation">How we got there</option>
          <option value="cv-redesign">The redesign</option>
          <option value="cv-test">Usability test</option>
          <option value="cv-reflection">Reflection</option>
        </select>
      </nav>

      {/* 01 — WHY THIS MATTERS */}
      <section className="brick-section" id="cv-context">
        <div className="brick-label">Context</div>
        <div className="brick-body">
          <p className="brick-lead" style={{ fontSize: "30px" }}>Mobile is how students live with the LMS — but it's the less-trustworthy surface.</p>
          <p>Roughly 48% of higher-ed students frequently access their LMS on mobile <i>(Instructure / Hanover 2023, cited as a market signal, not peer-reviewed)</i>. Mobile is consistently the less-mature surface of every major LMS, and Canvas is no exception.</p>
          <p>When an LMS surface isn't truthful or trustworthy, students replace it with parallel systems — Notion, paper planners, group chats. This isn't laziness; it's pattern matching against repeated failures. Late submissions, which the LMS can measure from logs, correlate with lower achievement <i>(You 2015)</i>. Anything that makes <i>“did I submit?”</i> ambiguous is a risk factor.</p>
          <p>This project is grounded in one observable asymmetry: Canvas's web list views show submission state on every assignment. Canvas's mobile list views do not. The pattern already exists in the same product — it just hasn't been brought across.</p>
          <p>And the cost isn't only the student's. Every time the LMS can't be trusted, the institution loses its own source of truth: planning migrates to Notion and WhatsApp, the engagement signal leaks out of the system meant to measure it, and <i>“did I submit?”</i> uncertainty resurfaces as support tickets and avoidable late penalties. Because Canvas already solves this on web, closing the gap is a low-cost change to a pattern the product owns — not a new feature to maintain.</p>
        </div>
      </section>

      {/* THE AUDIT (current state) */}
      <section className="brick-section" id="cv-audit">
        <div className="brick-label">Current state</div>
        <div className="brick-body">
          <p className="brick-lead" style={{ fontSize: "30px" }}>Same data. Two surfaces. Different experiences.</p>
          <p>Canvas web's assignments list shows submission state per task — one glance answers <i>“what have I submitted?”</i>. Canvas mobile's equivalent list does not. The student is forced to tap into each item to check, then switch tabs and do it again to be sure.</p>
          <div className="cv-figure">
            <img className="cv-img cv-img-bare" src="assets/canvas/audit-annotation.png" alt="Audit — Canvas web shows submission status per task; Canvas mobile (To-do and Calendar) shows no state, annotated with the gaps." draggable="false" />
          </div>
        </div>
      </section>

      {/* 02 — RESEARCH */}
      <section className="brick-section" id="cv-research">
        <div className="brick-label">Research</div>
        <div className="brick-body">
          <h4 className="brick-sublabel" style={{ marginTop: 0 }}>Research question</h4>
          <div className="brick-quote" style={{ marginBottom: 28 }}>
            <p>"How do UT students currently verify what they've submitted on Canvas mobile, and what change would most reduce that verification effort?"</p>
          </div>
          <p>I had open conversations with 6 UT students across BSc and MSc programmes, complemented by a structured think-aloud task:<i style={{ display: "block", fontSize: "30px", lineHeight: 1.4, marginTop: "14px" }}>“Show me how you check what you still need to submit this week.”</i></p>

          <div className="cv-baseline cv-baseline-row">
            <span className="cv-baseline-eyebrow">Baseline measured</span>
            <div className="cv-baseline-stats">
              <div className="cv-baseline-stat">
                <span className="cv-baseline-num">13.4</span>
                <span className="cv-baseline-lbl">Taps to reach a confident answer</span>
              </div>
              <div className="cv-baseline-stat">
                <span className="cv-baseline-num">3:42</span>
                <span className="cv-baseline-lbl">Time-to-confidence</span>
              </div>
              <div className="cv-baseline-stat">
                <span className="cv-baseline-num">3.2</span>
                <span className="cv-baseline-lbl">Trust rating of the app (1–10)</span>
              </div>
            </div>
          </div>

          <h4 className="brick-sublabel brick-sublabel-spaced">Four voices that defined the problem</h4>
          <div className="cv-quotegrid">
            {quotes.map(([q, src], i) =>
            <div className="cv-qcard" key={i}>
                <p>“{q}”</p>
                <span className="cv-qcard-src">— {src}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 03 — PERSONAS */}
      <section className="brick-section" id="cv-personas">
        <div className="brick-label">Who we're designing for</div>
        <div className="brick-body">
          <p className="brick-lead" style={{ fontSize: "30px" }}>3 patterns of one shared frustration.</p>
          <p>Each persona represents a behaviour pattern observed across UT students. They differ in habits, programme, and workaround, but the underlying complaint is the same.</p>

          <div className="cv-note">
            <p><b style={{ fontSize: "30px", display: "block", marginBottom: "10px" }}>Who we're not designing for.</b>A fourth pattern surfaced: the power user who has configured Canvas (filters, hide-completed) and no longer feels the friction. They're evidence of <i>who Canvas serves today</i> — students patient enough to invest in the workaround. The redesign serves the three above.</p>
          </div>

          <div className="cv-personas">
            {personas.map((p) =>
            <div className="cv-persona" key={p.name}>
                <div className="cv-persona-top">
                  <img className="cv-persona-avatar" src={p.avatar} alt={p.name} draggable="false" />
                  <div className="cv-persona-headcol">
                    <div className="cv-persona-head">
                      <span className="cv-persona-name">{p.name}</span>
                      <span className="cv-persona-role">{p.role}</span>
                    </div>
                    <div className="cv-persona-tags">
                      {p.tags.map((t) => <span className="cv-tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <p className="cv-persona-quote">“{p.quote}”</p>
                <div className="cv-persona-grid">
                  {p.fields.map(([label, body]) =>
                <div className="cv-field" key={label}>
                      <span className="cv-field-label">{label}</span>
                      <p>{body}</p>
                    </div>
                )}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 05 — IDEATION */}
      <section className="brick-section" id="cv-ideation">
        <div className="brick-label">How we got there</div>
        <div className="brick-body">
          <p className="brick-lead" style={{ fontSize: "30px" }}>20 ideas, 3 categories, 1 survivor.</p>
          <p>The redesign emerged from the ideation session. Twenty-plus ideas generated freely, then categorised, then critiqued. Each rejected idea earned a reason.</p>

          <div className="cv-steps">
            {ideation.map(([num, title, sub, file, phdesc, cap, img]) =>
            <React.Fragment key={num}>
              <div className="cv-step">
                <div className="cv-step-label"><b>Step {num}</b> · {title} — {sub}</div>
                <img className="cv-img" src={img} alt={title + " — " + sub} draggable="false" />
                {cap && <p className="cv-step-cap">{cap}</p>}
              </div>
              {num === "03" &&
              <div className="cv-cutblock">
                <p className="brick-lead" style={{ fontSize: "30px", marginBottom: 12 }}>What was cut, and why.</p>
                <p style={{ fontSize: "17px", lineHeight: 1.65, color: "rgba(0,0,0,0.78)" }}>Earlier drafts of this project sprawled. Each pivot removed scope that was diluting the central argument. The case study reads as small because the work was disciplined to stay small.</p>
                <div className="cv-table">
                  <div className="cv-table-row cv-table-2">
                    <span className="cv-table-head">Cut</span>
                    <span className="cv-table-head">Why</span>
                  </div>
                  {cuts.map(([cut, why], i) =>
                  <div className="cv-table-row cv-table-2" key={i}>
                      <span className="cv-cut-name">{cut}</span>
                      <span>{why}</span>
                    </div>
                  )}
                </div>
              </div>
              }
            </React.Fragment>
            )}
          </div>

          <h4 className="brick-sublabel brick-sublabel-spaced">Design principle</h4>
          <div className="brick-quote">
            <p>“Bring the state-visibility pattern from Canvas web to Canvas mobile. One element changes — the right-side checkbox — from a manual marker to a system-bound state pill. Everything else respects what Canvas already has.”</p>
          </div>
        </div>
      </section>

      {/* 06 — THE REDESIGN */}
      <section className="brick-section" id="cv-redesign">
        <div className="brick-label">
          The redesign
          <div className="cv-rail-embed">
            <div className="cv-hero-embed">
              <iframe
                className="cv-figma"
                title="Canvas redesign — interactive Figma prototype"
                src="https://embed.figma.com/proto/Q13pzBIgQ9Y0PqALNNPPAc/Untitled?node-id=12-5&p=f&scaling=scale-down&content-scaling=fixed&starting-point-node-id=12%3A5&page-id=0%3A1&hide-ui=1&hotspot-hints=0&embed-host=share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <span className="cv-hero-embed-label">Live prototype · tap to interact →</span>
          </div>
        </div>
        <div className="brick-body">
          <p className="brick-lead" style={{ fontSize: "30px" }}>One element changes. Everything else stays.</p>
          <p>Canvas mobile's existing list-item layout is preserved entirely. Only the right-edge element changes — from a manual checkbox decoupled from reality, to a labelled state pill bound to actual submission data. Four states cover every case.</p>

          <div className="cv-states">
            <div className="cv-state-row">
              <span className="cv-table-head" style={{ textAlign: "center" }}>State</span>
              <span className="cv-table-head" style={{ textAlign: "center" }}>Visual</span>
              <span className="cv-table-head" style={{ textAlign: "center" }}>Meaning</span>
            </div>
            {states.map(([kind, name, mean]) =>
            <div className="cv-state-row" key={name}>
                <span className="cv-state-name">{name}</span>
                <span style={{ textAlign: "center" }}><Pill kind={kind}>{name}</Pill></span>
                <span className="cv-state-mean">{mean}</span>
              </div>
            )}
          </div>
          <p style={{ marginTop: 22 }}>Every pill is also a tap target. The pill is both a state indicator and a navigation affordance — scan → identify → act.</p>

          <h4 className="brick-sublabel brick-sublabel-spaced">Accessibility</h4>
          <p>State visibility only helps if it reaches every student, so the pill was specified against WCAG 2.2 from the start — not retrofitted onto the visuals afterward.</p>
          <div className="cv-a11y">
            <div className="cv-a11y-row">
              <span className="cv-a11y-crit">Never colour alone</span>
              <span className="cv-a11y-how">Every state carries a written label, and a <b>✓</b> or <b>⚠</b> glyph reinforces Submitted and Overdue — so the four states stay distinct for colour-blind users and in greyscale. <i>(1.4.1 Use of Color)</i></span>
            </div>
            <div className="cv-a11y-row">
              <span className="cv-a11y-crit">Legible contrast</span>
              <span className="cv-a11y-how">Pill label text is held above <b>4.5:1</b> against its fill and the pill boundary above <b>3:1</b> against the row — checked for each of the four states. <i>(1.4.3 / 1.4.11)</i></span>
            </div>
            <div className="cv-a11y-row">
              <span className="cv-a11y-crit">A real touch target</span>
              <span className="cv-a11y-how">Because the pill is the tap target, it's sized to the <b>44px</b> minimum and exposes an accessible name, so a screen reader announces “Submitted” or “Overdue,” not just “button.” <i>(2.5.5 / 4.1.2)</i></span>
            </div>
          </div>

          <h4 className="brick-sublabel brick-sublabel-spaced">Before / After — To-do tab</h4>
          <div className="cv-figure">
            <img className="cv-img" src="assets/canvas/ba-todo.png" alt="Before / after of the Canvas mobile To-do tab — the layout is unchanged; the right edge now carries Submitted, Submit and Overdue state pills." draggable="false" />
            <p className="cv-caption">Layout unchanged. Date column unchanged. Course icons, codes, titles, due times — all retained. The right edge now carries truth instead of a manual toggle.</p>
          </div>

          <h4 className="brick-sublabel brick-sublabel-spaced">Before / After — Calendar tab</h4>
          <div className="cv-figure">
            <img className="cv-img" src="assets/canvas/ba-calendar.png" alt="Before / after of the Canvas mobile Calendar tab — the state pill sits on the left and a Score column is added on the right." draggable="false" />
            <p className="cv-caption">Same component, different row anatomy. The pill sits on the left where state earns visual priority. The Score column on the right brings a second Canvas web pattern across to mobile.</p>
          </div>

          <h4 className="brick-sublabel brick-sublabel-spaced">USER FLOW DIFFERENCE</h4>
          <div className="cv-figure">
            <img className="cv-img" src="assets/canvas/userflow-diff.png" alt="User flow before/after — the current verification loop costs 2N taps and ends uncertain; the redesign is a linear 1-tap scan ending confident." draggable="false" />
            <p className="cv-caption cv-caption-lg"><b>Tap count: 2N → 1.</b> Where verifying N items used to cost 2N taps (open + back, repeated), the redesigned list answers the question in a single tab tap — every item's state visible at a glance.</p>
          </div>
        </div>
      </section>

      {/* 07 — TEST PLAN */}
      <section className="brick-section" id="cv-test">
        <div className="brick-label">USABILITY TEST</div>
        <div className="brick-body">
          <p>The central task was tested among 10 other students: <i>“Show me how you check what  assignments you still need to submit this week.”</i> Observed behaviour were compared between the current Canvas and a prototype of the redesign.</p>

          <div className="cv-table cv-measure-table">
            <div className="cv-table-row cv-measure-row">
              <span className="cv-table-head">What we measure</span>
              <span className="cv-table-head">What success looks like</span>
              <span className="cv-table-head">Result</span>
            </div>
            {measures.map(([m, s, r], i) =>
            <div className="cv-table-row cv-measure-row" key={i}>
                <span>{m}</span>
                <span className="cv-num-target">{s}</span>
                <span className="cv-measure-result">
                  {r.includes("→") ?
                <>{r.split("→")[0]}→<span className="cv-measure-new">{r.split("→")[1]}</span></> :
                <span className="cv-measure-new">{r}</span>}
                </span>
              </div>
            )}
          </div>

          <h4 className="brick-sublabel brick-sublabel-spaced">QUOTES OF THE REACTIONS</h4>
          <div className="brick-quote">
            <p>"Wait — that's all it took? Yeah, this is what I want."</p>
            <span className="brick-quote-src">P1, MSc year 1</span>
          </div>
          <div className="brick-quote" style={{ marginTop: 16 }}>
            <p>"I might actually stop maintaining my Notion list."</p>
            <span className="brick-quote-src">P3, BSc year 1</span>
          </div>

          <div className="cv-verdict">
            <p className="cv-verdict-statement">Validated — three of four targets met.</p>
            <p className="cv-verdict-body">Time-to-confidence, trust, and willingness to drop parallel tools all cleared their thresholds. Taps dropped sharply (13.4 → 4.6) but fell short of the ≤2 stretch goal — the next iteration should close that gap by surfacing submission state one level earlier.</p>
          </div>
        </div>
      </section>

      {/* 08 — REFLECTION */}
      <section className="brick-section" id="cv-reflection">
        <div className="brick-label">Reflection</div>
        <div className="brick-body">
          <h4 className="brick-sublabel" style={{ marginTop: 0 }}>What this case study demonstrates</h4>
          <div className="cv-cards3">
            <div className="cv-card">
              <h3>Find before invent</h3>
              <p>The redesign isn't “I invented a feature.” It's “I noticed Canvas already solved this on web; mobile just hasn't received the pattern.” Defending a transfer is easier and more credible than defending an invention.</p>
            </div>
            <div className="cv-card">
              <h3>Observable, not anecdotal</h3>
              <p>Verification fatigue is something any reviewer can replicate on their own Canvas in two minutes. The argument doesn't depend on belief — it depends on the act of trying it.</p>
            </div>
          </div>

          <div className="brick-reflect brick-reflect-spaced">
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px", marginTop: 0 }}>How I'd build this with a team</h4>
              <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(0,0,0,0.78)" }}>This was a solo project, but it's scoped to hand off cleanly. With a team I'd pressure-test the problem against the LMS's own support tickets alongside a PM, pair with engineers on binding the pill to real submission state and the edge cases that follow — group items, offline sync, late-but-submitted — and ship the pill as a documented, accessible component (icon + label, never colour alone) rather than a one-off screen. The usability test below is where I'd bring the research team back in.</p>
            </div>
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px", marginTop: 0 }}>What I'd do differently</h4>
              <p style={{ fontSize: "16px", lineHeight: 1.6, color: "rgba(0,0,0,0.78)" }}>I wrote the protocol and personas before talking to anyone — that's backwards. A single pilot interview would have caught leading questions and tightened the central task. I'd also resist designing four states at once and validate the most common one first. To stop it recurring, I've made that a rule rather than a regret: no protocol or persona leaves draft until at least one unscripted pilot conversation has tested its assumptions — fieldwork first, artefacts second.</p>
            </div>
          </div>

        </div>
      </section>

      <OutroCTA />

      <footer className="proj-footer">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}>← Home</a>
        <a className="proj-footer-next" onClick={() => go("case", next.id)} style={{ cursor: "pointer" }}>
          <img src={next.src} alt={next.title} draggable="false" />
          <span>{next.title}</span>
          <span aria-hidden="true">→</span>
        </a>
      </footer>
    </article>);
}

Object.assign(window, { CanvasCase, PH, Pill });