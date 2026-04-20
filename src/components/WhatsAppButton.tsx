import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/data/products";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground pl-5 pr-6 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all animate-pulse-gentle group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-display font-bold text-sm hidden sm:inline">Talk to Us</span>
    </a>
  );
};

export default WhatsAppButton;
