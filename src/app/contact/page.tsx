import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: "Tell APNAAB what you need and request a quotation for custom-labelled 500 ml bottled water. Minimum order: 500 bottles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero"><div className="container contact-hero-inner"><span className="eyebrow eyebrow-light">CONTACT APNAAB</span><h1>Let's put your brand<br /><em>on the bottle.</em></h1><p>Share a few details about your business, expected quantity and label idea. We’ll help you take it from there.</p><div className="contact-hero-points"><span><Icon name="check" size={16}/> Minimum order {siteConfig.minimumOrder}</span><span><Icon name="whatsapp" size={16}/> Direct WhatsApp inquiry</span></div></div></section>
      <section className="section contact-section"><div className="container contact-layout"><div className="contact-sidebar"><span className="eyebrow">LET'S GET THE DETAILS</span><h2>Tell us what <em>you have in mind.</em></h2><p>Already have a design? Great. Still working on an idea? That’s fine too. Tell us a little about your order and we’ll help you understand the next steps.</p><div className="contact-info-card"><span className="contact-info-icon"><Icon name="whatsapp" size={22}/></span><div><small>WHATSAPP</small><a href={whatsappUrl("Hello APNAAB, I would like to make an inquiry.")} target="_blank" rel="noreferrer">{siteConfig.whatsappDisplay}</a></div></div><div className="contact-info-card"><span className="contact-info-icon"><Icon name="pin" size={22}/></span><div><small>OUR LOCATION</small><strong>{siteConfig.location}</strong></div></div><div className="contact-info-card"><span className="contact-info-icon"><Icon name="package" size={22}/></span><div><small>STARTING QUANTITY</small><strong>{siteConfig.minimumOrder} bottles</strong></div></div><a className="direct-whatsapp" href={whatsappUrl("Hello APNAAB, I would like to discuss a customized bottled-water order.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18}/> Message us on WhatsApp <Icon name="arrow" size={17}/></a></div><div className="contact-form-card"><div className="contact-form-heading"><span className="eyebrow">GET A QUOTATION</span><h2>A few details to get started.</h2><p>Fill in the details below. We’ll prepare a message for WhatsApp so you can review it before sending.</p></div><QuoteForm/></div></div></section>
    </>
  );
}
