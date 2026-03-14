import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Usb,
  MessageSquare,
  LayoutGrid,
  Shield,
  Zap,
  FileText,
  BarChart3,
  Truck,
  Monitor,
  Wheat,
  Factory,
} from "lucide-react";

const WA_HREF =
  "https://wa.me/919877541199?text=" +
  encodeURIComponent("Hello Rite-Way, I am interested in the IIT 4500 Standard Terminal. Please advise on specifications and pricing.");

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

// ─── Data from IIT-4500.docx ──────────────────────────────────────────────────

const IIT_FEATURES = [
  { icon: Shield,    label: "Manipulation-Proof",          desc: "Input signal from digital load cells is in digital form — impossible to tamper with weight readings at any stage." },
  { icon: Zap,       label: "Long-Distance Installation",   desc: "Digital signal travels reliably over long cable runs between the weighbridge structure and the operator room." },
  { icon: BarChart3, label: "Higher Accuracy",              desc: "Lower division sizes achievable with digital load cells, leading to greater accuracy across the full weighing range." },
  { icon: Cpu,       label: "Smart Calibration",            desc: "Multi-step smart calibration. No manual cornering with trimpots. No test weights required for initial setup." },
  { icon: Zap,       label: "Automatic Fault Diagnosis",    desc: "Automatic fault detection with warning identifying the specific load cell at fault — faster maintenance, less downtime." },
  { icon: FileText,  label: "Installation Report",          desc: "Complete installation report generated automatically — settings, calibration data, and full configuration on record." },
];

const SOFTWARE_INSTALLATION = [
  "Initial LCD message settable as OEM name or weighbridge name",
  "Installation settings secured under engineer login",
  "Engineer password settable by authorised OEM",
  "Three cornering types available",
  "Smart calibration with multi-step process",
  "Mandi application: Rate, Amount, binding material deduction",
];

const SOFTWARE_WEIGHBRIDGE = [
  "Simple tare and gross vehicle weighment process",
  "10 ticket entry fields × 25 characters each",
  "4 code banks × 100 codes each — fully configurable",
  "Field-settable header, footer, and signature lines",
  "View / print earlier records by RST or vehicle number",
  "Reports: All / Summary / Filtered / Serial / Date / Time wise",
  "USB pen drive data dump in .xls format",
  "SMS feature in 3 modes",
  "Net weight printed in words",
  "Mandi application features built in",
];

const HARDWARE_SPECS = [
  { label: "Processor",            value: "32-bit ARM, 50 MHz" },
  { label: "Memory",               value: "On-board — 1 lakh (100,000) records" },
  { label: "Real Time Clock",      value: "Battery-backed on-board RTC" },
  { label: "Power Supply",         value: "SMPS — 90V to 270V AC @ 50Hz" },
  { label: "Protection",           value: "750mA fuse, EMI/RFI filter, spike suppressor, opto-isolation" },
  { label: "Power Consumption",    value: "10 VA approx." },
  { label: "Load Cell Excitation", value: "13.5V DC, 300mA — up to 16 DLCs" },
  { label: "Display",              value: "16×2 LCD with backlight + ½\" LED 7-segment red display" },
  { label: "Keyboard Port",        value: "101-key USB keyboard (Logitech/Microsoft recommended)" },
  { label: "USB Port",             value: "USB for pen drive — .xls data export" },
  { label: "Printer Port",         value: "Isolated Centronics — 80-column dot matrix printer" },
  { label: "Serial Port",          value: "Isolated RS-232 for weight transfer / GSM modem" },
  { label: "Remote Display Port",  value: "Connects ½\", 1\", 2.3\", or 4\" LED external display" },
  { label: "Environment",          value: "0°C to 55°C · Up to 95% RH non-condensing" },
];

