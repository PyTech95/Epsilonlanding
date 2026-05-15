export default function Curriculum() {
  const modules = [
    {
      n: "01",
      weeks: "Weeks 1 – 4",
      title: "The Analytical Engine",
      subtitle: "Data, Prediction & Causality",
      items: [
        "Data Science Foundations",
        "Coding for Analysis (Python / R)",
        "Machine Learning Frameworks",
        "Causal Inference & Strategy",
      ],
      milestone: "Model Interpretation Memo on a real dataset, with a business-facing recommendation.",
    },
    {
      n: "02",
      weeks: "Weeks 5 – 6",
      title: "The AI Practitioner",
      subtitle: "Prompting, Context & Economics",
      items: [
        "Prompt Engineering + Context Design",
        "Systems Economics + Evaluation Design",
        "Model selection: cost, speed, accuracy",
        "Build evaluation criteria & test sets",
      ],
      milestone: "AI System Specification covering model choice, context strategy, evaluation and governance.",
    },
    {
      n: "03",
      weeks: "Weeks 7 – 10",
      title: "Advanced AI Operations",
      subtitle: "Workflow Design, Supervision & Deployment",
      items: [
        "Systems Thinking & Visual Logic",
        "Custom Agent Development",
        "AI-Augmented Building",
        "Deployment, Handoff & Monitoring",
      ],
      milestone: "Deployed Workflow Prototype with an Operating Note for handoff and monitoring.",
    },
    {
      n: "04",
      weeks: "Weeks 11 – 12",
      title: "The Strategic Voice",
      subtitle: "Leadership, Authority & Defence",
      items: [
        "Technical Storytelling",
        "Executive Communication",
        "Defending assumptions & methods",
        "Executive Proof Pack + Live Defence",
      ],
      milestone: "Executive Decision Dossier, presented in a live capstone review.",
    },
  ];

  return (
    <section id="curriculum" className="section bg-cream" data-testid="curriculum-section">
      <div className="container-x">
        <p className="eyebrow-muted mb-6">The Curriculum</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <h2 className="lg:col-span-7 display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink">
            Four modules. <span className="serif-italic text-gold">One trajectory.</span>
          </h2>
          <p className="lg:col-span-5 text-[16px] leading-[1.7] text-ink/75 lg:pt-4">
            From data foundations to executive defence — every module ends with a tangible artefact
            you can show to peers, managers and hiring committees.
          </p>
        </div>

        <div className="space-y-px bg-ink/10">
          {modules.map((m) => (
            <div
              key={m.n}
              data-testid={`curriculum-module-${m.n}`}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-cream-alt/60 p-8 md:p-12 hover:bg-cream-alt transition-colors"
            >
              <div className="lg:col-span-3 flex flex-col gap-2">
                <p className="font-serif text-[64px] text-gold/40 font-light leading-none">{m.n}</p>
                <p className="eyebrow-muted">{m.weeks}</p>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-serif text-[28px] md:text-[32px] text-ink font-light leading-tight mb-2">
                  {m.title}
                </h3>
                <p className="serif-italic text-[17px] text-ink/60 mb-6">{m.subtitle}</p>
                <p className="text-[14px] text-ink/65 leading-[1.6]">
                  <span className="text-gold font-medium">Milestone</span> — {m.milestone}
                </p>
              </div>
              <ul className="lg:col-span-4 space-y-3 lg:border-l border-ink/10 lg:pl-8">
                {m.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[15px] text-ink/80">
                    <span className="w-1 h-1 bg-gold rounded-full mt-2.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
