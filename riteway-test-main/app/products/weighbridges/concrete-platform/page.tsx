import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingDown,
  Wrench,
  Zap,
  Shield,
  MapPin,
  Layers,
  Settings,
  ClipboardCheck,
  BarChart3,
  Mail,
  TrendingUp,
  Truck,
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
    "Hello Rite-Way, I am interested in the Concrete Platform Weighbridge. Please advise on size, capacity, and pricing."
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

// ─── Data ─────────────────────────────────────────────────────────────────────

const SIZES = [
  { size: "5 × 3 m",   cap: "40T"  },
  { size: "7.5 × 3 m", cap: "60T"  },
  { size: "9 × 3 m",   cap: "80T"  },
  { size: "12 × 3 m",  cap: "80T"  },
  { size: "14 × 3 m",  cap: "100T" },
  { size: "15 × 3 m",  cap: "100T" },
  { size: "16 × 3 m",  cap: "100T" },
  { size: "18 × 3 m",  cap: "150T" },
  { size: "24 × 3 m",  cap: "200T" },
];

const HOW_IT_WORKS = [
  {
    icon: MapPin,
    step: "01",
    title: "Site Assessment",
    desc: "Our engineer visits your site to assess ground conditions, traffic flow, space availability, and utility connections. Pit type vs pitless recommendation made here.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Foundation Design",
    desc: "Structural design of the RCC foundation and platform prepared based on your required capacity (40T–200T) and site dimensions. Load cell pocket positions marked.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Concrete Casting",
    desc: "Monolithic RCC platform cast on-site by our team. No transport of heavy steel required. Concrete cured and load cell pockets formed to precise tolerances.",
  },
  {
    icon: Zap,
    step: "04",
    title: "Load Cell Installation",
    desc: "6 high-precision Minebea load cell transducers installed in the pockets. Junction box wiring and indicator connection completed and tested.",
  },
  {
    icon: ClipboardCheck,
    step: "05",
    title: "Calibration & Verification",
    desc: "Full weighbridge calibrated using certified test weights. Legal Metrology verification conducted and stamp obtained. Site acceptance test completed in your presence.",
  },
];

