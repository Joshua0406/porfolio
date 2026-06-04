/* Shared atoms + data for the portfolio UI kit.
   Exports to window so other babel scripts can use them. */

const PROJECTS = [
  { id: "brick",          src: "assets/projects/brick_main.png",          title: "Brick"     ,         tags: "UX Research  ·  UI Design  ·  Usability Testing" },
  { id: "desertification", src: "assets/projects/desertification_main.png", title: "Into the Desert",   tags: "Content Strategy  ·  Campaign Design  ·  Visual Communication" },
  { id: "supermarket",    src: "assets/projects/supermarket_main.png",    title: "VR Supermarket",    tags: "VR Research  ·  Behavioural Science  ·  Statistical Analysis" },
  { id: "kns",            src: "assets/projects/kns_main.png",            title: "Katana N' Samurai", tags: "Visual Design  ·  Branding  ·  Community Management" },
];

/* Fixed nav. On home: solid white, "ME" + "CONTACT".
   On a case study: transparent, ← Home + thumbnail switcher + index. */
function Nav({ view, current, go }) {
  const [hidden, setHidden] = React.useState(false);
  React.useEffect(() => {
    setHidden(false);
    if (view !== "case") return;
    const footer = document.querySelector(".proj-footer");
    if (!footer) return;
    const io = new IntersectionObserver(
      (entries) => setHidden(entries[0].isIntersecting),
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, [current, view]);
  if (view === "home") {
    return (
      <nav className="nav">
        <a onClick={() => go("about")} style={{ cursor: "pointer" }}>ME</a>
        <a href="mailto:joshua040633920175@gmail.com">CONTACT</a>
      </nav>
    );
  }
  if (view === "about") {
    return (
      <nav className="nav">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}>← HOME</a>
        <a href="mailto:joshua040633920175@gmail.com">CONTACT</a>
      </nav>
    );
  }
  // case study
  const idx = PROJECTS.findIndex(p => p.id === current) + 1;
  return (
    <nav className="nav transparent">
      <a className={"nav-home" + (hidden ? " hidden" : "")} onClick={() => go("home")} style={{ cursor: "pointer" }}>← Home</a>
      <div className="nav-projects">
        {PROJECTS.map(p => {
          const isActive = p.id === current;
          return (
            <a
              key={p.id}
              className={"nav-proj-link" + (isActive ? " active" : "")}
              onClick={isActive ? undefined : () => go("case", p.id)}
              style={isActive ? { pointerEvents: "none", cursor: "default" } : undefined}>
              <img src={p.src} alt={p.title} draggable="false" />
            </a>
          );
        })}
      </div>
      <span className="proj-index mono">{String(idx).padStart(2, "0")} / 04</span>
    </nav>
  );
}

/* Stat numeral that scrambles → settles when it enters the viewport. */
function ScrambleNum({ value, prefix = "" }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = prefix + value; return; }
    const CHARS = "0123456789";
    const isDecimal = value.includes(".");
    const decimals = isDecimal ? value.split(".")[1].length : 0;
    const targetNum = parseFloat(value.replace(/,/g, "")) || 0;
    const hasComma = value.includes(",");
    let started = false;
    const run = () => {
      const duration = 1500, SPLIT = 0.4, start = performance.now();
      const frame = (now) => {
        const linear = Math.min((now - start) / duration, 1);
        let display;
        if (linear < SPLIT) {
          display = value.replace(/[0-9]/g, () => CHARS[Math.floor(Math.random() * 10)]);
        } else {
          const t = (linear - SPLIT) / (1 - SPLIT);
          const eased = 1 - Math.pow(1 - t, 5);
          const cur = targetNum * eased;
          display = isDecimal ? cur.toFixed(decimals) : Math.round(cur).toString();
          if (hasComma) display = Number(display).toLocaleString("en-US");
        }
        el.textContent = prefix + display;
        if (linear < 1) requestAnimationFrame(frame); else el.textContent = prefix + value;
      };
      requestAnimationFrame(frame);
    };
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) { started = true; run(); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, prefix]);
  return <span ref={ref} className="stat-num">{prefix + value}</span>;
}

Object.assign(window, { PROJECTS, Nav, ScrambleNum });

/* ─── Global hold-to-enlarge ("peek") ──────────────────────────────────
   Press and hold ANY content image to pop it up enlarged; release to dismiss.
   Mirrors the Selected-Posts gallery behaviour, applied site-wide.
   Excluded: project-representative thumbnails (home grid, nav switcher,
   footer next-project, case hero object, wordmark) and elements that
   already manage their own peek (gallery / VR stimulus + condition). */
(function initGlobalPeek() {
  if (window.__peekInit) return;
  window.__peekInit = true;

  const EXCLUDE = [
  "a",                   // any linked image should navigate, not peek (video, thumbnails)
  ".hero-proj",          // home 4-up project thumbnails
  ".nav-proj-link",      // nav thumbnail switcher
  ".proj-footer-next",   // footer next-project thumbnail
  ".proj-hero-obj",      // case hero object metaphor
  ".brick-title-logo",   // brick wordmark image
  ".brick-screen",       // Selected-Posts gallery (self-managed peek)
  ".vr-stimulus-img", ".vr-cond-img", // VR images (self-managed peek)
  ".brick-peek"].         // the overlay itself
  join(",");

  let host = null, imgEl = null, hideTimer = 0;

  function ensure() {
    if (host) return;
    host = document.createElement("div");
    host.className = "brick-peek brick-peek-closed";
    host.setAttribute("aria-hidden", "true");
    imgEl = document.createElement("img");
    imgEl.draggable = false;
    imgEl.alt = "";
    host.appendChild(imgEl);
    document.body.appendChild(host);
  }
  function show(src) {
    ensure();
    clearTimeout(hideTimer);
    imgEl.src = src;
    host.className = "brick-peek brick-peek-entering";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (host) host.className = "brick-peek brick-peek-open";
    }));
  }
  function hide() {
    if (!host || host.className.indexOf("brick-peek-closed") !== -1) return;
    host.className = "brick-peek brick-peek-exiting";
    hideTimer = setTimeout(() => {
      if (host) host.className = "brick-peek brick-peek-closed";
    }, 260);
  }

  document.addEventListener("pointerdown", (e) => {
    if (!e.target || !e.target.closest) return;
    const img = e.target.closest("img");
    if (!img || img.closest(EXCLUDE)) return;
    const src = img.currentSrc || img.getAttribute("src");
    if (!src) return;
    try {img.setPointerCapture(e.pointerId);} catch (_) {}
    show(src);
    e.preventDefault();
  });
  document.addEventListener("pointerup", hide);
  document.addEventListener("pointercancel", hide);
})();
