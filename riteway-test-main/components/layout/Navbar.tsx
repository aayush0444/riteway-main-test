"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, ChevronDown, Menu, X, ArrowRight, Wrench, Star } from "lucide-react";

function WAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor" />
    </svg>
  );
}

// ─── Dropdown column data ──────────────────────────────────────────────────────

const COL_WEIGHBRIDGES = [
  { label: "Concrete Platform",   href: "/products/weighbridges/concrete-platform", popular: true  },
  { label: "Steel Platform",      href: "/products/weighbridges/steel-platform",    popular: false },
  { label: "View All Weighbridges", href: "/products/weighbridges",                 popular: false, viewAll: true },
];

const COL_TERMINALS = [
  { label: "AND 4500 Dual",       href: "/products/weighbridges/and4500-dual",      popular: false },
  { label: "AND 4500 Email",      href: "/products/weighbridges/and4500-email",     popular: false },
  { label: "Payload-T GPRS",      href: "/products/weighbridges/payload-gprs",      popular: false },
];

const COL_SCALES = [
  { label: "Table Top Scales",    href: "/products/scales/table-top",               popular: false },
  { label: "Platform & Floor",    href: "/products/scales/platform",                popular: false },
  { label: "Price Computing",     href: "/products/scales/price-computing",         popular: false },
  { label: "Jewel & Precision",   href: "/products/scales/jewel",                   popular: false },
  { label: "View All Scales",     href: "/products/scales",                         popular: false, viewAll: true },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [prodOpen,     setProdOpen]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [mobileProd,   setMobileProd]   = useState(false);
  const [mobileWB,     setMobileWB]     = useState(false);
  const [mobileTerm,   setMobileTerm]   = useState(false);
  const [mobileScales, setMobileScales] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeAll = () => {
    setProdOpen(false); setMobileOpen(false);
    setMobileProd(false); setMobileWB(false);
    setMobileTerm(false); setMobileScales(false);
  };

  return (
    <>
      {/* ═══════════════════ HEADER ═══════════════════ */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-200 ${scrolled ? "shadow-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" onClick={closeAll} className="flex flex-col leading-none flex-shrink-0 group">
              <span className="font-bold tracking-tight text-[#DC2626] group-hover:text-red-700 transition-colors"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.45rem", lineHeight: 1 }}>
                RITE-WAY
              </span>
              <span className="relative mt-0.5">
                <span className="block h-px w-full bg-[#DC2626] opacity-60" />
                <span className="block text-[#1E3A5F] font-semibold mt-0.5"
                  style={{ fontSize: "0.48rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Minebea Technologies™
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">

              {/* ── Products mega-dropdown (3 cols) ── */}
              <div className="relative"
                onMouseEnter={() => setProdOpen(true)}
                onMouseLeave={() => setProdOpen(false)}>

                <button className={`flex items-center gap-1.5 px-3 py-5 transition-colors ${prodOpen ? "text-[#DC2626]" : "text-[#111827] hover:text-[#DC2626]"}`}>
                  Products
                  <ChevronDown size={13} className={`transition-transform duration-150 ${prodOpen ? "rotate-180" : ""}`} />
                </button>

                {prodOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-[640px] pt-0">
                    <div className="bg-white border border-gray-100 rounded-sm shadow-2xl overflow-hidden">
                      <div className="h-[3px] bg-[#1E3A5F]" />

                      {/* 3-column grid */}
                      <div className="grid grid-cols-3 p-6 gap-0">

                        {/* Col 1: Weighbridges */}
                        <div className="pr-5 border-r border-gray-100">
                          <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-gray-400 mb-3 px-2">
                            Weighbridges
                          </p>
                          {COL_WEIGHBRIDGES.map(({ label, href, popular, viewAll }) => (
                            <Link key={href} href={href} onClick={closeAll}
                              className={`flex items-center justify-between px-2 py-2 rounded-sm text-sm transition-colors group/link ${
                                viewAll
                                  ? "font-semibold text-[#1E3A5F] hover:text-[#DC2626] hover:bg-gray-50"
                                  : "text-gray-600 hover:text-[#111827] hover:bg-gray-50"
                              }`}>
                              <span>{label}</span>
                              {popular && (
                                <span className="flex items-center gap-0.5 text-[0.48rem] font-bold uppercase tracking-widest bg-amber-50 text-amber-600 border border-amber-200 px-1.5 py-0.5 rounded-full flex-shrink-0 ml-2">
                                  <Star size={6} /> Popular
                                </span>
                              )}
                              {viewAll && <ArrowRight size={11} className="text-gray-400 group-hover/link:text-[#DC2626] transition-colors" />}
                            </Link>
                          ))}
                        </div>

                        {/* Col 2: Terminals */}
                        <div className="px-5 border-r border-gray-100">
                          <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-gray-400 mb-3 px-2">
                            Terminals &amp; Systems
                          </p>
                          {COL_TERMINALS.map(({ label, href }) => (
                            <Link key={href} href={href} onClick={closeAll}
                              className="block px-2 py-2 rounded-sm text-sm text-gray-600 hover:text-[#111827] hover:bg-gray-50 transition-colors">
                              {label}
                            </Link>
                          ))}
                        </div>

                        {/* Col 3: Scales */}
                        <div className="pl-5">
                          <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-gray-400 mb-3 px-2">
                            Weighing Scales
                          </p>
                          {COL_SCALES.map(({ label, href, viewAll }) => (
                            <Link key={href} href={href} onClick={closeAll}
                              className={`flex items-center justify-between px-2 py-2 rounded-sm text-sm transition-colors group/link ${
                                viewAll
                                  ? "font-semibold text-[#DC2626] hover:bg-red-50"
                                  : "text-gray-600 hover:text-[#111827] hover:bg-gray-50"
                              }`}>
                              <span>{label}</span>
                              {viewAll && <ArrowRight size={11} className="text-[#DC2626]/50 group-hover/link:text-[#DC2626] transition-colors" />}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Bottom strip */}
                      <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />ISO 9001:2015
                          </span>
                          <span>Since 2004</span>
                          <span>Mohali, Punjab</span>
                        </div>
                        <Link href="/get-quote" onClick={closeAll}
                          className="inline-flex items-center gap-1.5 bg-[#DC2626] text-white text-xs font-bold px-3 py-2 rounded-sm hover:bg-red-700 transition-colors">
                          Get Quote <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Repair & Service */}
              <Link href="/repair"
                className="flex items-center gap-1.5 px-3 py-5 text-[#111827] hover:text-[#DC2626] transition-colors">
                <Wrench size={13} /> Repair &amp; Service
              </Link>

              <Link href="/why-concrete" className="px-3 py-5 text-[#111827] hover:text-[#DC2626] transition-colors">Why Concrete</Link>
              <Link href="/industries"   className="px-3 py-5 text-[#111827] hover:text-[#DC2626] transition-colors">Industries</Link>
              <Link href="/about"        className="px-3 py-5 text-[#111827] hover:text-[#DC2626] transition-colors">About</Link>
              <Link href="/contact"      className="px-3 py-5 text-[#111827] hover:text-[#DC2626] transition-colors">Contact</Link>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+919877541199"
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-[#DC2626] transition-colors">
                <Phone size={12} /> 98775&nbsp;41199
              </a>
              <Link href="/get-quote"
                className="bg-[#DC2626] text-white text-xs font-bold px-4 py-2.5 rounded-sm hover:bg-red-700 transition-colors">
                Get Quote
              </Link>
              <a href="https://wa.me/919877541199?text=Hello%2C+I+am+interested+in+Rite-Way+products.+Please+advise."
                target="_blank" rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-2.5 rounded-sm hover:bg-green-500 transition-colors flex items-center justify-center"
                aria-label="WhatsApp">
                <WAIcon />
              </a>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-1 text-[#111827] hover:text-[#DC2626] transition-colors"
              aria-label="Toggle navigation menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ═══════════════════ MOBILE DRAWER ═══════════════════ */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeAll} aria-hidden="true" />
          <div className="absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white flex flex-col shadow-2xl overflow-y-auto">

            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 flex-shrink-0">
              <Link href="/" onClick={closeAll} className="flex flex-col leading-none">
                <span className="font-bold text-[#DC2626]" style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.3rem", lineHeight: 1 }}>RITE-WAY</span>
                <span className="text-[#1E3A5F] font-semibold mt-0.5" style={{ fontSize: "0.43rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>Minebea Technologies™</span>
              </Link>
              <button onClick={closeAll} className="p-1.5 text-gray-400 hover:text-[#111827]" aria-label="Close menu"><X size={20} /></button>
            </div>

            {/* Drawer nav */}
            <nav className="flex-1 overflow-y-auto px-3 py-3">

              {/* Products accordion */}
              <button onClick={() => setMobileProd(!mobileProd)}
                className="w-full flex items-center justify-between px-3 py-3 rounded-sm text-[#111827] font-semibold text-sm hover:bg-gray-50 transition-colors">
                Products
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${mobileProd ? "rotate-180" : ""}`} />
              </button>

              {mobileProd && (
                <div className="ml-2 mb-1">
                  {/* Weighbridges sub-accordion */}
                  <button onClick={() => setMobileWB(!mobileWB)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-sm text-xs font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-50 transition-colors mt-1">
                    Weighbridges
                    <ChevronDown size={11} className={`transition-transform ${mobileWB ? "rotate-180" : ""}`} />
                  </button>
                  {mobileWB && COL_WEIGHBRIDGES.map(({ label, href, popular }) => (
                    <Link key={href} href={href} onClick={closeAll}
                      className="flex items-center justify-between px-3 py-2 rounded-sm text-xs text-gray-600 hover:text-[#DC2626] hover:bg-red-50 transition-colors">
                      {label}
                      {popular && <span className="text-[0.45rem] font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-full">Popular</span>}
                    </Link>
                  ))}

                  {/* Terminals sub-accordion */}
                  <button onClick={() => setMobileTerm(!mobileTerm)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-sm text-xs font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-50 transition-colors mt-1">
                    Terminals &amp; Systems
                    <ChevronDown size={11} className={`transition-transform ${mobileTerm ? "rotate-180" : ""}`} />
                  </button>
                  {mobileTerm && COL_TERMINALS.map(({ label, href }) => (
                    <Link key={href} href={href} onClick={closeAll}
                      className="block px-3 py-2 rounded-sm text-xs text-gray-600 hover:text-[#DC2626] hover:bg-red-50 transition-colors">
                      {label}
                    </Link>
                  ))}

                  {/* Scales sub-accordion */}
                  <button onClick={() => setMobileScales(!mobileScales)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-sm text-xs font-bold uppercase tracking-widest text-gray-500 hover:bg-gray-50 transition-colors mt-1">
                    Weighing Scales
                    <ChevronDown size={11} className={`transition-transform ${mobileScales ? "rotate-180" : ""}`} />
                  </button>
                  {mobileScales && COL_SCALES.map(({ label, href }) => (
                    <Link key={href} href={href} onClick={closeAll}
                      className="block px-3 py-2 rounded-sm text-xs text-gray-600 hover:text-[#DC2626] hover:bg-red-50 transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Services */}
              <div className="mt-1">
                <p className="text-[0.58rem] font-bold uppercase tracking-widest text-gray-400 px-3 pt-3 pb-1.5">Services</p>
                <Link href="/repair" onClick={closeAll}
                  className="flex items-center gap-2 px-3 py-3 rounded-sm text-sm font-semibold text-[#DC2626] hover:bg-red-50 transition-colors">
                  <Wrench size={13} /> Repair &amp; Service
                </Link>
              </div>

              {/* Main links */}
              <div className="mt-1 border-t border-gray-100 pt-2">
                {[
                  { label: "Why Concrete",   href: "/why-concrete"   },
                  { label: "Industries",     href: "/industries"     },
                  { label: "Installations",  href: "/installations"  },
                  { label: "Certifications", href: "/certifications" },
                  { label: "Blog",           href: "/blog"           },
                  { label: "About Us",       href: "/about"          },
                  { label: "Contact",        href: "/contact"        },
                ].map(({ label, href }) => (
                  <Link key={href} href={href} onClick={closeAll}
                    className="block px-3 py-3 rounded-sm text-sm font-medium text-[#111827] hover:bg-gray-50 hover:text-[#DC2626] transition-colors">
                    {label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Drawer CTAs */}
            <div className="px-4 pb-7 pt-3 border-t border-gray-100 space-y-2.5 flex-shrink-0">
              <a href="https://wa.me/919877541199?text=Hello%2C+I+am+interested+in+Rite-Way+products.+Please+advise."
                target="_blank" rel="noopener noreferrer" onClick={closeAll}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-bold py-3.5 rounded-sm hover:bg-green-500 transition-colors">
                <WAIcon /> WhatsApp Us
              </a>
              <Link href="/get-quote" onClick={closeAll}
                className="flex items-center justify-center gap-2 bg-[#DC2626] text-white text-sm font-bold py-3.5 rounded-sm hover:bg-red-700 transition-colors">
                Get Free Quote <ArrowRight size={14} />
              </Link>
              <a href="tel:+919877541199"
                className="flex items-center justify-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold py-3.5 rounded-sm hover:border-[#DC2626] hover:text-[#DC2626] transition-colors">
                <Phone size={14} /> Call: 98775 41199
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}