const SCOPE_OF_SUPPLY = ["IIT 4500 Terminal unit", "Power cable", "Load cell connector", "Printer isolator cable"];

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
          <span className="text-white/90 font-medium">IIT 4500 Standard Terminal</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Single Platform Terminal</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
          </div>
          <h1 className="text-white font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            IIT 4500 Intelligent Terminal
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
            Specially designed for single weighbridge applications with digital load cells.
            Features weighing, data processing, record saving, and printing — all standalone,
            no PC required. Robust construction withstands harsh industrial environments.
            Operates reliably across a wide temperature range and in humid conditions.
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
    { icon: Monitor,     value: "1",        label: "Weighbridge",    sub: "Standalone operation" },
    { icon: Database,    value: "1 Lakh",   label: "Record Memory",  sub: "100,000 weighments" },
    { icon: Cpu,         value: "32-bit",   label: "ARM Processor",  sub: "50 MHz clock speed" },
    { icon: MessageSquare, value: "SMS",    label: "3 Modes",        sub: "Instant notifications" },
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

// ─── 3. IIT Digital Load Cell Features ───────────────────────────────────────

function IITFeatures() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>IIT Digital Load Cell Advantages</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Why Digital Load Cells Change Everything
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            The IIT 4500 is designed specifically for digital load cells — delivering
            accuracy, reliability, and installation speed that analog systems cannot match.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {IIT_FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all group"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-10 h-10 rounded-sm bg-gray-50 group-hover:bg-[#1E3A5F] flex items-center justify-center mb-4 transition-colors">
                <Icon size={17} className="text-[#1E3A5F] group-hover:text-white transition-colors" />
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

// ─── 4. Software Features ────────────────────────────────────────────────────

function SoftwareFeatures() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Software Features</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Installation &amp; Weighbridge Privileges
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Two-level access: engineer installation settings are protected separately
            from daily operator weighment functions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-100 rounded-sm overflow-hidden" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
            <div className="h-1 bg-[#1E3A5F]" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-sm bg-[#1E3A5F] flex items-center justify-center">
                  <Shield size={16} className="text-white" />
                </div>
                <h3 className="text-[#111827] font-bold text-base">Installation Privilege</h3>
              </div>
              <ul className="space-y-2.5">
                {SOFTWARE_INSTALLATION.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 size={11} className="text-[#1E3A5F] flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-sm overflow-hidden" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
            <div className="h-1 bg-[#DC2626]" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-sm bg-[#DC2626] flex items-center justify-center">
                  <LayoutGrid size={16} className="text-white" />
                </div>
                <h3 className="text-[#111827] font-bold text-base">Weighbridge Privilege</h3>
              </div>
              <ul className="space-y-2.5">
                {SOFTWARE_WEIGHBRIDGE.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                    <CheckCircle2 size={11} className="text-[#DC2626] flex-shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Salient features strip */}
        <div className="mt-8 bg-white border border-gray-100 rounded-sm p-6" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
          <p className="text-[#111827] font-bold text-sm mb-4">Salient Features</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Works with pre-calibrated Appalto DLCs",
              "Compatible with Zemic, Ningbo, Thames Side, Flintec",
              "Field setting for vehicle-wise working",
              "USB pen drive connectivity — .xls format",
              "SMS provision (3 modes)",
              "Field-settable pre-printed stationery",
              "Mandi application built-in",
              "Up to 16 load cells configurable",
              "No manual cornering required",
            ].map((f) => (
              <div key={f} className="flex items-start gap-2 text-xs text-gray-600">
                <CheckCircle2 size={11} className="text-green-500 flex-shrink-0 mt-0.5" />{f}
              </div>
            ))}
          </div>
        </div>

        {/* Optional features */}
        <div className="mt-5 bg-[#1E3A5F]/5 border border-[#1E3A5F]/15 rounded-sm px-6 py-5">
          <p className="text-[#1E3A5F] font-bold text-sm mb-2">Optional Features</p>
          <div className="flex flex-wrap gap-3">
            {["Confidential Report", "GLCD Display Upgrade", "TFT Display Upgrade", "Inbuilt Wireless for Load Cells & Display", "Multiple housing choices"].map((f) => (
              <span key={f} className="text-xs text-[#1E3A5F] bg-white border border-[#1E3A5F]/20 px-3 py-1.5 rounded-full font-medium">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 5. Applications ─────────────────────────────────────────────────────────

function Applications() {
  const apps = [
    { icon: Factory,  title: "Industrial Weighbridges", desc: "Single-platform weighbridge at factory gates, dispatch bays, and production facilities." },
    { icon: Wheat,    title: "Grain Mandis",             desc: "Built-in Mandi application handles rate, amount, and binding material deductions — ready out of the box." },
    { icon: Truck,    title: "Toll Ways",                desc: "Robust construction and wide operating range handles harsh outdoor toll booth environments." },
    { icon: Database, title: "High Volume Sites",        desc: "1 lakh record memory and USB export handle months of continuous operation without any PC dependency." },
  ];
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Applications</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Where It Is Used</h2>
          <p className="text-gray-500 text-base leading-relaxed">Industrial weighbridges, grain mandis, toll ways, and high-volume commercial sites.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {apps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all group"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-10 h-10 rounded-sm bg-gray-50 group-hover:bg-red-50 flex items-center justify-center mb-4 transition-colors">
                <Icon size={17} className="text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors" />
              </div>
              <h3 className="text-[#111827] font-bold text-sm mb-2">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Technical Specifications ─────────────────────────────────────────────

function TechnicalSpecs() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <SectionLabel>Technical Specifications</SectionLabel>
            <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-6">Full Hardware Specifications</h2>
            <div className="overflow-x-auto rounded-sm border border-gray-200"
              style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
              <table className="w-full min-w-[480px] border-collapse">
                <thead>
                  <tr className="bg-[#1E3A5F]">
                    <th className="text-left px-5 py-3.5 text-white font-bold text-xs uppercase tracking-widest w-2/5">Parameter</th>
                    <th className="text-left px-5 py-3.5 text-white font-bold text-xs uppercase tracking-widest">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  {HARDWARE_SPECS.map(({ label, value }, i) => (
                    <tr key={label} className={`border-b border-gray-100 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"}`}>
                      <td className="px-5 py-3 text-[#111827] font-semibold text-sm">{label}</td>
                      <td className="px-5 py-3 text-gray-600 text-sm">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Scope of Supply */}
          <div>
            <div className="bg-white border border-gray-100 rounded-sm p-6" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <p className="text-[#111827] font-bold text-sm mb-4">Scope of Supply</p>
              <ul className="space-y-2.5">
                {SCOPE_OF_SUPPLY.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-green-500 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <p className="text-[#111827] font-bold text-sm mb-3">Need the Dual Platform Version?</p>
                <Link href="/products/weighbridges/and4500-dual"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors group">
                  IIT 4500 Dual Platform Terminal
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. Compatible Weighbridges ───────────────────────────────────────────────

function CompatibleWith() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Compatible Platforms</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Works With All Rite-Way Weighbridges</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {[
            { title: "Concrete Platform Weighbridge", sub: "Recommended — 100 years, zero maintenance", href: "/products/weighbridges/concrete-platform", color: "#1E3A5F", tag: "Most Popular" },
            { title: "Steel Platform Weighbridge",    sub: "Anti-skid diamond plate · 40T–150T",       href: "/products/weighbridges/steel-platform",   color: "#374151", tag: null },
          ].map(({ title, sub, href, color, tag }) => (
            <Link key={title} href={href}
              className="group bg-gray-50 border border-gray-100 rounded-sm p-6 hover:shadow-md hover:bg-white transition-all"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
                  <Truck size={17} className="text-white" />
                </div>
                <div>
                  {tag && <span className="inline-block text-[0.58rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border bg-green-100 text-green-700 border-green-200 mb-2">{tag}</span>}
                  <p className="text-[#111827] font-bold text-sm mb-1 group-hover:text-[#DC2626] transition-colors">{title}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors">
                View platform <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
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
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            IIT 4500 Terminal
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Ready to Upgrade Your Weighbridge Terminal?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Our team will install, configure, and commission the IIT 4500 at your site —
            and train your operator. No PC required. Works out of the box.
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

export default function IIT4500StandardPage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <IITFeatures />
      <SoftwareFeatures />
      <Applications />
      <TechnicalSpecs />
      <CompatibleWith />
      <CTABanner />
    </>
  );
}