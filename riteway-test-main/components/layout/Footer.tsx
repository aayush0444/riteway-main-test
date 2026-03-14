import Link from "next/link";
import { MapPin, Phone, Mail, Award, Shield } from "lucide-react";

function WAIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="currentColor" />
    </svg>
  );
}

// ─── Link data ────────────────────────────────────────────────────────────────

const QUICK_LINKS = [
  { label: "Home",                href: "/" },
  { label: "Products",            href: "/products" },
  { label: "Repair & Service",    href: "/repair",          highlight: true },
  { label: "Why Concrete",        href: "/why-concrete" },
  { label: "Industries",          href: "/industries" },
  { label: "Installations",       href: "/installations" },
  { label: "Certifications",      href: "/certifications" },
  { label: "About Us",            href: "/about" },
  { label: "Blog",                href: "/blog" },
  { label: "Contact",             href: "/contact" },
  { label: "Get a Quote",         href: "/get-quote",       highlight: true },
];

const PRODUCT_LINKS = [
  { label: "Concrete Weighbridge",      href: "/products/weighbridges/concrete-platform" },
  { label: "Steel Weighbridge",         href: "/products/weighbridges/steel-platform" },
  { label: "AND 4500 Dual Terminal",    href: "/products/weighbridges/and4500-dual" },
  { label: "AND 4500 Email Terminal",   href: "/products/weighbridges/and4500-email" },
  { label: "Payload-T GPRS System",     href: "/products/weighbridges/payload-gprs" },
  { label: "Table Top Scales",          href: "/products/scales/table-top" },
  { label: "Platform & Floor Scales",   href: "/products/scales/platform" },
  { label: "Price Computing Scale",     href: "/products/scales/price-computing" },
  { label: "Jewel Precision Scale",     href: "/products/scales/jewel" },
  { label: "Crane & Hanging Scale",     href: "/products/scales/crane" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* ── Main grid ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: Brand ─────────────────────────────── */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-flex flex-col leading-none mb-5 group">
              <span
                className="font-bold text-[#DC2626] group-hover:text-red-700 transition-colors"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "1.45rem", lineHeight: 1 }}>
                RITE-WAY
              </span>
              <span className="relative mt-1">
                <span className="block h-px w-full bg-[#DC2626] opacity-50" />
                <span
                  className="block text-[#1E3A5F] font-semibold mt-0.5"
                  style={{ fontSize: "0.45rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Minebea Technologies™
                </span>
              </span>
            </Link>

            <p className="text-gray-500 text-xs leading-relaxed mb-1 font-medium italic">
              Perfect · Precision · Performance
            </p>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              ISO 9001:2015 certified manufacturer of weighbridges and precision weighing scales. Serving industry since 2004.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col gap-2 mb-6">
              <span className="inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 text-[0.58rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
                <Award size={10} /> ISO 9001:2015 Certified
              </span>
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#1E3A5F] text-[0.58rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
                🇮🇳 Since 2004 · Mohali, Punjab
              </span>
              <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 text-[0.58rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full w-fit">
                <Shield size={10} /> Legal Metrology Approved
              </span>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919877541199?text=Hello%2C+I+am+interested+in+Rite-Way+products.+Please+advise."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-4 py-2.5 rounded-sm hover:bg-green-500 transition-colors">
              <WAIcon /> WhatsApp Us Now
            </a>
          </div>

          {/* ── Col 2: Quick Links ───────────────────────── */}
          <div>
            <p className="text-[#111827] font-bold text-[0.65rem] uppercase tracking-[0.14em] mb-5">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, href, highlight }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-xs transition-colors ${
                      highlight
                        ? "text-[#DC2626] font-semibold hover:text-red-700"
                        : "text-gray-500 hover:text-[#111827]"
                    }`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Products ─────────────────────────── */}
          <div>
            <p className="text-[#111827] font-bold text-[0.65rem] uppercase tracking-[0.14em] mb-5">
              Products
            </p>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-500 text-xs hover:text-[#111827] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ──────────────────────────── */}
          <div>
            <p className="text-[#111827] font-bold text-[0.65rem] uppercase tracking-[0.14em] mb-5">
              Contact Us
            </p>

            <ul className="space-y-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <MapPin size={13} className="text-[#DC2626] flex-shrink-0 mt-0.5" />
                <span className="text-gray-500 text-xs leading-relaxed">
                  Plot No. E-1, Industrial Area,<br />
                  Phase-2, Mohali,<br />
                  Punjab 160055, India
                </span>
              </li>

              {/* Phones */}
              <li className="flex items-start gap-3">
                <Phone size={13} className="text-[#DC2626] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+919877541199"
                    className="text-gray-500 text-xs hover:text-[#DC2626] transition-colors">
                    +91 98775 41199
                  </a>
                  <a
                    href="tel:+919216171652"
                    className="text-gray-500 text-xs hover:text-[#DC2626] transition-colors">
                    +91 92161 71652 <span className="text-gray-400">(Secondary)</span>
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <Mail size={13} className="text-[#DC2626] flex-shrink-0" />
                <a
                  href="mailto:minebeatech@ymail.com"
                  className="text-gray-500 text-xs hover:text-[#DC2626] transition-colors break-all">
                  minebeatech@ymail.com
                </a>
              </li>
            </ul>

            {/* Repair CTA */}
            <div className="mt-6 border border-[#DC2626]/20 bg-red-50/50 rounded-sm p-4">
              <p className="text-[#111827] font-bold text-xs mb-1">Weighbridge Down?</p>
              <p className="text-gray-500 text-[0.65rem] leading-relaxed mb-3">
                24-hour on-site repair response across North India.
              </p>
              <Link
                href="/repair"
                className="inline-flex items-center gap-1.5 text-[#DC2626] text-xs font-bold hover:underline">
                → Repair &amp; Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────── */}
      <div className="border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-[0.62rem] text-center sm:text-left">
            © {new Date().getFullYear()} Minebea Technologies Pvt. Ltd. All rights reserved.
            RITE-WAY® is a registered trademark.
          </p>
          <div className="flex items-center gap-4 text-[0.62rem] text-gray-400 flex-wrap justify-center">
            <Link href="/certifications" className="hover:text-[#111827] transition-colors">Certifications</Link>
            <Link href="/contact"        className="hover:text-[#111827] transition-colors">Privacy Policy</Link>
            <Link href="/contact"        className="hover:text-[#111827] transition-colors">Terms</Link>
            <span className="flex items-center gap-1">🇮🇳 Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 