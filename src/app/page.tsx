import Link from "next/link";
import { Icon } from "@/components/Icons";
import HomeHeroSlideshow from "@/components/HomeHeroSlideshow";
import WaterBottleVisual from "@/components/WaterBottleVisual";
import { siteConfig, whatsappUrl } from "@/lib/site";

const industries = [
  { title: "Hotels & Hospitality", icon: "hotel" as const, text: "A considered welcome for guest rooms, suites and hospitality spaces.", image: "https://images.unsplash.com/photo-1776876648949-63ccabf63b10?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Premium hotel guest room with bottled water on a bedside table" },
  { title: "Restaurants & Cafés", icon: "restaurant" as const, text: "Bring your identity to the table with custom-labelled bottles.", image: "https://images.unsplash.com/photo-1765099271664-614c541196ef?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Elegant restaurant table setting and water service" },
  { title: "Hospitals & Clinics", icon: "hospital" as const, text: "A clear, professional presentation for visitors and teams.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Modern clinic reception and waiting area" },
  { title: "Weddings & Events", icon: "calendar" as const, text: "A personal finishing touch for celebrations and special occasions.", image: "https://images.unsplash.com/photo-1763553113332-800519753e40?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Elegant banquet hall prepared for a celebration" },
  { title: "Corporate Gatherings", icon: "building" as const, text: "Custom-branded bottles for meetings, conferences and company events.", image: "https://images.unsplash.com/photo-1777264935754-aa53096c2d68?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Premium corporate boardroom prepared for a meeting" },
  { title: "Catering & Venues", icon: "utensils" as const, text: "A coordinated presentation for catering teams and venue service.", image: "https://images.unsplash.com/photo-1773040835762-ace903c83f36?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Professional catering buffet service" },
];

const steps = [
  { number: "01", title: "Tell us about your order", text: "Share your business, delivery city, approximate quantity and label idea.", icon: "message" as const },
  { number: "02", title: "Shape your label", text: "Send your logo and preferred colours so we can discuss a label direction.", icon: "palette" as const },
  { number: "03", title: "Receive your quotation", text: "Review the product details, quantity, price and delivery arrangements.", icon: "file" as const },
  { number: "04", title: "Approve the details", text: "We move forward once the design and written quotation are approved.", icon: "check" as const },
  { number: "05", title: "Plan your delivery", text: "We coordinate order preparation and delivery around the agreed terms.", icon: "truck" as const },
];

const benefits = [
  { number: "01", icon: "palette" as const, title: "Designed around your brand", text: "Your logo, colours and business details guide the label design." },
  { number: "02", icon: "droplet" as const, title: "A complete bottle", text: "Your order includes the agreed water bottle, filling, cap, seal and custom label." },
  { number: "03", icon: "shield" as const, title: "Approve with confidence", text: "Review the proposed label and full quotation before confirming your order." },
  { number: "04", icon: "truck" as const, title: "Clear order coordination", text: "Agree on quantity, delivery city and timing before the order is confirmed." },
];

