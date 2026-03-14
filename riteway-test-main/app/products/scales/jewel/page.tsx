import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gem,
  BatteryFull,
  Thermometer,
  Printer,
  RotateCcw,
  Zap,
  Shield,
  Activity,
  Eye,
  FlaskConical,
  Pill,
  Sparkles,
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

const SPECS = [
  { cap: "300g", div: "10mg", platter: "120mm dia", display: "Bright LED" },
  { cap: "600g", div: "10mg", platter: "120mm dia", display: "Bright LED" },
  { cap: "300g", div: "5mg",  platter: "120mm dia", display: "Bright LED" },
  { cap: "1000g", div: "10mg", platter: "120mm dia", display: "Bright LED" },
  { cap: "1200g", div: "20mg", platter: "120mm dia", display: "Bright LED" },
];

const PRECISION_FEATURES = [
  { icon: Gem,         label: "gm / ct / Tola Conversion",           desc: "Switch between grams, carats, and tola instantly — no manual conversion. Built-in for jewellers." },
  { icon: Activity,    label: "Counting Function",                    desc: "Count identical pieces by weight — useful for sorting chains, rings, or gemstone lots." },
  { icon: Shield,      label: "Weight Hold Function",                 desc: "Freezes the display reading for easy recording even if the item is removed." },
  { icon: RotateCcw,   label: "Anti-Vibration Mode",                  desc: "Filters vibration from AC, fans, and foot traffic for stable readings in busy jewellery shops." },
  { icon: Thermometer, label: "Temperature Compensation Calibration", desc: "TACC automatically adjusts for temperature-induced drift — stays accurate all day without recalibration." },
];

const PRACTICAL_FEATURES = [
  { icon: BatteryFull, label: "60-Hour Battery Backup",     desc: "Rechargeable battery provides 60 hours of continuous operation on a single charge." },
  { icon: Zap,         label: "Mains & Rechargeable",       desc: "Operates on mains AC power or internal rechargeable battery — flexible for any shop setup." },
  { icon: Printer,     label: "RS-232 / Direct Printing",   desc: "Connect to a computer or label printer directly via RS-232 for automated billing and records." },
  { icon: Eye,         label: "Low Battery Indication",     desc: "Early low battery warning ensures you never lose a reading mid-weighment." },
  { icon: Sparkles,    label: "Glow Control",               desc: "Adjustable display brightness for comfortable reading in all lighting conditions." },
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
          <span className="text-[#111827] font-medium">Jewel Precision Scale</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-1 rounded-full">Precision Balance</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
          </div>
          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Jewel &amp; Precision Balance Scales
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Milligram accuracy for jewellers, laboratories, and precision industries. Built-in gm, carat, and tola conversion. Anti-vibration mode. 60-hour rechargeable battery backup. Temperature Assisted Compensation Calibration for all-day accuracy.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am interested in the Jewel Precision Balance Scale. Please advise on capacity and pricing.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
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
    { icon: Gem,         value: "1200g",    label: "Max Capacity",    sub: "5 capacity options" },
    { icon: Activity,    value: "5mg",      label: "Best Accuracy",   sub: "300g/5mg variant" },
    { icon: BatteryFull, value: "60 hrs",   label: "Battery Backup",  sub: "Rechargeable" },
    { icon: Sparkles,    value: "gm+ct+tola", label: "Conversions",  sub: "All built-in" },
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

const JEWEL_COMPARE = {
  headers: ["Variant 1", "Variant 2", "Variant 3", "Variant 4", "Variant 5"],
  rows: [
    { label: "Capacity",        values: ["300g",             "600g",             "300g",             "1000g",            "1200g"           ], highlight: true  },
    { label: "Division",        values: ["10mg",             "10mg",             "5mg",              "10mg",             "20mg"            ], highlight: true  },
    { label: "Platter Size",    values: ["120mm dia",        "120mm dia",        "120mm dia",        "120mm dia",        "120mm dia"       ], highlight: false },
    { label: "Display",         values: ["Bright Red LED",   "Bright Red LED",   "Bright Red LED",   "Bright Red LED",   "Bright Red LED"  ], highlight: false },
    { label: "Units",           values: ["gm, ct, tola",     "gm, ct, tola",     "gm, ct, tola",     "gm, ct, tola",     "gm, ct, tola"    ], highlight: false },
    { label: "Battery Backup",  values: ["60 hours",         "60 hours",         "60 hours",         "60 hours",         "60 hours"        ], highlight: false },
    { label: "RS-232",          values: ["Optional",         "Optional",         "Optional",         "Optional",         "Optional"        ], highlight: false },
    { label: "Anti-vibration",  values: ["Yes",              "Yes",              "Yes",              "Yes",              "Yes"             ], highlight: false },
  ],
};

function JewelHeroPhoto() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <img
          src="/images/products/scales/jewel-scale.png"
          alt="Rite-Way Jewel Precision Balance Scale — milligram accuracy"
          className="w-full rounded-sm object-cover max-w-2xl mx-auto block"
          style={{ aspectRatio: "16/9" }}
        />
        <p className="text-xs text-gray-400 mt-2 text-center">Rite-Way Jewel Precision Scale — milligram accuracy</p>
      </div>
    </section>
  );
}

