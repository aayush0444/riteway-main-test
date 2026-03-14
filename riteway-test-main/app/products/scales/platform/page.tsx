import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  Warehouse,
  Wheat,
  Thermometer,
  Package,
  Truck,
  Shield,
  Layers,
  Activity,
  Gauge,
  Monitor,
  Droplets,
  LayoutGrid,
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

const COMMON_FEATURES = [
  { icon: Gauge,    label: "1/100,000 Resolution",         desc: "Industry-leading display resolution for precise piece counting and measurement" },
  { icon: Activity, label: "KG / Litre / Alert / Piece",   desc: "Four weighing modes switchable on the fly — count pieces, measure volume, or set load alerts" },
  { icon: Droplets, label: "Dust & Spill Protection",      desc: "Dust cover protects the scale pan and internals from dust, water, and spillage in tough environments" },
  { icon: Layers,   label: "4×350Ω Load Cell Support",     desc: "Supports up to four 350-ohm load cells for maximum accuracy across the full platform" },
  { icon: Monitor,  label: "100% Tare Range",              desc: "Full-capacity tare range — zero out any container without sacrificing weighing range" },
  { icon: Shield,   label: "Auto Zero & Sleep Mode",       desc: "Automatic zero correction and sleep mode for power saving during idle periods" },
];

