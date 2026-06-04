/* Shared atoms + data for the portfolio UI kit.
   Exports to window so other babel scripts can use them. */

const PROJECTS = [
{ id: "brick", src: "assets/projects/brick_main.png", title: "Brick", tags: "UX Research  ·  UI Design  ·  Usability Testing" },
{ id: "desertification", src: "assets/projects/desertification_main.png", title: "Into the Desert", tags: "Content Strategy  ·  Campaign Design  ·  Visual Communication" },
{ id: "supermarket", src: "assets/projects/supermarket_main.png", title: "VR Supermarket", tags: "VR Research  ·  Behavioural Science  ·  Statistical Analysis" },
{ id: "kns", src: "assets/projects/kns_main.png", title: "Katana N' Samurai", tags: "Visual Design  ·  Branding  ·  Community Management" }];



/* Runtime-constructed email — keeps the literal string out of HTML/JS source
   so basic scrapers don't grab it. */
const CONTACT_USER = "plsxou46";
const CONTACT_DOM = "gmail" + "." + "com";
const CONTACT = CONTACT_USER + "@" + CONTACT_DOM;
Object.assign(window, { CONTACT });
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
        <a href={"mailto:" + CONTACT}>CONTACT</a>
      </nav>);

  }
  if (view === "about") {
    return (
      <nav className="nav">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}>← HOME</a>
        <a href={"mailto:" + CONTACT}>CONTACT</a>
      </nav>);

  }
  // case study
  const idx = PROJECTS.findIndex((p) => p.id === current) + 1;
  return (
    <nav className="nav transparent">
      <a className={"nav-home" + (hidden ? " hidden" : "")} onClick={() => go("home")} style={{ cursor: "pointer" }}>← Home</a>
      <div className="nav-projects">
        {PROJECTS.map((p) => {
          const isActive = p.id === current;
          return (
            <a
              key={p.id}
              className={"nav-proj-link" + (isActive ? " active" : "")}
              onClick={isActive ? undefined : () => go("case", p.id)}
              style={isActive ? { pointerEvents: "none", cursor: "default" } : undefined}>
              <img src={p.src} alt={p.title} draggable="false" />
            </a>);

        })}
      </div>
      <span className="proj-index mono">{String(idx).padStart(2, "0")} / 04</span>
    </nav>);

}

/* Stat numeral that scrambles → settles when it enters the viewport. */
function ScrambleNum({ value, prefix = "" }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const CHARS = "0123456789";
    const isDecimal = value.includes(".");
    const decimals = isDecimal ? value.split(".")[1].length : 0;
    const targetNum = parseFloat(value.replace(/,/g, "")) || 0;
    const hasComma = value.includes(",");
    let started = false;
    const run = () => {
      const duration = 1500,SPLIT = 0.4,start = performance.now();
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
        if (linear < 1) requestAnimationFrame(frame);else el.textContent = prefix + value;
      };
      requestAnimationFrame(frame);
    };
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {started = true;run();obs.disconnect();}
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, prefix]);
  return <span ref={ref} className="stat-num">{prefix + value}</span>;
}

/* Thin reading-progress bar — pinned to top of viewport, fills as you scroll.
   Used on case pages only. */
function ReadingProgress() {
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    const measure = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.min(100, Math.max(0, window.scrollY / max * 100)) : 0);
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);
  return (
    <div className="reading-progress" aria-hidden="true">
      <div className="reading-progress-bar" style={{ width: pct + "%" }}></div>
    </div>);

}

/* ─── Outro CTA — scroll-scrubbed "Interested? Let's talk!" strip ───────
   Head walks in from the left as the strip scrolls up into view; then
   "Interested?" and the black "Let's talk!" button appear in sequence.
   Scrubbed both ways — scrolling up slides all three back off to the left. */
