import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Usb,
  MessageSquare,
  Layers,
  LayoutGrid,
  Shield,
  Zap,
  FileText,
  Users,
  BarChart3,
  Truck,
  Monitor,
  Camera,
} from "lucide-react";

// ─── Reusable image placeholder ───────────────────────────────────────────────
// Replace with next/image when real photos available. aspect-ratio keeps layout stable.
function ImgPlaceholder({
  label,
  icon: Icon,
  badge = "Photo Coming Soon",
  aspect = "16/9",
  height,
  className = "",
}: {
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badge?: string;
  aspect?: string;
  height?: string;
  className?: string;
}) {
  return (
    <div
      className={"w-full relative overflow-hidden " + className}
      style={{
        background: "#1E3A5F",
        aspectRatio: height ? undefined : aspect,
        height: height,
      }}
    >
      {/* Dot-grid pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      {/* Vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)" }} />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 px-4">
        <div className="w-14 h-14 rounded-sm bg-white/10 flex items-center justify-center">
          <Icon size={28} className="text-white/70" />
        </div>
        <p className="text-white font-bold text-sm md:text-base tracking-tight text-center leading-snug max-w-xs">{label}</p>
        <span className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gray-400 bg-black/30 px-3 py-1 rounded-full">{badge}</span>
      </div>
    </div>
  );
}


// ─── Shared ───────────────────────────────────────────────────────────────────

const WA_HREF =
  "https://wa.me/919877541199?text=" +
  encodeURIComponent(
    "Hello Rite-Way, I am interested in the AND 4500 Dual Platform Intelligent Terminal. Please advise."
  );

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

function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd" clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor"
      />
    </svg>
  );
}

// ─── Feature data ─────────────────────────────────────────────────────────────

const SOFTWARE_FEATURES = [
  { icon: Shield,    label: "Installation Privilege",    desc: "Role-based access control for administrators and operators" },
  { icon: Zap,       label: "Weighbridge Privilege",     desc: "Assign operator permissions per weighbridge independently" },
  { icon: LayoutGrid, label: "Mandi Application",        desc: "Built-in grain mandi weighment workflow — ready out of the box" },
  { icon: BarChart3, label: "LOT Wise Reports",          desc: "Group and report weighments by lot number for produce tracking" },
  { icon: FileText,  label: "RST Wise Reports",          desc: "Generate reports sorted by RST for compliance and auditing" },
  { icon: Users,     label: "Vehicle Master",            desc: "Store and recall vehicle details for fast repeated weighment" },
];

const HARDWARE_FEATURES = [
  { icon: Usb,          label: "USB Pen Drive Export",      desc: "Export all weighment data to USB drive in seconds — no PC needed" },
  { icon: MessageSquare, label: "SMS Facility",             desc: "Send weighment receipts and reports directly to mobile via SMS" },
  { icon: FileText,     label: "Pre-printed Stationery",    desc: "Works with pre-printed weighment slips for professional output" },
  { icon: Database,     label: "1 Lakh Record Memory",      desc: "Store 100,000 weighment records internally — months of data" },
  { icon: Layers,       label: "Breakdown Independence",    desc: "Each weighbridge operates independently if the other is offline" },
];

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      {/* Photo placeholder: AND 4500 Dual Platform Terminal — Display Unit and Weighbridge Cabin */}
      <div className="absolute inset-0">
        <ImgPlaceholder label="AND 4500 Dual Platform Terminal — Display Unit and Weighbridge Cabin" icon={Monitor} height="100%" className="h-full" />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#1E3A5F]/70 pointer-events-none" />
      {/* Red left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626] z-10" aria-hidden="true" />

<div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-7 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products/weighbridges" className="hover:text-white transition-colors">Weighbridges</Link>
          <span>/</span>
          <span className="text-white/90 font-medium">AND 4500 Dual Terminal</span>
        </nav>

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
              Smart Terminal
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              ISO 9001:2015
            </span>
          </div>

          <h1
            className="text-white font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            AND 4500 Dual Platform Intelligent Terminal
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            Control two weighbridges simultaneously with a single indicator and one
            operator room. 32-bit ARM processor, 1 lakh record memory, built-in Mandi
            application, USB export, and SMS facility — all in one terminal.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={WA_HREF}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm"
            >
              <WAIcon /> WhatsApp Get Quote
            </a>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors"
            >
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
    { icon: Layers,    value: "2",          label: "Weighbridges",    sub: "Controlled simultaneously" },
    { icon: Database,  value: "1 Lakh",     label: "Record Memory",   sub: "100,000 weighments stored" },
    { icon: Cpu,       value: "32-bit",     label: "ARM Processor",   sub: "Fast, reliable processing" },
    { icon: Usb,       value: "USB + SMS",  label: "Data Export",     sub: "Instant data transfer" },
  ];

  return (
    <section className="bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <div
              key={label}
              className={`flex items-start gap-4 ${i < stats.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-6" : ""}`}
            >
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

// ─── 3. Capability Modes ─────────────────────────────────────────────────────

function CapabilityModes() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Two Powerful Operating Modes
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            The AND 4500 Dual Terminal supports two distinct operational
            configurations — choose the one that fits your site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Capacity Expansion Mode */}
          <div
            className="border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
          >
            {/* Product placeholder */}
            <div
              className="h-44 relative overflow-hidden"
              style={{ background: "#1E3A5F" }}
            >
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-10">
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center">
                  <Monitor size={24} className="text-white/80" />
                </div>
                <p className="text-white font-bold text-sm tracking-tight text-center px-4">AND 4500 Dual Terminal</p>
                <span className="text-[0.58rem] font-bold uppercase tracking-widest text-white bg-white/15 px-2.5 py-1 rounded-full">Dual Platform</span>
              </div>
            </div>

            <div className="p-7">
              <h3 className="text-[#111827] font-bold text-xl mb-2">Capacity Expansion Mode</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                One large weighbridge platform is logically split into two independent
                sections for different vehicle types or commodity streams. Each section
                is weighed and reported separately — doubling throughput without doubling
                infrastructure cost.
              </p>
              <ul className="space-y-2.5">
                {[
                  "One platform, two logical sections",
                  "Handle two vehicle streams simultaneously",
                  "Separate reports per section",
                  "Ideal for high-volume mandis and factories",
                  "Maximise ROI on a single weighbridge",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dual Control Mode */}
          <div
            className="border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
          >
            <div
              className="h-44 relative overflow-hidden"
              style={{ background: "#1E3A5F" }}
            >
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
              {/* Two separate platforms visual */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-10">
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center">
                  <Monitor size={24} className="text-white/80" />
                </div>
                <p className="text-white font-bold text-sm tracking-tight text-center px-4">AND 4500 Dual Terminal</p>
                <span className="text-[0.58rem] font-bold uppercase tracking-widest text-white bg-white/15 px-2.5 py-1 rounded-full">1 Operator · 2 Bridges</span>
              </div>
            </div>

            <div className="p-7">
              <h3 className="text-[#111827] font-bold text-xl mb-2">Dual Control Mode</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Two completely separate weighbridges — at different locations or gates —
                are controlled by a single terminal and operator room. Each weighbridge
                functions independently, but all data is consolidated in one system
                for unified reporting.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Two physically separate weighbridges",
                  "Controlled from one operator room",
                  "Unified reporting across both",
                  "Saves cost of second operator & room",
                  "Each weighbridge operates independently",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Features ─────────────────────────────────────────────────────────────

function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Complete Feature Set</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Software &amp; Hardware Capabilities
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Everything built in — no additional software licenses or hardware
            modules required for standard operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Software */}
          <div
            className="bg-white border border-gray-100 rounded-sm overflow-hidden"
            style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
          >
            <div className="h-1 bg-[#1E3A5F]" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-sm bg-[#1E3A5F] flex items-center justify-center">
                  <LayoutGrid size={16} className="text-white" />
                </div>
                <h3 className="text-[#111827] font-bold text-base">Software Features</h3>
              </div>
              <div className="space-y-5">
                {SOFTWARE_FEATURES.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex gap-3">
                    <div className="w-7 h-7 rounded-sm bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={13} className="text-[#1E3A5F]" />
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

          {/* Hardware */}
          <div
            className="bg-white border border-gray-100 rounded-sm overflow-hidden"
            style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
          >
            <div className="h-1 bg-[#DC2626]" />
            <div className="p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-sm bg-[#DC2626] flex items-center justify-center">
                  <Cpu size={16} className="text-white" />
                </div>
                <h3 className="text-[#111827] font-bold text-base">Hardware Features</h3>
              </div>
              <div className="space-y-5">
                {HARDWARE_FEATURES.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex gap-3">
                    <div className="w-7 h-7 rounded-sm bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={13} className="text-[#DC2626]" />
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
        </div>
      </div>
    </section>
  );
}

// ─── 5. Breakdown Independence Callout ────────────────────────────────────────

function TerminalCabinPhoto() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Photo placeholder: AND 4500 Terminal installed at weighbridge cabin */}
        <ImgPlaceholder label="AND 4500 Terminal Installed at Weighbridge Operator Cabin" icon={Monitor} aspect="21/9" className="rounded-sm" />
        <p className="text-xs text-gray-400 mt-2 text-center">AND 4500 Dual Platform Terminal — site installation</p>
      </div>
    </section>
  );
}

function BreakdownCallout() {
  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div
            className="rounded-sm overflow-hidden border border-green-200"
            style={{ boxShadow: "0 2px 20px rgba(22,163,74,0.08)" }}
          >
            <div className="h-1 bg-green-500" />
            <div className="bg-green-50 p-7 flex flex-col sm:flex-row gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-sm bg-green-100 border border-green-200 flex items-center justify-center">
                  <Shield size={22} className="text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-[#111827] font-bold text-lg mb-2">
                  Breakdown Independence — Zero Downtime
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  If one weighbridge breaks down or goes offline for maintenance,
                  the other continues operating{" "}
                  <strong className="text-[#111827]">completely independently</strong>.
                  Your business never stops. No waiting for repairs. No lost weighments.
                  Each platform has its own independent circuit — failure of one does not
                  affect the other in any way.
                </p>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Independent circuits per weighbridge",
                    "No cascading failures",
                    "Business continuity guaranteed",
                    "Critical for high-throughput operations",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-1.5 text-xs text-green-800 font-medium">
                      <CheckCircle2 size={12} className="text-green-500 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Compatible Weighbridges ───────────────────────────────────────────────

function CompatibleWith() {
  const platforms = [
    {
      title: "Concrete Platform Weighbridge",
      sub: "Recommended — 100 years, zero maintenance",
      href: "/products/weighbridges/concrete-platform",
      accent: "#1E3A5F",
      tag: "Most Popular",
      tagColor: "bg-green-100 text-green-700 border-green-200",
    },
    {
      title: "Steel Platform Weighbridge",
      sub: "Anti-skid diamond plate · 40T–150T",
      href: "/products/weighbridges/steel-platform",
      accent: "#374151",
      tag: null,
      tagColor: "",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Compatible Platforms</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Works With All Rite-Way Weighbridges
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            The AND 4500 Dual Terminal is compatible with both concrete and steel
            platform weighbridges in any combination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {platforms.map(({ title, sub, href, accent, tag, tagColor }) => (
            <Link
              key={title}
              href={href}
              className="group border border-gray-100 bg-white rounded-sm p-6 hover:shadow-md hover:border-gray-200 transition-all duration-200"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: accent }}
                >
                  <Truck size={17} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  {tag && (
                    <span className={`inline-block text-[0.58rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border mb-2 ${tagColor}`}>
                      {tag}
                    </span>
                  )}
                  <p className="text-[#111827] font-bold text-sm leading-snug mb-1 group-hover:text-[#DC2626] transition-colors">
                    {title}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">{sub}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors">
                View platform <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
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
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p
            className="text-white/50 font-semibold mb-3"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Get Expert Advice
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Need to Control Two Weighbridges from One Room?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Our team will help you determine whether Capacity Expansion Mode or
            Dual Control Mode is right for your site — and handle the complete
            installation and commissioning.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_HREF}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors"
            >
              <WAIcon /> WhatsApp Our Team
            </a>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors"
            >
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link
              href="/products/weighbridges"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors"
            >
              All Weighbridges
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AND4500DualPage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <CapabilityModes />
      <FeaturesSection />
      <TerminalCabinPhoto />
      <BreakdownCallout />
      <CompatibleWith />
      <CTABanner />
    </>
  );
}