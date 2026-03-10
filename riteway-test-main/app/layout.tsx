import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RITE-WAY | Weighbridge & Weighing Scale Manufacturer — Mohali, Punjab",
  description:
    "ISO 9001:2015 certified manufacturer of concrete & steel platform weighbridges (40T–200T) and precision weighing scales (20g–2000kg). Serving industry since 2004. Mohali, Punjab, India.",
  keywords: [
    "weighbridge manufacturer India",
    "concrete platform weighbridge",
    "weighing scale manufacturer Mohali",
    "Rite-Way Minebea Technologies",
    "industrial weighbridge Punjab",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-[#111827]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}