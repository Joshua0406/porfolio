/* App shell — view router with browser URL sync.
   /          → home
   /about     → about page
   /<caseId>  → case page (brick | desertification | supermarket | kns) */
const { useState, useEffect } = React;

const CASE_IDS = ["brick", "desertification", "supermarket", "kns"];

function parseUrl() {
  const seg = (window.location.pathname || "/").replace(/^\/+|\/+$/g, "");
  if (!seg) return { view: "home", current: "brick" };
  if (seg === "about") return { view: "about", current: "brick" };
  if (CASE_IDS.indexOf(seg) !== -1) return { view: "case", current: seg };
  return { view: "home", current: "brick" };
}

function urlFor(view, current) {
  if (view === "home") return "/";
  if (view === "about") return "/about";
  if (view === "case") return "/" + current;
  return "/";
}

function App() {
  const [state, setState] = useState(parseUrl);

  useEffect(() => {
    const onPop = () => setState(parseUrl());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const go = (view, current) => {
    const next = { view, current: current != null ? current : state.current };
    const url = urlFor(next.view, next.current);
    if (window.location.pathname !== url) {
      window.history.pushState({}, "", url);
    }
    setState(next);
    window.scrollTo(0, 0);
  };

  const { view, current } = state;
  return (
    <React.Fragment>
      <Nav view={view} current={current} go={go} />
      {view === "case" && <ReadingProgress />}
      {view === "home" && <Home go={go} />}
      {view === "case" && current === "brick" && <BrickCase go={go} />}
      {view === "case" && current === "desertification" && <DesertCase go={go} />}
      {view === "case" && current === "supermarket" && <VRCase go={go} />}
      {view === "case" && current === "kns" && <KNSCase go={go} />}
      {view === "about" && <About go={go} />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
