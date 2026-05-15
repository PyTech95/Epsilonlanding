import { ArrowRight } from "lucide-react";

export default function Outcome({ onApply }) {
  return (
    <section className="bg-cream py-24" data-testid="outcome-section">
      <div className="container-x">
        <div className="bg-ink text-cream p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow !text-gold mb-5">Outcome</p>
            <h3 className="font-serif text-[30px] md:text-[40px] leading-[1.15] font-light max-w-[700px]">
              Move into the next role with{" "}
              <span className="serif-italic text-gold">proof of work</span>.
            </h3>
            <p className="text-[16px] text-cream/75 mt-6 max-w-[640px] leading-[1.65]">
              Graduates step into Product Manager, Growth Manager, RevOps, FP&amp;A, Director of
              Analytics and AI Support roles — carrying a body of work that shows they can think,
              build and decide in an AI-enabled workplace.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              data-testid="outcome-apply-btn"
              onClick={onApply}
              className="inline-flex items-center gap-2 bg-gold text-ink px-6 py-4 hover:bg-cream transition-colors"
            >
              Apply for the cohort <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
