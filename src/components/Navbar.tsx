import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { NAV_LINKS, PHONE_MOBILE } from "../data/site";
import { useScrolled } from "../hooks";
import Logo from "./Logo";

export default function Navbar() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close drawer when navigating
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = !scrolled && !open; // transparent over dark hero

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-navy/10 py-2.5" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Logo light={dark} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigasi utama">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === "/"}
                className={({ isActive }) =>
                  `nav-link font-display text-[15px] font-semibold transition-colors duration-300 ${
                    isActive ? "active text-brand" : dark ? "text-white/85 hover:text-white" : "text-navy/80 hover:text-navy"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:+62${PHONE_MOBILE.replace(/\D/g, "").slice(1)}`}
              className={`hidden xl:flex items-center gap-2 text-sm font-semibold transition-colors ${
                dark ? "text-white/80 hover:text-white" : "text-navy/70 hover:text-navy"
              }`}
            >
              <span className="grid place-items-center w-9 h-9 rounded-full bg-brand-gradient text-white">
                <Phone size={15} />
              </span>
              <span className="leading-tight text-left">
                <span className={`block text-[10px] uppercase tracking-wider ${dark ? "text-white/50" : "text-slate-400"}`}>24/7 Hotline</span>
                {PHONE_MOBILE}
              </span>
            </a>
            <Link
              to="/contact"
              className="btn inline-flex items-center gap-2 rounded-full bg-coral-gradient text-white font-display font-semibold px-6 py-3 text-sm shadow-glow-coral hover:brightness-110 hover:-translate-y-0.5"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className={`lg:hidden grid place-items-center w-11 h-11 rounded-xl transition-colors ${
              dark ? "text-white hover:bg-white/10" : "text-navy hover:bg-navy/5"
            }`}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-400 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <aside
          className={`absolute top-0 right-0 h-full w-[84vw] max-w-sm bg-navy-gradient text-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-7 pb-8">
            <nav className="flex flex-col gap-1" aria-label="Navigasi mobile">
              {NAV_LINKS.map((l, i) => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  end={l.path === "/"}
                  style={{ transitionDelay: `${open ? 120 + i * 45 : 0}ms` }}
                  className={({ isActive }) =>
                    `font-display text-lg font-semibold px-4 py-3.5 rounded-xl transition-all duration-500 ${
                      open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                    } ${isActive ? "bg-brand/20 text-brand-light" : "text-white/85 hover:bg-white/10"}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-4">
              <Link
                to="/contact"
                className="btn inline-flex items-center justify-center gap-2 rounded-full bg-coral-gradient text-white font-display font-semibold px-6 py-4 shadow-glow-coral"
              >
                Hubungi Kami
              </Link>
              <a href={`tel:+62${PHONE_MOBILE.replace(/\D/g, "").slice(1)}`} className="inline-flex items-center justify-center gap-2 text-white/75 text-sm font-semibold">
                <Phone size={15} className="text-brand-light" /> Hotline 24/7: {PHONE_MOBILE}
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
