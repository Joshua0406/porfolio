/* Playground — Pinterest-style column masonry. Pure CSS, no JS layout calc.
   Drop images into assets/pg/ and list filenames in PG_IMAGES. */

const PG_IMAGES = [
  "1104_1.png",
  "1104_10.png",
  "1104_12.png",
  "1104_2.png",
  "1104_3.png",
  "1104_5.png",
  "1104_6.png",
  "1104_8.png",
  "1104_9.png",
  "1113_2_0000s_0010_IMG_9450.jpg",
  "1114.png",
  "BIZARRE工作區域 1-100.jpg",
  "Joshua-Lee_image12.JPG",
  "Joshua-Lee_image21.JPG",
  "Joshua-Lee_image23.jpg",
  "Joshua-Lee_image24.png",
  "Joshua-Lee_image9.JPG",
  "Joshua-Lee_img-018.jpg",
  "Joshua_0910_image3.JPG",
  "Joshua_Lee_Design_Portfolio_img-005.jpg",
  "Joshua_Lee_Design_Portfolio_img-040.jpg",
  "Joshua_Lee_Portfolio_2026_img-016.jpg",
  "Joshua_SD_final_image1.jpeg",
  "Joshua_SD_final_image22.png",
  "Joshua_SD_final_image23.png",
  "Joshua_SD_final_image3.jpeg",
  "Joshua_SD_final_image54.png",
  "LUISTEREN工作區域 1-100-2.jpg",
  "PROSOPAGNOSIA工作區域 1-100-2.jpg",
  "RGB Elk.png",
  "SUPERMARKT工作區域 1-100-2.jpg",
  "Screenshot 2024-05-02 at 10.25.29 AM.png",
  "Screenshot 2024-05-02 at 10.42.15 AM.png",
  "final presentation_img-005.jpg",
  "final_bookspreads_img-054.png",
  "final_bookspreads_img-055.jpg",
  "final_bookspreads_img-057.png",
  "final_book工作區域 1 複本 2.png",
  "final_book工作區域 1 複本 3.png",
  "jump工作區域 1 複本 4-100.jpg",
  "klizanje.jpg",
  "locate工作區域 1 複本 7-100.jpg",
  "love工作區域 1.png",
  "normal工作區域 1-100.jpg",
  "old_design_portfolio_Joshua_Lee_img-010.jpg",
  "old_design_portfolio_Joshua_Lee_img-037.png",
  "old_design_portfolio_Joshua_Lee_img-048.png",
  "old_design_portfolio_Joshua_Lee_img-087.jpg",
  "old_design_portfolio_Joshua_Lee_img-088.png",
  "old_design_portfolio_Joshua_Lee_img-100.png",
  "old_design_portfolio_Joshua_Lee_img-114.jpg",
  "old_design_portfolio_Joshua_Lee_img-133.jpg",
  "old_design_portfolio_Joshua_Lee_img-136.jpg",
  "old_design_portfolio_Joshua_Lee_img-149.png",
  "old_design_portfolio_Joshua_Lee_img-185.jpg",
  "old_design_portfolio_Joshua_Lee_img-186.jpg",
  "old_design_portfolio_Joshua_Lee_img-192.jpg",
  "old_design_portfolio_Joshua_Lee_img-193.jpg",
  "old_design_portfolio_Joshua_Lee_img-195.jpg",
  "old_design_portfolio_Joshua_Lee_img-198.jpg",
  "old_design_portfolio_Joshua_Lee_img-200.jpg",
  "old_design_portfolio_Joshua_Lee_img-204.jpg",
  "old_design_portfolio_Joshua_Lee_img-208.jpg",
  "pd report_image13.JPG",
  "pd report_image33.JPG",
  "pd report_image45.jpeg",
  "pd report_image48.JPG",
  "pd report_image8.JPG",
  "quip工作區域 1-100.jpg",
  "stardust工作區域 1 複本 12-100.jpg",
  "summary_joshua_lee_img-000.jpg",
  "tut_1.jpg",
  "tut_2.jpg",
  "tut_4.png",
  "tut_5.png",
  "week5工作區域 1-100.jpg",
  "week5工作區域 2 複本-100.jpg",
  "week5工作區域 2-100.jpg",
  "window工作區域 1 複本 11-100.jpg",
  "youth工作區域 1-100.jpg",
  "zen工作區域 1-100.jpg",
  "工作區域 2-100.jpg",
  "未命名的作品-2 2.png",
  "未命名的作品-4 2.png",
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Playground({ go }) {
  const items = React.useMemo(() => shuffle(PG_IMAGES), []);

  return (
    <div className="pg-page" data-screen-label="Playground">
      <header className="pg-head">
        <div className="pg-eyebrow">Miscellaneous · Off-cuts</div>
        <h1 className="pg-title">Playground</h1>
        <p className="pg-lead">
          A working archive of the scraps — coursework, experiments, and one-offs that never grew into a full case study.{" "}
          <span className="pg-count mono">{items.length} pieces</span>
        </p>
      </header>

      <div className="pg-mason">
        {items.map((f, i) => (
          <figure className="pg-mi" key={f}>
            <img
              src={"assets/pg/" + encodeURIComponent(f)}
              alt={"Playground — " + (i + 1)}
              draggable="false"
              loading="lazy"
            />
          </figure>
        ))}
      </div>

      <footer className="proj-footer">
        <a onClick={() => go("home")} style={{ cursor: "pointer" }}>← Home</a>
        <a onClick={() => go("about")} style={{ cursor: "pointer" }}>About →</a>
      </footer>
    </div>
  );
}

Object.assign(window, { Playground });
