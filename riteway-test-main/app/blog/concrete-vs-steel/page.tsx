import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor" />
    </svg>
  );
}

const COMPARISON_ROWS = [
  { attribute: "Platform Material",   concrete: "Reinforced Cement Concrete (RCC)",          steel: "Fabricated Mild Steel",            concreteWins: true  },
  { attribute: "Lifespan",            concrete: "100 years",                                  steel: "10–15 years",                      concreteWins: true  },
  { attribute: "Maintenance",         concrete: "Zero — no rust, paint, or bolt tightening",  steel: "Annual — painting, tightening",    concreteWins: true  },
  { attribute: "Material Cost",       concrete: "40% lower than steel",                       steel: "Higher fabrication cost",          concreteWins: true  },
  { attribute: "Transport Cost",      concrete: "None — cast on-site",                        steel: "Heavy fabricated section transport",concreteWins: true  },
  { attribute: "Load Distribution",   concrete: "Monolithic — equal to all 6 cells",          steel: "Flex causes unequal cell loading",  concreteWins: true  },
  { attribute: "Accuracy",            concrete: "Consistent — rigid structure",               steel: "Degrades as platform bends",       concreteWins: true  },
  { attribute: "Lightning Protection",concrete: "Full immunity — non-conductive",             steel: "Grounding required, risk remains", concreteWins: true  },
  { attribute: "Vehicle Grip",        concrete: "Natural rough surface — vehicles arrested",  steel: "Anti-skid strips wear and break",  concreteWins: true  },
  { attribute: "Capacity Upgrade",    concrete: "Yes — load cells only, no structural work",  steel: "Requires full re-fabrication",     concreteWins: true  },
  { attribute: "Europe Market Share", concrete: "95% of electronic weighbridges",             steel: "5%",                               concreteWins: true  },
  { attribute: "Installation",        concrete: "Cast on-site by our team",                   steel: "Fabricated offsite, site-erected", concreteWins: false },
];

