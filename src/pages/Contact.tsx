import { type FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, ChevronDown, Clock, HelpCircle, Mail, MapPin, MessageCircle, Navigation,
  Phone, PhoneCall, Send, ShieldCheck,
} from "lucide-react";
import PageHero from "../components/PageHero";
import { BtnOutline, Reveal, SectionTitle, Swoosh } from "../components/ui";
import { FacebookIcon, InstagramIcon, TikTokIcon, YoutubeIcon } from "../components/SocialIcons";
import { ADDRESS, EMAIL, FAQS, HOURS, IMG, PHONE_DISPLAY, PHONE_MOBILE, SOCIAL_LINKS, waLink } from "../data/site";
import { useMeta } from "../hooks";

const TEL_LINK = `tel:+62${PHONE_MOBILE.replace(/\D/g, "").slice(1)}`;
const MAP_SRC =
  "https://www.google.com/maps?q=Jl.+Kebon+Jeruk+Raya+Jakarta+Barat&z=14&output=embed";

/* --------------------------- Info & quick cards ------------------------ */
function InfoColumn() {
  const quick = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      desc: "Chat langsung dengan tim kami — respon < 5 menit.",
      action: "Chat Sekarang",
      href: waLink("Halo CoolMaster, saya ingin bertanya tentang layanan servis AC."),
      accent: "bg-[#25D366]",
    },
    {
      icon: PhoneCall,
      title: "Telepon",
      desc: `${PHONE_DISPLAY} • ${PHONE_MOBILE}`,
      action: "Hubungi Sekarang",
      href: TEL_LINK,
      accent: "bg-brand-gradient",
    },
    {
      icon: Mail,
      title: "Email",
      desc: EMAIL,
      action: "Kirim Email",
      href: `mailto:${EMAIL}`,
      accent: "bg-navy-gradient",
    },
  ];

  const socials = [
    { icon: InstagramIcon, label: "Instagram", href: SOCIAL_LINKS.instagram },
    { icon: FacebookIcon, label: "Facebook", href: SOCIAL_LINKS.facebook },
    { icon: YoutubeIcon, label: "YouTube", href: SOCIAL_LINKS.youtube },
    { icon: TikTokIcon, label: "TikTok", href: SOCIAL_LINKS.tiktok },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl bg-white border border-slate-100 shadow-xl shadow-navy/8 p-7 md:p-8">
        <h2 className="font-display font-bold text-navy text-2xl">Informasi Kontak</h2>
        <Swoosh className="w-28 mt-1" />
        <ul className="mt-6 flex flex-col gap-5">
          <li className="flex gap-4">
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand/10 text-brand-dark shrink-0"><MapPin size={20} /></span>
            <div>
              <p className="font-display font-semibold text-navy text-sm uppercase tracking-wider">Alamat Kantor</p>
              <p className="mt-1 text-slate-600 text-sm leading-relaxed">{ADDRESS}</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand/10 text-brand-dark shrink-0"><Phone size={20} /></span>
            <div>
              <p className="font-display font-semibold text-navy text-sm uppercase tracking-wider">Telepon</p>
              <p className="mt-1 text-slate-600 text-sm">{PHONE_DISPLAY}<br />{PHONE_MOBILE}</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand/10 text-brand-dark shrink-0"><Mail size={20} /></span>
            <div>
              <p className="font-display font-semibold text-navy text-sm uppercase tracking-wider">Email</p>
              <a href={`mailto:${EMAIL}`} className="mt-1 block text-slate-600 text-sm hover:text-brand-dark transition-colors">{EMAIL}</a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="grid place-items-center w-11 h-11 rounded-xl bg-brand/10 text-brand-dark shrink-0"><Clock size={20} /></span>
            <div>
              <p className="font-display font-semibold text-navy text-sm uppercase tracking-wider">Jam Operasional</p>
              {HOURS.map((h) => (
                <p key={h.d} className="mt-1 text-slate-600 text-sm">
                  {h.d}: <span className="font-semibold text-navy">{h.t}</span>
                </p>
              ))}
            </div>
          </li>
        </ul>
        <div className="mt-7 pt-6 border-t border-slate-100">
          <p className="text-sm font-semibold text-navy mb-3">Ikuti Kami</p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid place-items-center w-10 h-10 rounded-full bg-mist text-navy/60 hover:bg-navy hover:text-white hover:-translate-y-1 transition-all duration-300">
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Quick contact cards */}
      <div className="grid sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
        {quick.map((q, i) => (
          <Reveal key={q.title} delay={i * 100} className="h-full">
            <a href={q.href} target={q.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group block h-full rounded-2xl bg-white border border-slate-100 shadow-lg shadow-navy/5 p-5 hover-lift">
              <span className={`grid place-items-center w-11 h-11 rounded-xl text-white ${q.accent} shadow-lg`}>
                <q.icon size={19} />
              </span>
              <p className="mt-3.5 font-display font-bold text-navy">{q.title}</p>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">{q.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-coral transition-colors uppercase tracking-wider">
                {q.action} <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* --------------------------------- Form --------------------------------- */
const SERVICE_OPTIONS = ["Servis AC", "Cuci AC", "Instalasi", "Maintenance", "Konsultasi", "Lainnya"];
const BRAND_OPTIONS = ["Daikin", "Panasonic", "LG", "Sharp", "Samsung", "Gree", "Mitsubishi", "Haier", "Lainnya"];

type Errors = Partial<Record<string, string>>;

function ContactForm() {
  const [params] = useSearchParams();
  const paket = params.get("paket");

  const [form, setForm] = useState({
    nama: "",
    wa: "",
    email: "",
    layanan: "",
    merek: "",
    unit: "1",
    alamat: "",
    pesan: paket ? `Halo, saya ingin memesan paket ${paket}. Mohon info jadwal teknisi terdekat.` : "",
    promo: true,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (paket) setForm((f) => ({ ...f, pesan: `Halo, saya ingin memesan paket ${paket}. Mohon info jadwal teknisi terdekat.` }));
  }, [paket]);

  const set = (k: keyof typeof form, v: string | boolean) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (form.nama.trim().length < 3) e.nama = "Nama minimal 3 karakter.";
    if (!/^[0-9+\-\s()]{9,17}$/.test(form.wa.trim())) e.wa = "Nomor WhatsApp tidak valid (min. 9 digit).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Format email tidak valid.";
    if (!form.layanan) e.layanan = "Pilih jenis layanan.";
    if (!form.merek) e.merek = "Pilih merek AC.";
    const unit = parseInt(form.unit, 10);
    if (!unit || unit < 1) e.unit = "Jumlah unit minimal 1.";
    if (form.alamat.trim().length < 10) e.alamat = "Alamat lengkap minimal 10 karakter.";
    return e;
  };

  const waCompose = useMemo(
    () =>
      waLink(
        `Halo CoolMaster!\n\nNama: ${form.nama}\nLayanan: ${form.layanan}\nMerek AC: ${form.merek}\nJumlah Unit: ${form.unit}\nAlamat: ${form.alamat}\nPesan: ${form.pesan || "-"}`
      ),
    [form]
  );

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  const inputCls = (err?: string) =>
    `w-full rounded-xl border-2 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate-300 outline-none transition-all duration-300 focus:border-brand focus:ring-4 focus:ring-brand/15 ${
      err ? "border-coral/70" : "border-slate-200"
    }`;

  const FieldError = ({ k }: { k: string }) =>
    errors[k] ? <p className="mt-1.5 text-xs font-semibold text-coral-dark">{errors[k]}</p> : null;

  if (sent) {
    return (
      <div className="rounded-3xl bg-white border border-slate-100 shadow-xl shadow-navy/8 p-8 md:p-12 text-center page-enter">
        <span className="mx-auto grid place-items-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-500">
          <CheckCircle2 size={40} />
        </span>
        <h2 className="mt-6 font-display font-bold text-navy text-2xl md:text-3xl">Pesan Siap Dikirim, {form.nama.split(" ")[0]}!</h2>
        <p className="mt-3 text-slate-500 max-w-md mx-auto leading-relaxed">
          Satu langkah lagi — klik tombol di bawah dan pesan Anda akan langsung terkirim ke WhatsApp tim kami. Respon &lt; 5 menit!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={waCompose} target="_blank" rel="noreferrer" className="btn inline-flex items-center gap-2.5 rounded-full bg-[#25D366] text-white font-display font-semibold px-8 py-4 shadow-xl shadow-emerald-500/30 hover:brightness-105 hover:-translate-y-0.5">
            <MessageCircle size={19} /> Lanjut Kirim ke WhatsApp
          </a>
          <button onClick={() => setSent(false)} className="text-sm font-semibold text-slate-400 hover:text-navy transition-colors underline underline-offset-4">
            Ubah data pesan
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white border border-slate-100 shadow-xl shadow-navy/8 p-7 md:p-9">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h2 className="font-display font-bold text-navy text-2xl">Form Pemesanan &amp; Konsultasi</h2>
          <p className="mt-1 text-sm text-slate-400">Isi form — kami balas &lt; 5 menit di jam kerja.</p>
        </div>
        {paket && (
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-coral-dark bg-coral/10 border border-coral/25 px-3.5 py-1.5 rounded-full">
            <ShieldCheck size={13} /> Paket: {paket}
          </span>
        )}
      </div>

      <div className="mt-7 grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nama" className="block text-sm font-semibold text-navy mb-1.5">Nama Lengkap <span className="text-coral">*</span></label>
          <input id="nama" type="text" value={form.nama} onChange={(e) => set("nama", e.target.value)} placeholder="cth: Budi Santoso" className={inputCls(errors.nama)} />
          <FieldError k="nama" />
        </div>
        <div>
          <label htmlFor="wa" className="block text-sm font-semibold text-navy mb-1.5">Nomor WhatsApp <span className="text-coral">*</span></label>
          <input id="wa" type="tel" value={form.wa} onChange={(e) => set("wa", e.target.value)} placeholder="cth: 0812-3456-7890" className={inputCls(errors.wa)} />
          <FieldError k="wa" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">Email <span className="text-coral">*</span></label>
          <input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="cth: budi@email.com" className={inputCls(errors.email)} />
          <FieldError k="email" />
        </div>
        <div>
          <label htmlFor="layanan" className="block text-sm font-semibold text-navy mb-1.5">Jenis Layanan <span className="text-coral">*</span></label>
          <select id="layanan" value={form.layanan} onChange={(e) => set("layanan", e.target.value)} className={inputCls(errors.layanan)}>
            <option value="">— Pilih layanan —</option>
            {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <FieldError k="layanan" />
        </div>
        <div>
          <label htmlFor="merek" className="block text-sm font-semibold text-navy mb-1.5">Merek AC <span className="text-coral">*</span></label>
          <select id="merek" value={form.merek} onChange={(e) => set("merek", e.target.value)} className={inputCls(errors.merek)}>
            <option value="">— Pilih merek —</option>
            {BRAND_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
          <FieldError k="merek" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="unit" className="block text-sm font-semibold text-navy mb-1.5">Jumlah Unit <span className="text-coral">*</span></label>
          <input id="unit" type="number" min={1} max={999} value={form.unit} onChange={(e) => set("unit", e.target.value)} className={inputCls(errors.unit)} />
          <FieldError k="unit" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="alamat" className="block text-sm font-semibold text-navy mb-1.5">Alamat Lokasi <span className="text-coral">*</span></label>
          <textarea id="alamat" rows={2} value={form.alamat} onChange={(e) => set("alamat", e.target.value)} placeholder="cth: Jl. Merdeka No. 10, Kelapa Gading, Jakarta Utara" className={inputCls(errors.alamat)} />
          <FieldError k="alamat" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="pesan" className="block text-sm font-semibold text-navy mb-1.5">Pesan Tambahan</label>
          <textarea id="pesan" rows={3} value={form.pesan} onChange={(e) => set("pesan", e.target.value)} placeholder="Ceritakan keluhan / kebutuhan Anda (opsional)" className={inputCls()} />
        </div>
      </div>

      <label className="mt-5 flex items-start gap-3 cursor-pointer group">
        <input type="checkbox" checked={form.promo} onChange={(e) => set("promo", e.target.checked)} className="mt-1 w-4.5 h-4.5 rounded accent-[#0077B6]" />
        <span className="text-sm text-slate-500 group-hover:text-navy transition-colors">
          Saya ingin mendapatkan promo &amp; info terbaru via WhatsApp
        </span>
      </label>

      <button type="submit" className="btn mt-7 w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-coral-gradient text-white font-display font-semibold px-8 py-4.5 text-lg shadow-glow-coral hover:brightness-110 hover:-translate-y-0.5">
        <Send size={19} />
        Siapkan Pesan &amp; Dapatkan Konsultasi Gratis
      </button>
      <p className="mt-4 text-center text-xs text-slate-400">Data Anda aman &amp; hanya digunakan untuk keperluan layanan.</p>
    </form>
  );
}

/* --------------------------- Map + direction ---------------------------- */
function MapSection() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-24">
        <SectionTitle kicker="Kunjungi Kami" title="Lokasi Kantor Kami" desc="Kantor pusat kami mudah dijangkau dari seluruh penjuru Jakarta." />
        <Reveal delay={150}>
          <div className="mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-6 items-stretch">
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-navy/10 min-h-[360px]">
              <iframe
                title="Peta lokasi kantor CoolMaster — Kebon Jeruk, Jakarta Barat"
                src={MAP_SRC}
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-3xl bg-navy-gradient text-white p-8 md:p-9 relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 dot-grid opacity-25" aria-hidden="true" />
              <div className="relative">
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-white/10 border border-white/15 text-brand-light">
                  <Navigation size={24} />
                </span>
                <h3 className="mt-5 font-display font-bold text-xl">Petunjuk Arah</h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70 leading-relaxed">
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="text-brand-light shrink-0 mt-0.5" />5 menit dari pintu tol Kebon Jeruk</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="text-brand-light shrink-0 mt-0.5" />Seberang halte TransJakarta Kebon Jeruk</li>
                  <li className="flex gap-2.5"><CheckCircle2 size={16} className="text-brand-light shrink-0 mt-0.5" />Parkir luas tersedia di basement gedung</li>
                </ul>
                <div className="mt-6 pt-5 border-t border-white/12 text-sm">
                  <p className="text-white/50">Alamat lengkap:</p>
                  <p className="mt-1 font-semibold text-white leading-relaxed">{ADDRESS}</p>
                </div>
                <a href={MAP_SRC.replace("output=embed", "")} target="_blank" rel="noreferrer" className="btn mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20">
                  Buka di Google Maps <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- FAQ ---------------------------------- */
function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative bg-mist dot-grid-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <SectionTitle
          kicker="Masih Ragu?"
          title="Pertanyaan Yang Sering Diajukan (FAQ)"
          desc="Tidak menemukan jawaban? Hubungi kami — tim CS kami siap menjawab semua pertanyaan Anda."
        />
        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className={`rounded-2xl bg-white border-2 transition-colors duration-300 shadow-md shadow-navy/5 overflow-hidden ${isOpen ? "border-brand/50" : "border-transparent"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 text-left px-6 py-5"
                  >
                    <span className={`grid place-items-center w-9 h-9 rounded-xl shrink-0 transition-colors duration-300 ${isOpen ? "bg-brand-gradient text-white" : "bg-brand/10 text-brand-dark"}`}>
                      <HelpCircle size={18} />
                    </span>
                    <span className="font-display font-semibold text-navy text-[15px] md:text-base leading-snug grow">{f.q}</span>
                    <ChevronDown size={20} className={`shrink-0 text-brand-dark transition-transform duration-400 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`acc-panel ${isOpen ? "open" : ""}`}>
                    <div className="acc-inner">
                      <p className="px-6 pb-6 pl-[4.75rem] text-sm md:text-[15px] text-slate-500 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- CTA repeat ------------------------------ */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <img src={IMG.techOutdoor} alt="Teknisi CoolMaster mengecek unit outdoor AC di dinding gedung" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/95 via-navy/85 to-brand-dark/70" />
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path className="flow-path" d="M-20 260 C 260 170, 560 350, 860 250 S 1290 180, 1460 270" stroke="#00A8E8" strokeWidth="2.5" />
        <path className="flow-path" d="M-20 340 C 280 280, 620 420, 920 330 S 1310 270, 1460 350" stroke="#7DD8FF" strokeWidth="2" style={{ animationDelay: "-1.5s" }} />
      </svg>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <Reveal>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl leading-tight">
            Siap Menikmati Ruangan <span className="text-gradient-bright">Sejuk &amp; Bebas Stres</span> Hari Ini?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 text-white/75 text-base md:text-lg max-w-xl mx-auto">
            Jangan biarkan AC rusak merusak kenyamanan dan kesehatan keluarga Anda.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink("Halo CoolMaster! Saya ingin ambil promo & pesan teknisi sekarang.")}
              target="_blank"
              rel="noreferrer"
              className="btn inline-flex items-center gap-3 rounded-full bg-coral-gradient text-white font-display font-bold px-9 py-5 text-lg md:text-xl shadow-glow-coral hover:brightness-110 hover:-translate-y-1"
            >
              <MessageCircle size={22} />
              Ambil Promo &amp; Pesan Teknisi Sekarang
            </a>
            <BtnOutline href={TEL_LINK} light>
              <Phone size={18} />
              Telepon Sekarang
            </BtnOutline>
          </div>
          <p className="mt-6 text-white/55 text-sm">Garansi 30 hari • Tanpa biaya tersembunyi • Teknisi tiba 45 menit</p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Page --------------------------------- */
export default function Contact() {
  useMeta(
    "Hubungi Kami — CoolMaster™ | Konsultasi Gratis & Respon Cepat",
    "Hubungi CoolMaster™ untuk konsultasi gratis jasa servis AC & HVAC. Melayani Jabodetabek, respon cepat via WhatsApp, telepon & email."
  );
  return (
    <>
      <PageHero title="Hubungi Kami" subtitle="Kami siap membantu Anda setiap hari. Konsultasi gratis tanpa komitmen." crumb="Kontak" />
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-start">
            <Reveal variant="left">
              <InfoColumn />
            </Reveal>
            <Reveal variant="right" delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
      <MapSection />
      <FaqSection />
      <FinalCTA />
    </>
  );
}
