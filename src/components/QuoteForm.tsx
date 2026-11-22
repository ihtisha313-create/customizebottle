"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { Icon } from "@/components/Icons";
import { siteConfig, whatsappUrl } from "@/lib/site";

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [businessType, setBusinessType] = useState("Hotel");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(String(siteConfig.minimumOrder));
  const [city, setCity] = useState("Peshawar");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !business.trim() || !city.trim()) {
      setError("Please complete your name, business name and delivery city.");
      return;
    }
    const amount = Number(quantity);
    if (!Number.isSafeInteger(amount) || amount < siteConfig.minimumOrder) {
      setError("The minimum order is " + siteConfig.minimumOrder + " bottles. Please enter " + siteConfig.minimumOrder + " or more.");
      return;
    }
    setError("");
    const message = [
      "Hello APNAAB, I would like to request a quotation.",
      "",
      "Name: " + name.trim(),
      "Business: " + business.trim(),
      "Business type: " + businessType,
      "Preferred contact number: " + (phone.trim() || "Not provided"),
      "Bottle size: 500 ml",
      "Estimated quantity: " + amount + " bottles",
      "Delivery city: " + city.trim(),
      "Additional requirements: " + (details.trim() || "I would like to discuss my requirements."),
    ].join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label className="form-field"><span>Your name *</span><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" autoComplete="name" maxLength={100} required /></label>
        <label className="form-field"><span>Business name *</span><input value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Hotel, restaurant or company" autoComplete="organization" maxLength={120} required /></label>
        <label className="form-field"><span>Business type</span><select value={businessType} onChange={(e) => setBusinessType(e.target.value)}><option>Hotel</option><option>Restaurant / Cafe</option><option>Hospital / Clinic</option><option>Wedding Hall</option><option>Corporate / Event</option><option>Catering</option><option>Other</option></select></label>
        <label className="form-field"><span>Preferred contact number</span><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Optional phone / WhatsApp" autoComplete="tel" maxLength={30} /></label>
        <label className="form-field"><span>Estimated quantity *</span><input type="number" min={siteConfig.minimumOrder} max="1000000" step="1" value={quantity} onChange={(e) => setQuantity(e.target.value)} required /><small>Minimum order: {siteConfig.minimumOrder} bottles</small></label>
        <label className="form-field"><span>Delivery city *</span><input value={city} onChange={(e) => setCity(e.target.value)} placeholder="e.g. Peshawar" autoComplete="address-level2" maxLength={100} required /></label>
        <label className="form-field form-field-full"><span>Tell us about your requirements</span><textarea value={details} onChange={(e) => setDetails(e.target.value)} rows={4} maxLength={800} placeholder="Share your preferred label style, logo details or any other requirements..." /></label>
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-primary form-submit" type="submit"><Icon name="whatsapp" size={19} /> Send inquiry on WhatsApp <Icon name="arrow" size={17} /></button>
      <p className="form-privacy">Your inquiry opens in WhatsApp. Review the message and send it when you are ready.</p>
    </form>
  );
}
