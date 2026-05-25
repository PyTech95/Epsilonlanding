import { ArrowRight } from "lucide-react";

export default function FinalCTA({ onApply, onCall, onBrochure }) {
  return (
    <section className="bg-ink text-cream py-28 md:py-36" data-testid="final-cta-section">
      <div className="container-x text-center max-w-[900px]">
        <p className="eyebrow !text-gold mb-7">Limited seats · Applications open</p>
        <h2 className="display-headline text-[40px] sm:text-[56px] lg:text-[72px] text-cream mb-10">
          Ready to think, build and decide{" "}
          <span className="serif-italic text-gold">in the AI era?</span>
        </h2>
        <p className="text-[17px] leading-[1.7] text-cream/75 mb-12 max-w-[640px] mx-auto">
          Apply now to secure your place in the next cohort. Speak with an advisor if you'd like to
          walk through fit, curriculum or payment plans.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button data-testid="final-apply-btn" onClick={onApply} className="btn-primary">
            Apply for the programme <ArrowRight size={16} />
          </button>
          <button
            data-testid="final-call-btn"
            onClick={onCall}
            className="inline-flex items-center gap-2 border border-cream/30 text-cream px-6 py-[14px] hover:bg-cream hover:text-ink transition-colors"
          >
            Schedule a call
          </button>
          <button
            data-testid="final-brochure-btn"
            onClick={onBrochure}
            className="text-cream/70 underline underline-offset-4 hover:text-cream px-3 py-[14px]"
          >
            Download brochure
          </button>
        </div>
      </div>
    </section>
  );
}
