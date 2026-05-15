export default function LogoStrip() {
  const logos = [
    "NYU",
    "Columbia University",
    "JPMorgan Chase",
    "LinkedIn",
    "UC Berkeley Law",
    "Market Theory AI",
    "Interpublic Group",
  ];
  return (
    <section data-testid="logo-strip" className="border-t border-b border-ink/10 py-10">
      <div className="container-x">
        <p className="eyebrow-muted mb-7">Faculty &amp; advisors with experience at</p>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-5">
          {logos.map((l) => (
            <span
              key={l}
              className="font-serif text-[20px] md:text-[22px] text-ink/75 font-light tracking-tight"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
