import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Basic from "./experiments/Basic";
// import Memo from "./experiments/Memo";
// import MemoCallback from "./experiments/MemoCallback";
import CodeViewer from "./components/CodeViewer";

import basicSource from "./experiments/Basic.jsx?raw";
// import memoSource from "./experiments/Memo.jsx?raw";
// import callbackSource from "./experiments/MemoCallback.jsx?raw";

import "./App.css";

const sourceByRoute = {
  "/": basicSource,
  // "/memo": memoSource,
  // "/memo-callback": callbackSource
};

function ExperimentLayout() {
  const { pathname } = useLocation();
  const code = sourceByRoute[pathname] ?? basicSource;

  return (
    <div className="app-layout">
      <nav className="navigation">
        <NavLink to="/">Basic</NavLink>
        <NavLink to="/memo">Memo</NavLink>
        <NavLink to="/memo-callback">Memo + Callback</NavLink>
      </nav>

      <main className="experiment-layout">
        <div className="experiment-panel">
          <Routes>
            <Route path="/" element={<Basic />} />
            <Route path="/basic" element={<Basic />} />
            <Route path="/memo" element={<p>Welcome to Memo</p>} />
            <Route path="/memo-callback" element={<p>Welcome to Memo With Callback</p>} />
          </Routes>
        </div>

        <aside className="code-panel">
          <h2>Implementation</h2>
          <CodeViewer code={code} />
        </aside>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ExperimentLayout />
    </BrowserRouter>
  );
}
