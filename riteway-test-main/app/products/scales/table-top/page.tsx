import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  ShoppingCart,
  Warehouse,
  Stethoscope,
  Package,
  Zap,
  Shield,
  Cpu,
  BatteryFull,
  Monitor,
  Activity,
} from "lucide-react";

// ─── Shared ───────────────────────────────────────────────────────────────────

const WA_BASE = "https://wa.me/919877541199?text=";

function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#DC2626] font-semibold mb-3"
      style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

// ─── Variant Data ─────────────────────────────────────────────────────────────

const VARIANTS = [
  {
    id: "metal",
    name: "Table Top Scale",
    sub: "Metal Body",
    badge: "Metal Body",
    badgeClass: "bg-gray-100 text-gray-700 border-gray-200",
    gradientFrom: "#374151",
    gradientTo: "#4b5563",
    specs: [
      { label: "Capacity",         value: "30 kg" },
      { label: "Accuracy",         value: "2g – 5g" },
      { label: "Platter Size",     value: "240 × 330 mm" },
      { label: "Display",          value: "Both sides (Front & Back)" },
      { label: "Battery Backup",   value: "In-built" },
      { label: "Body Material",    value: "Metal" },
    ],
    highlights: ["Dual-side display — front and back", "Triple capacity & accuracy", "In-built battery backup", "Robust metal construction"],
  },
  {
    id: "ss-standard",
    name: "Table Top Scale",
    sub: "SS Body Standard",
    badge: "Stainless Steel",
    badgeClass: "bg-blue-50 text-[#1E3A5F] border-blue-100",
    gradientFrom: "#1E3A5F",
    gradientTo: "#2d5a8e",
    specs: [
      { label: "Capacity",         value: "20 kg" },
      { label: "Accuracy",         value: "100mg – 5g" },
      { label: "Platter Size",     value: "180 × 230 mm" },
      { label: "Display",          value: "Rear display" },
      { label: "RS-232",           value: "Optional" },
      { label: "Body Material",    value: "Stainless Steel" },
    ],
    highlights: ["Finest accuracy: 100mg division", "Overload protection with buzzer", "RS-232 interface optional", "SS hygiene-grade body"],
  },
  {
    id: "abs-pole",
    name: "Table Top Scale",
    sub: "ABS Body with Pole Display",
    badge: "ABS Body",
    badgeClass: "bg-orange-50 text-orange-700 border-orange-100",
    gradientFrom: "#92400e",
    gradientTo: "#b45309",
    specs: [
      { label: "Capacity",         value: "30 kg" },
      { label: "Accuracy",         value: "2g – 5g" },
      { label: "Platter Size",     value: "240 × 330 mm" },
      { label: "Display",          value: "Pole display + Rear display" },
      { label: "RS-232",           value: "Optional" },
      { label: "Body Material",    value: "ABS" },
    ],
    highlights: ["Pole display — visible at distance", "Rear display for operator", "RS-232 interface optional", "Lightweight ABS body"],
  },
  {
    id: "ss-pole",
    name: "Table Top Scale",
    sub: "SS Body with Pole Display",
    badge: "SS + Pole",
    badgeClass: "bg-green-50 text-green-700 border-green-100",
    gradientFrom: "#14532d",
    gradientTo: "#166534",
    specs: [
      { label: "Capacity",         value: "30 kg" },
      { label: "Accuracy",         value: "2g – 5g" },
      { label: "Platter Size",     value: "240 × 330 mm" },
      { label: "Display",          value: "Pole display option" },
      { label: "RS-232",           value: "Optional" },
      { label: "Body Material",    value: "Stainless Steel" },
    ],
    highlights: ["Pole display — visible at distance", "Stainless steel hygiene body", "RS-232 interface optional", "Durable for daily heavy use"],
  },
];

const VARIANT_PHOTOS: Record<string, string> = {
  "metal":       "/images/products/scales/table-top.png",
  "ss-standard": "/images/products/scales/ss-mini-scale-table-top.png",
  "abs-pole":    "/images/products/scales/abs-body-display.png",
  "ss-pole":     "/images/products/scales/ss-mini-scale-table-top.png",
};

