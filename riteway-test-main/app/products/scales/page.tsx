"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  Gem,
  ShoppingCart,
  Warehouse,
  Anchor,
  ChevronRight,
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

// ─── Scale Category Data ──────────────────────────────────────────────────────

const SCALE_CATEGORIES = [
  {
    icon: Scale,
    name: "Table Top Scales",
    slug: "table-top",
    capacity: "20kg – 30kg",
    badge: "bg-blue-50 text-[#1E3A5F] border-blue-100",
    gradientFrom: "#1E3A5F",
    gradientTo: "#2d5a8e",
    description: "Compact, counter-ready scales for retail shops, pharmacies, and food counters. Metal body, stainless steel, and ABS variants available.",
    features: ["ABS, SS & metal body options", "Rear & pole display variants", "RS-232 interface optional", "Battery backup built-in"],
    industries: ["Retail", "Pharmacy", "Food Counter"],
  },
  {
    icon: Warehouse,
    name: "Platform & Floor Scales",
    slug: "platform",
    capacity: "100kg – 2000kg",
    badge: "bg-orange-50 text-orange-700 border-orange-100",
    gradientFrom: "#374151",
    gradientTo: "#4b5563",
    description: "Heavy-duty floor and platform scales for warehouses, factories, and cold storage. Guard rail and open platform options.",
    features: ["Guard rail & open platform", "KG / Litre / Piece count modes", "4×350Ω load cell support", "Dust cover included"],
    industries: ["Warehouse", "Factory", "Cold Storage"],
  },
  {
    icon: ShoppingCart,
    name: "Price Computing Scale",
    slug: "price-computing",
    capacity: "30kg",
    badge: "bg-green-50 text-green-700 border-green-100",
    gradientFrom: "#166534",
    gradientTo: "#15803d",
    description: "Three-display scale showing weight, unit price, and total amount simultaneously. Ideal for grain mandis, vegetable markets, and retail.",
    features: ["Weight + Rate + Total display", "15 direct memory prices", "Auto calibration", "Piece count function"],
    industries: ["Mandi", "Retail", "Vegetable Market"],
  },
  {
    icon: Gem,
    name: "Jewel Precision Scale",
    slug: "jewel",
    capacity: "300g – 1200g",
    badge: "bg-purple-50 text-purple-700 border-purple-100",
    gradientFrom: "#581c87",
    gradientTo: "#7e22ce",
    description: "Milligram accuracy precision balance with gm, carat, and tola conversion. Anti-vibration mode and 60-hour battery backup.",
    features: ["5mg–20mg division accuracy", "gm / ct / tola conversion", "Anti-vibration mode", "60-hour battery backup"],
    industries: ["Jewellery", "Goldsmith", "Lab"],
  },
  {
    icon: Anchor,
    name: "Crane & Hanging Scale",
    slug: "crane",
    capacity: "Up to heavy duty",
    badge: "bg-red-50 text-red-700 border-red-100",
    gradientFrom: "#7f1d1d",
    gradientTo: "#991b1b",
    description: "High-tension hook and shackle hanging scale with large LED display. Wireless option and infrared remote controller up to 20m range.",
    features: ["Large LED display", "IR remote (20m range)", "Weight accumulation", "Wireless option available"],
    industries: ["Industrial", "Crane", "Lifting"],
  },
];

// ─── Finder Logic ─────────────────────────────────────────────────────────────

const INDUSTRY_OPTIONS = ["Retail / Shop", "Jewellery", "Warehouse / Factory", "Mandi / Agriculture", "Home / Clinic"];
const CAPACITY_OPTIONS  = ["Under 30 kg", "30 kg – 200 kg", "200 kg – 2000 kg"];

type Rec = { name: string; slug: string; reason: string } | null;

