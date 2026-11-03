import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, CalendarCheck, HandCoins, Phone, ShieldCheck, Snowflake } from "lucide-react";
import { IMG, PARTNERS, PHONE_MOBILE, type Testimonial } from "../data/site";
import { Reveal, Stars, VerifiedBadge } from "./ui";

/* ------------------------- Partner marquee ------------------------- */
export function PartnerMarquee({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative overflow-hidden marquee-paused">
      <div className={`absolute inset-y-0 left-0 w-20 z-10 pointer-events-none bg-gradient-to-r ${dark ? "from-navy-deep" : "from-white"} to-transparent`} />
      <div className={`absolute inset-y-0 right-0 w-20 z-10 pointer-events-none bg-gradient-to-l ${dark ? "from-navy-deep" : "from-white"} to-transparent`} />
      {/* Dua blok identik → translateX(-50%) pas setara 1 blok = loop seamless */}
      <div className="marquee-track py-2">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-14 pr-14 shrink-0" aria-hidden={half === 1}>
            {PARTNERS.map((p) => (
              <span
                key={p}
                className={`font-display text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap transition-colors duration-300 ${
                  dark ? "text-white/30 hover:text-white/70" : "text-navy/25 hover:text-navy/60"
                }`}
              >
                {p}
                <Snowflake size={14} className="inline-block ml-3 -mt-1 text-brand/40" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------- CTA banner ---------------------------- */
export function CTABanner({
  title = "Siap Menikmati Ruangan Sejuk Hari Ini?",
  subtitle = "Dapatkan konsultasi gratis dan promo spesial bulan ini — teknisi tiba dalam 45 menit.",
  primaryLabel = "Jadwalkan Teknisi Sekarang",
  primaryTo = "/contact",
  secondaryLabel = "Lihat Promo",
  secondaryTo = "/promo",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <img src={IMG.roofWaterfront} alt="Unit outdoor AC di atap gedung dengan sistem HVAC profesional" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/90 to-navy-deep/75" />
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path className="flow-path" d="M-20 250 C 260 160, 560 340, 860 240 S 1290 170, 1460 260" stroke="#00A8E8" strokeWidth="2.5" />
        <path className="flow-path" d="M-20 330 C 280 270, 620 410, 920 320 S 1310 260, 1460 340" stroke="#7DD8FF" strokeWidth="2" style={{ animationDelay: "-1.2s" }} />
        <path className="flow-path" d="M-20 180 C 240 120, 540 260, 840 180 S 1270 120, 1460 200" stroke="#FF3B30" strokeWidth="2" opacity="0.55" style={{ animationDelay: "-2.4s" }} />
      </svg>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-brand-light border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full">
            <CalendarCheck size={14} /> Konsultasi Gratis Hari Ini
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold text-white leading-tight">{title}</h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-4 text-white/75 text-base md:text-lg max-w-xl mx-auto">{subtitle}</p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={primaryTo}
              className="btn inline-flex items-center gap-2.5 rounded-full bg-coral-gradient text-white font-display font-semibold px-9 py-4 text-lg shadow-glow-coral hover:brightness-110 hover:-translate-y-0.5"
            >
              {primaryLabel}
              <ArrowRight size={19} />
            </Link>
            <Link
              to={secondaryTo}
              className="btn inline-flex items-center gap-2 rounded-full font-display font-semibold px-8 py-4 text-base border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/70"
            >
              {secondaryLabel}
            </Link>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <a href={`tel:+62${PHONE_MOBILE.replace(/\D/g, "").slice(1)}`} className="mt-8 inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-semibold transition-colors">
            <Phone size={15} className="text-brand-light" /> atau telepon langsung: {PHONE_MOBILE}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Trust badges --------------------------- */
const TRUST = [
  {
    icon: ShieldCheck,
    title: "100% Garansi Uang Kembali",
    desc: "Tidak puas dengan hasil kerja? Uang kembali tanpa ribet — reputasi kami taruhannya.",
  },
  {
    icon: BadgeCheck,
    title: "Teknisi Bersertifikat & Terverifikasi",
    desc: "Semua teknisi tersertifikasi resmi, berpengalaman, sopan, dan lolos verifikasi latar belakang.",
  },
  {
    icon: HandCoins,
    title: "Suku Cadang Asli Bergaransi",
    desc: "Hanya spare part original dari distributor resmi — bergaransi resmi masing-masing merek.",
  },
];

export function TrustBadges() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 120}>
              <div className="group h-full flex items-start gap-5 rounded-3xl border border-slate-100 bg-white p-7 shadow-lg shadow-navy/5 hover-lift">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-brand-gradient text-white shrink-0 shadow-glow-brand group-hover:scale-110 transition-transform duration-300">
                  <t.icon size={26} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-navy text-lg leading-snug">{t.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Testimonial card ------------------------- */
export function TestimonialCard({ t, delay = 0 }: { t: Testimonial; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <figure className="relative h-full flex flex-col rounded-3xl bg-white border border-slate-100 shadow-lg shadow-navy/5 p-7 hover-lift">
        <span className="absolute top-5 right-6 font-display text-6xl leading-none text-brand/10 select-none" aria-hidden="true">
          ”
        </span>
        <div className="flex items-center gap-4">
          <img src={t.img} alt={`Foto pelanggan ${t.name}`} className="w-14 h-14 rounded-full object-cover ring-2 ring-brand/30" loading="lazy" />
          <div>
            <figcaption className="font-display font-semibold text-navy leading-tight">{t.name}</figcaption>
            <span className="text-xs text-slate-400">{t.location}</span>
          </div>
        </div>
        <Stars className="mt-4" />
        <blockquote className="mt-3 text-sm md:text-[15px] text-slate-600 leading-relaxed grow">“{t.quote}”</blockquote>
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <VerifiedBadge />
          <span className="text-[11px] text-slate-400">{t.date}</span>
        </div>
        <span className="mt-2 text-[11px] font-semibold text-navy/50 uppercase tracking-wider">Layanan: {t.service}</span>
      </figure>
    </Reveal>
  );
}
