import { ArrowUp, MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "../data/site";
import { useScrolled } from "../hooks";

/** Floating WhatsApp button + Back-to-top — tampil di semua halaman. */
export default function Floaters() {
  const scrolled = useScrolled(500);
  return (
    <>
      {/* WhatsApp */}
      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat WhatsApp CoolMaster"
        className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
      >
        <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-[220px] transition-all duration-500">
          <span className="block whitespace-nowrap bg-white text-navy text-sm font-semibold px-4 py-2.5 rounded-full shadow-xl border border-slate-100">
            Butuh bantuan? Chat kami
          </span>
        </span>
        <span className="relative grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/40 transition-transform duration-300 group-hover:scale-110 animate-pulse-ring-green">
          <MessageCircle size={26} fill="currentColor" className="text-white" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-coral border-2 border-white" />
        </span>
      </a>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Kembali ke atas"
        className={`fixed bottom-5 left-5 z-50 grid place-items-center w-12 h-12 rounded-full bg-navy text-white shadow-xl shadow-navy/30 transition-all duration-500 hover:bg-brand-dark ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
