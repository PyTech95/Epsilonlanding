export default function Tools() {
  const tools = ["Python", "R", "ChatGPT", "Claude", "OpenAI Codex", "Zapier", "Shiny", "Positron"];
  // Triple for seamless marquee
  const tripled = [...tools, ...tools, ...tools, ...tools];
  return (
    <section className="bg-cream border-t border-b border-ink/10 py-14 overflow-hidden" data-testid="tools-section">
      <div className="container-x mb-6 flex items-baseline gap-3">
        <p className="eyebrow-muted">Tools you'll work with</p>
        <span className="text-[13px] text-ink/40 serif-italic">&amp; many more</span>
      </div>
      <div className="relative">
        <div className="marquee-track gap-12 px-12">
          {tripled.map((t, i) => (
            <span
              key={i}
              className="font-serif text-[34px] md:text-[44px] text-ink/85 font-light whitespace-nowrap flex items-center gap-12"
            >
              {t}
              <span className="text-gold text-[26px] font-light">·</span>
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
