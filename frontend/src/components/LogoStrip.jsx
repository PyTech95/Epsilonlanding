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
  const looped = [...logos, ...logos, ...logos];
  return (
    <section data-testid="logo-strip" className="border-t border-b border-ink/10 py-10 overflow-hidden">
      <div className="container-x">
        <p className="eyebrow-muted mb-7">Faculty &amp; advisors with experience at</p>
      </div>
      <div className="relative">
        <div className="marquee-track gap-12 px-6">
          {looped.map((l, i) => (
            <span
              key={i}
              className="font-serif text-[20px] md:text-[22px] text-ink/75 font-light tracking-tight whitespace-nowrap flex items-center gap-12"
            >
              {l}
              <span className="text-gold text-[14px] font-light">◆</span>
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
