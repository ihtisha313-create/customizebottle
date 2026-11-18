import Image from "next/image";
import Link from "next/link";

export default function HomeHeroSlideshow() {
  return (
    <section className="home-hero" aria-label="CustomizeBottle introduction">
      <div className="home-hero-photos" aria-hidden="true">
        <div className="home-hero-photo is-active">
          <Image
            src="/images/premium-water-bottle-splash.avif"
            alt=""
            fill
            sizes="100vw"
            quality={90}
            priority
          />
        </div>
      </div>
      <div className="home-hero-overlay" aria-hidden="true" />
      <div className="home-hero-content">
        <h1>Your Brand.<br /><em>On Every Bottle.</em></h1>
        <p>
          Custom-labelled 500 ml drinking water, thoughtfully presented for hotels,
          restaurants, clinics, celebrations and businesses.
        </p>
        <div className="home-hero-actions">
          <a
            className="button button-primary home-hero-quote"
            href="https://wa.me/923468889433?text=Hello%20CustomizeBottle%2C%20I%20would%20like%20a%20quotation%20for%20custom-branded%20500%20ml%20bottled%20water."
            target="_blank"
            rel="noreferrer"
          >
            Request a Quote
          </a>
          <Link className="home-hero-explore" href="/bottles">
            Explore bottle options
          </Link>
        </div>
      </div>
    </section>
  );
}
