"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icons";

type Item = {
  title: string;
  category: string;
  description: string;
  label: string;
  image: string;
  alt: string;
  icon: "hotel" | "restaurant" | "hospital" | "calendar" | "building" | "utensils";
};

const items: Item[] = [
  { title: "Hotel guest welcome", category: "Hotels", description: "A branded welcome detail for guest rooms, suites and hotel dining spaces.", label: "HOTEL COLLECTION", image: "https://images.unsplash.com/photo-1776876648949-63ccabf63b10?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", alt: "Premium hotel guest room and bedside water service", icon: "hotel" },
  { title: "Restaurant table setting", category: "Restaurants", description: "A custom-labelled bottle to complement your dining room and table presentation.", label: "DINING COLLECTION", image: "https://images.unsplash.com/photo-1765099271664-614c541196ef?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", alt: "Premium restaurant table prepared for guests", icon: "restaurant" },
  { title: "Clinic visitor areas", category: "Healthcare", description: "A clear, considered presentation for reception areas, visitors and clinic teams.", label: "CARE COLLECTION", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", alt: "Bright modern hospital reception area", icon: "hospital" },
  { title: "Wedding celebration", category: "Events", description: "A label idea to match the couple, host or celebration.", label: "CELEBRATION COLLECTION", image: "https://images.unsplash.com/photo-1763553113332-800519753e40?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", alt: "Elegant event hall set for a formal celebration", icon: "calendar" },
  { title: "Corporate meeting", category: "Corporate", description: "A coordinated look for conferences, meetings and business events.", label: "BUSINESS COLLECTION", image: "https://images.unsplash.com/photo-1777264935754-aa53096c2d68?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", alt: "Contemporary boardroom with a long meeting table", icon: "building" },
  { title: "Catering and events", category: "Events", description: "A branded detail for catering teams and hosted events.", label: "EVENT COLLECTION", image: "https://images.unsplash.com/photo-1773040835762-ace903c83f36?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=1400", alt: "Catering staff arranging a buffet", icon: "utensils" },
];

const filters = ["All", "Hotels", "Restaurants", "Healthcare", "Events", "Corporate"];

export default function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => active === "All" ? items : items.filter(item => item.category === active), [active]);
  return (
    <>
      <div className="portfolio-filters" role="group" aria-label="Filter concept examples">
        {filters.map(filter => (
          <button className={active === filter ? "portfolio-filter is-active" : "portfolio-filter"} key={filter} type="button" aria-pressed={active === filter} onClick={() => setActive(filter)}>{filter}</button>
        ))}
      </div>
      <div className="portfolio-grid" aria-live="polite">
        {visible.map((item, index) => (
          <article className="portfolio-card" key={item.title}>
            <div className="portfolio-image">
              <Image className="portfolio-photo" src={item.image} alt={item.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 1000px) 50vw, 33vw" loading="lazy" />
              <span className="portfolio-index">0{index + 1}</span>
              <span className="portfolio-concept">SETTING INSPIRATION</span>
              <span className="portfolio-water-icon"><Icon name={item.icon} size={30}/></span>
              <span className="portfolio-waterline">APNAAB · YOUR LABEL</span>
            </div>
            <div className="portfolio-card-copy"><span className="portfolio-label">{item.label}</span><h2>{item.title}</h2><p>{item.description}</p></div>
          </article>
        ))}
      </div>
    </>
  );
}
