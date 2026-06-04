/* Home — animated JOSHUA LEE title (cursor repulsion), iMessage intro,
   4-up project grid with hover project-info readout. */

function Home({ go }) {
  const h1Ref = React.useRef(null);
  const imessageRef = React.useRef(null);
  const projectInfoRef = React.useRef(null);
  const [hovered, setHovered] = React.useState(null);

  React.useEffect(() => {
    const h1 = h1Ref.current;
    if (!h1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars = Array.from(h1.querySelectorAll(".char"));
    const n = chars.length;
    const pos = new Array(n).fill(0),vel = new Array(n).fill(0);
    let mouseX = -9999,mouseY = -9999,raf;

    function tick() {
      const r = h1.getBoundingClientRect();
      const rects = chars.map((c) => c.getBoundingClientRect());
      const near = Math.abs(mouseY - (r.top + r.height / 2)) < 160;
      for (let i = 0; i < n; i++) {
        let force = -0.1 * pos[i];
        if (near) {
          const cx = rects[i].left + rects[i].width / 2;
          const dx = cx - mouseX,dist = Math.abs(dx),radius = 140;
          if (dist < radius) {const s = 1 - dist / radius;force += Math.sign(dx) * s * s * 22;}
        }
        for (let j = 0; j < n; j++) {
          if (i === j) continue;
          const ci = rects[i].left + rects[i].width / 2;
          const cj = rects[j].left + rects[j].width / 2;
          const dd = ci - cj,minGap = (rects[i].width + rects[j].width) / 2 + 1;
          if (Math.abs(dd) < minGap) force += Math.sign(dd || 1) * (minGap - Math.abs(dd)) * 0.5;
        }
        vel[i] = Math.max(-50, Math.min(50, (vel[i] + force) * 0.75));
        pos[i] += vel[i];
        chars[i].style.transform = `translateX(${pos[i].toFixed(2)}px)`;
      }
      raf = requestAnimationFrame(tick);
    }
    const mm = (e) => {mouseX = e.clientX;mouseY = e.clientY;};
    const ml = () => {mouseX = -9999;mouseY = -9999;};
    window.addEventListener("mousemove", mm);
    document.documentElement.addEventListener("mouseleave", ml);
    raf = requestAnimationFrame(tick);
    return () => {window.removeEventListener("mousemove", mm);document.documentElement.removeEventListener("mouseleave", ml);cancelAnimationFrame(raf);};
  }, []);

  return (
    <section className="hero" data-screen-label="Home">
      <h1 ref={h1Ref}>
        {"Joshua Lee".split("").map((ch, i) =>
        <span key={i} className="char">{ch === " " ? "\u00A0" : ch}</span>
        )}
      </h1>

      <div className="hero-bio-wrap">
        <ul className="imessage" ref={imessageRef}>
          <li>Hi! I&apos;m Joshua — a UX researcher and visual designer.</li>
          <li>I study Communication Science at the University of Twente.</li>
          <li>I design with reason. I execute with craft.</li>
        </ul>
        <div className="project-info" ref={projectInfoRef} style={{ opacity: hovered ? 1 : 0 }}>
          <div className="project-info-title">{hovered?.title ?? ""}</div>
          <div className="project-info-tags">{hovered?.tags ?? ""}</div>
        </div>
      </div>

      <div className="hero-grid">
        {PROJECTS.map((p, i) =>
        <a key={p.id} className="hero-proj"
        onMouseEnter={() => setHovered(p)} onMouseLeave={() => setHovered(null)}
        onClick={() => go("case", p.id)}>
            <div className="img-wrap"><img src={p.src} alt={p.title} /></div>
            <span className="hero-proj-num mono">({i + 1})</span>
          </a>
        )}
      </div>

      <footer className="site-footer">
        <div className="footer-contact">
          <span className="footer-available">Available for internship — Aug 2026</span>
          <a href={"mailto:" + CONTACT}>{CONTACT}</a>
        </div>
        <a className="small" href="https://www.utwente.nl/en/education/bachelor/programmes/communication-science/" target="_blank" rel="noopener noreferrer">BSc Communication Science &nbsp;·&nbsp; University of Twente</a>
      </footer>
    </section>);

}

Object.assign(window, { Home });