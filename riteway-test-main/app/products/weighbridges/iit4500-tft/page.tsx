import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Monitor,
  Cpu,
  Zap,
  Database,
  Activity,
  Truck,
} from "lucide-react";

const WA_HREF =
  "https://wa.me/919877541199?text=" +
  encodeURIComponent("Hello Rite-Way, I am interested in the IIT 4500 with TFT Display. Please advise on specifications and pricing.");

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

// ─── Data from AND_TFT_brochure.docx ─────────────────────────────────────────

const TFT_ADVANTAGES = [
  {
    icon: Monitor,
    label: "7\" Multi-Colour TFT Display",
    desc: "Full-colour 7-inch TFT screen replaces the standard character LCD. Weight readings, ticket data, and status information displayed with colour differentiation for clarity.",
  },
  {
    icon: Activity,
    label: "24-bit Sigma-Delta A/D Converter",
    desc: "Higher resolution analogue-to-digital conversion compared to standard terminals — delivers superior signal accuracy and stability, especially critical for high-capacity weighbridges.",
  },
  {
    icon: Zap,
    label: "25 Samples Per Second",
    desc: "Internal conversion speed of 25 samples per second provides fast, stable, and responsive weight readings — minimal stabilisation wait time even for moving vehicles.",
  },
  {
    icon: Cpu,
    label: "Drives Up to 12 Load Cells",
    desc: "Load cell excitation capable of driving up to 12 load cells of 350Ω input resistance — supporting large multi-cell weighbridge configurations from a single terminal.",
  },
];

