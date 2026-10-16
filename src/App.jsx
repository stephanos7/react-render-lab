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
import SparklineMemo from "./experiments/SparklineMemo";

import WithMemoAndCallback from "./experiments/WithMemoAndCallback";
import SparklineMemoCallback from "./experiments/SparklineMemoCallback";

import WithCallbackOnly from "./experiments/WithCallbackOnly";
import CodeViewer from "./components/CodeViewer";

import basicSource from "./experiments/Basic.jsx?raw";
import sparklineBasicSource from "./experiments/SparklineBasic.jsx?raw";

import withMemoSource from "./experiments/WithMemo.jsx?raw";
import sparklineMemoSource from "./experiments/SparklineMemo.jsx?raw";

import WithMemoAndCallbackSource from "./experiments/WithMemoAndCallback.jsx?raw";
import sparklineMemoCallbackSource from "./experiments/SparklineMemoCallback.jsx?raw"; 

import WithCallbackOnlySource from "./experiments/WithCallbackOnly.jsx?raw";

import "./App.css";

const sourceByRoute = {
  "/": basicSource,
  "/sparkline-basic": sparklineBasicSource,

  "/with-memo": withMemoSource,
  "/sparkline-memo": sparklineMemoSource,

  "/with-callback-only": WithCallbackOnlySource,

  "/with-memo-and-callback": WithMemoAndCallbackSource,
  "/sparkline-memo-callback": sparklineMemoCallbackSource
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
        <NavLink to="/sparkline-memo">Sparkline Memo</NavLink>
        <NavLink to="/sparkline-memo-callback">
          Sparkline Memo + Callback
        </NavLink>
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
            <Route path="/sparkline-memo" element={<SparklineMemo />} />
            <Route
              path="/sparkline-memo-callback"
              element={<SparklineMemoCallback />}
            />
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
