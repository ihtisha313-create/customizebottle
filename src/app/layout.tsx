import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WaterAtmosphere from "@/components/WaterAtmosphere";
import { siteConfig } from "@/lib/site";
import "./globals.css";
import "./phase2.css";
import "./phase3.css";
import "./homepage.css";
import "./water-theme.css";

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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "CustomizeBottle custom-branded bottled-water solutions" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "CustomizeBottle | Your Brand. On Every Bottle.",
    description: "Custom-branded bottled-water solutions for businesses.",
    images: ["/opengraph-image"]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#07384B" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: "Customized drinking-water bottles for businesses.",
    telephone: siteConfig.whatsappDisplay,
    areaServed: { "@type": "Country", name: "Pakistan" },
    address: { "@type": "PostalAddress", addressLocality: "Peshawar", addressRegion: "Khyber Pakhtunkhwa", addressCountry: "PK" }
  };

  return (
    <html lang="en" className={inter.variable + " " + manrope.variable}>
      <body>
        <WaterAtmosphere />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        <a className="skip-to-content" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
