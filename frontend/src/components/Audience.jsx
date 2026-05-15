export default function Audience() {
  const roles = [
    {
      n: "01",
      title: "Associate Product Managers",
      body: "Junior product professionals ready to grow into roles with more ownership and decision authority.",
    },
    {
      n: "02",
      title: "Marketing, Sales & Growth",
      body: "Operators using AI, automation and analytics to drive measurable revenue and pipeline outcomes.",
    },
    {
      n: "03",
      title: "Business Analysts & Ops",
      body: "Professionals moving into higher-value operational, process and strategy roles.",
    },
    {
      n: "04",
      title: "Research & Financial Analysts",
      body: "Build sharper evidence-based reasoning and a stronger seat in strategic business conversations.",
    },
    {
      n: "05",
      title: "Data & BI Analysts",
      body: "Move beyond reporting into roles with stronger business judgement and applied AI use.",
    },
    {
      n: "06",
      title: "Team Leads & Senior ICs",
      body: "Senior individuals stepping into broader managerial and cross-functional responsibility.",
    },
  ];
  return (
    <section className="section bg-cream-alt" data-testid="audience-section">
      <div className="container-x">
        <p className="eyebrow-muted mb-6">Who is the programme for?</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <h2 className="lg:col-span-7 display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink">
            Built for professionals with{" "}
            <span className="serif-italic text-gold">5 – 15 years</span> of experience.
          </h2>
          <p className="lg:col-span-5 text-[16px] leading-[1.7] text-ink/75 lg:pt-6">
            The strongest fit is professionals eager for promotion, working across functions,
            engaging with data or technical teams, or expected to influence decisions beyond their
            formal title.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/10">
          {roles.map((r) => (
            <div
              key={r.n}
              data-testid={`audience-role-${r.n}`}
              className="border-r border-b border-ink/10 p-8 bg-cream/40 hover:bg-cream transition-colors group"
            >
              <p className="num-badge mb-8">{r.n}</p>
              <h3 className="font-serif text-[22px] text-ink font-light mb-3 leading-tight">
                {r.title}
              </h3>
              <p className="text-[14.5px] text-ink/70 leading-[1.6]">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 aspect-[5/2] overflow-hidden">
          <img
            src="/audience.png"
            alt="Professionals collaborating"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
