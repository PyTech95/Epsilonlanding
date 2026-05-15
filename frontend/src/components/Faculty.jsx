export default function Faculty() {
  const lead = {
    name: "Kent Oliver Bhupathi",
    role: "Founder & Lead Instructor · Epsilon Executive Education",
    image: "/kent.png",
    paragraphs: [
      "Economist, data science leader and educator with 15+ years across applied research and analytics — spanning marketing sciences, healthcare analytics, supply chain, business intelligence and professional services. He has spent his career at the intersection of economics, statistics, machine learning and decision support, helping organisations turn complex analysis into measurable business action.",
      "He holds a dual degree in Economics and Architecture from UT Austin and a Master's in Applied Econometrics from NYU. Prior teaching appointments include NYU, Columbia University and the Indian School of Public Policy (ISPP), with curriculum across applied statistics, data science, ML, quantitative methods and technical communication.",
      "At Epsilon, Kent leads academic design and teaching with a strong focus on practical rigour — helping working professionals read data more critically, question AI outputs with confidence and turn technical work into credible business judgement.",
    ],
    badges: ["NYU", "Columbia", "Market Theory AI", "ex-Interpublic"],
  };

  const guests = [
    {
      name: "Jayprakash Mistry",
      domain: "Venture Capital · Deeptech",
      role: "Founder, Remarkables Capital & UnnichedHQ",
      bio:
        "A decade across venture capital, private equity and credit, operating between the US, UK and India. Focused on AI, deeptech, life sciences, fintech and defence-adjacent sectors — bringing a capital-strategy lens to the programme.",
      img: "/jayprakash.png",
    },
    {
      name: "Philip Wiseman, J.D.",
      domain: "Securities · Cross-border",
      role: "VP Legal Affairs & Asst. General Counsel, JPMorgan Chase",
      bio:
        "Business attorney with experience across banking, private equity, fund formation and cross-border transactions. Earlier at Winston & Strawn, Simpson Thacher and Bracewell. J.D. from UC Berkeley.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    },
    {
      name: "Alena Savera",
      domain: "Real Estate · Development",
      role: "VP of Development, The NRP Group",
      bio:
        "Real estate development leader based in Dallas–Fort Worth. Originated multi-family projects totalling 2,350+ units. B.Arch from UT Austin. Brings deal structuring and feasibility judgement to the cohort.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    },
    {
      name: "Mardoqueo Arteaga, Ph.D.",
      domain: "Marketing Science · Causal Inference",
      role: "Marketing Science Strategist, LinkedIn",
      bio:
        "Economist working at the intersection of marketing science, technology and applied research. Earlier at KPMG and Banco Central de Chile. Ph.D. Economics, Fordham.",
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24" data-testid="lead-faculty">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-ink-soft">
              <img src={lead.image} alt={lead.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              {lead.badges.map((b) => (
                <span
                  key={b}
                  className="text-[10px] font-mono uppercase tracking-widest text-ink/70 border border-ink/15 px-3 py-1.5"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-6">
            <p className="eyebrow !text-gold mb-4">Lead Faculty</p>
            <h3 className="font-serif text-[36px] md:text-[44px] text-ink font-light leading-tight mb-2">
              {lead.name}
            </h3>
            <p className="text-[14px] text-ink/60 mb-7">{lead.role}</p>
            {lead.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-[1.75] text-ink/80 mb-5 max-w-[640px]">
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <p className="eyebrow-muted">Guest Lecturers</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guests.map((g) => (
            <div key={g.name} data-testid={`guest-${g.name.split(' ')[0].toLowerCase()}`}>
              <div className="aspect-[4/5] overflow-hidden mb-5 bg-cream-alt">
                <img src={g.img} alt={g.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-serif text-[20px] text-ink font-light leading-tight mb-1">
                {g.name}
              </h4>
              <p className="text-[11px] font-mono uppercase tracking-widest text-gold mb-2">
                {g.domain}
              </p>
              <p className="text-[13px] text-ink/65 leading-[1.55] mb-3">{g.role}</p>
              <p className="text-[13px] text-ink/55 leading-[1.6]">{g.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
