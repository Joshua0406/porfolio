/* Brick case study — bespoke long-form layout, recreated from the live brick/page screenshot.
   No hero image; left-rail title + meta, then content sections, persona cards,
   requirements list, objectives grid, design decisions, design-system block,
   screens grid, stats, usability bar chart, key findings, outcome callout,
   before/after iteration, reflection. */

function BrickCase({ go }) {
  const next = PROJECTS[1]; // desertification
  const [peekIdx, setPeekIdx] = React.useState(null);
  const [peekPhase, setPeekPhase] = React.useState("closed");
  const openPeek = (i) => {
    setPeekIdx(i);
    setPeekPhase("entering");
    requestAnimationFrame(() => requestAnimationFrame(() => setPeekPhase("open")));
  };
  const closePeek = () => {
    setPeekPhase((p) => p === "closed" ? p : "exiting");
    setTimeout(() => {setPeekIdx(null);setPeekPhase("closed");}, 260);
  };
  const personas = [
  ["Anna", "Anna", "25 · Berlin, Germany · Yoga teacher",
  "Easily frustrated, sensitive to feelings. Values authentic connection. Wants tools that don't shame her for slipping up."],
  ["James", "James", "15 · Enschede, NL · Student",
  "Kind, family-oriented. Spends time on football and games. Wants to focus for university applications but needs social motivation."]];

  const requirements = [
  ["REQ_01", "Customizable competition", "5 of 6 participants wanted leaderboards. 1 of 6 reported stress. Competition must be opt-in, not default."],
  ["REQ_02", "Stress-free motivation", "Users want progress without pressure. Gamified rewards yes; punishment no."],
  ["REQ_03", "Social with privacy control", "Friend visibility motivates, but users need granular control over what's shared."],
  ["REQ_04", "Clear visual feedback", "Weekly summaries and visual progress were universally requested across all 6 interviews."],
  ["REQ_05", "Gentle, not forceful", "Past tools failed because enforcement felt punitive. Soft nudges over hard blocks."]];

  const objectives = [
  "Evaluate the usability of Brick's core flows through structured think-aloud testing",
  "Identify points of confusion, friction, or failed task completion",
  "Surface user motivations and mental models around screen-time management",
  "Assess how well the gamification mechanics communicate their purpose"];

  const decisions = [
  ["01", "Forced compliance", "Self-determined autonomy",
  "Soft notifications + user-controlled blocking with friend daily-photo nudges (BeReal-style peer accountability).",
  "Self-determination theory shows autonomy is critical for sustained motivation. Forceful blocking damages long-term use — confirmed by all 6 participants."],
  ["02", "Mandatory leaderboards", "Opt-in competition",
  "Leaderboards and challenges are optional with an anonymous-mode toggle. Default view encourages but doesn't enforce comparison.",
  "5 of 6 participants responded positively; 1 of 6 reported stress. Forcing competition would alienate stress-sensitive users."],
  ["03", "External rewards", "Identity-based rewards",
  "Dual-track: avatar cosmetics (identity expression) + real-world coupons (tangible benefit). Avatar growth visible in social spaces.",
  "Rewards don't erode intrinsic motivation when they're tied to identity or progress. Customization reinforces self-efficacy."],
  ["04", "Rich visuals", "Minimalist surface",
  "White-and-red minimalism with isometric 3D brick avatars as the only ornament. Stats prominent; chrome invisible.",
  "A visually noisy app that fights distraction would be self-contradictory. Minimalism reduces cognitive load — the irony is the point."]];

  const screens = [
  ["assets/brick/page_01.png", "01", "Splash", "First-run brand entry."],
  ["assets/brick/page_02.png", "02", "Onboarding", "Sign in — no commitments upfront."],
  ["assets/brick/page_03.png", "03", "Lobby", "Friends as bricks in a shared social space."],
  ["assets/brick/page_04.png", "04", "Profile", "Streak, rank, achievements — and the relocated App Block."],
  ["assets/brick/page_05.png", "05", "Shop", "Avatar cosmetics + real-world coupons."],
  ["assets/brick/page_06.png", "06", "Blocked state", "The cool-down moment — 'take a brick'."],
  ["assets/brick/page_07.png", "07", "Settings", "Notifications, themes, privacy."],
  ["assets/brick/page_08.png", "08", "App Block selection", "Choose categories of distracting apps to lock."]];

  const categories = [
  ["Suggested Improvement", 19.1],
  ["Visual Praise", 19.1],
  ["Easy Navigation", 14.9],
  ["Unclear Feature", 10.6],
  ["Navigation Issue", 9.2],
  ["Too Many Steps", 6.7],
  ["Unclear Labels", 5.7],
  ["Feature Negation", 4.3],
  ["Visual Clutter", 3.5]];

  const findings = [
  ["01", "Icon ambiguity", "The Achievement and App-Block icons looked like inverses of each other and were misread mid-task. The Settings cog blended into the all-red palette — P1: “Settings being the same color as everything else made it hard to find. Settings could be standard black to stand out.”"],
  ["02", "Orientation", "Multiple participants reached the right mental model only after several minutes of exploration. P1: “Without a tutorial, it would be quite difficult for people to understand.” Three of six explicitly asked for an introduction overlay."],
  ["03", "Visual weight", "Screen Time, Apps Blocked, and Streak — the three metrics that drive the entire reward loop — were too small to anchor the homepage hierarchy. P1: “The numbers under Screen Time, Apps Blocked, and Streak could be larger — they seem important.”"]];


  return (
    <article data-screen-label="Case: Brick">
      {/* HERO: title + meta on left rail, empty right */}
      <div className="brick-hero">
        <div className="brick-hero-left">
          <div className="brick-eyebrow">01 · UX Research &amp; Design</div>
          <h1 className="brick-title brick-title-logo"><img src="assets/brick/brick_logo.png" alt="Brick" draggable="false" /></h1>
          <p className="brick-subtitle">A 10-week usability study and redesign of a gamified screen-time app — surfacing the hidden primary action and yielding 14 prioritised recommendations.</p>
          <div className="brick-tags">UX Research  ·  UI Design  ·  Usability Testing</div>
          <div className="brick-meta">
            {[
            ["Role", "UX Researcher & Design Lead"],
            ["Contributions", "I led research design and moderation, and owned the qualitative coding, analysis, and recommendation synthesis."],
            ["Timeline", "10 weeks · 2025"],
            ["Team", "4"],
            ["Tools", "Figma · Axure RP"]].
            map(([k, v]) =>
            <div className="brick-meta-row" key={k}>
                <span className="brick-meta-key">{k}</span>
                <span className="brick-meta-val">{v}</span>
              </div>
            )}
          </div>
        </div>
        <div className="brick-hero-right">
          <video
            className="brick-hero-video"
            src="assets/brick/iphone-zoom-out-middle-move-out.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Brick app preview">
          </video>
        </div>
      </div>

      {/* METRICS STRIP — outcome-led counts (scramble on scroll) */}
      <div className="brick-strip">
        {[
        ["10", "Weeks, end-to-end"],
        ["6", "Participants from 6 countries"],
        ["141", "Coded research segments"],
        ["14", "Prioritised recommendations"]].
        map(([n, d]) =>
        <div className="brick-strip-cell" key={d}>
            <ScrambleNum value={n} />
            <span className="brick-strip-desc">{d}</span>
          </div>
        )}
      </div>

      {/* SECTION NAV — dropdown jump */}
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
          <option value="brick-problem">The Problem</option>
          <option value="brick-research">Research</option>
          <option value="brick-testing">Testing</option>
          <option value="brick-outcome">Outcome</option>
          <option value="brick-takeaway">Takeaway</option>
        </select>
      </nav>

      {/* THE PROBLEM */}
      <section className="brick-section" id="brick-problem">
        <div className="brick-label">The Problem</div>
        <div className="brick-body">
          <p className="brick-lead">Young people know they're on their phones too much. But existing tools punish them for it — and they stop using them within a week.</p>
          <p>Brick is a gamified screen-time management app built for users aged 13–25. Instead of restricting access, it uses rewards and streaks to make self-regulation feel worth it. The design hypothesis was promising. But did the interface actually support the behavior it was trying to build?</p>
          <div className="brick-quote">
            <p style={{ fontSize: "22px" }}>&ldquo;I've tried screen-time apps before. The blocking is too easy to turn off. It defeats the whole point.&rdquo;</p>
            <span className="brick-quote-src">— Participant 6, Finnish, 21</span>
          </div>
          <p style={{ fontSize: "17px" }}>In pre-design interviews, all 6 participants reported having tried screen-time tools and abandoned them — often because enforcement felt either coercive or trivially defeated.</p>
          <p className="brick-statement-sm" style={{ marginTop: 20 }}>The design challenge: build something both effective and respectful of user autonomy.</p>
        </div>
      </section>

      {/* RESEARCH QUESTION — giant callout */}
      <section className="brick-section">
        <div className="brick-label">Research Question</div>
        <div className="brick-body">
          <p className="brick-statement" style={{ textAlign: "left", fontSize: "30px" }}>“How usable is the gamified screentime app for users aged 13–25, and what redesign changes would most improve their experience?”</p>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="brick-section" id="brick-research">
        <div className="brick-label">Research</div>
        <div className="brick-body">
          <p className="brick-lead-sm" style={{ fontSize: "30px" }}>6 users. 6 countries. 5 requirements.</p>
          <h4 className="brick-sublabel">Method</h4>
          <p>Semi-structured interviews with 6 participants aged 21–24 recruited from six different national backgrounds. Each session covered screen-time habits, past attempts to reduce use, and reactions to proposed features.</p>
          <h4 className="brick-sublabel">Why this composition</h4>
          <p>Cross-cultural recruitment surfaced design-relevant tensions that a single-market study would miss — most notably, one participant's stress response to competition, which became a load-bearing constraint for the gamification system.</p>

          <h4 className="brick-sublabel brick-sublabel-spaced">User personas</h4>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", marginBottom: 16 }}>Two extremes from the 6-person sample — chosen to bracket the design space. Anna anchors the stress-sensitive end; James anchors the externally-motivated end. The remaining 4 participants fell between them.</p>
          <div className="brick-personas">
            {personas.map(([initial, name, meta, body]) =>
            <div className="brick-persona" key={name}>
                <div className="brick-persona-initial">{initial}</div>
                <div className="brick-persona-meta">{meta}</div>
                <p className="brick-persona-body">{body}</p>
              </div>
            )}
          </div>

          <h4 className="brick-sublabel brick-sublabel-spaced">Five requirements drawn from the pre-design interviews</h4>
          <div className="brick-reqlist">
            {requirements.map(([k, title, body]) =>
            <div className="brick-req" key={k}>
                <span className="brick-req-key">{k}</span>
                <div>
                  <h3 className="brick-req-title" style={{ fontSize: "22px" }}>{title}</h3>
                  <p className="brick-req-body">{body}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RESEARCH OBJECTIVES — removed; covered by Research Question + Method */}

      {/* PRE-DESIGN RATIONALE */}
      <section className="brick-section">
        <div className="brick-label">Pre-design Rationale</div>
        <div className="brick-body">
          <p style={{ fontSize: "30px" }}>4 trade-offs grounded in behavior-change theory.</p>
          <p style={{ marginTop: 12 }}>The original design decisions baked into Brick's first build — each surfaced from the pre-design interviews, then stress-tested in the usability research that follows.</p>
          <div className="brick-decisions">
            {decisions.map(([num, a, b, chosen, why]) =>
            <div className="brick-decision" key={num}>
                <h3 className="brick-decision-title" style={{ textAlign: "justify" }}>
                  <span className="brick-decision-num">{num}</span>
                  <span className="brick-decision-a" style={{ fontSize: "22px" }}>{a}</span>
                  <span className="brick-decision-vs"> vs </span>
                  <span className="brick-decision-b" style={{ fontSize: "22px" }}>{b}</span>
                </h3>
                <div className="brick-decision-grid">
                  <div className="brick-decision-cell">
                    <span className="brick-decision-cap">Chosen</span>
                    <p>{chosen}</p>
                  </div>
                  <div className="brick-decision-cell">
                    <span className="brick-decision-cap">Why</span>
                    <p>{why}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM — removed; not load-bearing for the research argument */}

      {/* PROTOTYPE — SCREENS GRID */}
      <section className="brick-section" style={{ paddingBottom: 0 }}>
        <div className="brick-label">Prototype</div>
        <div className="brick-body">
          <p style={{ fontSize: "30px" }}>Eight screens — trade-offs and requirements made visible.</p>
        </div>
      </section>
      <div className="brick-screens-grid brick-screens-swipe" aria-label="Brick app screens">
        {screens.map(([src, num, name, body], i) =>
        <figure className="brick-screen-fig" key={i}>
            <div
            className="brick-screen"
            onPointerDown={(e) => {
              if (window.matchMedia("(max-width: 640px)").matches) return;
              e.currentTarget.setPointerCapture(e.pointerId);
              openPeek(i);
            }}
            onPointerUp={closePeek}
            onPointerCancel={closePeek}
            aria-label={`Hold to enlarge ${name}`}>
            
              <img src={src} alt={name} draggable="false" />
            </div>
            <figcaption className="brick-screen-cap">
              <span className="brick-screen-name">{name}</span>
              <span className="brick-screen-body">{body}</span>
            </figcaption>
          </figure>
        )}
      </div>
      <div className="brick-cta-wrap">
        <div className="brick-cta">
          <div className="brick-cta-left">
            <span className="brick-ds-cap">Live Prototype</span>
            <h3 className="brick-cta-title">Try the interactive Axure prototype</h3>
            <p className="brick-cta-body">Full flow: app blocking, social interactions, and leaderboard.</p>
          </div>
          <button className="brick-cta-btn" onClick={() => window.open('https://app.axure.cloud/app/project/qmx6wq/preview', '_blank')}>Open in Axure Cloud →</button>
        </div>
      </div>

      {/* USABILITY TESTING */}
      <section className="brick-section" id="brick-testing">
        <div className="brick-label">Usability Testing</div>
        <div className="brick-body">
          <p className="brick-lead-sm">What 6 users told us — and what we missed.</p>

          {/* STATS STRIP — framing for the testing section */}
          <div className="brick-stats brick-stats-inline">
            <div className="brick-stat"><ScrambleNum value="6" /><span>Participants</span></div>
            <div className="brick-stat"><ScrambleNum value="7" /><span>Tasks</span></div>
            <div className="brick-stat"><ScrambleNum value="141" /><span>Coded segments</span></div>
            <div className="brick-stat"><span className="brick-stat-num brick-stat-num-plain">κ = 0.89</span><span>Inter-rater reliability</span></div>
          </div>

          <p>A think-aloud usability study with 6 participants completing 7 core tasks, followed by semi-structured interviews. Sessions were recorded, transcribed, segmented, and double-coded — inter-rater reliability reached Cohen's κ = 0.89, near-perfect agreement.</p>

          <h4 className="brick-sublabel brick-sublabel-spaced">What users said, by category</h4>
          <div className="brick-bars">
            {categories.map(([label, pct]) =>
            <div className="brick-bar-row" key={label}>
                <span className="brick-bar-label">{label}</span>
                <div className="brick-bar-track"><div className="brick-bar-fill" style={{ width: pct * 3 + "%" }}></div></div>
                <span className="brick-bar-pct">{pct.toFixed(1)}%</span>
              </div>
            )}
          </div>

          <div className="brick-quote" style={{ marginTop: 28 }}>
            <p>&ldquo;It says &lsquo;Leaderboard.&rsquo; I can't see exactly where the blocking page is. I'll look through these tabs… Hmm, I still can't find it.&rdquo;</p>
            <span className="brick-quote-src">— Participant 1, attempting Task 1: Block 5 apps</span>
          </div>
          <p>Most participants struggled with the first task. The app-blocking button — central to the app's core value proposition — was buried inside Profile, behind a dismissable notification. The most important feature was the hardest to find.</p>
        </div>
      </section>

      {/* KEY FINDINGS */}
      <section className="brick-section">
        <div className="brick-label">Key Findings</div>
        <div className="brick-body">
          <div className="brick-findings">
            {findings.map(([num, h, p]) =>
            <div className="brick-finding" key={num}>
                <span className="brick-finding-num">{num}</span>
                <div>
                  <h3 className="brick-finding-title" style={{ fontSize: "30px" }}>{h}</h3>
                  <p>{p}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* OUTCOME — giant statement + theme breakdown */}
      <section className="brick-section" id="brick-outcome">
        <div className="brick-label">Outcome</div>
        <div className="brick-body">
          <p className="brick-statement" style={{ fontSize: "30px" }}>14 prioritised redesign recommendations — Navigation, Hierarchy, Mechanics.</p>

          <div className="brick-outcome-themes">
            <div className="brick-outcome-theme">
              <h3 className="brick-outcome-title">Navigation &amp; discoverability <span className="brick-outcome-count">04 / 14</span></h3>
              <p>Elevate App Block to the homepage. Collapse the profile notification banner by default. Add a one-time spotlight tutorial. Differentiate the Achievement and App-Block icons.</p>
            </div>
            <div className="brick-outcome-theme">
              <h3 className="brick-outcome-title">Visual hierarchy <span className="brick-outcome-count">05 / 14</span></h3>
              <p>Enlarge headline stat numerals. Raise Settings-icon contrast. Broaden the palette beyond red/white. Strengthen the heart-favourite affordance. Surface coupon progress on Profile.</p>
            </div>
            <div className="brick-outcome-theme">
              <h3 className="brick-outcome-title">Behavioural mechanics <span className="brick-outcome-count">05 / 14</span></h3>
              <p>30-second cool-down before any unblock action. Contextual daily-photo reminders. Add a weekly-summary view. Optional anonymous leaderboard mode. Reorder onboarding to defer commitment.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ITERATION — before / after */}
      <section className="brick-section">
        <div className="brick-label">Iteration</div>
        <div className="brick-body">
          <p>Fixing the discoverability bug.</p>
          <div className="brick-ba">
            <div className="brick-ba-card">
              <span className="brick-ba-tag brick-ba-tag-before">Before</span>
              <h3 className="brick-ba-title">App Block buried in Profile</h3>
              <p>Users had to tap Profile → dismiss a notification banner → scroll → tap App Block. Average task time was high, and 3 of 6 participants needed prompting.</p>
            </div>
            <div className="brick-ba-card">
              <span className="brick-ba-tag brick-ba-tag-after">After</span>
              <h3 className="brick-ba-title">App Block elevated to Homepage</h3>
              <p>App Block becomes a primary action on the dashboard. The dismissable notification collapses by default. The core value of the product is now one tap away.</p>
            </div>

            <div className="brick-ba-card">
              <span className="brick-ba-tag brick-ba-tag-before">Before</span>
              <h3 className="brick-ba-title">No friction on unblocking</h3>
              <p>One tap dismissed an active block. Participant 6: &ldquo;The blocking is too easy to turn off. It defeats the whole point.&rdquo; The feature existed; the deterrent didn&rsquo;t.</p>
            </div>
            <div className="brick-ba-card">
              <span className="brick-ba-tag brick-ba-tag-after">After</span>
              <h3 className="brick-ba-title">A 30-second cool-down before unblock</h3>
              <p>Directly suggested by Participant 2: &ldquo;You should add some features that you need to wait for a bit — if you can unblock easily, it&rsquo;s not stopping me.&rdquo; A visible countdown gates every unblock action: small enough not to feel punitive, large enough to interrupt impulse.</p>
            </div>

            <div className="brick-ba-card">
              <span className="brick-ba-tag brick-ba-tag-before">Before</span>
              <h3 className="brick-ba-title">First-time users dropped at Lobby</h3>
              <p>The isometric social space had no introduction. New users tapped around for a while before realising friends-as-bricks was the core social loop.</p>
            </div>
            <div className="brick-ba-card">
              <span className="brick-ba-tag brick-ba-tag-after">After</span>
              <h3 className="brick-ba-title">One-time tutorial overlay</h3>
              <p>A dismissable spotlight tour on first launch points at the App Block, the streak counter, and the friend lobby — then never reappears. No mandatory onboarding wall.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section className="brick-section">
        <div className="brick-label">Reflection</div>
        <div className="brick-body">
          <div className="brick-reflect">
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>What worked</h4>
              <ul className="brick-bullets">
                <li>Real-life setting (own devices) increased ecological validity.</li>
                <li>Concurrent think-aloud + post-task interviews captured behavior and self-explanation.</li>
                <li>Cross-cultural recruitment surfaced differences a homogeneous sample would miss.</li>
                <li>Pre-defined codebook + inductive additions + κ added rigor uncommon in early-stage UX work.</li>
              </ul>
            </div>
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>What I'd change</h4>
              <ul className="brick-bullets">
                <li>Run an earlier pilot — the App Block discoverability issue should have been caught before main sessions.</li>
                <li>Reorder tasks: low-stakes before high-stakes.</li>
                <li>Write vivid scenarios ("imagine you just finished studying").</li>
                <li>Looser moderator stance — gentle prompting would have unlocked more insight.</li>
              </ul>
            </div>
          </div>

          <div className="brick-reflect brick-reflect-spaced">
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>Limitations</h4>
              <ul className="brick-bullets">
                <li><b>Sample size (n = 6).</b> Patterns are qualitative; quantifying them requires a follow-up survey (n &ge; 50) before claiming generality.</li>
                <li><b>Age gap.</b> The product targets 13–25, but participants were 21–24 — a convenience sample drawn from the university environment. The 13–17 cohort, the demographic with the lowest self-regulation, was not represented.</li>
                <li><b>Single re-test cycle.</b> The redesigned flows were not re-tested with new users within the 10-week window. Recommendations are evidence-based but not empirically re-validated.</li>
              </ul>
            </div>
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>If I had another sprint...</h4>
              <p>I&rsquo;d run the highest-impact redesign — App Block on the homepage — through a focused A/B test with 8–10 new users from the 13–17 cohort, measuring task time-to-first-block as the primary metric.</p>
              <p style={{ marginTop: 12 }}>The cool-down delay would follow as a behavioural-change study with a 2-week diary phase to measure actual unblock frequency, not just intent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TAKEAWAY */}
      <section className="brick-section" id="brick-takeaway">
        <div className="brick-label">Takeaway</div>
        <div className="brick-body">
          <p className="brick-statement" style={{ fontSize: "44px", textAlign: "left" }}>A good idea is worthless if people can't find it.</p>
          <p>Brick's concept worked in every interview — people liked being rewarded for cutting screen time instead of being punished for it. But testing showed a basic problem: the most important button, the one that actually blocks apps, was hidden three taps deep. The idea was solid. The way to reach it wasn't.</p>
          <h4 style={{ fontSize: "22px", fontWeight: 500, margin: "24px 0 8px" }}>Key design learning</h4>
          <p>Moving that button to the home screen was the whole fix — it didn't change what Brick does, it just let people actually use it. The lesson: where you put a feature is a real decision, not an afterthought.</p>
          <p>With what I have now, the next step is clear — test it with the 13–17 age group the app was actually made for, and track one simple number: how fast a new user blocks their first app.</p>
        </div>
      </section>

      <footer className="proj-footer">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}>← Home</a>
        <a className="proj-footer-next" onClick={() => go("case", next.id)} style={{ cursor: "pointer" }}>
          <img src={next.src} alt={next.title} draggable="false" />
          <span>{next.title}</span>
          <span aria-hidden="true">→</span>
        </a>
      </footer>

      {peekIdx !== null &&
      <div className={"brick-peek brick-peek-" + peekPhase} aria-hidden="true">
          <img src={screens[peekIdx][0]} alt="" draggable="false" />
        </div>
      }
    </article>);
}

Object.assign(window, { BrickCase });