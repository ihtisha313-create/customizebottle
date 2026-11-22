import Link from "next/link";
import { Icon } from "@/components/Icons";
import { siteConfig, whatsappUrl } from "@/lib/site";
import WaterBottleVisual from "@/components/WaterBottleVisual";

export default function HomeHeroSlideshow() {
  return (
    <section className="home-hero" aria-label="APNAAB introduction">
      <div className="home-hero-water" aria-hidden="true">
        <span className="home-hero-light home-hero-light-one" />
        <span className="home-hero-light home-hero-light-two" />
        <span className="home-hero-ripple home-hero-ripple-one" />
        <span className="home-hero-ripple home-hero-ripple-two" />
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none">
          <path d="M0 132 C160 40 280 202 470 132 S770 49 940 136 1230 184 1440 90 V260 H0Z" />
          <path d="M0 176 C180 229 315 96 502 160 S830 232 1010 156 1270 74 1440 166 V260 H0Z" />
        </svg>
      </div>
      <div className="container home-hero-grid">
        <div className="home-hero-content">
          <span className="home-hero-kicker"><i /> APNAAB · CUSTOM-BRANDED WATER FOR YOUR BUSINESS</span>
          <h1>Your Brand.<br /><em>On Every Bottle.</em></h1>
          <p>
            Custom-labelled 500 ml drinking water, thoughtfully presented for hotels,
            restaurants, clinics, celebrations and businesses.
          </p>
          <div className="home-hero-actions">
            <a className="button button-primary home-hero-quote" href={whatsappUrl("Hello APNAAB, I would like a quotation for custom-branded 500 ml bottled water.")} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={18} /> Request a Quote
            </a>
            <Link className="home-hero-explore" href="/bottles">Explore bottle options <Icon name="arrow" size={15} /></Link>
          </div>
          <div className="home-hero-proof">
            <span><Icon name="droplet" size={15} /> 500 ml format</span>
            <span><Icon name="package" size={15} /> Filled &amp; sealed</span>
            <span><Icon name="check" size={15} /> From {siteConfig.minimumOrder} bottles</span>
          </div>
        </div>
        <div className="home-hero-visual">
          <WaterBottleVisual label="APNAAB" caption="500 ML · CUSTOM LABEL" />
          <span className="home-water-note"><b>01</b> THE WATER, YOUR IDENTITY</span>
        </div>
      </div>
      <div className="home-hero-bottomline" aria-hidden="true"><span>DESIGNED TO BE REMEMBERED</span><i /><span>COORDINATED FROM PESHAWAR, PAKISTAN</span></div>
    </section>
  );
}
