import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy Policy", description: "Learn how the CustomizeBottle website handles information shared through quotation inquiries and WhatsApp contact links.", alternates: { canonical: "/privacy-policy" } };
export default function PrivacyPolicyPage() {
  return (
    <section className="section legal-section">
      <div className="container legal-container">
        <span className="eyebrow">CUSTOMIZEBOTTLE</span>
        <h1>Privacy <em>Policy</em></h1>
        <p className="legal-lead">This page explains what happens when you visit our website or use its inquiry features.</p>
        <div className="legal-updated">Website: {siteConfig.domain}</div>
        <article className="legal-content">
          <h2>1. Information you choose to share</h2>
          <p>The quotation form asks for details such as your name, business name, business type, estimated order quantity, delivery city and additional requirements. The information is used to prepare a message for you to review in WhatsApp.</p>
          <h2>2. WhatsApp inquiries</h2>
          <p>When you select a WhatsApp contact or submit the quotation form, your browser opens WhatsApp with a prepared message. The message is not sent until you choose to send it in WhatsApp. Information you send through WhatsApp is handled by WhatsApp under its own terms and privacy policy.</p>
          <h2>3. Website storage</h2>
          <p>This website does not provide customer accounts, online payments or a database-backed inquiry submission service. The quotation form formats the inquiry in your browser and opens WhatsApp; it does not submit the form contents to a CustomizeBottle website database. When you choose Urdu, the site saves that language preference in your browser's local storage so it can remember your choice on a later visit. That preference is not sent to CustomizeBottle.</p>
          <h2>4. Technical information</h2>
          <p>The website is hosted by a third-party hosting provider. The provider may process technical information such as IP address, browser details and request logs as needed to deliver, secure and maintain the website. We have not added advertising trackers or an analytics profile to the current website.</p>
          <h2>5. Visual design and external services</h2>
          <p>The water-motion backgrounds and decorative surfaces on this website are rendered locally by CSS and SVG. They do not load stock-photo galleries or looping background-video files. WhatsApp links open an external service, which may process information according to its own policies.</p>
          <h2>6. Sharing and sensitive information</h2>
          <p>Do not include passwords, payment card information, identity documents or other sensitive personal information in a quotation inquiry. We do not sell inquiry details. We may use the details you choose to share to respond to your business inquiry and discuss the requested order.</p>
          <h2>7. Updates</h2>
          <p>This policy may be updated when website features or business practices change. The current version will be published on this page.</p>
          <h2>8. Questions</h2>
          <p>For a privacy-related question, contact us through <a href={whatsappUrl("Hello CustomizeBottle, I have a question about the website privacy policy.")} target="_blank" rel="noreferrer">WhatsApp at {siteConfig.whatsappDisplay}</a>.</p>
        </article>
        <div className="legal-back"><Link href="/">Back to home</Link><Link href="/terms">Read Terms &amp; Conditions</Link></div>
      </div>
    </section>
  );
}
