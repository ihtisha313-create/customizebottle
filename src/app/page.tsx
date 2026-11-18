import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import HomeMotion from "@/components/HomeMotion";
import { siteConfig, whatsappUrl } from "@/lib/site";

const industries = [
  { title: "Hotels", icon: "hotel" as const, text: "A considered detail for guest rooms, suites and hospitality spaces.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=88" },
  { title: "Restaurants & Cafés", icon: "restaurant" as const, text: "Bring your identity to the table with bottles designed around your brand.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=88" },
  { title: "Hospitals & Clinics", icon: "hospital" as const, text: "A consistent, professional presentation for visitors and care teams.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=88" },
  { title: "Weddings & Celebrations", icon: "calendar" as const, text: "A personal finishing touch for weddings, venues and special occasions.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=88" },
  { title: "Corporate Events", icon: "building" as const, text: "Custom-labeled bottles for conferences, meetings and company events.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=88" },
  { title: "Catering", icon: "utensils" as const, text: "Coordinated bottled-water presentation for catering and event teams.", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=88" },
];

const steps = [
  { number: "01", title: "Share your brief", text: "Tell us your business type, delivery city and expected quantity.", icon: "building" as const },
  { number: "02", title: "Shape your label", text: "Share your logo and brand direction for a custom label concept.", icon: "palette" as const },
  { number: "03", title: "Review the quote", text: "Discuss the design, quantity, timing and complete order quotation.", icon: "check" as const },
  { number: "04", title: "Approve the details", text: "Confirm the agreed specifications before the order proceeds.", icon: "shield" as const },
  { number: "05", title: "Coordinate delivery", text: "We coordinate preparation and delivery around the confirmed order.", icon: "truck" as const },
];

const benefits = [
  { number: "01", icon: "palette" as const, title: "Your identity, first", text: "A label direction built around your logo, colours and business—not a one-size-fits-all design." },
  { number: "02", icon: "droplet" as const, title: "Complete bottle supply", text: "The intended supply is filled, capped, sealed and finished with your custom label." },
  { number: "03", icon: "shield" as const, title: "Approval before action", text: "Review the proposed design and quotation before confirming the order." },
  { number: "04", icon: "truck" as const, title: "Clear order coordination", text: "Discuss quantity, delivery city and timing up front so expectations are clear." },
];

export default function HomePage() {
  return (
    <>
      <HomeMotion />
      <section className="home-hero">
        <Image
          className="home-hero-image"
          src={siteConfig.heroImage}
          alt="Premium studio arrangement of clear bottled-water bottles with blank custom-label panels"
          fill
          priority
          sizes="100vw"
        />
        <div className="home-hero-overlay" />
        <div className="home-hero-glow home-hero-glow-one" />
        <div className="home-hero-glow home-hero-glow-two" />
        <div className="container home-hero-content">
          <div className="home-hero-copy" data-reveal>
            <span className="home-eyebrow"><span className="home-eyebrow-dot" /> CUSTOM-BRANDED BOTTLED WATER</span>
            <h1>Your Brand.<br /><em>On Every Bottle.</em></h1>
            <p className="home-hero-description">
              Customized drinking-water bottles designed for hotels, restaurants, hospitals, events and businesses across Pakistan.
            </p>
            <div className="home-hero-actions">
              <a className="button button-primary home-primary-cta" href={whatsappUrl("Hello CustomizeBottle, I would like a quotation for customized bottled water.")} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={19} /> Request a Custom Quote <Icon name="arrow" size={16} />
              </a>
              <Link className="home-secondary-cta" href="/how-it-works">Discover the process <span><Icon name="arrow" size={15} /></span></Link>
            </div>
            <div className="home-hero-trust">
              <span><Icon name="droplet" size={17} /> 500 ml bottle format</span>
              <span><Icon name="palette" size={17} /> Custom label design</span>
              <span><Icon name="shield" size={17} /> Design approval first</span>
            </div>
          </div>
          <div className="home-hero-card" data-reveal>
            <span className="home-hero-card-kicker">MADE AROUND YOUR BRAND</span>
            <div className="home-hero-card-size">500<span>ml</span></div>
            <p>A clean, considered bottle format for your business and your guests.</p>
            <div className="home-hero-card-rule" />
            <div className="home-hero-card-bottom"><span>STARTING ORDER</span><strong>{siteConfig.minimumOrder} bottles</strong></div>
          </div>
        </div>
        <div className="home-hero-scroll"><span /> SCROLL TO EXPLORE</div>
        <div className="home-hero-index">CUSTOM LABELS <b> / </b> COMPLETE SUPPLY</div>
      </section>

      <section className="home-quick-facts">
        <div className="container home-quick-facts-grid">
          <div className="home-fact" data-reveal><span className="home-fact-label">THE BOTTLE FORMAT</span><strong>500 ml</strong><small>Our current standard option</small></div>
          <div className="home-fact" data-reveal><span className="home-fact-label">YOUR BRAND</span><strong>Custom label</strong><small>Artwork shaped around your identity</small></div>
          <div className="home-fact" data-reveal><span className="home-fact-label">THE FINISHED SUPPLY</span><strong>Filled &amp; sealed</strong><small>Complete bottled-water orders</small></div>
          <div className="home-fact home-fact-location" data-reveal><span className="home-fact-label">WHERE WE START</span><strong>Peshawar</strong><small>Serving business enquiries across Pakistan</small></div>
        </div>
      </section>

      <section className="home-product-section">
        <div className="container home-product-grid">
          <div className="home-product-copy" data-reveal>
            <span className="home-section-kicker">A COMPLETE BRAND TOUCHPOINT</span>
            <h2>More than a bottle.<br /><em>A part of your identity.</em></h2>
            <p>
              Put your business name where customers can see it. We coordinate custom-labeled 500 ml bottled water as a complete supply—not labels alone.
            </p>
            <ul className="home-feature-list">
              <li><Icon name="check" size={17} /> Custom label direction using your brand details</li>
              <li><Icon name="check" size={17} /> Filled, capped and sealed bottle supply</li>
              <li><Icon name="check" size={17} /> Design and quotation review before confirmation</li>
              <li><Icon name="check" size={17} /> Starting minimum order of {siteConfig.minimumOrder} bottles</li>
            </ul>
            <Link className="home-text-link" href="/bottles">Explore the bottle details <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="home-bottle-stage" data-reveal aria-label="Illustrative 3D-style display of three bottles with custom label concepts">
            <div className="home-stage-orbit home-stage-orbit-one" />
            <div className="home-stage-orbit home-stage-orbit-two" />
            <div className="home-stage-glint home-stage-glint-one" />
            <div className="home-stage-glint home-stage-glint-two" />
            <div className="home-bottle home-bottle-left"><span className="home-bottle-cap" /><span className="home-bottle-neck" /><span className="home-bottle-label">YOUR<br />BRAND</span></div>
            <div className="home-bottle home-bottle-center"><span className="home-bottle-cap" /><span className="home-bottle-neck" /><span className="home-bottle-label">CUSTOM<br />BOTTLE</span></div>
            <div className="home-bottle home-bottle-right"><span className="home-bottle-cap" /><span className="home-bottle-neck" /><span className="home-bottle-label">YOUR<br />IDENTITY</span></div>
            <div className="home-stage-floor" />
            <span className="home-stage-note">ILLUSTRATIVE LABEL CONCEPT</span>
            <div className="home-stage-info"><span>01 / LABEL DESIGN</span><strong>Made to feel like you.</strong></div>
          </div>
        </div>
      </section>

      <section className="home-industries-section">
        <div className="container">
          <div className="home-section-heading" data-reveal>
            <div>
              <span className="home-section-kicker">WHO WE WORK WITH</span>
              <h2>Designed for the moments<br /><em>your business creates.</em></h2>
            </div>
            <p>From a hotel welcome to a company event, make bottled water feel like a natural part of your brand experience.</p>
          </div>
          <div className="home-industry-grid">
            {industries.map((item, index) => (
              <Link href="/industries" className="home-industry-card" key={item.title} data-reveal>
                <div className="home-industry-image"><Image src={item.image} alt={item.title + " setting"} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>
                <div className="home-industry-shade" />
                <span className="home-industry-index">0{index + 1}</span>
                <div className="home-industry-copy">
                  <span className="home-industry-icon"><Icon name={item.icon} size={20} /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span className="home-industry-link">Explore solutions <Icon name="arrow" size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="home-industry-footer"><span>Have a different business in mind?</span><Link href="/contact">Tell us what you need <Icon name="arrow" size={15} /></Link></div>
        </div>
      </section>

      <section className="home-process-section">
        <div className="home-process-backdrop" />
        <div className="container">
          <div className="home-process-heading" data-reveal>
            <span className="home-section-kicker home-section-kicker-light">CLEAR FROM FIRST MESSAGE TO DELIVERY</span>
            <h2>A simple process.<br /><em>Thoughtful at every step.</em></h2>
            <p>We keep the important details visible, so you know what is being discussed before an order is confirmed.</p>
          </div>
          <div className="home-process-grid">
            {steps.map((step) => (
              <div className="home-process-step" key={step.number} data-reveal>
                <span className="home-process-number">{step.number}</span>
                <span className="home-process-icon"><Icon name={step.icon} size={22} /></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="home-process-link-wrap"><Link className="home-process-link" href="/how-it-works">See how ordering works <Icon name="arrow" size={15} /></Link></div>
        </div>
      </section>

      <section className="home-difference-section">
        <div className="container">
          <div className="home-section-heading home-difference-heading" data-reveal>
            <div><span className="home-section-kicker">THE CUSTOMIZEBOTTLE APPROACH</span><h2>Good presentation.<br /><em>Clear expectations.</em></h2></div>
            <p>A custom bottle order should look right, make sense for your business and be clearly agreed before it moves ahead.</p>
          </div>
          <div className="home-benefit-grid">
            {benefits.map((item) => (
              <article className="home-benefit-card" key={item.number} data-reveal>
                <span className="home-benefit-number">{item.number}</span>
                <span className="home-benefit-icon"><Icon name={item.icon} size={22} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta-panel" data-reveal>
            <div className="home-cta-watermark"><Icon name="droplet" size={220} /></div>
            <div className="home-cta-copy">
              <span className="home-section-kicker home-section-kicker-light">LET'S CREATE YOUR BOTTLE</span>
              <h2>Put your brand<br /><em>on the table.</em></h2>
              <p>Tell us your business, delivery city and expected quantity. We’ll help you take the next step.</p>
              <div className="home-cta-meta"><span><Icon name="check" size={15} /> 500 ml bottle format</span><span><Icon name="check" size={15} /> Minimum {siteConfig.minimumOrder} bottles</span></div>
            </div>
            <div className="home-cta-actions">
              <a className="button button-primary home-cta-button" href={whatsappUrl("Hello CustomizeBottle, I am ready to discuss a custom-branded bottled-water order. Please guide me through the quotation process.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19} /> Start a WhatsApp enquiry <Icon name="arrow" size={16} /></a>
              <Link className="home-cta-contact" href="/contact">Prefer the contact page? <span>Visit here <Icon name="arrow" size={14} /></span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
