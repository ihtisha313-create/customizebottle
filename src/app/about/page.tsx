import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import WaterBottleVisual from "@/components/WaterBottleVisual";
import WaterHero from "@/components/WaterHero";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About APNAAB | Custom Bottle Branding in Pakistan",
  description: "Meet APNAAB, a Peshawar-based service helping businesses plan custom-labelled 500 ml drinking-water bottles.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: "palette" as const, title: "A label that reflects you", text: "We shape the label around your logo, preferred colours and the information you want to display." },
  { icon: "message" as const, title: "Clear from the start", text: "We discuss the design, quotation and order details before you confirm anything." },
  { icon: "shield" as const, title: "Honest product details", text: "We keep product information clear and only confirm details that have been agreed for your order." },
];

export default function AboutPage() {
  return (
    <>
      <WaterHero
        eyebrow="ABOUT APNAAB"
        title={<>A little detail.<br /><em>A more personal welcome.</em></>}
        description="We help businesses make their bottled-water presentation feel like their own."
      />
      <section className="section">
        <div className="container about-intro">
          <div className="about-copy">
            <span className="eyebrow">A LITTLE ABOUT US</span>
            <h2>A straightforward service,<br /><em>built around your brand.</em></h2>
            <p>APNAAB is a Peshawar-based service for hotels, restaurants, clinics, wedding venues, event organisers and other businesses looking for custom-labelled drinking water.</p>
            <p>You can share your logo, brand colours, label information, quantity and delivery city with us. We discuss the design and confirm the product, price and delivery details in a quotation before you decide to proceed.</p>
            <p>Our current offer is a custom-labelled 500 ml bottle. The minimum order is {siteConfig.minimumOrder} bottles.</p>
            <div className="about-actions">
              <Link className="button button-primary" href="/contact">Discuss your order <Icon name="arrow" size={17}/></Link>
              <a className="text-link" href={whatsappUrl("Hello APNAAB, I would like to learn more about your customized bottled-water service.")} target="_blank" rel="noreferrer">Chat on WhatsApp <Icon name="whatsapp" size={17}/></a>
            </div>
          </div>
          <div className="about-water-stage">
            <WaterBottleVisual label="APNAAB" caption="A LITTLE DETAIL. YOUR WHOLE IDENTITY." />
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">HOW WE WORK</span>
            <h2>A good order starts with <em>clear details.</em></h2>
            <p>You should know what is included, what you have approved and what happens next. That is how we approach every inquiry.</p>
          </div>
          <div className="about-values">
            {values.map((item, i) => (
              <article className="about-value-card" key={item.title}>
                <span className="about-value-number">0{i + 1}</span>
                <span className="detail-icon"><Icon name={item.icon} size={23}/></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container about-bottom">
          <div>
            <span className="eyebrow">BASED IN PESHAWAR</span>
            <h2>Starting close to home. Ready to discuss your needs.</h2>
            <p>We’re based in Peshawar and welcome inquiries from businesses in other cities too. Delivery availability, cost and timing are confirmed individually in the quotation.</p>
          </div>
          <div className="about-stat">
            <strong>500</strong>
            <span>minimum bottles per order</span>
            <small>Current minimum order</small>
          </div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <span className="eyebrow">START A CONVERSATION</span>
            <h2>Let's talk about <em>your bottle order.</em></h2>
            <p>Share your business type, quantity and delivery city. We'll help you plan the next step.</p>
          </div>
          <a className="button button-primary button-large" href={whatsappUrl("Hello APNAAB, I would like to discuss a customized bottled-water order.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19}/> Contact the team</a>
        </div>
      </section>
    </>
  );
}