function OutroCTA() {
  const ref = React.useRef(null);
  const [atBottom, setAtBottom] = React.useState(false);
  const [arrived, setArrived] = React.useState(false);
  React.useEffect(() => { if (!atBottom) setArrived(false); }, [atBottom]);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = null;
    const compute = () => {
      raf = null;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const docH = document.documentElement.scrollHeight;
      const distFromBottom = docH - (window.innerHeight + scrollY);
      // Hysteresis: switch ON within 80px of the bottom, only switch OFF once
      // clearly scrolled away (>240px). Stops Safari's toolbar resize jitter
      // from re-triggering the animation mid-walk.
      setAtBottom((prev) => {
        if (distFromBottom <= 80) return true;
        if (distFromBottom > 240) return false;
        return prev;
      });
    };
    const onScroll = () => {if (raf == null) raf = requestAnimationFrame(compute);};
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={"outro-cta" + (atBottom ? " is-in" : "")} ref={ref} aria-label="Get in touch">
      <div className="outro-group">
        <span className="outro-interested">Interested?</span>
        <a className="outro-talk" href={"mailto:" + CONTACT}>Let&apos;s talk →</a>
        <div
          className={"outro-head" + (arrived ? " arrived" : "")}
          aria-hidden="true"
          style={atBottom
            ? { transform: "translateX(0)", transition: "transform 4s linear 0.5s" }
            : { transform: "translateX(-130vw)", transition: "transform 1s linear" }}
          onTransitionEnd={() => { setArrived(atBottom); }}></div>
      </div>
    </div>);

}

Object.assign(window, { PROJECTS, Nav, ScrambleNum, ReadingProgress, OutroCTA });

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
  "a", // any linked image should navigate, not peek (video, thumbnails)
  ".hero-proj", // home 4-up project thumbnails
  ".nav-proj-link", // nav thumbnail switcher
  ".proj-footer-next", // footer next-project thumbnail
  ".proj-hero-obj", // case hero object metaphor
  ".brick-title-logo", // brick wordmark image
  ".brick-screen", // Selected-Posts gallery (self-managed peek)
  ".vr-stimulus-img", ".vr-cond-img", // VR images (self-managed peek)
  ".brick-peek"]. // the overlay itself
  join(",");
  window.__peekExclude = EXCLUDE;
  window.__isPeekable = function (img) {
    return img && img.tagName === "IMG" && !img.closest(EXCLUDE);
  };

  let host = null,imgEl = null,hideTimer = 0;

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
    // On touch devices, let the OS handle long-press (save image / share)
    // instead of intercepting with the peek overlay.
    if (e.pointerType === "touch") return;
    if (!e.target || !e.target.closest) return;
    const img = e.target.closest("img");
    if (!window.__isPeekable(img)) return;
    const src = img.currentSrc || img.getAttribute("src");
    if (!src) return;
    try {img.setPointerCapture(e.pointerId);} catch (_) {}
    show(src);
    e.preventDefault();
  });
  document.addEventListener("pointerup", hide);
  document.addEventListener("pointercancel", hide);

  // Keyboard: focus a peekable img → Enter/Space holds the overlay open.
  let keyDown = false;
  document.addEventListener("keydown", (e) => {
    if (e.repeat) return;
    if (e.key !== "Enter" && e.key !== " ") return;
    const img = document.activeElement;
    if (!window.__isPeekable(img)) return;
    const src = img.currentSrc || img.getAttribute("src");
    if (!src) return;
    keyDown = true;
    show(src);
    e.preventDefault();
  });
  document.addEventListener("keyup", (e) => {
    if (!keyDown) return;
    if (e.key !== "Enter" && e.key !== " " && e.key !== "Escape") return;
    keyDown = false;
    hide();
  });
})();

/* ─── Auto lazy-load + async decode for non-thumbnail images ─────────── */
(function initLazyImgs() {
  if (window.__lazyImgsInit) return;
  window.__lazyImgsInit = true;
  const SKIP = ".hero-proj img, .nav-proj-link img, .proj-footer-next img";
  function tag(img) {
    if (img.dataset.lazyDone) return;
    img.dataset.lazyDone = "1";
    if (img.matches(SKIP)) return;
    if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
    if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
    // Make peekable images keyboard-focusable (Enter/Space holds enlarge).
    if (window.__isPeekable && window.__isPeekable(img)) {
      if (!img.hasAttribute("tabindex")) img.setAttribute("tabindex", "0");
      if (!img.hasAttribute("role")) img.setAttribute("role", "button");
      if (!img.hasAttribute("aria-label")) {
        const alt = img.getAttribute("alt") || "image";
        img.setAttribute("aria-label", "Hold to enlarge: " + alt);
      }
    }
  }
  function sweep(root) {
    (root.querySelectorAll ? root.querySelectorAll("img") : []).forEach(tag);
  }
  sweep(document);
  new MutationObserver((muts) => {
    for (const m of muts) {
      for (const n of m.addedNodes) {
        if (n.nodeType !== 1) continue;
        if (n.tagName === "IMG") tag(n);else
        sweep(n);
      }
    }
  }).observe(document.body, { childList: true, subtree: true });
})();