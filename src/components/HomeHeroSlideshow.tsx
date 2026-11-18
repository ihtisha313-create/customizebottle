"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icons";
import { whatsappUrl } from "@/lib/site";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=3840&q=90",
    label: "THE BOTTLE",
    caption: "A clean, considered bottle presentation",
    alt: "Clear drinking-water bottle in soft natural studio light"
  },
  {
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=3840&q=90",
    label: "HOSPITALITY",
    caption: "A thoughtful detail in every guest welcome",
    alt: "Refined hotel interior prepared for a guest stay"
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=3840&q=90",
    label: "DINING",
    caption: "A polished addition to the dining table",
    alt: "Carefully arranged fine-dining restaurant table"
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=3840&q=90",
    label: "CELEBRATIONS",
    caption: "A personal touch for meaningful occasions",
    alt: "Elegant event setting with floral table arrangements"
  }
];

export default function HomeHeroSlideshow() {
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const paused = userPaused || hovered || focused || reducedMotion;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="home-hero"
      aria-label="CustomizeBottle introduction"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
    >
      <div className="home-hero-photos" aria-hidden="true">
        {slides.map((slide, index) => (
          <div className={"home-hero-photo" + (index === active ? " is-active" : "")} key={slide.src}>
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
      <div className="home-hero-vignette" aria-hidden="true" />
      <div className="home-hero-content">
        <span className="home-hero-eyebrow"><span /> CUSTOM-BRANDED BOTTLED WATER <i /> PESHAWAR, PAKISTAN</span>
        <h1>Your Brand.<br /><em>On Every Bottle.</em></h1>
        <p>
          Custom-labelled 500 ml drinking water, thoughtfully presented for hotels,
          restaurants, clinics, celebrations and businesses.
        </p>
        <div className="home-hero-actions">
          <a
            className="button button-primary home-hero-quote"
            href={whatsappUrl("Hello CustomizeBottle, I would like a quotation for custom-branded 500 ml bottled water.")}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="whatsapp" size={18} /> Request a Quote <Icon name="arrow" size={16} />
          </a>
          <a className="home-hero-explore" href="/bottles">Explore bottle options <Icon name="arrow" size={15} /></a>
        </div>
        <div className="home-hero-assurances">
          <span><Icon name="droplet" size={16} /> 500 ml format</span>
          <span><Icon name="palette" size={16} /> Your custom label</span>
          <span><Icon name="package" size={16} /> Filled, capped &amp; sealed</span>
          <span><Icon name="check" size={16} /> From 500 bottles</span>
        </div>
      </div>

      <div className="home-hero-controls" aria-label="Background photography controls">
        <span className="home-hero-caption">
          <b>{slides[active].label}</b>
          <span>{slides[active].caption}</span>
        </span>
        <div className="home-hero-progress" role="group" aria-label="Choose background image">
          {slides.map((slide, index) => (
            <button
              key={slide.label}
              type="button"
              className={"home-hero-progress-button" + (index === active ? " is-active" : "")}
              onClick={() => setActive(index)}
              aria-label={"Show " + slide.label.toLowerCase() + " background"}
              aria-pressed={index === active}
            >
              <span className="home-hero-progress-track">
                <span className={"home-hero-progress-fill" + (index === active && !paused ? " is-running" : "")} />
              </span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="home-hero-pause"
          onClick={() => setUserPaused((value) => !value)}
          aria-label={userPaused ? "Play background photography" : "Pause background photography"}
          aria-pressed={userPaused}
          disabled={reducedMotion}
          title={reducedMotion ? "Automatic motion is disabled by your device settings" : undefined}
        >
          <span aria-hidden="true">{userPaused ? "▶" : "Ⅱ"}</span>
        </button>
      </div>
      <div className="home-hero-bottom-rule" aria-hidden="true" />
    </section>
  );
}
