"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/Icons";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { whatsappUrl } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/bottles", label: "Bottles" },
  { href: "/industries", label: "Industries" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="APNAAB home" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Image src="/apnaab-symbol.svg" alt="" width={680} height={587} priority sizes="48px" /></span>
          <span className="brand-copy">
            <strong>APNAAB</strong>
            <small>YOUR NAME ON EVERY DROP</small>
          </span>
        </Link>
        <button className="mobile-menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? "close" : "menu"} size={23}/>
        </button>
        <nav className={"main-nav " + (open ? "is-open" : "")} aria-label="Main navigation">
          {links.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          <LanguageSwitcher />
          <a className="button button-primary nav-quote" href={whatsappUrl("Hello APNAAB, I would like to request a quotation for customized bottled water.")} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={17}/> Request a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
