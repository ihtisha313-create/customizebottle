import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import WaterHero from "@/components/WaterHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works | Custom Bottle Ordering Process",
  description: "A simple guide to ordering custom-labelled 500 ml bottled water, from sharing your logo to approving the quotation and arranging delivery.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  { number: "01", title: "Tell us what you need", text: "Tell us what kind of business or event the bottles are for, how many you need and where they should be delivered. You can send your logo on WhatsApp.", icon: "message" as const },
  { number: "02", title: "Plan your label", text: "Share your logo, colours and the wording you want on the label. If you already have artwork, send it as a reference.", icon: "palette" as const },
  { number: "03", title: "Review your quotation", text: "We set out the bottle details, label, quantity, price and delivery arrangements so you can review the complete quotation.", icon: "file" as const },
  { number: "04", title: "Approve the design and details", text: "Check the label artwork and order details carefully. We proceed only after you approve the design and written quotation.", icon: "check" as const },
  { number: "05", title: "Prepare and arrange delivery", text: "Your order is arranged to the agreed bottle, cap, seal and label specifications. We confirm the delivery destination and timing with you.", icon: "truck" as const },
];

const faqs = [
  { q: "What is the minimum order?", a: "The current minimum is 500 bottles per order. Tell us your expected quantity and delivery city when you contact us." },
  { q: "Which bottle size do you offer?", a: "Our current offer is a custom-labelled 500 ml drinking-water bottle. Ask us about other sizes; availability must be confirmed before we quote them." },
  { q: "What do you need from me for the label?", a: "Send your business name, logo, preferred colours and the wording you want displayed. You’ll have a chance to check the spelling and details before approving the final artwork." },
  { q: "Does the order include the filled bottle, cap and seal?", a: "Yes. The service is planned as a complete filled, capped, sealed and custom-labelled bottle order. The exact specifications will be written in your quotation for you to review." },
  { q: "How much will my bottles cost?", a: "The price depends on the bottle and label details, order quantity and delivery arrangements. Send us your requirements and we’ll prepare a quotation." },
  { q: "Do you deliver outside Peshawar?", a: "Let us know your city. We’ll confirm whether delivery is available, along with the cost and estimated timing, before accepting the order." },
  { q: "When will my order be prepared?", a: "We arrange preparation after you approve the final design and written quotation, subject to the agreed order terms." },
];

export default function HowItWorksPage() {
  return (
    <>
      <WaterHero
        eyebrow="HOW IT WORKS"
        title={<>From first message<br /><em>to your bottle order.</em></>}
        description="Know what to expect at each step, from your first inquiry to delivery planning."
        meta={<><span><Icon name="package" size={16}/> Minimum {siteConfig.minimumOrder} bottles</span><span><Icon name="check" size={16}/> Design approval first</span></>}
      />
      <section className="section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">HOW YOUR ORDER TAKES SHAPE</span>
            <h2>Five clear steps.<br /><em>One custom order.</em></h2>
            <p>We’ll guide you through the details and confirm the important parts with you before your order goes ahead.</p>
          </div>
          <div className="process-list">
            {steps.map((step, i) => (
              <article className="process-step" key={step.number}>
                <div className="process-step-marker"><span>{step.number}</span>{i !== steps.length - 1 && <i/>}</div>
                <div className="process-step-body"><span className="process-step-icon"><Icon name={step.icon} size={22}/></span><div><h2>{step.title}</h2><p>{step.text}</p></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">COMMON QUESTIONS</span>
            <h2>A few things you may <em>want to know.</em></h2>
            <p>Here are answers to questions customers often ask before requesting a quote.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details className="faq-item" key={faq.q} open={i === 0}><summary><span>{faq.q}</span><Icon name="chevron" size={19}/></summary><p>{faq.a}</p></details>
            ))}
          </div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div><span className="eyebrow">READY TO GET STARTED?</span><h2>Let's plan your <em>first order.</em></h2><p>Send us your expected quantity, label idea and delivery city to get started.</p></div>
          <Link href="/contact" className="button button-primary button-large">Request a quote <Icon name="arrow" size={18}/></Link>
        </div>
      </section>
    </>
  );
}
