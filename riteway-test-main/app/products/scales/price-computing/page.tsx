import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Calculator,
  ShoppingBag,
  Wheat,
  Store,
  Package,
  Scale,
  Monitor,
  Tag,
  MemoryStick,
  Zap,
  Shield,
  Activity,
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
    <span className="inline-block text-[#DC2626] font-semibold mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

// ─── Specs & Features Data ────────────────────────────────────────────────────

const SPECS = [
  { label: "Capacity",        value: "30 kg" },
  { label: "Accuracy",        value: "2g – 5g" },
  { label: "Platter Size",    value: "250 × 300 mm" },
  { label: "Displays",        value: "3 — Weight + Unit Price + Total Price" },
  { label: "Memory Prices",   value: "15 direct memory keys" },
  { label: "Piece Count",     value: "Optional" },
  { label: "Tare Range",      value: "Full capacity tare" },
  { label: "Calibration",     value: "Auto calibration" },
  { label: "Body Material",   value: "Stainless Steel" },
];

const FEATURES = [
  {
    icon: Monitor,
    label: "3 Simultaneous Displays",
    desc: "Weight, unit price, and total price shown at the same time — no mental calculation, no disputes at the counter.",
  },
  {
    icon: MemoryStick,
    label: "15 Direct Memory Keys",
    desc: "Store 15 product prices in one-touch memory keys — one press recalls the rate for your most common goods.",
  },
  {
    icon: Tag,
    label: "Full Tare Range",
    desc: "Zero out any container across the full capacity range — weigh goods in bags, trays, or boxes without error.",
  },
  {
    icon: Zap,
    label: "Auto Calibration",
    desc: "Built-in auto calibration keeps the scale accurate without specialist tools — quick and easy to set up.",
  },
  {
    icon: Activity,
    label: "Piece Count Function",
    desc: "Optional piece counting mode — count identical items by weight for fast batch packing and dispatch.",
  },
  {
    icon: Shield,
    label: "Stainless Steel Body",
    desc: "Hygienic SS body withstands daily cleaning in wet market and food retail environments.",
  },
];

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.4 }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, white 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7 flex-wrap">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link><span>/</span>
          <Link href="/products" className="hover:text-[#111827] transition-colors">Products</Link><span>/</span>
          <Link href="/products/scales" className="hover:text-[#111827] transition-colors">Scales</Link><span>/</span>
          <span className="text-[#111827] font-medium">Price Computing Scale</span>
        </nav>

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              Retail &amp; Mandi
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">
              🇮🇳 Made in India
            </span>
          </div>

          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            SS Price Computing Scale
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Three simultaneous displays — weight, unit price, and total price — calculated instantly.
            15 direct memory keys for your most common rates. Stainless steel body. Full tare range.
            Built for grain mandis, wet markets, retail counters, and wholesale trade.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am interested in the SS Price Computing Scale. Please advise on pricing and availability.")}`}
              target="_blank" rel="noopener noreferrer"
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
    { icon: Scale,      value: "30 kg",    label: "Capacity",          sub: "2g – 5g accuracy" },
    { icon: Monitor,    value: "3",        label: "Simultaneous Displays", sub: "Weight + Rate + Total" },
    { icon: MemoryStick, value: "15",      label: "Memory Prices",     sub: "One-touch recall" },
    { icon: Tag,        value: "Full",     label: "Tare Range",        sub: "Any container" },
  ];
  return (
    <section className="bg-[#1E3A5F]">
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

// ─── 3. Product Photo + Specs ─────────────────────────────────────────────────

function ProductPhotoAndSpecs() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Photo */}
          <div>
            <img
              src="/images/products/scales/price-computing-scale.png"
              alt="Rite-Way SS Price Computing Scale — 3-display retail weighing scale"
              className="w-full rounded-sm object-cover border border-gray-100"
              style={{ aspectRatio: "4/3", boxShadow: "0 2px 20px rgba(0,0,0,0.07)" }}
            />
            <p className="text-xs text-gray-400 mt-2 text-center">
              Rite-Way SS Price Computing Scale — retail counter, mandi, and wholesale use
            </p>
          </div>

          {/* Specs table */}
          <div>
            <SectionLabel>Technical Specifications</SectionLabel>
            <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-6">
              Full Specifications
            </h2>
            <div className="border border-gray-200 rounded-sm overflow-hidden" style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              {SPECS.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`flex items-center justify-between px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/80"} ${i < SPECS.length - 1 ? "border-b border-gray-100" : ""}`}>
                  <span className="text-gray-500 text-sm font-medium">{label}</span>
                  <span className="text-[#111827] text-sm font-bold text-right ml-6">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <a
                href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am interested in the SS Price Computing Scale. Please advise on pricing and availability.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors w-full justify-center">
                <WAIcon size={16} /> WhatsApp for Price &amp; Availability
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── 4. How the 3 Displays Work ───────────────────────────────────────────────

