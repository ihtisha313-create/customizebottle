"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=3840&q=90",
    alt: "Clear drinking-water bottle in soft natural studio light"
  },
  {
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=3840&q=90",
    alt: "Refined hotel interior prepared for a guest stay"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=3840&q=90",
    alt: "Carefully arranged fine-dining restaurant table"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=3840&q=90",
    alt: "Elegant event setting with floral table arrangements"
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
