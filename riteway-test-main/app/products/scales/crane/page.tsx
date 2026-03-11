import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Anchor,
  Radio,
  Wifi,
  Gauge,
  Scale,
  Factory,
  Construction,
  Ship,
  Warehouse,
  Package,
  Thermometer,
  Activity,
  Monitor,
  RotateCcw,
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

const DISPLAY_FEATURES = [
  { icon: Monitor,   label: "Large LED Display",          desc: "High-visibility LED digits readable from a distance — essential when the scale is suspended at height." },
  { icon: Activity,  label: "Weight Hold Function",       desc: "Freezes the reading when the load is swinging — enables accurate recording without waiting for stillness." },
  { icon: Gauge,     label: "Gross / Net Weighing",       desc: "Tare out containers, hooks, and chains for accurate net load measurement every time." },
  { icon: RotateCcw, label: "kg / lb Conversion",         desc: "Switch between kilograms and pounds at the press of a button — useful for international specifications." },
  { icon: Scale,     label: "Weight Accumulation",        desc: "Accumulate total weight across multiple lifts — useful for batch material handling operations." },
  { icon: Anchor,    label: "Push Button Tare",           desc: "Instant tare zeroing via push button — no remote needed for basic tare operations." },
];

const CONTROL_FEATURES = [
  { icon: Radio,   label: "Infrared Remote (20m)",       desc: "Full scale control from up to 20 metres away — operate from safe ground level while scale is elevated." },
  { icon: Gauge,   label: "Remote Calibration",          desc: "Calibrate the scale via infrared remote — no need to physically access the suspended unit." },
  { icon: Wifi,    label: "Wireless Option Available",   desc: "Optional wireless module for extended range control beyond the standard IR remote capability." },
  { icon: Anchor,  label: "High Tension Hook & Shackle", desc: "Engineered for industrial lifting loads — high-tensile hook rated for the full scale capacity." },
  { icon: Package, label: "Sturdy Mechanical Structure", desc: "Robust housing designed to withstand the vibration, impact, and environmental conditions of industrial use." },
];

function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.4 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, white 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7 flex-wrap">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link><span>/</span>
          <Link href="/products/scales" className="hover:text-[#111827] transition-colors">Scales</Link><span>/</span>
          <span className="text-[#111827] font-medium">Crane & Hanging Scale</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-full">Industrial Heavy Duty</span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
            </span>
          </div>
          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Crane &amp; Hanging Scales
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-2xl">
            Heavy-duty hook scales for industrial lifting, crane operations, and material handling. Large LED display visible from the ground. Infrared remote control up to 20 metres. Wireless option available. Weight hold and accumulation functions built in.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I am interested in a Crane or Hanging Scale. Please advise on capacity and specifications.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm">
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

function CraneHeroPhoto() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Photo placeholder: Crane Scale Hanging from Hook */}
        <ImgPlaceholder label="Crane Scale Hanging from Hook — Industrial Lifting Application" icon={Anchor} aspect="16/9" className="rounded-sm max-w-2xl mx-auto" />
        <p className="text-xs text-gray-400 mt-2 text-center">Rite-Way Crane Scale — hook suspended weighing</p>
      </div>
    </section>
  );
}

