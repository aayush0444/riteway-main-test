"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Monitor,
  Gauge,
  Zap,
  Printer,
  Code,
  Hammer,
  Clock,
  Shield,
  Wrench,
  CalendarCheck,
  CheckCircle2,
  PhoneCall,
  MapPin,
  AlertTriangle,
  HardHat,
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


const WA_URGENT = "https://wa.me/919877541199?text=" + encodeURIComponent("Hello Rite-Way, I need URGENT repair for my weighbridge/scale. Please contact me immediately.");
const WA_AMC    = "https://wa.me/919877541199?text=" + encodeURIComponent("Hello Rite-Way, I am interested in an Annual Maintenance Contract (AMC) for my weighing equipment. Please advise.");
const WEB3FORMS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY"; // Replace with key from web3forms.com

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

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-[#1E3A5F] border-b border-gray-100 overflow-hidden">
      {/* Photo placeholder: Engineer repairing weighbridge on-site */}
      <div className="absolute inset-0">
        <ImgPlaceholder label="Rite-Way Engineer Repairing Weighbridge On-Site" icon={HardHat} height="100%" className="h-full" />
      </div>
      <div className="absolute inset-0 bg-[#1E3A5F]/72 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-7 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <span className="text-white/90 font-medium">Repair &amp; Service</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />24hr On-Site Response
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">All Brands Serviced</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">Pan India</span>
          </div>
          <h1 className="text-white font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Repair &amp; Maintenance Services
          </h1>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
            Facing issues with your weighbridge or weighing scale? Our specialist engineers are available across North India for on-site repair, calibration, and maintenance — for Rite-Way products and all other brands.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_URGENT} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
              <WAIcon /> WhatsApp for Urgent Repair
            </a>
            <a href="tel:+919877541199"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              <PhoneCall size={14} /> Call Now: 98775 41199
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Service Types ─────────────────────────────────────────────────────────

function ServiceTypes() {
  const services = [
    {
      icon: Wrench,
      accent: "#DC2626",
      title: "On-Site Repair",
      badge: "Emergency Available",
      desc: "Our engineers come to you. We diagnose the fault on-site and repair it the same visit wherever possible — minimising downtime for your operation.",
      points: [
        "Available across Punjab, Haryana, HP & Delhi NCR",
        "Same-day visit for urgent breakdowns",
        "Full diagnostic — electronics, mechanics, and software",
        "Genuine spare parts carried by engineer",
      ],
      cta: "Request On-Site Repair",
      wa: "Hello Rite-Way, I need an on-site repair visit. My weighbridge/scale has broken down. Please send an engineer.",
    },
    {
      icon: Gauge,
      accent: "#1E3A5F",
      title: "Calibration & Re-verification",
      badge: "Legal Metrology Certified",
      desc: "After any repair, maintenance, or load cell replacement, your weighbridge must be recalibrated and re-verified. We handle the complete process — including the Legal Metrology officer visit.",
      points: [
        "Full recalibration to original accuracy standards",
        "Legal Metrology officer visit arranged",
        "New verification certificate issued",
        "Required after any load cell replacement",
      ],
      cta: "Request Calibration",
      wa: "Hello Rite-Way, I need calibration and Legal Metrology re-verification for my weighbridge. Please advise.",
    },
    {
      icon: CalendarCheck,
      accent: "#166534",
      title: "Annual Maintenance Contract",
      badge: "Best Value",
      desc: "Prevent breakdowns before they happen. AMC customers get scheduled preventative maintenance visits, priority breakdown response, and discounted spares — all for a fixed annual cost.",
      points: [
        "Scheduled preventative maintenance visits",
        "Priority response for emergency breakdowns",
        "Discounted genuine spare parts",
        "Legal Metrology re-verification included",
      ],
      cta: "Get AMC Quote",
      wa: "Hello Rite-Way, I am interested in an Annual Maintenance Contract for my weighing equipment. Please advise on pricing.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Three Levels of Service</h2>
          <p className="text-gray-500 text-base leading-relaxed">Emergency repair, scheduled calibration, or full AMC coverage — choose what your operation needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, accent, title, badge, desc, points, cta, wa }) => (
            <div key={title}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-200"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
              <div className="h-1" style={{ backgroundColor: accent }} />
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: accent }}>
                    <Icon size={19} className="text-white" />
                  </div>
                  <span className="text-[0.55rem] font-bold uppercase tracking-widest border px-2 py-1 rounded-full"
                    style={{ color: accent, backgroundColor: `${accent}10`, borderColor: `${accent}30` }}>
                    {badge}
                  </span>
                </div>
                <h3 className="text-[#111827] font-bold text-lg mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />{p}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/919877541199?text=${encodeURIComponent(wa)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-4 py-3 rounded-sm transition-colors w-full hover:opacity-90"
                  style={{ backgroundColor: accent }}>
                  <WAIcon /> {cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. All Brands Callout ────────────────────────────────────────────────────

function EngineerAtSitePhoto() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Photo placeholder: Rite-Way engineer at customer site */}
        <ImgPlaceholder label="Rite-Way Engineer at Customer Site — On-Site Repair and Service" icon={HardHat} aspect="21/9" className="rounded-sm" />
        <p className="text-xs text-gray-400 mt-2 text-center">Our engineers serve sites across Punjab, Haryana, Himachal Pradesh and Delhi NCR</p>
      </div>
    </section>
  );
}

