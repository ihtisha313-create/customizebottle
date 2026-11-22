"use client";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icons";

type Item = { title: string; category: string; description: string; label: string; icon: "hotel" | "restaurant" | "hospital" | "calendar" | "building" | "utensils" };
const items: Item[] = [
  { title: "Hotel welcome concept", category: "Hotels", description: "A calm label direction for guest rooms and hospitality spaces.", label: "HOTEL COLLECTION", icon: "hotel" },
  { title: "Restaurant table concept", category: "Restaurants", description: "A clean presentation designed to complement a dining experience.", label: "DINING COLLECTION", icon: "restaurant" },
  { title: "Clinic hospitality concept", category: "Healthcare", description: "A clear design direction for clinics and visitor areas.", label: "CARE COLLECTION", icon: "hospital" },
  { title: "Wedding celebration concept", category: "Events", description: "A personal label direction for weddings and special occasions.", label: "CELEBRATION COLLECTION", icon: "calendar" },
  { title: "Corporate meeting concept", category: "Corporate", description: "A professional visual direction for conferences and company gatherings.", label: "BUSINESS COLLECTION", icon: "building" },
  { title: "Event service concept", category: "Events", description: "A versatile direction for catered functions and hosted events.", label: "EVENT COLLECTION", icon: "utensils" },
];
const filters = ["All", "Hotels", "Restaurants", "Healthcare", "Events", "Corporate"];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => active === "All" ? items : items.filter(item => item.category === active), [active]);
  return (
    <>
      <div className="portfolio-filters" role="group" aria-label="Filter concept examples">
        {filters.map(filter => <button className={active === filter ? "portfolio-filter is-active" : "portfolio-filter"} key={filter} type="button" aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>)}
      </div>
      <div className="portfolio-grid" aria-live="polite">
        {visible.map((item, index) => (
          <article className="portfolio-card" key={item.title}>
            <div className={`portfolio-image water-tone-${index + 1}`}>
              <span className="portfolio-water-ripple portfolio-water-ripple-one" />
              <span className="portfolio-water-ripple portfolio-water-ripple-two" />
              <span className="portfolio-index">0{index + 1}</span>
              <span className="portfolio-concept">CONCEPT EXAMPLE</span>
              <span className="portfolio-water-icon"><Icon name={item.icon} size={42}/></span>
              <span className="portfolio-waterline">CUSTOMIZEBOTTLE · 500 ML</span>
            </div>
            <div className="portfolio-card-copy"><span className="portfolio-label">{item.label}</span><h2>{item.title}</h2><p>{item.description}</p></div>
          </article>
        ))}
      </div>
    </>
  );
}
