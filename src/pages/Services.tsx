import { ArrowRight, BadgeCheck, CalendarClock, CheckCircle2, ClipboardList, Coins, MapPin, PhoneCall, ShieldCheck, Snowflake, Timer, Trophy, Wrench } from "lucide-react";
import PageHero from "../components/PageHero";
import { CTABanner } from "../components/sections";
import { BtnPrimary, Pill, Reveal, SectionTitle } from "../components/ui";
import { AREAS, IMG, waLink } from "../data/site";
import { useMeta } from "../hooks";

/* ------------------------- Service detail data ------------------------ */
const SERVICES_DETAIL = [
  {
    id: "repair",
    kicker: "Layanan 01",
    title: "AC Repair & Troubleshooting",
    badge: { icon: Timer, text: "Response Time 45 Menit", tone: "coral" as const },
    img: IMG.techWall,
    alt: "Teknisi CoolMaster melakukan diagnosa dan perbaikan unit AC indoor",
    desc: "AC mati total, tidak dingin, berisik, atau sering mati-nyala sendiri? Tim diagnosa kami menemukan akar masalahnya dengan alat ukur presisi — bukan sekadar tebakan. Perbaikan dilakukan di tempat, transparan, dan bergaransi.",
    checklist: ["Diagnosa kerusakan menyeluruh & laporan tertulis", "Perbaikan & penggantian kompresor", "Ganti spare part 100% original", "Pengecekan kelistrikan & PCB modul"],
  },
  {
    id: "cleaning",
    kicker: "Layanan 02",
    title: "Cuci AC Deep Cleaning",
    badge: { icon: Trophy, text: "Paling Populer", tone: "gold" as const },
    img: IMG.acCloseup,
    alt: "Cuci AC deep cleaning dengan steam tekanan tinggi pada unit indoor modern",
    desc: "Steam tekanan tinggi menembus sirip evaporator dan blower — mengangkat debu, lendir, jamur, dan bakteri yang tidak terjangkau cuci biasa. Hasilnya: udara lebih bersih, ruangan lebih cepat dingin, listrik lebih hemat.",
    checklist: ["Steam high pressure evaporator & blower", "Pembersihan filter & saluran pembuangan", "Anti-bakteri & anti-jamur treatment", "Before–after terdokumentasi foto"],
  },
  {
    id: "installation",
    kicker: "Layanan 03",
    title: "Instalasi & Relokasi AC",
    badge: { icon: Wrench, text: "Semua Merek & Tipe", tone: "brand" as const },
    img: IMG.techGauge,
    alt: "Teknisi memasang pipa dan mengukur tekanan freon saat instalasi AC baru",
    desc: "Pemasangan unit baru atau relokasi antar ruangan/rumah dengan standard pabrikan: vakum pipa wajib, flare presisi, dan jalur pipa rapi. Kami bantu hitung kapasitas PK yang tepat agar listrik tidak boros.",
    checklist: ["Pemasangan unit baru semua merek & tipe", "Relokasi unit AC pindah ruangan / rumah", "Konsultasi kapasitas PK sesuai luas ruangan", "Instalasi ducting & sistem VRV / VRF gedung"],
  },
  {
    id: "maintenance",
    kicker: "Layanan 04",
    title: "Annual Maintenance Plan",
    badge: { icon: ShieldCheck, text: "Best Value", tone: "brand" as const },
    img: IMG.techInspect,
    alt: "Teknisi melakukan inspeksi rutin unit outdoor HVAC dalam program perawatan berkala",
    desc: "Jangan tunggu AC rusak. Dengan paket perawatan berkala 3 / 6 / 12 bulan, unit Anda selalu prima, umur kompresor lebih panjang, dan Anda jadi prioritas antrian kami.",
    checklist: ["Paket perawatan berkala 3 / 6 / 12 bulan", "Prioritas jadwal kunjungan & antrian darurat", "Diskon khusus spare part & freon 20%", "Laporan kondisi AC berkala via WhatsApp"],
  },
];

const toneClass = {
  coral: "bg-coral/10 text-coral-dark border-coral/25",
  gold: "bg-gold/15 text-amber-700 border-gold/40",
  brand: "bg-brand/10 text-brand-dark border-brand/25",
};

