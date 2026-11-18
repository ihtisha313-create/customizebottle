import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { siteConfig, whatsappUrl } from "@/lib/site";

const industries = [
  { title: "Hotels", icon: "hotel" as const, text: "A thoughtful branded touch for guest rooms, suites and hospitality spaces.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85" },
  { title: "Restaurants & Cafés", icon: "restaurant" as const, text: "Bring your restaurant identity to the table with custom-labelled bottles.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85" },
  { title: "Hospitals & Clinics", icon: "hospital" as const, text: "A consistent, professional presentation for your facility and visitors.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=85" },
  { title: "Wedding Halls", icon: "calendar" as const, text: "Personalized bottle labels that complement weddings and celebrations.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85" },
  { title: "Corporate Events", icon: "building" as const, text: "Custom-branded bottles for conferences, meetings and company events.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85" },
  { title: "Catering", icon: "utensils" as const, text: "A coordinated presentation for catering teams and special occasions.", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=85" },
];

const benefits = [
  { icon: "palette" as const, title: "Made around your brand", body: "Your logo, colours and business details shape the label design." },
  { icon: "droplet" as const, title: "Complete bottle supply", body: "A finished bottled-water order with filling, cap, seal and custom label." },
  { icon: "shield" as const, title: "Clear approvals", body: "Review the design and quotation before an order moves forward." },
  { icon: "truck" as const, title: "Delivery coordination", body: "We coordinate order preparation and delivery around your requirements." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-photo"><Image src={siteConfig.heroImage} alt="Clear bottled-water bottle in a natural premium setting" fill priority sizes="(max-width: 900px) 100vw, 55vw" /></div>
        <div className="hero-shade" />
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> CUSTOM-BRANDED BOTTLES &amp; SUPPLY</span>
            <h1>Your Brand.<br /><em>On Every Bottle.</em></h1>
            <p className="hero-description">Customized drinking-water bottles designed for hotels, restaurants, hospitals, events and businesses across Pakistan.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl("Hello CustomizeBottle, I would like a quotation for customized bottled water.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19} /> Get a Quote on WhatsApp</a>
              <Link className="button button-outline-light" href="/bottles">Explore Our Bottles <Icon name="arrow" size={17} /></Link>
            </div>
            <div className="hero-points">
              <span><Icon name="sparkle" size={17} /> Custom branding</span>
              <span><Icon name="shield" size={17} /> Design approval</span>
              <span><Icon name="truck" size={17} /> Delivery coordination</span>
            </div>
          </div>
          <div className="hero-caption"><span>01 / CUSTOM BOTTLE SOLUTIONS</span><strong>Make every bottle<br />part of your brand.</strong></div>
        </div>
        <div className="hero-bottom-note"><span>MINIMUM ORDER</span><strong>{siteConfig.minimumOrder} BOTTLES</strong></div>
      </section>
      <section className="intro-strip">
        <div className="container intro-strip-inner">
          <div><span className="eyebrow">A BETTER BRAND EXPERIENCE</span><h2>Every detail speaks for your business.</h2></div>
          <p>Turn an everyday essential into a thoughtful brand touchpoint with custom-designed bottled water for your customers, guests and teams.</p>
        </div>
      </section>
      <section className="section section-bottles" id="bottles">
        <div className="container bottles-feature">
          <div className="bottle-feature-copy">
            <span className="eyebrow">OUR BOTTLES</span>
            <h2>A bottle that<br /><em>carries your identity.</em></h2>
            <p>Start with our 500 ml option and make it yours with a label designed around your business. Each order is discussed and approved before production.</p>
            <ul className="check-list">
              <li><Icon name="check" size={18} /> Custom label design</li>
              <li><Icon name="check" size={18} /> Filled, capped and sealed supply</li>
              <li><Icon name="check" size={18} /> Minimum order of {siteConfig.minimumOrder} bottles</li>
            </ul>
            <Link href="/bottles" className="text-link">Explore bottle details <Icon name="arrow" size={17} /></Link>
          </div>
          <div className="bottle-feature-image">
            <Image src={siteConfig.heroImage} alt="Clear bottled-water bottle in a premium setting" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="image-note"><span className="image-note-mark"><Icon name="droplet" size={20} /></span><div><strong>500 ml</strong><small>Custom-branded bottle</small></div></div>
          </div>
        </div>
      </section>
      <section className="section section-industries">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">INDUSTRIES WE SERVE</span>
            <h2>Made for the way <em>you welcome people.</em></h2>
            <p>From guest rooms to grand celebrations, customized bottles can help your business create a more considered experience.</p>
          </div>
          <div className="industry-grid">
            {industries.map((item, index) => (
              <Link href="/industries" className="industry-card" key={item.title}>
                <div className="industry-photo"><Image src={item.image} alt={item.title + " setting"} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" unoptimized /></div>
                <div className="industry-overlay" />
                <div className="industry-card-content"><span className="industry-count">0{index + 1}</span><span className="industry-icon"><Icon name={item.icon} size={20} /></span><h3>{item.title}</h3><p>{item.text}</p><span className="industry-more">Explore solutions <Icon name="arrow" size={15} /></span></div>
              </Link>
            ))}
          </div>
          <div className="center-action"><Link className="button button-secondary" href="/industries">See all industries <Icon name="arrow" size={17} /></Link></div>
        </div>
      </section>
      <section className="section why-section">
        <div className="container">
          <div className="section-heading centered section-heading-light">
            <span className="eyebrow eyebrow-light">THE CUSTOMIZEBOTTLE DIFFERENCE</span>
            <h2>A simple process.<br /><em>A more personal finish.</em></h2>
            <p>We bring design, order coordination and customer communication together in one straightforward service.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map((item, index) => <div className="benefit-card" key={item.title}><span className="benefit-number">0{index + 1}</span><span className="benefit-icon"><Icon name={item.icon} size={23} /></span><h3>{item.title}</h3><p>{item.body}</p></div>)}
          </div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div><span className="eyebrow">LET'S CREATE YOUR BOTTLE</span><h2>Ready to put your<br /><em>brand on the table?</em></h2><p>Share your business details and expected quantity. We'll help you take the next step.</p><span className="minimum-note">Minimum order: {siteConfig.minimumOrder} bottles</span></div>
          <a className="button button-primary button-large" href={whatsappUrl("Hello CustomizeBottle, I am ready to discuss a customized bottled-water order. Please guide me through the quotation process.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={20} /> Start your inquiry <Icon name="arrow" size={18} /></a>
        </div>
      </section>
    </>
  );
}
