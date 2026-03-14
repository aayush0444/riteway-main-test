import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Layers,
  BarChart3,
  Mail,
  AlertCircle,
  TrendingUp,
  Zap,
  Grid,
  Truck,
} from "lucide-react";

// ─── Shared ───────────────────────────────────────────────────────────────────

const WA_HREF =
  "https://wa.me/919877541199?text=" +
  encodeURIComponent(
    "Hello Rite-Way, I am interested in the Steel Platform Weighbridge. Please advise on size, capacity, and pricing."
  );

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

function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd" clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor"
      />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SIZES = [
  { size: "5 × 3 m",   cap: "40T",  note: "" },
  { size: "7.5 × 3 m", cap: "60T",  note: "" },
  { size: "9 × 3 m",   cap: "80T",  note: "" },
  { size: "12 × 3 m",  cap: "80T",  note: "" },
  { size: "14 × 3 m",  cap: "100T", note: "" },
  { size: "15 × 3 m",  cap: "100T", note: "" },
  { size: "16 × 3 m",  cap: "100T", note: "" },
  { size: "18 × 3 m",  cap: "150T", note: "Maximum for steel platform" },
];

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100">
      {/* Hero photo */}
      <div className="absolute inset-0">
        <img
          src="/images/products/weighbridges/ms-steel-weighbridge.png"
          alt="Rite-Way Steel Platform Weighbridge — surface type installation"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#1E3A5F]/70 pointer-events-none" />
      {/* Red left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626] z-10" aria-hidden="true" />

<div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-28">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-white/50 mb-7" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>
          <span>/</span>
          <Link href="/products/weighbridges" className="hover:text-white transition-colors">Weighbridges</Link>
          <span>/</span>
          <span className="text-white/90 font-medium">Steel Platform</span>
        </nav>

        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              ISO 9001:2015
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
              40T to 150T
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">
              🇮🇳 Made in India
            </span>
          </div>

          <h1
            className="text-white font-bold leading-[1.07] tracking-tight mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
          >
            Steel Platform Weighbridge
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-2xl">
            Fabricated steel deck weighbridges from 40T to 150T capacity. Available in
            pit type and pitless (surface type) installation. Anti-skid diamond plate
            surface. ISO 9001:2015 certified. Installed and calibrated on-site.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={WA_HREF}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm"
            >
              <WAIcon /> WhatsApp Get Quote
            </a>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors"
            >
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link
              href="/why-concrete"
              className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-6 py-3.5 rounded-sm hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition-colors"
            >
              Compare vs Concrete
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Key Highlights Row ────────────────────────────────────────────────────

function HighlightsRow() {
  const stats = [
    { icon: TrendingUp, value: "40T–150T",  label: "Capacity Range",    sub: "8 standard sizes" },
    { icon: Layers,     value: "2 Types",   label: "Installation",      sub: "Pit type & pitless" },
    { icon: Shield,     value: "Anti-skid", label: "Diamond Plate",     sub: "Surface grip" },
    { icon: Zap,        value: "ISO",       label: "9001:2015 Certified", sub: "Quality assured" },
  ];

  return (
    <section className="bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label, sub }, i) => (
            <div
              key={label}
              className={`flex items-start gap-4 ${i < stats.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-6" : ""}`}
            >
              <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon size={16} className="text-white" />
              </div>
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

// ─── 3. Technical Specifications ─────────────────────────────────────────────

const STEEL_SPECS = [
  { attribute: "Platform Material",    specification: "Fabricated Mild Steel with anti-skid diamond plate surface", warn: false },
  { attribute: "Available Sizes",      specification: "5×3m to 18×3m — standard sizes",                             warn: false },
  { attribute: "Capacity Range",       specification: "40T to 150T",                                                 warn: false },
  { attribute: "Number of Load Cells", specification: "6 load cells",                                               warn: false },
  { attribute: "Load Cell Type",       specification: "Digital or Analog — both available",                          warn: false },
  { attribute: "Installation Type",    specification: "Pit Type and Pitless — both available",                       warn: false },
  { attribute: "Anti-skid Surface",    specification: "Diamond plate — welded strips",                               warn: false },
  { attribute: "Maintenance Required", specification: "Annual — rust treatment, bolt tightening, strip repair",      warn: true  },
  { attribute: "Lightning Protection", specification: "Grounding required — not immune to electrostatic charge",     warn: true  },
  { attribute: "Capacity Upgrade",     specification: "Requires structural re-fabrication",                          warn: true  },
  { attribute: "Certification",        specification: "ISO 9001:2015 · Legal Metrology compliant",                  warn: false },
];

function TechnicalSpecs() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Technical Specifications</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Engineering Specifications
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Full technical detail for the Rite-Way Steel Platform Weighbridge.
            Available in standard sizes from 5×3m to 18×3m — custom sizes on request.
          </p>
        </div>

        <div className="overflow-x-auto rounded-sm border border-gray-200" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
          <table className="w-full min-w-[540px] border-collapse">
            <thead>
              <tr className="bg-[#1E3A5F]">
                <th className="text-left px-6 py-4 text-white font-bold text-xs uppercase tracking-[0.12em] w-2/5">
                  Attribute
                </th>
                <th className="text-left px-6 py-4 text-white font-bold text-xs uppercase tracking-[0.12em]">
                  Specification
                </th>
              </tr>
            </thead>
            <tbody>
              {STEEL_SPECS.map(({ attribute, specification, warn }, i) => (
                <tr
                  key={attribute}
                  className={`border-b border-gray-100 last:border-b-0 transition-colors hover:bg-amber-50/30 ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                  }`}>
                  <td className="px-6 py-4 align-top">
                    <span className="text-[#111827] font-semibold text-sm">{attribute}</span>
                  </td>
                  <td className="px-6 py-4 align-top">
                    <div className="flex items-start gap-2.5">
                      {warn && (
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"
                          aria-hidden="true"
                          style={{ marginTop: "0.35rem" }}
                        />
                      )}
                      <span className={`text-sm leading-relaxed ${warn ? "text-[#92400e] font-medium" : "text-gray-600"}`}>
                        {specification}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400 mt-4 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block flex-shrink-0" />
          Highlighted rows indicate maintenance and limitation considerations. Looking for zero-maintenance?{" "}
          <a
            href="/products/weighbridges/concrete-platform"
            className="text-[#DC2626] font-semibold hover:underline ml-0.5">
            See concrete platform →
          </a>
        </p>
      </div>
    </section>
  );
}

// ─── 4. Installation Types ────────────────────────────────────────────────────

function InstallationTypes() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Two Installation Options</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Pit Type or Pitless
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            The steel platform is available in both installation configurations to
            suit your site conditions and space constraints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pit Type */}
          <div
            className="border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
          >
            <div className="h-44 overflow-hidden">
              <img
                src="/images/products/weighbridges/ms-steel-weighbridge.png"
                alt="Rite-Way Steel Platform Weighbridge — pit type installation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7">
              <h3 className="text-[#111827] font-bold text-xl mb-2">Pit Type Installation</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Steel fabricated deck installed below ground level. Platform surface sits
                flush with the surrounding road. Vehicles drive straight on — no ramps
                required. Steel structure and load cells concealed in the pit with
                a maintenance access point.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Platform flush with ground — no ramps",
                  "Vehicles approach from any direction",
                  "Requires less space overall",
                  "Maintenance access pit provided",
                  "Suitable for high-frequency use",
                  "Steel structure hidden below ground",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pitless */}
          <div
            className="border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-200"
            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
          >
            <div className="h-44 overflow-hidden">
              <img
                src="/images/products/weighbridges/pitless-weighbridge.jpeg"
                alt="Rite-Way Steel Platform Weighbridge — pitless surface type"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-7">
              <h3 className="text-[#111827] font-bold text-xl mb-2">Pitless (Surface Type)</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                Steel deck installed above ground with approach ramps on both ends.
                No excavation required — reducing installation time and site disruption.
                Suitable where digging is not feasible or where the installation is
                intended to be semi-permanent.
              </p>
              <ul className="space-y-2.5">
                {[
                  "No excavation needed",
                  "Faster installation turnaround",
                  "Approach ramps on both sides",
                  "No waterlogging risk in monsoon",
                  "Steel structure visible and accessible",
                  "Can be relocated if required",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={13} className="text-green-500 mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Size Table ────────────────────────────────────────────────────────────

function SizeTable() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Standard Configurations</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Steel Platform Sizes &amp; Capacities
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            8 standard sizes from 40T to 150T, all available in pit type and pitless.
            Custom dimensions available on request.
          </p>
        </div>

        <div
          className="border border-gray-200 rounded-sm overflow-hidden max-w-2xl"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
        >
          <div className="grid grid-cols-3 bg-[#374151]">
            {["#", "Platform Size", "Max Capacity"].map((h) => (
              <div key={h} className="px-5 py-3.5">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{h}</span>
              </div>
            ))}
          </div>
          {SIZES.map(({ size, cap, note }, i) => (
            <div
              key={size}
              className={`grid grid-cols-3 border-b border-gray-100 last:border-b-0 hover:bg-white transition-colors ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
              }`}
            >
              <div className="px-5 py-3.5 flex items-center">
                <span className="text-gray-400 font-bold text-xs tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="px-5 py-3.5 flex items-center">
                <span className="text-[#111827] font-semibold text-sm">{size}</span>
              </div>
              <div className="px-5 py-3.5 flex items-center gap-2">
                <span className="text-[#DC2626] font-bold text-sm">{cap}</span>
                {note && (
                  <span className="text-[0.6rem] text-gray-400 font-medium hidden sm:inline">{note}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-5 max-w-2xl">
          {[
            "All sizes in pit type & pitless",
            "Anti-skid diamond plate surface",
            "Custom sizes on request",
            "Fabricated and delivered ready",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-gray-500">
              <CheckCircle2 size={12} className="text-green-500" /> {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Honest Comparison Callout ─────────────────────────────────────────────

function SteelInstallationPhotos() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="/images/products/weighbridges/ms-steel-weighbridge.png"
              alt="Rite-Way Steel Platform Weighbridge — pit type installation"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            <p className="text-xs text-gray-400 mt-2 text-center">Steel Pit Type Installation</p>
          </div>
          <div>
            <img
              src="/images/products/weighbridges/pitless-weighbridge.jpeg"
              alt="Rite-Way Steel Platform Weighbridge — pitless surface type"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "4/3" }}
            />
            <p className="text-xs text-gray-400 mt-2 text-center">Steel Pitless (Surface Type)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConcreteNudge() {
  return (
    <section className="bg-white py-14 md:py-16 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <div
            className="border border-amber-200 bg-amber-50 rounded-sm p-7 flex flex-col sm:flex-row gap-5"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-sm bg-amber-100 border border-amber-200 flex items-center justify-center">
                <AlertCircle size={18} className="text-amber-600" />
              </div>
            </div>
            <div>
              <h3 className="text-[#111827] font-bold text-base mb-2">
                Considering Steel? Read This First.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Our concrete platform weighbridge costs{" "}
                <strong className="text-[#111827]">40% less in materials</strong>, lasts{" "}
                <strong className="text-[#111827]">100 years</strong> (vs 10–15 for steel),
                and requires{" "}
                <strong className="text-[#111827]">zero maintenance</strong> — no rust treatment,
                no bolt-tightening, no anti-skid strip re-welding. Cast on-site, so no
                heavy transport cost either. 95% of European weighbridges use concrete for
                exactly these reasons.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/why-concrete"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors group"
                >
                  See the full Concrete vs Steel comparison
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-gray-300 hidden sm:inline">·</span>
                <Link
                  href="/products/weighbridges/concrete-platform"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors group"
                >
                  View Concrete Platform page
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. Compatible Terminals ──────────────────────────────────────────────────

function CompatibleTerminals() {
  const terminals = [
    {
      icon: BarChart3,
      title: "AND 4500 Dual Terminal",
      href: "/products/weighbridges/and4500-dual",
      desc: "Control two weighbridges simultaneously from one operator room. 32-bit ARM processor, 1 lakh record memory, built-in Mandi app, USB and SMS output.",
      features: ["Controls 2 weighbridges", "100,000 record memory", "Mandi application built-in", "SMS + USB export"],
    },
    {
      icon: Mail,
      title: "AND 4500 Email Terminal",
      href: "/products/weighbridges/and4500-email",
      desc: "Automatically emails Excel weighment reports to up to 5 recipients via built-in GSM modem. No internet or LAN connection required at the weighbridge site.",
      features: ["Auto Excel email reports", "Up to 5 email IDs", "GSM modem integrated", "No internet at site needed"],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Smart Add-Ons</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">
            Compatible Terminals &amp; Systems
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            All Rite-Way weighbridges are compatible with our intelligent terminal
            range for automated reporting and dual-platform control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {terminals.map(({ icon: Icon, title, href, desc, features }) => (
            <div
              key={title}
              className="bg-white border border-gray-100 rounded-sm p-7 hover:shadow-md transition-shadow duration-200 flex flex-col group"
              style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] flex items-center justify-center mb-5 group-hover:bg-[#DC2626] transition-colors duration-200">
                <Icon size={16} className="text-white" />
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
              <ul className="space-y-1.5 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle2 size={12} className="text-green-500 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E3A5F] hover:text-[#DC2626] transition-colors group/link"
              >
                View Details <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
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
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p
            className="text-white/50 font-semibold mb-3"
            style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}
          >
            Get Expert Advice
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Ready to Get a Quote for Your Steel Weighbridge?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            Our engineers will assess your site, recommend the right size and installation
            type, and handle the complete project from fabrication through to Legal Metrology
            verification.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={WA_HREF}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors"
            >
              <WAIcon /> WhatsApp Our Team
            </a>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-red-700 transition-colors"
            >
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link
              href="/why-concrete"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors"
            >
              <Clock size={14} />
              Compare: Concrete vs Steel
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SteelPlatformPage() {
  return (
    <>
      <Hero />
      <HighlightsRow />
      <TechnicalSpecs />
      <InstallationTypes />
      <SizeTable />
      <SteelInstallationPhotos />
      <ConcreteNudge />
      <CompatibleTerminals />
      <CTABanner />
    </>
  );
}