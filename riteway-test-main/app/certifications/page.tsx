import Link from "next/link";
import {
  ArrowRight,
  Award,
  ShieldCheck,
  Scale,
  ClipboardCheck,
  CheckCircle2,
  Gavel,
  BadgeCheck,
  Wrench,
  FlaskConical,
  Cpu,
  Package,
  Shield,
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


const WA_HREF = "https://wa.me/919877541199?text=" + encodeURIComponent("Hello Rite-Way, I need information about your certifications and compliance documents. Please advise.");

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
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.4 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, white 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#111827] font-medium">Certifications</span>
        </nav>
        <div className="max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015 Certified
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Legal Metrology Approved</span>
          </div>
          <h1 className="text-[#111827] font-bold leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}>
            Certifications &amp; Compliance
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Every Rite-Way product meets the highest standards of quality, accuracy, and legal compliance. Our certifications are not just badges — they are built into every step of our manufacturing and installation process.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Primary Certification ─────────────────────────────────────────────────

function PrimaryCertification() {
  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-10">
          <SectionLabel>Primary Certification</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight">Our Quality Standard</h2>
        </div>

        {/* Featured ISO card */}
        <div className="border border-green-100 rounded-sm overflow-hidden max-w-3xl" style={{ boxShadow: "0 4px 24px rgba(22,101,52,0.08)" }}>
          <div className="h-2 bg-green-500" />
          <div className="p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              {/* Icon */}
              <div className="w-16 h-16 rounded-sm bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                <Award size={28} className="text-green-600" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-[#111827] font-bold text-2xl tracking-tight">ISO 9001:2015</h3>
                  <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-widest text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />Certified
                  </span>
                </div>
                <p className="text-[#DC2626] font-semibold text-sm mb-4">Issued to Minebea Technologies</p>
                <p className="text-gray-500 text-base leading-relaxed mb-5">
                  The international standard for quality management systems. ISO 9001:2015 covers our entire operation — from product design and engineering, through manufacturing and testing, to dispatch, on-site installation, and after-sales service. Every process is documented, reviewed, and continuously improved.
                </p>

                {/* What it covers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Product design & engineering",
                    "Manufacturing process control",
                    "Pre-dispatch testing",
                    "On-site installation standards",
                    "After-sales service quality",
                    "Continuous improvement process",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle2 size={13} className="text-green-500 flex-shrink-0" />
                      {item}
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

// ─── 3. Compliance Cards ──────────────────────────────────────────────────────

function ISOCertPhoto() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Photo placeholder: ISO 9001:2015 Certificate — Minebea Technologies */}
        <ImgPlaceholder label="ISO 9001:2015 Certificate — Minebea Technologies (Rite-Way)" icon={Shield} aspect="4/3" className="rounded-sm max-w-md mx-auto" />
        <p className="text-xs text-gray-400 mt-2 text-center">ISO 9001:2015 Quality Management Certificate — Minebea Technologies</p>
      </div>
    </section>
  );
}

