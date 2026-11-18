import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import QuoteForm from "@/components/QuoteForm";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: "Request a quotation for customized 500 ml bottled water for your hotel, restaurant, hospital, event or business. Minimum order 500 bottles.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero"><div className="container contact-hero-inner"><span className="eyebrow eyebrow-light">CONTACT CUSTOMIZEBOTTLE</span><h1>Let's create a bottle<br /><em>that feels like yours.</em></h1><p>Tell us about your business, the quantity you need and how you'd like your bottles to look.</p><div className="contact-hero-points"><span><Icon name="check" size={16}/> Minimum order {siteConfig.minimumOrder}</span><span><Icon name="whatsapp" size={16}/> Direct WhatsApp inquiry</span></div></div></section>
      <section className="section contact-section"><div className="container contact-layout"><div className="contact-sidebar"><span className="eyebrow">WE'RE HERE TO HELP</span><h2>Start with a <em>conversation.</em></h2><p>Whether you already have a label design or are starting with an idea, share your requirements and we'll guide you through the next steps.</p><div className="contact-info-card"><span className="contact-info-icon"><Icon name="whatsapp" size={22}/></span><div><small>WHATSAPP INQUIRIES</small><a href={whatsappUrl("Hello CustomizeBottle, I would like to make an inquiry.")} target="_blank" rel="noreferrer">{siteConfig.whatsappDisplay}</a></div></div><div className="contact-info-card"><span className="contact-info-icon"><Icon name="pin" size={22}/></span><div><small>BASED IN</small><strong>{siteConfig.location}</strong></div></div><div className="contact-info-card"><span className="contact-info-icon"><Icon name="package" size={22}/></span><div><small>MINIMUM ORDER</small><strong>{siteConfig.minimumOrder} bottles</strong></div></div><a className="direct-whatsapp" href={whatsappUrl("Hello CustomizeBottle, I would like to discuss a customized bottled-water order.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18}/> Chat directly on WhatsApp <Icon name="arrow" size={17}/></a></div><div className="contact-form-card"><div className="contact-form-heading"><span className="eyebrow">REQUEST A QUOTE</span><h2>Tell us what you need.</h2><p>Complete the details below. Your inquiry will open in WhatsApp for you to review and send.</p></div><QuoteForm/></div></div></section>
    </>
  );
}
