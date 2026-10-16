import {
  BrowserRouter,
  NavLink,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Basic from "./experiments/Basic";
import SparklineBasic from "./experiments/SparklineBasic";

import WithMemo from "./experiments/WithMemo";
import WithMemoAndCallback from "./experiments/WithMemoAndCallback";
import WithCallbackOnly from "./experiments/WithCallbackOnly";
import CodeViewer from "./components/CodeViewer";

import basicSource from "./experiments/Basic.jsx?raw";
import sparklineBasicSource from "./experiments/SparklineBasic.jsx?raw";

import withMemoSource from "./experiments/WithMemo.jsx?raw";
import WithMemoAndCallbackSource from "./experiments/WithMemoAndCallback.jsx?raw";
import WithCallbackOnlySource from "./experiments/WithCallbackOnly.jsx?raw";

import "./App.css";

const sourceByRoute = {
  "/": basicSource,
  "/sparkline-basic": sparklineBasicSource,

  "/with-memo": withMemoSource,
  "/with-callback-only": WithCallbackOnlySource,
  "/with-memo-and-callback": WithMemoAndCallbackSource
};

function ExperimentLayout() {
  const { pathname } = useLocation();
  const code = sourceByRoute[pathname] ?? basicSource;

  return (
    <div className="app-layout">
      <nav className="navigation">
        <NavLink to="/">Basic</NavLink>
        <NavLink to="/with-memo">With Memo</NavLink>
        <NavLink to="/with-callback-only">Callback Only</NavLink>
        <NavLink to="/with-memo-and-callback">Memo+Callback</NavLink>
        <NavLink to="/sparkline-basic">Sparkline Basic</NavLink>
      </nav>

      <main className="experiment-layout">
        <div className="experiment-panel">
          <Routes>
            <Route path="/" element={<Basic />} />
            <Route path="/with-memo" element={<WithMemo />} />
            <Route path="/with-callback-only" element={<WithCallbackOnly />} />
            <Route
              path="/with-memo-and-callback"
              element={<WithMemoAndCallback />}
            />
            <Route path="/sparkline-basic" element={<SparklineBasic />} />
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