const COMMON_FEATURES = [
  { icon: Activity,    label: "User Defined Auto Zero",         desc: "Adjustable auto-zero setting for fast, repeatable weighment without manual intervention" },
  { icon: Zap,         label: "High Precision Load Cell",       desc: "Precision-manufactured load cell ensures consistent accuracy across the full capacity range" },
  { icon: Cpu,         label: "Advanced Microprocessor",        desc: "Fast response time and stable readings even in environments with minor vibration" },
  { icon: Monitor,     label: "Bright Red LED Display",         desc: "High-visibility red LED digits readable in all lighting conditions — daylight to dimly lit counters" },
  { icon: BatteryFull, label: "Standby Mode",                   desc: "Automatic standby reduces battery drain during idle periods — extends battery life significantly" },
  { icon: Shield,      label: "Triple Capacity & Accuracy",     desc: "Three switchable capacity/accuracy modes on selected variants — one scale, multiple applications" },
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
          <span className="text-[#111827] font-medium">Table Top Scales</span>
        </nav>

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
              4 Variants
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">
              🇮🇳 Made in India
            </span>
          </div>

          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Table Top Weighing Scales
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            High-precision digital scales for retail shops, counters, and light industrial
            use. Available in stainless steel, ABS, and metal body variants — with pole
            display, rear display, and RS-232 interface options.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am interested in a Table Top Weighing Scale. Please advise on the right variant for my requirement.")}`}
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
    { icon: Scale,      value: "30 kg",      label: "Max Capacity",    sub: "Across all variants" },
    { icon: Activity,   value: "2g – 5g",    label: "Accuracy",        sub: "100mg on SS Standard" },
    { icon: BatteryFull, value: "Battery",   label: "Backup Built-in", sub: "Standby mode included" },
    { icon: Monitor,    value: "RS-232",      label: "Interface",       sub: "Optional on 3 variants" },
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

// ─── 3. Variants Grid ─────────────────────────────────────────────────────────

function VariantsGrid() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>All Variants</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            4 Body &amp; Display Options
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Choose the variant that fits your counter, budget, and display requirement.
            All variants share the same core precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {VARIANTS.map(({ id, name, sub, badge, badgeClass, gradientFrom, gradientTo, specs, highlights }) => {
            const waMsg = encodeURIComponent(`Hello Rite-Way, I am interested in the Table Top Scale — ${sub}. Please advise on pricing and availability.`);
            return (
              <div key={id}
                className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-200 group"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>

                {/* Product photo */}
                <img
                  src={VARIANT_PHOTOS[id]}
                  alt={`Rite-Way Table Top Scale — ${sub}`}
                  className="w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Badge */}
                  <div className="mb-4">
                    <span className={`inline-block text-[0.58rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeClass}`}>
                      {badge}
                    </span>
                  </div>

                  {/* Spec table */}
                  <div className="border border-gray-100 rounded-sm overflow-hidden mb-5">
                    {specs.map(({ label, value }, si) => (
                      <div key={label}
                        className={`flex items-center justify-between px-4 py-2.5 ${si % 2 === 0 ? "bg-gray-50/70" : "bg-white"} ${si < specs.length - 1 ? "border-b border-gray-100" : ""}`}>
                        <span className="text-gray-500 text-xs font-medium">{label}</span>
                        <span className="text-[#111827] text-xs font-bold text-right ml-4">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5 flex-1">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={11} className="text-green-500 flex-shrink-0" />{h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href={`${WA_BASE}${waMsg}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-3 rounded-sm hover:bg-green-500 transition-colors w-full">
                    <WAIcon /> WhatsApp Get Quote
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Comparison Table ──────────────────────────────────────────────────────

const VARIANTS_COMPARE = {
  headers: ["Metal Body", "SS Standard", "ABS + Pole", "SS + Pole"],
  rows: [
    { label: "Body Material",   values: ["Mild Steel",     "Stainless Steel", "ABS Plastic",    "Stainless Steel"], highlight: false },
    { label: "Capacity",        values: ["30 kg",          "20 kg",           "30 kg",          "30 kg"],          highlight: false },
    { label: "Division",        values: ["2g – 5g",        "100mg – 5g",      "2g – 5g",        "2g – 5g"],        highlight: false },
    { label: "Platter Size",    values: ["240×330 mm",     "180×230 mm",      "240×330 mm",     "240×330 mm"],     highlight: false },
    { label: "Display",         values: ["Front + Back",   "Rear",            "Pole + Rear",    "Pole"],           highlight: false },
    { label: "RS-232",          values: ["No",             "Optional",        "Optional",       "Optional"],       highlight: false },
    { label: "Overload Buzzer", values: ["No",             "Yes",             "No",             "No"],             highlight: false },
    { label: "Battery Backup",  values: ["Yes",            "Yes",             "Yes",            "Yes"],            highlight: true  },
  ],
};

function ComparisonTable() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Technical Specifications</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            All Four Variants — Side by Side
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Compare capacity, accuracy, display, and features across all table top scale variants.
          </p>
        </div>

        <div className="overflow-x-auto rounded-sm border border-gray-200" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          <table className="w-full min-w-[640px] border-collapse">
            <thead>
              <tr className="bg-[#1E3A5F]">
                <th className="text-left px-5 py-4 text-white font-bold text-xs uppercase tracking-[0.12em] w-[22%]">
                  Specification
                </th>
                {VARIANTS_COMPARE.headers.map((h) => (
                  <th key={h} className="text-left px-5 py-4 text-white font-bold text-xs uppercase tracking-[0.12em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VARIANTS_COMPARE.rows.map(({ label, values, highlight }, i) => (
                <tr
                  key={label}
                  className={`border-b border-gray-100 last:border-b-0 transition-colors hover:bg-blue-50/30 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                  }`}>
                  <td className="px-5 py-3.5 align-middle">
                    <span className="text-[#111827] font-semibold text-sm">{label}</span>
                  </td>
                  {values.map((v, vi) => (
                    <td key={vi} className="px-5 py-3.5 align-middle">
                      <span className={`text-sm ${
                        highlight
                          ? "text-green-600 font-semibold"
                          : v === "Yes"
                          ? "text-green-600 font-medium"
                          : v === "No"
                          ? "text-gray-400"
                          : v === "Optional"
                          ? "text-[#1E3A5F] font-medium"
                          : "text-gray-600"
                      }`}>
                        {highlight && v === "Yes" ? "✓ " : ""}{v}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          All variants include auto-zero, load cell protection, microprocessor control, and LED display.
          RS-232 interface available on all models except Metal Body — request when ordering.
        </p>
      </div>
    </section>
  );
}

// ─── 5. Common Features ───────────────────────────────────────────────────────

function RetailShopPhoto() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <img
          src="/images/products/scales/table-top.png"
          alt="Rite-Way Table Top Scale in retail shop — counter application"
          className="w-full rounded-sm object-cover"
          style={{ aspectRatio: "21/9" }}
        />
        <p className="text-xs text-gray-400 mt-2 text-center">Table Top Scale — retail and kirana shop application</p>
      </div>
    </section>
  );
}

function CommonFeatures() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Standard Across All Variants</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Common Features
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every table top scale from Rite-Way shares these core capabilities —
            regardless of body material or display configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COMMON_FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label}
              className="border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all group"
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

// ─── 5. Perfect For ───────────────────────────────────────────────────────────

function PerfectFor() {
  const useCases = [
    { icon: ShoppingCart,  title: "Retail Shops",               desc: "Accurate, fast, and easy to operate on a busy shop counter — battery backup ensures no downtime." },
    { icon: Package,       title: "Kirana & General Stores",    desc: "Dual-side displays let your customer see the weight directly — builds trust in every sale." },
    { icon: Stethoscope,   title: "Medical Clinics",            desc: "Clean stainless steel body variants maintain hygiene standards required in clinical environments." },
    { icon: Warehouse,     title: "Small Factories",            desc: "RS-232 interface connects to your computer system for automated weight data recording." },
    { icon: Package,       title: "Courier & Logistics",        desc: "Accurate parcel weighing at counters — pole display visible to both operator and customer." },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Ideal Use Cases</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Perfect For
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Table top scales for every counter and light industrial application.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="bg-white border border-gray-100 rounded-sm p-5 hover:shadow-md hover:border-[#DC2626]/20 transition-all group"
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

// ─── 6. Related Scales ────────────────────────────────────────────────────────

function RelatedScales() {
  const related = [
    {
      name: "Price Computing Scale",
      slug: "price-computing",
      desc: "30kg capacity with three simultaneous displays: weight, unit rate, and total price. Perfect for mandis and retail markets.",
      capacity: "30 kg",
      color: "#166534",
    },
    {
      name: "Platform & Floor Scale",
      slug: "platform",
      desc: "100kg to 2000kg heavy-duty floor scales for warehouses, factories, and cold storage. Guard rail and open platform options.",
      capacity: "100kg – 2000kg",
      color: "#374151",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>You May Also Need</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Related Scales
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {related.map(({ name, slug, desc, capacity, color }) => (
            <Link key={slug} href={`/products/scales/${slug}`}
              className="group border border-gray-100 bg-gray-50 rounded-sm p-6 hover:shadow-md hover:bg-white transition-all"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: color }}>
                  <Scale size={17} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[#111827] font-bold text-sm group-hover:text-[#DC2626] transition-colors">{name}</h3>
                    <span className="text-[0.55rem] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">{capacity}</span>
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
            Get the Right Variant
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Not Sure Which Table Top Scale Variant to Choose?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Tell us what you're weighing, your counter setup, and whether you need
            a pole display or RS-232 interface — we'll recommend the right variant
            and deliver it to you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I need help choosing the right Table Top Scale variant. Please advise.")}`}
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TableTopScalesPage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <VariantsGrid />
      <ComparisonTable />
      <RetailShopPhoto />
      <CommonFeatures />
      <PerfectFor />
      <RelatedScales />
      <CTABanner />
    </>
  );
}