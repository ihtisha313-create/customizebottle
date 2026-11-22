import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Read the general website and inquiry terms for APNAAB customized bottled-water orders.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="section legal-section">
      <div className="container legal-container">
        <span className="eyebrow">APNAAB</span>
        <h1>Terms &amp; <em>Conditions</em></h1>
        <p className="legal-lead">These general terms apply to use of this website and to initial discussions about customized bottle orders.</p>
        <div className="legal-updated">Website: {siteConfig.domain}</div>
        <article className="legal-content">
          <h2>1. Website information</h2>
          <p>This website introduces APNAAB's customized bottled-water service and provides a way to request a quotation. Product descriptions and water-motion visuals are for general information and design inspiration. Final product specifications are the details confirmed in the written quotation for an order.</p>
          <h2>2. Minimum order quantity</h2>
          <p>The current minimum order quantity shown on this website is {siteConfig.minimumOrder} bottles. Any exception must be agreed with APNAAB in writing before an order is accepted.</p>
          <h2>3. Quotations and pricing</h2>
          <p>Prices are not fixed by the website. A quotation is prepared according to the agreed bottle specifications, label requirements, order quantity and delivery arrangements. A WhatsApp inquiry is a request for information and is not, by itself, acceptance of an order or a confirmed price.</p>
          <h2>4. Artwork and customer approval</h2>
          <p>Customers are responsible for reviewing the spelling, logos, business names and other information supplied for their labels. The customer must approve the final artwork and written order details before production arrangements proceed. Any requested change after approval may affect timing or price and must be discussed before it is made.</p>
          <h2>5. Product and delivery details</h2>
          <p>The service is intended to supply complete filled, capped, sealed and customized bottles. The specific water, bottle, cap, seal, label, packaging, quantity, delivery location, timing and any applicable charges must be confirmed in the written quotation. Availability and delivery outside the initial service area are confirmed individually.</p>
          <h2>6. Compliance and product information</h2>
          <p>Product descriptions, quality information, regulatory details and any certifications must be supported by current documentation and confirmed before they are represented as applicable to an order. Nothing on this website should be read as a claim of a certification, approval or laboratory result that has not been verified.</p>
          <h2>7. Illustrative concept visuals</h2>
          <p>Water-motion graphics and design concepts on the website are illustrative visual elements. They do not represent completed customer orders, endorsements or guaranteed final product appearance.</p>
          <h2>8. Changes to these terms</h2>
          <p>These website terms may be updated as the service and website develop. Specific order terms agreed in a written quotation will govern the relevant order to the extent they differ from general website information.</p>
          <h2>9. Contact</h2>
          <p>For questions about these terms or to request a quotation, contact us through <a href={whatsappUrl("Hello APNAAB, I have a question about the website terms and conditions.")} target="_blank" rel="noreferrer">WhatsApp at {siteConfig.whatsappDisplay}</a>.</p>
        </article>
        <div className="legal-back"><Link href="/">Back to home</Link><Link href="/privacy-policy">Read Privacy Policy</Link></div>
      </div>
    </section>
  );
}
