export default function LogoStrip() {
  // Static brand-affiliation grid (real logos)
  const logos = [
    {
      name: "NYU",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c0/NYU_logo.svg",
      h: 44,
    },
    {
      name: "Columbia University",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Columbia_coat_of_arms.svg",
      h: 56,
    },
    {
      name: "JPMorgan Chase",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Logo_2008_1.svg",
      h: 32,
    },
    {
      name: "LinkedIn",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      h: 38,
    },
    {
      name: "UC Berkeley Law",
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg",
      h: 54,
    },
    {
      name: "Market Theory AI",
      src: null,
      h: 30,
    },
    {
      name: "Interpublic Group",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Interpublic_Group_of_Companies_logo.svg",
      h: 32,
    },
  ];

  return (
    <section
      data-testid="logo-strip"
      className="border-b border-ink/10 py-14 md:py-16 bg-cream"
    >
      <div className="container-x">
        <div className="text-center mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/55">
            Faculty &amp; advisors with experience at
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-x-8 gap-y-10 items-center justify-items-center">
          {logos.map((l) => (
            <div
              key={l.name}
              className="flex items-center justify-center h-16 w-full opacity-75 hover:opacity-100 transition-opacity"
              title={l.name}
            >
              {l.src ? (
                <img
                  src={l.src}
                  alt={l.name}
                  style={{ height: `${l.h}px`, maxHeight: "100%" }}
                  className="w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                  onError={(e) => {
                    const parent = e.currentTarget.parentElement;
                    e.currentTarget.style.display = "none";
                    const span = document.createElement("span");
                    span.className =
                      "font-serif text-[18px] text-ink/75 font-medium tracking-tight text-center";
                    span.textContent = l.name;
                    parent.appendChild(span);
                  }}
                />
              ) : (
                <span className="font-serif text-[18px] text-ink/75 font-medium tracking-tight text-center">
                  {l.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
