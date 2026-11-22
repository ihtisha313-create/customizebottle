import { Icon } from "@/components/Icons";
import { whatsappUrl } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={whatsappUrl("Hello APNAAB, I am interested in customized bottled water. Please share more details.")} target="_blank" rel="noreferrer" aria-label="Chat with APNAAB on WhatsApp">
      <Icon name="whatsapp" size={25} />
      <span>Chat with us</span>
    </a>
  );
}