function ServiceDetail() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle
          kicker="Layanan Unggulan"
          title="Layanan HVAC Lengkap Untuk Setiap Kebutuhan Anda"
          desc="Empat layanan inti dengan SOP standard pabrikan, teknisi bersertifikat, dan garansi tertulis."
        />
        <div className="mt-16 flex flex-col gap-16 md:gap-24">
          {SERVICES_DETAIL.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <div key={s.id} className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <Reveal variant={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div className={`absolute -inset-4 rounded-[2rem] ${flip ? "bg-navy-gradient" : "bg-brand-gradient"} opacity-[0.08] rotate-2`} aria-hidden="true" />
                    <div className="relative rounded-[1.75rem] overflow-hidden shadow-2xl shadow-navy/20">
                      <img src={s.img} alt={s.alt} className="w-full h-[320px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                      <span className={`absolute top-5 left-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border backdrop-blur bg-white/90 ${toneClass[s.badge.tone]}`}>
                        <s.badge.icon size={14} />
                        {s.badge.text}
                      </span>
                      <span className="absolute bottom-5 right-5 font-display font-bold text-white/20 text-6xl select-none" aria-hidden="true">
                        0{i + 1}
                      </span>
                    </div>
                  </div>
                </Reveal>
                <Reveal variant={flip ? "left" : "right"} className={flip ? "lg:order-1" : ""}>
                  <div>
                    <Pill>{s.kicker}</Pill>
                    <h3 className="mt-4 font-display font-bold text-navy text-2xl md:text-[1.9rem] leading-snug">{s.title}</h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">{s.desc}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                      {s.checklist.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-[15px] text-slate-600">
                          <CheckCircle2 size={18} className="text-brand shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7">
                      <BtnPrimary to="/contact" className="px-6 py-3 text-sm">
                        Pesan Layanan Ini
                        <ArrowRight size={16} />
                      </BtnPrimary>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Benefits ------------------------------ */
const BENEFITS = [
  {
    icon: Snowflake,
    title: "Dingin Maksimal & Hemat Listrik",
    desc: "Unit bersih + freon tepat = ruangan cepat dingin. Potong tagihan listrik hingga 40% setiap bulan.",
  },
  {
    icon: ShieldCheck,
    title: "20+ Tahun Pengalaman",
    desc: "Teknisi bersertifikat, jujur, sopan, dan tepat waktu — dipercaya 15.000+ pelanggan sejak 2005.",
  },
  {
    icon: Coins,
    title: "Transparan & Tanpa Biaya Siluman",
    desc: "Harga pasti disepakati di awal sebelum pengerjaan. Tidak ada biaya mendadak di akhir.",
  },
];

function Benefits() {
  return (
    <section className="relative bg-mist dot-grid-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionTitle kicker="Keunggulan Kami" title="Mengapa Ribuan Keluarga Memilih Kami?" />
        <div className="mt-6 relative">
          {/* connector line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-1 bg-gradient-to-r from-brand/20 via-brand/50 to-brand/20 rounded-full" aria-hidden="true" />
          <div className="relative grid md:grid-cols-3 gap-6 lg:gap-8">
            {BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 140} variant="zoom" className={i === 1 ? "lg:-mt-10" : i === 2 ? "lg:mt-6" : ""}>
                <div className="relative h-full rounded-3xl bg-white border border-slate-100 shadow-xl shadow-navy/8 p-8 pt-10 text-center hover-lift">
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 grid place-items-center w-14 h-14 rounded-full bg-brand-gradient text-white shadow-glow-brand ring-8 ring-mist">
                    <b.icon size={24} />
                  </span>
                  <h3 className="font-display font-bold text-navy text-lg leading-snug">{b.title}</h3>
                  <p className="mt-3 text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Service area ---------------------------- */
function ServiceArea() {
  return (
    <section className="relative bg-navy-gradient overflow-hidden">
      <div className="absolute inset-0 dot-grid" aria-hidden="true" />
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path className="flow-path" d="M-20 480 C 300 400, 620 560, 920 470 S 1300 400, 1460 490" stroke="#00A8E8" strokeWidth="2.5" />
        <path className="flow-path" d="M-20 120 C 280 60, 580 200, 880 120 S 1290 60, 1460 140" stroke="#7DD8FF" strokeWidth="2" style={{ animationDelay: "-1.8s" }} />
      </svg>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle dark kicker="Jangkauan" title="Area Layanan Kami" desc="Armada teknisi kami tersebar strategis untuk respon tercepat di seluruh Jabodetabek." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {AREAS.map((a, i) => (
            <Reveal key={a.city} delay={i * 100}>
              <div className="group h-full rounded-2xl bg-white/[0.06] backdrop-blur border border-white/12 p-6 text-center hover:bg-white/12 hover:-translate-y-2 hover:border-brand/50 transition-all duration-400">
                <span className="mx-auto grid place-items-center w-12 h-12 rounded-full bg-brand/20 text-brand-light group-hover:bg-coral-gradient group-hover:text-white transition-all duration-300">
                  <MapPin size={21} />
                </span>
                <h3 className="mt-4 font-display font-bold text-white text-lg">{a.city}</h3>
                <p className="mt-1.5 text-xs text-white/55 leading-relaxed">{a.points}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-10 text-center text-white/65 text-sm md:text-base">
            Melayani <span className="text-brand-light font-semibold">residensial, perkantoran, ruko,</span> dan{" "}
            <span className="text-brand-light font-semibold">industrial</span> — di luar area di atas?{" "}
            <a href={waLink("Halo CoolMaster, saya ingin mengecek ketersediaan teknisi di area saya.")} target="_blank" rel="noreferrer" className="text-gold font-semibold underline underline-offset-4 hover:text-white transition-colors">
              Tanya kami dulu
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Process ------------------------------- */
const STEPS = [
  { icon: PhoneCall, title: "Hubungi Kami", desc: "Konsultasi gratis via WhatsApp atau telepon — ceritakan keluhan AC Anda." },
  { icon: CalendarClock, title: "Jadwalkan Kunjungan", desc: "Pilih waktu paling nyaman sesuai jadwal Anda, pagi hingga malam." },
  { icon: Wrench, title: "Teknisi Datang", desc: "Diagnosa transparan, harga disepakati di awal, pengerjaan profesional." },
  { icon: BadgeCheck, title: "Selesai & Bergaransi", desc: "Nikmati udara sejuk kembali + garansi tertulis 30 hari." },
];

function Process() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <SectionTitle kicker="Mudah & Cepat" title="Bagaimana Cara Kerjanya?" desc="Empat langkah sederhana menuju ruangan sejuk tanpa stres." />
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] border-t-[3px] border-dashed border-brand/30" aria-hidden="true" />
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 130}>
                <div className="group text-center flex flex-col items-center">
                  <div className="relative">
                    <span className="grid place-items-center w-[4.5rem] h-[4.5rem] rounded-2xl bg-white border-2 border-brand/25 text-brand-dark shadow-lg shadow-brand/10 group-hover:bg-brand-gradient group-hover:text-white group-hover:border-transparent group-hover:scale-110 transition-all duration-300">
                      <s.icon size={28} />
                    </span>
                    <span className="absolute -top-2.5 -right-2.5 grid place-items-center w-7 h-7 rounded-full bg-coral-gradient text-white text-xs font-bold font-display shadow-glow-coral">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-bold text-navy text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-[16rem]">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={350}>
          <div className="mt-14 text-center">
            <BtnPrimary to="/contact" big>
              <ClipboardList size={20} />
              Mulai Dari Langkah 1 — Gratis
            </BtnPrimary>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Page -------------------------------- */
export default function Services() {
  useMeta(
    "Servis AC & HVAC: Repair, Cuci, Instalasi — CoolMaster™",
    "Layanan HVAC lengkap: AC repair & troubleshooting, cuci AC deep cleaning, instalasi & relokasi, maintenance berkala. Teknisi bersertifikat, garansi 30 hari. Pesan sekarang!"
  );
  return (
    <>
      <PageHero
        title="Layanan HVAC Profesional Kami"
        subtitle="Solusi lengkap perawatan, perbaikan, dan instalasi sistem pendingin untuk rumah & bisnis Anda"
        crumb="Layanan"
      />
      <ServiceDetail />
      <Benefits />
      <ServiceArea />
      <Process />
      <CTABanner
        title="Butuh Layanan HVAC Sekarang?"
        subtitle="Teknisi terdekat siap berangkat hari ini juga — jadwalkan kunjungan Anda sekarang."
        primaryLabel="Pesan Teknisi"
        primaryTo="/contact"
        secondaryLabel="Lihat Promo"
        secondaryTo="/promo"
      />
    </>
  );
}
