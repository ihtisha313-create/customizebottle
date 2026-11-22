import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  meta?: ReactNode;
  align?: "left" | "center";
};

export default function WaterHero({ eyebrow, title, description, meta, align = "left" }: Props) {
  return (
    <section className={align === "center" ? "page-hero water-page-hero is-centered" : "page-hero water-page-hero"}>
      <div className="water-hero-surface" aria-hidden="true">
        <span className="water-hero-glow" />
        <span className="water-hero-ripple water-hero-ripple-one" />
        <span className="water-hero-ripple water-hero-ripple-two" />
        <svg viewBox="0 0 1440 240" preserveAspectRatio="none">
          <path d="M0 124 C170 24 310 211 500 127 S790 46 970 133 1260 188 1440 84 V240 H0Z" />
          <path d="M0 166 C190 229 345 85 525 150 S840 223 1020 144 1280 65 1440 148 V240 H0Z" />
        </svg>
      </div>
      <div className="container page-hero-content water-page-hero-content">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {meta ? <div className="page-hero-meta">{meta}</div> : null}
      </div>
    </section>
  );
}
