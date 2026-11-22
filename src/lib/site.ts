export const siteConfig = {
  name: "CustomizeBottle",
  domain: "https://customizebottle.vercel.app",
  plannedCustomDomain: "https://customisebottle.com",
  whatsappNumber: "923468889433",
  whatsappDisplay: "+92 346 888 9433",
  minimumOrder: 500,
  location: "Peshawar, Pakistan",
  tagline: "Your Brand. On Every Bottle.",
};

export function whatsappUrl(message?: string) {
  const base = "https://wa.me/" + siteConfig.whatsappNumber;
  return message ? base + "?text=" + encodeURIComponent(message) : base;
}
