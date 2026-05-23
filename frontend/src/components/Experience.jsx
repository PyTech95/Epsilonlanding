export default function Experience() {
  const items = [
    { n: "01", title: "Live Learning", body: "Live sessions, guided discussion and direct faculty interaction. No pre-recorded shortcuts." },
    { n: "02", title: "Peer Environment", body: "Learn alongside working professionals from different functions and industries." },
    { n: "03", title: "Applied Learning", body: "Real practice in data science, AI use, workflow design and business decision-making." },
    { n: "04", title: "Capstone Experience", body: "Finish with the Executive Decision Dossier, a live-reviewed capstone built around evidence and AI supervision." },
    { n: "05", title: "Expert Feedback", body: "Graded feedback throughout the programme — designed to sharpen your work, week by week." },
    { n: "06", title: "What This Builds", body: "Stronger judgement, better AI fluency, and work that proves real professional growth." },
  ];

  return (
    <section className="section bg-cream-alt" data-testid="experience-section">
      <div className="container-x">
        <p className="eyebrow-muted mb-6">The Epsilon Experience</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <h2 className="lg:col-span-7 display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink">
            Live, applied, and{" "}
            <span className="serif-italic text-gold">unmistakably yours</span>.
          </h2>
          <p className="lg:col-span-5 text-[16px] leading-[1.7] text-ink/75 lg:pt-4">
            A premium synchronous school built around live teaching, expert critique and work that
            makes progress visible — not a marketplace of pre-recorded courses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {items.map((it) => (
            <div
              key={it.n}
              data-testid={`experience-item-${it.n}`}
              className="bg-cream-alt p-7 hover:bg-cream transition-colors min-h-[200px] flex flex-col justify-between"
            >
              <p className="num-badge mb-6">{it.n}</p>
              <div>
                <h3 className="font-serif text-[20px] text-ink font-light mb-2 leading-tight">
                  {it.title}
                </h3>
                <p className="text-[13.5px] text-ink/70 leading-[1.55]">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
