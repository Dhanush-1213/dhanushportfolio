import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored !== null ? stored === "dark" : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("theme-dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="app-shell">
      <ParticleBackground darkMode={darkMode} />
      <div className="app-content">
        <Home darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}