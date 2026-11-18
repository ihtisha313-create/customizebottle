import Link from "next/link";
import { Icon } from "@/components/Icons";
import { siteConfig, whatsappUrl } from "@/lib/site";
export default function Footer() {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div className="footer-brand-block">
        <Link className="brand brand-light" href="/"><span className="brand-mark"><Icon name="droplet" size={25}/></span><span className="brand-copy"><strong>Customize<span>Bottle</span></strong><small>CUSTOM-BRANDED BOTTLES &amp; SUPPLY</small></span></Link>
        <p>Customized drinking-water bottles that help your business make a lasting impression.</p>
        <span className="footer-location"><Icon name="pin" size={16}/> {siteConfig.location}</span>
      </div>
      <div className="footer-links"><h3>Explore</h3><Link href="/">Home</Link><Link href="/bottles">Our Bottles</Link><Link href="/industries">Industries</Link><Link href="/how-it-works">How It Works</Link><Link href="/portfolio">Portfolio</Link><Link href="/about">About Us</Link><Link href="/contact">Contact</Link></div>
      <div className="footer-contact"><h3>Talk to our team</h3><p>Tell us about your business and the bottles you need.</p>
        <a className="footer-whatsapp" href={whatsappUrl("Hello CustomizeBottle, I would like to discuss a customized bottled-water order.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18}/> {siteConfig.whatsappDisplay}</a>
        <span className="footer-note">Minimum order: {siteConfig.minimumOrder} bottles</span>
        <div className="footer-legal"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></div>
      </div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} CustomizeBottle. All rights reserved.</span><span>Made for businesses across Pakistan.</span></div>
  </footer>;
}
