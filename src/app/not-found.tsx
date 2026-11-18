import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="not-found-section">
      <div className="container not-found-content">
        <span className="not-found-code">404</span>
        <span className="eyebrow">PAGE NOT FOUND</span>
        <h1>This page seems to have <em>gone missing.</em></h1>
        <p>The link may be outdated or the page may have moved. Head back to CustomizeBottle or contact our team for help.</p>
        <div className="not-found-actions">
          <Link className="button button-primary" href="/">Back to home <Icon name="arrow" size={17}/></Link>
          <a className="button button-secondary" href={whatsappUrl("Hello CustomizeBottle, I found a broken link on your website and need help.")} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={18}/> Contact us</a>
        </div>
      </div>
    </section>
  );
}
