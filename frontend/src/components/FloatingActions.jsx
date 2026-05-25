import { Phone, MessageCircle } from "lucide-react";

export const PHONE = "+919876543210";
export const PHONE_DISPLAY = "+91 98765 43210";
export const WHATSAPP =
  "https://wa.me/919876543210?text=Hi%20Epsilon%2C%20I%27d%20like%20to%20know%20more%20about%20the%20programme.";

export default function FloatingActions() {
  return (
    <div
      data-testid="floating-actions"
      className="md:hidden fixed right-4 z-30 flex flex-col gap-3"
      style={{ bottom: "140px" }}
    >
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="floating-whatsapp"
        aria-label="WhatsApp us"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform"
      >
        <MessageCircle size={20} strokeWidth={2} />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
      </a>
      <a
        href={`tel:${PHONE}`}
        data-testid="floating-call"
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-gold text-ink flex items-center justify-center shadow-[0_10px_30px_-5px_rgba(184,148,90,0.7)] hover:scale-110 transition-transform"
      >
        <Phone size={18} strokeWidth={2} />
      </a>
    </div>
  );
}
