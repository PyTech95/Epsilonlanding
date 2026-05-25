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

        {/* Certificate photo */}
        <div className="lg:col-span-7">
          <div
            className="aspect-[7/5] overflow-hidden relative bg-cream-alt shadow-[0_30px_60px_-30px_rgba(14,21,37,0.25)]"
            data-testid="certificate-mock"
          >
            <img
              src="/certificate.png"
              alt="Graduate holding Epsilon certificate of achievement"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Gold corner accents */}
            <div className="absolute top-4 left-4 w-10 h-px bg-gold" />
            <div className="absolute top-4 left-4 w-px h-10 bg-gold" />
            <div className="absolute bottom-4 right-4 w-10 h-px bg-gold" />
            <div className="absolute bottom-4 right-4 w-px h-10 bg-gold" />
            {/* Subtle caption chip */}
            <div className="absolute bottom-5 left-5 bg-ink/90 text-cream px-3 py-2 backdrop-blur-sm">
              <p className="font-mono text-[9px] uppercase tracking-widest text-gold mb-0.5">
                Certificate of Achievement
              </p>
              <p className="font-serif text-[13px] text-cream font-light">2026 · Live Programme</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