function HighlightsRow() {
  const stats = [
    { icon: Anchor, value: "High Tension", label: "Hook & Shackle",    sub: "Industrial rated" },
    { icon: Radio,  value: "20m",          label: "IR Remote Range",   sub: "Operate from ground" },
    { icon: Gauge,  value: "kg + lb",      label: "Unit Switching",    sub: "Instant conversion" },
    { icon: Wifi,   value: "Wireless",     label: "Option Available",  sub: "Extended range" },
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

function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Full Feature Set</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Display, Operation &amp; Control</h2>
          <p className="text-gray-500 text-base leading-relaxed">Everything needed for safe, accurate, and remote-controlled crane weighing in industrial environments.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Display & Operation",  icon: Monitor, accent: "#1E3A5F", bg: "bg-blue-50",  items: DISPLAY_FEATURES },
            { title: "Remote Control",       icon: Radio,   accent: "#DC2626", bg: "bg-red-50",   items: CONTROL_FEATURES },
          ].map(({ title, icon: Icon, accent, bg, items }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-sm overflow-hidden" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="h-1" style={{ backgroundColor: accent }} />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center" style={{ backgroundColor: accent }}><Icon size={16} className="text-white" /></div>
                  <h3 className="text-[#111827] font-bold text-base">{title}</h3>
                </div>
                <div className="space-y-4">
                  {items.map(({ icon: IIcon, label, desc }) => (
                    <div key={label} className="flex gap-3">
                      <div className={`w-7 h-7 rounded-sm ${bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <IIcon size={13} style={{ color: accent }} />
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

function CraneIndustrialPhoto() {
  return (
    <section className="bg-gray-50 py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Photo placeholder: Crane Scale in industrial use */}
        <ImgPlaceholder label="Crane Scale in Industrial Use — Material Handling Operation" icon={Anchor} aspect="21/9" className="rounded-sm" />
        <p className="text-xs text-gray-400 mt-2 text-center">Crane scale in factory — batch material handling</p>
      </div>
    </section>
  );
}

function PerfectFor() {
  const useCases = [
    { icon: Factory,      title: "Steel Plants",              desc: "Weigh billets, coils, and ingots during crane handling — remote operation from operator cabin." },
    { icon: Package,      title: "Construction Sites",        desc: "Weigh structural steel, concrete precast elements, and equipment lifted by crane on-site." },
    { icon: Ship,         title: "Shipping & Ports",          desc: "Accurate container and cargo weighing during loading and unloading at port terminals." },
    { icon: Warehouse,    title: "Warehouses with Cranes",    desc: "Weigh palletised goods and bulk materials during crane-assisted storage and retrieval." },
    { icon: Anchor,       title: "Material Handling Units",   desc: "Any application where goods are lifted and weighed simultaneously by crane or hoist." },
    { icon: Thermometer,  title: "Cold Storage Hoists",       desc: "Weigh frozen and refrigerated goods during hoist transfer — robust in cold chain environments." },
  ];
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Ideal Use Cases</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Perfect For</h2>
          <p className="text-gray-500 text-base leading-relaxed">Any industrial operation where goods must be weighed while suspended or during crane lifting.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border border-gray-100 rounded-sm p-6 hover:shadow-md transition-all group" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
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

function RelatedProducts() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-8">
          <SectionLabel>You May Also Need</SectionLabel>
          <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight">Related Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {[
            { name: "Platform & Floor Scale",  href: "/products/scales/platform",    cap: "100kg–2000kg", desc: "Heavy-duty floor scales for warehouses — when you need floor weighing alongside crane weighing.", color: "#374151" },
            { name: "Load Cells & Junction Box", href: "/products/load-cells",       cap: "Accessories",  desc: "Replacement load cells and junction boxes for your weighing systems.", color: "#1E3A5F" },
          ].map(({ name, href, cap, desc, color }) => (
            <Link key={name} href={href} className="group bg-white border border-gray-100 rounded-sm p-5 hover:shadow-md transition-all" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: color }}><Scale size={15} className="text-white" /></div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-[#111827] font-bold text-sm group-hover:text-[#DC2626] transition-colors">{name}</p>
                    <span className="text-[0.55rem] font-bold text-gray-500 bg-gray-100 border border-gray-200 px-1.5 py-0.5 rounded-full">{cap}</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors">
                View details <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
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
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Industrial Weighing</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Need a Crane Scale for Your Operation?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">Tell us your capacity requirement and lifting environment — we'll recommend the right crane scale configuration including wireless options.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`${WA_BASE}${encodeURIComponent("Hello Rite-Way, I need a crane or hanging scale. Please advise on capacity and the right configuration.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp Our Team
            </a>
            <Link href="/get-quote" className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products/scales" className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">All Scales</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CraneScalePage() {
  return (<><Hero /><CraneHeroPhoto /><HighlightsRow /><FeaturesSection /><CraneIndustrialPhoto /><PerfectFor /><RelatedProducts /><CTABanner /></>);
}