import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import StockDetailPage from "./pages/StockDetailPage.tsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Link to="/" className="app-title">StockDash</Link>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock/:symbol" element={<StockDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
