import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import Basic from "./experiments/Basic";
// import Memo from "./experiments/Memo";
// import MemoCallback from "./experiments/MemoCallback";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
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
              <Route path="/memo" element={<p>hello memo</p>} />
              <Route path="/memo-callback" element={<p>hello memo and callback</p>} />
            </Routes>
          </div>

          <aside className="code-panel">
            <h2>Implementation</h2>
            <p>Source code will appear here.</p>
          </aside>
        </main>
      </div>
    </BrowserRouter>
  );
}
