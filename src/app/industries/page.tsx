import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import WaterHero from "@/components/WaterHero";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries | Custom Bottled Water for Businesses",
  description: "Customized bottled-water solutions for hotels, restaurants, hospitals, wedding halls, corporate events and catering businesses in Pakistan.",
  alternates: { canonical: "/industries" },
};

const sectors = [
  { title: "Hotels", note: "A welcoming detail for every stay.", body: "Offer guests a consistent brand experience in rooms, suites, meeting spaces and hospitality areas. Custom labels can reflect your hotel's name, visual identity and service style.", icon: "hotel" as const, examples: ["Guest rooms and suites", "Hotel restaurants and lounges", "Meetings and guest events"] },
  { title: "Restaurants & Cafés", note: "Your identity, right at the table.", body: "Bring your restaurant or café identity into the dining experience with customized bottles that complement your menu, interior and customer service.", icon: "restaurant" as const, examples: ["Restaurant tables", "Café service", "Private dining and catering"] },
  { title: "Hospitals & Clinics", note: "A consistent look across your facility.", body: "Create a coordinated bottled-water presentation for reception areas, visitor spaces, staff meetings and approved hospitality arrangements.", icon: "hospital" as const, examples: ["Visitor and reception areas", "Meetings and conferences", "Clinic hospitality spaces"] },
  { title: "Wedding Halls & Events", note: "A personal touch for special occasions.", body: "Add a customized detail to wedding celebrations, family events and formal gatherings. Labels can be designed around the couple, event theme or host identity.", icon: "calendar" as const, examples: ["Wedding receptions", "Family celebrations", "Formal functions"] },
  { title: "Corporate Events", note: "A branded detail for your next gathering.", body: "Keep your event presentation consistent with bottles customized for conferences, seminars, product launches and company meetings.", icon: "building" as const, examples: ["Conferences and seminars", "Company meetings", "Brand activations"] },
  { title: "Catering Businesses", note: "A coordinated finish for every service.", body: "Support your catering presentation with customized bottled water for corporate functions, celebrations and hospitality orders.", icon: "utensils" as const, examples: ["Corporate catering", "Private functions", "Off-site hospitality"] },
];

export default function IndustriesPage() {
  return (
    <>
      <WaterHero
        eyebrow="INDUSTRIES WE SERVE"
        title={<>Made for your<br /><em>kind of business.</em></>}
        description="Thoughtful, customized bottled-water presentation for the places people gather, work, dine and celebrate."
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHO WE WORK WITH</span>
            <h2>One service. <em>Many ways to make it yours.</em></h2>
            <p>Choose your industry to see how customized bottles can fit into your customer experience.</p>
          </div>
          <div className="industry-detail-grid">
            {sectors.map((sector, index) => (
              <article className="industry-detail-card" key={sector.title}>
                <div className={`industry-detail-image industry-water-panel water-tone-${index + 1}`} aria-hidden="true">
                  <span className="industry-water-wave" />
                  <span className="industry-water-index">0{index + 1}</span>
                  <span className="industry-water-icon"><Icon name={sector.icon} size={43}/></span>
                  <span className="industry-water-caption">WATER · BRAND · EXPERIENCE</span>
                </div>
                <div className="industry-detail-copy">
                  <span className="industry-detail-icon"><Icon name={sector.icon} size={20}/></span>
                  <span className="eyebrow">{sector.note}</span>
                  <h3>{sector.title}</h3>
                  <p>{sector.body}</p>
                  <ul className="simple-list">{sector.examples.map((example) => <li key={example}><Icon name="check" size={16}/>{example}</li>)}</ul>
                  <a className="text-link" href={whatsappUrl("Hello CustomizeBottle, I represent a " + sector.title + " business and would like to discuss customized bottled water.")} target="_blank" rel="noreferrer">Discuss your requirements <Icon name="arrow" size={16}/></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div>
            <span className="eyebrow">YOUR BUSINESS, YOUR BOTTLE</span>
            <h2>Don't see your industry? <em>Let's talk.</em></h2>
            <p>Share what you have in mind and we'll discuss a suitable customized bottle solution.</p>
            <span className="minimum-note">Current minimum order: {siteConfig.minimumOrder} bottles</span>
          </div>
          <a className="button button-primary button-large" href={whatsappUrl("Hello CustomizeBottle, I would like to discuss a customized bottled-water solution for my business.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19}/> Contact us</a>
        </div>
      </section>
    </>
  );
}
