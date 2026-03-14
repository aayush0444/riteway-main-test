import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Shield,
  Clock,
  TrendingDown,
  Wrench,
  Globe,
  TrendingUp,
  Car,
} from "lucide-react";

// ─── Shared ───────────────────────────────────────────────────────────────────

const WA_HREF =
  "https://wa.me/919877541199?text=Hello%2C+I+want+to+know+more+about+concrete+platform+weighbridges.";

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

// ─── Data ─────────────────────────────────────────────────────────────────────

const ADVANTAGES = [
  {
    icon: Shield,
    title: "Structural Accuracy",
    concrete: "Rigid monolithic RCC structure distributes load equally across all 6 load cells. No flex, no lateral pull — just pure accuracy.",
    steel: "Steel bends and rattles under heavy loads, causing lateral pull on load cells and introducing cumulative weighing errors.",
  },
  {
    icon: TrendingUp,
    title: "Structural Strength",
    concrete: "Heavy mass eliminates cantilever and inverse force issues entirely. The platform is always heavier than the gross vehicle load.",
    steel: "Steel deck is lighter than the gross vehicle load, causing twisting forces and structural stress that worsen with age.",
  },
  {
    icon: Car,
    title: "Vehicle Grip & Safety",
    concrete: "Natural rough concrete surface arrests vehicle movement without any added material. Zero slip, even when wet.",
    steel: "Anti-skid diamond strips break, peel, and need periodic re-welding — an ongoing maintenance cost and safety hazard.",
  },
  {
    icon: Zap,
    title: "Lightning & Static Protection",
    concrete: "Concrete is naturally immune to electrostatic charge and lightning strikes. Instrumentation stays safe in all weather.",
    steel: "Steel platforms act as conductors during storms, channelling lightning and electrostatic charge directly into instrumentation.",
  },
  {
    icon: Clock,
    title: "Operational Lifespan",
    concrete: "Designed and proven to last 100 years without structural degradation. A one-time infrastructure investment.",
    steel: "Steel weighbridges show significant bending, corrosion, and structural fatigue within 10–15 years, requiring full replacement.",
  },
  {
    icon: TrendingDown,
    title: "Total Cost of Ownership",
    concrete: "Concrete material costs 40% less than equivalent steel fabrication. Cast on-site — zero transport charges for the platform.",
    steel: "Steel fabricated off-site requires heavy transport to location. Higher material cost, plus ongoing maintenance and repainting.",
  },
  {
    icon: Wrench,
    title: "Maintenance Requirements",
    concrete: "Zero rust. Zero maintenance. No nuts to tighten, no painting, no anti-corrosion treatment — ever.",
    steel: "Requires periodic bolt tightening, rust treatment, repainting, and anti-skid repair. Ongoing cost for the life of the asset.",
  },
  {
    icon: TrendingUp,
    title: "Capacity Enhancement",
    concrete: "Can be upgraded to 100T+ capacity by simply swapping to heavy-duty load cells. No structural changes or extra cost.",
    steel: "Cannot be easily upgraded. Higher capacity requires full structural re-fabrication or complete replacement.",
  },
];

