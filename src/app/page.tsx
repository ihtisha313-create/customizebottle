import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import HomeMotion from "@/components/HomeMotion";
import HomeHeroSlideshow from "@/components/HomeHeroSlideshow";
import { siteConfig, whatsappUrl } from "@/lib/site";

const industries = [
  { title: "Hotels & Hospitality", icon: "hotel" as const, text: "A considered welcome for guest rooms, suites and hospitality spaces.", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=2400&q=90", position: "center" },
  { title: "Restaurants & Cafés", icon: "restaurant" as const, text: "Bring your identity to the table with custom-labelled bottles.", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=90", position: "center" },
  { title: "Hospitals & Clinics", icon: "hospital" as const, text: "A clear, professional presentation for visitors and teams.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=2400&q=90", position: "center" },
  { title: "Weddings & Events", icon: "calendar" as const, text: "A personal finishing touch for celebrations and special occasions.", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2400&q=90", position: "center" },
  { title: "Corporate Gatherings", icon: "building" as const, text: "Custom-branded bottles for meetings, conferences and company events.", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90", position: "center" },
  { title: "Catering & Venues", icon: "utensils" as const, text: "A coordinated presentation for catering teams and venue service.", image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2400&q=90", position: "center" },
];

const steps = [
  { number: "01", title: "Tell us what you need", text: "Share your business type, city and estimated quantity.", icon: "message" as const },
  { number: "02", title: "Create your label direction", text: "Send your logo and brand details for a custom design concept.", icon: "palette" as const },
  { number: "03", title: "Review your quotation", text: "Confirm the design, quantity, timing and complete order price.", icon: "file" as const },
  { number: "04", title: "Approve the details", text: "We proceed only after the important order details are agreed.", icon: "check" as const },
  { number: "05", title: "Arrange your supply", text: "Coordinate preparation and delivery for your confirmed order.", icon: "truck" as const },
];

const benefits = [
  { number: "01", icon: "palette" as const, title: "Made around your brand", text: "Your logo, colours and business identity guide the label direction." },
  { number: "02", icon: "droplet" as const, title: "A complete bottle order", text: "The planned supply includes filling, capping, sealing and your custom label." },
  { number: "03", icon: "shield" as const, title: "Clear approval first", text: "Review the proposed design and quotation before confirming production." },
  { number: "04", icon: "truck" as const, title: "Straightforward coordination", text: "Discuss quantity, delivery city and timing before the order is confirmed." },
];

const photography = {
  bottle: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=2400&q=90",
  hotel: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1800&q=88",
  dining: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1800&q=88",
};

export default function HomePage() {
  return (
    <>
      <HomeMotion />
      <HomeHeroSlideshow />

      <section className="home-quick-facts">
        <div className="container home-quick-facts-grid">
          <div className="home-fact" data-reveal>
            <span className="home-fact-icon"><Icon name="droplet" size={20} /></span>
            <span className="home-fact-label">STANDARD BOTTLE</span>
            <strong>500 ml</strong>
            <small>Our current bottle format</small>
          </div>
          <div className="home-fact" data-reveal>
            <span className="home-fact-icon"><Icon name="palette" size={20} /></span>
            <span className="home-fact-label">LABEL DESIGN</span>
            <strong>Made for you</strong>
            <small>Artwork shaped around your brand</small>
          </div>
          <div className="home-fact" data-reveal>
            <span className="home-fact-icon"><Icon name="package" size={20} /></span>
            <span className="home-fact-label">COMPLETE SUPPLY</span>
            <strong>Filled &amp; sealed</strong>
            <small>Ready for your agreed order</small>
          </div>
          <div className="home-fact home-fact-location" data-reveal>
            <span className="home-fact-icon"><Icon name="pin" size={20} /></span>
            <span className="home-fact-label">BASED IN</span>
            <strong>Peshawar</strong>
            <small>Pakistan-wide business enquiries</small>
          </div>
        </div>
      </section>

      <section className="home-product-section">
        <div className="container home-product-grid">
          <div className="home-product-copy" data-reveal>
            <span className="home-section-kicker">A SMALL DETAIL. A LASTING IMPRESSION.</span>
            <h2>Make the everyday<br /><em>feel like your brand.</em></h2>
            <p>
              Give guests, customers and teams a bottled-water experience that feels considered from the first glance. We coordinate custom-labelled 500 ml drinking water as a complete supply—not labels alone.
            </p>
            <ul className="home-feature-list">
              <li><Icon name="check" size={17} /> Custom label direction using your brand details</li>
              <li><Icon name="check" size={17} /> Filled, capped and sealed bottle supply</li>
              <li><Icon name="check" size={17} /> Design and full quotation review before confirmation</li>
              <li><Icon name="check" size={17} /> Minimum order starts at {siteConfig.minimumOrder} bottles</li>
            </ul>
            <Link className="home-text-link" href="/bottles">Discover the 500 ml bottle option <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="home-photo-mosaic" data-reveal>
            <figure className="home-photo-main">
              <Image src={photography.bottle} alt="Clear drinking-water bottle photographed in soft natural light" fill sizes="(max-width: 820px) 100vw, 46vw" quality={88} />
              <figcaption><span>THE BOTTLE</span><strong>A clean canvas for your identity.</strong></figcaption>
            </figure>
            <figure className="home-photo-tile home-photo-hotel">
              <Image src={photography.hotel} alt="A calm, refined hospitality interior" fill sizes="(max-width: 820px) 48vw, 22vw" quality={86} />
              <figcaption><span>THE WELCOME</span></figcaption>
            </figure>
            <figure className="home-photo-tile home-photo-dining">
              <Image src={photography.dining} alt="Water glass and thoughtful table presentation" fill sizes="(max-width: 820px) 48vw, 22vw" quality={86} />
              <figcaption><span>THE TABLE</span></figcaption>
            </figure>
            <span className="home-photo-note">STOCK PHOTOGRAPHY · VISUAL INSPIRATION</span>
          </div>
        </div>
      </section>

      <section className="home-industries-section">
        <div className="container">
          <div className="home-section-heading" data-reveal>
            <div>
              <span className="home-section-kicker">BOTTLES FOR YOUR BUSINESS</span>
              <h2>One thoughtful detail.<br /><em>Many ways to welcome.</em></h2>
            </div>
            <p>From a hotel room to a wedding table, custom-branded bottled water can make your business presentation feel more complete.</p>
          </div>
          <div className="home-industry-grid">
            {industries.map((item, index) => (
              <Link href="/industries" className="home-industry-card" key={item.title} data-reveal>
                <div className="home-industry-image">
                  <Image src={item.image} alt={item.title + " setting"} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" quality={88} />
                </div>
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
          <div className="home-industry-footer">
            <span>Have a different business or event in mind?</span>
            <Link href="/contact">Tell us what you need <Icon name="arrow" size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="home-process-section">
        <div className="home-process-backdrop" />
        <div className="container">
          <div className="home-process-heading" data-reveal>
            <span className="home-section-kicker home-section-kicker-light">A CLEAR, FIVE-STEP JOURNEY</span>
            <h2>From first idea<br /><em>to finished bottles.</em></h2>
            <p>Good communication matters. We keep the details clear so you can review the proposed design and quotation before confirming an order.</p>
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
          <div className="home-process-link-wrap"><Link className="home-process-link" href="/how-it-works">View the ordering process <Icon name="arrow" size={15} /></Link></div>
        </div>
      </section>

      <section className="home-difference-section">
        <div className="container">
          <div className="home-section-heading home-difference-heading" data-reveal>
            <div>
              <span className="home-section-kicker">THE CUSTOMIZEBOTTLE APPROACH</span>
              <h2>Well presented.<br /><em>Clearly agreed.</em></h2>
            </div>
            <p>A custom bottle order should suit your identity, your quantity and the occasion. We discuss the details with you before anything is confirmed.</p>
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
              <span className="home-section-kicker home-section-kicker-light">LET'S PUT YOUR BRAND ON THE BOTTLE</span>
              <h2>Start with a conversation.<br /><em>We'll take it from there.</em></h2>
              <p>Tell us your business, delivery city and expected quantity. We'll guide you through the design and quotation steps.</p>
              <div className="home-cta-meta">
                <span><Icon name="check" size={15} /> 500 ml bottle format</span>
                <span><Icon name="check" size={15} /> Minimum {siteConfig.minimumOrder} bottles</span>
              </div>
            </div>
            <div className="home-cta-actions">
              <a className="button button-primary home-cta-button" href={whatsappUrl("Hello CustomizeBottle, I would like to discuss a custom-branded bottled-water order. Please guide me through the quotation process.")} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={19} /> Start a WhatsApp enquiry <Icon name="arrow" size={16} />
              </a>
              <Link className="home-cta-contact" href="/contact">Prefer the contact page? <span>Visit here <Icon name="arrow" size={14} /></span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
