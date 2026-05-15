import { Check } from "lucide-react";

export default function Overview() {
  const points = [
    "Analyse data more critically",
    "Question AI outputs with confidence",
    "Make better evidence-based decisions",
    "Translate technical work into clear executive action",
  ];
  return (
    <section className="section bg-cream" data-testid="overview-section">
      <div className="container-x">
        <p className="eyebrow-muted mb-6">Overview</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <h2 className="display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink mb-10">
              The professionals who win in the AI era are{" "}
              <span className="serif-italic text-gold">decision-fluent</span>, not just tool-fluent.
            </h2>
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=80"
                alt="Programme overview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <p className="text-[17px] leading-[1.75] text-ink/80 mb-8">
              Artificial intelligence is changing how work gets done, how value is created, and how
              professionals are judged. Indian employers are moving toward skills-first hiring —
              putting greater weight on practical capability than formal credentials. At the same
              time, they're signalling that technical familiarity alone is not enough.
            </p>
            <p className="text-[17px] leading-[1.75] text-ink/80 mb-10">
              Epsilon Executive Education — named for the difference between what is expected and
              what is actually achieved — is a live executive school for decision-makers in the AI
              era.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 border border-ink/10">
              {points.map((p, i) => (
                <div
                  key={p}
                  className={`flex items-start gap-3 p-5 ${
                    i % 2 === 0 ? "sm:border-r" : ""
                  } ${i < 2 ? "border-b" : ""} border-ink/10`}
                  data-testid={`overview-point-${i}`}
                >
                  <span className="w-6 h-6 rounded-full border border-gold flex items-center justify-center mt-0.5 shrink-0">
                    <Check size={12} className="text-gold" />
                  </span>
                  <p className="text-[15px] text-ink/85 leading-[1.45]">{p}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 border-l-2 border-gold pl-6">
              <span className="text-gold text-[28px] font-serif leading-none">"</span>
              <p className="font-serif serif-italic text-[22px] leading-[1.45] text-ink mt-1">
                Real professional value comes from judgement, adaptability, discipline and the
                ability to turn complex tools into credible business outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
