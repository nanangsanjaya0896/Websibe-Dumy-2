import { type ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

/** Mini hero untuk halaman dalam — termasuk breadcrumb Home > Halaman. */
export default function PageHero({
  title,
  subtitle,
  crumb,
  children,
}: {
  title: string;
  subtitle: string;
  crumb: string;
  children?: ReactNode;
}) {
  // BreadcrumbList JSON-LD per halaman (rich results breadcrumb)
  useEffect(() => {
    let el = document.getElementById("jsonld-breadcrumb") as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = "jsonld-breadcrumb";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.coolmaster.co.id/" },
        { "@type": "ListItem", position: 2, name: crumb },
      ],
    });
  }, [crumb]);

  return (
    <section className="relative hero-mesh overflow-hidden">
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      {/* glow orbs */}
      <div className="absolute -top-24 right-[8%] w-80 h-80 rounded-full bg-brand/25 blur-[110px]" aria-hidden="true" />
      <div className="absolute -bottom-32 left-[4%] w-96 h-96 rounded-full bg-brand-dark/30 blur-[130px]" aria-hidden="true" />
      {/* airflow lines */}
      <svg className="absolute inset-0 w-full h-full opacity-25" viewBox="0 0 1440 420" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path className="flow-path" d="M-20 300 C 280 220, 560 360, 840 280 S 1280 220, 1460 300" stroke="#00A8E8" strokeWidth="2" />
        <path className="flow-path" d="M-20 350 C 300 300, 600 400, 900 330 S 1300 290, 1460 350" stroke="#7DD8FF" strokeWidth="1.5" style={{ animationDelay: "-1.6s" }} />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 md:pt-44 md:pb-20 text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm mb-6">
          <Link to="/" className="inline-flex items-center gap-1.5 text-white/55 hover:text-brand-light transition-colors">
            <Home size={14} />
            Home
          </Link>
          <ChevronRight size={14} className="text-white/35" />
          <span className="text-brand-light font-semibold">{crumb}</span>
        </nav>

        <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-tight">{title}</h1>
        <p className="mt-4 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        {children && <div className="mt-7 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </div>

      {/* bottom wave */}
      <svg className="relative block w-full h-[52px] md:h-[70px] -mb-px" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 70h1440V28C1200 64 960 8 720 30 480 52 240 20 0 44v26Z" fill="#fff" />
      </svg>
    </section>
  );
}