function SpecsTable() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Technical Specifications</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            All 5 Variants — Side by Side
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Five capacity and accuracy combinations — choose the variant that matches your weighing requirement.
          </p>
        </div>

        <div className="overflow-x-auto rounded-sm border border-gray-200" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="bg-[#1E3A5F]">
                <th className="text-left px-5 py-4 text-white font-bold text-xs uppercase tracking-[0.12em] w-[20%]">
                  Specification
                </th>
                {JEWEL_COMPARE.headers.map((h) => (
                  <th key={h} className="text-left px-5 py-4 text-white font-bold text-xs uppercase tracking-[0.12em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {JEWEL_COMPARE.rows.map(({ label, values, highlight }, i) => (
                <tr
                  key={label}
                  className={`border-b border-gray-100 last:border-b-0 transition-colors hover:bg-purple-50/20 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                  }`}>
                  <td className="px-5 py-3.5 align-middle">
                    <span className="text-[#111827] font-semibold text-sm">{label}</span>
                  </td>
                  {values.map((v, vi) => (
                    <td key={vi} className="px-5 py-3.5 align-middle">
                      <span className={`text-sm font-${highlight ? "bold" : "normal"} ${
                        highlight
                          ? "text-[#581c87]"
                          : v === "Yes"
                          ? "text-green-600 font-medium"
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
          All variants include Temperature Assisted Compensation Calibration (TACC), counting function,
          weight hold, and glow control. RS-232 / direct printing optional on all variants.
        </p>
      </div>
    </section>
  );
}

function JewelleryShopPhoto() {
  return (
    <section className="bg-gray-50 py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <img
          src="/images/products/scales/jewel-scale.png"
          alt="Rite-Way Jewel Scale in jewellery shop — daily weighing application"
          className="w-full rounded-sm object-cover"
          style={{ aspectRatio: "21/9" }}
        />
        <p className="text-xs text-gray-400 mt-2 text-center">Jewel scale in use — jewellery shop, Punjab</p>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Full Feature Set</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Precision &amp; Practical Features</h2>
          <p className="text-gray-500 text-base leading-relaxed">Every feature on the jewel scale is purpose-designed for the jeweller's counter and precision laboratory.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Precision Features",  icon: Gem,         accent: "#581c87", bg: "bg-purple-50", items: PRECISION_FEATURES },
            { title: "Practical Features",  icon: BatteryFull, accent: "#1E3A5F", bg: "bg-blue-50",   items: PRACTICAL_FEATURES },
          ].map(({ title, icon: Icon, accent, bg, items }) => (
            <div key={title} className="border border-gray-100 rounded-sm overflow-hidden" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="h-1" style={{ backgroundColor: accent }} />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ backgroundColor: accent }}><Icon size={16} className="text-white" /></div>
                  <h3 className="text-[#111827] font-bold text-base">{title}</h3>
                </div>
                <div className="space-y-4">
                  {items.map(({ icon: IIcon, label, desc }) => (
                    <div key={label} className="flex gap-3">
                      <div className={`w-7 h-7 rounded-sm ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <IIcon size={13} style={{ color: accent }} />
                      </div>
                      <div>
                        <p className="text-[#111827] font-semibold text-sm mb-0.5">{label}</p>
                        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerfectFor() {
  const useCases = [
    { icon: Gem,         title: "Jewellery Shops",   desc: "gm/ct/tola conversions, anti-vibration, and 60hr battery — the complete jeweller's scale." },
    { icon: Sparkles,    title: "Gold Traders",      desc: "Accurate to 5mg with temperature compensation — reliable for high-value gold transactions." },
    { icon: FlaskConical, title: "Laboratories",     desc: "Anti-vibration and RS-232 interface make this a capable lab balance for research use." },
    { icon: Pill,        title: "Pharmaceutical",    desc: "Milligram accuracy and weight hold function for precise drug compounding and dispensing." },
    { icon: Gem,         title: "Gemstone Dealers",  desc: "Carat conversion built-in — weigh and record gemstones directly in the unit buyers use." },
  ];
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Ideal Use Cases</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Perfect For</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-sm p-5 hover:shadow-md hover:border-purple-200 transition-all group" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-9 h-9 rounded-sm bg-gray-50 group-hover:bg-purple-50 flex items-center justify-center mb-3 transition-colors">
                <Icon size={15} className="text-[#1E3A5F] group-hover:text-[#581c87] transition-colors" />
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

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Milligram Precision</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Need a Scale Accurate to Milligrams?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">Tell us your capacity and division requirement — we'll recommend the right jewel scale variant and deliver it to you.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I need a jewel precision scale. Please advise on the right capacity and variant.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
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

export default function JewelScalePage() {
  return (<><Hero /><HighlightsRow /><JewelHeroPhoto /><SpecsTable /><JewelleryShopPhoto /><FeaturesSection /><PerfectFor /><CTABanner /></>);
}