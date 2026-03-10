"use client";

import { useState } from "react";

const WA_HREF =
  "https://wa.me/919877541199?text=Hello%2C+I+am+interested+in+Rite-Way+products.+Please+advise.";

// WhatsApp SVG icon (official shape, no external dependency)
function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.478.643 4.805 1.768 6.83L2 30l7.363-1.733A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.368 1.028 1.055-4.258-.272-.437A11.44 11.44 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5zm6.27-8.545c-.344-.172-2.035-1.004-2.35-1.118-.316-.115-.546-.172-.776.172-.23.344-.89 1.118-1.09 1.348-.2.23-.4.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.913-2.382-.2-.344-.021-.53.15-.701.155-.155.344-.403.516-.604.172-.2.23-.344.344-.574.115-.23.057-.43-.029-.603-.086-.172-.776-1.872-1.063-2.563-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.603.086-.918.43-.316.344-1.205 1.177-1.205 2.87s1.234 3.33 1.406 3.56c.172.23 2.428 3.71 5.88 5.202.823.355 1.465.567 1.965.726.826.263 1.578.226 2.172.137.662-.099 2.035-.832 2.322-1.635.287-.803.287-1.49.2-1.635-.086-.144-.316-.23-.66-.402z"
        fill="white"
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Pulse + button wrapper — fixed bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">

        {/* Tooltip — slides in from right when hovered */}
        <div
          aria-hidden={!hovered}
          className={`absolute right-[56px] bg-[#111827] text-white text-xs font-medium px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg pointer-events-none transition-all duration-200 ${
            hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
          }`}
        >
          Chat with us
          {/* Tooltip arrow */}
          <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-[#111827]" />
        </div>

        {/* Pulse rings */}
        <span
          className="absolute inline-flex rounded-full bg-[#25D366] opacity-25"
          style={{
            width: "56px",
            height: "56px",
            animation: "wa-ping 2s cubic-bezier(0,0,0.2,1) infinite",
          }}
        />
        <span
          className="absolute inline-flex rounded-full bg-[#25D366] opacity-15"
          style={{
            width: "56px",
            height: "56px",
            animation: "wa-ping 2s cubic-bezier(0,0,0.2,1) infinite 0.5s",
          }}
        />

        {/* Main button */}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#20c25e] hover:shadow-xl transition-all duration-200"
          style={{
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
            boxShadow: hovered
              ? "0 8px 24px rgba(37,211,102,0.45)"
              : "0 4px 16px rgba(37,211,102,0.35)",
          }}
        >
          <WhatsAppIcon size={26} />
        </a>
      </div>

      {/* Keyframes injected once — no Tailwind plugin needed */}
      <style>{`
        @keyframes wa-ping {
          0%   { transform: scale(1);   opacity: 0.3; }
          70%  { transform: scale(1.65); opacity: 0;   }
          100% { transform: scale(1.65); opacity: 0;   }
        }
      `}</style>
    </>
  );
}