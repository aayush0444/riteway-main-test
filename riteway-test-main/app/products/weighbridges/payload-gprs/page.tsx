import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Wifi,
  BarChart3,
  AlertTriangle,
  Truck,
  Cloud,
  MonitorSmartphone,
  Pickaxe,
  Layers,
  Package,
  Shield,
  TrendingDown,
} from "lucide-react";

const WA_HREF =
  "https://wa.me/919877541199?text=" +
  encodeURIComponent(
    "Hello Rite-Way, I am interested in the Payload-T GPRS System for fleet and payload monitoring. Please advise."
  );

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#DC2626] font-semibold mb-3" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z" fill="currentColor" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.4 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, white 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7 flex-wrap">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link><span>/</span>
          <Link href="/products" className="hover:text-[#111827] transition-colors">Products</Link><span>/</span>
          <Link href="/products/weighbridges" className="hover:text-[#111827] transition-colors">Weighbridges</Link><span>/</span>
          <span className="text-[#111827] font-medium">Payload-T GPRS</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-white bg-[#DC2626] px-3 py-1 rounded-full">For Mining & Fleet Operations</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />Cloud Connected
            </span>
          </div>
          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>Payload-T GPRS System</h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Real-time vehicle payload monitoring with a cloud-based reporting dashboard.
            Overload alerts sent directly to your phone. Designed for mining companies,
            quarry operators, and large fleet managers who cannot afford overloading
            fines or vehicle damage.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
              <WAIcon /> WhatsApp Get Quote
            </a>
            <Link href="/get-quote" className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsRow() {
  const stats = [
    { icon: BarChart3,     value: "Real-time", label: "Payload Monitoring", sub: "Live weight per vehicle" },
    { icon: Cloud,         value: "Cloud",      label: "Dashboard",          sub: "Access from anywhere" },
    { icon: AlertTriangle, value: "Instant",    label: "Overload Alerts",    sub: "On your phone" },
    { icon: Wifi,          value: "GPRS",       label: "Connected",          sub: "No site internet needed" },
  ];
  return (
    <section className="bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <div key={label} className={`flex items-start gap-4 ${i < stats.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-6" : ""}`}>
              <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5"><Icon size={16} className="text-white" /></div>
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

function HowItWorks() {
  const steps = [
    { icon: Truck,             step: "01", title: "Vehicle Loaded at Site",        desc: "A mining truck or fleet vehicle is loaded with material at your site. The Payload-T sensor captures the load weight in real time." },
    { icon: BarChart3,         step: "02", title: "Payload-T Weighs in Real Time", desc: "The system captures payload weight instantly. If the load exceeds the set limit, an overload alert fires before the vehicle can move." },
    { icon: Wifi,              step: "03", title: "Data Sent via GPRS",            desc: "Payload, vehicle number, time, and driver data are transmitted via GPRS to the cloud. No Wi-Fi or LAN required at the loading point." },
    { icon: MonitorSmartphone, step: "04", title: "Live Dashboard & Alerts",       desc: "Fleet manager sees live data on the cloud dashboard. Overload alerts arrive on phone immediately — before the truck reaches the road." },
  ];
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">How Payload-T Works</h2>
          <p className="text-gray-500 text-base leading-relaxed">From loading point to cloud dashboard — fully automated payload monitoring and overload prevention.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div key={step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-full w-5 z-10 -translate-x-2.5">
                  <ArrowRight size={14} className="text-gray-300" />
                </div>
              )}
              <div className="border border-gray-100 rounded-sm p-6 h-full hover:shadow-md transition-shadow" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-[#DC2626] font-bold text-xs tracking-widest">Step {step}</span>
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

function FeaturesSection() {
  const monitoring = [
    { label: "Live Payload Data",          desc: "Real-time weight for every vehicle currently on or leaving the site" },
    { label: "Overload Alerts",            desc: "Instant phone alert when any vehicle exceeds its payload limit" },
    { label: "Trip-wise Reports",          desc: "Complete history of every trip — weight, time, vehicle, driver" },
    { label: "Vehicle-wise Reports",       desc: "Aggregate payload data per vehicle for utilisation analysis" },
    { label: "Driver-wise Reports",        desc: "Track patterns per driver — identify overloading tendencies early" },
  ];
  const technology = [
    { label: "GPRS Connectivity",          desc: "Transmits data via mobile network — no Wi-Fi or fibre needed" },
    { label: "Cloud Dashboard",            desc: "Accessible from any browser, any device, from anywhere in India" },
    { label: "Works Without Site Internet", desc: "GPRS module operates independently of local network infrastructure" },
    { label: "Remote Access",              desc: "Fleet manager, MD, and compliance team see the same live data" },
    { label: "Historical Data Storage",    desc: "All trips and alerts stored in cloud — accessible for audits" },
  ];
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Complete Feature Set</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Monitoring &amp; Technology Features</h2>
          <p className="text-gray-500 text-base leading-relaxed">Purpose-built for industrial fleet operations — every feature designed around preventing overloading and maximising fleet efficiency.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Monitoring Features",  icon: BarChart3, accent: "#1E3A5F", bg: "bg-blue-50", items: monitoring },
            { title: "Technology Features",  icon: Cloud,     accent: "#DC2626", bg: "bg-red-50",  items: technology },
          ].map(({ title, icon: Icon, accent, bg, items }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-sm overflow-hidden" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="h-1" style={{ backgroundColor: accent }} />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ backgroundColor: accent }}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <h3 className="text-[#111827] font-bold text-base">{title}</h3>
                </div>
                <div className="space-y-4">
                  {items.map(({ label, desc }) => (
                    <div key={label} className="flex gap-3">
                      <div className={`w-6 h-6 rounded-sm ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <CheckCircle2 size={12} style={{ color: accent }} />
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
          ))}
        </div>
      </div>
    </section>
  );
}

