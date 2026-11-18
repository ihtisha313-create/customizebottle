import type { ReactNode, SVGProps } from "react";
type IconName = "arrow" | "whatsapp" | "menu" | "close" | "droplet" | "check" | "sparkle" | "truck" | "palette" | "shield" | "hotel" | "restaurant" | "hospital" | "calendar" | "building" | "utensils" | "phone" | "pin" | "clock" | "chevron" | "package" | "message" | "file" | "info";
export function Icon({ name, size = 20, ...props }: SVGProps<SVGSVGElement> & { name: IconName; size?: number }) {
  const common = { width:size,height:size,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round" as const,strokeLinejoin:"round" as const,...props };
  const paths: Record<IconName,ReactNode> = {
    arrow:<><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    whatsapp:<><path d="M20.5 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-4.8A8.4 8.4 0 1 1 20.5 11.5Z"/><path d="M8.3 8.4c.2-.5.5-.6.8-.6h.5c.2 0 .4 0 .5.4l.7 1.6c.1.3.1.4-.1.7l-.5.6c-.2.2-.2.4 0 .7.5.9 1.2 1.6 2.1 2.1.3.2.5.2.7 0l.7-.8c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1.1-.7 1.5-.5.4-1.1.6-1.8.4-1.1-.3-2.4-.9-3.7-2.1-1.5-1.4-2.4-3-2.7-4.1-.2-.7 0-1.2.4-1.5Z"/></>,
    menu:<><path d="M4 7h16M4 12h16M4 17h16"/></>,close:<><path d="m6 6 12 12M18 6 6 18"/></>,
    droplet:<><path d="M12 2.8S5.5 10 5.5 14.3a6.5 6.5 0 0 0 13 0C18.5 10 12 2.8 12 2.8Z"/><path d="M9 15.2a3.2 3.2 0 0 0 3 2.1"/></>,
    check:<path d="m5 12 4.5 4.5L19.5 6.5"/>,
    sparkle:<><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z"/><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></>,
    truck:<><path d="M3 6h11v11H3z"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="7.5" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/></>,
    palette:<><path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.5-3.3 1.9 1.9 0 0 1 1.5-3.2H18a3 3 0 0 0 3-3c0-4.7-4-8.5-9-8.5Z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7.5" r="1"/><circle cx="15" cy="8" r="1"/></>,
    shield:<><path d="M12 3 19 6v5.5c0 4.5-3 7.6-7 9.5-4-1.9-7-5-7-9.5V6l7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    hotel:<><path d="M3 20V5h18v15"/><path d="M3 10h18M8 10v10M16 10v10"/><path d="M7 7h2M15 7h2"/></>,
    restaurant:<><path d="M6 3v7M10 3v7M6 7h4M8 10v11"/><path d="M17 3c-2 2-2.5 5-2.5 8H19V3M16.5 11v10"/></>,
    hospital:<><path d="M4 21V5h16v16M2 21h20"/><path d="M12 8v7M8.5 11.5h7"/><path d="M8 5V3h8v2"/></>,
    calendar:<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    building:<><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/></>,
    utensils:<><path d="M7 3v7M4 3v4a3 3 0 0 0 6 0V3M7 10v11"/><path d="M17 3v18M17 3c2 2 3 4 3 7h-3"/></>,
    phone:<><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M10 6h4M11 18h2"/></>,
    pin:<><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,chevron:<path d="m7 10 5 5 5-5"/>,
    package:<><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="m4.3 7.6 7.7 4.4 7.7-4.4M12 21v-9"/><path d="m8 5.2 8 4.5"/></>,
    message:<><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.5-3A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 11h8M8 14h5"/></>,
    file:<><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></>,
    info:<><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></>,
  };
  return <svg aria-hidden="true" {...common}>{paths[name]}</svg>;
}