const SECTIONS = [
  {
    number: "01",
    title: "Structural Design: Why Rigid Wins",
    content: [
      "A concrete platform is a monolithic structure — it is cast as a single, rigid unit. When a 60-tonne truck drives onto it, the weight distributes evenly across all six load cells simultaneously. The rigid mass prevents any bending, twisting, or deflection. This is why concrete weighbridges deliver consistent, accurate readings from day one to year fifty.",
      "A steel platform, by contrast, is a fabricated assembly. No matter how carefully it is welded, it is fundamentally a lighter structure subject to flexion under heavy loads. When the steel bends — even by fractions of a millimetre — it creates lateral forces on the load cells. These lateral forces are not weight. They register as measurement error. Over time, as the steel fatigues and the welds loosen, the inaccuracy compounds.",
      "In high-throughput applications like grain mandis, where a weighbridge might see 150 truck movements per day, this structural difference translates directly into money — either lost through inaccurate short-weighing, or in fines from a Legal Metrology inspector who finds the weighbridge out of calibration.",
    ]
  },
  {
    number: "02",
    title: "Lifespan: 100 Years vs 15 Years",
    content: [
      "Properly constructed reinforced cement concrete does not degrade under normal operating conditions. The RCC structure of a weighbridge platform is protected from weather by its very nature — it does not oxidise, corrode, or lose structural strength over time. A concrete weighbridge installed in 2025 will still be performing identically in 2125.",
      "Steel has a fundamentally different relationship with time. Exposed to the Indian climate — the monsoon humidity, the temperature swings from Rajasthan summers to Himachal winters — mild steel corrodes. The anti-corrosion coatings applied during fabrication degrade within a few years. Without regular repainting and rust treatment, structural steel loses section thickness. A steel weighbridge that has not been properly maintained for 10 years may already have reduced load-bearing capacity.",
      "The practical implication: a concrete weighbridge is a capital expenditure you make once. A steel weighbridge is a depreciating asset that will need partial or full replacement within your working lifetime.",
    ]
  },
  {
    number: "03",
    title: "Vehicle Grip: A Safety and Accuracy Issue",
    content: [
      "A truck driver weighing a loaded vehicle wants to stop, stabilise, and stay still during the reading. On a concrete platform, the naturally rough RCC surface provides friction that arrests vehicle movement naturally. No additional surface treatment is required, and this property does not diminish over time.",
      "Steel platforms use anti-skid diamond plate or welded grip strips to provide traction. These surfaces work when new. But under repeated heavy truck traffic — especially with steel-tyred mining vehicles — the grip strips compress, flatten, and eventually break free from the welds. A steel platform that has been in service for five years often has several broken or missing anti-skid strips. This creates an uneven surface that causes vehicle roll during weighment, introducing error into every reading.",
      "Re-welding anti-skid strips is a recurring maintenance cost on steel platforms. It requires the weighbridge to be taken out of service, which directly impacts your operation.",
    ]
  },
  {
    number: "04",
    title: "Lightning and Electrostatic Protection",
    content: [
      "This is the most underappreciated advantage of concrete, and the one that causes the most expensive failures on steel platforms. Load cell transducers are sensitive electronic instruments. They operate on millivolt signals. A single lightning strike near a steel weighbridge — or even a large electrostatic discharge from a vehicle — can destroy the load cells and the indicator unit simultaneously.",
      "Concrete is a non-conductor. The RCC platform does not carry or conduct electrical charges. Even a direct lightning strike to a concrete weighbridge will not travel through the platform to the load cells below. The instrumentation is protected by the very material of the platform.",
      "Steel platforms require grounding systems and surge protection to manage this risk. Grounding works to a degree, but it is not absolute protection. Every Indian manufacturer of weighbridge electronics has seen steel platform instrumentation destroyed by lightning. It is a known, recurring failure mode. On concrete platforms, we have not observed this failure.",
    ]
  },
  {
    number: "05",
    title: "Cost Analysis: Concrete is Cheaper on Every Dimension",
    content: [
      "The material cost of concrete — cement, aggregate, steel reinforcement — is 40% lower than the cost of fabricating an equivalent steel platform. This is a direct, measurable cost difference at the point of purchase.",
      "Steel platforms are fabricated in a workshop and transported to the installation site. A 14-metre steel weighbridge platform weighs 8–12 tonnes. Transporting this by heavy vehicle from a fabrication yard to a remote mining site or rural mandi adds significant logistics cost. Concrete is mixed and cast on-site. There is no transport cost for the platform material.",
      "Over the operating lifetime, the cost gap widens dramatically. Concrete requires zero maintenance expenditure for the platform structure. Steel requires annual painting, rust treatment, bolt tightening, and anti-skid repair. Assume a conservative ₹50,000 per year in maintenance costs for a steel platform — over 20 years, that is ₹10 lakh in maintenance alone, not counting the cost of downtime while maintenance is performed.",
    ]
  },
  {
    number: "06",
    title: "Maintenance: Zero vs Annual",
    content: [
      "Concrete needs nothing. Once the RCC platform is cured and the load cells and instrumentation are installed, the structural element of the weighbridge is complete. There are no moving parts, no metal surfaces to protect, no fasteners to retighten. The only maintenance a concrete weighbridge requires is on its instrumentation — the load cells, indicator, and wiring — which is the same maintenance a steel weighbridge also requires.",
      "Steel platforms require: annual repainting or anti-corrosion treatment; periodic re-tightening of bolts and structural fasteners (which loosen under vibration); repair or replacement of anti-skid surface strips; inspection of welds for fatigue cracking; and regreasing of any pivot or hinge points in the load cell mounting.",
      "Every maintenance activity on a steel platform requires either an extended shutdown — or operating at reduced accuracy while work is performed. For a commercial weighbridge that is earning revenue with every truck movement, downtime is a direct financial loss.",
    ]
  },
  {
    number: "07",
    title: "Capacity Upgrade: Only Possible on Concrete",
    content: [
      "Business grows. A grain mandi that starts with 60-tonne trucks may find itself handling 100-tonne tankers within five years. A concrete weighbridge can be upgraded to a higher capacity simply by replacing the load cells with higher-capacity transducers. The structural platform — the RCC — does not change. No excavation, no new civil work, no platform replacement.",
      "Upgrading a steel weighbridge to a higher capacity requires structural re-fabrication. The existing platform section must be removed, and a new, heavier-gauge steel platform must be fabricated and installed. In practice, most operators simply purchase a new weighbridge.",
      "This upgrade flexibility makes a concrete weighbridge a future-proof investment. You are not locked into the capacity you specify today.",
    ]
  },
  {
    number: "08",
    title: "The European Benchmark: 95%",
    content: [
      "Europe's weighbridge industry is mature, cost-conscious, and technically sophisticated. Over decades of operational experience, European manufacturers and operators have arrived at an overwhelming consensus: concrete platform is superior. Today, 95% of electronic weighbridges installed in Europe are built on concrete platforms.",
      "This is not a marketing statistic. It is the outcome of thousands of cost-benefit analyses conducted by professional engineers who have operated both types. The European preference for concrete is the accumulated knowledge of an industry that has already learned — through failed steel platforms — what Indian industry is now learning.",
      "India is catching up. The awareness of concrete platform advantages is growing. Progressive operators — particularly in industries with high throughput and no tolerance for downtime, like grain procurement, cement distribution, and coal mining — are specifying concrete platforms. Rite-Way has championed this shift in Punjab and the surrounding region for years.",
    ]
  },
];

