const PG_IMAGES = [
  "1104_1.webp",
  "1104_10.webp",
  "1104_12.webp",
  "1104_2.webp",
  "1104_3.webp",
  "1104_5.webp",
  "1104_6.webp",
  "1104_8.webp",
  "1104_9.webp",
  "1113_2_0000s_0010_IMG_9450.webp",
  "1114.webp",
  "BIZARRE\u5DE5\u4F5C\u5340\u57DF 1-100.webp",
  "Joshua-Lee_image12.webp",
  "Joshua-Lee_image21.webp",
  "Joshua-Lee_image23.webp",
  "Joshua-Lee_image24.webp",
  "Joshua-Lee_image9.webp",
  "Joshua-Lee_img-018.webp",
  "Joshua_0910_image3.webp",
  "Joshua_Lee_Design_Portfolio_img-005.webp",
  "Joshua_Lee_Design_Portfolio_img-040.webp",
  "Joshua_Lee_Portfolio_2026_img-016.webp",
  "Joshua_SD_final_image1.webp",
  "Joshua_SD_final_image22.webp",
  "Joshua_SD_final_image23.webp",
  "Joshua_SD_final_image3.webp",
  "Joshua_SD_final_image54.webp",
  "LUISTEREN\u5DE5\u4F5C\u5340\u57DF 1-100-2.webp",
  "PROSOPAGNOSIA\u5DE5\u4F5C\u5340\u57DF 1-100-2.webp",
  "RGB Elk.webp",
  "SUPERMARKT\u5DE5\u4F5C\u5340\u57DF 1-100-2.webp",
  "Screenshot 2024-05-02 at 10.25.29 AM.webp",
  "Screenshot 2024-05-02 at 10.42.15 AM.webp",
  "final presentation_img-005.webp",
  "final_bookspreads_img-054.webp",
  "final_bookspreads_img-055.webp",
  "final_bookspreads_img-057.webp",
  "final_book\u5DE5\u4F5C\u5340\u57DF 1 \u8907\u672C 2.webp",
  "final_book\u5DE5\u4F5C\u5340\u57DF 1 \u8907\u672C 3.webp",
  "jump\u5DE5\u4F5C\u5340\u57DF 1 \u8907\u672C 4-100.webp",
  "klizanje.webp",
  "locate\u5DE5\u4F5C\u5340\u57DF 1 \u8907\u672C 7-100.webp",
  "love\u5DE5\u4F5C\u5340\u57DF 1.webp",
  "normal\u5DE5\u4F5C\u5340\u57DF 1-100.webp",
  "old_design_portfolio_Joshua_Lee_img-010.webp",
  "old_design_portfolio_Joshua_Lee_img-037.webp",
  "old_design_portfolio_Joshua_Lee_img-048.webp",
  "old_design_portfolio_Joshua_Lee_img-087.webp",
  "old_design_portfolio_Joshua_Lee_img-088.webp",
  "old_design_portfolio_Joshua_Lee_img-100.webp",
  "old_design_portfolio_Joshua_Lee_img-114.webp",
  "old_design_portfolio_Joshua_Lee_img-133.webp",
  "old_design_portfolio_Joshua_Lee_img-136.webp",
  "old_design_portfolio_Joshua_Lee_img-149.webp",
  "old_design_portfolio_Joshua_Lee_img-185.webp",
  "old_design_portfolio_Joshua_Lee_img-186.webp",
  "old_design_portfolio_Joshua_Lee_img-192.webp",
  "old_design_portfolio_Joshua_Lee_img-193.webp",
  "old_design_portfolio_Joshua_Lee_img-195.webp",
  "old_design_portfolio_Joshua_Lee_img-198.webp",
  "old_design_portfolio_Joshua_Lee_img-200.webp",
  "old_design_portfolio_Joshua_Lee_img-204.webp",
  "old_design_portfolio_Joshua_Lee_img-208.webp",
  "pd report_image13.webp",
  "pd report_image33.webp",
  "pd report_image45.webp",
  "pd report_image48.webp",
  "pd report_image8.webp",
  "quip\u5DE5\u4F5C\u5340\u57DF 1-100.webp",
  "stardust\u5DE5\u4F5C\u5340\u57DF 1 \u8907\u672C 12-100.webp",
  "summary_joshua_lee_img-000.webp",
  "tut_1.webp",
  "tut_2.webp",
  "tut_4.webp",
  "tut_5.webp",
  "week5\u5DE5\u4F5C\u5340\u57DF 1-100.webp",
  "week5\u5DE5\u4F5C\u5340\u57DF 2 \u8907\u672C-100.webp",
  "week5\u5DE5\u4F5C\u5340\u57DF 2-100.webp",
  "window\u5DE5\u4F5C\u5340\u57DF 1 \u8907\u672C 11-100.webp",
  "youth\u5DE5\u4F5C\u5340\u57DF 1-100.webp",
  "zen\u5DE5\u4F5C\u5340\u57DF 1-100.webp",
  "\u5DE5\u4F5C\u5340\u57DF 2-100.webp",
  "\u672A\u547D\u540D\u7684\u4F5C\u54C1-2 2.webp",
  "\u672A\u547D\u540D\u7684\u4F5C\u54C1-4 2.webp"
];
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function Strip({ images, dir, paused, onEnter, onLeave }) {
  const loop = [...images, ...images];
  return /* @__PURE__ */ React.createElement("div", { className: "pg-strip pg-strip--" + dir }, /* @__PURE__ */ React.createElement("div", { className: "pg-track", style: { animationPlayState: paused ? "paused" : "running" } }, loop.map((f, i) => /* @__PURE__ */ React.createElement(
    "figure",
    {
      className: "pg-strip-item",
      key: f + i,
      onMouseEnter: () => onEnter("assets/pg/" + encodeURIComponent(f)),
      onMouseLeave: onLeave
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "assets/pg/" + encodeURIComponent(f),
        alt: "",
        draggable: "false",
        loading: "eager",
        onError: (e) => {
          e.target.closest(".pg-strip-item").style.display = "none";
        }
      }
    )
  ))));
}
function Playground({ go }) {
  const [paused, setPaused] = React.useState(false);
  const [zoomed, setZoomed] = React.useState(null);
  const timer = React.useRef(null);
  const { top, bottom } = React.useMemo(() => {
    const s = shuffle(PG_IMAGES);
    const half = Math.ceil(s.length / 2);
    return { top: s.slice(0, half), bottom: s.slice(half) };
  }, []);
  const onEnter = (src) => {
    clearTimeout(timer.current);
    setPaused(true);
    setZoomed(src);
  };
  const onLeave = () => {
    timer.current = setTimeout(() => {
      setPaused(false);
      setZoomed(null);
    }, 120);
  };
  const cancelLeave = () => clearTimeout(timer.current);
  return /* @__PURE__ */ React.createElement("div", { className: "pg-marquee-page", "data-screen-label": "Playground" }, /* @__PURE__ */ React.createElement("header", { className: "pg-marquee-head" }, /* @__PURE__ */ React.createElement("div", { className: "pg-eyebrow" }, "Miscellaneous \xB7 Off-cuts"), /* @__PURE__ */ React.createElement("h1", { className: "pg-title" }, "Playground")), /* @__PURE__ */ React.createElement(Strip, { images: top, dir: "top", paused, onEnter, onLeave }), /* @__PURE__ */ React.createElement("div", { className: "pg-marquee-center" }), /* @__PURE__ */ React.createElement(Strip, { images: bottom, dir: "bottom", paused, onEnter, onLeave }), /* @__PURE__ */ React.createElement("footer", { className: "proj-footer" }, /* @__PURE__ */ React.createElement("a", { onClick: () => go("home"), style: { cursor: "pointer" } }, "\u2190 Home"), /* @__PURE__ */ React.createElement("a", { onClick: () => go("about"), style: { cursor: "pointer" } }, "About \u2192")), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "pg-lightbox" + (zoomed ? " active" : ""),
      onMouseEnter: cancelLeave,
      onMouseLeave: onLeave
    },
    zoomed && /* @__PURE__ */ React.createElement("img", { src: zoomed, alt: "", draggable: "false" })
  ));
}
Object.assign(window, { Playground });
