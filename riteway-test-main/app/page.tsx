import Link from "next/link";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Clock,
  TrendingDown,
  Wrench,
  Scale,
  Building2,
  Truck,
  Wheat,
  Factory,
  HardHat,
  Pickaxe,
  ShoppingBag,
  Landmark,
  Tractor,
  Layers,
  Grid,
  Monitor,
  Wifi,
  LayoutGrid,
  Calculator,
  Gem,
  Anchor,
  User,
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


// ─── Shared helpers ───────────────────────────────────────────────────────────

const WA_HREF =
  "https://wa.me/919877541199?text=Hello%2C+I+am+interested+in+Rite-Way+products.+Please+advise.";

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

// ─────────────────────────────────────────────────────────────────────────────
// 1. HERO SECTION
// ─────────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Photo: Industrial weighbridge with truck on weighbridge platform */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/weighbridge-hero.png"
          alt="Industrial Weighbridge — Truck on Platform"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#111827]/60 pointer-events-none" />
      {/* Red left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626] z-10" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">

          {/* Pre-label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#DC2626]" />
            <span className="text-white/70 text-[0.7rem] font-bold uppercase tracking-widest">ISO 9001:2015 Certified · Since 2004</span>
          </div>

          {/* Main headline */}
          <h1
            className="text-white font-bold leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
          >
            India&apos;s Most Trusted{" "}
            <span className="text-[#DC2626]">Weighbridge</span>{" "}
            &amp; Weighing Scale Manufacturer
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
            From 20g precision jewel scales to 200-ton concrete platform weighbridges.
            ISO 9001:2015 certified. Manufactured and serviced across all of North India
            — by Minebea Technologies since 2004.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors duration-150 shadow-sm"
            >
              Get Free Quote
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-white/40 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:border-white hover:bg-white/10 transition-colors duration-150"
            >
              View Products
            </Link>
          </div>

          {/* Click-to-call */}
          <a
            href="tel:+919877541199"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-150 group"
          >
            <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white transition-colors">
              <Phone size={14} className="text-white/70 group-hover:text-white transition-colors" />
            </span>
            <span>
              <span className="text-white/50 text-xs block leading-none mb-0.5">Call us now</span>
              <span className="font-semibold text-white group-hover:text-white transition-colors">
                +91 98775 41199
              </span>
            </span>
          </a>
        </div>

        {/* Floating stat cards — desktop only */}
        <div className="hidden lg:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col gap-4">
          {[
            { value: "200T", label: "Max Capacity" },
            { value: "20g", label: "Min Precision" },
            { value: "100yr", label: "Concrete Lifespan" },
          ].map((s) => (
            <div
              key={s.value}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm px-5 py-4 w-36 text-center"
            >
              <p className="text-[#DC2626] font-bold text-2xl leading-none">{s.value}</p>
              <p className="text-white/60 text-xs mt-1 uppercase tracking-wide font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. TRUST BADGE ROW
// ─────────────────────────────────────────────────────────────────────────────

const TRUST_BADGES = [
  { icon: Shield, label: "ISO 9001:2015 Certified", color: "#16a34a" },
  { icon: Clock, label: "In Business Since 2004", color: "#1E3A5F" },
  { icon: CheckCircle2, label: "Minebea Partner", color: "#1E3A5F" },
  { icon: Zap, label: "Made in India", color: "#DC2626" },
  { icon: Scale, label: "Legal Metrology Approved", color: "#1E3A5F" },
];

function TrustBadgeRow() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-4">
          {TRUST_BADGES.map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={15} style={{ color }} />
              <span
                className="text-gray-600 font-medium"
                style={{ fontSize: "0.78rem", letterSpacing: "0.02em" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// 3. PRODUCT ICON GRID
// ─────────────────────────────────────────────────────────────────────────────

const PRODUCT_CARDS = [
  {
    icon: "Layers",
    label: "Concrete Weighbridge",
    badge: "40T – 200T",
    badgeColor: "#1E3A5F",
    href: "/products/weighbridges/concrete-platform",
    popular: true,
  },
  {
    icon: "Grid",
    label: "Steel Weighbridge",
    badge: "40T – 150T",
    badgeColor: "#374151",
    href: "/products/weighbridges/steel-platform",
    popular: false,
  },
  {
    icon: "Monitor",
    label: "AND 4500 Terminal",
    badge: "Dual Platform",
    badgeColor: "#1E3A5F",
    href: "/products/weighbridges/and4500-dual",
    popular: false,
  },
  {
    icon: "Wifi",
    label: "Payload GPRS",
    badge: "Fleet Monitoring",
    badgeColor: "#0369a1",
    href: "/products/weighbridges/payload-gprs",
    popular: false,
  },
  {
    icon: "Scale",
    label: "Table Top Scale",
    badge: "Up to 30kg",
    badgeColor: "#DC2626",
    href: "/products/scales/table-top",
    popular: false,
  },
  {
    icon: "LayoutGrid",
    label: "Platform Scale",
    badge: "Up to 2000kg",
    badgeColor: "#DC2626",
    href: "/products/scales/platform",
    popular: false,
  },
  {
    icon: "Calculator",
    label: "Price Computing",
    badge: "Retail",
    badgeColor: "#DC2626",
    href: "/products/scales/price-computing",
    popular: false,
  },
  {
    icon: "Gem",
    label: "Jewel Scale",
    badge: "5mg – 1200g",
    badgeColor: "#581c87",
    href: "/products/scales/jewel",
    popular: false,
  },
];

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Layers,
  Grid,
  Monitor,
  Wifi,
  Scale,
  LayoutGrid,
  Calculator,
  Gem,
};

function ProductIconGrid() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <SectionLabel>Everything We Manufacture</SectionLabel>
            <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight">
              Our Product Range
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#DC2626] hover:underline flex-shrink-0">
            View all products <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {PRODUCT_CARDS.map(({ icon, label, badge, badgeColor, href, popular }) => {
            const Icon = ICON_MAP[icon];
            return (
              <Link
                key={href}
                href={href}
                className="group relative bg-white border border-gray-100 rounded-sm p-5 flex flex-col items-start gap-3 hover:border-[#DC2626]/30 hover:shadow-md transition-all duration-150"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>

                {popular && (
                  <span className="absolute top-3 right-3 text-[0.5rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 rounded-full">
                    Popular
                  </span>
                )}

                {/* Photo: {label} product */}
                <ImgPlaceholder label={label} icon={Icon} badge="" aspect="4/3" className="rounded-sm -mx-5 -mt-5 mb-3" />
                <div
                  className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 transition-all duration-150 group-hover:scale-110"
                  style={{ backgroundColor: badgeColor }}>
                  <Icon size={16} className="text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[#111827] font-semibold text-sm leading-snug mb-1.5 group-hover:text-[#DC2626] transition-colors">
                    {label}
                  </p>
                  <span
                    className="inline-block text-[0.58rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: badgeColor, opacity: 0.85 }}>
                    {badge}
                  </span>
                </div>

                <ArrowRight
                  size={13}
                  className="text-gray-300 group-hover:text-[#DC2626] group-hover:translate-x-0.5 transition-all duration-150 self-end"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. WHY CONCRETE TEASER
// ─────────────────────────────────────────────────────────────────────────────

const CONCRETE_POINTS = [
  {
    icon: Clock,
    stat: "100 Years",
    title: "Unmatched Lifespan",
    desc: "Rigid monolithic RCC structure lasts a century with zero structural degradation. Steel weighbridges need replacement within 15 years.",
  },
  {
    icon: TrendingDown,
    stat: "40% Lower Cost",
    title: "Significant Cost Savings",
    desc: "Concrete material costs 40% less than steel fabrication. Cast on-site — no heavy transport charges. No annual painting or rust treatment.",
  },
  {
    icon: Wrench,
    stat: "Zero Maintenance",
    title: "No Upkeep Needed",
    desc: "RCC never rusts, rattles, or warps. No nuts to tighten, no anti-skid strips to re-weld. 95% of European weighbridges use concrete.",
  },
];

function WhyConcreteTeaser() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <SectionLabel>Our Core Advantage</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Why Concrete Platform Weighbridges Outperform Steel
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Rite-Way has championed concrete platform weighbridges in India for decades.
            The difference is measurable — in accuracy, cost, and total lifespan.
          </p>
        </div>

        {/* 3-col cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {CONCRETE_POINTS.map(({ icon: Icon, stat, title, desc }) => (
            <div
              key={title}
              className="border border-gray-100 rounded-sm p-7 hover:shadow-md transition-shadow duration-200 group"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded-sm bg-red-50 flex items-center justify-center mb-5 group-hover:bg-[#DC2626] transition-colors duration-200">
                <Icon size={18} className="text-[#DC2626] group-hover:text-white transition-colors duration-200" />
              </div>
              <p className="text-[#DC2626] font-bold text-2xl mb-1">{stat}</p>
              <h3 className="text-[#111827] font-semibold text-base mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Photo: Concrete weighbridge platform — installation view */}
        <div className="mb-10">
          <ImgPlaceholder label="Concrete Weighbridge Platform — Installation View, Punjab" icon={Layers} aspect="21/9" className="rounded-sm" />
          <p className="text-xs text-gray-400 mt-2 text-center">Concrete platform weighbridge — rigid RCC construction, 100-year lifespan</p>
        </div>

        <Link
          href="/why-concrete"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors duration-150 group"
        >
          Full Concrete vs Steel Comparison
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-150" />
        </Link>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. PRODUCT CATEGORIES
// ─────────────────────────────────────────────────────────────────────────────

function ProductCategories() {
  return (
    <section className="bg-gray-50 py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-xl mb-14">
          <SectionLabel>Product Range</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Complete Weighing Solutions — One Manufacturer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card: Weighbridges */}
          <div
            className="relative bg-white border border-gray-100 rounded-sm overflow-hidden group hover:shadow-lg transition-shadow duration-200"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
          >
            {/* Top navy accent */}
            <div className="h-1 bg-[#1E3A5F]" />
            <div className="p-8 md:p-10">
              <div className="w-12 h-12 rounded-sm bg-[#1E3A5F] flex items-center justify-center mb-6">
                <Truck size={22} className="text-white" />
              </div>
              <p
                className="text-[#1E3A5F] font-semibold mb-1"
                style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                Heavy Industrial
              </p>
              <h3 className="text-[#111827] font-bold text-2xl md:text-3xl mb-3 tracking-tight">
                Weighbridges
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                Concrete and steel platform weighbridges from 40T to 200T. Pit type and
                surface type. Built for grain mandis, factories, mines, and logistics hubs.
                ISO-certified. Installed and calibrated on-site.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "40T to 200T capacity range",
                  "Concrete & Steel platform options",
                  "Pit type & Pitless installation",
                  "AND 4500 smart terminals",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={14} className="text-[#1E3A5F] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/products/weighbridges"
                className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-[#16305a] transition-colors duration-150"
              >
                Explore Weighbridges
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card: Scales */}
          <div
            className="relative bg-white border border-gray-100 rounded-sm overflow-hidden group hover:shadow-lg transition-shadow duration-200"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}
          >
            <div className="h-1 bg-[#DC2626]" />
            <div className="p-8 md:p-10">
              <div className="w-12 h-12 rounded-sm bg-[#DC2626] flex items-center justify-center mb-6">
                <Scale size={22} className="text-white" />
              </div>
              <p
                className="text-[#DC2626] font-semibold mb-1"
                style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase" }}
              >
                Precision Instruments
              </p>
              <h3 className="text-[#111827] font-bold text-2xl md:text-3xl mb-3 tracking-tight">
                Weighing Scales
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
                From 20g jewel scales to 2000kg platform scales. Designed for jewellers,
                retailers, warehouses, and industrial floors. Stainless steel and ABS
                bodies. Price computing, crane, personal, and table-top variants.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "20g to 2000kg full range",
                  "Jewel, Table-top, Platform, Crane",
                  "SS body & ABS body variants",
                  "Price computing with 3 displays",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={14} className="text-[#DC2626] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/products/scales"
                className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-red-700 transition-colors duration-150"
              >
                Explore Scales
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. STATS ROW
// ─────────────────────────────────────────────────────────────────────────────

const STATS = [
  { value: "20+", label: "Years in Business", sub: "Since 2004" },
  { value: "500+", label: "Installations", sub: "Across North India" },
  { value: "40T–200T", label: "Weighbridge Range", sub: "All capacities" },
  { value: "All India", label: "Service Network", sub: "Sales & AMC" },
];

function StatsRow() {
  return (
    <section className="bg-[#1E3A5F] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map(({ value, label, sub }, i) => (
            <div key={label} className={`text-center ${i < STATS.length - 1 ? "lg:border-r lg:border-white/10" : ""}`}>
              <p className="text-white font-bold leading-none mb-2" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                {value}
              </p>
              <p className="text-white/80 font-semibold text-sm mb-1">{label}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest font-medium">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. INDUSTRIES GRID
// ─────────────────────────────────────────────────────────────────────────────

const INDUSTRIES = [
  { icon: Wheat, label: "Grain Mandis", desc: "Punjab & Haryana" },
  { icon: Factory, label: "Manufacturing", desc: "Industrial plants" },
  { icon: HardHat, label: "Construction", desc: "Site weighing" },
  { icon: Pickaxe, label: "Mining", desc: "GPRS payload monitoring" },
  { icon: Truck, label: "Logistics", desc: "Transport hubs" },
  { icon: Tractor, label: "Agriculture", desc: "Farm produce" },
  { icon: ShoppingBag, label: "Retail", desc: "Kirana & shops" },
  { icon: Landmark, label: "Government", desc: "PWD & municipal" },
];

function IndustriesGrid() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="max-w-xl mb-14">
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Trusted Across Every Sector That Weighs
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From a village grain mandi to a national mining company — Rite-Way
            weighing solutions work reliably in every environment.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INDUSTRIES.map(({ icon: Icon, label, desc }) => (
            <Link
              href="/industries"
              key={label}
              className="group border border-gray-100 rounded-sm overflow-hidden text-center hover:border-[#DC2626] hover:shadow-sm transition-all duration-200 flex flex-col"
            >
              {/* Photo: {label} industry environment */}
              <ImgPlaceholder label={label} icon={Icon} badge="" aspect="4/3" className="" />
              <div className="p-4">
                <div className="w-11 h-11 rounded-sm bg-gray-50 group-hover:bg-red-50 flex items-center justify-center mx-auto mb-3 transition-colors duration-200">
                  <Icon size={20} className="text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors duration-200" />
                </div>
                <p className="text-[#111827] font-semibold text-sm mb-1">{label}</p>
                <p className="text-gray-400 text-xs">{desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors duration-150 group"
          >
            View all industries
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-150" />
          </Link>
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. CTA BANNER
// ─────────────────────────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Red left bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p
            className="text-white/50 font-semibold mb-3"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Get Started Today
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Ready to Upgrade Your Weighing System?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Our team of specialist sales engineers will advise on the right
            weighbridge or scale for your specific capacity, site, and budget.
            No obligation. Fast response.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* WhatsApp */}
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors duration-150 shadow-sm"
            >
              <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z" fill="white" />
              </svg>
              WhatsApp Us Now
            </a>

            {/* Phone */}
            <a
              href="tel:+919877541199"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors duration-150"
            >
              <Phone size={15} />
              +91 98775 41199
            </a>

            {/* Quote */}
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors duration-150"
            >
              Get Free Quote
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadgeRow />
      <ProductIconGrid />
      <WhyConcreteTeaser />
      <ProductCategories />
      <StatsRow />
      <IndustriesGrid />
      <CTABanner />
    </>
  );
}