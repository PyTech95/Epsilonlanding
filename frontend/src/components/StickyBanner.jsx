import { useEffect, useState } from "react";
import { ArrowRight, X, Calendar } from "lucide-react";

export default function StickyBanner({ onApply }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past ~600px
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      data-testid="sticky-banner"
      className={`fixed bottom-0 inset-x-0 z-30 transition-transform duration-500 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-ink text-cream border-t border-gold/40 shadow-[0_-20px_50px_-15px_rgba(14,21,37,0.4)]">
        <div className="container-x py-3 md:py-3.5 flex items-center gap-3 md:gap-6">
          {/* Animated dot */}
          <span className="hidden sm:flex w-2 h-2 rounded-full bg-gold shrink-0 relative">
            <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-60" />
          </span>

          {/* Scrolling info */}
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center gap-6 md:gap-10 anim-banner-scroll whitespace-nowrap">
              {[1, 2].map((dup) => (
                <div key={dup} className="flex items-center gap-6 md:gap-10 shrink-0">
                  <span className="font-mono text-[10.5px] md:text-[11.5px] uppercase tracking-[0.18em] text-cream/90 flex items-center gap-2">
                    <Calendar size={12} className="text-gold" />
                    Cohort 01 starts · 12-week live programme
                  </span>
                  <span className="font-mono text-[10.5px] md:text-[11.5px] uppercase tracking-[0.18em] text-gold">
                    Applications closing soon
                  </span>
                  <span className="font-mono text-[10.5px] md:text-[11.5px] uppercase tracking-[0.18em] text-cream/90">
                    Fee · ₹89,000
                  </span>
                  <span className="font-mono text-[10.5px] md:text-[11.5px] uppercase tracking-[0.18em] text-cream/90">
                    Live online · executive evenings
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            data-testid="sticky-apply-btn"
            onClick={onApply}
            className="inline-flex items-center gap-1.5 md:gap-2 bg-gold text-ink px-3 md:px-5 py-2 md:py-2.5 text-[12px] md:text-[13px] font-medium hover:bg-cream transition-colors whitespace-nowrap"
          >
            Apply Now
            <ArrowRight size={13} />
          </button>

          <button
            onClick={() => setDismissed(true)}
            data-testid="sticky-dismiss"
            className="w-7 h-7 inline-flex items-center justify-center text-cream/60 hover:text-cream"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