function getRecommendation(industry: string, capacity: string): Rec {
  if (!industry || !capacity) return null;

  if (industry === "Jewellery") return { name: "Jewel Precision Scale", slug: "jewel", reason: "Milligram accuracy with tola and carat conversion — purpose-built for jewellers." };
  if (industry === "Home / Clinic") return { name: "Table Top Scale", slug: "table-top", reason: "Compact, accurate counter scale — suitable for light home and clinic use up to 30kg." };

  if (capacity === "Under 30 kg") {
    if (industry === "Mandi / Agriculture") return { name: "Price Computing Scale", slug: "price-computing", reason: "Shows weight, rate, and total simultaneously — designed for mandi operations." };
    return { name: "Table Top Scale", slug: "table-top", reason: "Compact and accurate — perfect for counters, retail, and food service." };
  }

  if (capacity === "30 kg – 200 kg") {
    if (industry === "Mandi / Agriculture") return { name: "Price Computing Scale", slug: "price-computing", reason: "30kg capacity with three-display price computing for mandi operations." };
    return { name: "Platform Scale (100kg–200kg)", slug: "platform", reason: "Guard rail platform scale with piece count and litre modes for your application." };
  }

  // 200kg–2000kg
  return { name: "Platform & Floor Scale", slug: "platform", reason: "Heavy duty floor scale from 200kg to 2000kg for warehouses and factory floors." };
}

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      {/* Hero photo — table top scale */}
      <div className="absolute inset-0">
        <img
          src="/images/products/scales/table-top.png"
          alt="Rite-Way weighing scales — complete range from 20g to 2000kg"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1E3A5F]/70 pointer-events-none" />
      {/* Red left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626] z-10" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-24">
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-7 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link><span>/</span>
          <span className="text-white/90 font-medium">Weighing Scales</span>
        </nav>

        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
              5 Scale Categories
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">
              🇮🇳 Made in India
            </span>
          </div>

          <h1 className="text-white font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Weighing Scales
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            From 20g jewel precision scales to 2000kg industrial floor scales —
            Rite-Way manufactures the complete range. ISO 9001:2015 certified.
            Every scale tested before dispatch.
          </p>

          {/* Capacity range visual */}
          <div className="flex items-center gap-0 mb-8 max-w-lg">
            {[
              { label: "20g", sub: "Jewel" },
              { label: "30kg", sub: "Retail" },
              { label: "200kg", sub: "Platform" },
              { label: "2000kg", sub: "Floor" },
            ].map(({ label, sub }, i) => (
              <div key={label} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-[#DC2626]" />
                  <p className="text-white font-bold text-xs mt-1">{label}</p>
                  <p className="text-white/50 text-[0.55rem] font-medium">{sub}</p>
                </div>
                {i < 3 && <div className="flex-1 h-px bg-gradient-to-r from-[#DC2626] to-white/30 mx-1 mb-5" />}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am looking for a weighing scale. Please advise on the right model for my requirement.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
              <WAIcon /> WhatsApp for Advice
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

// ─── 2. Scale Categories Grid ─────────────────────────────────────────────────

function ScaleCategoriesGrid() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Complete Range</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            5 Scale Categories
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every weighing need covered — from sub-gram precision to
            two-tonne industrial floor scales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SCALE_CATEGORIES.map(({ icon: Icon, name, slug, capacity, badge, gradientFrom, gradientTo, description, features, industries }) => (
            <div key={slug}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-200 group"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>

              {/* Gradient image placeholder */}
              <div className="h-40 relative overflow-hidden flex items-end"
                style={{ background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)` }}>
                <div className="absolute inset-0"
                  style={{ backgroundImage: "linear-gradient(to right,rgba(255,255,255,0.07) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.07) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />
                {/* Centered icon watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Icon size={72} className="text-white" />
                </div>
                {/* Industry pills */}
                <div className="relative px-4 pb-3 z-10 flex gap-1.5 flex-wrap">
                  {industries.map((ind) => (
                    <span key={ind} className="text-[0.55rem] font-bold uppercase tracking-widest text-white/70 bg-white/10 px-2 py-0.5 rounded-full">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[#111827] font-bold text-base leading-snug group-hover:text-[#DC2626] transition-colors">
                    {name}
                  </h3>
                  <span className={`inline-block text-[0.58rem] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border flex-shrink-0 ${badge}`}>
                    {capacity}
                  </span>
                </div>

                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{description}</p>

                <ul className="space-y-1.5 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={11} className="text-green-500 flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2 mt-auto">
                  <Link href={`/products/scales/${slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#1E3A5F] text-white text-xs font-semibold px-4 py-2.5 rounded-sm hover:bg-[#DC2626] transition-colors">
                    View Details <ArrowRight size={11} />
                  </Link>
                  <a href={`${WA_BASE}${encodeURIComponent(`Hello Rite-Way, I am interested in the ${name}. Please advise.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold px-3.5 py-2.5 rounded-sm hover:bg-green-500 transition-colors">
                    <WAIcon size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Scale Finder ──────────────────────────────────────────────────────────

function ScaleFinder() {
  const [industry, setIndustry]   = useState("");
  const [capacity, setCapacity]   = useState("");
  const rec = getRecommendation(industry, capacity);

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Not Sure Which Scale?</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Find Your Scale in 2 Questions
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Answer two quick questions and we'll point you to the right model —
            or send us a WhatsApp and we'll advise you directly.
          </p>
        </div>

        <div className="max-w-2xl">
          <div className="border border-gray-100 rounded-sm overflow-hidden" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
            <div className="h-1 bg-[#DC2626]" />
            <div className="p-8">

              {/* Q1 */}
              <div className="mb-7">
                <p className="text-[#111827] font-bold text-sm mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#DC2626] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                  What industry are you in?
                </p>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRY_OPTIONS.map((opt) => (
                    <button key={opt} onClick={() => setIndustry(opt)}
                      className={`text-xs font-semibold px-4 py-2 rounded-sm border transition-all ${
                        industry === opt
                          ? "bg-[#1E3A5F] text-white border-[#1E3A5F]"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
                      }`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Q2 */}
              <div className="mb-7">
                <p className="text-[#111827] font-bold text-sm mb-3 flex items-center gap-2">
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 transition-colors ${industry ? "bg-[#DC2626] text-white" : "bg-gray-200 text-gray-400"}`}>2</span>
                  What capacity do you need?
                </p>
                <div className="flex flex-wrap gap-2">
                  {CAPACITY_OPTIONS.map((opt) => (
                    <button key={opt} onClick={() => setCapacity(opt)}
                      disabled={!industry}
                      className={`text-xs font-semibold px-4 py-2 rounded-sm border transition-all ${
                        !industry
                          ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                          : capacity === opt
                          ? "bg-[#1E3A5F] text-white border-[#1E3A5F]"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
                      }`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Result */}
              {rec && (
                <div className="border border-green-200 bg-green-50 rounded-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-[0.6rem] font-bold uppercase tracking-widest text-green-600 mb-1">Recommended for you</p>
                    <p className="text-[#111827] font-bold text-base mb-1">{rec.name}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{rec.reason}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <Link href={`/products/scales/${rec.slug}`}
                      className="inline-flex items-center gap-1.5 bg-[#1E3A5F] text-white text-xs font-semibold px-4 py-2.5 rounded-sm hover:bg-[#DC2626] transition-colors">
                      View Scale <ChevronRight size={12} />
                    </Link>
                    <a href={`${WA_BASE}${encodeURIComponent(`Hello Rite-Way, based on your finder I was recommended the ${rec.name}. Please advise.`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold px-4 py-2.5 rounded-sm hover:bg-green-500 transition-colors">
                      <WAIcon size={13} /> Ask Us
                    </a>
                  </div>
                </div>
              )}

              {!rec && (
                <div className="border border-gray-100 bg-gray-50 rounded-sm p-4 text-center">
                  <p className="text-gray-400 text-xs">Answer both questions above to see your recommendation.</p>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Not finding what you need?{" "}
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I need help finding the right weighing scale for my requirement. Please advise.")}`}
              target="_blank" rel="noopener noreferrer"
              className="text-[#25D366] font-semibold hover:underline">
              WhatsApp us directly
            </a>
            {" "}— we'll advise the right model for your use case.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── 4. CTA Banner ────────────────────────────────────────────────────────────

function CTABanner() {
  const waHref = `${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am looking for a weighing scale. Please help me choose the right model.")}`;
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Expert Guidance
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Not Sure Which Scale Is Right for You?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Tell us your industry, what you're weighing, and your capacity requirement —
            our team will recommend the right scale and give you a quote immediately.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={waHref} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp for Scale Advice
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products/weighbridges"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              View Weighbridges
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ScalesIndexPage() {
  return (
    <>
      <Hero />
      <ScaleCategoriesGrid />
      <ScaleFinder />
      <CTABanner />
    </>
  );
}