import { Link } from "react-router-dom";
import { ArrowRight, BadgePercent, Check, CheckCheck, FileText, Flame, Gift, Sparkles, Star, Timer, X } from "lucide-react";
import PageHero from "../components/PageHero";
import { BtnPrimary, Pill, Reveal, SectionTitle } from "../components/ui";
import { COMPARE_ROWS, PLANS, PROMO_TERMS, waLink } from "../data/site";
import { useMeta, useMonthEndCountdown } from "../hooks";

/* --------------------------- Countdown timer --------------------------- */
const ID_MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

function Countdown() {
  const { d, h, m, s } = useMonthEndCountdown();
  const now = new Date();
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const units = [
    { v: d, l: "Hari" },
    { v: h, l: "Jam" },
    { v: m, l: "Menit" },
    { v: s, l: "Detik" },
  ];
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2.5 sm:gap-4">
        {units.map((u, i) => (
          <div key={u.l} className="flex items-center gap-2.5 sm:gap-4">
            <div className="relative grid place-items-center w-[4.2rem] sm:w-20 py-3 sm:py-4 rounded-2xl bg-navy-gradient border border-white/15 shadow-xl">
              <span className="font-display font-bold text-2xl sm:text-4xl text-white tabular">{String(u.v).padStart(2, "0")}</span>
              <span className="mt-1 pt-1 border-t border-white/15 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] text-brand-light">{u.l}</span>
            </div>
            {i < units.length - 1 && <span className="font-display font-bold text-2xl text-navy/30">:</span>}
          </div>
        ))}
      </div>
      <p className="text-sm font-semibold text-slate-500">
        Berlaku sampai <span className="text-coral-dark">{endDate.getDate()} {ID_MONTHS[now.getMonth()]} {endDate.getFullYear()}</span> — jangan sampai kehabisan!
      </p>
    </div>
  );
}

/* ----------------------------- Bonus card ----------------------------- */
const BONUSES = [
  { title: "FREE Fogging Desinfektan Ruangan", value: "Senilai Rp 150.000" },
  { title: "FREE Voucher Potongan Rp 50.000", value: "Untuk servis berikutnya" },
  { title: "FREE Garansi Tambahan 14 Hari", value: "Total garansi 44 hari" },
];

function BonusSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-coral/5 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <Reveal variant="zoom">
          <div className="glow-coral rounded-[2rem] overflow-hidden">
            <div className="bg-coral-gradient px-6 py-4 flex items-center justify-center gap-3 text-center">
              <Sparkles size={18} className="text-gold" />
              <p className="font-display font-bold text-white tracking-wide uppercase text-sm md:text-base">Bonus Spesial Hari Ini</p>
              <Sparkles size={18} className="text-gold" />
            </div>
            <div className="bg-white p-8 md:p-12 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                <h2 className="font-display font-bold text-navy text-2xl md:text-3xl leading-snug">
                  Pesan <span className="text-coral-dark">Hari Ini</span>, Dapatkan 3 Bonus Eksklusif:
                </h2>
                <ul className="mt-7 flex flex-col gap-4">
                  {BONUSES.map((b, i) => (
                    <Reveal key={b.title} delay={i * 110}>
                      <li className="flex items-center gap-4 rounded-2xl border border-gold/40 bg-gradient-to-r from-gold/10 to-transparent p-4">
                        <span className="grid place-items-center w-12 h-12 rounded-xl bg-coral-gradient text-white shrink-0 shadow-glow-coral">
                          <Gift size={22} />
                        </span>
                        <div>
                          <p className="font-display font-semibold text-navy leading-snug">{b.title}</p>
                          <p className="text-sm text-slate-500">{b.value}</p>
                        </div>
                        <CheckCheck size={20} className="ml-auto text-emerald-500 shrink-0" />
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-slate-400">* Bonus otomatis berlaku untuk semua paket jika pemesanan dilakukan hari ini.</p>
              </div>
              <div className="rounded-3xl bg-mist border border-slate-100 p-7 md:p-8 text-center">
                <Pill tone="coral">
                  <Timer size={13} /> Promo Berakhir Dalam
                </Pill>
                <div className="mt-6">
                  <Countdown />
                </div>
                <BtnPrimary to="/contact" className="mt-7 w-full">
                  Klaim Bonus Sekarang
                  <ArrowRight size={18} />
                </BtnPrimary>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Pricing ------------------------------- */
function Pricing() {
  return (
    <section className="relative bg-mist dot-grid-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle
          kicker="Harga Transparan"
          title="Pilih Paket Sesuai Kebutuhan Anda"
          desc="Harga pasti di awal — tidak ada biaya siluman. Semua paket dikerjakan teknisi bersertifikat."
        />
        <div className="mt-16 grid lg:grid-cols-3 gap-8 lg:gap-6 items-stretch">
          {PLANS.map((p, i) => (
            <Reveal key={p.id} delay={i * 120} className={`h-full ${p.highlight ? "lg:-mt-6 lg:mb-[-1.5rem]" : ""}`}>
              <div
                className={`relative h-full flex flex-col rounded-[1.75rem] p-8 ${
                  p.highlight
                    ? "glow-border shadow-2xl shadow-brand/25 lg:scale-[1.04] z-10"
                    : "bg-white border border-slate-200 shadow-lg shadow-navy/5"
                } hover-lift`}
              >
                {p.ribbon && (
                  <span className="absolute -top-3.5 -right-3 rotate-6 bg-coral-gradient text-white text-xs font-bold font-display px-4 py-1.5 rounded-full shadow-glow-coral">
                    {p.ribbon}
                  </span>
                )}
                {p.badge && (
                  <span
                    className={`inline-flex self-start items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                      p.highlight ? "bg-brand-gradient text-white shadow-glow-brand" : "bg-amber-100 text-amber-700 border border-amber-300"
                    }`}
                  >
                    {p.highlight ? <Star size={12} fill="currentColor" /> : <BadgePercent size={12} />}
                    {p.badge}
                  </span>
                )}
                <h3 className="mt-5 font-display font-bold text-navy text-2xl">{p.name}</h3>
                <p className="text-brand-dark text-sm font-semibold">{p.tag}</p>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                <p className="mt-2.5 inline-flex items-start gap-1.5 text-xs text-navy/70 bg-mist border border-slate-200 rounded-full px-3 py-1.5">
                  <Check size={12} strokeWidth={3} className="text-brand shrink-0 mt-0.5" />
                  <span><span className="font-semibold">Cocok untuk:</span> {p.bestFor}</span>
                </p>
                <div className="mt-6 flex items-end gap-2">
                  {p.originalPrice && <span className="text-slate-400 line-through text-lg mb-1.5">{p.originalPrice}</span>}
                  <span className={`font-display font-bold text-[2.1rem] leading-none ${p.highlight ? "text-gradient" : "text-navy"}`}>{p.price}</span>
                  <span className="text-slate-400 text-sm mb-1">{p.unit}</span>
                </div>
                <ul className="mt-7 flex flex-col gap-3 grow">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] text-slate-600">
                      <span className={`grid place-items-center w-5 h-5 rounded-full shrink-0 mt-0.5 ${p.highlight ? "bg-brand-gradient text-white" : "bg-brand/10 text-brand-dark"}`}>
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/contact?paket=${encodeURIComponent(p.name + " — " + p.tag)}`}
                  className={`btn mt-8 inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold px-6 py-3.5 ${
                    p.highlight
                      ? "bg-coral-gradient text-white shadow-glow-coral hover:brightness-110 hover:-translate-y-0.5"
                      : "border-2 border-navy/15 text-navy hover:border-brand hover:text-brand-dark hover:bg-brand/5"
                  }`}
                >
                  Pilih Paket Ini
                  <ArrowRight size={17} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-slate-400">
            Butuh penawaran khusus untuk <span className="font-semibold text-navy">gedung / proyek komersial</span>?{" "}
            <a href={waLink("Halo CoolMaster, saya butuh penawaran HVAC untuk proyek komersial.")} target="_blank" rel="noreferrer" className="text-brand-dark font-semibold underline underline-offset-4 hover:text-coral transition-colors">
              Minta penawaran gratis
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Compare table ---------------------------- */
function Cell({ v }: { v: boolean | string }) {
  if (v === true)
    return (
      <span className="mx-auto grid place-items-center w-7 h-7 rounded-full bg-emerald-100 text-emerald-600">
        <Check size={15} strokeWidth={3} />
      </span>
    );
  if (v === false)
    return (
      <span className="mx-auto grid place-items-center w-7 h-7 rounded-full bg-slate-100 text-slate-300">
        <X size={15} strokeWidth={3} />
      </span>
    );
  return <span className="font-semibold text-navy text-sm">{v}</span>;
}

function Compare() {
  return (
    <section className="relative bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle kicker="Bandingkan" title="Perbandingan Detail Paket" desc="Semua transparan — pilih yang paling sesuai dengan kebutuhan dan budget Anda." />
        <Reveal delay={150}>
          <div className="mt-12 overflow-x-auto no-scrollbar">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 rounded-3xl overflow-hidden shadow-xl shadow-navy/8 border border-slate-100">
              <thead>
                <tr className="bg-navy-gradient text-white">
                  <th className="text-left font-display font-semibold px-6 py-5 rounded-tl-3xl">Fitur</th>
                  <th className="text-center font-display font-semibold px-6 py-5">Basic</th>
                  <th className="text-center font-display font-semibold px-6 py-5 relative">
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-coral-gradient px-3 py-0.5 rounded-full shadow-glow-coral tracking-wider">POPULER</span>
                    Premium
                  </th>
                  <th className="text-center font-display font-semibold px-6 py-5 rounded-tr-3xl">Total Care</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r, i) => (
                  <tr key={r.feature} className={i % 2 === 0 ? "bg-white" : "bg-mist/60"}>
                    <td className="px-6 py-4 text-sm font-medium text-slate-600">{r.feature}</td>
                    <td className="px-6 py-4 text-center"><Cell v={r.basic} /></td>
                    <td className="px-6 py-4 text-center bg-brand/[0.05]"><Cell v={r.premium} /></td>
                    <td className="px-6 py-4 text-center"><Cell v={r.total} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Terms --------------------------------- */
function Terms() {
  return (
    <section className="relative bg-mist">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle kicker="Ketentuan" title="Syarat & Ketentuan Promo" />
        <div className="mt-12 rounded-3xl bg-white border border-slate-100 shadow-lg shadow-navy/5 p-7 md:p-9">
          <ul className="flex flex-col gap-4">
            {PROMO_TERMS.map((t, i) => (
              <Reveal key={t} delay={i * 80}>
                <li className="flex items-start gap-3.5 text-slate-600 leading-relaxed">
                  <span className="grid place-items-center w-7 h-7 rounded-lg bg-brand/10 text-brand-dark shrink-0 mt-0.5 font-display font-bold text-xs">
                    {i + 1}
                  </span>
                  {t}
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-7 pt-6 border-t border-dashed border-slate-200 flex items-center gap-3 text-sm text-slate-400">
            <FileText size={16} className="text-brand" />
            Detail garansi tertulis lengkap dilampirkan pada setiap invoice pengerjaan.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CTA repeat ----------------------------- */
function PromoCTA() {
  return (
    <section className="relative bg-coral-gradient overflow-hidden">
      <div className="absolute inset-0 diagonal-lines opacity-60" aria-hidden="true" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white bg-white/15 border border-white/25 backdrop-blur px-4 py-1.5 rounded-full">
            <Flame size={14} className="text-gold animate-flame" /> Kuota Promo Terbatas
          </span>
          <h2 className="mt-6 font-display font-bold text-white text-3xl md:text-5xl leading-tight">Jangan Lewatkan Promo Ini!</h2>
          <p className="mt-4 text-white/85 text-base md:text-lg max-w-xl mx-auto">
            Promo terbatas — hubungi kami sekarang sebelum kuota habis dan harga kembali normal.
          </p>
          <div className="mt-9">
            <Link
              to="/contact"
              className="btn inline-flex items-center gap-3 rounded-full bg-white text-coral-dark font-display font-bold px-10 py-5 text-lg md:text-xl shadow-2xl shadow-black/20 hover:-translate-y-1 hover:shadow-black/30"
            >
              Ambil Promo &amp; Pesan Teknisi Sekarang
              <ArrowRight size={22} />
            </Link>
          </div>
          <p className="mt-6 text-white/70 text-sm">Gratis konsultasi • Respon &lt; 5 menit via WhatsApp</p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------- Page -------------------------------- */
export default function Promo() {
  useMeta(
    "Promo & Bonus Spesial — CoolMaster™ | Hemat Hingga 30% Bulan Ini",
    "Promo terbatas CoolMaster™: cuci AC mulai Rp 85.000 + bonus fogging desinfektan, voucher Rp 50.000 & garansi tambahan 14 hari. Berlaku sampai akhir bulan!"
  );
  return (
    <>
      <PageHero title="Promo & Penawaran Spesial" subtitle="Dapatkan layanan HVAC terbaik dengan harga terbaik" crumb="Promo">
        <span className="inline-flex items-center gap-2.5 rounded-full bg-coral-gradient text-white font-display font-bold text-sm md:text-base px-6 py-3 shadow-glow-coral animate-pulse">
          <Flame size={18} className="animate-flame" />
          PROMO TERBATAS — Berlaku Sampai Akhir Bulan Ini!
        </span>
      </PageHero>
      <BonusSection />
      <Pricing />
      <Compare />
      <Terms />
      <PromoCTA />
    </>
  );
}