const WHY_CONCRETE = [
  {
    icon: Shield,
    title: "Rigid Monolithic Structure",
    desc: "Cast as a single continuous RCC unit, the platform distributes vehicle load equally across all 6 load cells. No flex, no lateral pull, no accumulated error — just repeatable accuracy every time.",
  },
  {
    icon: TrendingDown,
    title: "Cast On-Site — Zero Transport Cost",
    desc: "The concrete platform is built where it will stand. No heavy fabrication off-site, no expensive road transport of a 40-ton steel deck. Material arrives as aggregate and cement — a fraction of the cost.",
  },
  {
    icon: Zap,
    title: "Immune to Lightning & Static",
    desc: "Concrete is a non-conductor. Unlike steel platforms that channel electrostatic charge and lightning directly into your instrumentation, concrete protects your load cells and indicators in all weather.",
  },
  {
    icon: TrendingUp,
    title: "Capacity Upgradeable",
    desc: "Need more capacity in the future? Swap to heavy-duty load cells and your concrete platform is instantly upgraded to 100T+. No structural work. No new platform. No downtime beyond installation.",
  },
];

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      {/* Photo placeholder: Concrete Platform Weighbridge — Pit Type Installation, Mohali Punjab */}
      <div className="absolute inset-0">
        <ImgPlaceholder label="Concrete Platform Weighbridge — Pit Type Installation, Mohali Punjab" icon={Layers} height="100%" className="h-full" />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#1E3A5F]/70 pointer-events-none" />
      {/* Red left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626] z-10" aria-hidden="true" />

<div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-7" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products/weighbridges" className="hover:text-white transition-colors">Weighbridges</Link>
          <span>/</span>
          <span className="text-white/90 font-medium">Concrete Platform</span>
        </nav>

        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-white bg-[#DC2626] px-3 py-1 rounded-full">
              ★ Our #1 Product
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
              Since 2004
            </span>
          </div>

          <h1
            className="text-white font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            Concrete Platform Weighbridge
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            The most durable, accurate, and cost-effective weighbridge platform available.
            Rigid monolithic RCC construction — 100-year lifespan, zero maintenance,
            40% lower material cost than steel. Cast on-site. Available in pit type and
            pitless, 40T to 200T.
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
            <Link
              href="/why-concrete"
              className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-6 py-3.5 rounded-sm hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition-colors"
            >
              Why Concrete?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Key Highlights Row ────────────────────────────────────────────────────

function HighlightsRow() {
  const stats = [
    { icon: Clock,       value: "100 Years", label: "Platform Lifespan",    sub: "RCC never rusts or bends" },
    { icon: TrendingDown, value: "40% Less",  label: "Lower Material Cost",  sub: "vs fabricated steel" },
    { icon: Wrench,      value: "Zero",       label: "Maintenance Required", sub: "No rust, paint, or bolts" },
    { icon: TrendingUp,  value: "200T",       label: "Maximum Capacity",     sub: "24×3m platform size" },
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

// ─── 3. Technical Specifications ─────────────────────────────────────────────

const SPECS = [
  { attribute: "Platform Material",   specification: "Reinforced Cement Concrete (RCC) — cast on-site",        highlight: false },
  { attribute: "Available Sizes",     specification: "5×3m to 24×3m — 9 standard sizes",                       highlight: false },
  { attribute: "Capacity Range",      specification: "40T to 200T",                                             highlight: false },
  { attribute: "Number of Load Cells",specification: "6 load cells",                                            highlight: false },
  { attribute: "Load Cell Type",      specification: "Digital or Analog — both available",                     highlight: false },
  { attribute: "Installation Type",   specification: "Pit Type and Pitless — both available",                  highlight: false },
  { attribute: "Platform Lifespan",   specification: "100 years",                                               highlight: true  },
  { attribute: "Maintenance Required",specification: "Zero — fully RCC, no rust, no painting, no bolt tightening", highlight: true },
  { attribute: "Lightning Protection",specification: "Full immunity — concrete is non-conductive",              highlight: false },
  { attribute: "Capacity Upgrade",    specification: "Yes — load cells only, no structural change required",   highlight: true  },
  { attribute: "Accuracy",            specification: "±10 kg at full load",                                     highlight: false },
  { attribute: "Certification",       specification: "ISO 9001:2015 · Legal Metrology compliant",              highlight: false },
];

function TechnicalSpecs() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-xl mb-10">
          <SectionLabel>Technical Specifications</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Engineering Specifications
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Full technical detail for the Rite-Way Concrete Platform Weighbridge.
            Available in 9 standard sizes — custom sizes on request.
          </p>
        </div>

        {/* Table wrapper — horizontal scroll on mobile */}
        <div className="overflow-x-auto rounded-sm border border-gray-200" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          <table className="w-full min-w-[540px] border-collapse">

            {/* Header */}
            <thead>
              <tr className="bg-[#1E3A5F]">
                <th
                  className="text-left px-6 py-4 text-white font-bold text-xs uppercase tracking-[0.14em] w-2/5"
                  style={{ letterSpacing: "0.12em" }}>
                  Attribute
                </th>
                <th
                  className="text-left px-6 py-4 text-white font-bold text-xs uppercase tracking-[0.14em]"
                  style={{ letterSpacing: "0.12em" }}>
                  Specification
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {SPECS.map(({ attribute, specification, highlight }, i) => (
                <tr
                  key={attribute}
                  className={`border-b border-gray-100 last:border-b-0 transition-colors hover:bg-blue-50/30 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                  }`}>
                  <td className="px-6 py-4 align-top">
                    <span className="text-[#111827] font-semibold text-sm">{attribute}</span>
                  </td>
                  <td className="px-6 py-4 align-top">
                    <div className="flex items-start gap-2.5">
                      {highlight && (
                        <span
                          className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-green-500 inline-block"
                          aria-hidden="true"
                          style={{ marginTop: "0.35rem" }}
                        />
                      )}
                      <span className={`text-sm leading-relaxed ${highlight ? "text-[#111827] font-semibold" : "text-gray-600"}`}>
                        {specification}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block flex-shrink-0" />
          Highlighted rows indicate key advantages of concrete over steel platform.
          Custom sizes and capacities available on request — <a
            href="https://wa.me/919877541199?text=Hello%20Rite-Way%2C%20I%20need%20a%20custom%20size%20concrete%20weighbridge.%20Please%20advise."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] font-semibold hover:underline">WhatsApp us</a>.
        </p>
      </div>
    </section>
  );
}

// ─── 4. Installation Types ────────────────────────────────────────────────────