function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.4 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, white 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7 flex-wrap">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link><span>/</span>
          <Link href="/products/scales" className="hover:text-[#111827] transition-colors">Scales</Link><span>/</span>
          <span className="text-[#111827] font-medium">Platform & Floor Scales</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">100kg – 2000kg</span>
          </div>
          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Platform &amp; Floor Weighing Scales
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Heavy-duty floor scales for warehouses, factories, and mandis. From 100kg checked pan scales with guard rails to 2000kg open floor scales. 1/100,000 resolution, dust protection, and 4-mode operation built in.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am interested in a Platform or Floor Scale. Please advise on the right variant and capacity.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
              <WAIcon /> WhatsApp Get Quote
            </a>
            <Link href="/get-quote" className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsRow() {
  const stats = [
    { icon: Scale,   value: "2000 kg",    label: "Max Capacity",       sub: "Industrial floor scale" },
    { icon: Gauge,   value: "1/100,000",  label: "Display Resolution", sub: "Precise piece counting" },
    { icon: Layers,  value: "4 Cells",    label: "Load Cell Support",  sub: "4×350Ω configuration" },
    { icon: Shield,  value: "Dust Cover", label: "Pan Protection",     sub: "Dust, water & spill" },
  ];
  return (
    <section className="bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <div key={label} className={`flex items-start gap-4 ${i < stats.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-6" : ""}`}>
              <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Icon size={16} className="text-white" /></div>
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

const VARIANT_PHOTOS: Record<string, string> = {
  "With Guard Rail": "/images/products/scales/platfrom-scale-with-guard-rail.png",
  "No Guard Rail":   "/images/products/scales/platform-scale-with-4-load-cell.png",
};

function VariantsGrid() {
  const variants = [
    {
      name: "Platform Checked Pan Scale",
      sub: "With Guard Rail",
      badge: "Guard Rail",
      badgeClass: "bg-blue-50 text-[#1E3A5F] border-blue-100",
      tag: "Most Popular",
      gradientFrom: "#1E3A5F",
      gradientTo: "#2d5a8e",
      specs: [
        { label: "Capacities",    value: "100 / 200 / 300 / 500 / 600 / 1000 kg" },
        { label: "Accuracy",      value: "10g to 200g" },
        { label: "Pan Sizes",     value: "400×400mm to 1000×1000mm" },
        { label: "Resolution",    value: "1 / 100,000" },
        { label: "Load Cells",    value: "Up to 4 × 350Ω" },
        { label: "Guard Rail",    value: "Yes — full surround" },
      ],
      highlights: ["Guard rail prevents goods from falling off", "Multiple capacity options in one model range", "KG / Litre / Alert / Piece count modes", "Dust cover included", "Auto zero & sleep mode"],
      waMsg: "Hello Rite-Way, I am interested in the Platform Checked Pan Scale with Guard Rail. Please advise on capacity and pricing.",
    },
    {
      name: "Platform Floor Scale",
      sub: "No Guard Rail",
      badge: "Open Platform",
      badgeClass: "bg-orange-50 text-orange-700 border-orange-100",
      tag: null,
      gradientFrom: "#374151",
      gradientTo: "#4b5563",
      specs: [
        { label: "Capacity",      value: "1000 kg – 2000 kg" },
        { label: "Accuracy",      value: "100g – 200g" },
        { label: "Pan Sizes",     value: "1000×1000mm, 1200×1200mm" },
        { label: "Resolution",    value: "1 / 100,000" },
        { label: "Load Cells",    value: "Up to 4 × 350Ω" },
        { label: "RS-232",        value: "Interface available" },
      ],
      highlights: ["Open platform — easy forklift loading", "Larger 1200×1200mm pan option", "RS-232 interface for computer integration", "Same 4-mode operation as checked pan", "Ideal for barrel, pallet, and sack weighing"],
      waMsg: "Hello Rite-Way, I am interested in the Platform Floor Scale (no guard rail). Please advise on capacity and pricing.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Two Variants</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Choose Your Platform Scale</h2>
          <p className="text-gray-500 text-base leading-relaxed">Guard rail for loose goods and smaller capacities. Open floor scale for heavy-duty pallet and barrel weighing up to 2000kg.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {variants.map(({ name, sub, badge, badgeClass, tag, gradientFrom, gradientTo, specs, highlights, waMsg }) => (
            <div key={sub} className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-200" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              {/* Product photo */}
              <div className="relative">
                <img
                  src={VARIANT_PHOTOS[sub]}
                  alt={`Rite-Way Platform Scale — ${sub}`}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
                {tag && <span className="absolute top-3 right-3 text-[0.52rem] font-bold uppercase tracking-widest text-white bg-[#DC2626] px-2 py-0.5 rounded-full z-20">{tag}</span>}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <span className={`inline-block text-[0.58rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeClass}`}>{badge}</span>
                </div>
                <div className="border border-gray-100 rounded-sm overflow-hidden mb-5">
                  {specs.map(({ label, value }, si) => (
                    <div key={label} className={`flex items-center justify-between px-4 py-2.5 ${si % 2 === 0 ? "bg-gray-50/70" : "bg-white"} ${si < specs.length - 1 ? "border-b border-gray-100" : ""}`}>
                      <span className="text-gray-500 text-xs font-medium flex-shrink-0">{label}</span>
                      <span className="text-[#111827] text-xs font-bold text-right ml-4">{value}</span>
                    </div>
                  ))}
                </div>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={11} className="text-green-500 flex-shrink-0" />{h}
                    </li>
                  ))}
                </ul>
                <a href={`${WA_BASE}${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-3 rounded-sm hover:bg-green-500 transition-colors w-full">
                  <WAIcon /> WhatsApp Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Comparison Table ─────────────────────────────────────────────────────────

const PLATFORM_COMPARE = {
  headers: ["Checked Pan Scale", "Floor Scale"],
  rows: [
    { label: "Type",         v1: "Platform with guard rail",           v2: "Open floor platform",               highlight: false },
    { label: "Capacity",     v1: "100kg – 1000kg",                     v2: "1000kg – 2000kg",                   highlight: true  },
    { label: "Accuracy",     v1: "10g – 200g",                         v2: "100g – 200g",                       highlight: false },
    { label: "Pan Size",     v1: "400×400mm to 1000×1000mm",           v2: "1000×1000mm to 1200×1200mm",        highlight: false },
    { label: "Load Cells",   v1: "4 × 350Ω",                           v2: "4 × 350Ω",                         highlight: false },
    { label: "Resolution",   v1: "1 / 100,000",                        v2: "1 / 100,000",                      highlight: false },
    { label: "Modes",        v1: "KG / Liter / Alert / Piece count",   v2: "KG / Liter / Alert / Piece count", highlight: false },
    { label: "RS-232",       v1: "No",                                  v2: "Optional",                         highlight: false },
    { label: "Dust Cover",   v1: "Yes",                                 v2: "Yes",                              highlight: false },
  ],
};

function ComparisonTable() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Technical Specifications</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Both Variants — Side by Side
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Compare capacity, accuracy, and features between the Checked Pan and Floor Scale variants.
          </p>
        </div>

        <div className="overflow-x-auto rounded-sm border border-gray-200" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          <table className="w-full min-w-[520px] border-collapse">
            <thead>
              <tr className="bg-[#1E3A5F]">
                <th className="text-left px-6 py-4 text-white font-bold text-xs uppercase tracking-[0.12em] w-[28%]">
                  Specification
                </th>
                {PLATFORM_COMPARE.headers.map((h) => (
                  <th key={h} className="text-left px-6 py-4 text-white font-bold text-xs uppercase tracking-[0.12em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PLATFORM_COMPARE.rows.map(({ label, v1, v2, highlight }, i) => (
                <tr
                  key={label}
                  className={`border-b border-gray-100 last:border-b-0 transition-colors hover:bg-blue-50/30 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                  }`}>
                  <td className="px-6 py-3.5 align-middle">
                    <span className="text-[#111827] font-semibold text-sm">{label}</span>
                  </td>
                  {[v1, v2].map((v, vi) => (
                    <td key={vi} className="px-6 py-3.5 align-middle">
                      <span className={`text-sm ${
                        highlight
                          ? "text-[#DC2626] font-bold"
                          : v === "Yes"
                          ? "text-green-600 font-medium"
                          : v === "No"
                          ? "text-gray-400"
                          : v === "Optional"
                          ? "text-[#1E3A5F] font-medium"
                          : "text-gray-600"
                      }`}>
                        {v}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          All variants support up to 4×350Ω load cells, piece counting, and liter mode.
          Guard rail on Checked Pan variant prevents items from rolling off during weighment.
        </p>
      </div>
    </section>
  );
}

function CommonFeatures() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Shared Capabilities</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Common Features</h2>
          <p className="text-gray-500 text-base leading-relaxed">Both platform scale variants share these core features — industrial-grade performance at every capacity.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMON_FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all group" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
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

function PerfectFor() {
  const useCases = [
    { icon: Wheat,      title: "Grain Mandis",              desc: "Weigh sacks and bags accurately at mandi arrival — piece count mode tracks number of bags." },
    { icon: Warehouse,  title: "Warehouses",                desc: "Forklift-friendly open platform for weighing pallets, barrels, and bulk goods at dispatch." },
    { icon: Thermometer, title: "Cold Storage",             desc: "Dust and spill-resistant construction handles wet, cold, and harsh storage environments." },
    { icon: Package,    title: "Factory Dispatch",          desc: "RS-232 interface connects to your dispatch system for automatic weight data entry." },
    { icon: Wheat,      title: "Agricultural Co-ops",      desc: "Multiple capacity options — 100kg to 1000kg — cover all produce types in one model range." },
    { icon: Truck,      title: "Logistics Hubs",            desc: "Alert mode triggers when weight exceeds set limit — prevents overloaded shipments." },
  ];
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Ideal Use Cases</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Perfect For</h2>
          <p className="text-gray-500 text-base leading-relaxed">Heavy-duty platform scales for every industrial and agricultural weighing application.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all group" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-9 h-9 rounded-sm bg-gray-50 group-hover:bg-red-50 flex items-center justify-center mb-3 transition-colors">
                <Icon size={15} className="text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors" />
              </div>
              <h3 className="text-[#111827] font-bold text-sm mb-1.5">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AlsoAvailable() {
  const lighter = [
    { name: "Mini / Silver Scale", cap: "6kg – 10kg", desc: "Ultra-compact ABS scale for light retail and general purpose use. LCD display, auto-off, adaptor or dry cell.", color: "#1E3A5F" },
    { name: "ABS Type Scale",      cap: "20 kg",      desc: "Splash-proof digital scale with 10-hour battery backup and red/green LED display. Rear display included.", color: "#374151" },
  ];
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-8">
          <SectionLabel>Lighter Duty Options</SectionLabel>
          <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">Also Available</h2>
          <p className="text-gray-500 text-sm leading-relaxed">Need something lighter? These compact models cover smaller weighing requirements.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {lighter.map(({ name, cap, desc, color }) => (
            <Link key={name} href="/products/scales" className="group border border-gray-100 rounded-sm p-5 hover:shadow-md transition-all bg-gray-50 hover:bg-white" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
                  <Scale size={15} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[#111827] font-bold text-sm group-hover:text-[#DC2626] transition-colors">{name}</p>
                    <span className="text-[0.55rem] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded-full">{cap}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedScales() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-8">
          <SectionLabel>You May Also Need</SectionLabel>
          <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight">Related Scales</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {[
            { name: "Table Top Scale", slug: "table-top", cap: "20kg – 30kg", desc: "Counter-ready scales for shops and light industrial use. ABS, SS, and metal body variants.", color: "#374151" },
            { name: "Price Computing Scale", slug: "price-computing", cap: "30 kg", desc: "Weight + rate + total display simultaneously. Built for mandis, markets, and retail.", color: "#166534" },
          ].map(({ name, slug, cap, desc, color }) => (
            <Link key={slug} href={`/products/scales/${slug}`} className="group border border-gray-100 bg-white rounded-sm p-5 hover:shadow-md transition-all" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}><Scale size={15} className="text-white" /></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[#111827] font-bold text-sm group-hover:text-[#DC2626] transition-colors">{name}</p>
                    <span className="text-[0.55rem] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded-full">{cap}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors">
                View scale <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Get the Right Capacity</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Need a Heavy Duty Floor Scale?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">Tell us your capacity, pan size, and whether you need a guard rail — we'll recommend the right platform scale and deliver it to your site.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I need a platform or floor scale. Please advise on the right capacity and variant.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp Our Team
            </a>
            <Link href="/get-quote" className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products/scales" className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">All Scales</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PlatformScalePage() {
  return (<><Hero /><HighlightsRow /><VariantsGrid /><ComparisonTable /><CommonFeatures /><PerfectFor /><AlsoAvailable /><RelatedScales /><CTABanner /></>);
}