import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Grid,
  Monitor,
  Wifi,
  Scale,
  LayoutGrid,
  Calculator,
  Gem,
  Anchor,
  CheckCircle2,
} from "lucide-react";

// ─── Shared ───────────────────────────────────────────────────────────────────

const WA = "https://wa.me/919877541199?text=" + encodeURIComponent("Hello Rite-Way, I am looking for a product. Please advise.");

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#DC2626] font-semibold mb-3"
      style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const WEIGHBRIDGES = [
  {
    icon: Layers,
    name: "Concrete Platform Weighbridge",
    badge: "40T – 200T",
    popular: true,
    accentColor: "#1E3A5F",
    desc: "Rigid RCC platform, 100-year lifespan, zero maintenance. Our #1 recommended product.",
    specs: ["9 standard sizes: 5×3m to 24×3m", "Pit type and pitless available", "6 load cells, digital or analog", "ISO 9001:2015 certified"],
    href: "/products/weighbridges/concrete-platform",
  },
  {
    icon: Grid,
    name: "Steel Platform Weighbridge",
    badge: "40T – 150T",
    popular: false,
    accentColor: "#374151",
    desc: "Fabricated mild steel platform with anti-skid diamond plate. Pit type and pitless.",
    specs: ["Standard sizes 5×3m to 18×3m", "Anti-skid diamond plate surface", "Pit type and pitless available", "ISO 9001:2015 certified"],
    href: "/products/weighbridges/steel-platform",
  },
  {
    icon: Monitor,
    name: "IIT 4500 Standard Terminal",
    badge: "Single Platform",
    popular: false,
    accentColor: "#1E3A5F",
    desc: "Specially designed weighbridge terminal for digital load cells. Standalone operation — weighing, data processing, saving, and printing. Built for industrial and public weighbridges.",
    specs: ["32-bit ARM processor, 50 MHz", "1,00,000 record memory — USB .xls export", "Mandi app — Rate, Amount, deductions", "SMS in 3 modes · Pre-printed stationery"],
    href: "/products/weighbridges/and4500-email",
  },
  {
    icon: Monitor,
    name: "IIT 4500 Dual Platform Terminal",
    badge: "Dual Platform",
    popular: false,
    accentColor: "#1E3A5F",
    desc: "Single operator room controls two weighbridges simultaneously. Each platform works independently — breakdown of one doesn't affect the other.",
    specs: ["Controls 2 weighbridges independently", "Different capacities per platform supported", "1,00,000 record memory — USB export", "Mandi app + SMS + pre-printed stationery"],
    href: "/products/weighbridges/and4500-dual",
  },
  {
    icon: Monitor,
    name: "IIT 4500 with GLCD Display",
    badge: "Graphical LCD",
    popular: false,
    accentColor: "#164e63",
    desc: "IIT 4500 with Graphical LCD upgrade. Large weight characters for better visibility. View the full weighment ticket on screen in one go — no scrolling.",
    specs: ["Large weight digit display for easy reading", "Full ticket view on LCD — all data at once", "11 Indian language headers (Hindi, Punjabi, Gujarati…)", "All IIT 4500 standard features included"],
    href: "/products/weighbridges/iit4500-glcd",
  },
  {
    icon: Monitor,
    name: "IIT 4500 with TFT Display",
    badge: "7\" TFT Colour",
    popular: false,
    accentColor: "#0369a1",
    desc: "IIT 4500 with 7-inch full-colour TFT display. Sigma-Delta 24-bit A/D converter for maximum accuracy. Premium display variant for high-volume and high-visibility sites.",
    specs: ["7\" multi-colour TFT display", "24-bit Sigma-Delta A/D converter", "25 samples/second conversion speed", "Drives up to 12 load cells of 350Ω"],
    href: "/products/weighbridges/iit4500-tft",
  },
  
];

const SCALES = [
  {
    icon: Scale,
    name: "Table Top Scales",
    badge: "Up to 30kg",
    accentColor: "#DC2626",
    desc: "Metal, SS, and ABS body variants. Front/rear/pole display options. RS-232 interface.",
    specs: ["4 variants: Metal / SS / ABS / SS+Pole", "Capacity: 20–30kg | Division: 2g–5g", "Battery backup on all variants", "RS-232 optional on most variants"],
    href: "/products/scales/table-top",
  },
  {
    icon: LayoutGrid,
    name: "Platform & Floor Scales",
    badge: "Up to 2000kg",
    accentColor: "#DC2626",
    desc: "Checked pan with guard rail (100–1000kg) and open floor scale (1000–2000kg).",
    specs: ["Checked Pan: 100–1000kg with guard rail", "Floor Scale: 1000–2000kg open platform", "4×350Ω load cells | 1:100,000 resolution", "KG / Liter / Alert / Piece count modes"],
    href: "/products/scales/platform",
  },
  {
    icon: Calculator,
    name: "Price Computing Scale",
    badge: "Retail",
    accentColor: "#DC2626",
    desc: "30kg SS body. Three displays: Weight + Unit Price + Total Price. 15 direct memory prices.",
    specs: ["Capacity: 30kg | Division: 2g–5g", "3 simultaneous displays", "15 direct memory price keys", "Piece count function optional"],
    href: "/products/scales/price-computing",
  },
  {
    icon: Gem,
    name: "Jewel Precision Scale",
    badge: "5mg – 1200g",
    accentColor: "#581c87",
    desc: "Milligram accuracy for jewellers and labs. gm / ct / tola conversion. 60-hour battery.",
    specs: ["5 variants: 300g to 1200g capacity", "Best accuracy: 5mg", "Built-in gm, ct, tola conversion", "60-hour rechargeable battery backup"],
    href: "/products/scales/jewel",
  },
  {
    icon: Anchor,
    name: "Crane & Hanging Scale",
    badge: "Hook Type",
    accentColor: "#374151",
    desc: "Large LED display, high-tension hook. 20m infrared remote. Wireless option.",
    specs: ["High-tension hook and shackle", "20m infrared remote controller", "Weight accumulation function", "kg / lb conversion | Wireless option"],
    href: "/products/scales/crane",
  },
];

