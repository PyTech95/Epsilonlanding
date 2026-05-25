import { TrendingUp, BriefcaseBusiness, ArrowUpRight, Users2 } from "lucide-react";

export default function JobPlacement() {
  const metrics = [
    { value: "85%", label: "of alumni report a step-up in role within 12 months" },
    { value: "2.1×", label: "average compensation lift after promotion" },
    { value: "92%", label: "would recommend the programme to a peer" },
    { value: "40+", label: "organisations represented across cohorts" },
  ];

  const pathways = [
    {
      icon: TrendingUp,
      title: "Promotion in-place",
      body: "Move into a higher-impact role within your current organisation, with stronger evidence of decision capability.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Function switch",
      body: "Step laterally into product, analytics, growth or RevOps — backed by your capstone and applied work.",
    },
    {
      icon: ArrowUpRight,
      title: "External move",
      body: "Take the credential, the dossier and a sharper interview to a new employer ready to invest in AI-fluent leaders.",
    },
    {
      icon: Users2,
      title: "Founder track",
      body: "Build the judgement and AI-systems literacy needed to lead a team, ship a product or start your own venture.",
    },
  ];

  return (
    <section className="section bg-cream" data-testid="job-placement-section">
      <div className="container-x">
        <p className="eyebrow-muted mb-6">Career outcomes</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <h2 className="lg:col-span-7 display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink">
            Career growth that{" "}
            <span className="serif-italic text-gold">compounds</span>.
          </h2>
          <p className="lg:col-span-5 text-[16px] leading-[1.7] text-ink/75 lg:pt-4">
            What graduates do in the year after the programme — and the pathways they take to get
            there.
          </p>
        </div>

        {/* Numbers strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-ink/10 mb-16">
          {metrics.map((m, i) => (
            <div
              key={i}
              data-testid={`outcome-metric-${i}`}
              className="border-r border-b border-ink/10 p-7 md:p-9 bg-cream-alt/50 hover:bg-cream-alt transition-colors"
            >
              <p className="font-serif text-[48px] md:text-[60px] lg:text-[68px] text-gold font-light leading-[0.95] mb-3 tracking-tight">
                {m.value}
              </p>
              <p className="text-[13.5px] md:text-[14px] text-ink/75 leading-[1.55]">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Pathways infographic */}
        <div className="bg-ink text-cream p-8 md:p-12 lg:p-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold mb-8">
            Where graduates land · 4 pathways
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
            {pathways.map((p, i) => (
              <div
                key={i}
                data-testid={`pathway-${i}`}
                className="bg-ink p-7 md:p-8 hover:bg-ink-soft transition-colors group flex flex-col"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-[11px] text-cream/40 tracking-widest">
                    0{i + 1}
                  </span>
                  <div className="w-11 h-11 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <p.icon
                      size={17}
                      strokeWidth={1.5}
                      className="text-gold group-hover:text-ink transition-colors"
                    />
                  </div>
                </div>
                <h3 className="font-serif text-[22px] text-cream font-light mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-[13.5px] text-cream/70 leading-[1.65]">{p.body}</p>
              </div>
            ))}
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40 mt-10 text-center">
            Self-reported outcomes from past Epsilon cohorts · Live results pending
          </p>
        </div>
      </div>
    </section>
  );
}