function PerfectFor() {
  const useCases = [
    { icon: Pickaxe, title: "Mining Companies",                 desc: "Monitor payload of every haul truck leaving the mine — prevent government overloading fines at checkpoints." },
    { icon: Layers,  title: "Quarry Operators",                desc: "Track stone, sand, and aggregate loads in real time. Know exactly how much material left your site every shift." },
    { icon: Truck,   title: "Large Logistics Fleets",          desc: "Fleet managers get a live view of all vehicles. Overloaded trucks are stopped before they reach the highway." },
    { icon: Package, title: "Construction Material Suppliers", desc: "Verify every delivery truck is within legal limits. Protect your company from fines and road damage liability." },
  ];
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Ideal Use Cases</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Perfect For</h2>
          <p className="text-gray-500 text-base leading-relaxed">Any operation where heavy vehicles leave your site and overloading is a legal, financial, or safety risk.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-gray-100 rounded-sm p-6 hover:shadow-md hover:border-[#DC2626]/30 transition-all group" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
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

function BusinessBenefits() {
  return (
    <section className="bg-gray-50 py-14 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="rounded-sm overflow-hidden border border-[#1E3A5F]/20" style={{ boxShadow: "0 2px 20px rgba(30,58,95,0.08)" }}>
            <div className="h-1 bg-[#1E3A5F]" />
            <div className="bg-[#1E3A5F]/5 p-7 flex flex-col sm:flex-row gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-sm bg-[#1E3A5F] flex items-center justify-center">
                  <Shield size={22} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-[#111827] font-bold text-lg mb-2">Stop Overloading Before It Reaches the Road</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  Overloaded vehicles damage roads and attract{" "}
                  <strong className="text-[#111827]">heavy government fines</strong> at highway checkpoints.
                  They also accelerate tyre, axle, and suspension wear — costing lakhs in premature
                  maintenance. Payload-T prevents overloading{" "}
                  <strong className="text-[#111827]">before the vehicle leaves your site</strong> —
                  saving you from fines, vehicle wear, and legal liability.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: TrendingDown, label: "Avoid Government Fines", sub: "At highway checkpoints" },
                    { icon: Truck,        label: "Reduce Vehicle Wear",    sub: "Extend tyre & axle life" },
                    { icon: Shield,       label: "Legal Protection",       sub: "Full trip audit trail" },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-sm bg-[#1E3A5F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={13} className="text-white" />
                      </div>
                      <div>
                        <p className="text-[#111827] font-semibold text-xs">{label}</p>
                        <p className="text-gray-500 text-[0.65rem]">{sub}</p>
                      </div>
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

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Protect Your Fleet</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Ready to Monitor Your Fleet in Real Time?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">Our engineers assess your site, configure the Payload-T system, and set up the cloud dashboard so your fleet manager has live visibility from day one.</p>
          <div className="flex flex-wrap gap-4">
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp Our Team
            </a>
            <Link href="/get-quote" className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products/weighbridges" className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              All Weighbridges
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PayloadGPRSPage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <HowItWorks />
      <FeaturesSection />
      <PerfectFor />
      <BusinessBenefits />
      <CTABanner />
    </>
  );
}