function ThreeDisplayExplainer() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>The Core Feature</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Three Displays. One Scale.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            The price computing scale eliminates manual calculation entirely. Place the goods,
            set the rate — weight, unit price, and total amount are shown simultaneously.
            No errors. No disputes. Faster transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { num: "01", color: "#1E3A5F", bg: "bg-blue-50", label: "Weight Display", desc: "Shows the exact weight of goods on the platter in real time. Accuracy 2g – 5g across the full 30kg range." },
            { num: "02", color: "#DC2626", bg: "bg-red-50",  label: "Unit Price Display", desc: "Set the price per kg once — manually or recall from one of 15 memory keys — it stays until you change it." },
            { num: "03", color: "#166534", bg: "bg-green-50", label: "Total Price Display", desc: "Automatically calculates and displays the total cost as soon as the weight stabilises. Customer can see it directly." },
          ].map(({ num, color, bg, label, desc }) => (
            <div key={num}
              className="border border-gray-100 rounded-sm p-7 hover:shadow-md transition-shadow"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <div className={`w-10 h-10 rounded-sm ${bg} flex items-center justify-center mb-5`}>
                <span className="font-bold text-sm" style={{ color }}>{num}</span>
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-2" style={{ color }}>{label}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1E3A5F] rounded-sm p-7 flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="flex-1">
            <p className="text-white font-bold text-base mb-1">15 Direct Memory Prices</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Store your 15 most common rates — wheat, rice, dal, vegetable, fruit — in one-touch memory keys.
              One press at the start of a transaction sets the rate for that item. No typing. No errors.
            </p>
          </div>
          <a
            href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am interested in the Price Computing Scale for my shop/mandi. Please advise.")}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors flex-shrink-0">
            <WAIcon /> WhatsApp to Enquire
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── 5. Features Grid ─────────────────────────────────────────────────────────

function FeaturesGrid() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>All Features</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Built for the Retail Counter
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every feature on the price computing scale is designed for fast, accurate, and
            transparent transactions at high-volume retail and wholesale counters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label}
              className="bg-white border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all group"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-10 h-10 rounded-sm bg-gray-50 group-hover:bg-red-50 flex items-center justify-center mb-4 transition-colors">
                <Icon size={17} className="text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors" />
              </div>
              <h3 className="text-[#111827] font-bold text-sm mb-2">{label}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Perfect For ───────────────────────────────────────────────────────────

function PerfectFor() {
  const useCases = [
    { icon: Wheat,      title: "Grain Mandis",        desc: "Weigh wheat, rice, and pulses — set rate per kg from memory keys, total calculated instantly." },
    { icon: Store,      title: "Retail Shops",         desc: "Transparent pricing builds customer trust — all three figures visible from both sides of the counter." },
    { icon: ShoppingBag, title: "Wet Markets",         desc: "SS body handles daily water and cleaning — robust in fish, vegetable, and meat market environments." },
    { icon: Package,    title: "Wholesale Trade",      desc: "Accumulate totals across multiple items — fast billing for wholesale buyers purchasing in bulk." },
    { icon: Calculator, title: "Kirana Stores",        desc: "15 memory keys cover your full range of daily staples — quick and accurate billing every time." },
  ];

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Ideal Use Cases</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Perfect For
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Any business where goods are sold by weight and the customer needs to see the price calculated in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="border border-gray-100 rounded-sm p-5 hover:shadow-md hover:border-[#DC2626]/20 transition-all group"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-9 h-9 rounded-sm bg-gray-50 group-hover:bg-red-50 flex items-center justify-center mb-3 transition-colors">
                <Icon size={15} className="text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors" />
              </div>
              <h3 className="text-[#111827] font-bold text-xs mb-1.5">{title}</h3>
              <p className="text-gray-500 text-[0.68rem] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. Related Scales ────────────────────────────────────────────────────────

function RelatedScales() {
  const related = [
    {
      name: "Table Top Scale",
      slug: "table-top",
      cap: "20kg – 30kg",
      desc: "Counter scales in SS, ABS, and metal body — for shops that need weight without price computing.",
      color: "#374151",
    },
    {
      name: "Platform & Floor Scale",
      slug: "platform",
      cap: "100kg – 2000kg",
      desc: "Heavy-duty floor scales for warehouses, factories, and mandis requiring large-capacity weighing.",
      color: "#1E3A5F",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-8">
          <SectionLabel>You May Also Need</SectionLabel>
          <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight">
            Related Scales
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {related.map(({ name, slug, cap, desc, color }) => (
            <Link key={slug} href={`/products/scales/${slug}`}
              className="group bg-white border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: color }}>
                  <Scale size={17} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[#111827] font-bold text-sm group-hover:text-[#DC2626] transition-colors">{name}</h3>
                    <span className="text-[0.55rem] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">{cap}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors">
                View scale <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 8. CTA Banner ───────────────────────────────────────────────────────────

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
            Retail &amp; Mandi Weighing
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Ready to Eliminate Billing Disputes at Your Counter?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            The price computing scale shows your customer exactly what they are paying — weight,
            rate, and total — all at once. WhatsApp us for pricing and availability.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I need a Price Computing Scale for my shop/mandi. Please advise on price and availability.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp Our Team
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products/scales"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              All Scales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────

export default function PriceComputingScalePage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <ProductPhotoAndSpecs />
      <ThreeDisplayExplainer />
      <FeaturesGrid />
      <PerfectFor />
      <RelatedScales />
      <CTABanner />
    </>
  );
}