"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://download.pakutaso.com/shared/img/thumb/petIMGL5660.jpg",
    alt: "Two clear, unbranded 500 ml bottled-water bottles photographed in a bright studio"
  },
  {
    src: "https://images.pexels.com/photos/11860563/pexels-photo-11860563.jpeg",
    alt: "Clear unbranded plastic drinking-water bottle with a blue cap on a white studio backdrop"
  },
  {
    src: "https://images.pexels.com/photos/11860559/pexels-photo-11860559.jpeg",
    alt: "Clear unbranded water bottle photographed against a clean blue studio background"
  }
];

export default function HomeHeroSlideshow() {
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  return (
    <section className="home-hero" aria-label="CustomizeBottle introduction">
      <div className="home-hero-photos" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            className={"home-hero-photo" + (index === active ? " is-active" : "")}
            key={slide.src}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              sizes="100vw"
              quality={88}
              priority={index === 0}
            />
          </div>
        ))}
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
