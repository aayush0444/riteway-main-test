import Link from "next/link";
import {
  ArrowRight,
  Wheat,
  Factory,
  Construction,
  Pickaxe,
  Truck,
  ShoppingCart,
  Gem,
  Building2,
  MapPin,
  Clock,
  MessageSquare,
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

// ─── Industry Data ────────────────────────────────────────────────────────────

const INDUSTRIES = [
  {
    icon: Wheat,
    name: "Grain Mandis",
    gradientFrom: "#14532d",
    gradientTo: "#166534",
    tagline: "Legal Metrology approved. Mandi-ready.",
    desc: "Punjab and Haryana mandis need accurate, compliant, and fast weighment. Every Rite-Way weighbridge is Legal Metrology approved and our AND 4500 terminal has a dedicated Mandi application built-in.",
    products: ["Concrete Platform Weighbridge (60T–100T)", "Price Computing Scale (30kg)", "AND 4500 Dual Terminal with Mandi App"],
    waMsg: "Hello Rite-Way, I run a grain mandi and need a weighbridge and scale. Please advise.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    gradientFrom: "#1E3A5F",
    gradientTo: "#2d5a8e",
    tagline: "Batch accuracy. Automated reporting.",
    desc: "Manufacturing plants need reliable weighbridges at the gate and precision floor scales on the production line. RS-232 integration connects your scales directly to your ERP or dispatch system.",
    products: ["Platform Scales (100kg–2000kg)", "Steel or Concrete Weighbridge", "AND 4500 Email Terminal (auto reports)"],
    waMsg: "Hello Rite-Way, I manage a manufacturing plant and need weighing solutions. Please advise.",
  },
  {
    icon: Construction,
    name: "Construction",
    gradientFrom: "#78350f",
    gradientTo: "#92400e",
    tagline: "100T+ capacity. Site-ready.",
    desc: "Construction sites require heavy-duty weighbridges for material trucks — often 80T to 150T. Concrete pit-type weighbridges are ideal: low profile, high capacity, and cast on-site to avoid transport logistics.",
    products: ["Concrete Platform Weighbridge (80T–150T)", "Pit Type — flush with site road", "Payload-T GPRS for delivery fleet"],
    waMsg: "Hello Rite-Way, I need a heavy-duty weighbridge for a construction site. Please advise.",
  },
  {
    icon: Pickaxe,
    name: "Mining",
    gradientFrom: "#374151",
    gradientTo: "#4b5563",
    tagline: "Real-time payload. Overload prevention.",
    desc: "Mining companies face heavy fines for overloaded haul trucks at checkpoints. Payload-T GPRS prevents overloading before vehicles leave the mine — saving lakhs in fines and reducing vehicle wear.",
    products: ["Payload-T GPRS System", "Concrete Platform Weighbridge (150T–200T)", "Cloud dashboard with overload alerts"],
    waMsg: "Hello Rite-Way, I need payload monitoring for a mining operation. Please advise.",
  },
  {
    icon: Truck,
    name: "Logistics & Transport",
    gradientFrom: "#164e63",
    gradientTo: "#0e7490",
    tagline: "Dual platform. Fast throughput.",
    desc: "Logistics hubs process hundreds of vehicles daily and cannot afford queues. AND 4500 Dual Terminal controls two weighbridges from one operator room — doubling throughput without doubling cost.",
    products: ["Long Platform Weighbridge (14m–18m)", "AND 4500 Dual Platform Terminal", "AND 4500 Email — auto reports to HO"],
    waMsg: "Hello Rite-Way, I manage a logistics hub and need weighbridge solutions. Please advise.",
  },
  {
    icon: ShoppingCart,
    name: "Retail & Kirana",
    gradientFrom: "#065f46",
    gradientTo: "#047857",
    tagline: "Accurate. Affordable. Customer-facing.",
    desc: "Retail shops need scales that are accurate, reliable, and fast. Dual-side displays build customer trust. Price computing scales handle weight × rate = total in one step for vegetable and grain sellers.",
    products: ["Table Top Scale — SS or Metal Body (20kg–30kg)", "SS Price Computing Scale (30kg)", "Pole Display option for customer visibility"],
    waMsg: "Hello Rite-Way, I run a retail shop and need a weighing scale. Please advise.",
  },
  {
    icon: Gem,
    name: "Jewellery",
    gradientFrom: "#581c87",
    gradientTo: "#7e22ce",
    tagline: "Milligram accuracy. tola built-in.",
    desc: "Jewellers need sub-milligram accuracy, gm/ct/tola conversion, and 60-hour battery backup. Our Jewel Precision Scale has anti-vibration mode and temperature-compensated calibration for all-day stability.",
    products: ["Jewel Precision Scale (300g–1200g)", "5mg division on select models", "gm / ct / tola conversion built-in"],
    waMsg: "Hello Rite-Way, I am a jeweller and need a precision scale. Please advise on the right model.",
  },
  {
    icon: Building2,
    name: "Government & Toll",
    gradientFrom: "#1e1b4b",
    gradientTo: "#3730a3",
    tagline: "Legal Metrology stamped. Audit-ready.",
    desc: "Government procurement and toll operations require Legal Metrology approved equipment with full certification. Every Rite-Way weighbridge is eligible for Legal Metrology stamp and comes with complete documentation.",
    products: ["Concrete Platform Weighbridge — Legal Metrology approved", "AND 4500 Terminal with 1 lakh record memory", "Full documentation for government procurement"],
    waMsg: "Hello Rite-Way, I need a Legal Metrology approved weighbridge. Please advise.",
  },
];

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      {/* Hero photo — weighbridge in industrial context */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/weighbridge-hero.png"
          alt="Rite-Way weighing solutions across industries — Punjab, North India"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#1E3A5F]/70 pointer-events-none" />
      {/* Red left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626] z-10" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-7">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <span className="text-white/90 font-medium">Industries</span>
        </nav>
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">8 Industries</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">Pan-India Service</span>
          </div>
          <h1 className="text-white font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Industries We Serve
          </h1>
          <p className="text-white/75 text-lg leading-relaxed">
            From grain mandis to mining companies. From jewellery shops to government toll plazas.
            Rite-Way weighing solutions power every industry across North India.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Industry Cards ────────────────────────────────────────────────────────

function IndustryCards() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Complete Coverage</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Every Industry, Right Product</h2>
          <p className="text-gray-500 text-base leading-relaxed">Each industry has specific requirements. We know them — and we have the product to match.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES.map(({ icon: Icon, name, gradientFrom, gradientTo, tagline, desc, products, waMsg }) => (
            <div key={name}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-200 group"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>

              {/* Colored header — icon + name + tagline */}
              <div
                className="relative overflow-hidden px-5 py-6 flex flex-col gap-3"
                style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}
              >
                <div className="absolute inset-0 pointer-events-none"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base leading-snug">{name}</p>
                    <p className="text-white/60 text-[0.65rem] font-semibold uppercase tracking-wider mt-0.5">{tagline}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{desc}</p>

                {/* Products list */}
                <div className="space-y-1.5 mb-5 flex-1">
                  {products.map((p) => (
                    <div key={p} className="flex items-start gap-1.5 text-[0.68rem] text-gray-600">
                      <span className="text-[#DC2626] font-bold mt-0.5 flex-shrink-0">→</span>
                      {p}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a href={`${WA_BASE}${encodeURIComponent(waMsg)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-sm hover:bg-green-500 transition-colors w-full">
                  <WAIcon size={12} /> WhatsApp for Advice
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Why North India Trusts Rite-Way ───────────────────────────────────────

function WhyNorthIndia() {
  const points = [
    {
      icon: MapPin,
      title: "Local Presence in Mohali, Punjab",
      desc: "Our factory and showroom are in Mohali's Industrial Area Phase 2 — the industrial heart of Punjab. Site visits, installations, and AMC calls happen fast because we're already here.",
    },
    {
      icon: Clock,
      title: "20 Years Serving Punjab, Haryana & Himachal",
      desc: "Since 2004, we have been serving the industrial and agricultural businesses of North India. We know the requirements, the terrain, the climate, and the compliance landscape.",
    },
  
  ];

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Why Choose Rite-Way</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Why North India Trusts Rite-Way
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Beyond products — the local knowledge, language, and long-term service relationship that national competitors cannot offer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="border border-gray-100 rounded-sm p-7 hover:shadow-md transition-all group"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-11 h-11 rounded-sm bg-[#1E3A5F] group-hover:bg-[#DC2626] flex items-center justify-center mb-5 transition-colors">
                <Icon size={19} className="text-white" />
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Punjab/North India callout strip */}
        <div className="mt-10 border border-[#1E3A5F]/20 bg-[#1E3A5F]/5 rounded-sm p-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-[#111827] font-bold text-base mb-1">Serving all of Punjab, Haryana, HP, J&amp;K, Delhi NCR</p>
            <p className="text-gray-500 text-sm">Our service engineers cover the complete North India region. Site visit and installation available across the territory.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am located in North India and need weighing solutions. Please advise.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> Check Coverage
            </a>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-[#DC2626] transition-colors">
              Contact Us <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. CTA Banner ───────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Right Product for Your Industry</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Tell Us Your Industry and We'll Recommend the Right Scale
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            WhatsApp us with your industry, capacity, and location — our team will recommend the right product and give you a quote within the hour.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I need weighing solutions for my industry. Please advise on the right products.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp Our Team
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <Hero />
      <IndustryCards />
      <WhyNorthIndia />
      <CTABanner />
    </>
  );
}