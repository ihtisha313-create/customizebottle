import Link from "next/link";
import { whatsappUrl } from "@/lib/site";
import WaterBottleVisual from "@/components/WaterBottleVisual";

export default function HomeHeroSlideshow() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="container home-hero-grid">
        <div className="home-hero-content">
          <h1 id="home-hero-title">Your Brand.<br /><em>On Every Bottle.</em></h1>
          <p>
            Custom-labelled 500 ml drinking water for hotels, restaurants, clinics,
            events and businesses. Share your logo and we’ll help create a bottle
            that feels like your brand.
          </p>
          <div className="home-hero-actions">
            <a className="button button-primary home-hero-quote" href={whatsappUrl("Hello APNAAB, I would like a quotation for custom-branded 500 ml bottled water.")} target="_blank" rel="noreferrer">Get a quote</a>
            <Link className="home-hero-explore" href="/bottles">View bottle details</Link>
          </div>
        </div>
        <div className="home-hero-visual" aria-label="APNAAB 500 ml custom-labelled bottled water">
          <WaterBottleVisual label="APNAAB" caption="" />
        </div>
      </div>
    </section>
  );
}
