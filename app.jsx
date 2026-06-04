/* App shell — view router (home / case / about). */
const { useState } = React;

function App() {
  const [state, setState] = useState({ view: "home", current: "brick" });
  const go = (view, current) => {
    setState(s => ({ view, current: current ?? s.current }));
    window.scrollTo(0, 0);
  };
  const { view, current } = state;
  return (
    <React.Fragment>
      <Nav view={view} current={current} go={go} />
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
