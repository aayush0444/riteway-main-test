"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Truck, Scale, Layers, CheckCircle2, ChevronDown, MessageCircle, Phone } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type ProductType = "weighbridge" | "scale" | "both" | null;

interface WeighbridgeSpec {
  platform: string;
  installation: string;
  capacity: string;
}

interface ScaleSpec {
  type: string;
  range: string;
}

interface QuoteState {
  productType: ProductType;
  weighbridge: WeighbridgeSpec;
  scale: ScaleSpec;
}

// ─── Options ──────────────────────────────────────────────────────────────────

const PLATFORM_OPTIONS   = ["Concrete Platform (Recommended)", "Steel Platform"];
const INSTALL_OPTIONS    = ["Pit Type (flush with ground)", "Pitless / Surface Type (with ramps)"];
const CAPACITY_OPTIONS   = ["40 Ton", "60 Ton", "80 Ton", "100 Ton", "150 Ton", "200 Ton"];
const SCALE_TYPE_OPTIONS = ["Table Top Scale", "Platform / Floor Scale", "Price Computing Scale", "Jewel / Precision Scale", "Crane / Hanging Scale", "Personal Scale"];
const SCALE_RANGE_OPTIONS = ["Under 30 kg", "30 kg – 200 kg", "200 kg – 2000 kg"];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildWAMessage(state: QuoteState): string {
  const lines: string[] = ["Hello Rite-Way,", ""];

  if (state.productType === "weighbridge" || state.productType === "both") {
    lines.push("I need a Weighbridge with the following specs:");
    lines.push(`  • Platform: ${state.weighbridge.platform || "Not selected"}`);
    lines.push(`  • Installation: ${state.weighbridge.installation || "Not selected"}`);
    lines.push(`  • Capacity: ${state.weighbridge.capacity || "Not selected"}`);
    lines.push("");
  }

  if (state.productType === "scale" || state.productType === "both") {
    lines.push("I need a Weighing Scale with the following specs:");
    lines.push(`  • Type: ${state.scale.type || "Not selected"}`);
    lines.push(`  • Capacity Range: ${state.scale.range || "Not selected"}`);
    lines.push("");
  }

  lines.push("Please advise on price and availability.");

  return encodeURIComponent(lines.join("\n"));
}