function AllBrandsCallout() {
  const brands = ["Essae", "Avery", "Phoenix", "Mettler Toledo", "Sartorius", "AND", "Citizen", "Other Brands"];
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border-2 border-[#1E3A5F] rounded-sm overflow-hidden">
          <div className="bg-[#1E3A5F] px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <Shield size={22} className="text-white flex-shrink-0" />
            <h3 className="text-white font-bold text-lg">We Service All Brands — Not Just Rite-Way</h3>
          </div>
          <div className="px-8 py-7">
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Our engineers are trained to repair, calibrate, and maintain weighbridges and weighing scales from <strong className="text-[#111827]">all manufacturers</strong>. If your equipment is down, we can help — regardless of who made it. Same quality of service, same response time, same guarantee.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {brands.map((b) => (
                <span key={b}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${b === "Other Brands" ? "bg-[#DC2626] text-white border-[#DC2626]" : "bg-gray-50 text-gray-700 border-gray-200"}`}>
                  {b}
                </span>
              ))}
            </div>
            <a href={`https://wa.me/919877541199?text=${encodeURIComponent("Hello Rite-Way, I need repair for a weighbridge/scale that is NOT a Rite-Way product. Can you help?")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> Yes, We Can Fix Your Equipment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Common Issues ─────────────────────────────────────────────────────────

function CommonIssues() {
  const issues = [
    { icon: Monitor,       title: "Display Not Working",      desc: "Blank display, garbled readings, or flickering digits. Usually the indicator unit or power supply — often repaired same visit." },
    { icon: AlertTriangle, title: "Inaccurate Readings",      desc: "Weight readings drifting, incorrect, or inconsistent. Typically a load cell issue, calibration drift, or indicator fault." },
    { icon: Zap,           title: "Load Cell Failure",        desc: "One or more load cells damaged by overload, lightning, or water ingress. Full replacement with recalibration and re-verification." },
    { icon: Printer,       title: "Printer Not Working",      desc: "Ticket printer not printing, skipping lines, or jamming. Paper path, printhead, and RS-232 connection all diagnosed on-site." },
    { icon: Code,          title: "Software / Terminal Errors", desc: "Terminal displaying error codes, not saving records, or connectivity issues. Firmware update or terminal replacement if required." },
    { icon: Hammer,        title: "Platform Physical Damage",  desc: "Cracked concrete, bent steel, damaged anti-skid surface. Structural assessment and repair or platform section replacement." },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Common Problems</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Issues We Fix Regularly</h2>
          <p className="text-gray-500 text-base leading-relaxed">Most weighbridge and scale problems fall into these categories. Our engineers carry the most common spare parts on every visit.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {issues.map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="bg-white border border-gray-100 rounded-sm p-6 hover:shadow-md hover:border-[#DC2626]/20 transition-all group"
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

// ─── 5. Repair Request Form ───────────────────────────────────────────────────

type FormState = "idle" | "sending" | "success" | "error";

function RepairForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [otherBrand, setOtherBrand] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");
    try {
      const data = new FormData(e.currentTarget);
      data.append("access_key", WEB3FORMS_KEY);
      data.append("subject", "New Repair Request — Rite-Way Website");
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      setFormState(json.success ? "success" : "error");
    } catch {
      setFormState("error");
    }
  };

  const inputClass = "w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F] transition-colors bg-white";
  const labelClass = "block text-xs font-semibold text-[#111827] mb-1.5";

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — copy */}
          <div>
            <SectionLabel>Book a Service Visit</SectionLabel>
            <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Send a Repair Request</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Fill in the form and our service team will call you back within 4 hours. For urgent breakdowns, WhatsApp is faster.
            </p>

            {/* Response time promise */}
            <div className="bg-[#1E3A5F] rounded-sm p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-2">Our Response Time Promise</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We respond to all repair requests within <strong className="text-white">4 hours</strong>. On-site visit within <strong className="text-white">24 hours</strong> for locations in Punjab, Haryana, and Himachal Pradesh.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href={WA_URGENT} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors w-fit">
                <WAIcon /> WhatsApp for Urgent Breakdown
              </a>
              <a href="tel:+919877541199"
                className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-5 py-3 rounded-sm hover:border-[#DC2626] hover:text-[#DC2626] transition-colors w-fit">
                <PhoneCall size={14} /> Call: +91 98775 41199
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {formState === "success" ? (
              <div className="border border-green-100 bg-green-50 rounded-sm p-10 text-center">
                <CheckCircle2 size={36} className="text-green-500 mx-auto mb-4" />
                <p className="text-[#111827] font-bold text-lg mb-2">Request Received</p>
                <p className="text-gray-500 text-sm">Our service team will call you back within 4 hours. For urgent breakdowns, please WhatsApp us directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 border border-gray-100 rounded-sm p-7" style={{ boxShadow: "0 1px 12px rgba(0,0,0,0.05)" }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Your Name *</label>
                    <input type="text" name="name" required placeholder="Gurpreet Singh" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input type="tel" name="phone" required placeholder="+91 98765 43210" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Product Type *</label>
                  <select name="product_type" required className={inputClass}>
                    <option value="">Select product type…</option>
                    <option>Weighbridge</option>
                    <option>Platform Scale</option>
                    <option>Table Top Scale</option>
                    <option>Jewel Scale</option>
                    <option>Crane Scale</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Brand</label>
                  <div className="flex gap-3 mb-2">
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input type="radio" name="brand_type" value="Rite-Way" defaultChecked
                        onChange={() => setOtherBrand(false)}
                        className="accent-[#DC2626]" />
                      Rite-Way
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input type="radio" name="brand_type" value="other"
                        onChange={() => setOtherBrand(true)}
                        className="accent-[#DC2626]" />
                      Other brand
                    </label>
                  </div>
                  {otherBrand && (
                    <input type="text" name="brand_name" placeholder="Enter brand name" className={inputClass} />
                  )}
                </div>

                <div>
                  <label className={labelClass}>Describe the Issue *</label>
                  <textarea name="issue" required rows={3} placeholder="E.g. Display showing error code, weighbridge reading is inaccurate by 50kg, printer not printing…" className={`${inputClass} resize-none`} />
                </div>

                <div>
                  <label className={labelClass}>Your Location *</label>
                  <input type="text" name="location" required placeholder="City, District, State" className={inputClass} />
                </div>

                {formState === "error" && (
                  <p className="text-red-600 text-xs font-medium">Something went wrong. Please try WhatsApp or call us directly.</p>
                )}

                <button type="submit" disabled={formState === "sending"}
                  className="w-full bg-[#DC2626] text-white text-sm font-semibold py-3.5 rounded-sm hover:bg-red-700 transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                  {formState === "sending" ? "Sending…" : <>Send Repair Request <ArrowRight size={14} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. AMC Benefits ─────────────────────────────────────────────────────────

function AMCBenefits() {
  const benefits = [
    { icon: CalendarCheck, title: "Scheduled Maintenance Prevents Breakdowns",    desc: "Regular preventative visits catch wear and loose connections before they cause downtime. Most breakdowns are predictable — and preventable." },
    { icon: Zap,           title: "Priority Emergency Response",                   desc: "AMC customers jump the queue. When your weighbridge is down, we treat it as our highest priority — same-day response guaranteed." },
    { icon: Shield,        title: "Genuine Spare Parts at Discounted Rates",       desc: "AMC customers receive genuine Rite-Way spare parts at a discount from standard rates — and parts are stocked specifically for your equipment." },
    { icon: Gauge,         title: "Legal Metrology Re-verification Included",      desc: "Annual re-verification by a licensed Weights & Measures officer is included in our premium AMC packages — keeping your weighbridge legally compliant." },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel>Annual Maintenance Contract</SectionLabel>
            <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">AMC Benefits</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              An AMC is not a cost — it's an insurance policy for your weighbridge. The cost of one major breakdown (and the loss of business while it's down) typically exceeds the entire AMC fee for the year.
            </p>
            <a href={WA_AMC} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> Get AMC Quote
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title}
                className="bg-white border border-gray-100 rounded-sm p-5 hover:shadow-md transition-all group"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                <div className="w-9 h-9 rounded-sm bg-gray-50 group-hover:bg-green-50 flex items-center justify-center mb-3 transition-colors">
                  <Icon size={15} className="text-[#1E3A5F] group-hover:text-green-600 transition-colors" />
                </div>
                <h3 className="text-[#111827] font-bold text-xs mb-1.5">{title}</h3>
                <p className="text-gray-500 text-[0.67rem] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. CTA Banner ───────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Fast Response. Expert Engineers.</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Is Your Weighbridge Down Right Now?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Don't lose business. WhatsApp us immediately and we'll have an engineer at your site within 24 hours. 4-hour call-back guaranteed.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WA_URGENT} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp for Urgent Repair
            </a>
            <a href={WA_AMC} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get AMC Quote <ArrowRight size={14} />
            </a>
            <a href="tel:+919877541199"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              <PhoneCall size={14} /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function RepairPage() {
  return (
    <>
      <Hero />
      <ServiceTypes />
      <EngineerAtSitePhoto />
      <AllBrandsCallout />
      <CommonIssues />
      <RepairForm />
      <AMCBenefits />
      <CTABanner />
    </>
  );
}