function InstallationTypes() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Two Installation Options</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Pit Type or Pitless — Your Site, Your Choice
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            The concrete platform is available in both installation configurations.
            Our engineer will recommend the best fit after a site visit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Pit Type */}
          <div
            className="border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
          >
            {/* Product placeholder */}
            <div
              className="h-44 relative overflow-hidden flex flex-col items-center justify-center gap-3"
              style={{ background: "#1E3A5F" }}
            >
              {/* Subtle grid pattern */}
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
              {/* Icon */}
              <div className="relative z-10 flex flex-col items-center gap-2.5">
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center">
                  <Layers size={24} className="text-white/80" />
                </div>
                <p className="text-white font-bold text-sm tracking-tight text-center px-4">Concrete Platform — Pit Type</p>
                <span className="text-[0.58rem] font-bold uppercase tracking-widest text-white bg-white/15 px-2.5 py-1 rounded-full">40T – 200T</span>
              </div>
            </div>

            <div className="p-7">
              <h3 className="text-[#111827] font-bold text-xl mb-2">Pit Type Installation</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                The entire weighbridge — platform, load cells, and structure — is installed
                below ground level. The platform surface is flush with the surrounding road.
                Vehicles drive on and off without any ramps or height changes.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Platform flush with ground — no ramps needed",
                  "Vehicles approach from any direction",
                  "Requires less total space than pitless",
                  "Ideal for tight or high-traffic sites",
                  "Access pit provided for maintenance",
                  "Suitable for harsh, heavy-duty environments",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pitless */}
          <div
            className="border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
          >
            <div
              className="h-44 relative overflow-hidden"
              style={{ background: "#1E3A5F" }}
            >
              <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-10">
                <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center">
                  <Layers size={24} className="text-white/80" />
                </div>
                <p className="text-white font-bold text-sm tracking-tight text-center px-4">Concrete Platform — Pitless</p>
                <span className="text-[0.58rem] font-bold uppercase tracking-widest text-white bg-white/15 px-2.5 py-1 rounded-full">Surface Type</span>
              </div>
            </div>

            <div className="p-7">
              <h3 className="text-[#111827] font-bold text-xl mb-2">Pitless (Surface Type)</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                The weighbridge structure sits above ground level. Approach ramps on both
                ends allow vehicles to drive up and onto the platform. No excavation
                required — reducing installation time and cost where digging is difficult.
              </p>
              <ul className="space-y-2.5">
                {[
                  "No excavation — no digging required",
                  "Faster and less disruptive to install",
                  "No waterlogging risk during monsoon",
                  "Approach ramps on both sides",
                  "Easy cleaning and inspection underneath",
                  "Ideal where ground is rocky or hard",
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

// ─── 4. Size Table ────────────────────────────────────────────────────────────

function InstallationPhotoRow() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Photo placeholder: Pit Type Installation View */}
          <div>
            <ImgPlaceholder label="Pit Type Installation — Platform Flush with Ground" icon={Layers} aspect="4/3" className="rounded-sm" />
            <p className="text-xs text-gray-400 mt-2 text-center">Pit Type Installation</p>
          </div>
          {/* Photo placeholder: Pitless Surface Type Installation View */}
          <div>
            <ImgPlaceholder label="Pitless Surface Type — Ramp Approach View" icon={Layers} aspect="4/3" className="rounded-sm" />
            <p className="text-xs text-gray-400 mt-2 text-center">Pitless (Surface Type) Installation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SizeTable() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Standard Configurations</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            All Available Sizes &amp; Capacities
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            9 standard sizes, all available in pit type and pitless. Custom lengths available on request.
          </p>
        </div>

        <div
          className="border border-gray-200 rounded-sm overflow-hidden max-w-2xl"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 bg-[#1E3A5F]">
            {["#", "Platform Size", "Max Capacity"].map((h) => (
              <div key={h} className="px-5 py-3.5">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{h}</span>
              </div>
            ))}
          </div>
          {SIZES.map(({ size, cap }, i) => (
            <div
              key={size}
              className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 hover:bg-white transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
              }`}
            >
              <div className="px-5 py-3.5 flex items-center">
                <span className="text-gray-400 font-bold text-xs tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="px-5 py-3.5 flex items-center">
                <span className="text-[#111827] font-semibold text-sm">{size}</span>
              </div>
              <div className="px-5 py-3.5 flex items-center">
                <span className="text-[#DC2626] font-bold text-sm">{cap}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-5 max-w-2xl">
          {[
            "All sizes available in pit type & pitless",
            "6 load cells — monolithic RCC",
            "Custom sizes on request",
            "Capacity upgradeable without structural change",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 size={12} className="text-green-500" /> {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. How It Works ─────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <SectionLabel>End-to-End Process</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            How We Install Your Weighbridge
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From your first call to Legal Metrology stamp — our team manages
            every step of the project at your site.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connector line — desktop */}
          <div className="hidden md:block absolute left-[22px] top-10 bottom-10 w-px bg-gray-100" />

          <div className="space-y-6">
            {HOW_IT_WORKS.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="flex gap-6 group">
                {/* Step circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-11 h-11 rounded-full bg-gray-50 border-2 border-gray-100 group-hover:border-[#DC2626] group-hover:bg-red-50 flex items-center justify-center transition-all duration-200 z-10 relative">
                    <Icon size={16} className="text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors" />
                  </div>
                </div>
                {/* Content */}
                <div className="pb-6">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span
                      className="text-[#DC2626] font-bold tabular-nums"
                      style={{ fontSize: "0.62rem", letterSpacing: "0.1em" }}
                    >
                      Step {step}
                    </span>
                    <h3 className="text-[#111827] font-bold text-base">{title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xl">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Why Choose Concrete ───────────────────────────────────────────────────

function CastingPhoto() {
  return (
    <section className="bg-gray-50 py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Photo placeholder: Concrete casting in progress on-site */}
        <ImgPlaceholder label="Concrete Platform Casting in Progress — On-Site Installation" icon={Camera} aspect="21/9" className="rounded-sm" />
        <p className="text-xs text-gray-400 mt-2 text-center">RCC platform being cast on-site — no transport cost</p>
      </div>
    </section>
  );
}

function WhyConcreteSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>The Engineering Case</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Why Concrete Beats Steel — Every Time
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Four structural and economic reasons why 95% of European weighbridges
            use concrete — and why Rite-Way has championed this standard in India since 2004.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WHY_CONCRETE.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-sm p-7 hover:shadow-md transition-shadow duration-200 group"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded-sm bg-red-50 flex items-center justify-center mb-5 group-hover:bg-[#DC2626] transition-colors duration-200">
                <Icon size={17} className="text-[#DC2626] group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/why-concrete"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors group"
          >
            See full Concrete vs Steel comparison
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 7. Compatible Terminals ──────────────────────────────────────────────────

function CompatibleTerminals() {
  const terminals = [
    {
      icon: BarChart3,
      title: "AND 4500 Dual Terminal",
      href: "/products/weighbridges/and4500-dual",
      desc: "Control two weighbridges simultaneously from one operator room. 32-bit processor, 1 lakh record memory, Mandi app, USB + SMS output.",
      features: ["Controls 2 weighbridges", "100,000 record memory", "Mandi application", "SMS + USB export"],
    },
    {
      icon: Mail,
      title: "AND 4500 Email Terminal",
      href: "/products/weighbridges/and4500-email",
      desc: "Automatically emails Excel weighment reports to up to 5 IDs via built-in GSM modem. No internet or LAN at the weighbridge site required.",
      features: ["Auto Excel email reports", "5 email recipients", "GSM modem built-in", "No site internet needed"],
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Smart Add-Ons</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Compatible Terminals &amp; Systems
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Pair your concrete platform weighbridge with intelligent terminals
            for automated reporting and multi-platform control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {terminals.map(({ icon: Icon, title, href, desc, features }) => (
            <div
              key={title}
              className="border border-gray-100 rounded-sm p-7 hover:shadow-md transition-shadow duration-200 flex flex-col group"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] flex items-center justify-center mb-5 group-hover:bg-[#DC2626] transition-colors duration-200">
                <Icon size={16} className="text-white" />
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
              <ul className="space-y-1.5 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle2 size={12} className="text-green-500 flex-shrink-0" /> {f}
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

// ─── 8. CTA Banner ───────────────────────────────────────────────────────────

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
            Start Your Project
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Ready to Install a Concrete Platform Weighbridge?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Our engineer visits your site, recommends the right size and type, and
            manages the complete installation — concrete casting, load cell calibration,
            and Legal Metrology verification. One call is all it takes.
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
              href="/why-concrete"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors"
            >
              Full Concrete Comparison
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ConcreteWeighbridgePage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <TechnicalSpecs />
      <InstallationPhotoRow />
      <InstallationTypes />
      <SizeTable />
      <HowItWorks />
      <CastingPhoto />
      <WhyConcreteSection />
      <CompatibleTerminals />
      <CTABanner />
    </>
  );
}