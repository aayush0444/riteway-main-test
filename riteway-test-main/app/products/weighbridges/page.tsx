import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Clock,
  TrendingDown,
  Wrench,
  BarChart3,
  Mail,
  Monitor,
  Wifi,
} from "lucide-react";

// ─── Shared ───────────────────────────────────────────────────────────────────

const WA_BASE = "https://wa.me/919877541199?text=";

function waLink(product: string) {
  return `${WA_BASE}${encodeURIComponent(
    `Hello Rite-Way, I am interested in the ${product}. Please advise on specifications and pricing.`
  )}`;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-[#DC2626] font-semibold mb-3"
      style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}
    >
      {children}
    </span>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor"
      />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PLATFORM_CARDS = [
  {
    id: "concrete-platform",
    badge: "Most Popular",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    accentColor: "#1E3A5F",
    gradientFrom: "#1E3A5F",
    gradientTo: "#2d5a8e",
    patternOpacity: 0.12,
    title: "Concrete Platform",
    subtitle: "Pit Type",
    href: "/products/weighbridges/concrete-platform",
    tag: "Concrete · Pit Type",
    desc: "Rigid monolithic RCC structure, flush with ground level. Zero maintenance, 100-year lifespan. The most accurate and cost-effective weighbridge platform available.",
    specs: [
      "40T to 200T capacity",
      "Flush with ground — no ramps",
      "Zero rust, zero maintenance",
      "Immune to lightning & static",
    ],
  },
  {
    id: "concrete-pitless",
    badge: "Recommended",
    badgeColor: "bg-blue-100 text-[#1E3A5F] border-blue-200",
    accentColor: "#1E3A5F",
    gradientFrom: "#163050",
    gradientTo: "#1E3A5F",
    patternOpacity: 0.10,
    title: "Concrete Platform",
    subtitle: "Pitless / Surface Type",
    href: "/products/weighbridges/concrete-platform",
    tag: "Concrete · Pitless",
    desc: "Concrete deck installed above ground with approach ramps. No excavation required — ideal where digging is difficult or expensive. Same 100-year lifespan.",
    specs: [
      "40T to 200T capacity",
      "No excavation needed",
      "Approach ramps on both sides",
      "Easy to clean and maintain",
    ],
  },
  {
    id: "steel-platform",
    badge: null,
    badgeColor: "",
    accentColor: "#555",
    gradientFrom: "#374151",
    gradientTo: "#4b5563",
    patternOpacity: 0.10,
    title: "Steel Platform",
    subtitle: "Pit Type",
    href: "/products/weighbridges/steel-platform",
    tag: "Steel · Pit Type",
    desc: "Fabricated steel deck, pit-type installation flush with the ground. Anti-skid diamond plate surface. Standard option for sites with specific structural requirements.",
    specs: [
      "40T to 150T capacity",
      "Flush with ground — no ramps",
      "Anti-skid diamond plate surface",
      "Fabricated and delivered ready",
    ],
  },
  {
    id: "steel-pitless",
    badge: null,
    badgeColor: "",
    accentColor: "#555",
    gradientFrom: "#2d3748",
    gradientTo: "#374151",
    patternOpacity: 0.10,
    title: "Steel Platform",
    subtitle: "Pitless / Surface Type",
    href: "/products/weighbridges/steel-platform",
    tag: "Steel · Pitless",
    desc: "Steel deck above ground with approach ramps. No excavation — quicker installation timeline. Suitable for temporary or semi-permanent installations.",
    specs: [
      "40T to 150T capacity",
      "No excavation — faster install",
      "Approach ramps included",
      "Anti-skid diamond plate",
    ],
  },
];

// ─── FIXED: AND 4500 renamed to IIT 4500 everywhere; GLCD + TFT variants added ─

const TERMINAL_CARDS = [
  {
    icon: BarChart3,
    title: "IIT 4500 Dual Terminal",
    href: "/products/weighbridges/and4500-dual",
    desc: "Control two weighbridges simultaneously with a single indicator and one operator room. 32-bit ARM processor, 1 lakh record memory, USB export, SMS facility, and built-in Mandi application.",
    highlights: ["Controls 2 weighbridges", "100,000 record memory", "Mandi app built-in", "SMS + USB export"],
  },
  {
    icon: Mail,
    title: "IIT 4500 Standard Terminal",
    href: "/products/weighbridges/and4500-email",
    desc: "Automatically emails Excel weighment reports to up to 5 email IDs via integrated GSM modem. No LAN or internet at the weighbridge site required. Pre-printed stationery support.",
    highlights: ["Auto Excel email reports", "Up to 5 email recipients", "GSM modem built-in", "No internet at site needed"],
  },
  {
    icon: Monitor,
    title: "IIT 4500 with GLCD Display",
    href: "/products/weighbridges/iit4500-glcd",
    desc: "IIT 4500 terminal with Graphical LCD upgrade — larger weight characters, full weighment ticket visible on screen in one view, and 11 Indian language headers for local language ticket printing.",
    highlights: ["Large weight characters", "Full ticket view on screen", "11 Indian language headers", "All IIT 4500 features retained"],
  },
  {
    icon: Monitor,
    title: "IIT 4500 with TFT Display",
    href: "/products/weighbridges/iit4500-tft",
    desc: "IIT 4500 terminal with 7-inch full-colour TFT touchscreen. High-visibility display with touch operation, live vehicle images, and complete weighment management on a single screen.",
    highlights: ["7\" full-colour TFT screen", "Touch operation", "Live vehicle image capture", "All IIT 4500 features retained"],
  },
];

const SIZES = [
  { size: "5 × 3 m",   capacity: "40T",  note: "" },
  { size: "7.5 × 3 m", capacity: "60T",  note: "" },
  { size: "9 × 3 m",   capacity: "80T",  note: "" },
  { size: "12 × 3 m",  capacity: "80T",  note: "" },
  { size: "14 × 3 m",  capacity: "100T", note: "" },
  { size: "15 × 3 m",  capacity: "100T", note: "" },
  { size: "16 × 3 m",  capacity: "100T", note: "" },
  { size: "18 × 3 m",  capacity: "150T", note: "" },
  { size: "24 × 3 m",  capacity: "200T", note: "Largest standard size" },
];

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      <div className="absolute inset-0">
        <img
          src="/images/products/weighbridges/pit-concrete-weighbridge.jpeg"
          alt="Rite-Way weighbridge installation — Mohali, Punjab"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#1E3A5F]/70 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626] z-10" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="flex items-center gap-2 text-xs text-white/50 mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <span className="text-white/90 font-medium">Weighbridges</span>
        </div>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#DC2626]" />
            <span className="text-white/60 font-semibold" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>Heavy Industrial · 40T to 200T</span>
          </div>
          <h1
            className="text-white font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            Industrial Weighbridges
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            40T to 200T capacity. Pit type and pitless. Concrete and steel deck.
            ISO 9001:2015 certified. Installed, calibrated, and verified on-site
            across all of North India by Rite-Way since 2004.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-red-700 transition-colors"
            >
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <a
              href={waLink("a Weighbridge")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-green-500 transition-colors"
            >
              <WhatsAppIcon /> WhatsApp Us
            </a>
            <Link
              href="/why-concrete"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-sm hover:border-white hover:bg-white/10 transition-colors"
            >
              Why Concrete?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Product Cards ─────────────────────────────────────────────────────────

const CARD_PHOTOS: Record<string, string> = {
  "concrete-platform": "/images/products/weighbridges/pit-concrete-weighbridge.jpeg",
  "concrete-pitless":  "/images/products/weighbridges/pitless-weighbridge.jpeg",
  "steel-platform":    "/images/products/weighbridges/pit-steel-weighbridge.jpeg",
  "steel-pitless":     "/images/products/weighbridges/pitless-steel-weighbridge.jpeg",
};

function ProductCards() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Four Configurations Available</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Choose Your Platform &amp; Installation Type
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every weighbridge is available in concrete or steel deck, and in pit type
            or pitless installation — four combinations to match any site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PLATFORM_CARDS.map((card) => (
            <div
              key={card.id}
              className="border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-all duration-200 group bg-white flex flex-col"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
            >
              <img
                src={CARD_PHOTOS[card.id]}
                alt={`Rite-Way ${card.title} — ${card.subtitle}`}
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  {card.badge && (
                    <span className={`text-[0.6rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  )}
                  <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-gray-400">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-[#111827] font-bold text-lg leading-snug mb-1">
                  {card.title}
                </h3>
                <p className="text-[#1E3A5F] font-semibold text-sm mb-3">{card.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{card.desc}</p>

                <ul className="space-y-1.5 mb-6">
                  {card.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={13} className="text-green-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex gap-3">
                  <Link
                    href={card.href}
                    className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 text-[#111827] text-xs font-semibold py-2.5 rounded-sm hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition-colors"
                  >
                    View Details <ArrowRight size={12} />
                  </Link>
                  <a
                    href={waLink(`${card.title} — ${card.subtitle}`)}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold py-2.5 rounded-sm hover:bg-green-500 transition-colors"
                  >
                    <WhatsAppIcon /> Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Quick Comparison Strip ────────────────────────────────────────────────

function ComparisonStrip() {
  const points = [
    {
      icon: TrendingDown,
      metric: "40% Lower Cost",
      label: "Material & Installation",
      concrete: "Concrete material + zero transport",
      steel: "Steel fabrication + heavy haulage",
    },
    {
      icon: Clock,
      metric: "100 vs 15 Years",
      label: "Platform Lifespan",
      concrete: "RCC lasts a century",
      steel: "Steel bends & rusts in 10–15 yrs",
    },
    {
      icon: Wrench,
      metric: "Zero vs Annual",
      label: "Maintenance Required",
      concrete: "No rust, no bolts, no painting",
      steel: "Paint, bolt-tighten, strip re-weld",
    },
  ];

  return (
    <section className="bg-gray-50 border-y border-gray-100 py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <SectionLabel>Concrete vs Steel</SectionLabel>
            <h2 className="text-[#111827] font-bold text-2xl leading-tight tracking-tight">
              Why Most Customers Choose Concrete
            </h2>
          </div>
          <Link
            href="/why-concrete"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors group"
          >
            Full comparison <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {points.map(({ icon: Icon, metric, label, concrete, steel }) => (
            <div
              key={metric}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              <div className="h-1 bg-[#1E3A5F]" />
              <div className="p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-sm bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="text-[#111827] font-bold text-sm leading-snug">{metric}</p>
                    <p className="text-gray-400 text-xs">{label}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs">
                    <CheckCircle2 size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-green-700 font-medium">Concrete: {concrete}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs">
                    <XCircle size={12} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">Steel: {steel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Terminals & Systems ───────────────────────────────────────────────────

function TerminalsSection() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Smart Terminals & Systems</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Advanced Control &amp; Reporting
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every Rite-Way weighbridge can be paired with intelligent IIT 4500 terminals
            for dual-platform control, automated email reporting, enhanced display options,
            or cloud-based fleet monitoring.
          </p>
        </div>

        {/* CHANGED: grid-cols-3 → grid-cols-2 lg:grid-cols-4 to fit all 4 terminal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TERMINAL_CARDS.map(({ icon: Icon, title, href, desc, highlights }) => (
            <div
              key={title}
              className="border border-gray-100 rounded-sm p-6 hover:shadow-md transition-shadow duration-200 flex flex-col group"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] flex items-center justify-center mb-5 group-hover:bg-[#DC2626] transition-colors duration-200">
                <Icon size={17} className="text-white" />
              </div>
              <h3 className="text-[#111827] font-bold text-sm mb-3 leading-snug">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-5 flex-1">{desc}</p>
              <ul className="space-y-1.5 mb-6">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                    <Zap size={11} className="text-[#DC2626] flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors group/link"
              >
                View Details <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Size Specification Table ──────────────────────────────────────────────

function SizeTable() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Standard Sizes</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Weighbridge Size &amp; Capacity Chart
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            All 9 standard platform sizes are available in both concrete and steel
            deck, and in pit type or pitless installation.
          </p>
        </div>

        <div
          className="border border-gray-200 rounded-sm overflow-hidden max-w-3xl"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
        >
          <div className="grid grid-cols-4 bg-[#1E3A5F]">
            {["#", "Platform Size", "Capacity", "Installation"].map((h) => (
              <div key={h} className="px-5 py-3.5">
                <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{h}</span>
              </div>
            ))}
          </div>

          {SIZES.map(({ size, capacity, note }, i) => (
            <div
              key={size}
              className={`grid grid-cols-4 border-b border-gray-100 last:border-b-0 hover:bg-white transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
              }`}
            >
              <div className="px-5 py-4 flex items-center">
                <span className="text-gray-400 font-bold text-xs tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="px-5 py-4 flex items-center">
                <span className="text-[#111827] font-semibold text-sm">{size}</span>
              </div>
              <div className="px-5 py-4 flex items-center">
                <span className="text-[#DC2626] font-bold text-sm">{capacity}</span>
              </div>
              <div className="px-5 py-4 flex items-center gap-2">
                <CheckCircle2 size={12} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-500 text-xs">
                  {note || "Pit & Pitless"}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-5 max-w-3xl">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <CheckCircle2 size={12} className="text-green-500" />
            All sizes available in concrete &amp; steel deck
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <CheckCircle2 size={12} className="text-green-500" />
            Custom sizes on request
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <CheckCircle2 size={12} className="text-green-500" />
            Capacity upgradeable (concrete) without structural change
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. CTA Banner ───────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p
            className="text-white/50 font-semibold mb-3"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Free Expert Consultation
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Get Expert Advice on Your Weighbridge
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Not sure whether to go concrete or steel, pit type or pitless? Our engineers
            will assess your site, load requirements, and budget — and recommend the
            exact configuration that works best. No obligation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={waLink("a Weighbridge")}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors"
            >
              <WhatsAppIcon /> WhatsApp Our Team
            </a>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors"
            >
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link
              href="/why-concrete"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors"
            >
              Why Concrete?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WeighbridgesPage() {
  return (
    <>
      <Hero />
      <ProductCards />
      <ComparisonStrip />
      <TerminalsSection />
      <SizeTable />
      <CTABanner />
    </>
  );
}