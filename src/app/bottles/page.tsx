import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import WaterBottleVisual from "@/components/WaterBottleVisual";
import WaterHero from "@/components/WaterHero";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Bottles | Custom-Branded 500 ml Drinking Water",
  description: "Explore APNAAB's 500 ml customized bottled-water option, custom label design and complete bottle supply. Minimum order 500 bottles.",
  alternates: { canonical: "/bottles" },
};

const details = [
  { title: "500 ml bottle", text: "A practical size for hospitality, dining, events and business use.", icon: "droplet" as const },
  { title: "Custom label design", text: "A label concept built around your logo, colours and business information.", icon: "palette" as const },
  { title: "Filled, capped & sealed", text: "A complete bottled-water order prepared with filling, cap and tamper-evident seal.", icon: "shield" as const },
  { title: "Order coordination", text: "Confirm the design, quotation, quantity and delivery details before production.", icon: "truck" as const },
];

export default function BottlesPage() {
  return (
    <>
      <WaterHero
        eyebrow="OUR BOTTLES"
        title={<>One bottle.<br /><em>Your whole identity.</em></>}
        description="Custom-branded 500 ml drinking-water bottles, finished around your business."
        meta={<><span><Icon name="droplet" size={16}/> 500 ml option</span><span><Icon name="check" size={16}/> Custom label</span><span><Icon name="package" size={16}/> Minimum {siteConfig.minimumOrder} bottles</span></>}
      />
      <section className="section">
        <div className="container product-layout">
          <div className="product-image-wrap water-product-card">
            <WaterBottleVisual label="APNAAB" caption="CUSTOM-LABELLED · 500 ML" />
            <span className="product-image-tag">ILLUSTRATIVE PRODUCT VISUAL</span>
          </div>
          <div className="product-copy">
            <span className="eyebrow">THE 500 ML OPTION</span>
            <h2>Designed to carry <em>your brand.</em></h2>
            <p>Whether you welcome hotel guests, serve restaurant customers or host a special event, a customized bottle gives your business another opportunity to make a consistent impression.</p>
            <div className="product-spec"><span>STANDARD SIZE</span><strong>500 ml</strong><small>Other sizes can be discussed as future options.</small></div>
            <div className="minimum-panel"><div><span>MINIMUM ORDER QUANTITY</span><strong>{siteConfig.minimumOrder} bottles</strong></div><Icon name="check" size={22}/></div>
            <a className="button button-primary" href={whatsappUrl("Hello APNAAB, please share a quotation for the 500 ml customized bottled-water option. I understand the minimum order is 500 bottles.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18}/> Request a bottle quotation</a>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">WHAT'S INCLUDED</span>
            <h2>A complete bottle, <em>thoughtfully presented.</em></h2>
            <p>Discuss your preferred design and order details with our team before confirming.</p>
          </div>
          <div className="detail-grid">
            {details.map((item, index) => (
              <article className="detail-card" key={item.title}>
                <span className="detail-number">0{index + 1}</span>
                <span className="detail-icon"><Icon name={item.icon} size={23}/></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">YOUR LABEL, YOUR WAY</span>
            <h2>Make it unmistakably <em>yours.</em></h2>
            <p>We can discuss a label direction that suits your business identity.</p>
          </div>
          <div className="label-ideas">
            <div className="label-idea label-idea-navy"><span>HOTEL COLLECTION</span><strong>Your Logo</strong><small>WELCOME · 500 ml</small></div>
            <div className="label-idea label-idea-light"><span>RESTAURANT COLLECTION</span><strong>Your Brand</strong><small>MADE FOR YOUR TABLE · 500 ml</small></div>
            <div className="label-idea label-idea-teal"><span>EVENT COLLECTION</span><strong>Your Occasion</strong><small>A PERSONAL TOUCH · 500 ml</small></div>
          </div>
          <p className="concept-disclaimer">Illustrative label concepts only. Final artwork is prepared using your approved business details.</p>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <span className="eyebrow">READY TO GET STARTED?</span>
            <h2>Let's plan your <em>custom bottle order.</em></h2>
            <p>Start with your quantity, business type and preferred label direction.</p>
          </div>
          <Link className="button button-primary button-large" href="/contact">Request a quote <Icon name="arrow" size={18}/></Link>
        </div>
      </section>
    </>
  );
}
