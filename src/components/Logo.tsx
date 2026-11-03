import { Link } from "react-router-dom";

/** CoolMaster™ logo — snowflake mark + wordmark. `light` for dark backgrounds. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" aria-label="CoolMaster — Beranda" className="flex items-center gap-2.5 group">
      <span className="relative grid place-items-center w-10 h-10 rounded-xl bg-navy-gradient shadow-lg shadow-brand/20 group-hover:shadow-brand/40 transition-shadow duration-300">
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <g stroke="#00A8E8" strokeWidth="2" strokeLinecap="round">
            <path d="M16 4v24" />
            <path d="M5.6 10l20.8 12" />
            <path d="M26.4 10L5.6 22" />
          </g>
          <g stroke="#7DD8FF" strokeWidth="1.6" strokeLinecap="round">
            <path d="M16 4l-3.4 3.6M16 4l3.4 3.6" />
            <path d="M16 28l-3.4-3.6M16 28l3.4-3.6" />
            <path d="M5.6 10l4.8.7M5.6 10l.8 4.8" />
            <path d="M26.4 22l-4.8-.7M26.4 22l-.8-4.8" />
            <path d="M26.4 10l-4.8.8M26.4 10l-.7 4.8" />
            <path d="M5.6 22l4.8-.8M5.6 22l.7-4.8" />
          </g>
          <circle cx="16" cy="16" r="2.4" fill="#fff" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 w-2.5 h-2.5 rounded-full bg-coral ring-2 ring-white/90" />
      </span>
      <span className={`font-display font-800 text-xl tracking-tight leading-none ${light ? "text-white" : "text-navy"}`} style={{ fontWeight: 800 }}>
        CoolMaster<span className="text-brand">™</span>
        <span className={`block text-[10px] font-body font-semibold tracking-[0.22em] uppercase mt-0.5 ${light ? "text-white/60" : "text-navy/50"}`}>
          HVAC & Servis AC
        </span>
      </span>
    </Link>
  );
}
