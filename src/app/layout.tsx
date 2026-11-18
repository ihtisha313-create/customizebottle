import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: "CustomizeBottle | Custom-Branded Bottled Water for Businesses", template: "%s | CustomizeBottle" },
  description: "Customized drinking-water bottles for hotels, restaurants, hospitals, wedding halls, events and businesses across Pakistan. Minimum order starts at 500 bottles.",
  applicationName: "CustomizeBottle",
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: siteConfig.domain },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.domain,
    siteName: "CustomizeBottle",
    title: "Your Brand. On Every Bottle. | CustomizeBottle",
    description: "Custom-branded bottled-water solutions for businesses across Pakistan.",
    images: [{ url: siteConfig.heroImage, width: 1600, height: 900, alt: "Clear water bottle in a natural product setting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CustomizeBottle | Your Brand. On Every Bottle.",
    description: "Custom-branded bottled-water solutions for businesses.",
    images: [siteConfig.heroImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10283B",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable + " " + manrope.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