const COMPARISON_ROWS = [
  { attribute: "Platform lifespan", concrete: "100 years", steel: "10–15 years" },
  { attribute: "Material cost", concrete: "40% lower", steel: "Baseline" },
  { attribute: "Transport cost", concrete: "Zero (cast on-site)", steel: "Heavy transport required" },
  { attribute: "Maintenance", concrete: "None", steel: "Annual: paint, bolts, strips" },
  { attribute: "Rust risk", concrete: "Zero", steel: "High without treatment" },
  { attribute: "Lightning risk", concrete: "Immune", steel: "Conductive — damage risk" },
  { attribute: "Load accuracy", concrete: "Superior (rigid structure)", steel: "Variable (flex under load)" },
  { attribute: "Vehicle grip", concrete: "Natural rough surface", steel: "Strips wear and break" },
  { attribute: "Capacity upgrade", concrete: "Load cells only", steel: "Full fabrication needed" },
  { attribute: "Industry standard (Europe)", concrete: "95% use concrete", steel: "5% use steel" },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      {/* Hero photo */}
      <div className="absolute inset-0">
        <img
          src="/images/products/weighbridges/rcc-concrete-platform.jpeg"
          alt="Rite-Way RCC concrete platform weighbridge — why concrete outperforms steel"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#1E3A5F]/70 pointer-events-none" />
      {/* Red left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626] z-10" aria-hidden="true" />

<div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#DC2626]" />
            <SectionLabel>The Rite-Way Advantage</SectionLabel>
          </div>

          <h1
            className="text-white font-bold leading-[1.07] tracking-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)" }}
          >
            Why Concrete Platform Weighbridges{" "}
            <span className="text-[#DC2626]">Outperform Steel</span>{" "}
            in Every Way That Matters
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            Steel was once the default for weighbridge platforms. But steel bends,
            rattles, rusts, and fails — often within 15 years. The developed world
            figured this out decades ago. Today,{" "}
            <strong className="text-white font-semibold">
              95% of electronic weighbridges in Europe are built on concrete platforms.
            </strong>{" "}
            Rite-Way has been championing this standard in India for over 20 years.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors"
            >
              Ask About Concrete Weighbridges
            </a>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors"
            >
              Get a Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Europe stat callout — floats right on desktop */}
        <div
          className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center justify-center w-44 h-44 rounded-full border-2 border-[#DC2626] text-center bg-white/10 backdrop-blur-sm"
          style={{ boxShadow: "0 0 0 12px rgba(220,38,38,0.08)" }}
        >
          <p className="text-[#DC2626] font-bold leading-none mb-1" style={{ fontSize: "3rem" }}>
            95%
          </p>
          <p className="text-white/80 text-xs font-semibold leading-snug px-3">
            of weighbridges in Europe use concrete platform
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── 8 Advantage Cards ────────────────────────────────────────────────────────

function AdvantageCards() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <SectionLabel>8 Proven Advantages</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Every Dimension Where Concrete Wins
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            This is not a preference — it is physics, economics, and two decades of
            real-world installation data across North India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ADVANTAGES.map(({ icon: Icon, title, concrete, steel }, i) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 px-6 pt-6 pb-4 border-b border-gray-50">
                <div className="w-8 h-8 rounded-sm bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-[#DC2626]" />
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[#DC2626] font-bold tabular-nums"
                    style={{ fontSize: "0.62rem", letterSpacing: "0.1em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[#111827] font-bold text-sm">{title}</h3>
                </div>
              </div>

              {/* Two-row comparison */}
              <div className="divide-y divide-gray-50">
                <div className="flex gap-3 px-6 py-4">
                  <CheckCircle2 size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <span
                      className="text-green-700 font-bold block mb-0.5"
                      style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                    >
                      Concrete
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">{concrete}</p>
                  </div>
                </div>
                <div className="flex gap-3 px-6 py-4 bg-gray-50/50">
                  <XCircle size={15} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span
                      className="text-red-500 font-bold block mb-0.5"
                      style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                    >
                      Steel
                    </span>
                    <p className="text-sm text-gray-500 leading-relaxed">{steel}</p>
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

// ─── Europe Stat Banner ───────────────────────────────────────────────────────

function EuropeBanner() {
  return (
    <section className="bg-[#1E3A5F] py-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">

          {/* Big number */}
          <div className="flex-shrink-0 text-center md:text-left">
            <p
              className="text-white font-bold leading-none"
              style={{ fontSize: "clamp(4rem, 10vw, 7rem)" }}
            >
              95<span className="text-[#DC2626]">%</span>
            </p>
            <p className="text-white/50 text-sm uppercase tracking-widest font-medium mt-1">
              Europe Benchmark
            </p>
          </div>

          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <Globe size={16} className="text-[#DC2626]" />
              <SectionLabel>Global Industry Standard</SectionLabel>
            </div>
            <p className="text-white font-bold text-xl md:text-2xl leading-snug mb-4">
              95% of all electronic weighbridges installed in Europe use a concrete platform.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              The developed world adopted concrete decades ago because the engineering
              case is unambiguous. Concrete is stiffer, heavier, more durable, and
              cheaper to own over a lifetime. India's industrial sector is catching up —
              Rite-Way has been leading that shift since 2004.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Comparison Table ─────────────────────────────────────────────────────────

function ComparisonTable() {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <SectionLabel>Side-by-Side Comparison</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Concrete vs Steel — The Full Picture
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every attribute that affects your total cost of ownership, accuracy,
            and operational reliability — compared directly.
          </p>
        </div>

        {/* Table wrapper */}
        <div
          className="border border-gray-200 rounded-sm overflow-hidden"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
        >
          {/* Table header */}
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              Attribute
            </div>
            <div className="px-5 py-4 border-l border-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                  Concrete Platform
                </span>
              </div>
            </div>
            <div className="px-5 py-4 border-l border-gray-200">
              <div className="flex items-center gap-2">
                <XCircle size={14} className="text-red-400" />
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                  Steel Platform
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {COMPARISON_ROWS.map(({ attribute, concrete, steel }, i) => (
            <div
              key={attribute}
              className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/30"
              }`}
            >
              <div className="px-5 py-4 flex items-center">
                <span className="text-sm font-semibold text-[#111827]">{attribute}</span>
              </div>
              <div className="px-5 py-4 border-l border-gray-100 flex items-center">
                <span className="text-sm text-green-700 font-medium">{concrete}</span>
              </div>
              <div className="px-5 py-4 border-l border-gray-100 flex items-center">
                <span className="text-sm text-gray-500">{steel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Caption */}
        <p className="mt-5 text-xs text-gray-400 text-center">
          Data based on 20+ years of installation experience across North India and published
          European weighing industry standards.
        </p>
      </div>
    </section>
  );
}

// ─── Sizes Available ──────────────────────────────────────────────────────────

const SIZES = [
  { size: "5×3m", capacity: "40T" },
  { size: "7.5×3m", capacity: "60T" },
  { size: "9×3m", capacity: "80T" },
  { size: "12×3m", capacity: "80T" },
  { size: "14×3m", capacity: "100T" },
  { size: "15×3m", capacity: "100T" },
  { size: "16×3m", capacity: "100T" },
  { size: "18×3m", capacity: "150T" },
  { size: "24×3m", capacity: "200T" },
];

function SizesAvailable() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Available Configurations</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Concrete Platform Sizes &amp; Capacities
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            9 standard sizes. Pit type and pitless (surface type) installation available
            for all configurations.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 mb-8">
          {SIZES.map(({ size, capacity }) => (
            <div
              key={size}
              className="bg-white border border-gray-100 rounded-sm p-4 text-center hover:border-[#DC2626] hover:shadow-sm transition-all duration-150 group"
            >
              <p className="text-[#DC2626] font-bold text-lg leading-none mb-1 group-hover:scale-105 transition-transform">
                {capacity}
              </p>
              <p className="text-gray-400 text-xs font-medium">{size}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CheckCircle2 size={14} className="text-green-500" />
            Pit type (flush with ground)
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CheckCircle2 size={14} className="text-green-500" />
            Pitless / surface type with ramps
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CheckCircle2 size={14} className="text-green-500" />
            Capacity upgradeable without structural change
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <CheckCircle2 size={14} className="text-green-500" />
            6 load cells, monolithic RCC
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

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
            Make the Right Decision
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Ready to Install a Concrete Platform Weighbridge?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Our engineers will assess your site, recommend the right size and capacity,
            and handle the complete installation — concrete casting, load cell calibration,
            and Legal Metrology verification. One team, end to end.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z" fill="white"/>
              </svg>
              WhatsApp Our Team
            </a>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors"
            >
              Get Free Quote
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/products/weighbridges"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors"
            >
              View All Weighbridges
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WhyConcretePage() {
  return (
    <>
      <Hero />
      <AdvantageCards />
      <EuropeBanner />
      <ComparisonTable />
      <SizesAvailable />
      <CTABanner />
    </>
  );
}