function buildSummaryLines(state: QuoteState): { label: string; value: string }[] {
  const lines: { label: string; value: string }[] = [];

  lines.push({
    label: "Product Category",
    value:
      state.productType === "weighbridge"
        ? "Weighbridge"
        : state.productType === "scale"
        ? "Weighing Scale"
        : "Weighbridge + Scale",
  });

  if (state.productType === "weighbridge" || state.productType === "both") {
    if (state.weighbridge.platform)    lines.push({ label: "Platform",      value: state.weighbridge.platform });
    if (state.weighbridge.installation) lines.push({ label: "Installation",  value: state.weighbridge.installation });
    if (state.weighbridge.capacity)    lines.push({ label: "Capacity",       value: state.weighbridge.capacity });
  }

  if (state.productType === "scale" || state.productType === "both") {
    if (state.scale.type)  lines.push({ label: "Scale Type",      value: state.scale.type });
    if (state.scale.range) lines.push({ label: "Capacity Range",  value: state.scale.range });
  }

  return lines;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProgressBar({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-3">
        {(["01 Product", "02 Specs", "03 Summary"] as const).map((label, i) => {
          const active = i + 1 === step;
          const done   = i + 1 < step;
          return (
            <div key={label} className="flex items-center gap-1.5">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                  done    ? "bg-[#1E3A5F] text-white"
                  : active ? "bg-[#DC2626] text-white"
                  :          "bg-gray-100 text-gray-400"
                }`}
              >
                {done ? <CheckCircle2 size={13} /> : i + 1}
              </div>
              <span
                className={`text-xs font-semibold hidden sm:inline transition-colors duration-200 ${
                  active ? "text-[#111827]" : "text-gray-400"
                }`}
                style={{ letterSpacing: "0.06em" }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      {/* Track */}
      <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#DC2626] rounded-full transition-all duration-500"
          style={{ width: step === 1 ? "10%" : step === 2 ? "55%" : "100%" }}
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <div>
      <label
        className="block text-xs font-bold text-[#111827] mb-2 uppercase tracking-widest"
      >
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none border border-gray-200 rounded-sm px-4 py-3.5 text-sm text-[#111827] bg-white focus:outline-none focus:border-[#1E3A5F] focus:ring-1 focus:ring-[#1E3A5F]/20 transition-colors cursor-pointer pr-9"
        >
          <option value="">{placeholder ?? "Select an option…"}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
}

// ─── Step 1: Product Type ─────────────────────────────────────────────────────

function Step1({
  value,
  onChange,
  onNext,
}: {
  value: ProductType;
  onChange: (v: ProductType) => void;
  onNext: () => void;
}) {
  const cards = [
    {
      id: "weighbridge" as const,
      icon: Truck,
      title: "Weighbridge",
      sub: "40 Ton to 200 Ton",
      desc: "Concrete or steel platform weighbridges for industrial, mandi, mining, or logistics use.",
    },
    {
      id: "scale" as const,
      icon: Scale,
      title: "Weighing Scale",
      sub: "20g to 2000 kg",
      desc: "Table top, platform, jewel, crane, price computing, or personal scales.",
    },
    {
      id: "both" as const,
      icon: Layers,
      title: "Both",
      sub: "Full range",
      desc: "I need both a weighbridge and a weighing scale — quote for both together.",
    },
  ];

  return (
    <div>
      <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">
        What do you need?
      </h2>
      <p className="text-gray-500 text-sm mb-8">Select the product category that best matches your requirement.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {cards.map(({ id, icon: Icon, title, sub, desc }) => {
          const selected = value === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={`text-left border rounded-sm p-6 transition-all duration-150 hover:shadow-md focus:outline-none ${
                selected
                  ? "border-[#DC2626] bg-red-50/40 shadow-sm"
                  : "border-gray-100 bg-white hover:border-gray-300"
              }`}
              style={{ boxShadow: selected ? "0 0 0 1px #DC2626" : "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              <div
                className={`w-10 h-10 rounded-sm flex items-center justify-center mb-4 transition-colors ${
                  selected ? "bg-[#DC2626]" : "bg-gray-50 group-hover:bg-gray-100"
                }`}
              >
                <Icon size={18} className={selected ? "text-white" : "text-[#1E3A5F]"} />
              </div>
              <p className="text-[#111827] font-bold text-base mb-0.5">{title}</p>
              <p
                className={`text-xs font-semibold mb-2 ${selected ? "text-[#DC2626]" : "text-[#1E3A5F]"}`}
                style={{ letterSpacing: "0.06em" }}
              >
                {sub}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>

              {/* Selection indicator */}
              <div className="mt-4 flex items-center gap-1.5">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selected ? "border-[#DC2626] bg-[#DC2626]" : "border-gray-300"
                  }`}
                >
                  {selected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
                <span className={`text-xs font-semibold ${selected ? "text-[#DC2626]" : "text-gray-400"}`}>
                  {selected ? "Selected" : "Select"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <button
        onClick={onNext}
        disabled={!value}
        className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-7 py-3.5 rounded-sm hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continue
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

// ─── Step 2a: Weighbridge Specs ───────────────────────────────────────────────

function Step2Weighbridge({
  value,
  onChange,
  onNext,
  onBack,
}: {
  value: WeighbridgeSpec;
  onChange: (v: WeighbridgeSpec) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const allFilled = value.platform && value.installation && value.capacity;

  return (
    <div>
      <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">
        Weighbridge Specifications
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Help us recommend the right weighbridge for your site and application.
      </p>

      <div className="space-y-6 mb-8 max-w-lg">
        <SelectField
          label="Platform Material"
          value={value.platform}
          onChange={(v) => onChange({ ...value, platform: v })}
          options={PLATFORM_OPTIONS}
          placeholder="Choose platform type…"
        />

        {/* Concrete recommendation tip */}
        {value.platform.startsWith("Concrete") && (
          <div className="flex gap-3 bg-green-50 border border-green-100 rounded-sm px-4 py-3">
            <CheckCircle2 size={15} className="text-green-500 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-green-700 leading-relaxed">
              <strong>Great choice.</strong> Concrete platforms last 100+ years, cost 40% less, and require zero maintenance. 95% of European weighbridges use concrete.{" "}
              <Link href="/why-concrete" className="underline font-semibold">Learn why →</Link>
            </p>
          </div>
        )}

        <SelectField
          label="Installation Type"
          value={value.installation}
          onChange={(v) => onChange({ ...value, installation: v })}
          options={INSTALL_OPTIONS}
          placeholder="Choose installation type…"
        />

        {value.installation && (
          <div className="flex gap-3 bg-gray-50 border border-gray-100 rounded-sm px-4 py-3">
            <p className="text-xs text-gray-500 leading-relaxed">
              {value.installation.startsWith("Pit")
                ? "Pit type: platform sits flush with the ground. No ramps needed — ideal for high-traffic sites with limited space."
                : "Pitless: platform sits above ground with approach ramps. No excavation required — ideal for sites where digging is difficult."}
            </p>
          </div>
        )}

        <SelectField
          label="Required Capacity"
          value={value.capacity}
          onChange={(v) => onChange({ ...value, capacity: v })}
          options={CAPACITY_OPTIONS}
          placeholder="Choose capacity…"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-5 py-3.5 rounded-sm hover:border-gray-400 transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!allFilled}
          className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-7 py-3.5 rounded-sm hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

// ─── Step 2b: Scale Specs ─────────────────────────────────────────────────────

function Step2Scale({
  value,
  onChange,
  onNext,
  onBack,
}: {
  value: ScaleSpec;
  onChange: (v: ScaleSpec) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const allFilled = value.type && value.range;

  return (
    <div>
      <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">
        Scale Specifications
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Tell us about the type and capacity of scale you require.
      </p>

      <div className="space-y-6 mb-8 max-w-lg">
        <SelectField
          label="Scale Type"
          value={value.type}
          onChange={(v) => onChange({ ...value, type: v })}
          options={SCALE_TYPE_OPTIONS}
          placeholder="Choose scale type…"
        />

        <SelectField
          label="Capacity Range"
          value={value.range}
          onChange={(v) => onChange({ ...value, range: v })}
          options={SCALE_RANGE_OPTIONS}
          placeholder="Choose capacity range…"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-5 py-3.5 rounded-sm hover:border-gray-400 transition-colors"
        >
          <ArrowLeft size={14} />
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!allFilled}
          className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-7 py-3.5 rounded-sm hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

// ─── Step 2 Both ──────────────────────────────────────────────────────────────

function Step2Both({
  weighbridge,
  scale,
  onChangeW,
  onChangeS,
  onNext,
  onBack,
}: {
  weighbridge: WeighbridgeSpec;
  scale: ScaleSpec;
  onChangeW: (v: WeighbridgeSpec) => void;
  onChangeS: (v: ScaleSpec) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const allFilled =
    weighbridge.platform && weighbridge.installation && weighbridge.capacity &&
    scale.type && scale.range;

  return (
    <div>
      <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">
        Specifications
      </h2>
      <p className="text-gray-500 text-sm mb-8">Fill in details for both the weighbridge and the scale.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Weighbridge */}
        <div className="border border-gray-100 rounded-sm p-6 space-y-5" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-sm bg-[#1E3A5F] flex items-center justify-center">
              <Truck size={13} className="text-white" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1E3A5F]">Weighbridge</span>
          </div>
          <SelectField label="Platform" value={weighbridge.platform} onChange={(v) => onChangeW({ ...weighbridge, platform: v })} options={PLATFORM_OPTIONS} />
          <SelectField label="Installation" value={weighbridge.installation} onChange={(v) => onChangeW({ ...weighbridge, installation: v })} options={INSTALL_OPTIONS} />
          <SelectField label="Capacity" value={weighbridge.capacity} onChange={(v) => onChangeW({ ...weighbridge, capacity: v })} options={CAPACITY_OPTIONS} />
        </div>

        {/* Scale */}
        <div className="border border-gray-100 rounded-sm p-6 space-y-5" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-sm bg-[#DC2626] flex items-center justify-center">
              <Scale size={13} className="text-white" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#DC2626]">Weighing Scale</span>
          </div>
          <SelectField label="Scale Type" value={scale.type} onChange={(v) => onChangeS({ ...scale, type: v })} options={SCALE_TYPE_OPTIONS} />
          <SelectField label="Capacity Range" value={scale.range} onChange={(v) => onChangeS({ ...scale, range: v })} options={SCALE_RANGE_OPTIONS} />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button onClick={onBack} className="inline-flex items-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-5 py-3.5 rounded-sm hover:border-gray-400 transition-colors">
          <ArrowLeft size={14} /> Back
        </button>
        <button onClick={onNext} disabled={!allFilled} className="inline-flex items-center gap-2 bg-[#DC2626] text-white text-sm font-semibold px-7 py-3.5 rounded-sm hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
          Continue <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

// ─── Step 3: Summary + CTA ────────────────────────────────────────────────────

function Step3({
  state,
  onBack,
}: {
  state: QuoteState;
  onBack: () => void;
}) {
  const summary = buildSummaryLines(state);
  const waMsg   = buildWAMessage(state);
  const waHref  = `https://wa.me/919877541199?text=${waMsg}`;

  return (
    <div>
      <h2 className="text-[#111827] font-bold text-2xl md:text-3xl leading-tight tracking-tight mb-2">
        Your Quote Summary
      </h2>
      <p className="text-gray-500 text-sm mb-8">
        Review your selections below, then send us the details via WhatsApp or request a formal quote.
      </p>

      {/* Summary card */}
      <div
        className="border border-gray-100 rounded-sm overflow-hidden mb-8 max-w-lg"
        style={{ boxShadow: "0 2px 16px rgba(30,58,95,0.07)" }}
      >
        <div className="h-1 bg-[#1E3A5F]" />
        <div className="divide-y divide-gray-50">
          {summary.map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between px-5 py-3.5">
              <span
                className="text-xs font-bold text-gray-400 uppercase tracking-widest"
              >
                {label}
              </span>
              <span className="text-sm font-semibold text-[#111827] text-right max-w-[60%]">
                {value}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            No pricing shown — Rite-Way provides custom quotes based on your specific site and requirements.
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-lg">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-6 py-4 rounded-sm hover:bg-green-500 transition-colors shadow-sm"
        >
          <MessageCircle size={16} />
          Send via WhatsApp
        </a>
        <a
          href="tel:+919877541199"
          className="flex-1 flex items-center justify-center gap-2 border border-gray-200 text-[#111827] text-sm font-semibold px-6 py-4 rounded-sm hover:border-[#1E3A5F] hover:text-[#1E3A5F] transition-colors"
        >
          <Phone size={15} className="text-[#1E3A5F]" />
          Call Us Instead
        </a>
      </div>

      <p className="text-xs text-gray-400 mb-8 max-w-md">
        The WhatsApp button opens a pre-filled message with your exact specifications.
        Our team responds within 30 minutes during working hours (Mon–Sat, 9am–6pm).
      </p>

      {/* Trust strip */}
      <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <CheckCircle2 size={13} className="text-green-500" />
          ISO 9001:2015 Certified
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <CheckCircle2 size={13} className="text-green-500" />
          In business since 2004
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <CheckCircle2 size={13} className="text-green-500" />
          No obligation — free advice
        </div>
      </div>

      <button
        onClick={onBack}
        className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#111827] transition-colors"
      >
        <ArrowLeft size={13} />
        Edit selections
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const INITIAL_STATE: QuoteState = {
  productType: null,
  weighbridge: { platform: "", installation: "", capacity: "" },
  scale: { type: "", range: "" },
};

export default function GetQuotePage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [state, setState] = useState<QuoteState>(INITIAL_STATE);

  const goNext = () => setStep((s) => Math.min(s + 1, 3) as 1 | 2 | 3);
  const goBack = () => setStep((s) => Math.max(s - 1, 1) as 1 | 2 | 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="relative border-b border-gray-100 bg-white overflow-hidden">
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
          style={{ background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, white 100%)" }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#DC2626]" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-12 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#DC2626]" />
            <span className="text-[#DC2626] font-semibold" style={{ fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase" }}>
              Free · No Obligation
            </span>
          </div>
          <h1
            className="text-[#111827] font-bold leading-tight tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            Get a Custom Quote
          </h1>
          <p className="text-gray-500 text-base mt-2">
            3 quick steps — takes under 60 seconds.
          </p>
        </div>
      </div>

      {/* Wizard */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 md:py-20">
        <div className="max-w-2xl">
          <ProgressBar step={step} />

          {step === 1 && (
            <Step1
              value={state.productType}
              onChange={(v) => setState((s) => ({ ...s, productType: v }))}
              onNext={goNext}
            />
          )}

          {step === 2 && state.productType === "weighbridge" && (
            <Step2Weighbridge
              value={state.weighbridge}
              onChange={(v) => setState((s) => ({ ...s, weighbridge: v }))}
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {step === 2 && state.productType === "scale" && (
            <Step2Scale
              value={state.scale}
              onChange={(v) => setState((s) => ({ ...s, scale: v }))}
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {step === 2 && state.productType === "both" && (
            <Step2Both
              weighbridge={state.weighbridge}
              scale={state.scale}
              onChangeW={(v) => setState((s) => ({ ...s, weighbridge: v }))}
              onChangeS={(v) => setState((s) => ({ ...s, scale: v }))}
              onNext={goNext}
              onBack={goBack}
            />
          )}

          {step === 3 && (
            <Step3 state={state} onBack={goBack} />
          )}
        </div>
      </div>
    </div>
  );
}