const TFT_SPECS = [
  { label: "Processor",             value: "32-bit ARM, 50 MHz" },
  { label: "Real Time Clock",       value: "Battery-backed on-board RTC" },
  { label: "Memory",                value: "Chip-based — 1 lakh (100,000) records" },
  { label: "Power Supply",          value: "SMPS — 90V to 270V AC @ 50Hz" },
  { label: "Protection",            value: "750mA fuse, EMI/RFI filter, spike suppressor, opto-isolation" },
  { label: "Power Consumption",     value: "10 VA approx." },
  { label: "A/D Converter",         value: "Sigma-Delta type, 24-bit resolution" },
  { label: "A/D Clock",             value: "20 Hz" },
  { label: "Conversion Speed",      value: "25 samples per second (internal)" },
  { label: "Load Cell Excitation",  value: "8V DC — drives up to 12 × 350Ω load cells" },
  { label: "Signal Sensitivity",    value: "0.3 microvolt per division of weight" },
  { label: "Display",               value: "7\" TFT multi-colour" },
  { label: "Keyboard Port",         value: "101-key IBM USB keyboard" },
  { label: "USB Port",              value: "USB for pen drive connectivity" },
  { label: "Printer Port",          value: "Isolated Centronics — 80-column dot matrix printer" },
  { label: "Serial Port",           value: "Isolated RS-232 for continuous weight transmission" },
  { label: "Remote Display Port",   value: "Connects ½\", 1\", 2.3\", or 4\" external LED display" },
  { label: "Environment",           value: "0°C to 55°C · Up to 95% RH non-condensing" },
];

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-[#0369a1] overflow-hidden border-b border-gray-100">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-7 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link><span>/</span>
          <Link href="/products/weighbridges" className="hover:text-white transition-colors">Weighbridges</Link><span>/</span>
          <span className="text-white/90 font-medium">IIT 4500 TFT Display</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full">7" TFT Colour Display</span>
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Premium Variant</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
          </div>
          <h1 className="text-white font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            IIT 4500 with 7" TFT Colour Display
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
            The premium IIT 4500 variant with a full 7-inch multi-colour TFT display,
            24-bit Sigma-Delta A/D converter, and support for up to 12 load cells.
            Maximum accuracy and visibility for high-volume, high-stakes weighbridge operations.
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
    { icon: Monitor,  value: "7\"",       label: "TFT Colour",      sub: "Multi-colour display" },
    { icon: Activity, value: "24-bit",    label: "A/D Converter",   sub: "Sigma-Delta type" },
    { icon: Zap,      value: "25/sec",    label: "Sample Rate",     sub: "Fast stable readings" },
    { icon: Cpu,      value: "12",        label: "Load Cells",      sub: "350Ω, all supported" },
  ];
  return (
    <section className="bg-[#0369a1] border-b-4 border-[#DC2626]">
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

// ─── 3. TFT Advantages ───────────────────────────────────────────────────────

function TFTAdvantages() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>TFT Display Advantages</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            What the TFT Upgrade Delivers
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Four key improvements over the standard IIT 4500 — display quality,
            conversion accuracy, response speed, and load cell capacity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TFT_ADVANTAGES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-gray-100 rounded-sm p-7 hover:shadow-md transition-all group"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}>
              <div className="w-11 h-11 rounded-sm bg-gray-50 group-hover:bg-blue-50 flex items-center justify-center mb-5 transition-colors">
                <Icon size={20} className="text-[#0369a1] group-hover:text-[#0369a1] transition-colors" />
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

// ─── 4. Technical Specifications ─────────────────────────────────────────────

function TechnicalSpecs() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Technical Specifications</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Full Hardware Specifications
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Complete technical detail from the official AND TFT brochure published by Minebea Technologies.
          </p>
        </div>
        <div className="overflow-x-auto rounded-sm border border-gray-200 max-w-3xl"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          <table className="w-full min-w-[520px] border-collapse">
            <thead>
              <tr className="bg-[#0369a1]">
                <th className="text-left px-5 py-3.5 text-white font-bold text-xs uppercase tracking-widest w-2/5">Parameter</th>
                <th className="text-left px-5 py-3.5 text-white font-bold text-xs uppercase tracking-widest">Specification</th>
              </tr>
            </thead>
            <tbody>
              {TFT_SPECS.map(({ label, value }, i) => (
                <tr key={label} className={`border-b border-gray-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                  <td className="px-5 py-3 text-[#111827] font-semibold text-sm">{label}</td>
                  <td className="px-5 py-3 text-gray-600 text-sm">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─── 5. Ideal For ────────────────────────────────────────────────────────────

function IdealFor() {
  const useCases = [
    { title: "High-Volume Mandis",        desc: "Large colour display means less operator error at busy mandi gates processing hundreds of trucks daily." },
    { title: "Multi-Cell Weighbridges",   desc: "Supports up to 12 load cells — ideal for extra-long platforms or weighbridges requiring high cell count for accuracy." },
    { title: "Precision-Critical Sites",  desc: "24-bit A/D converter delivers superior measurement accuracy for sites where even small weighing errors have financial consequences." },
    { title: "High-Visibility Cabins",    desc: "7\" colour screen clearly visible in bright operator cabins without glare or readability issues of character LCD displays." },
  ];
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Ideal Use Cases</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Who Should Choose the TFT</h2>
          <p className="text-gray-500 text-base leading-relaxed">The TFT variant is the right choice when display quality, measurement precision, or large load cell count matter.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {useCases.map(({ title, desc }) => (
            <div key={title} className="border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0369a1] flex-shrink-0 mt-1.5" />
                <div>
                  <h3 className="text-[#111827] font-bold text-sm mb-1.5">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Other Variants ───────────────────────────────────────────────────────

function OtherVariants() {
  const variants = [
    { title: "IIT 4500 Standard Terminal", sub: "Standard LCD — single platform", href: "/products/weighbridges/and4500-email", color: "#1E3A5F" },
    { title: "IIT 4500 Dual Platform",     sub: "Control two weighbridges",        href: "/products/weighbridges/and4500-dual", color: "#374151" },
    { title: "IIT 4500 with GLCD",         sub: "Graphical LCD + Indian languages", href: "/products/weighbridges/iit4500-glcd", color: "#581c87" },
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

// ─── 7. Compatible Weighbridges ───────────────────────────────────────────────

function CompatibleWith() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-8">
          <SectionLabel>Compatible Platforms</SectionLabel>
          <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">Works With All Rite-Way Weighbridges</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {[
            { title: "Concrete Platform Weighbridge", sub: "Recommended — 100 years, zero maintenance", href: "/products/weighbridges/concrete-platform", color: "#1E3A5F", tag: "Most Popular" },
            { title: "Steel Platform Weighbridge",    sub: "Anti-skid diamond plate · 40T–150T",       href: "/products/weighbridges/steel-platform",   color: "#374151", tag: null },
          ].map(({ title, sub, href, color, tag }) => (
            <Link key={title} href={href}
              className="group bg-gray-50 border border-gray-100 rounded-sm p-5 hover:shadow-md hover:bg-white transition-all"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
                  <Truck size={15} className="text-white" />
                </div>
                <div>
                  {tag && <span className="inline-block text-[0.55rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border bg-green-100 text-green-700 border-green-200 mb-1.5">{tag}</span>}
                  <p className="text-[#111827] font-bold text-sm mb-0.5 group-hover:text-[#DC2626] transition-colors">{title}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
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
    <section className="bg-[#0369a1] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Premium TFT Terminal
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Want Maximum Accuracy and the Best Display?
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-10 max-w-lg">
            The TFT variant is our highest-specification terminal. WhatsApp us to confirm
            availability and pricing for your weighbridge configuration.
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

export default function IIT4500TFTPage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <TFTAdvantages />
      <TechnicalSpecs />
      <IdealFor />
      <OtherVariants />
      <CompatibleWith />
      <CTABanner />
    </>
  );
}