import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { siteConfig, whatsappUrl } from "@/lib/site";
export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand-block">
        <Link className="brand brand-light footer-brand" href="/" aria-label="APNAAB — Your name on every drop"><Image className="footer-full-logo" src="/apnaab-logo.svg" alt="APNAAB logo — Your name on every drop" width={1115} height={790} sizes="(max-width: 560px) 160px, 205px" /></Link>
        <p>Custom-labelled 500 ml drinking water for businesses and events. A bottle order planned around your brand and requirements.</p>
        <span className="footer-location"><Icon name="pin" size={16}/> {siteConfig.location}</span>
      </div>
      <div className="footer-links"><h3>Explore</h3><Link href="/">Home</Link><Link href="/bottles">Our Bottles</Link><Link href="/industries">Industries</Link><Link href="/how-it-works">How It Works</Link><Link href="/portfolio">Portfolio</Link><Link href="/about">About Us</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-contact"><h3>Let's talk</h3><p>Tell us what you need and we’ll help you plan your order.</p>
        <a className="footer-whatsapp" href={whatsappUrl("Hello APNAAB, I would like to discuss a customized bottled-water order.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18}/> {siteConfig.whatsappDisplay}</a>
        <span className="footer-note">Minimum order: {siteConfig.minimumOrder} bottles</span>
        <div className="footer-legal"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></div>
      </div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} APNAAB. All rights reserved.</span><span>Made for businesses across Pakistan.</span></div>
  </footer>;
}
