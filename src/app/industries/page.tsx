import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import WaterHero from "@/components/WaterHero";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries | Custom Bottled Water for Businesses",
  description: "Custom-labelled 500 ml drinking water for hotels, restaurants, clinics, wedding venues, corporate gatherings and catering businesses across Pakistan.",
  alternates: { canonical: "/industries" },
};

const sectors = [
  { title: "Hotels", note: "A thoughtful welcome for your guests.", body: "Make the guest experience feel more considered with bottles carrying your hotel's name, colours and identity. Suitable placements can include guest rooms, dining areas and meeting spaces.", icon: "hotel" as const, image: "https://images.unsplash.com/photo-1776876648949-63ccabf63b10?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Premium hotel guest room with bottled water on a bedside table", examples: ["Guest rooms and suites", "Hotel restaurants and lounges", "Meetings and guest events"] },
  { title: "Restaurants & Cafés", note: "Put your brand on the table.", body: "Give your tables a more personal finish with bottles labelled for your restaurant or café. Share your logo and preferred look, and we’ll discuss a label that suits your setting.", icon: "restaurant" as const, image: "https://images.unsplash.com/photo-1765099271664-614c541196ef?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Upscale restaurant dining table and water service", examples: ["Restaurant tables", "Café service", "Private dining and catering"] },
  { title: "Hospitals & Clinics", note: "A considered touch for visitors.", body: "Create a consistent presentation for reception areas, visitor spaces, meetings and hospitality settings, with labels that reflect your clinic or facility.", icon: "hospital" as const, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Bright hospital reception with a clean, modern service counter", examples: ["Visitor and reception areas", "Meetings and conferences", "Clinic hospitality spaces"] },
  { title: "Wedding Halls & Events", note: "A personal detail for the day.", body: "Give your celebration a personal touch with bottles labelled for the couple, host or event. Share the event details and preferred style when requesting a quote.", icon: "calendar" as const, image: "https://images.unsplash.com/photo-1763553113332-800519753e40?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Elegant formal event hall with banquet tables", examples: ["Wedding receptions", "Family celebrations", "Formal functions"] },
  { title: "Corporate Events", note: "Make your event feel cohesive.", body: "Bring your branding into conferences, seminars, launches and company meetings with custom-labelled bottles prepared for your event.", icon: "building" as const, image: "https://images.unsplash.com/photo-1777264935754-aa53096c2d68?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Refined boardroom prepared for an executive meeting", examples: ["Conferences and seminars", "Company meetings", "Brand activations"] },
  { title: "Catering Businesses", note: "A neat finish for every event.", body: "Add a consistent branded detail to catered functions, private celebrations and hospitality orders.", icon: "utensils" as const, image: "https://images.unsplash.com/photo-1773040835762-ace903c83f36?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", imageAlt: "Catering team serving a fresh buffet spread", examples: ["Corporate catering", "Private functions", "Off-site hospitality"] },
];

export default function IndustriesPage() {
  return (
    <>
      <WaterHero
        eyebrow="INDUSTRIES WE SERVE"
        title={<>Made for your<br /><em>kind of business.</em></>}
        description="Custom-labelled drinking water for the places people stay, dine, work and celebrate."
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHO WE WORK WITH</span>
            <h2>One simple idea.<br /><em>Made to fit your setting.</em></h2>
            <p>Explore a few ways custom-labelled bottles can work for your business or event.</p>
          </div>
          <div className="industry-detail-grid">
            {sectors.map((sector, index) => (
              <article className="industry-detail-card" key={sector.title}>
                <div className={`industry-detail-image industry-water-panel water-tone-${index + 1}`}>
                  <img className="industry-detail-photo" src={sector.image} alt={sector.imageAlt} width="960" height="720" loading="lazy" decoding="async" />
                  <span className="industry-water-index">0{index + 1}</span>
                  <span className="industry-water-icon"><Icon name={sector.icon} size={43}/></span>
                  <span className="industry-water-caption">APNAAB · CUSTOM-LABELLED WATER</span>
                </div>
                <div className="industry-detail-copy">
                  <span className="industry-detail-icon"><Icon name={sector.icon} size={20}/></span>
                  <span className="eyebrow">{sector.note}</span>
                  <h3>{sector.title}</h3>
                  <p>{sector.body}</p>
                  <ul className="simple-list">{sector.examples.map((example) => <li key={example}><Icon name="check" size={16}/>{example}</li>)}</ul>
                  <a className="text-link" href={whatsappUrl("Hello APNAAB, I represent a " + sector.title + " business and would like to discuss customized bottled water.")} target="_blank" rel="noreferrer">Discuss your order <Icon name="arrow" size={16}/></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <span className="eyebrow">YOUR BUSINESS. YOUR BOTTLE.</span>
            <h2>Have another use in mind? <em>Let's talk.</em></h2>
            <p>Tell us where you plan to use the bottles and what quantity you need. We’ll help you plan the next step.</p>
            <span className="minimum-note">Minimum order: {siteConfig.minimumOrder} bottles</span>
          </div>
          <a className="button button-primary button-large" href={whatsappUrl("Hello APNAAB, I would like to discuss a customized bottled-water solution for my business.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19}/> Talk to our team</a>
        </div>
      </section>
    </>
  );
}
