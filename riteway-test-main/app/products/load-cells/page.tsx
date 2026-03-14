import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Wrench,
  Battery,
  Monitor,
  Box,
  Scale,
  AlertTriangle,
} from "lucide-react";

const WA_BASE = "https://wa.me/919877541199?text=";

function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z" fill="currentColor" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#DC2626] font-semibold mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>{children}</span>
  );
}

// ─── Product Data ─────────────────────────────────────────────────────────────

const PRODUCTS = [
  {
    icon: Zap,
    name: "Minebea MTC 30T Load Cell",
    model: "Model MTC 30T",
    badge: "Made in India",
    badgeClass: "text-orange-700 bg-orange-50 border-orange-100",
    gradientFrom: "#1E3A5F",
    gradientTo: "#2d5a8e",
    photo: "/images/products/loadcells/cup-ball-loadcell.png",
    desc: "Precision load cell transducer manufactured under the Minebea brand. Digital output for maximum signal accuracy over long cable runs. Engineered and tested for all Rite-Way weighbridge configurations.",
    specs: [
      { label: "Model",         value: "MTC 30T" },
      { label: "Output",        value: "Digital" },
      { label: "Capacities",    value: "Multiple — on request" },
      { label: "Origin",        value: "Made in India" },
      { label: "Compatibility", value: "All Rite-Way Weighbridges" },
    ],
    highlights: ["Digital output — immune to cable noise", "Compatible with all Rite-Way systems", "Multiple capacity options available", "Manufactured under Minebea brand"],
    waMsg: "Hello Rite-Way, I need Minebea MTC load cells for my weighbridge. Please advise on capacity and pricing.",
  },
  {
    icon: Box,
    name: "Junction Box",
    model: "4-Channel Summing",
    badge: "Weatherproof",
    badgeClass: "text-blue-700 bg-blue-50 border-blue-100",
    gradientFrom: "#374151",
    gradientTo: "#4b5563",
    desc: "4-channel load cell summing junction box for combining signals from multiple load cells into a single output to the indicator. Weatherproof enclosure rated for outdoor and harsh industrial installation environments.",
    specs: [
      { label: "Channels",      value: "4-channel load cell input" },
      { label: "Enclosure",     value: "Weatherproof, IP-rated" },
      { label: "Wiring",        value: "Easy field wiring" },
      { label: "Output",        value: "Single combined signal" },
      { label: "Compatibility", value: "All Rite-Way Weighbridges" },
    ],
    highlights: ["Weatherproof IP-rated enclosure", "Easy field wiring — no specialist tools", "4-channel summing for 4-load-cell configs", "Durable for outdoor installation"],
    waMsg: "Hello Rite-Way, I need a junction box for my weighbridge load cells. Please advise.",
  },
  {
    icon: Monitor,
    name: "Intelligent Terminal",
    model: "Alfa Numeric Digitizer",
    badge: "Remote Display",
    badgeClass: "text-green-700 bg-green-50 border-green-100",
    gradientFrom: "#14532d",
    gradientTo: "#166534",
    desc: "Large LED remote display unit for showing weight readings at a distance from the main indicator. Ideal for busy weighbridge sites where the truck driver, operator, and supervisor all need to see the reading simultaneously.",
    specs: [
      { label: "Display",       value: "Large LED, alpha-numeric" },
      { label: "Visibility",    value: "High visibility at distance" },
      { label: "Function",      value: "Remote weight display" },
      { label: "Ideal for",     value: "Busy weighbridge sites" },
      { label: "Compatibility", value: "All Rite-Way Terminals" },
    ],
    highlights: ["Large LED digits visible from the truck cab", "Alpha-numeric display for messages", "Ideal for high-traffic weighbridge gates", "Reduces operator communication errors"],
    waMsg: "Hello Rite-Way, I need an intelligent terminal remote display for my weighbridge. Please advise.",
  },
  {
    icon: Battery,
    name: "Batteries",
    model: "Sealed Lead Acid",
    badge: "10hr+ Backup",
    badgeClass: "text-purple-700 bg-purple-50 border-purple-100",
    gradientFrom: "#581c87",
    gradientTo: "#7e22ce",
    desc: "Sealed lead acid batteries for Rite-Way indicators and terminals. Multiple capacity options to match your usage pattern and required backup time. Maintenance-free sealed design with no electrolyte topping required.",
    specs: [
      { label: "Type",          value: "Sealed Lead Acid (SLA)" },
      { label: "Backup",        value: "10 hours and above" },
      { label: "Maintenance",   value: "Maintenance-free sealed" },
      { label: "Capacities",    value: "Various — on request" },
      { label: "Compatibility", value: "All Rite-Way Terminals" },
    ],
    highlights: ["Maintenance-free sealed design", "10hr+ backup on standard configurations", "Multiple capacity options available", "Compatible with all Rite-Way terminals"],
    waMsg: "Hello Rite-Way, I need replacement batteries for my Rite-Way terminal. Please advise on the right model.",
  },
];

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.4 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, white 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7 flex-wrap">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link><span>/</span>
          <Link href="/products" className="hover:text-[#111827] transition-colors">Products</Link><span>/</span>
          <span className="text-[#111827] font-medium">Load Cells &amp; Accessories</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-orange-700 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-full">🇮🇳 Made in India</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />Genuine Spares
            </span>
          </div>
          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Load Cells &amp; Accessories
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Genuine Minebea load cells, junction boxes, intelligent terminals, and batteries. All spares are tested and confirmed compatible with Rite-Way weighbridge systems before dispatch.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I need spare parts or accessories for my weighbridge. Please advise on availability and pricing.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
              <WAIcon /> WhatsApp for Spares
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Products Grid ─────────────────────────────────────────────────────────

