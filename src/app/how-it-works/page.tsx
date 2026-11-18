import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { siteConfig } from "@/lib/site";
export const metadata:Metadata={title:"How It Works | Custom Bottle Ordering Process",description:"See how to order customized drinking-water bottles, from sharing your logo and approving the design to quotation and delivery coordination.",alternates:{canonical:"/how-it-works"}};
const steps=[
 {number:"01",title:"Share your requirements",text:"Tell us your business type, delivery city, estimated quantity and label preferences. You can share your logo and business details through WhatsApp.",icon:"message" as const},
 {number:"02",title:"Discuss your label direction",text:"We discuss how your logo, colours and approved information can be arranged on the label. Existing artwork can be shared as a starting point.",icon:"palette" as const},
 {number:"03",title:"Review the quotation",text:"We confirm the product details, quantity, label requirements, pricing and delivery arrangements in a quotation for your review.",icon:"file" as const},
 {number:"04",title:"Approve before production",text:"You review the final label artwork and written order details. Production is arranged only after the agreed design and quotation are approved.",icon:"check" as const},
 {number:"05",title:"Order preparation and delivery",text:"The confirmed order is prepared with the agreed bottled-water, cap, seal and label specifications. Delivery timing and destination are coordinated with you.",icon:"truck" as const},
];
const faqs=[
 {q:"What is the minimum order quantity?",a:"The current minimum order is 500 bottles per order. Contact us to discuss your expected quantity and delivery city."},
 {q:"Which bottle size is currently featured?",a:"Our starting offer is a 500 ml customized drinking-water bottle. Any additional size or format must be confirmed before it is advertised or quoted."},
 {q:"What do I need to provide for the label?",a:"You can share your business name, logo, preferred colours and the exact information you want displayed. Please check spelling and details before approving final artwork."},
 {q:"Does the order include water, a cap and a seal?",a:"The service is planned around complete filled, capped, sealed and custom-labelled bottles. Exact product specifications are listed in the quotation before you confirm an order."},
 {q:"How much does a customized bottle cost?",a:"Pricing depends on the agreed bottle and label specifications, quantity and delivery arrangements. We provide a quotation after understanding your requirements."},
 {q:"Can you deliver outside Peshawar?",a:"Share your delivery city with your inquiry. Availability, delivery cost and timing are confirmed individually before an order is accepted."},
 {q:"When does production start?",a:"Production arrangements begin after you have reviewed and approved the final design and written quotation, subject to the agreed order terms."},
];
export default function HowItWorksPage(){return <>
 <section className="page-hero"><div className="page-hero-bg"><Image src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=2000&q=88" alt="Clear drinking-water bottle" fill priority sizes="100vw" unoptimized/></div><div className="page-hero-shade"/><div className="container page-hero-content"><span className="eyebrow eyebrow-light">HOW IT WORKS</span><h1>From your idea<br/><em>to your bottle.</em></h1><p>A straightforward process that keeps you informed at every important step.</p><div className="page-hero-meta"><span><Icon name="package" size={16}/> Minimum {siteConfig.minimumOrder} bottles</span><span><Icon name="check" size={16}/> Design approval first</span></div></div></section>
 <section className="section"><div className="container"><div className="section-heading centered"><span className="eyebrow">THE ORDERING JOURNEY</span><h2>Five steps to a <em>customized order.</em></h2><p>We keep the process clear, so you know what is needed from the first inquiry to delivery coordination.</p></div><div className="process-list">{steps.map((step,i)=><article className="process-step" key={step.number}><div className="process-step-marker"><span>{step.number}</span>{i!==steps.length-1&&<i/>}</div><div className="process-step-body"><span className="process-step-icon"><Icon name={step.icon} size={22}/></span><div><h2>{step.title}</h2><p>{step.text}</p></div></div></article>)}</div></div></section>
 <section className="section soft-section"><div className="container"><div className="section-heading centered"><span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span><h2>Before you <em>place an inquiry.</em></h2><p>Helpful answers to common questions about customized bottle orders.</p></div><div className="faq-list">{faqs.map((faq,i)=><details className="faq-item" key={faq.q} open={i===0}><summary><span>{faq.q}</span><Icon name="chevron" size={19}/></summary><p>{faq.a}</p></details>)}</div></div></section>
 <section className="closing-cta"><div className="container closing-cta-inner"><div><span className="eyebrow">HAVE YOUR REQUIREMENTS READY?</span><h2>Let's discuss your <em>first order.</em></h2><p>Send us your expected quantity and delivery city to begin.</p></div><Link href="/contact" className="button button-primary button-large">Request a quote <Icon name="arrow" size={18}/></Link></div></section>
 </>}
