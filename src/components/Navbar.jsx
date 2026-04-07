import { useState, useEffect } from "react";
import "./Navbar.css";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar({ data, darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <header className={`hero-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="hero-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
          {data.brand}
        </div>

        <div className="hero-actions">
          <nav className="hero-nav-links desktop-nav">
            {data.navLinks.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <span
            className="theme-icon"
            onClick={() => setDarkMode((prev) => !prev)}
            role="button"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </span>

          <button
            className={`hero-menu-button ${menuOpen ? "active" : ""}`}
            onClick={handleMenuToggle}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-menu-panel ${menuOpen ? "open" : ""}`}
      >
        {data.navLinks.map((item) => (
          <a key={item.label} href={item.href} onClick={handleMenuClose}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
