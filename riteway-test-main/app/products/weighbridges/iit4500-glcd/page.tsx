import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Monitor,
  Globe,
  Eye,
  FileText,
  Truck,
  Layers,
  LayoutGrid,
} from "lucide-react";

const WA_HREF =
  "https://wa.me/919877541199?text=" +
  encodeURIComponent("Hello Rite-Way, I am interested in the IIT 4500 with GLCD Display upgrade. Please advise on specifications and pricing.");

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#DC2626] font-semibold mb-3"
      style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor" />
    </svg>
  );
}

// ─── Data from AND_GLCD_Brochure.docx ────────────────────────────────────────

const GLCD_FEATURES = [
  {
    icon: Eye,
    label: "Large Weight Characters",
    desc: "Weight digits are significantly larger on the GLCD than on the standard 16×2 LCD — better readability from a distance and in bright daylight.",
  },
  {
    icon: FileText,
    label: "Full Ticket View on Screen",
    desc: "View the complete weighment ticket on the LCD in a single screen. All data entered in a weighment — vehicle, commodity, weight, operator — visible at once without scrolling.",
  },
  {
    icon: Globe,
    label: "11 Indian Language Headers",
    desc: "11 factory-set weighment headers available in Indian regional languages: Hindi, Gujarati, Punjabi, Bengali, and more. Print tickets in the local language of your site.",
  },
  {
    icon: Monitor,
    label: "All IIT 4500 Features Included",
    desc: "The GLCD variant retains all standard IIT 4500 features — 1 lakh records, Mandi app, USB export, SMS, pre-printed stationery — with the enhanced display added on top.",
  },
];

