/* Playground — miscellaneous, off-cut work shown as a dense, packed mosaic
   (RIT-archive style) kept in the portfolio's monochrome chrome.
   Five groups, one per body of work. Hold any image to enlarge (site peek). */

const PG_GROUPS = [
  {
    num: "01", title: "Spatial Design", note: "Interior & architecture — Year 1",
    dir: "b1",
    files: ["02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.jpg", "09.jpg", "10.png"]
  },
  {
    num: "02", title: "Graphic & Type", note: "Editorial, posters, typography",
    dir: "b2",
    files: ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg","10.jpg","11.jpg","12.png","13.png","14.png","15.png","16.jpg"]
  },
  {
    num: "03", title: "Motion & Image", note: "Animation, video, illustration",
    dir: "b3",
    files: ["01.jpg", "02.jpg", "04.jpg"]
  },
  {
    num: "04", title: "Light & Performance", note: "Installation & performance lab",
    dir: "b4", ext: "jpg",
    files: ["01","02","03","04","05","06","07","08","09","10","11","12"]
  },
  {
    num: "05", title: "Product Design", note: "Research sketches & prototypes",
    dir: "b5", ext: "jpg",
    files: ["01","02","03","04","05","06"]
  }
];

function srcFor(g, f) {
  const name = g.ext ? f + "." + g.ext : f;
  return "assets/pg/" + g.dir + "/" + name;
}

function Playground({ go }) {
  // JS masonry: size each grid row-span from the loaded image height.
  React.useEffect(() => {
    const ROW = 8, GAP = 8;
    function layoutGrid(grid) {
      grid.querySelectorAll(".pg-mi").forEach((it) => {
        const img = it.querySelector("img");
        if (!img) return;
        const h = img.getBoundingClientRect().height;
        if (!h) return;
        it.style.gridRowEnd = "span " + Math.max(1, Math.ceil((h + GAP) / (ROW + GAP)));
      });
    }
    const layoutAll = () => document.querySelectorAll(".pg-mason").forEach(layoutGrid);
    const imgs = Array.from(document.querySelectorAll(".pg-mi img"));
    const onLoad = (e) => layoutGrid(e.target.closest(".pg-mason"));
    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth) return;
      img.addEventListener("load", onLoad);
    });
    // initial passes (cover already-cached images + late fonts/layout)
    layoutAll();
    const r1 = requestAnimationFrame(layoutAll);
    const t1 = setTimeout(layoutAll, 200);
    const t2 = setTimeout(layoutAll, 800);
    let rt;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(layoutAll, 120); };
    window.addEventListener("resize", onResize);
    return () => {
      imgs.forEach((img) => img.removeEventListener("load", onLoad));
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(r1); clearTimeout(t1); clearTimeout(t2); clearTimeout(rt);
    };
  }, []);

  const total = PG_GROUPS.reduce((n, g) => n + g.files.length, 0);

  return (
    <div className="pg-page" data-screen-label="Playground">
      <header className="pg-head">
        <div className="pg-eyebrow">Miscellaneous · Off-cuts</div>
        <h1 className="pg-title">Playground</h1>
        <p className="pg-lead">A working archive of the scraps — coursework, experiments, and one-offs that never grew into a full case study. <span className="pg-count mono">{total} pieces · 5 strands</span></p>
      </header>

      {PG_GROUPS.map((g) => (
        <section className="pg-group" key={g.dir} data-screen-label={"Playground: " + g.title}>
          <div className="pg-group-head">
            <span className="pg-group-num mono">{g.num}</span>
            <h2 className="pg-group-title">{g.title}</h2>
            <span className="pg-group-note">{g.note}</span>
            <span className="pg-group-count mono">{String(g.files.length).padStart(2, "0")}</span>
          </div>
          <div className="pg-mason">
            {g.files.map((f, i) => (
              <figure className="pg-mi" key={f}>
                <img src={srcFor(g, f)} alt={g.title + " — " + (i + 1)} draggable="false" loading="eager" />
              </figure>
            ))}
          </div>
        </section>
      ))}

      <footer className="proj-footer">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}>← Home</a>
        <a onClick={() => go("about")} style={{ cursor: "pointer" }}>About →</a>
      </footer>
    </div>
  );
}

Object.assign(window, { Playground });
