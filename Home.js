function Home({ go }) {
  const h1Ref = React.useRef(null);
  const imessageRef = React.useRef(null);
  const projectInfoRef = React.useRef(null);
  const headRef = React.useRef(null);
  const [hovered, setHovered] = React.useState(null);
  React.useEffect(() => {
    const head = headRef.current;
    if (!head) return;
    let raf;
    let dir = Math.random() < 0.5 ? 1 : -1;
    let x = dir > 0 ? -0.16 : 1;
    head.style.setProperty("--flip", dir === -1 ? "-1" : "1");
    let mode = "move";
    let modeUntil = performance.now() + 1500 + Math.random() * 5500;
    let last = performance.now();
    const speed = 0.11;
    function tick(now) {
      const dt = (now - last) / 1e3;
      last = now;
      if (mode === "move") {
        x += dir * speed * dt;
        if (dir > 0 && x > 1) x = -0.16;
        else if (dir < 0 && x < -0.16) x = 1;
        if (now >= modeUntil) {
          mode = "pause";
          modeUntil = now + 500 + Math.random() * 1500;
        }
      } else {
        if (now >= modeUntil) {
          mode = "move";
          dir = -dir;
          head.style.setProperty("--flip", dir === -1 ? "-1" : "1");
          modeUntil = now + 1500 + Math.random() * 5500;
        }
      }
      head.style.transform = `translateX(${x * 100}vw) scaleX(var(--flip, 1))`;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  React.useEffect(() => {
    const h1 = h1Ref.current;
    if (!h1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const chars = Array.from(h1.querySelectorAll(".char"));
    const n = chars.length;
    const pos = new Array(n).fill(0), vel = new Array(n).fill(0);
    let mouseX = -9999, mouseY = -9999, raf;
    function tick() {
      const r = h1.getBoundingClientRect();
      const rects = chars.map((c) => c.getBoundingClientRect());
      const near = Math.abs(mouseY - (r.top + r.height / 2)) < 160;
      for (let i = 0; i < n; i++) {
        let force = -0.1 * pos[i];
        if (near) {
          const cx = rects[i].left + rects[i].width / 2;
          const dx = cx - mouseX, dist = Math.abs(dx), radius = 140;
          if (dist < radius) {
            const s = 1 - dist / radius;
            force += Math.sign(dx) * s * s * 22;
          }
        }
        for (let j = 0; j < n; j++) {
          if (i === j) continue;
          const ci = rects[i].left + rects[i].width / 2;
          const cj = rects[j].left + rects[j].width / 2;
          const dd = ci - cj, minGap = (rects[i].width + rects[j].width) / 2 + 1;
          if (Math.abs(dd) < minGap) force += Math.sign(dd || 1) * (minGap - Math.abs(dd)) * 0.5;
        }
        vel[i] = Math.max(-50, Math.min(50, (vel[i] + force) * 0.75));
        pos[i] += vel[i];
        chars[i].style.transform = `translateX(${pos[i].toFixed(2)}px)`;
      }
      raf = requestAnimationFrame(tick);
    }
    const mm = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const ml = () => {
      mouseX = -9999;
      mouseY = -9999;
    };
    window.addEventListener("mousemove", mm);
    document.documentElement.addEventListener("mouseleave", ml);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", mm);
      document.documentElement.removeEventListener("mouseleave", ml);
      cancelAnimationFrame(raf);
    };
  }, []);
  return /* @__PURE__ */ React.createElement("section", { className: "hero", "data-screen-label": "Home" }, /* @__PURE__ */ React.createElement("div", { className: "hero-title" }, /* @__PURE__ */ React.createElement("div", { className: "head-track", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("div", { className: "head-img", ref: headRef })), /* @__PURE__ */ React.createElement("h1", { ref: h1Ref }, "Joshua Lee".split("").map(
    (ch, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "char" }, ch === " " ? "\xA0" : ch)
  ))), /* @__PURE__ */ React.createElement("div", { className: "hero-bio-wrap" }, /* @__PURE__ */ React.createElement("ul", { className: "imessage", ref: imessageRef }, /* @__PURE__ */ React.createElement("li", null, "Hi! I'm Joshua \u2014 a UX researcher and visual designer."), /* @__PURE__ */ React.createElement("li", null, "I study Communication Science at the University of Twente."), /* @__PURE__ */ React.createElement("li", null, "I design with reason. I execute with craft.")), /* @__PURE__ */ React.createElement("div", { className: "project-info", ref: projectInfoRef, style: { opacity: hovered ? 1 : 0 } }, /* @__PURE__ */ React.createElement("div", { className: "project-info-title" }, hovered?.title ?? ""), /* @__PURE__ */ React.createElement("div", { className: "project-info-tags" }, hovered?.tags ?? ""))), /* @__PURE__ */ React.createElement("div", { className: "hero-grid" }, PROJECTS.map(
    (p, i) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: p.id,
        className: "hero-proj",
        href: "/" + p.id,
        onMouseEnter: () => setHovered(p),
        onMouseLeave: () => setHovered(null),
        onFocus: () => setHovered(p),
        onBlur: () => setHovered(null),
        onClick: (e) => {
          e.preventDefault();
          go("case", p.id);
        }
      },
      /* @__PURE__ */ React.createElement("div", { className: "img-wrap" }, /* @__PURE__ */ React.createElement("img", { src: p.src, alt: p.title, draggable: "false" })),
      /* @__PURE__ */ React.createElement("span", { className: "hero-proj-num mono" }, "(", i + 1, ")"),
      /* @__PURE__ */ React.createElement("span", { className: "hero-proj-label", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("span", { className: "hero-proj-label-title" }, p.title), /* @__PURE__ */ React.createElement("span", { className: "hero-proj-label-tags" }, p.tags)),
      /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, p.title, " \u2014 ", p.tags)
    )
  )), /* @__PURE__ */ React.createElement("footer", { className: "site-footer" }, /* @__PURE__ */ React.createElement("div", { className: "footer-contact" }, /* @__PURE__ */ React.createElement("span", { className: "footer-available" }, "Available for internship \u2014 Aug 2026")), /* @__PURE__ */ React.createElement("a", { className: "small", href: "https://www.utwente.nl/en/education/bachelor/programmes/communication-science/", target: "_blank", rel: "noopener noreferrer" }, "BSc Communication Science \xA0\xB7\xA0 University of Twente")));
}
Object.assign(window, { Home });