const LANGUAGES = [
  "Hindi", "Gujarati", "Punjabi", "Bengali", "Marathi",
  "Tamil", "Telugu", "Kannada", "Malayalam", "Odia", "Urdu",
];

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-[#1E3A5F] overflow-hidden border-b border-gray-100">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-7 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link><span>/</span>
          <Link href="/products/weighbridges" className="hover:text-white transition-colors">Weighbridges</Link><span>/</span>
          <span className="text-white/90 font-medium">IIT 4500 GLCD Display</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">Graphical LCD Upgrade</span>
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">IIT 4500 Variant</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
          </div>
          <h1 className="text-white font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            IIT 4500 with Graphical LCD Display
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
            The IIT 4500 terminal with a Graphical LCD upgrade — larger weight characters,
            full weighment ticket visible on screen in one view, and 11 Indian language
            headers for local language ticket printing. All standard IIT 4500 features retained.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
              <WAIcon /> WhatsApp Get Quote
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Highlights Row ────────────────────────────────────────────────────────

function HighlightsRow() {
  const stats = [
    { icon: Eye,     value: "Large",    label: "Weight Display",    sub: "Better readability" },
    { icon: FileText, value: "Full",    label: "Ticket on Screen",  sub: "All data in one view" },
    { icon: Globe,   value: "11",       label: "Indian Languages",  sub: "Factory-set headers" },
    { icon: Monitor, value: "IIT 4500", label: "All Features",      sub: "Nothing removed" },
  ];
  return (
    <section className="bg-[#1E3A5F] border-b-4 border-[#DC2626]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <div key={label} className={`flex items-start gap-4 ${i < stats.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-6" : ""}`}>
              <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={16} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-xl leading-none mb-1">{value}</p>
                <p className="text-white/80 text-xs font-semibold mb-0.5">{label}</p>
                <p className="text-white/40 text-[0.65rem]">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. GLCD Features ────────────────────────────────────────────────────────

function GLCDFeatures() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>GLCD Upgrade Features</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            What the Graphical LCD Adds
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            The GLCD upgrade replaces the standard 16×2 character LCD with a
            graphical display — three practical improvements for your weighbridge operator.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {GLCD_FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-gray-100 rounded-sm p-7 hover:shadow-md transition-all group"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <div className="w-11 h-11 rounded-sm bg-gray-50 group-hover:bg-purple-50 flex items-center justify-center mb-5 transition-colors">
                <Icon size={20} className="text-[#1E3A5F] group-hover:text-purple-700 transition-colors" />
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-3">{label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Language Headers ─────────────────────────────────────────────────────

function LanguageHeaders() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Indian Language Support</SectionLabel>
            <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              11 Indian Language Headers — Factory Set
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Print weighment tickets with headers in the local language of your site.
              No configuration required — headers are factory pre-set. Particularly useful
              for mandis, government procurement sites, and multi-state operations.
            </p>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> Ask About Language Options
            </a>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-3">
              {LANGUAGES.map((lang) => (
                <div key={lang}
                  className="bg-white border border-gray-100 rounded-sm px-4 py-3 text-center hover:border-purple-200 hover:shadow-sm transition-all"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                  <p className="text-[#111827] font-semibold text-sm">{lang}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-3 text-center">
              All 11 languages are factory-set — no additional configuration required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 5. What's Retained ──────────────────────────────────────────────────────

function StandardFeaturesRetained() {
  const retained = [
    "32-bit ARM processor, 50 MHz",
    "1 lakh (100,000) record memory",
    "USB pen drive export in .xls format",
    "SMS facility in 3 modes",
    "Mandi application: Rate, Amount, deductions",
    "Pre-printed stationery support",
    "Isolated RS-232 for GSM modem / weight transfer",
    "Centronics port for 80-column dot matrix printer",
    "Remote display port: ½\", 1\", 2.3\", 4\" LED",
    "0°C to 55°C operating temperature",
    "Two-level access: Installation + Weighbridge privileges",
    "Automatic fault diagnosis per load cell",
  ];
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Standard Features Retained</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Everything from IIT 4500 — Plus Better Display
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            The GLCD variant is the same IIT 4500 terminal with an upgraded display.
            No features are removed. No extra cost for support or spares.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl">
          {retained.map((f) => (
            <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle2 size={13} className="text-green-500 flex-shrink-0 mt-0.5" />{f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Also Consider ────────────────────────────────────────────────────────

function AlsoConsider() {
  const variants = [
    { title: "IIT 4500 Standard Terminal", sub: "Standard 16×2 LCD display", href: "/products/weighbridges/and4500-email", color: "#1E3A5F" },
    { title: "IIT 4500 Dual Platform",     sub: "Control two weighbridges",   href: "/products/weighbridges/and4500-dual", color: "#374151" },
    { title: "IIT 4500 with TFT Display",  sub: "7\" full-colour TFT screen",  href: "/products/weighbridges/iit4500-tft",  color: "#0369a1" },
  ];
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Other IIT 4500 Variants</SectionLabel>
          <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">Also Available</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          {variants.map(({ title, sub, href, color }) => (
            <Link key={title} href={href}
              className="group bg-white border border-gray-100 rounded-sm p-5 hover:shadow-md transition-all"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-9 h-9 rounded-sm flex items-center justify-center mb-3" style={{ backgroundColor: color }}>
                <Monitor size={15} className="text-white" />
              </div>
              <p className="text-[#111827] font-bold text-sm mb-1 group-hover:text-[#DC2626] transition-colors">{title}</p>
              <p className="text-gray-500 text-xs">{sub}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors">
                View <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. CTA Banner ───────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            GLCD Display Upgrade
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Want Better Visibility and Local Language Tickets?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            The GLCD upgrade is available on new IIT 4500 orders. WhatsApp us and
            we'll confirm availability and pricing for your site.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp Our Team
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products/weighbridges"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              All Weighbridges
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IIT4500GLCDPage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <GLCDFeatures />
      <LanguageHeaders />
      <StandardFeaturesRetained />
      <AlsoConsider />
      <CTABanner />
    </>
  );
}