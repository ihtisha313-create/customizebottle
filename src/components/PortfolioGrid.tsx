"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
type Item = {title:string;category:string;description:string;image:string;label:string};
const items:Item[] = [
 {title:"Hotel welcome concept",category:"Hotels",description:"A calm label direction for guest rooms and hospitality spaces.",image:"https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=88",label:"HOTEL COLLECTION"},
 {title:"Restaurant table concept",category:"Restaurants",description:"A clean presentation designed to complement a dining experience.",image:"https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?auto=format&fit=crop&w=1000&q=88",label:"DINING COLLECTION"},
 {title:"Clinic hospitality concept",category:"Healthcare",description:"A clear design direction for clinics and visitor areas.",image:"https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1000&q=88",label:"CARE COLLECTION"},
 {title:"Wedding celebration concept",category:"Events",description:"A personal label direction for weddings and special occasions.",image:"https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=88",label:"CELEBRATION COLLECTION"},
 {title:"Corporate meeting concept",category:"Corporate",description:"A professional visual direction for conferences and company gatherings.",image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=88",label:"BUSINESS COLLECTION"},
 {title:"Event service concept",category:"Events",description:"A versatile direction for catered functions and hosted events.",image:"https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=88",label:"EVENT COLLECTION"},
];
const filters = ["All","Hotels","Restaurants","Healthcare","Events","Corporate"];
export default function PortfolioGrid() {
 const [active,setActive] = useState("All");
 const visible = useMemo(()=>active==="All"?items:items.filter(item=>item.category===active),[active]);
 return <>
  <div className="portfolio-filters" role="group" aria-label="Filter concept examples">{filters.map(filter=><button className={active===filter?"portfolio-filter is-active":"portfolio-filter"} key={filter} type="button" aria-pressed={active===filter} onClick={()=>setActive(filter)}>{filter}</button>)}</div>
  <div className="portfolio-grid" aria-live="polite">{visible.map((item,index)=><article className="portfolio-card" key={item.title}>
   <div className="portfolio-image"><Image src={item.image} alt={item.title+" visual inspiration"} fill sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" unoptimized/><span className="portfolio-index">0{index+1}</span><span className="portfolio-concept">CONCEPT EXAMPLE</span></div>
   <div className="portfolio-card-copy"><span className="portfolio-label">{item.label}</span><h2>{item.title}</h2><p>{item.description}</p></div>
  </article>)}</div>
 </>;
}
