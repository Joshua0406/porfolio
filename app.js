/* App shell — view router with browser URL sync.
   /          → home
   /about     → about page
   /<caseId>  → case page (brick | desertification | supermarket | kns)

   URL sync only fires in production (when <base href="/"> is in the doc).
   In the design preview iframe the base is missing, so we keep navigation
   state-only and avoid breaking relative asset paths. */
const {
  useState,
  useEffect
} = React;
const CASE_IDS = ["brick", "desertification", "supermarket", "kns"];
const ROUTING_ENABLED = typeof document !== "undefined" && !!document.querySelector('base[href="/"]');
function parseUrl() {
  if (!ROUTING_ENABLED) return {
    view: "home",
    current: "brick"
  };
  const seg = (window.location.pathname || "/").replace(/^\/+|\/+$/g, "");
  if (!seg) return {
    view: "home",
    current: "brick"
  };
  if (seg === "about") return {
    view: "about",
    current: "brick"
  };
  if (CASE_IDS.indexOf(seg) !== -1) return {
    view: "case",
    current: seg
  };
  return {
    view: "home",
    current: "brick"
  };
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
    if (!ROUTING_ENABLED) return;
    const onPop = () => setState(parseUrl());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const go = (view, current) => {
    const next = {
      view,
      current: current != null ? current : state.current
    };
    if (ROUTING_ENABLED) {
      const url = urlFor(next.view, next.current);
      if (window.location.pathname !== url) {
        try {
          window.history.pushState({}, "", url);
        } catch (_) {}
      }
    }
    setState(next);
    window.scrollTo(0, 0);
  };
  const {
    view,
    current
  } = state;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Nav, {
    view: view,
    current: current,
    go: go
  }), view === "case" && /*#__PURE__*/React.createElement(ReadingProgress, null), view === "home" && /*#__PURE__*/React.createElement(Home, {
    go: go
  }), view === "case" && current === "brick" && /*#__PURE__*/React.createElement(BrickCase, {
    go: go
  }), view === "case" && current === "desertification" && /*#__PURE__*/React.createElement(DesertCase, {
    go: go
  }), view === "case" && current === "supermarket" && /*#__PURE__*/React.createElement(VRCase, {
    go: go
  }), view === "case" && current === "kns" && /*#__PURE__*/React.createElement(KNSCase, {
    go: go
  }), view === "about" && /*#__PURE__*/React.createElement(About, {
    go: go
  }));
}
ReactDOM.createRoot(document.getElementById("app")).render(/*#__PURE__*/React.createElement(App, null));