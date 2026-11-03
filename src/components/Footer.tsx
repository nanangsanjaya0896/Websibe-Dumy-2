import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, TikTokIcon, YoutubeIcon } from "./SocialIcons";
import { ADDRESS, EMAIL, HOURS, NAV_LINKS, PHONE_DISPLAY, PHONE_MOBILE, WA_DEFAULT } from "../data/site";

const serviceLinks = [
  { label: "Servis AC & Perbaikan", path: "/services" },
  { label: "Instalasi & Relokasi AC", path: "/services" },
  { label: "Perawatan Berkala", path: "/services" },
  { label: "Cuci AC Deep Cleaning", path: "/services" },
];

const socials = [
  { icon: InstagramIcon, label: "Instagram CoolMaster" },
  { icon: FacebookIcon, label: "Facebook CoolMaster" },
  { icon: YoutubeIcon, label: "YouTube CoolMaster" },
  { icon: TikTokIcon, label: "TikTok CoolMaster" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-gradient text-white overflow-hidden">
      {/* decorative airflow */}
      <svg className="absolute inset-x-0 top-0 w-full h-28 opacity-[0.12] pointer-events-none" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path className="flow-path" d="M-20 30 C 240 80, 480 -10, 720 40 S 1200 90, 1460 30" stroke="#00A8E8" strokeWidth="3" />
        <path className="flow-path" d="M-20 70 C 260 110, 520 30, 760 70 S 1220 120, 1460 60" stroke="#7DD8FF" strokeWidth="2" style={{ animationDelay: "-1.4s" }} />
        <path className="flow-path" d="M-20 105 C 200 60, 500 130, 780 95 S 1240 60, 1460 100" stroke="#FF3B30" strokeWidth="2" opacity="0.7" style={{ animationDelay: "-2.2s" }} />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Kolom 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Logo light />
            <p className="text-white/65 text-sm leading-relaxed">
              CoolMaster™ adalah perusahaan HVAC & servis AC terpercaya sejak 2005. Kami menghadirkan udara sejuk, sehat,
              dan hemat energi untuk keluarga dan bisnis di seluruh Jabodetabek.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid place-items-center w-10 h-10 rounded-full bg-white/10 border border-white/10 text-white/80 hover:bg-brand hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2 — Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">
              Quick Links
              <span className="block w-10 h-1 rounded-full bg-coral mt-2" />
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="group inline-flex items-center gap-2 text-white/65 hover:text-brand-light transition-colors text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/60 group-hover:bg-coral transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3 — Layanan Kami */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">
              Layanan Kami
              <span className="block w-10 h-1 rounded-full bg-coral mt-2" />
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="group inline-flex items-center gap-2 text-white/65 hover:text-brand-light transition-colors text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand/60 group-hover:bg-coral transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-white/65 hover:text-brand-light transition-colors text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand/60 group-hover:bg-coral transition-colors" />
                  Konsultasi Gratis
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4 — Kontak Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-5">
              Kontak Info
              <span className="block w-10 h-1 rounded-full bg-coral mt-2" />
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-brand-light shrink-0 mt-0.5" />
                <span className="text-white/65 leading-relaxed">{ADDRESS}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-brand-light shrink-0 mt-0.5" />
                <span className="text-white/65">
                  {PHONE_DISPLAY}
                  <br />
                  {PHONE_MOBILE}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-brand-light shrink-0 mt-0.5" />
                <a href={`mailto:${EMAIL}`} className="text-white/65 hover:text-brand-light transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-brand-light shrink-0 mt-0.5" />
                <span className="text-white/65">
                  {HOURS.map((h) => (
                    <span key={h.d} className="block">
                      {h.d}: <span className="text-white/85 font-semibold">{h.t}</span>
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>
            Copyright © 2025 <span className="text-white/80 font-semibold">CoolMaster™</span>. All Rights Reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Teknisi siaga — melayani Jabodetabek setiap hari
          </p>
        </div>
      </div>
    </footer>
  );
}
