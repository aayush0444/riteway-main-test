import Link from "next/link";
import { ArrowRight, Clock, Tag, BookOpen, Rss } from "lucide-react";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-[#DC2626] font-semibold mb-3"
      style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
      {children}
    </span>
  );
}

function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor" />
    </svg>
  );
}

const ARTICLES = [
  {
    slug: "concrete-vs-steel",
    category: "Weighbridges",
    categoryColor: "#1E3A5F",
    title: "Concrete vs Steel Weighbridge: Complete Comparison for Indian Industry",
    excerpt: "Steel was the default choice for decades. But it bends, rattles, rusts — and fails within 15 years. We break down every technical and financial reason why 95% of European weighbridges are now built on concrete, and why Indian industry is catching up.",
    readTime: "8 min read",
    date: "March 15, 2026",
    featured: true,
    live: true,
  },
  {
    slug: "coming-soon",
    category: "Buying Guide",
    categoryColor: "#DC2626",
    title: "How to Choose the Right Weighbridge Capacity for Your Factory",
    excerpt: "40T, 60T, 80T, 100T — picking the wrong capacity is a costly mistake. This guide walks through how to calculate your peak vehicle weight, apply the safety margin, and choose the right size the first time, without overpaying.",
    readTime: "5 min read",
    date: "March 2026",
    featured: false,
    live: false,
  },
  {
    slug: "coming-soon",
    category: "Compliance",
    categoryColor: "#166534",
    title: "What is Legal Metrology and Why It Matters for Your Weighbridge",
    excerpt: "A weighbridge without a Legal Metrology stamp is legally worthless for commercial transactions. We explain what Legal Metrology is, how the verification process works, what happens during an inspection, and what penalties apply if your weighbridge is found non-compliant.",
    readTime: "6 min read",
    date: "March 2026",
    featured: false,
    live: false,
  },
];

function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)", backgroundSize: "64px 64px", opacity: 0.35 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, white 100%)" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-24 md:pb-24">
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-7">
          <Link href="/" className="hover:text-[#111827] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#111827] font-medium">Blog</span>
        </nav>
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-sm bg-[#DC2626] flex items-center justify-center">
              <Rss size={14} className="text-white" />
            </div>
            <span className="text-[0.6rem] font-bold uppercase tracking-widest text-[#DC2626]">Industry Insights</span>
          </div>
          <h1 className="text-[#111827] font-bold leading-tight tracking-tight mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Weighing Industry Knowledge Base
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Technical guides, buying advice, compliance information, and industry insights
            for weighbridge and weighing scale owners across India.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArticleCards() {
  return (
    <section className="bg-gray-50 py-20 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-12">
          <SectionLabel>Latest Articles</SectionLabel>
          <h2 className="text-[#111827] font-bold text-3xl md:text-4xl leading-tight tracking-tight">
            Guides &amp; Technical Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ARTICLES.map(({ slug, category, categoryColor, title, excerpt, readTime, date, featured, live }) => (
            <article
              key={slug + title}
              className={`bg-white border rounded-sm overflow-hidden flex flex-col transition-all duration-200 hover:shadow-lg ${
                featured ? "border-[#1E3A5F]/20 lg:col-span-1" : "border-gray-100"
              }`}
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>

              {/* Top accent bar */}
              <div className="h-1" style={{ backgroundColor: categoryColor }} />

              {/* Visual header area */}
              <div
                className="h-36 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${categoryColor}15 0%, ${categoryColor}05 100%)` }}>
                <BookOpen size={36} style={{ color: categoryColor, opacity: 0.15 }} />
                {featured && (
                  <span className="absolute top-3 left-4 text-[0.55rem] font-bold uppercase tracking-widest bg-[#1E3A5F] text-white px-2 py-1 rounded-full">
                    Live Article
                  </span>
                )}
                {!live && (
                  <span className="absolute top-3 left-4 text-[0.55rem] font-bold uppercase tracking-widest bg-gray-200 text-gray-500 px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="inline-flex items-center gap-1 text-[0.58rem] font-bold uppercase tracking-widest px-2 py-1 rounded-full border"
                    style={{ color: categoryColor, backgroundColor: `${categoryColor}10`, borderColor: `${categoryColor}30` }}>
                    <Tag size={8} /> {category}
                  </span>
                  <span className="flex items-center gap-1 text-[0.62rem] text-gray-400">
                    <Clock size={9} /> {readTime}
                  </span>
                </div>

                <h3 className="text-[#111827] font-bold text-base leading-snug mb-3 flex-1">
                  {title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-gray-400 text-xs">{date}</span>
                  {live ? (
                    <Link
                      href={`/blog/${slug}`}
                      className="inline-flex items-center gap-1.5 text-[#DC2626] text-xs font-bold hover:underline">
                      Read Article <ArrowRight size={11} />
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-xs italic">Coming soon</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComingSoonBanner() {
  return (
    <section className="bg-white py-16 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="border border-dashed border-gray-200 rounded-sm p-10 text-center">
          <div className="w-12 h-12 rounded-sm bg-gray-50 border border-gray-200 flex items-center justify-center mx-auto mb-5">
            <BookOpen size={20} className="text-gray-400" />
          </div>
          <h3 className="text-[#111827] font-bold text-xl mb-2">More Articles Coming Soon</h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto mb-6">
            We are writing detailed guides on weighbridge maintenance, scale calibration, Legal Metrology compliance,
            industry-specific buying advice, and more. Check back regularly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Weighbridge Maintenance", "Load Cell Guide", "AMC vs Break-fix", "Mandi Compliance", "Mining Payload", "Jeweller Scale Buying Guide"].map((t) => (
              <span key={t} className="text-xs text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="bg-[#1E3A5F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="text-white/50 font-semibold mb-3" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Have a question?
          </p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Talk to Our Engineers Directly
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
            Our technical team answers questions about weighbridge selection, installation, compliance,
            and maintenance — on WhatsApp, within hours.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/919877541199?text=Hello%20Rite-Way%2C%20I%20have%20a%20technical%20question%20about%20weighbridges%20or%20scales."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> Ask on WhatsApp
            </a>
            <Link href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-white/10 transition-colors">
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <>
      <Hero />
      <ArticleCards />
      <ComingSoonBanner />
      <CTABanner />
    </>
  );
}