function ComplianceSection() {
  const cards = [
    {
      icon: Gavel,
      accent: "#1E3A5F",
      bg: "bg-blue-50",
      border: "border-blue-100",
      title: "Legal Metrology Act",
      badge: "Government of India",
      badgeClass: "text-[#1E3A5F] bg-blue-50 border-blue-100",
      desc: "All Rite-Way weighbridges comply with the Legal Metrology Act, Government of India. Weighbridges are verified and stamped by licensed Weights & Measures officers — making every weighment legally valid for trade, taxation, and commerce.",
      points: ["Verified by licensed W&M officers", "Stamp obtained at your site", "Valid for trade and taxation"],
    },
    {
      icon: BadgeCheck,
      accent: "#166534",
      bg: "bg-green-50",
      border: "border-green-100",
      title: "Bureau of Indian Standards",
      badge: "BIS Specifications",
      badgeClass: "text-green-700 bg-green-50 border-green-100",
      desc: "All Rite-Way products are manufactured to Bureau of Indian Standards (BIS) specifications for weighing instruments. This covers accuracy classes, display resolution, load cell ratings, and environmental protection standards.",
      points: ["BIS-compliant accuracy classes", "Standardised load cell specs", "Environmental protection ratings"],
    },
    {
      icon: ClipboardCheck,
      accent: "#DC2626",
      bg: "bg-red-50",
      border: "border-red-100",
      title: "Site Acceptance Testing",
      badge: "On-site Verified",
      badgeClass: "text-red-700 bg-red-50 border-red-100",
      desc: "Every Rite-Way installation is subject to a final Site Acceptance Test (SAT) performed at your premises. Test weights are used to verify accuracy across the full capacity range. You sign off on performance — not us.",
      points: ["Full-capacity range verification", "Performed at your premises", "Customer sign-off required"],
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Legal Compliance</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">Compliance at Every Level</h2>
          <p className="text-gray-500 text-base leading-relaxed">Quality certification, legal compliance, and on-site verification — all three, every time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, accent, bg, border, title, badge, badgeClass, desc, points }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-all" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="h-1" style={{ backgroundColor: accent }} />
              <div className="p-7 flex flex-col flex-1">
                <div className={`w-10 h-10 rounded-sm ${bg} border ${border} flex items-center justify-center mb-4`}>
                  <Icon size={18} style={{ color: accent }} />
                </div>
                <div className="flex items-start gap-2 mb-1 flex-wrap">
                  <h3 className="text-[#111827] font-bold text-base">{title}</h3>
                </div>
                <span className={`inline-block text-[0.55rem] font-bold uppercase tracking-widest border px-2 py-0.5 rounded-full mb-3 ${badgeClass}`}>{badge}</span>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                <ul className="space-y-1.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 size={11} className="text-green-500 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Quality Process Timeline ─────────────────────────────────────────────

function QualityTimeline() {
  const steps = [
    { icon: Cpu,           step: "01", title: "Design & Engineering",          desc: "Products designed to meet BIS accuracy standards and Legal Metrology requirements from the ground up. Not retrofitted for compliance — built for it." },
    { icon: FlaskConical,  step: "02", title: "Manufacturing with Rigorous Testing", desc: "Every sub-assembly tested during production. Load cells calibrated. Electronics verified. Structural components inspected. Quality built in at every stage." },
    { icon: Package,       step: "03", title: "Pre-Dispatch System Test",       desc: "Complete assembled system tested at our Mohali facility using certified test weights before dispatch. No product leaves without passing this test." },
    { icon: ClipboardCheck, step: "04", title: "On-site Acceptance Test",        desc: "Final verification at your premises. Licensed Weights & Measures officer applies Legal Metrology stamp. Customer signs off on performance." },
  ];

  return (
    <section className="bg-white py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-14">
          <SectionLabel>Quality Assurance Process</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">4 Stages, Zero Compromise</h2>
          <p className="text-gray-500 text-base leading-relaxed">From the drawing board to your site — quality is verified at every stage.</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1px)] right-[calc(12.5%+1px)] h-px bg-gray-200 z-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {steps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="border border-gray-100 rounded-sm p-6 bg-white hover:shadow-md transition-all group" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-100 group-hover:border-[#DC2626] flex items-center justify-center flex-shrink-0 transition-colors" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                    <Icon size={17} className="text-[#1E3A5F] group-hover:text-[#DC2626] transition-colors" />
                  </div>
                  <span className="text-[#DC2626] font-bold text-xs tracking-widest">Stage {step}</span>
                </div>
                <h3 className="text-[#111827] font-bold text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 5. What This Means For You ───────────────────────────────────────────────

function MeansForYou() {
  const points = [
    {
      icon: Scale,
      title: "Legally Valid for Trade",
      desc: "Your weighbridge is Legal Metrology stamped and recognised by government, customs, and trading partners. Every weighment you make has legal standing under the Legal Metrology Act, Government of India.",
      highlight: "Mandatory for mandi, factory gate, and toll plaza use.",
    },
    {
      icon: Gavel,
      title: "Measurements Are Court Admissible",
      desc: "Legal Metrology stamped weighment records are admissible as evidence in commercial disputes, regulatory audits, and court proceedings. Your records stand up to legal scrutiny.",
      highlight: "Protects you in disputes with suppliers, buyers, or regulators.",
    },
    {
      icon: ShieldCheck,
      title: "Equipment Covered Under Warranty",
      desc: "ISO 9001:2015 certification means our quality management system tracks every product through manufacturing and installation. If something goes wrong, our documented process ensures accountability and warranty coverage.",
      highlight: "Full warranty with documented manufacturing trail.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Why It Matters</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-3">What This Means for You</h2>
          <p className="text-gray-500 text-base leading-relaxed">Certification is not about us — it's about what it protects for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {points.map(({ icon: Icon, title, desc, highlight }) => (
            <div key={title} className="bg-white border border-gray-100 rounded-sm p-7 hover:shadow-md transition-all group" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
              <div className="w-11 h-11 rounded-sm bg-[#1E3A5F] group-hover:bg-[#DC2626] flex items-center justify-center mb-5 transition-colors">
                <Icon size={19} className="text-white" />
              </div>
              <h3 className="text-[#111827] font-bold text-base mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
              <div className="border-l-2 border-[#DC2626] pl-3">
                <p className="text-[#DC2626] text-xs font-semibold leading-relaxed">{highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-10 bg-[#1E3A5F]/5 border border-[#1E3A5F]/15 rounded-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-[#111827] font-bold text-base mb-1">Need Certification Documents for Procurement?</p>
              <p className="text-gray-500 text-sm">Government and corporate procurement often requires ISO certificates and Legal Metrology approval letters. We provide complete documentation with every installation.</p>
            </div>
            <a href={WA_HREF} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors flex-shrink-0">
              <WAIcon /> Request Documents
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 6. CTA Banner ───────────────────────────────────────────────────────────

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Certified Quality</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Buy with Confidence — Every Product Certified
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg">
            ISO 9001:2015 manufacturing quality. Legal Metrology compliance. Site acceptance testing. Three layers of assurance on every Rite-Way product.
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
            <Link href="/products"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CertificationsPage() {
  return (
    <>
      <Hero />
      <PrimaryCertification />
      <ISOCertPhoto />
      <ComplianceSection />
      <QualityTimeline />
      <MeansForYou />
      <CTABanner />
    </>
  );
}