import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511964813239"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all animate-pulse-soft group"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Falar no WhatsApp</span>
    </a>
  );
}