export default function HomePage() {
  return (
    <>
      <HomeHeroSlideshow />

      <section className="home-intent-section" aria-labelledby="home-intent-title">
        <div className="container">
          <div className="home-intent-heading">
            <span className="home-section-kicker">BRANDED WATER, MADE SIMPLE</span>
            <h2 id="home-intent-title">Where would you like to use your branded water?</h2>
            <p>From everyday hospitality to a one-day celebration, we’ll help you plan a bottle order that suits the occasion.</p>
          </div>
          <div className="home-intent-grid">
            <Link className="home-intent-card" href="/industries">
              <span className="home-intent-card-icon"><Icon name="building" size={21}/></span>
              <h3>For my business</h3>
              <p>For hotels, restaurants, clinics, offices and other customer-facing spaces.</p>
              <span>Explore business uses <Icon name="arrow" size={14}/></span>
            </Link>
            <Link className="home-intent-card" href="/industries">
              <span className="home-intent-card-icon"><Icon name="calendar" size={21}/></span>
              <h3>For an event</h3>
              <p>For weddings, celebrations, conferences and hosted events.</p>
              <span>Explore event ideas <Icon name="arrow" size={14}/></span>
            </Link>
            <Link className="home-intent-card" href="/contact">
              <span className="home-intent-card-icon"><Icon name="message" size={21}/></span>
              <h3>I need a quotation</h3>
              <p>Tell us how many bottles you need, where they are going and what you have in mind for the label.</p>
              <span>Request a quotation <Icon name="arrow" size={14}/></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-quick-facts water-glass-strip">
        <div className="container home-quick-facts-grid">
          <div className="home-fact" data-reveal>
            <span className="home-fact-icon"><Icon name="droplet" size={20} /></span>
            <span className="home-fact-label">BOTTLE SIZE</span>
            <strong>500 ml</strong>
            <small>Our current standard option</small>
          </div>
          <div className="home-fact" data-reveal>
            <span className="home-fact-icon"><Icon name="palette" size={20} /></span>
            <span className="home-fact-label">YOUR LABEL</span>
            <strong>Made for your brand</strong>
            <small>Your logo, colours and business details</small>
          </div>
          <div className="home-fact" data-reveal>
            <span className="home-fact-icon"><Icon name="package" size={20} /></span>
            <span className="home-fact-label">COMPLETE ORDER</span>
            <strong>Filled &amp; sealed</strong>
            <small>Prepared to the agreed specifications</small>
          </div>
          <div className="home-fact home-fact-location" data-reveal>
            <span className="home-fact-icon"><Icon name="pin" size={20} /></span>
            <span className="home-fact-label">BASED IN</span>
            <strong>Peshawar</strong>
            <small>Ask about delivery to your city</small>
          </div>
        </div>
      </section>

      <section className="home-product-section">
        <div className="container home-product-grid">
          <div className="home-product-copy" data-reveal>
            <span className="home-section-kicker">CUSTOM LABEL. COMPLETE BOTTLE.</span>
            <h2>Your brand belongs<br /><em>on every detail.</em></h2>
            <p>
              Bring your identity to the table with custom-labelled 500 ml drinking water. We coordinate the label and complete bottle supply—including filling, capping and sealing—around the details agreed in your quotation.
            </p>
            <ul className="home-feature-list">
              <li><Icon name="check" size={17} /> A label designed around your business</li>
              <li><Icon name="check" size={17} /> Filled, capped and sealed bottles</li>
              <li><Icon name="check" size={17} /> Review the design and quotation before confirming</li>
              <li><Icon name="check" size={17} /> Minimum order: {siteConfig.minimumOrder} bottles</li>
            </ul>
            <Link className="home-text-link" href="/bottles">See the 500 ml bottle details <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="home-product-water" data-reveal>
            <WaterBottleVisual label="APNAAB" caption="THE APNAAB SIGNATURE" />
            <div className="home-product-water-note"><span>01 / 03</span><strong>Water, shaped around your identity.</strong><small>Illustrative design direction</small></div>
          </div>
        </div>
      </section>

      <section className="home-industries-section">
        <div className="container">
          <div className="home-section-heading" data-reveal>
            <div>
              <span className="home-section-kicker">A BETTER FIT FOR YOUR BUSINESS</span>
              <h2>A thoughtful touch.<br /><em>For every kind of welcome.</em></h2>
            </div>
            <p>From a hotel room to a wedding reception, a bottle with your branding helps bring a more personal touch to the experience.</p>
          </div>
          <div className="home-industry-grid">
            {industries.map((item, index) => (
              <Link href="/industries" className="home-industry-card" key={item.title} data-reveal>
                <div className="home-industry-image" aria-hidden="true">
                  <img src={item.image} alt={item.imageAlt} width="960" height="640" loading="lazy" decoding="async" />
                </div>
                <div className="home-industry-shade" aria-hidden="true" />
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
          <div className="home-industry-footer">
            <span>Have a different business or event in mind?</span>
            <Link href="/contact">Tell us what you need <Icon name="arrow" size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="home-process-section">
        <div className="home-process-backdrop" aria-hidden="true"><span /><span /><span /></div>
        <div className="container">
          <div className="home-process-heading" data-reveal>
            <span className="home-section-kicker home-section-kicker-light">A SIMPLE FIVE-STEP PROCESS</span>
            <h2>From first conversation<br /><em>to your bottle order.</em></h2>
            <p>We keep each step clear, so you can review the label, product details and quotation before you decide to proceed.</p>
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
            <div>
              <span className="home-section-kicker">A CLEARER WAY TO ORDER</span>
              <h2>Your brand, well presented.<br /><em>Every detail agreed.</em></h2>
            </div>
            <p>Your order should fit your brand, quantity and occasion. We discuss the details with you first, so you know what is included before confirming.</p>
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
              <span className="home-section-kicker home-section-kicker-light">LET'S PLAN YOUR BOTTLE ORDER</span>
              <h2>Ready to put your name<br /><em>on every bottle?</em></h2>
              <p>Tell us about your business, delivery city and expected quantity. We’ll help you work through the label and quotation, one step at a time.</p>
              <div className="home-cta-meta">
                <span><Icon name="check" size={15} /> 500 ml bottle format</span>
                <span><Icon name="check" size={15} /> Minimum {siteConfig.minimumOrder} bottles</span>
              </div>
            </div>
            <div className="home-cta-actions">
              <a className="button button-primary home-cta-button" href={whatsappUrl("Hello APNAAB, I would like to discuss a custom-branded bottled-water order. Please guide me through the quotation process.")} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={19} /> Talk to us on WhatsApp <Icon name="arrow" size={16} />
              </a>
              <Link className="home-cta-contact" href="/contact">Prefer to send your details another way? <span>Visit here <Icon name="arrow" size={14} /></span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
