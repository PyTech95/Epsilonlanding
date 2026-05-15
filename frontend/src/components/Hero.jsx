import { ArrowRight, Calendar, Wifi, Clock, IndianRupee, ArrowUpRight } from "lucide-react";

export default function Hero({ onApply, onCall, onBrochure }) {
  const stats = [
    { label: "Duration", value: "12 weeks", Icon: Calendar },
    { label: "Format", value: "Live online", Icon: Wifi },
    { label: "Effort", value: "15–20 hrs / wk", Icon: Clock },
    { label: "Fee", value: "₹89,000", Icon: IndianRupee },
  ];

  return (
    <section id="top" className="relative pt-20 pb-20 md:pt-24 md:pb-28 overflow-hidden" data-testid="hero-section">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-10 anim-word" style={{ animationDelay: "0ms" }}>
            <div className="relative w-10 h-px overflow-hidden">
              <div className="absolute inset-0 bg-gold anim-draw-in" />
            </div>
            <span className="eyebrow">Professional Certificate · Cohort 01</span>
          </div>

          <h1 className="display-headline text-[44px] sm:text-[60px] lg:text-[78px] text-ink mb-8">
            <span className="anim-word" style={{ animationDelay: "120ms" }}>Applied </span>
            <span className="anim-word serif-italic" style={{ animationDelay: "240ms" }}>AI</span>
            <span className="anim-word" style={{ animationDelay: "360ms" }}> &amp; Machine Learning,</span>
            <br className="hidden sm:block" />
            <span className="anim-word text-gold" style={{ animationDelay: "480ms" }}> for</span>{" "}
            <span className="anim-word text-gold" style={{ animationDelay: "600ms" }}>decision-makers.</span>
          </h1>

          <p
            className="text-[17px] leading-[1.7] text-ink/75 max-w-[560px] mb-10 anim-word"
            style={{ animationDelay: "780ms" }}
          >
            A 12-week live executive programme that turns technical fluency into{" "}
            <em className="serif-italic text-ink">strategic value</em>. Stronger judgement.
            Sharper evidence discipline. Confident, credible business action.
          </p>

          <div
            className="flex flex-wrap items-center gap-3 mb-6 anim-word"
            style={{ animationDelay: "900ms" }}
          >
            <button data-testid="hero-apply-btn" onClick={onApply} className="btn-primary group">
              Apply for the cohort
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button data-testid="hero-schedule-btn" onClick={onCall} className="btn-outline">
              Schedule a call with an advisor
            </button>
          </div>

          <button
            onClick={onBrochure}
            data-testid="hero-brochure-btn"
            className="group inline-flex items-center gap-3 mt-2 pl-2 pr-5 py-2.5 bg-gold/10 border border-gold/40 hover:bg-gold hover:border-gold transition-all anim-word"
            style={{ animationDelay: "1020ms" }}
          >
            <span className="w-9 h-9 inline-flex items-center justify-center bg-gold text-ink group-hover:bg-ink group-hover:text-gold transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v14M5 12l7 7 7-7M5 21h14" />
              </svg>
            </span>
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink font-medium group-hover:text-ink">
              Download the full brochure
            </span>
            <span className="font-mono text-[10px] tracking-widest text-ink/55 group-hover:text-ink/70 border-l border-ink/20 pl-3">
              PDF · 17 pp
            </span>
          </button>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 hair-border">
            {stats.map(({ label, value, Icon }, i) => (
              <div
                key={label}
                className={`p-5 anim-word ${i !== 0 ? "md:border-l border-ink/10" : ""} ${
                  i >= 2 ? "border-t md:border-t-0 border-ink/10" : ""
                } ${i === 1 ? "border-l border-ink/10" : ""} ${i === 3 ? "border-l border-ink/10" : ""}`}
                style={{ animationDelay: `${1200 + i * 100}ms` }}
                data-testid={`hero-stat-${label.toLowerCase()}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={13} className="text-gold" />
                  <span className="eyebrow-muted">{label}</span>
                </div>
                <p className="text-[18px] font-serif text-ink font-light">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="lg:col-span-5 relative anim-word"
          style={{ animationDelay: "300ms" }}
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-alt">
            <img
              src="/hero.png"
              alt="Working professional learning online"
              className="absolute inset-0 w-full h-full object-cover anim-ken-burns"
            />
            {/* Subtle gold framing accent */}
            <div className="absolute top-4 left-4 w-12 h-px bg-gold" />
            <div className="absolute top-4 left-4 w-px h-12 bg-gold" />
            <div className="absolute bottom-4 right-4 w-12 h-px bg-gold" />
            <div className="absolute bottom-4 right-4 w-px h-12 bg-gold" />

            {/* Floating decorative chip */}
            <div className="absolute top-6 right-6 anim-float">
              <div className="bg-cream/90 backdrop-blur-sm border border-ink/10 px-3 py-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/80">
                  Cohort 01 · Live
                </span>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/10 pointer-events-none" />
          </div>

          <div
            className="absolute bottom-6 left-6 right-12 bg-ink text-cream p-7 anim-float"
            style={{ animationDelay: "200ms" }}
            data-testid="epsilon-promise"
          >
            <p className="eyebrow !text-gold/80 mb-3">The Epsilon Promise</p>
            <p className="font-serif text-[22px] leading-[1.3] serif-italic">
              "Turning technical fluency into strategic value."
            </p>
            {/* Shimmer underline */}
            <div className="mt-4 h-px relative overflow-hidden">
              <div className="absolute inset-0 anim-shimmer" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative element */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(184,148,90,0.15), transparent 70%)",
        }}
      />
    </section>
  );
}
