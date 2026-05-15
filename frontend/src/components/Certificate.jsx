import { Check } from "lucide-react";

export default function Certificate() {
  const points = [
    "Live, assessed programme — not pre-recorded",
    "80% minimum grade across all modules",
    "Capstone defence required to certify",
    "Verifiable digital + mailed physical copy",
  ];
  return (
    <section className="section bg-cream-alt" data-testid="certificate-section">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow-muted mb-6">The Certificate</p>
          <h2 className="display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink mb-8">
            A credential built on{" "}
            <span className="serif-italic text-gold">work</span>, not attendance.
          </h2>
          <p className="text-[16px] leading-[1.7] text-ink/75 mb-10 max-w-[520px]">
            On successful completion, you receive a verified digital certificate plus a physical
            certificate by mail — backed by a transcript-style performance scorecard.
          </p>
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px] text-ink/85">
                <span className="w-5 h-5 rounded-full border border-gold flex items-center justify-center mt-0.5 shrink-0">
                  <Check size={11} className="text-gold" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Certificate mock */}
        <div className="lg:col-span-7">
          <div
            className="aspect-[7/5] bg-cream border border-ink/15 shadow-[0_30px_60px_-30px_rgba(14,21,37,0.25)] p-10 md:p-14 relative overflow-hidden"
            data-testid="certificate-mock"
          >
            <div className="absolute top-6 left-6 right-6 bottom-6 border border-gold/30 pointer-events-none" />
            <div className="relative flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="logo-monogram serif-italic">ε</span>
                <div className="leading-none">
                  <p className="font-serif text-[14px] tracking-[0.22em] text-ink">EPSILON</p>
                  <p className="font-mono text-[8px] tracking-[0.32em] text-ink/60 mt-1">
                    EXECUTIVE EDUCATION
                  </p>
                </div>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink/60 mb-3">
                This is to certify that
              </p>
              <h3 className="font-serif serif-italic text-[36px] md:text-[44px] text-ink font-light mb-5">
                Your Name Here
              </h3>
              <p className="text-[14px] text-ink/70 mb-1">has successfully completed the</p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-1">
                Professional Certificate in
              </p>
              <p className="font-serif text-[22px] text-ink mb-2 font-light">
                Applied AI &amp; Machine Learning
              </p>
              <p className="text-[12px] font-mono uppercase tracking-widest text-ink/60">
                Cohort 01 · 2026
              </p>

              <div className="mt-auto flex items-end justify-between pt-6">
                <div>
                  <p className="font-serif text-[34px] text-gold serif-italic leading-none mb-2">ε</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ink/60">
                    Founder · K. O. Bhupathi
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-gold/40 flex items-center justify-center">
                  <span className="font-serif text-[22px] text-gold serif-italic">ε</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
