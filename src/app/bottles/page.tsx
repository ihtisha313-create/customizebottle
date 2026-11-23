import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import WaterBottleVisual from "@/components/WaterBottleVisual";
import WaterHero from "@/components/WaterHero";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom-Labelled 500 ml Water Bottles | APNAAB",
  description: "Explore APNAAB's custom-labelled 500 ml drinking-water bottles, from label planning to complete filled, capped and sealed supply. Minimum order: 500 bottles.",
  alternates: { canonical: "/bottles" },
};

const details = [
  { title: "500 ml bottle", text: "A convenient size for guest rooms, dining tables, meetings and events.", icon: "droplet" as const },
  { title: "Custom label design", text: "A label planned around your logo, brand colours and approved details.", icon: "palette" as const },
  { title: "Filled, capped & sealed", text: "Your agreed bottle order, filled, capped and sealed with a custom label.", icon: "shield" as const },
  { title: "Order coordination", text: "Review the label, quantity, price and delivery arrangements before confirming.", icon: "truck" as const },
];

export default function BottlesPage() {
  return (
    <>
      <WaterHero
        eyebrow="OUR BOTTLES"
        title={<>One bottle.<br /><em>Made unmistakably yours.</em></>}
        description="500 ml drinking-water bottles with a label designed around your business or event."
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
            <h2>A familiar bottle.<br /><em>Your own identity.</em></h2>
            <p>For a hotel, restaurant, clinic or event, a custom-labelled bottle is a simple way to make your presentation feel more personal and consistent.</p>
            <div className="product-spec"><span>BOTTLE SIZE</span><strong>500 ml</strong><small>Ask us about other sizes or formats.</small></div>
            <div className="minimum-panel"><div><span>MINIMUM ORDER</span><strong>{siteConfig.minimumOrder} bottles</strong></div><Icon name="check" size={22}/></div>
            <a className="button button-primary" href={whatsappUrl("Hello APNAAB, please share a quotation for the 500 ml customized bottled-water option. I understand the minimum order is 500 bottles.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18}/> Get a quote for your bottles</a>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">WHAT YOUR ORDER INCLUDES</span>
            <h2>The complete bottle,<br /><em>with your label.</em></h2>
            <p>We’ll confirm the bottle details, label and delivery arrangements with you before you place the order.</p>
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
            <span className="eyebrow">MAKE THE LABEL YOURS</span>
            <h2>A label that feels<br /><em>like your brand.</em></h2>
            <p>Share your logo and preferred style. We’ll discuss a label that fits your business or event.</p>
          </div>
          <div className="label-ideas">
            <div className="label-idea label-idea-navy"><span>HOTEL COLLECTION</span><strong>Your Logo</strong><small>WELCOME · 500 ml</small></div>
            <div className="label-idea label-idea-light"><span>RESTAURANT COLLECTION</span><strong>Your Brand</strong><small>MADE FOR YOUR TABLE · 500 ml</small></div>
            <div className="label-idea label-idea-teal"><span>EVENT COLLECTION</span><strong>Your Occasion</strong><small>A PERSONAL TOUCH · 500 ml</small></div>
          </div>
          <p className="concept-disclaimer">These are visual examples, not completed customer orders. Your final label is prepared around the details you approve.</p>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <span className="eyebrow">READY WHEN YOU ARE</span>
            <h2>Let's plan your <em>first bottle order.</em></h2>
            <p>Tell us your business type, expected quantity and delivery city. We'll take it from there.</p>
          </div>
          <Link className="button button-primary button-large" href="/contact">Request a quote <Icon name="arrow" size={18}/></Link>
        </div>
      </section>
    </>
  );
}
