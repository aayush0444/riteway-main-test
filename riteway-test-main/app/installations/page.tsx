import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Gauge, Wrench, ClipboardCheck, Camera } from "lucide-react";

const WA_HREF = "https://wa.me/919877541199?text=" + encodeURIComponent("Hello Rite-Way, I would like to see installation examples from my industry. Please share photos and references.");

function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
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

function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.35 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, white 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7 flex-wrap">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#111827] font-medium">Installations</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">500+ Completed</span>
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Pan North India</span>
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#DC2626] bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">Since 2004</span>
          </div>
          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Installation Gallery
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Over 500 weighbridge and weighing scale installations across Punjab, Haryana, Himachal Pradesh, Jammu &amp; Kashmir, and Delhi NCR — in grain mandis, factories, mines, logistics parks, and retail establishments.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
              <WAIcon /> See Examples for Your Industry
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get a Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsRow() {
  const stats = [
    { value: "500+", label: "Installations",       sub: "Weighbridges & Scales" },
    { value: "20+",  label: "Years Experience",    sub: "Since 2004" },
    { value: "5",    label: "States Covered",      sub: "North India" },
    { value: "ISO",  label: "9001:2015 Certified", sub: "Quality assured" },
  ];
  return (
    <section className="bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, label, sub }, i) => (
            <div key={label} className={`flex items-start gap-4 ${i < stats.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-6" : ""}`}>
              <div>
                <p className="text-white font-bold text-2xl leading-none mb-1">{value}</p>
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

function GalleryComingSoon() {
  const industries = [
    { label: "Grain Mandi",       count: "100+", color: "#166534" },
    { label: "Manufacturing",     count: "80+",  color: "#1E3A5F" },
    { label: "Mining & Quarry",   count: "60+",  color: "#374151" },
    { label: "Logistics & Fleet", count: "70+",  color: "#0369a1" },
    { label: "Cold Storage",      count: "40+",  color: "#1E3A5F" },
    { label: "Government & PSU",  count: "50+",  color: "#DC2626" },
    { label: "Construction",      count: "50+",  color: "#92400e" },
    { label: "Retail & Kirana",   count: "50+",  color: "#374151" },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Photo Gallery</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Installation Gallery Coming Soon
          </h2>
        </div>

        {/* Coming soon card */}
        <div className="bg-white border border-gray-100 rounded-sm overflow-hidden mb-10" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          <div className="bg-[#1E3A5F] h-1" />
          <div className="p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-8">
            <div className="w-16 h-16 rounded-sm bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
              <Camera size={28} className="text-gray-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-[#111827] font-bold text-xl mb-3">
                We Are Documenting Our 500+ Installations
              </h3>
              <p className="text-gray-500 text-base leading-relaxed mb-5">
                Our engineering team is visiting completed installations across North India to photograph and document them properly. The gallery will be live shortly. In the meantime, WhatsApp us with your industry — we will send you reference photos and client contacts from similar installations directly.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors">
                  <WAIcon /> WhatsApp for Installation Photos
                </a>
                <a href="tel:+919877541199"
                  className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-5 py-3 rounded-sm hover:border-[#DC2626] hover:text-[#DC2626] transition-colors">
                  Call: +91 98775 41199
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Industry installation counts */}
        <div className="max-w-xl mb-6">
          <p className="text-[#111827] font-bold text-sm mb-1">Installations by Industry</p>
          <p className="text-gray-400 text-xs">Approximate count of completed installations per sector.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {industries.map(({ label, count, color }) => (
            <div key={label}
              className="bg-white border border-gray-100 rounded-sm p-4 hover:shadow-sm transition-all"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <p className="font-bold text-xl mb-0.5" style={{ color }}>{count}</p>
              <p className="text-gray-600 text-xs font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstallationProcess() {
  const steps = [
    { icon: MapPin,         step: "01", title: "Site Survey",       desc: "Engineer visits to assess ground, space, traffic flow, and utility connections. Pit type vs pitless recommendation made on-site." },
    { icon: Gauge,          step: "02", title: "Civil & Foundation", desc: "Foundation design, civil work, RCC casting or steel erection. Load cell pockets positioned precisely by our team." },
    { icon: Wrench,         step: "03", title: "Installation",       desc: "Platform installation, load cell fitting, indicator and terminal mounting, wiring, and connectivity setup." },
    { icon: ClipboardCheck, step: "04", title: "Calibration & Cert", desc: "Full calibration with certified test weights. Legal Metrology officer verification. Certificate issued before handover." },
  ];

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>How We Install</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Our Installation Process
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Every installation follows the same 4-step process — from initial survey to Legal Metrology certificate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="relative">
              {/* connector line — desktop only */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-[-calc(50%-20px)] h-px bg-gray-200 z-0" style={{ width: "calc(100% - 40px)", left: "calc(50% + 20px)" }} />
              )}
              <div className="bg-white border border-gray-100 rounded-sm p-6 relative z-10 h-full hover:shadow-md transition-shadow"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-gray-200 font-bold text-2xl">{step}</span>
                </div>
                <h3 className="text-[#111827] font-bold text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientTypes() {
  const clients = ["Grain Mandis & Procurement Centres", "Steel & Cement Plants", "Coal & Stone Mines", "Cold Storage & Warehouses", "Government & Municipal Bodies", "Logistics & Transport Hubs", "Construction & Infrastructure", "Retail & Distribution"];
  return (
    <section className="bg-gray-50 py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-[#111827] font-bold text-sm mb-5" style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
          Industries We Have Installed In
        </p>
        <div className="flex flex-wrap gap-2.5">
          {clients.map((c) => (
            <span key={c} className="bg-white border border-gray-200 text-gray-600 text-xs font-medium px-4 py-2 rounded-full hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition-colors cursor-default">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Get Started</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Want to Be Our Next Installation?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            WhatsApp us your site location, required capacity, and industry — we will advise on the right configuration and provide a complete quote.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp for Quote
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products/weighbridges"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InstallationsPage() {
  return (
    <>
      <Hero />
      <StatsRow />
      <GalleryComingSoon />
      <InstallationProcess />
      <ClientTypes />
      <CTABanner />
    </>
  );
}