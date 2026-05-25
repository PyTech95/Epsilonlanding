import { Radio, Users, Wrench, Trophy, MessageSquareQuote, Sparkles } from "lucide-react";

export default function Experience() {
  const items = [
    {
      Icon: Radio,
      title: "Live Learning",
      body: "Live sessions, guided discussion and direct faculty interaction. No pre-recorded shortcuts.",
    },
    {
      Icon: Users,
      title: "Peer Environment",
      body: "Learn alongside working professionals from different functions and industries.",
    },
    {
      Icon: Wrench,
      title: "Applied Learning",
      body: "Real practice in data science, AI use, workflow design and business decision-making.",
    },
    {
      Icon: Trophy,
      title: "Capstone Experience",
      body: "Finish with the Executive Decision Dossier, a live-reviewed capstone built around evidence and AI supervision.",
    },
    {
      Icon: MessageSquareQuote,
      title: "Expert Feedback",
      body: "Graded feedback throughout the programme — designed to sharpen your work, week by week.",
    },
    {
      Icon: Sparkles,
      title: "What This Builds",
      body: "Stronger judgement, better AI fluency, and work that proves real professional growth.",
    },
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
          {items.map(({ Icon, title, body }, idx) => (
            <div
              key={title}
              data-testid={`experience-item-${idx}`}
              className="bg-cream-alt p-7 md:p-8 hover:bg-cream transition-colors min-h-[240px] flex flex-col group"
            >
              <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-6 bg-cream/50 group-hover:bg-gold group-hover:border-gold transition-colors">
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-gold group-hover:text-ink transition-colors"
                />
              </div>
              <h3 className="font-serif text-[22px] text-ink font-medium mb-3 leading-tight">
                {title}
              </h3>
              <p className="text-[14.5px] text-ink/70 leading-[1.65]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
