import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navItems } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";
import "./Navbar.css";

const SECTION_IDS = navItems.map((item) => item.href.slice(1));

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 769px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <div className="container navbar__inner">
          <a
            className="brand"
            href="#home"
            onClick={() => setIsOpen(false)}
            aria-label="ASAN.DEV - home"
          >
            ASAN<span>.DEV</span>
          </a>

          <ul
            id="primary-navigation"
            className={`nav-links${isOpen ? " nav-links--open" : ""}`}
          >
            {navItems.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeId === id;

              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`nav-link${isActive ? " nav-link--active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
            <li className="nav-links__cta">
              <a
                href="#contact"
                className="btn btn--primary btn--sm"
                onClick={() => setIsOpen(false)}
              >
                Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
