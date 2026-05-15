export default function Faculty() {
  const lead = {
    name: "Dr. Aarav Khanna",
    title: "Founder & Lead Instructor · Epsilon Executive Education",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80",
    bio: "Economist, data science leader and educator with 15+ years across applied research and analytics. Co-Founder & Chief Economist at Market Theory AI. Former Adjunct Faculty at NYU, Columbia University and ISPP. Dual degrees from UT Austin; Master's from NYU.",
    badges: ["NYU", "Columbia", "Market Theory AI", "ex-Interpublic"],
  };
  const guests = [
    {
      name: "Rohan Mistry",
      domain: "Venture Capital · Deeptech",
      role: "Founder, Remarkables Capital & UnnichedHQ",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    },
    {
      name: "Philip Whitman, J.D.",
      domain: "Securities · Cross-border",
      role: "VP Legal Affairs & Asst. General Counsel, JPMorgan Chase",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    },
    {
      name: "Alena Severin",
      domain: "Real Estate · Development",
      role: "VP of Development, The NRP Group",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    },
    {
      name: "Mateo Reyes, Ph.D.",
      domain: "Marketing Science · Causal Inference",
      role: "Marketing Science Strategist, LinkedIn",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    },
  ];
  return (
    <section id="faculty" className="section bg-cream" data-testid="faculty-section">
      <div className="container-x">
        <p className="eyebrow-muted mb-6">Faculty &amp; Guest Lecturers</p>
        <h2 className="display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink mb-16 max-w-[820px]">
          Taught by <span className="serif-italic text-gold">practitioners</span>, not theorists.
        </h2>

        {/* Lead faculty */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20" data-testid="lead-faculty">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-ink-soft">
              <img src={lead.image} alt={lead.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="eyebrow !text-gold mb-4">Lead Faculty</p>
            <h3 className="font-serif text-[36px] md:text-[44px] text-ink font-light leading-tight mb-2">
              {lead.name}
            </h3>
            <p className="text-[15px] text-ink/60 mb-7">{lead.title}</p>
            <p className="text-[17px] leading-[1.75] text-ink/80 mb-8 max-w-[640px]">{lead.bio}</p>
            <div className="flex flex-wrap gap-2">
              {lead.badges.map((b) => (
                <span
                  key={b}
                  className="text-[12px] font-mono uppercase tracking-wider text-ink/70 border border-ink/15 px-3 py-1.5"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Guest lecturers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guests.map((g) => (
            <div key={g.name} data-testid={`guest-${g.name.split(' ')[0].toLowerCase()}`}>
              <div className="aspect-[4/5] overflow-hidden mb-5 bg-cream-alt">
                <img src={g.img} alt={g.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-serif text-[20px] text-ink font-light leading-tight mb-1">
                {g.name}
              </h4>
              <p className="text-[12px] font-mono uppercase tracking-wider text-gold mb-2">
                {g.domain}
              </p>
              <p className="text-[13.5px] text-ink/65 leading-[1.55]">{g.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
