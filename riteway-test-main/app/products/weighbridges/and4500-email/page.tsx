import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Wifi,
  FileSpreadsheet,
  SignalHigh,
  Truck,
  Database,
  Send,
  Inbox,
  MapPin,
  Building2,
  Smartphone,
  Network,
  Monitor,
} from "lucide-react";

const WA_HREF =
  "https://wa.me/919877541199?text=" +
  encodeURIComponent(
    "Hello Rite-Way, I am interested in the AND 4500 Email Terminal. Please advise on specifications and pricing."
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


function Hero() {
  return (
    <section className="relative bg-[#1E3A5F] border-b border-gray-100 overflow-hidden">
      {/* Photo placeholder: AND 4500 Email terminal */}
      <div className="absolute inset-0">
        <ImgPlaceholder label="AND 4500 Email Terminal — Auto Report via GSM" icon={Monitor} height="100%" className="h-full" />
      </div>
      <div className="absolute inset-0 bg-[#1E3A5F]/72 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7 flex-wrap">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link><span>/</span>
          <Link href="/products" className="hover:text-[#111827] transition-colors">Products</Link><span>/</span>
          <Link href="/products/weighbridges" className="hover:text-[#111827] transition-colors">Weighbridges</Link><span>/</span>
          <span className="text-[#111827] font-medium">AND 4500 Email Terminal</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Smart Terminal</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
          </div>
          <h1 className="text-white font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
            AND 4500 Email Terminal
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Automatic Excel weighment reports sent directly to your inbox via built-in
            GSM modem — no internet connection, no LAN, and no IT setup required at the
            weighbridge site. Reports reach up to 5 email IDs automatically after every weighment.
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
    { icon: Mail,            value: "5",        label: "Email Recipients", sub: "Reports sent simultaneously" },
    { icon: SignalHigh,      value: "GSM",       label: "Built-in Modem",   sub: "No external router needed" },
    { icon: FileSpreadsheet, value: "Excel",     label: "Report Format",    sub: "Opens on any device" },
    { icon: Wifi,            value: "No Wi-Fi",  label: "Needed at Site",   sub: "Works in remote locations" },
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
    { icon: Truck,    step: "01", title: "Vehicle Weighed",        desc: "A truck drives onto the weighbridge. The terminal records gross weight, tare, net weight, vehicle number, commodity, and operator." },
    { icon: Database, step: "02", title: "Data Recorded",          desc: "Complete weighment is logged in the terminal's internal memory. 1 lakh records stored — months of data without any export." },
    { icon: Send,     step: "03", title: "GSM Modem Fires",        desc: "The built-in GSM modem instantly packages weighment data into an Excel file and transmits it via the mobile network. No Wi-Fi. No LAN." },
    { icon: Inbox,    step: "04", title: "Report in Your Inbox",   desc: "Excel report arrives in up to 5 email IDs simultaneously — owner, accountant, manager, and HO all stay informed in real time." },
  ];
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <SectionLabel>The Process</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">How Auto-Email Reporting Works</h2>
          <p className="text-gray-500 text-base leading-relaxed">Weighment to inbox — fully automatic, zero manual steps required.</p>
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

function EmailReportPhoto() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Photo placeholder: Email Report Screenshot on Phone */}
        <ImgPlaceholder label="Email Report Screenshot on Phone — Auto-Sent Excel Report" icon={Smartphone} aspect="21/9" className="rounded-sm" />
        <p className="text-xs text-gray-400 mt-2 text-center">Auto-generated Excel report received on phone</p>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const reporting = [
    { label: "Automatic Excel Reports",    desc: "Every weighment triggers an instant Excel file — no manual export required" },
    { label: "Up to 5 Email Recipients",   desc: "Owner, accountant, manager, HO — all notified simultaneously" },
    { label: "Scheduled Reports",          desc: "Set daily, shift-end, or custom interval report schedules" },
    { label: "Pre-printed Stationery",     desc: "Compatible with pre-printed weighment slips for physical records" },
    { label: "Vehicle Master Integration", desc: "Vehicle number, commodity, operator included in every report" },
  ];
  const connectivity = [
    { label: "Built-in GSM Modem",         desc: "No external router or modem to buy, configure, or maintain" },
    { label: "No LAN at Weighbridge",      desc: "Completely independent of office or factory network" },
    { label: "No Internet at Site",        desc: "Uses mobile network — works wherever there is GSM signal" },
    { label: "Works in Remote Locations",  desc: "Ideal for rural factory sites, mine gates, mandi outposts" },
    { label: "All Indian Networks",        desc: "Compatible with all major GSM carriers across India" },
  ];
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Complete Feature Set</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Reporting &amp; Connectivity Features</h2>
          <p className="text-gray-500 text-base leading-relaxed">Everything needed for automated remote reporting — built in from day one.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Reporting Features",     icon: FileSpreadsheet, accent: "#1E3A5F", bg: "bg-blue-50", items: reporting },
            { title: "Connectivity Features",  icon: SignalHigh,      accent: "#DC2626", bg: "bg-red-50",  items: connectivity },
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
    { icon: MapPin,     title: "Remote Factory Sites",      desc: "No broadband? As long as there is mobile signal, reports reach your inbox automatically." },
    { icon: Building2,  title: "Multi-location Businesses", desc: "HQ receives reports from all weighbridges automatically — without anyone manually sending them." },
    { icon: Smartphone, title: "Owners on the Move",        desc: "Get every weighment report on your phone email — stay informed from anywhere in India." },
    { icon: Network,    title: "Mining & Quarry Sites",     desc: "Remote sites with no office LAN can now fully automate their weighment reporting." },
  ];
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Ideal Use Cases</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Perfect For</h2>
          <p className="text-gray-500 text-base leading-relaxed">The AND 4500 Email Terminal solves remote automated reporting better than any other solution on the market.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-gray-100 rounded-sm p-6 hover:shadow-md hover:border-[#DC2626]/30 transition-all duration-200 group" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
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

function CompatibleWith() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Compatible Platforms</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Works With All Rite-Way Weighbridges</h2>
          <p className="text-gray-500 text-base leading-relaxed">Pair the Email Terminal with any concrete or steel platform weighbridge.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
          {[
            { title: "Concrete Platform Weighbridge", sub: "Recommended — 100 years, zero maintenance", href: "/products/weighbridges/concrete-platform", color: "#1E3A5F", tag: "Most Popular" },
            { title: "Steel Platform Weighbridge",    sub: "Anti-skid diamond plate · 40T–150T",       href: "/products/weighbridges/steel-platform",   color: "#374151", tag: null },
          ].map(({ title, sub, href, color, tag }) => (
            <Link key={title} href={href} className="group bg-white border border-gray-100 rounded-sm p-6 hover:shadow-md hover:border-gray-200 transition-all" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}>
                  <Truck size={17} className="text-white" />
                </div>
                <div>
                  {tag && <span className="inline-block text-[0.58rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border bg-green-100 text-green-700 border-green-200 mb-2">{tag}</span>}
                  <p className="text-[#111827] font-bold text-sm mb-1 group-hover:text-[#DC2626] transition-colors">{title}</p>
                  <p className="text-gray-500 text-xs">{sub}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors">
                View platform <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
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
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Automated Reporting</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Want Weighment Reports in Your Inbox — Automatically?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">Our team configures the terminal, sets up the GSM modem, and verifies that reports are reaching all your recipients before we leave the site.</p>
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

export default function AND4500EmailPage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <HowItWorks />
      <EmailReportPhoto />
      <FeaturesSection />
      <PerfectFor />
      <CompatibleWith />
      <CTABanner />
    </>
  );
}