import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  MapPin,
  Users,
  Wrench,
  FlaskConical,
  Truck,
  ClipboardCheck,
  ShieldCheck,
  Globe,
  Calendar,
  Factory,
} from "lucide-react";

const WA_HREF = "https://wa.me/919877541199?text=" + encodeURIComponent("Hello Rite-Way, I would like to know more about Minebea Technologies. Please get in touch.");

function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z" fill="currentColor" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#DC2626] font-semibold mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#1E3A5F]">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      {/* Red left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626] z-10" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-7">
          <Link href="/" className="hover:text-white transition-colors">Home</Link><span>/</span>
          <span className="text-white/90 font-medium">About</span>
        </nav>
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Since 2004</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">🇮🇳 Mohali, Punjab</span>
          </div>
          <h1 className="text-white font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            About Minebea Technologies
          </h1>
          <p className="text-white/75 text-xl leading-relaxed" style={{ fontStyle: "italic" }}>
            Two decades of precision. One unwavering commitment to quality.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Company Story ─────────────────────────────────────────────────────────

function CompanyStory() {
  const stats = [
    { value: "20+",             label: "Years in Business",    icon: Calendar },
    { value: "ISO 9001:2015",   label: "Quality Certified",    icon: Award },
    { value: "500+",            label: "Installations Done",   icon: Factory },
    { value: "All India",       label: "Service Network",      icon: Globe },
  ];
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — Story */}
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-6">Who We Are</h2>
            <div className="space-y-4 text-gray-500 text-base leading-relaxed">
              <p>
                Minebea Technologies has been manufacturing precision weighing solutions under the{" "}
                <strong className="text-[#111827]">RITE-WAY</strong> brand since 2004. Based in
                Mohali's Industrial Area Phase 2, Punjab, we are an{" "}
                <strong className="text-[#111827]">ISO 9001:2015 certified</strong> company with
                over two decades of continuous operation.
              </p>
              <p>
                We are one of the fastest-growing manufacturers of electronics weighing scales
                and weighbridge systems in North India — having earned the loyalty of top corporate
                houses through consistent quality, timely delivery, and responsive customer service.
              </p>
              <p>
                Decades of extensive research and hands-on field experience go into every product we
                manufacture — from a 20g jewel precision scale to a 200-ton concrete platform
                weighbridge. Every product is tested before dispatch and verified at your site.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products"
                className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-[#DC2626] transition-colors">
                View Our Products <ArrowRight size={14} />
              </Link>
              <Link href="/contact"
                className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-5 py-3 rounded-sm hover:border-[#1E3A5F] transition-colors">
                <MapPin size={13} /> Visit Us in Mohali
              </Link>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label}
                className="border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all group"
                style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.05)" }}>
                <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] group-hover:bg-[#DC2626] flex items-center justify-center mb-4 transition-colors">
                  <Icon size={17} className="text-white" />
                </div>
                <p className="text-[#111827] font-bold text-2xl leading-none mb-1">{value}</p>
                <p className="text-gray-500 text-xs font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Timeline ─────────────────────────────────────────────────────────────

function Timeline() {
  const milestones = [
    {
      year: "2004",
      title: "Company Founded",
      desc: "Minebea Technologies established in Mohali, Punjab. First weighbridge installations in the region. The RITE-WAY brand built from day one on accuracy and service.",
      accent: "#DC2626",
    },
    {
      year: "2008",
      title: "ISO Certification",
      desc: "Achieved ISO certification for the first time — formalising the quality management system that had already been driving our manufacturing process since founding.",
      accent: "#1E3A5F",
    },
    {
      year: "2015",
      title: "ISO 9001:2015 Upgrade",
      desc: "Upgraded to ISO 9001:2015 standard — the most current and rigorous quality management framework. Customer focus and continuous improvement at the core.",
      accent: "#DC2626",
    },
    {
      year: "2024",
      title: "20 Years of Precision",
      desc: "Celebrating two decades of manufacturing. 500+ installations across North India. Expanded product range from small scales to GPRS fleet monitoring systems.",
      accent: "#1E3A5F",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">20 Years in Numbers</h2>
          <p className="text-gray-500 text-base leading-relaxed">From a single workshop in Mohali to a pan-India service network.</p>
        </div>

        <div className="relative">
          {/* Horizontal connector — desktop */}
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] h-px bg-gray-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map(({ year, title, desc, accent }) => (
              <div key={year} className="relative z-10 flex flex-col group">
                {/* Year circle */}
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 bg-white group-hover:border-[#DC2626] flex items-center justify-center mb-5 transition-colors mx-auto lg:mx-0" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <span className="font-bold text-sm" style={{ color: accent }}>{year}</span>
                </div>
                <h3 className="text-[#111827] font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Quality Process ───────────────────────────────────────────────────────

function QualityProcess() {
  const steps = [
    {
      icon: FlaskConical,
      step: "01",
      title: "Rigorous Testing During Manufacturing",
      desc: "Every component and sub-assembly is subjected to rigorous testing at each stage of the manufacturing process — not just at the end. Quality is built in, not inspected in.",
    },
    {
      icon: ClipboardCheck,
      step: "02",
      title: "System Tests Before Dispatch",
      desc: "The complete system — scale or weighbridge with all electronics and software — undergoes comprehensive testing before it leaves our facility. Nothing ships without passing our internal acceptance criteria.",
    },
    {
      icon: CheckCircle2,
      step: "03",
      title: "Final Site Acceptance Test",
      desc: "Our engineer performs a final site acceptance test at your premises. Performance criteria are verified on-site with your team present. You sign off when you are satisfied — not before.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <SectionLabel>Quality Assurance</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Our 3-Stage Quality Process</h2>
          <p className="text-gray-500 text-base leading-relaxed">ISO 9001:2015 certified. Every product tested at three stages before it goes live at your site.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step}
              className="border border-gray-100 rounded-sm p-7 hover:shadow-md transition-all group relative overflow-hidden"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              {/* Step number watermark */}
              <div className="absolute top-4 right-4 text-gray-50 font-black select-none pointer-events-none"
                style={{ fontSize: "5rem", lineHeight: 1 }}>
                {step}
              </div>
              <div className="w-11 h-11 rounded-sm bg-[#1E3A5F] group-hover:bg-[#DC2626] flex items-center justify-center mb-5 transition-colors relative z-10">
                <Icon size={19} className="text-white" />
              </div>
              <div className="flex items-center gap-2 mb-2 relative z-10">
                <span className="text-[#DC2626] font-bold text-xs tracking-widest">Step {step}</span>
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-3 relative z-10">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Sales & Service ───────────────────────────────────────────────────────

function SalesService() {
  const pillars = [
    { icon: Users,   title: "Specialist Sales Engineers",          desc: "Teams of trained sales engineers who understand your industry — they recommend the right product, not just any product." },
    { icon: Truck,   title: "Installed & Verified On-Site",        desc: "Equipment is delivered, installed, calibrated, and verified to the highest standards at your premises. No half-done jobs." },
    { icon: Wrench,  title: "Preventative Maintenance Programs",   desc: "Comprehensive AMC programs tailor-made for every customer — scheduled visits, calibration checks, and parts replacement before failures occur." },
    { icon: Globe,   title: "Long Service Chain Across India",     desc: "Service coverage across all of North India with rapid response times. Your weighbridge never sits idle waiting for a technician." },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionLabel>After Sales Support</SectionLabel>
            <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              Pan-India Service Network
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              Buying a Rite-Way product is the beginning of a long service relationship —
              not the end of a transaction. Our service teams are trained, equipped, and
              available across all of North India.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors">
                <WAIcon /> Request AMC Quote
              </a>
              <Link href="/contact"
                className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-5 py-3 rounded-sm hover:border-[#1E3A5F] transition-colors">
                Contact Service Team
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title}
                className="bg-white border border-gray-100 rounded-sm p-5 hover:shadow-md transition-all group"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                <div className="w-9 h-9 rounded-sm bg-gray-50 group-hover:bg-[#1E3A5F] flex items-center justify-center mb-3 transition-colors">
                  <Icon size={15} className="text-[#1E3A5F] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-[#111827] font-bold text-xs mb-1.5">{title}</h3>
                <p className="text-gray-500 text-[0.68rem] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Trust Badges ─────────────────────────────────────────────────────────

function TrustBadges() {
  const badges = [
    { icon: Award,       label: "ISO 9001:2015",        sub: "Quality Certified",      bg: "bg-green-50",  border: "border-green-200", text: "text-green-700" },
    { icon: Calendar,    label: "Since 2004",            sub: "20+ Years",              bg: "bg-blue-50",   border: "border-blue-100",  text: "text-[#1E3A5F]" },
    { icon: ShieldCheck, label: "Made in India",         sub: "Mohali, Punjab",         bg: "bg-orange-50", border: "border-orange-100", text: "text-orange-700" },
    { icon: Globe,       label: "Minebea Partner",       sub: "Certified Distributor",  bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-700" },
    { icon: ClipboardCheck, label: "Legal Metrology",   sub: "Stamp Approved",         bg: "bg-red-50",    border: "border-red-100",   text: "text-red-700" },
  ];

  return (
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-center text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Trusted, Certified, Verified</p>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map(({ icon: Icon, label, sub, bg, border, text }) => (
            <div key={label}
              className={`inline-flex items-center gap-3 ${bg} border ${border} rounded-sm px-5 py-3`}>
              <Icon size={16} className={text} />
              <div>
                <p className={`font-bold text-xs ${text}`}>{label}</p>
                <p className="text-gray-400 text-[0.6rem]">{sub}</p>
              </div>
            </div>
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
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Work With Us</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Ready to Work with North India's Most Trusted Weighing Partner?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Tell us what you need to weigh — we'll recommend the right product, install it at your site,
            and back it with a service commitment that lasts for decades.
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
            <Link href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              Visit Us in Mohali
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <Hero />
      <CompanyStory />
      <Timeline />
      <QualityProcess />
      <SalesService />
      <TrustBadges />
      <CTABanner />
    </>
  );
}