// ─── Sections ─────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.35 }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, white 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-24">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7 flex-wrap">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#111827] font-medium">All Products</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">ISO 9001:2015 Certified</span>
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Since 2004</span>
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#DC2626] bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">20g to 200T Range</span>
          </div>
          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            All Products
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-8">
            Complete weighing solutions from one manufacturer — weighbridges from 40T to 200T,
            precision scales from 20g, and all associated terminals, sensors, and accessories.
            Every product ISO 9001:2015 certified and Legal Metrology compliant.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
              <WAIcon /> Ask Which Product Suits You
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

// Generic product card shared by weighbridges and scales
function ProductCard({
  icon: Icon, name, badge, popular = false, accentColor, desc, specs, href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string; badge: string; popular?: boolean; accentColor: string;
  desc: string; specs: string[]; href: string;
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-200 group"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
      <div className="h-1" style={{ backgroundColor: accentColor }} />
      <div className="p-6 flex flex-col flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 transition-transform duration-150 group-hover:scale-105"
            style={{ backgroundColor: accentColor }}>
            <Icon size={17} className="text-white" />
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[0.58rem] font-bold uppercase tracking-widest text-white px-2 py-0.5 rounded-full"
              style={{ backgroundColor: accentColor, opacity: 0.85 }}>
              {badge}
            </span>
            {popular && (
              <span className="text-[0.52rem] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                ★ Most Popular
              </span>
            )}
          </div>
        </div>

        <h3 className="text-[#111827] font-bold text-base leading-snug mb-2 group-hover:text-[#DC2626] transition-colors">
          {name}
        </h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{desc}</p>

        {/* Spec list */}
        <ul className="space-y-1.5 mb-5">
          {specs.map((s) => (
            <li key={s} className="flex items-start gap-2 text-xs text-gray-600">
              <CheckCircle2 size={11} className="flex-shrink-0 mt-0.5" style={{ color: accentColor }} />
              {s}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="flex gap-2 mt-auto">
          <Link href={href}
            className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 text-[#111827] text-xs font-semibold px-3 py-2.5 rounded-sm hover:border-[#DC2626] hover:text-[#DC2626] transition-colors">
            View Details <ArrowRight size={11} />
          </Link>
          <a href={`https://wa.me/919877541199?text=${encodeURIComponent("Hello Rite-Way, I am interested in the " + name + ". Please advise.")}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold px-3 py-2.5 rounded-sm hover:bg-green-500 transition-colors">
            <WAIcon /> Quote
          </a>
        </div>
      </div>
    </div>
  );
}

function WeighbridgesSection() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Heavy Industrial</SectionLabel>
            <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight">
              Weighbridges
            </h2>
            <p className="text-gray-500 text-base mt-2 max-w-xl leading-relaxed">
              Concrete and steel platform weighbridges from 40T to 200T, paired with IIT 4500
              intelligent terminals — standard, dual-platform, GLCD, and TFT display variants.
            </p>
          </div>
          <Link href="/products/weighbridges"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors flex-shrink-0">
            View weighbridge range <ArrowRight size={13} />
          </Link>
        </div>

        {/* Note strip */}
        <div className="bg-blue-50 border border-blue-100 rounded-sm px-5 py-3.5 mb-8 flex items-center gap-3">
          <div className="w-1.5 h-8 rounded-full bg-[#1E3A5F] flex-shrink-0" />
          <p className="text-sm text-[#1E3A5F] leading-relaxed">
            <strong>Not sure which platform to choose?</strong> Read our{" "}
            <Link href="/why-concrete" className="font-bold underline hover:no-underline">Concrete vs Steel comparison guide</Link>
            {" "}or{" "}
            <a href="https://wa.me/919877541199?text=Hello%20Rite-Way%2C%20I%20need%20help%20choosing%20between%20concrete%20and%20steel%20weighbridge."
              target="_blank" rel="noopener noreferrer" className="font-bold underline hover:no-underline">WhatsApp us</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WEIGHBRIDGES.map((p) => <ProductCard key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}

function ScalesSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <SectionLabel>Precision Instruments</SectionLabel>
            <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight">
              Weighing Scales
            </h2>
            <p className="text-gray-500 text-base mt-2 max-w-xl leading-relaxed">
              From 20g jewel scales to 2000kg floor scales — for every industry from jewellery
              to logistics. All Legal Metrology approved.
            </p>
          </div>
          <Link href="/products/scales"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#DC2626] hover:text-red-700 transition-colors flex-shrink-0">
            View all scales <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCALES.map((p) => <ProductCard key={p.href} {...p} />)}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Need Help Choosing?
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Not Sure Which Product Is Right for You?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Tell us your industry, required capacity, and application — our team will recommend
            the exact product, give you a quote, and explain the installation process.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp for Advice
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/industries"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              Browse by Industry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Hero />
      <WeighbridgesSection />
      <ScalesSection />
      <CTABanner />
    </>
  );
}