export default function ConcreteVsSteelArticle() {
  const WA = "https://wa.me/919877541199?text=" + encodeURIComponent("Hello Rite-Way, I read your article on concrete vs steel weighbridges and want to know more about the concrete platform option for my site.");

  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <div className="relative border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.35 }} />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 pt-16 pb-14 md:pt-24 md:pb-20">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7 flex-wrap">
            <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-[#111827] transition-colors">Blog</Link><span>/</span>
            <span className="text-[#111827] font-medium">Concrete vs Steel Weighbridge</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="text-[0.58rem] font-bold uppercase tracking-widest text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">Weighbridges</span>
            <span className="text-[0.58rem] font-bold uppercase tracking-widest text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">8 min read</span>
            <span className="text-[0.58rem] font-bold uppercase tracking-widest text-gray-500 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">March 15, 2026</span>
          </div>
          <h1 className="text-[#111827] font-bold leading-tight tracking-tight mb-5" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}>
            Concrete vs Steel Weighbridge: Complete Comparison Guide for Indian Industry 2026
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            After 20 years of installing and servicing both types across Punjab, Haryana, and Himachal Pradesh,
            this is our definitive technical and financial comparison.
          </p>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 md:py-20">

        {/* Introduction */}
        <div className="mb-14">
          <p className="text-gray-700 text-lg leading-[1.8] mb-5">
            Steel was once the default choice for weighbridge platforms across India. It was familiar, fast to fabricate, and easy to source. The industry built its procurement habits around it. But steel has a set of structural, mechanical, and financial weaknesses that become impossible to ignore after years of operation. And the rest of the world — particularly Europe — figured this out decades ago.
          </p>
          <p className="text-gray-700 text-lg leading-[1.8] mb-5">
            Today, 95% of electronic weighbridges installed in Europe are built on concrete platforms. That statistic is not the result of fashion or preference. It is the outcome of engineers and operators running cost-benefit analyses, comparing maintenance records, and choosing the material that wins on every dimension that matters.
          </p>
          <p className="text-gray-700 text-lg leading-[1.8]">
            This article covers all eight areas where concrete and steel diverge — structurally, operationally, and financially. By the end, you will have everything you need to make an informed decision for your site.
          </p>
        </div>

        {/* Europe pull quote */}
        <div className="bg-[#1E3A5F] rounded-sm p-8 mb-14 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-8 opacity-10">
            <span className="font-bold text-white" style={{ fontSize: "8rem", lineHeight: 1 }}>95%</span>
          </div>
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">European Benchmark</p>
          <p className="text-white font-bold text-2xl md:text-3xl leading-tight relative z-10">
            95% of electronic weighbridges<br />installed in Europe are built on<br />concrete platforms.
          </p>
          <p className="text-white/50 text-sm mt-4 relative z-10">
            This is the accumulated knowledge of an industry that already learned — through failed steel platforms — what Indian industry is now discovering.
          </p>
        </div>

        {/* 8 sections */}
        {SECTIONS.map(({ number, title, content }) => (
          <div key={number} className="mb-14">
            <div className="flex items-start gap-4 mb-5">
              <span className="text-gray-200 font-bold flex-shrink-0" style={{ fontSize: "2.5rem", lineHeight: 1, marginTop: "-0.2rem" }}>{number}</span>
              <h2 className="text-[#111827] font-bold text-xl md:text-2xl leading-tight">{title}</h2>
            </div>
            <div className="pl-0 md:pl-16 space-y-4">
              {content.map((para, i) => (
                <p key={i} className="text-gray-600 text-base leading-[1.85]">{para}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Mid-article CTA */}
        <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-sm p-6 mb-14 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-[#111827] font-bold text-sm mb-1">Interested in a concrete platform for your site?</p>
            <p className="text-gray-500 text-sm">WhatsApp us with your site location and required capacity — we will advise on size, cost, and installation timeline.</p>
          </div>
          <a href="https://wa.me/919877541199?text=Hello%20Rite-Way%2C%20I%20am%20interested%20in%20a%20concrete%20platform%20weighbridge.%20Please%20advise."
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors flex-shrink-0 whitespace-nowrap">
            <WAIcon /> WhatsApp Us
          </a>
        </div>

        {/* Comparison table */}
        <div className="mb-14">
          <h2 className="text-[#111827] font-bold text-xl md:text-2xl mb-6">Summary Comparison Table</h2>
          <div className="overflow-x-auto rounded-sm border border-gray-200" style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}>
            <table className="w-full min-w-[520px] border-collapse">
              <thead>
                <tr className="bg-[#1E3A5F]">
                  <th className="text-left px-5 py-3.5 text-white font-bold text-xs uppercase tracking-[0.12em] w-[28%]">Attribute</th>
                  <th className="text-left px-5 py-3.5 text-white font-bold text-xs uppercase tracking-[0.12em]">
                    <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-green-400" /> Concrete</span>
                  </th>
                  <th className="text-left px-5 py-3.5 text-white font-bold text-xs uppercase tracking-[0.12em]">
                    <span className="flex items-center gap-1.5"><XCircle size={12} className="text-red-400" /> Steel</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map(({ attribute, concrete, steel, concreteWins }, i) => (
                  <tr key={attribute} className={`border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 ${i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}`}>
                    <td className="px-5 py-3 align-middle"><span className="text-[#111827] font-semibold text-sm">{attribute}</span></td>
                    <td className="px-5 py-3 align-middle">
                      <span className="flex items-start gap-1.5 text-sm text-green-700">
                        <CheckCircle2 size={13} className="text-green-500 flex-shrink-0 mt-0.5" />{concrete}
                      </span>
                    </td>
                    <td className="px-5 py-3 align-middle">
                      <span className={`flex items-start gap-1.5 text-sm ${concreteWins ? "text-gray-500" : "text-gray-600"}`}>
                        {concreteWins ? <XCircle size={13} className="text-red-400 flex-shrink-0 mt-0.5" /> : <CheckCircle2 size={13} className="text-green-500 flex-shrink-0 mt-0.5" />}
                        {steel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mb-14">
          <h2 className="text-[#111827] font-bold text-xl md:text-2xl mb-5">Conclusion</h2>
          <p className="text-gray-600 text-base leading-[1.85] mb-4">
            The comparison is not close. Concrete platform weighbridges outperform steel on structural integrity, measurement accuracy, vehicle safety, lightning protection, lifespan, material cost, transport cost, maintenance cost, and upgrade flexibility. Steel has one operational advantage — it can be fabricated offsite and erected quickly — which matters in situations where the ground conditions make on-site casting impractical.
          </p>
          <p className="text-gray-600 text-base leading-[1.85] mb-4">
            For the vast majority of commercial applications in India — grain mandis, factories, logistics parks, mining sites, construction yards — concrete platform is the correct choice. The industry has known this in Europe for decades. The knowledge is spreading in India. Operators who specify concrete platform weighbridges today are buying an asset that will still be performing accurately in 2075.
          </p>
          <p className="text-gray-600 text-base leading-[1.85]">
            Rite-Way by Minebea Technologies has been championing concrete platform weighbridges in North India since 2004. If you are evaluating a weighbridge purchase — new installation or replacement — our team can visit your site, assess the ground conditions, and recommend the correct size and configuration for your operation.
          </p>
        </div>

        {/* Author note */}
        <div className="border-t border-gray-100 pt-8 mb-14">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">RW</span>
            </div>
            <div>
              <p className="text-[#111827] font-semibold text-sm">Rite-Way Technical Team</p>
              <p className="text-gray-400 text-xs">Minebea Technologies, Mohali — 20+ years in weighbridge manufacturing and installation</p>
            </div>
          </div>
        </div>

        {/* Related articles */}
        <div className="mb-14">
          <p className="text-[#111827] font-bold text-sm uppercase tracking-widest mb-5" style={{ fontSize: "0.65rem", letterSpacing: "0.14em" }}>Related Reading</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "How to Choose the Right Weighbridge Capacity", href: "/blog/coming-soon", tag: "Buying Guide" },
              { title: "Concrete Platform — Full Specification", href: "/products/weighbridges/concrete-platform", tag: "Product Page" },
            ].map(({ title, href, tag }) => (
              <Link key={href} href={href}
                className="border border-gray-100 rounded-sm p-5 hover:border-[#DC2626]/20 hover:shadow-sm transition-all group"
                style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                <span className="text-[0.55rem] font-bold uppercase tracking-widest text-[#DC2626] mb-2 block">{tag}</span>
                <p className="text-[#111827] font-semibold text-sm leading-snug group-hover:text-[#DC2626] transition-colors">
                  {title} <ArrowRight size={11} className="inline ml-1" />
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[#1E3A5F] rounded-sm p-8">
          <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">Ready to Specify Concrete?</p>
          <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-3">
            Get a Quote for Your Concrete Platform Weighbridge
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Tell us your required capacity and site location — we will advise on size, installation type, and provide a complete quote.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp for Quote
            </a>
            <Link href="/get-quote"
              className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-red-700 transition-colors">
              Get Free Quote <ArrowRight size={14} />
            </Link>
            <Link href="/products/weighbridges/concrete-platform"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-white/10 transition-colors">
              View Product Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}