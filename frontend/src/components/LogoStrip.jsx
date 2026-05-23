export default function LogoStrip() {
  // Brand affiliations — real logos via Wikipedia Commons (public domain / free-licensed)
  const logos = [
    {
      name: "NYU",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c0/NYU_logo.svg",
      h: 36,
    },
    {
      name: "Columbia University",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Columbia_coat_of_arms.svg",
      h: 44,
    },
    {
      name: "JPMorgan Chase",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg",
      h: 26,
    },
    {
      name: "LinkedIn",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      h: 30,
    },
    {
      name: "UC Berkeley Law",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg",
      h: 42,
    },
    {
      name: "Market Theory AI",
      src: null, // no public logo — render as wordmark
      h: 30,
    },
    {
      name: "Interpublic Group",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Interpublic_Group_of_Companies_logo.svg",
      h: 28,
    },
  ];
  const looped = [...logos, ...logos, ...logos];

  return (
    <section
      data-testid="logo-strip"
      className="border-t border-b border-ink/10 py-10 md:py-12 overflow-hidden bg-cream"
    >
      <div className="container-x">
        <p className="eyebrow-muted mb-7">Faculty &amp; advisors with experience at</p>
      </div>
      <div className="relative">
        <div className="marquee-track gap-12 md:gap-16 px-6 items-center">
          {looped.map((l, i) => (
            <div
              key={i}
              className="shrink-0 flex items-center gap-12 md:gap-16"
              title={l.name}
            >
              {l.src ? (
                <img
                  src={l.src}
                  alt={l.name}
                  style={{ height: `${l.h}px` }}
                  className="w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  loading="lazy"
                  onError={(e) => {
                    // fallback: hide image, show text
                    const parent = e.currentTarget.parentElement;
                    e.currentTarget.style.display = "none";
                    const span = document.createElement("span");
                    span.className =
                      "font-serif text-[22px] text-ink/75 font-light tracking-tight";
                    span.textContent = l.name;
                    parent.insertBefore(span, e.currentTarget);
                  }}
                />
              ) : (
                <span className="font-serif text-[22px] text-ink/75 font-light tracking-tight whitespace-nowrap">
                  {l.name}
                </span>
              )}
              <span className="text-gold text-[14px] font-light">◆</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