function ProductsGrid() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Spare Parts & Accessories</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Genuine Rite-Way Spares</h2>
          <p className="text-gray-500 text-base leading-relaxed">Only genuine parts ensure your weighbridge maintains calibration accuracy and Legal Metrology validity after servicing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRODUCTS.map(({ icon: Icon, name, model, badge, badgeClass, gradientFrom, gradientTo, photo, desc, specs, highlights, waMsg }) => (
            <div key={name}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-200 group"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              {/* Header — real photo if available, else gradient */}
              {photo ? (
                <div className="h-36 relative overflow-hidden">
                  <img
                    src={photo}
                    alt={`Rite-Way ${name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-36 relative overflow-hidden flex items-end"
                  style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}>
                  <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.07) 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <Icon size={64} className="text-white" />
                  </div>
                  <div className="relative px-4 pb-3 z-10">
                    <p className="text-white/50 text-[0.55rem] font-bold uppercase tracking-widest mb-0.5">{model}</p>
                    <p className="text-white font-bold text-sm leading-snug">{name}</p>
                  </div>
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                <span className={`inline-block text-[0.55rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border mb-3 ${badgeClass}`}>{badge}</span>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{desc}</p>

                {/* Spec mini-table */}
                <div className="border border-gray-100 rounded-sm overflow-hidden mb-4">
                  {specs.map(({ label, value }, si) => (
                    <div key={label} className={`flex items-center justify-between px-3 py-2 text-xs ${si % 2 === 0 ? "bg-gray-50/70" : "bg-white"} ${si < specs.length - 1 ? "border-b border-gray-100" : ""}`}>
                      <span className="text-gray-400 font-medium flex-shrink-0">{label}</span>
                      <span className="text-[#111827] font-semibold text-right ml-2">{value}</span>
                    </div>
                  ))}
                </div>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-1.5 text-[0.65rem] text-gray-600">
                      <CheckCircle2 size={10} className="text-green-500 flex-shrink-0 mt-0.5" />{h}
                    </li>
                  ))}
                </ul>

                <a href={`${WA_BASE}${encodeURIComponent(waMsg)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-sm hover:bg-green-500 transition-colors w-full">
                  <WAIcon size={12} /> WhatsApp for Price
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Why Genuine Spares ────────────────────────────────────────────────────

function WhyGenuineSpares() {
  const reasons = [
    {
      icon: Scale,
      title: "Calibrated & Matched to Your System",
      desc: "Genuine Rite-Way load cells are supplied pre-calibrated and matched to the output characteristics of your existing system. Third-party load cells may require full recalibration of all cells and can introduce accuracy drift.",
      warning: "Non-genuine load cells can void your Legal Metrology stamp.",
    },
    {
      icon: Shield,
      title: "Warranty Protected",
      desc: "Installing genuine spares keeps your equipment under the original warranty and ensures ISO 9001:2015 quality trail is maintained. Third-party parts break the documented quality chain and can void warranty.",
      warning: "Only genuine spares maintain warranty validity.",
    },
    {
      icon: Wrench,
      title: "Installed by Trained Engineers",
      desc: "We don't just supply spares — our trained engineers install them, re-calibrate the system, and obtain a fresh Legal Metrology stamp where required. Your weighbridge is fully compliant after every service.",
      warning: "Legal Metrology re-verification required after load cell replacement.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Why It Matters</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Why Genuine Spares Matter</h2>
          <p className="text-gray-500 text-base leading-relaxed">Using non-genuine parts on a Legal Metrology stamped weighbridge is not just a technical risk — it's a compliance risk.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc, warning }) => (
            <div key={title} className="border border-gray-100 rounded-sm p-7 hover:shadow-md transition-all group" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-11 h-11 rounded-sm bg-[#1E3A5F] group-hover:bg-[#DC2626] flex items-center justify-center mb-5 transition-colors">
                <Icon size={19} className="text-white" />
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-sm px-3 py-2.5">
                <AlertTriangle size={12} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-amber-700 text-xs font-medium leading-relaxed">{warning}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Compatible With ───────────────────────────────────────────────────────

function CompatibleWith() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-8">
          <SectionLabel>Weighbridge Compatibility</SectionLabel>
          <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">Compatible With All Rite-Way Weighbridges</h2>
          <p className="text-gray-500 text-sm leading-relaxed">These accessories are designed and tested for use with both our concrete and steel platform weighbridges.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {[
            {
              name: "Concrete Platform Weighbridge",
              href: "/products/weighbridges/concrete-platform",
              desc: "Our #1 product. 100-year lifespan. 40T–200T. Zero rust, zero maintenance.",
              cap: "40T – 200T",
              color: "#1E3A5F",
            },
            {
              name: "Steel Platform Weighbridge",
              href: "/products/weighbridges/steel-platform",
              desc: "Surface type and pit type. 40T–150T. Anti-skid diamond plate surface.",
              cap: "40T – 150T",
              color: "#374151",
            },
          ].map(({ name, href, desc, cap, color }) => (
            <Link key={name} href={href}
              className="group bg-white border border-gray-100 rounded-sm p-5 hover:shadow-md transition-all"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
                  <Scale size={15} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="text-[#111827] font-bold text-sm group-hover:text-[#DC2626] transition-colors">{name}</p>
                    <span className="text-[0.55rem] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded-full">{cap}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors">
                View weighbridge <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. CTA Banner ───────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Fast Spare Delivery</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Need a Spare Part or Accessory?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Tell us your weighbridge model and the part you need — we'll confirm availability and dispatch it to you. Engineer installation available across North India.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I need a spare part for my weighbridge system. Please advise on availability.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp for Spares
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products/weighbridges"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              View Weighbridges
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LoadCellsPage() {
  return (
    <>
      <Hero />
      <ProductsGrid />
      <WhyGenuineSpares />
      <CompatibleWith />
      <CTABanner />
    </>
  );
}