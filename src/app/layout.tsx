import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import ScrollAwareHeader from "@/components/layout/ScrollAwareHeader";

import "./globals.css";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NexaCart | Electronics Store",
    template: "%s | NexaCart",
  },
  description:
    "Discover the latest electronics, laptops, smartphones, gaming accessories and smart devices at NexaCart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <ScrollAwareHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
