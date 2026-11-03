import { type ReactNode, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { cn } from "../utils/cn";

/* ------------------------- Reveal on scroll ------------------------ */
export function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  variant?: "up" | "left" | "right" | "zoom";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let delayTimer: number | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
            // Hapus transition-delay setelah animasi reveal selesai,
            // supaya interaksi hover di dalamnya tidak ikut tertunda.
            delayTimer = window.setTimeout(() => {
              el.style.transitionDelay = "0ms";
            }, delay + 850);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (delayTimer) window.clearTimeout(delayTimer);
    };
  }, [delay]);
  const variantClass = variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : variant === "zoom" ? "reveal-zoom" : "";
  return (
    <div ref={ref} className={`reveal ${variantClass} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* --------------------- Coral swoosh underline ---------------------- */
export function Swoosh({ className = "w-40 text-coral" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 22" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 15C40 6 78 4 112 8c34 4 68 9 104 2"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path d="M150 17c22 2 44 1 66-6" stroke="#00A8E8" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

/* --------------------------- Section title ------------------------- */
export function SectionTitle({
  kicker,
  title,
  desc,
  align = "center",
  dark = false,
}: {
  kicker?: string;
  title: ReactNode;
  desc?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} gap-3 max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      {kicker && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full ${
              dark ? "bg-white/10 text-brand-light border border-white/15" : "bg-brand/10 text-brand-dark border border-brand/20"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className={`text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      </Reveal>
      <Reveal delay={140}>
        <Swoosh className={`w-40 ${align === "center" ? "mx-auto" : ""}`} />
      </Reveal>
      {desc && (
        <Reveal delay={200}>
          <p className={`text-base md:text-lg leading-relaxed ${dark ? "text-white/70" : "text-slate-500"}`}>{desc}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------ Stars ------------------------------ */
export function Stars({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-gold ${className}`} aria-label="Rating 5 dari 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  );
}

/* -------------------------- Verified badge ------------------------- */
export function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-brand/10 text-brand-dark border border-brand/25">
      <BadgeCheck size={13} />
      Verified Customer
    </span>
  );
}

/* ----------------------------- Buttons ----------------------------- */
export function BtnPrimary({
  to,
  href,
  children,
  className = "",
  big = false,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  big?: boolean;
}) {
  const cls = cn(
    "btn inline-flex items-center justify-center gap-2.5 rounded-full font-display font-semibold text-white bg-coral-gradient hover:brightness-110 hover:-translate-y-0.5 shadow-glow-coral",
    big ? "px-9 py-4.5 text-lg" : "px-7 py-3.5 text-base",
    className
  );
  if (href)
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  return (
    <Link to={to ?? "/"} className={cls}>
      {children}
    </Link>
  );
}

export function BtnOutline({
  to,
  href,
  children,
  className = "",
  light = false,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
  light?: boolean;
}) {
  const cls = cn(
    "btn inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold px-7 py-3.5 text-base border-2 hover:-translate-y-0.5",
    light
      ? "border-white/40 text-white hover:bg-white/10 hover:border-white/70"
      : "border-navy/15 text-navy hover:border-brand hover:text-brand-dark hover:bg-brand/5",
    className
  );
  if (href)
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  return (
    <Link to={to ?? "/"} className={cls}>
      {children}
    </Link>
  );
}

/* ------------------------ Arrow micro link ------------------------- */
export function ArrowLink({ to, children, className = "" }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link
      to={to}
      className={cn("group inline-flex items-center gap-2 font-display font-semibold text-brand-dark hover:text-coral transition-colors", className)}
    >
      <span className="border-b-2 border-brand/30 group-hover:border-coral transition-colors pb-0.5">{children}</span>
      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
    </Link>
  );
}

/* --------------------------- Pill badge ---------------------------- */
export function Pill({ children, tone = "brand" }: { children: ReactNode; tone?: "brand" | "coral" | "gold" | "white" }) {
  const tones = {
    brand: "bg-brand/10 text-brand-dark border-brand/25",
    coral: "bg-coral/10 text-coral-dark border-coral/25",
    gold: "bg-gold/15 text-amber-700 border-gold/40",
    white: "bg-white/10 text-white border-white/25",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] md:text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border ${tones[tone]}`}>
      {children}
    </span>
  );
}
