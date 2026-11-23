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
        description="Browse visual inspiration for the kinds of businesses and events that can use custom-labelled bottles."
      />
      <section className="section">
        <div className="container">
          <div className="portfolio-intro">
            <div><span className="eyebrow">DESIGN INSPIRATION</span><h2>Find a direction for <em>your own label.</em></h2></div>
            <p>These photographs show the settings our service may suit. They are not photos of APNAAB customer orders or completed bottle designs. Your label is planned separately around your logo and the details you approve.</p>
          </div>
          <PortfolioGrid />
          <div className="portfolio-note"><Icon name="info" size={18}/><p>The photographs on this page are examples of business and event settings—not completed APNAAB customer projects. Your bottle label, product specifications and delivery details are discussed and confirmed in your quotation.</p></div>
        </div>
      </section>
      <section className="closing-cta">
        <div className="container closing-cta-inner">
          <div><span className="eyebrow">HAVE A LABEL IDEA?</span><h2>Let's shape a label <em>around your brand.</em></h2><p>Send us your logo, preferred look and expected quantity.</p><span className="minimum-note">Minimum order: {siteConfig.minimumOrder} bottles</span></div>
          <a className="button button-primary button-large" href={whatsappUrl("Hello APNAAB, I have a bottle label design idea and would like to discuss a customized order.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={19}/> Discuss your design</a>
        </div>
      </section>
    </>
  );
}
