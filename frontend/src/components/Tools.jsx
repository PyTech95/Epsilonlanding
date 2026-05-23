export default function Tools() {
  // Real brand icons via simpleicons.org CDN
  const tools = [
    { name: "Python", slug: "python", color: "3776AB" },
    { name: "R", slug: "r", color: "276DC3" },
    { name: "ChatGPT", slug: "openai", color: "412991" },
    { name: "Claude", slug: "anthropic", color: "D97757" },
    { name: "OpenAI Codex", slug: "openai", color: "412991" },
    { name: "Zapier", slug: "zapier", color: "FF4A00" },
    { name: "Shiny", slug: "rstudioide", color: "75AADB" },
    { name: "Positron", slug: "posit", color: "447099" },
  ];
  const tripled = [...tools, ...tools, ...tools];

  return (
    <section
      className="bg-cream border-t border-b border-ink/10 py-14 md:py-16 overflow-hidden"
      data-testid="tools-section"
    >
      <div className="container-x mb-8 flex items-baseline gap-3">
        <p className="eyebrow-muted">Tools you'll work with</p>
        <span className="text-[13px] text-ink/40 serif-italic">&amp; many more</span>
      </div>
      <div className="relative">
        <div className="marquee-track gap-12 md:gap-16 px-6">
          {tripled.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 md:gap-4 shrink-0 whitespace-nowrap"
            >
              <img
                src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                alt={t.name}
                className="h-7 w-auto md:h-9 opacity-90"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="font-serif text-[24px] md:text-[30px] text-ink/85 font-light">
                {t.name}
              </span>
              <span className="text-gold text-[14px] font-light ml-6 md:ml-10">◆</span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-cream to-transparent" />
      </div>
    </section>
  );
}
