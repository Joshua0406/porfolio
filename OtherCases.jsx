/* The other three case studies — Desertification, VR Supermarket, KNS.
   Reuse the .brick-* editorial classes; each tells its own story. */

/* ─── 02 · DESERTIFICATION ─────────────────────────────────────────── */
function DesertCase({ go }) {
  const next = PROJECTS[2]; // supermarket
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
    setTimeout(() => {setPeekIdx(null);setPeekPhase("closed");}, 260);
  };

  const personas = [
  {
    portrait: "assets/desert/persona_sterre.jpg",
    name: "Sterre Janssen",
    meta: "30 · Journalist & activist · Receptive amplifier",
    body: "High awareness, festival-goer, blogger. Yoga, photography, politics, veganism. Already cares — will share content the moment it lands. The audience that turns one post into ten."
  },
  {
    portrait: "assets/desert/persona_floris.jpg",
    name: "Floris van den Berg",
    meta: "21 · IBA student · Hard-to-reach",
    body: "Low environmental awareness, right-leaning, outgoing. Football, beer, Viper at parties. Doesn't follow climate accounts. The audience the campaign was actually designed to break through to."
  }];


  const theories = [
  ["01", "Media Richness Theory", "Daft & Lengel (1986). Richer media — face-to-face, multi-sensory — outperform digital alone for low-involvement topics. The festival became the high-bandwidth medium the strategy hinged on."],
  ["02", "Framing — Loss vs Gain", "Carnahan, Hao & Yan (2019). All messages led with what audiences stand to lose — wine production, harvests, the landscape — not abstract environmental responsibility. Oracle: 48% of social users disengage from ads without an emotional trigger."],
  ["03", "Authority Persuasion", "Lee, Tsohou & Choi (2017). Source credibility transfers from messenger to message. Justified the influencer activation: 85% of young adults follow ≥1 influencer (Artevelde, 2021); 25% report purchase decisions shaped by one."]];


  const outputs = [
  ["01", "Festival as rich-media anchor", "\"Into the Desert — Benefit Festival, 25–27 July.\" Co-hosted by Viper, ticket revenue funding Commonland's reforestation. The live event is the rich-media moment Media Richness Theory predicts moves attitudes, not the social feed around it."],
  ["02", "Loss-aversion content system", "Every post leads with a specific loss — Spain as 4th largest wine exporter, harvests, the landscape. Loss framing outperforms gain framing for low-involvement audiences. Reframe: not \"the land is dying,\" but \"no wine to drink when we retire.\""],
  ["03", "\"Save the Land\" infographic", "Long-form Illustrator infographic — causes, soil and biodiversity impact, statistics, the degradation process, solutions — designed for festival flyer and digital-post repurposing."],
  ["04", "KOL activation strategy", "Artists and festival headliners as authority figures. Outreach across TikTok, Spotify, and Instagram for pre- and post-event reach. Source credibility transferred from performer to cause."]];


  const keyMessages = [
  "Sustainable land use is essential for a flourishing future.",
  "Protecting ecosystems today secures harvests for tomorrow.",
  "A healthy planet depends on balanced resource management."];


  const ctas = [
  "Save the land, secure our future.",
  "Protect nature, grow tomorrow.",
  "Restore today, harvest tomorrow."];


  const posts = [
  "assets/desert/post_who_cares.png",
  "assets/desert/post_dying.png",
  "assets/desert/post_spain_2050.png",
  "assets/desert/post_save_land.png",
  "assets/desert/post_friend.png",
  "assets/desert/post_festival.png",
  "assets/desert/post_video.png",
  "assets/desert/post_viper_cactus.png"];


  return (
    <article data-screen-label="Case: Desertification">
      <div className="brick-hero">
        <div className="brick-hero-left">
          <div className="brick-eyebrow">02 · Content Strategy &amp; Campaign Design</div>
          <h1 className="brick-title brick-title-logo"><img src="assets/desert/title_logo.png" alt="Into the Desert" draggable="false" /></h1>
          <p className="brick-subtitle" style={{ width: "550px" }}>A theory-driven awareness campaign for Commonland × Viper — turning a slow climate crisis into a benefit festival Dutch 18–34s would actually attend.</p>
          <div className="brick-tags">Content Strategy  ·  Campaign Design  ·  Visual Communication</div>
          <div className="brick-meta">
            {[
            ["Role", "Strategist & Visual Designer"],
            ["Contributions", "I co-led the framing strategy and personally produced the \u201cSave the Land\u201d infographic and bilingual content templates."],
            ["Context", "Module 1, BSc Communication Science, University of Twente · Team of 4"],
            ["Status", "Academic deliverable \u2014 strategy + creative system, not deployed"],
            ["Tools", "Adobe Illustrator · Miro · Canva"]].
            map(([k, v]) =>
            <div className="brick-meta-row" key={k}>
                <span className="brick-meta-key">{k}</span>
                <span className="brick-meta-val">{v}</span>
              </div>
            )}
          </div>
        </div>
        <div className="brick-hero-right">
          <img className="brick-hero-img" src="assets/desert/viper_cactus_hero.png" alt="Viper × Into the Desert — Cactus Edition" draggable="false" style={{ objectPosition: "top center", padding: 0 }} />
        </div>
      </div>

      <div className="brick-strip">
        {[
        ["10", "Weeks, end-to-end"],
        ["3", "Theoretical frameworks"],
        ["8", "Social posts mocked"],
        ["3M", "Target audience"]].
        map(([n, d]) => {
          const { prefix, value } = splitNum(n);
          return (
            <div className="brick-strip-cell" key={d}>
              <ScrambleNum value={value} prefix={prefix} />
              <span className="brick-strip-desc">{d}</span>
            </div>);

        })}
      </div>

      <nav className="brick-toc" aria-label="Section navigation">
        <select className="brick-toc-select" defaultValue=""
        onChange={(e) => {
          const id = e.target.value;
          if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          e.target.value = "";
        }}>
          <option value="" disabled>Jump to section</option>
          <option value="desert-problem">The Problem</option>
          <option value="desert-audience">Target Audience</option>
          <option value="desert-strategy">The Strategy</option>
          <option value="desert-takeaway">Takeaway</option>
        </select>
      </nav>

      <section className="brick-section" id="desert-problem">
        <div className="brick-label">
          The Problem
          <img className="brick-label-asset" src="assets/desert/sdg15.jpeg" alt="UN SDG 15 — Life on Land" style={{ width: "243px" }} />
        </div>
        <div className="brick-body">
          <p className="brick-lead">40% of Earth's land is degraded. The Sahara is creeping into southern Spain. The Dutch 18–34 cohort — the people whose generation will inherit the consequence — mostly couldn't tell you what desertification means.</p>
          <p><b>Commonland</b> is an NGO targeting 100M hectares of restored land by 2040. <b>Viper</b> is a Dutch hard-seltzer with 30% market share of its segment. The brief: design a campaign that lets the brand's reach carry the NGO's message — without it dissolving into corporate climate fluff.</p>
          <p className="brick-statement-sm" style={{ marginTop: 20 }}>How do you make a slow crisis feel like it is happening now — to someone scrolling Instagram at 11 pm?</p>
        </div>
      </section>

      <section className="brick-section" id="desert-goal">
        <div className="brick-label">SMART Goal</div>
        <div className="brick-body">
          <p className="brick-statement" style={{ fontSize: "30px" }}>Increase desertification awareness among Dutch 18–34 year-olds by 10% within 3 months — measured by social engagement metrics and festival participation.</p>
        </div>
      </section>

      <section className="brick-section" id="desert-audience">
        <div className="brick-label">Target Audience</div>
        <div className="brick-body">
          <p className="brick-lead-sm" style={{ fontSize: "30px", width: "620px" }}>3M people. 95% online daily. One shared interest.</p>
          <p>The Dutch 18–34 cohort is ≈3M people (CBS, 2019) — 17% of the Dutch population, 95% of whom use social media daily. The age band is internally diverse: ideologies, classes, channel preferences differ widely. The reliable common ground was <b>festivals</b> (Brecht, 2024). The strategy used that as the anchor.</p>

          <h4 className="brick-sublabel brick-sublabel-spaced">Audience Personas</h4>
          <p style={{ fontSize: "15px", color: "rgba(0,0,0,0.6)", marginBottom: 16 }}>Two ends of the spectrum the campaign had to address — one needs to be persuaded, the other needs to be activated.</p>
          <div className="brick-personas brick-personas-portrait">
            {personas.map((p) =>
            <div className="brick-persona" key={p.name}>
                <div className="brick-persona-portrait">
                  <img src={p.portrait} alt={p.name} draggable="false" />
                </div>
                <div className="brick-persona-name-lg">{p.name}</div>
                <div className="brick-persona-meta">{p.meta}</div>
                <p className="brick-persona-body">{p.body}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="brick-section" id="desert-theory">
        <div className="brick-label">Theory</div>
        <div className="brick-body">
          <p style={{ fontSize: "30px" }}>Three frameworks did the load-bearing work.</p>
          <div className="brick-findings" style={{ marginTop: 18 }}>
            {theories.map(([num, h, p]) =>
            <div className="brick-finding" key={num}>
                <span className="brick-finding-num">{num}</span>
                <div>
                  <h3 className="brick-finding-title" style={{ fontSize: "22px" }}>{h}</h3>
                  <p>{p}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="brick-section brick-section-wide" id="desert-strategy">
        <h2 className="brick-label">The Strategy</h2>
        <div className="brick-body brick-body-wide">
          <div className="brick-strategy-grid">
            {outputs.map(([num, h, p]) =>
            <div className="brick-strategy-card" key={num}>
              <span className="brick-finding-num">{num}</span>
              <h3 className="brick-finding-title" style={{ fontSize: "22px" }}>{h}</h3>
              <p>{p}</p>
            </div>
            )}
          </div>
        </div>
      </section>

      <section className="brick-section" id="desert-messages">
        <div className="brick-label">Messages & CTAs</div>
        <div className="brick-body">
          <div className="brick-reflect brick-reflect-spaced">
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "30px" }}>Key messages</h4>
              <ul className="brick-bullets">
                {keyMessages.map((m) => <li key={m} style={{ fontSize: "22px" }}>{m}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "30px" }}>Calls-to-action</h4>
              <ul className="brick-bullets brick-bullets-mark">
                {ctas.map((c, i) =>
                <li key={c} style={{ fontSize: "22px" }} className={i === 0 ? "is-chosen" : undefined}>
                    {c}
                    {i === 0 && <span className="brick-bullet-tag"> · Final pick</span>}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="brick-section" id="desert-posts" style={{ paddingBottom: 0 }}>
        <div className="brick-label">Selected Visuals</div>
        <div className="brick-body"></div>
      </section>
      <div className="brick-screens-grid" aria-label="Selected campaign posts">
        {posts.map((src, i) =>
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
            aria-label="Hold to enlarge campaign post">
            
              <img src={src} alt={"Campaign post " + (i + 1)} draggable="false" />
            </div>
          </figure>
        )}
      </div>

      <section className="brick-section" id="desert-infographic" style={{ paddingBottom: 0 }}>
        <h2 className="brick-label">Save the Land</h2>
        <div className="brick-body">
          <p>End-to-end infographic in Adobe Illustrator — six sections (Causes → Process → Impact → Soil & Biodiversity → Population → Solutions) wrapped around a central cactus, ending on the campaign CTA.</p>
        </div>
      </section>
      <div className="desert-infographic-wrap">
        <img className="desert-infographic" src="assets/desert/save_the_land_infographic.png" alt="Save the Land — desertification infographic" draggable="false" />
      </div>

      <section className="brick-section" id="desert-reflection">
        <div className="brick-label">Reflection</div>
        <div className="brick-body">
          <div className="brick-reflect">
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>What worked</h4>
              <ul className="brick-bullets">
                <li>Loss-framing as the editorial backbone made every post writeable to one principle.</li>
                <li>Anchoring to the festival kept Media Richness from being an academic claim — it became the deliverable.</li>
                <li>Two-extreme personas (Sterre / Floris) kept the team honest about who we were actually trying to move.</li>
                <li>Theory citations forced the strategy to be defensible at each decision point.</li>
              </ul>
            </div>
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>What I'd change</h4>
              <ul className="brick-bullets">
                <li>Pilot-test the loss-framing on 5–10 actual Floris-types before committing the whole content system to it.</li>
                <li>Mock up gain-framed alternatives for A/B in the social plan — claim was theoretical, not validated.</li>
                <li>Production-test the "Save the Land" infographic on phone screens; festival flyer at A3 doesn't transfer to 9:16 cleanly.</li>
                <li>Build a real measurement plan, not just engagement metrics — survey baseline + post-festival lift would be the actual evidence.</li>
              </ul>
            </div>
          </div>

          <div className="brick-reflect brick-reflect-spaced">
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>Limitations</h4>
              <ul className="brick-bullets">
                <li><b>No audience research.</b> Personas were synthesized from secondary literature — no interviews with actual Floris-types.</li>
                <li><b>Not deployed.</b> Festival, posts, infographic exist as concepts. No reach data, no engagement data, no awareness-lift survey.</li>
                <li><b>Single-market focus (NL).</b> Strategy doesn't transfer to the actual desertification regions (Spain, North Africa) without rework.</li>
              </ul>
            </div>
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>If I had another module</h4>
              <p>I'd run 8–10 short interviews with the Floris persona — actual UT students who don't follow environmental accounts — to test whether the "no wine to drink when we retire" loss frame lands as predicted, or reads as cynical. The whole strategy depends on that one frame working.</p>
              <p style={{ marginTop: 12 }}>Then I'd shop the festival concept to Viper's actual marketing team. The point of a corporate-NGO partnership case is that the partnership has to be plausible to the corporate side — and that's a conversation we never had.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="brick-section" id="desert-takeaway">
        <div className="brick-label">Takeaway</div>
        <div className="brick-body">
          <p className="brick-statement" style={{ fontSize: "44px", textAlign: "left" }}>Fear paralyses. Facts don't stick. What works is connecting an abstract problem to something people already care about losing.</p>
          <p>That reframe shaped every choice. Not "the land is dying" — but "the wine regions, the harvests, the landscapes you take for granted are already disappearing." <b>Loss-aversion as a design decision, not a rhetorical flourish.</b></p>
          <p>The festival applied the same principle at a different scale: to make someone care about something abstract, put them inside an experience that makes it concrete. A post can inform. A moment can shift how someone feels for years.</p>
          <p>The infographic was where I had to make those choices visible — what to show, what to cut, what order creates understanding versus overwhelm. Designing for comprehension under three seconds of attention is its own discipline.</p>
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
          <img src={posts[peekIdx]} alt="" draggable="false" />
        </div>
      }
    </article>);

}

/* ─── 03 · VR SUPERMARKET ──────────────────────────────────────────── */
function VRCase({ go }) {
  const next = PROJECTS[3]; // kns
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
    setTimeout(() => {setPeekIdx(null);setPeekPhase("closed");}, 260);
  };

  const theories = [
  ["01", "Social proof as a navigation cue", "When uncertain, people copy others. We tested whether a virtual crowd in the healthy aisle would act as a descriptive norm — a soft signal that \"this is what to choose.\""],
  ["02", "Stimulus → Organism → Response", "A model framing why a crowd could pull shoppers in, what shifts internally, and what to measure when it doesn't translate to action."],
  ["03", "Susceptibility to Social Influence", "Some people copy others more than others. SSI was measured post-task to test whether high-SSI participants would respond more strongly to the crowd."]];


  const hypotheses = [
  ["H1", "Crowded healthy aisles increase the proportion of healthy products (Nutri-Score A/B) selected vs. control."],
  ["H2", "Participants spend significantly more time in crowded healthy aisles than in empty ones."],
  ["H3", "The effect of social density on healthy selection is stronger for participants high in SSI."]];


  const stimuli = [
  ["assets/vr/aisle_unhealthy.jpg", "Unhealthy aisle", "Snacks, sugary cereals, confectionery."],
  ["assets/vr/aisle_neutral.jpg", "Neutral aisle", "Milk, bread, breakfast staples."],
  ["assets/vr/aisle_healthy.jpg", "Healthy aisle", "Fresh produce, organic. The target aisle for the manipulation."]];


  const conditions = [
  ["assets/vr/cond_a.jpg", "Condition A · Experimental", "Healthy section populated with 5\u20137 static NPC avatars. Unhealthy section empty. Avatars positioned to function as a social-proof cue at the shelf edge."],
  ["assets/vr/cond_b.jpg", "Condition B · Control", "Supermarket empty except for one NPC walking across non-target aisles. Auditory and environmental factors held constant across both conditions."]];


  const results = [
  ["H1", "Healthy product proportion", "0.47 vs 0.49", "p = .717", "d = \u22120.10", "ns"],
  ["H2a", "Dwell — healthy aisle (s)", "83.3 vs 100.4", "p = .356", "d = \u22120.27", "ns"],
  ["H2b", "Dwell — unhealthy aisle (s)", "66.1 vs 44.3", "p = .133", "d = 0.43", "trend"],
  ["H3", "Condition × SSI interaction", "—", "p = .118", "—", "ns"]];


  const findings = [
  ["01", "Path changed, choice didn't.", "Final product selection was statistically identical between groups (47% vs 49% healthy, p = .717). Dwell time in the unhealthy aisle, however, dropped from 66s (control) to 44s (experimental) — a medium effect (d = 0.43). The crowd didn't make people pick healthy. The absence of a crowd in the unhealthy aisle made them leave faster."],
  ["02", "Manipulation check failure.", "An independent t-test on perceived crowding showed no significant difference between groups (M = 3.86 vs 3.57, p = .433). Participants didn't consciously register the experimental condition as more crowded. Static avatars read as obstacles, not as social referents. Without perceived social presence, Social Impact Theory predicts what we observed: no effect on choice."],
  ["03", "SSI direction inverted.", "The Condition × SSI interaction term was not significant (p = .118), but the regression lines crossed: in the control group, higher SSI predicted more healthy choices; in the experimental condition, higher SSI predicted slightly fewer. A statically populated aisle may have signalled \u201cthis is congested\u201d rather than \u201cthis is desirable\u201d to SSI-sensitive shoppers."]];


  return (
    <article data-screen-label="Case: VR Supermarket">
      <div className="brick-hero">
        <div className="brick-hero-left">
          <div className="brick-eyebrow">03 · VR Research &amp; Behavioural Science</div>
          <h1 className="brick-title brick-title-red">VR<br />Supermarket</h1>
          <p className="brick-subtitle">A between-subjects VR experiment (N = 50) testing whether virtual crowd presence in healthy aisles nudges food selection — and what a null result says about social realism in immersive retail.</p>
          <div className="brick-tags">VR Research  ·  Behavioural Science  ·  Statistical Analysis</div>
          <div className="brick-meta">
            {[
            ["Role", "Designer & Statistical Analyst"],
            ["Contributions", "I built the Unity store environment, designed the aisle layout, and ran the statistical analysis in R."],
            ["Context", "BSc CS · Module 7 · UT · Team of 4"],
            ["Tools", "Unity · Meta Quest VR · Qualtrics · R"]].
            map(([k, v]) =>
            <div className="brick-meta-row" key={k}>
                <span className="brick-meta-key">{k}</span>
                <span className="brick-meta-val">{v}</span>
              </div>
            )}
          </div>
        </div>
        <div className="brick-hero-right">
          <img className="brick-hero-img" src="assets/vr/store_cutaway.jpg" alt="3D cutaway of the VR supermarket environment" draggable="false" style={{ objectPosition: "top center", padding: 0 }} />
        </div>
      </div>

      <div className="brick-strip">
        {[
        ["50", "Participants"],
        ["2", "Conditions"],
        ["d = 0.43", "Effect on unhealthy dwell"],
        ["3", "Hypotheses tested"]].
        map(([n, d]) => {
          const { prefix, value } = splitNum(n);
          return (
            <div className="brick-strip-cell" key={d}>
              <ScrambleNum value={value} prefix={prefix} />
              <span className="brick-strip-desc">{d}</span>
            </div>);

        })}
      </div>

      <nav className="brick-toc" aria-label="Section navigation">
        <select className="brick-toc-select" defaultValue=""
        onChange={(e) => {
          const id = e.target.value;
          if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          e.target.value = "";
        }}>
          <option value="" disabled>Jump to section</option>
          <option value="vr-problem">The Problem</option>
          <option value="vr-theory">Setup</option>
          <option value="vr-results">Results</option>
          <option value="vr-takeaway">Takeaway</option>
        </select>
      </nav>

      <section className="brick-section" id="vr-problem">
        <h2 className="brick-label">The Problem</h2>
        <div className="brick-body">
          <p className="brick-lead">Unhealthy diets persist in retail environments that prioritise convenience. Could a virtual crowd, placed in the right aisle, nudge people toward healthier choices?</p>
          <p>Supermarkets are the primary decision environment for what people eat \u2014 and one of the hardest places to isolate a single behavioural cue. VR lets us hold everything constant (store, products, lighting) and vary only the one thing that matters: the presence of others.</p>
          <p className="brick-statement-sm" style={{ marginTop: 20, fontSize: "30px" }}>“To what extent does social density in healthy aisles influence consumers' food choices and spatial engagement in a virtual supermarket?”</p>
        </div>
      </section>

      <section className="brick-section" id="vr-theory">
        <h2 className="brick-label">Theory</h2>
        <div className="brick-body">
          <p style={{ fontSize: "17px" }}>Three frameworks did the load-bearing work.</p>
          <div className="brick-findings" style={{ marginTop: 18 }}>
            {theories.map(([num, h, p]) =>
            <div className="brick-finding" key={num}>
                <span className="brick-finding-num">{num}</span>
                <div>
                  <h3 className="brick-finding-title">{h}</h3>
                  <p>{p}</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      <section className="brick-section" id="vr-hypotheses">
        <h2 className="brick-label">Hypotheses</h2>
        <div className="brick-body">
          <div className="vr-hyp-list">
            {hypotheses.map(([id, body]) =>
            <div className="vr-hyp" key={id}>
                <span className="vr-hyp-id">{id}</span>
                <p>{body}</p>
              </div>
            )}
          </div>

          <h4 className="brick-sublabel brick-sublabel-spaced">Research framework</h4>
          <div className="vr-framework">
            <img src="assets/vr/framework.png" alt="Research framework: Social Density → Healthy Choices, moderated by SSI" draggable="false" />
          </div>
        </div>
      </section>

      <section className="brick-section" id="vr-method">
        <h2 className="brick-label">
          Method
          <img className="brick-label-asset vr-method-photo" src="assets/vr/lab_session.jpeg" alt="Participant wearing a Meta Quest headset during a VR session at the BMS Lab" draggable="false" />
        </h2>
        <div className="brick-body" style={{ paddingTop: 48 }}>
          <p className="brick-lead-sm" style={{ fontSize: "30px" }}>A 3D supermarket in Unity. Meta Quest. 50 participants. Two conditions.</p>
          <p>Participants entered a customised supermarket in Unity via Meta Quest headsets at the University of Twente's BMS Lab. After a teleportation-movement habituation phase, they were instructed to <b>“collect five breakfast items.”</b> All movement was logged via Unity positional tracking. Post-task, participants completed a Qualtrics questionnaire covering the SSI scale, the manipulation check, and demographic controls.</p>
        </div>
      </section>

      <section className="brick-section" style={{ paddingTop: 0, paddingBottom: 16 }}>
        <h2 className="brick-label"></h2>
        <div className="brick-body">
          <h4 className="brick-sublabel" style={{ marginTop: 0 }}>The environment</h4>
          <p>Three aisles — unhealthy, neutral, healthy — with identical shelf space and product counts. Only the social cue varied.</p>
        </div>
      </section>

      <div className="vr-stimuli-grid">
        {stimuli.map(([src, name, body], i) =>
        <figure className="vr-stimulus" key={src}>
            <div
            className="vr-stimulus-img"
            onPointerDown={(e) => {e.currentTarget.setPointerCapture(e.pointerId);openPeek(i);}}
            onPointerUp={closePeek}
            onPointerCancel={closePeek}>
            
              <img src={src} alt={name} draggable="false" />
            </div>
            <figcaption className="vr-stimulus-cap">
              <span className="vr-stimulus-name">{name}</span>
              <span className="vr-stimulus-body">{body}</span>
            </figcaption>
          </figure>
        )}
      </div>

      <section className="brick-section" style={{ paddingTop: 0 }}>
        <h2 className="brick-label">
          Store layout
          <img className="brick-label-asset vr-method-photo" src="assets/vr/layout_top.jpg" alt="Top-down layout of the VR supermarket" draggable="false" />
        </h2>
        <div className="brick-body" style={{ paddingTop: 48 }}>
          <p>Top-down view of the Unity store. Participants entered through the right, encountered non-target aisles first, then traversed unhealthy → neutral → healthy sections.</p>
        </div>
      </section>

      <section className="brick-section" style={{ paddingTop: 0 }}>
        <h2 className="brick-label"></h2>
        <div className="brick-body">
          <h4 className="brick-sublabel brick-sublabel-spaced">The two conditions</h4>
          <p>Between-subjects assignment. Same environment, same products. Only NPC presence differed.</p>
        </div>
      </section>

      <div className="vr-cond-grid">
        {conditions.map(([src, name, body], i) =>
        <figure className="vr-cond" key={src}>
            <div
            className="vr-cond-img"
            onPointerDown={(e) => {e.currentTarget.setPointerCapture(e.pointerId);openPeek(3 + i);}}
            onPointerUp={closePeek}
            onPointerCancel={closePeek}>
            
              <img src={src} alt={name} draggable="false" />
            </div>
            <figcaption className="vr-cond-cap">
              <span className="vr-cond-name">{name}</span>
              <p>{body}</p>
            </figcaption>
          </figure>
        )}
      </div>

      <section className="brick-section" id="vr-results">
        <h2 className="brick-label">
          Results
          <img className="brick-label-asset vr-results-plot" src="assets/vr/interaction_plot.png" alt="Interaction effect of SSI and condition on healthy product proportion" draggable="false" />
        </h2>
        <div className="brick-body">
          <p>Independent samples t-tests on the primary outcomes; multiple linear regression for the moderation. All tests at α = .05, two-tailed.</p>

          <div className="vr-results-table">
            <div className="vr-results-row vr-results-head">
              <span>Hypothesis</span><span>Measure</span><span>Control vs Exp.</span><span>p</span><span>Effect</span>
            </div>
            {results.map(([hyp, dv, mean, p, d, status]) =>
            <div className={"vr-results-row " + (status === "trend" ? "is-trend" : "is-ns")} key={hyp}>
                <span className="vr-results-hyp">{hyp}</span>
                <span>{dv}</span>
                <span className="vr-results-mean">{mean}</span>
                <span className="vr-results-p">{p}</span>
                <span className="vr-results-d">{d}</span>
              </div>
            )}
          </div>

          <h4 className="brick-sublabel brick-sublabel-spaced" style={{ marginTop: 36 }}>SSI × Condition interaction</h4>
          <p>Regression of healthy-choice proportion on Condition, mean-centered SSI, and their interaction. F(3,46) = 1.00, p = .401, R² = .06.</p>
          <p style={{ marginTop: 12 }}>The lines cross — in the control group, higher SSI predicts more healthy choices; in the experimental condition the slope flattens and slightly reverses. The interaction term itself is not significant (p = .118), but the directional pattern is opposite to H3's prediction.</p>
        </div>
      </section>

      <section className="brick-section" id="vr-findings">
        <h2 className="brick-label">Findings</h2>
        <div className="brick-body">
          <div className="brick-findings">
            {findings.map(([num, h, p]) =>
            <div className="brick-finding" key={num}>
                <span className="brick-finding-num">{num}</span>
                <div>
                  <h3 className="brick-finding-title">{h}</h3>
                  <p>{p}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="brick-section" id="vr-reflection">
        <h2 className="brick-label">Reflection</h2>
        <div className="brick-body">
          <div className="brick-reflect">
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>What worked</h4>
              <ul className="brick-bullets">
                <li>Pre-registered hypotheses forced clean separation of selection vs. spatial outcomes \u2014 which revealed the d = 0.43 unhealthy-dwell effect.</li>
                <li>Behavioural logs + survey caught the failed manipulation check that pure choice data would have hidden.</li>
              </ul>
            </div>
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>Limitations</h4>
              <ul className="brick-bullets">
                <li><b>Failed manipulation check.</b> Participants didn't perceive the condition as more crowded (p = .433) \u2014 caveats every test that followed.</li>
                <li><b>Underpowered.</b> N = 50, n = 25 per cell.</li>
                <li><b>VR novelty.</b> First-time-in-VR participants attended to the environment, not the cue.</li>
              </ul>
            </div>
          </div>

          <div className="brick-reflect brick-reflect-spaced">
            <div>
              <h4 className="brick-sublabel brick-sublabel-cased" style={{ fontSize: "22px" }}>Next iteration</h4>
              <ul className="brick-bullets">
                <li>Dynamic NPCs with gaze + product interaction \u2014 static avatars read as furniture.</li>
                <li>Pilot the manipulation on 5\u201310 users before the full run.</li>
                <li>Eye-tracking (Quest Pro) to separate \"noticed\" from \"responded to.\"</li>
                <li>Reframe the DV: measure aisle entry / dwell / exit, not basket composition. d = 0.43 says density operates on <b>navigation</b>, not <b>decision</b>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="brick-section" id="vr-takeaway">
        <h2 className="brick-label">Takeaway</h2>
        <div className="brick-body">
          <p className="brick-statement" style={{ fontSize: "44px", textAlign: "left" }}>I thought the crowd would do the work. It didn't.</p>
          <p>The whole study was one bet: drop five avatars into the healthy aisle, watch people drift toward the apples. The basket came back the same whether the aisle was busy or empty (p = .717). For about a week I thought I'd just run a bad study.</p>
          <p>Then I looked at dwell time. In the "crowded" condition, people cut almost a third of the time they'd otherwise spend in the unhealthy aisle (d = 0.43). The crowd didn't pull anyone toward broccoli — but the empty unhealthy aisle quietly pushed them past the chips.</p>
          <p>The manipulation check told me why no one felt crowded. One participant just asked, "what are they looking at?" The avatars stood there, didn't move, didn't reach for anything — they read as obstacles, not shoppers. Social proof needs people who look like they're making a choice, not just bodies in the room.</p>
          <p>Null results aren't fails. They're data asking a sharper question. Mine is: when does just being in the room start counting as being part of the crowd?</p>
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
          <img src={[
        ...stimuli.map((s) => s[0]),
        ...conditions.map((c) => c[0])][
        peekIdx]} alt="" draggable="false" />
        </div>
      }
    </article>);

}

/* ─── 04 · KATANA N' SAMURAI ───────────────────────────────────────── */
function KNSContribSlideshow({ images }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % images.length), 2500);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <div className="kns-slideshow">
      {images.map((src, idx) =>
      <img key={src} src={src} alt="" draggable="false"
      style={{ opacity: idx === i ? 1 : 0, transition: "opacity 0.6s ease" }} />
      )}
    </div>);

}

function KNSCase({ go }) {
  const next = PROJECTS[0];
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
  const splitNum = (n) => {
    const m = String(n).match(/^([^0-9.]*)(.+)$/);
    return m ? { prefix: m[1], value: m[2] } : { prefix: "", value: String(n) };
  };

  const phases = [
  ["01", "Merchant onboarding", "Partner Japanese-cuisine venues first, mechanics second. We onboarded 15+ stores (yakiniku, yakitori, izakaya, ramen, cafés, curry, tea) into the cultural map before any holder-facing occupation feature launched — stores needed to see a real audience before joining a token economy. Co-built the map with 串燒小次郎 (@kojiroutaipei) as anchor merchant partner."],
  ["02", "User research & community activation", "Ongoing community research, including the 4/15 town hall (里民大會) that surfaced what holders actually wanted versus what the team assumed. Activation ran through cross-NFT whitelist collaborations (Neocypher, 呢喃貓, RPF, Kaiju, Mepunk, Elysium DAO, Demi-human) and the food-scene partner network. Town-hall concerns — runway, second-wave pricing, physical utility — fed directly into the map roadmap."],
  ["03", "Occupation reward system", "Holders could claim partner shops with real-time leaderboards. Reward design favored repeat engagement over one-time hype — daily activity, contested territories, merchant-issued perks. Off-ramps (shop-wide discount drops, not just top-occupier rewards) gave casual holders a reason to stay."]];



  const contributions = [
  ["User research — topic-testing protocol", "Ran the team's formal method for deciding which topics earned action. Shaped Discord IA, town-hall agendas, and merchant onboarding scripts. Co-facilitated the 4/15 town hall on the post-launch drop.", [
  ["01", "Float a topic"],
  ["02", "Count responses"],
  ["03", "Retire if quiet"],
  ["04", "Escalate after 3 confirmations"]]],
  ["Merchant & cross-community liaison", "Partner-outreach POC. The job was translation — between Web3 jargon and what felt natural to a shop owner reading a one-pager over the counter. Grew the network across yakiniku, yakitori, izakaya, café, curry, ramen, and tea."],
  ["Social content (team output)", "Part of a campaign that shipped ~400 posts across IG, Twitter, and Discord. My pieces: bilingual EN/ZH copy for major announcements, merchant-feature templates, and the editorial-voice guidelines used across both pods."],
  ["Offline events", "Co-hosted IRL events at partner shops to make membership feel embodied. Co-planned the 2/12 Discord-stage town hall — the inflection point where concerns were addressed in public. We tracked repeat attendance, not headcount."]];


  const contribSlides = [
  "assets/kns/contrib_offline_1.jpeg",
  "assets/kns/contrib_voicechat.jpeg",
  "assets/kns/contrib_instagram.jpeg",
  "assets/kns/contrib_offline_2.jpeg",
  "assets/kns/contrib_planning.jpeg"];


  const posts = [
  "assets/kns/post_event_3.jpg",
  "assets/kns/post_event.jpeg",
  "assets/kns/post_event_2.jpg",
  "assets/kns/post_launch.jpeg",
  "assets/kns/post_ramen_collab.png",
  "assets/kns/post_launch_2.jpeg"];


  return (
    <article data-screen-label="Case: Katana">
      <div className="brick-hero">
        <div className="brick-hero-left">
          <div className="brick-eyebrow">04 · Community Strategy &amp; NFT Utility</div>
          <h1 className="brick-title brick-title-red">Katana N'<br />Samurai</h1>
          <p className="brick-subtitle">A six-month rescue mission for a 2,000-piece ukiyo-e NFT — turning the collectible into a key to Taipei's Japanese-food scene.</p>
          <div className="brick-tags">User Research  ·  Community Strategy  ·  KOL Partnerships</div>
          <div className="brick-meta">
            {[
            ["Role", "Community Strategist & Researcher"],
            ["Contributions", "I led the community-research protocol and town-hall facilitation, built the merchant-onboarding SOP, and authored the bilingual editorial guidelines — within a 6-person mod team."],
            ["Context", "Internship · TORIII / KNS · Taipei · Feb–Jul 2022"],
            ["Team", "6-person mod team — events + marketing pods"],
            ["Tools", "Discord · Twitter · IG · Notion · Google Sheets · Procreate · Adobe"]].
            map(([k, v]) =>
            <div className="brick-meta-row" key={k}>
                <span className="brick-meta-key">{k}</span>
                <span className="brick-meta-val">{v}</span>
              </div>
            )}
          </div>
        </div>
        <div className="brick-hero-right">
          <img className="brick-hero-img" src="assets/kns/hero_artworks.jpeg" alt="Katana N' Samurai ukiyo-e characters" draggable="false" style={{ objectPosition: "top center", padding: 0 }} />
        </div>
      </div>

      <div className="brick-strip">
        {[
        ["1,134", "Community members"],
        ["~400", "Posts shipped (team)"],
        ["15+", "Partner venues onboarded"]].
        map(([n, d]) => {
          const { prefix, value } = splitNum(n);
          return (
            <div className="brick-strip-cell" key={d}>
              <ScrambleNum value={value} prefix={prefix} />
              <span className="brick-strip-desc">{d}</span>
            </div>);

        })}
      </div>

      <nav className="brick-toc" aria-label="Section navigation">
        <select className="brick-toc-select" defaultValue=""
        onChange={(e) => {
          const id = e.target.value;
          if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          e.target.value = "";
        }}>
          <option value="" disabled>Jump to section</option>
          <option value="kns-brief">The Brief</option>
          <option value="kns-strategy">Strategy</option>
          <option value="kns-contribution">My Contribution</option>
          <option value="kns-map">Cultural Map</option>
          <option value="kns-takeaway">Takeaway</option>
        </select>
      </nav>

      <section className="brick-section" id="kns-brief">
        <h2 className="brick-label kns-brief-label">
          <span>The Brief</span>
          <div className="kns-brief-media">
            <img className="kns-brief-img" src="assets/kns/brief_samurai.jpeg" alt="Ukiyo-e samurai NFT artwork" draggable="false" />
            <img className="kns-brief-img" src="assets/kns/brief_sale.jpg" alt="Katana N' Samurai public sale" draggable="false" />
          </div>
        </h2>
        <div className="brick-body" style={{ paddingTop: 48 }}>
          <p className="brick-lead">KNS launched in 2021 as the world's first ukiyo-e collectible community — 2,000 first-generation pieces sold by October. By the time I joined the mod team in February 2022, the post-launch attention had collapsed: pieces trading below original price, ~6 months of runway left. This was a rescue, not a growth play.</p>
          <p>Members owned ukiyo-e art they were proud of but had no reason to engage day-to-day. The team's bet was that <b>real-world value — anchored in Japanese food culture in Taipei (ramen, yakiniku, izakaya, cafés)</b> — could give the community a second life. The cultural map at <code>yamato.katanansamurai.art</code> would let members find, review, and eventually claim partner shops — turning the membership from a collectible into a key.</p>
          <p>On a 6-person mod team I led the human layer — community research, merchant + influencer liaison, bilingual editorial — and helped prove the post-hype community could be sustained at all.</p>
        </div>
      </section>

      <section className="brick-section" id="kns-strategy">
        <h2 className="brick-label">
          Strategy
          <img className="brick-label-asset kns-phase-img" src="assets/kns/roadmap_3.jpeg" alt="Three-phase rollout roadmap" draggable="false" />
        </h2>
        <div className="brick-body" style={{ paddingTop: 48 }}>
          <div className="brick-findings">
            {phases.map(([num, h, p]) =>
            <div className="brick-finding" key={num}>
                <span className="brick-finding-num">{num}</span>
                <div>
                  <h3 className="brick-finding-title">{h}</h3>
                  <p>{p}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="brick-section" id="kns-contribution">
        <h2 className="brick-label kns-contrib-label">
          <span className="kns-contrib-heading">My Contribution</span>
          <div className="kns-contrib-media">
            <span className="brick-label-asset kns-contrib-asset"><KNSContribSlideshow images={contribSlides} /></span>
            <img className="kns-contrib-team" src="assets/kns/team_onsite.jpg" alt="The KNS mod team on-site at the partner katana studio" draggable="false" />
          </div>
        </h2>
        <div className="brick-body" style={{ paddingTop: 48 }}>
          <div className="kns-contrib-list">
            {contributions.map(([h, p, flow]) =>
            <div className="kns-contrib" key={h}>
                <h3 className="kns-contrib-title">{h}</h3>
                <p>{p}</p>
                {flow &&
              <div className="kns-flow">
                    {flow.map(([n, label], idx) =>
                <React.Fragment key={n}>
                        <div className="kns-flow-step">
                          <span className="kns-flow-num">{n}</span>
                          <span className="kns-flow-label">{label}</span>
                        </div>
                        {idx < flow.length - 1 && <span className="kns-flow-arrow">↓</span>}
                      </React.Fragment>
                )}
                    <div className="kns-flow-loop" aria-hidden="true"></div>
                  </div>
              }
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="brick-section" id="kns-map">
        <h2 className="brick-label kns-map-label">
          Cultural Map
          <div className="kns-ig-embed">
            <iframe
              src="https://www.instagram.com/p/CedxjSxJtRp/embed"
              title="Katana N' Samurai — cultural map on Instagram"
              loading="lazy"
              scrolling="no"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media">
            </iframe>
            <a className="kns-ig-link" href="https://www.instagram.com/p/CedxjSxJtRp/" target="_blank" rel="noopener noreferrer">View on Instagram ↗</a>
          </div>
        </h2>
        <div className="brick-body">
          <p>The cultural map was Phase 1's headline deliverable — a web app (<code>yamato.katanansamurai.art</code>) where holders could find, review, and eventually occupy partnered Japanese-cuisine venues across Taipei, co-built with 串燒小次郎 (@kojiroutaipei) as anchor merchant partner. I coordinated portions of the merchant onboarding pipeline, wrote launch copy and merchant-facing templates, and helped produce the launch visuals.</p>
          <img className="kns-map-banner" src="assets/kns/collab_post.jpeg" alt="KNS × Kojirou collaboration banner" draggable="false" style={{ height: "158px" }} />
          <p>The map wasn't a directory. It was where the digital layer(NFTs, social media) and the IRL layer (real shops, real owners, real seats) met — so the visual language mattered. We chose a hand-drawn cultural-map aesthetic over generic map tiles because it needed to feel like something you'd save, not a tool you'd close after one use.</p>
          <div className="kns-map-tail">
            <div className="kns-map-grid">
              <img src="assets/kns/ramenmap_0.jpeg" alt="Cultural map brand graphic" draggable="false" style={{ height: "148px", width: "148px" }} />
              <img src="assets/kns/ramenmap_3.jpeg" alt="Cultural map — partner stores" draggable="false" style={{ objectFit: "fill", width: "148px", height: "148px" }} />
            </div>
            <a className="kns-map-video" href="https://www.youtube.com/watch?v=_ObWZJ5_URM" target="_blank" rel="noopener noreferrer" aria-label="Watch cultural map walkthrough on YouTube" style={{ opacity: "1", height: "148px", width: "100%", maxWidth: "none", aspectRatio: "auto" }}>
              <img src="https://img.youtube.com/vi/_ObWZJ5_URM/mqdefault.jpg" alt="Cultural map walkthrough — YouTube" draggable="false" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span className="kns-map-video-play" aria-hidden="true">▶</span>
              <span className="kns-map-video-label">Watch on YouTube ↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="brick-section" style={{ paddingBottom: 24 }}>
        <h2 className="brick-label">Selected Posts</h2>
        <div className="brick-body">
          <p>A sample from the ~400 posts shipped across the campaign. Editorial rule: write like a regular, not an operator. Bilingual EN/ZH across IG, Twitter, and Discord.</p>
        </div>
      </section>
      <div className="brick-screens-grid brick-screens-swipe" aria-label="Selected campaign posts">
        {posts.map((src, i) =>
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
            aria-label="Hold to enlarge campaign post">
            
              <img src={src} alt={"Campaign post " + (i + 1)} draggable="false" />
            </div>
          </figure>
        )}
      </div>

      <section className="brick-section" id="kns-outcome">
        <h2 className="brick-label">Outcome</h2>
        <div className="brick-body">
          <p className="brick-statement" style={{ fontSize: "30px" }}>Survived 6 months on real-world value — not speculation.</p>
          <p>The three-phase strategy gave the KNS community competition and real-world rewards embedded in Taipei's Japanese-food scene. It kept a 2022-launch alive through the bear market without collapsing into the staking-and-raffle pattern that hollowed out most peer projects.</p>
          <p>The model — <b>scene-anchored value, merchant-first sequencing, rewards with off-ramps</b> — became a reference template for the team's later launches.</p>
        </div>
      </section>

      <section className="brick-section" id="kns-takeaway">
        <h2 className="brick-label">Takeaway</h2>
        <div className="brick-body">
          <p className="brick-statement" style={{ fontSize: "30px", textAlign: "left" }}>The work is on the perimeter, not the centre.</p>
          <p>I went in thinking the question was “what new value do we build.” That was the wrong question. The real one was “what scene are we already part of.” Value designed in isolation gets ignored. Value that slots into something people already love — a ramen shop, a regular's seat — compounds on its own.</p>
          <p>Most of the calls I argued for were tone decisions disguised as strategy decisions. Between the team's voice and a shop owner reading a one-pager over the counter. Between what members said in a survey and what they actually showed up for. Strategy work in community, it turns out, is mostly translation work.</p>
          <p>And the bigger lesson — you can't make people care from inside the product. You design the conditions where they discover it matters themselves. Partner with shops they already visit. Invite voices they already trust. The work is on the perimeter, not the centre.</p>
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
          <img src={posts[peekIdx]} alt="" draggable="false" />
        </div>
      }
    </article>);

}

Object.assign(window, { DesertCase, VRCase, KNSCase });