import type { Metadata } from "next";
import { Icon } from "@/components/Icons";
import PortfolioGrid from "@/components/PortfolioGrid";
import WaterHero from "@/components/WaterHero";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio | Customized Bottle Design Concepts",
  description: "Explore illustrative customized bottled-water design concepts for hotels, restaurants, healthcare, weddings and corporate events.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <WaterHero
        eyebrow="OUR PORTFOLIO"
        title={<>Ideas that put<br /><em>your brand in view.</em></>}
        description="Explore visual directions for customized bottles across different business settings."
      />
      <section className="section">
        <div className="container">
          <div className="portfolio-intro">
            <div><span className="eyebrow">DESIGN INSPIRATION</span><h2>A starting point for <em>your own design.</em></h2></div>
            <p>These are illustrative concept examples, created to show possible styles and settings. They are not presented as completed customer projects or endorsements. Your artwork is developed around your approved business details.</p>
          </div>
          <PortfolioGrid />
          <div className="portfolio-note"><Icon name="info" size={18}/><p>All portfolio visuals are generated with lightweight water-motion artwork. They are illustrative inspiration, not photographs of completed customer orders. Final bottle appearance, label dimensions, materials and print specifications are confirmed in the order quotation.</p></div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div><span className="eyebrow">HAVE A DESIGN IN MIND?</span><h2>Let's make a label <em>for your business.</em></h2><p>Share your logo, preferred style and expected quantity.</p><span className="minimum-note">Minimum order: {siteConfig.minimumOrder} bottles</span></div>
          <a className="button button-primary button-large" href={whatsappUrl("Hello CustomizeBottle, I have a bottle label design idea and would like to discuss a customized order.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19}/> Discuss your design</a>
        </div>
      </section>
    </>
  );
}
