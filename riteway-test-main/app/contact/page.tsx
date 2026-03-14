"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

// ─── Config ───────────────────────────────────────────────────────────────────

const WA_HREF =
  "https://wa.me/919877541199?text=Hello%2C+I+am+interested+in+Rite-Way+products.+Please+advise.";

const WEB3FORMS_KEY = "REPLACE_WITH_WEB3FORMS_KEY"; // ← GET YOUR FREE KEY AT: web3forms.com

const PRODUCTS = [
  "Concrete Platform Weighbridge",
  "Steel Platform Weighbridge",
  "AND 4500 Dual Terminal",
  "AND 4500 Email Terminal",
  "Payload-T GPRS System",
  "Jewel / Precision Scale",
  "Table Top Scale",
  "Platform / Floor Scale",
  "SS Price Computing Scale",
  "Crane / Hanging Scale",
  "Personal Scale",
  "Other / Not Sure",
];

// ─── Shared ───────────────────────────────────────────────────────────────────

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-white border-b border-gray-100 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right,#e5e7eb 1px,transparent 1px),linear-gradient(to bottom,#e5e7eb 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          opacity: 0.4,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, white 100%)",
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#DC2626]" />
            <SectionLabel>Reach Us Anytime</SectionLabel>
          </div>
          <h1
            className="text-[#111827] font-bold leading-[1.08] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Get In Touch
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            Our team of specialist sales engineers is available Mon–Sat, 9am–6pm.
            We respond to WhatsApp inquiries typically within 30 minutes during
            working hours.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Card item ────────────────────────────────────────────────────────

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="w-9 h-9 rounded-sm bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Icon size={15} className="text-[#1E3A5F]" />
      </div>
      <div>
        <p
          className="text-gray-400 font-semibold mb-1"
          style={{ fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
        >
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New inquiry from ${form.name} — ${form.product || "General"}`,
          from_name: "Rite-Way Website",
          name: form.name,
          phone: form.phone,
          product_interest: form.product,
          message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputBase =
    "w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 transition-colors bg-white";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center h-full">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle2 size={28} className="text-green-500" />
        </div>
        <h3 className="text-[#111827] font-bold text-xl mb-2">Message Sent</h3>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          Thank you! We will call you within 2 hours. You can also reach us directly on WhatsApp for an even faster response.
        </p>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-5 py-3 rounded-sm hover:bg-green-500 transition-colors"
        >
          <MessageCircle size={15} />
          Open WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label className="block text-xs font-semibold text-[#111827] mb-1.5 uppercase tracking-wide">
          Your Name <span className="text-[#DC2626]">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Rajesh Kumar"
          className={inputBase}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-xs font-semibold text-[#111827] mb-1.5 uppercase tracking-wide">
          Phone Number <span className="text-[#DC2626]">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="e.g. 98765 43210"
          className={inputBase}
        />
      </div>

      {/* Product Interest */}
      <div>
        <label className="block text-xs font-semibold text-[#111827] mb-1.5 uppercase tracking-wide">
          Product Interest
        </label>
        <div className="relative">
          <select
            name="product"
            value={form.product}
            onChange={handleChange}
            className={`${inputBase} appearance-none pr-9 cursor-pointer`}
          >
            <option value="">Select a product…</option>
            {PRODUCTS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-[#111827] mb-1.5 uppercase tracking-wide">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your site, required capacity, or any questions…"
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Error */}
      {status === "error" && (
        <p className="text-xs text-[#DC2626] bg-red-50 border border-red-100 rounded-sm px-4 py-3">
          Something went wrong. Please try WhatsApp or call us directly.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-[#DC2626] text-white text-sm font-semibold py-3.5 rounded-sm hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={14} />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Or{" "}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] font-semibold hover:underline"
        >
          message us on WhatsApp
        </a>{" "}
        for the fastest response.
      </p>
    </form>
  );
}

// ─── Two-Column Section ───────────────────────────────────────────────────────

function ContactColumns() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left: Contact Details ── */}
          <div>
            <SectionLabel>Contact Details</SectionLabel>
            <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-8">
              Talk to a Weighing Expert
            </h2>

            <div className="space-y-7">
              {/* Phone 1 */}
              <ContactItem icon={Phone} label="Sales Enquiries">
                <a
                  href="tel:+919877541199"
                  className="block text-sm font-semibold text-[#111827] hover:text-[#DC2626] transition-colors"
                >
                  +91 98775 41199
                </a>
              </ContactItem>

              {/* Phone 2 */}
              <ContactItem icon={Phone} label="Support & Service">
                <a
                  href="tel:+919216171652"
                  className="block text-sm font-semibold text-[#111827] hover:text-[#DC2626] transition-colors"
                >
                  +91 92161 71652
                </a>
              </ContactItem>

              {/* Email */}
              <ContactItem icon={Mail} label="Email">
                <a
                  href="mailto:minebeatech@ymail.com"
                  className="block text-sm font-semibold text-[#111827] hover:text-[#DC2626] transition-colors"
                >
                  minebeatech@ymail.com
                </a>
              </ContactItem>

              {/* Address */}
              <ContactItem icon={MapPin} label="Factory & Showroom">
                <address className="not-italic text-sm text-gray-600 leading-relaxed">
                  Plot No. E-1, Industrial Area,<br />
                  Phase-2, Mohali, Punjab — 160055
                </address>
              </ContactItem>

              {/* Hours */}
              <ContactItem icon={Clock} label="Working Hours">
                <p className="text-sm text-gray-600">
                  Monday – Saturday &nbsp;·&nbsp; 9:00 AM – 6:00 PM
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Sunday: Closed</p>
              </ContactItem>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4">
                Fastest Response
              </p>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-green-500 transition-colors shadow-sm"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </a>
              <p className="text-xs text-gray-400 mt-3">
                Typically replies within 30 minutes during working hours.
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-[0.62rem] font-semibold text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                ISO 9001:2015
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.62rem] font-semibold text-[#1E3A5F] bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wide">
                Manufacturer Since 2004
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.62rem] font-semibold text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full uppercase tracking-wide">
                🇮🇳 Made in India
              </span>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div
            className="bg-white border border-gray-100 rounded-sm p-8 md:p-10"
            style={{ boxShadow: "0 2px 24px rgba(30,58,95,0.07)" }}
          >
            <div className="mb-7">
              <SectionLabel>Send a Message</SectionLabel>
              <h3 className="text-[#111827] font-bold text-xl leading-tight tracking-tight">
                We&apos;ll Get Back to You
              </h3>
              <p className="text-gray-500 text-sm mt-1.5">
                Fill in your details and we&apos;ll respond within a few hours.
              </p>
            </div>
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── Map Section ──────────────────────────────────────────────────────────────

function MapSection() {
  return (
    <section className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        {/* Section header */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <SectionLabel>Find Us</SectionLabel>
            <h2 className="text-[#111827] font-bold text-xl leading-tight tracking-tight">
              Rite-Way Factory &amp; Showroom — Mohali, Punjab
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/place/Minebea+Technologies/@30.7223648,76.7041674,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-4 py-2.5 rounded-sm hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition-colors"
          >
            <MapPin size={13} className="text-[#DC2626]" />
            Open in Google Maps
          </a>
        </div>

        {/* Address strip above map */}
        <div className="mb-5 flex items-start gap-3">
          <div className="w-8 h-8 rounded-sm bg-[#DC2626] flex items-center justify-center flex-shrink-0 mt-0.5">
            <MapPin size={13} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold text-[#111827] uppercase tracking-wide mb-0.5">
              RITE-WAY by Minebea Technologies
            </p>
            <address className="not-italic text-xs text-gray-500 leading-relaxed">
              Plot No. E-1, Industrial Area, Phase-2,<br />
              Sahibzada Ajit Singh Nagar (Mohali), Punjab 160055
            </address>
          </div>
        </div>

        {/* Map iframe — fixed 400px height, responsive width */}
        <div
          className="rounded-sm border border-gray-200 overflow-hidden w-full"
          style={{ height: "400px" }}
        >
          <iframe
            title="Minebea Technologies — Rite-Way, Industrial Area Phase-2, Mohali Punjab"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.5!2d76.7041674!3d30.7223648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f93e7895d6f3f%3A0xe85880d68344664!2sMinebea+Technologies!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactColumns />
      <MapSection />
    </>
  );
}