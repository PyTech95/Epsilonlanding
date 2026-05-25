import { ArrowRight, Calendar, Wifi, Clock, IndianRupee } from "lucide-react";
import HeroForm from "@/components/HeroForm";

export default function Hero({ onApply, onCall, onBrochure }) {
  const stats = [
    { label: "Duration", value: "12 weeks", Icon: Calendar },
    { label: "Format", value: "Live online", Icon: Wifi },
    { label: "Effort", value: "15–20 hrs / wk", Icon: Clock },
    { label: "Fee", value: "₹89,000", Icon: IndianRupee },
  ];

  return (
    <section
      id="top"
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-ink text-cream"
      data-testid="hero-section"
      aria-labelledby="hero-headline"
    >
      {/* Decorative gold glow */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,90,0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(184,148,90,0.12), transparent 70%)",
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,148,90,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(184,148,90,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-x relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* LEFT: copy */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-8 anim-word" style={{ animationDelay: "0ms" }}>
            <div className="relative w-10 h-px overflow-hidden">
              <div className="absolute inset-0 bg-gold anim-draw-in" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold font-medium">
              Professional Certificate Programme
            </span>
          </div>

          <h1
            id="hero-headline"
            className="display-headline text-[42px] sm:text-[56px] lg:text-[72px] text-cream mb-7"
          >
            <span className="anim-word" style={{ animationDelay: "120ms" }}>Applied </span>
            <span className="anim-word serif-italic text-gold" style={{ animationDelay: "240ms" }}>AI</span>
            <span className="anim-word" style={{ animationDelay: "360ms" }}> &amp; Machine Learning,</span>
            <br className="hidden sm:block" />
            <span className="anim-word text-gold" style={{ animationDelay: "480ms" }}>for</span>{" "}
            <span className="anim-word text-gold" style={{ animationDelay: "600ms" }}>decision-makers.</span>
          </h1>

          <p
            className="text-[17px] md:text-[18px] leading-[1.75] text-cream/80 max-w-[580px] mb-10 anim-word"
            style={{ animationDelay: "780ms" }}
          >
            A 12-week live executive programme that turns technical fluency into{" "}
            <em className="serif-italic text-gold">strategic value</em>. Stronger judgement.
            Sharper evidence discipline. Confident, credible business action.
          </p>

          {/* Image collage */}
          <div className="relative mb-10 anim-word" style={{ animationDelay: "900ms" }}>
            <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-ink-soft">
              <img
                src="/hero.png"
                alt="Working professional learning online"
                className="absolute inset-0 w-full h-full object-cover object-top anim-ken-burns opacity-90"
              />
              <div className="absolute top-3 left-3 w-10 h-px bg-gold" />
              <div className="absolute top-3 left-3 w-px h-10 bg-gold" />
              <div className="absolute bottom-3 right-3 w-10 h-px bg-gold" />
              <div className="absolute bottom-3 right-3 w-px h-10 bg-gold" />

              <div className="absolute top-4 right-4 anim-float">
                <div className="bg-ink/80 backdrop-blur-sm border border-gold/30 px-3 py-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cream/90">
                    Live · Online
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-cream/10 backdrop-blur-md border border-gold/20 text-cream p-5 max-w-[480px]" data-testid="epsilon-promise">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold mb-2">
                The Epsilon Promise
              </p>
              <p className="font-serif text-[18px] md:text-[20px] leading-[1.4] serif-italic text-cream">
                "Turning technical fluency into strategic value."
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-10 anim-word" style={{ animationDelay: "1020ms" }}>
            <button
              data-testid="hero-apply-btn"
              onClick={onApply}
              className="inline-flex items-center gap-2 bg-gold hover:bg-cream text-ink px-6 py-4 font-medium transition-colors group"
            >
              Apply for the cohort
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              data-testid="hero-schedule-btn"
              onClick={onCall}
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-6 py-4 hover:bg-cream hover:text-ink transition-colors"
            >
              Schedule a call with an advisor
            </button>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-cream/15">
            {stats.map(({ label, value, Icon }, i) => (
              <div
                key={label}
                className={`p-5 anim-word ${i !== 0 ? "md:border-l border-cream/15" : ""} ${
                  i >= 2 ? "border-t md:border-t-0 border-cream/15" : ""
                } ${i === 1 ? "border-l border-cream/15" : ""} ${i === 3 ? "border-l border-cream/15" : ""}`}
                style={{ animationDelay: `${1200 + i * 80}ms` }}
                data-testid={`hero-stat-${label.toLowerCase()}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={13} className="text-gold" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cream/60">{label}</span>
                </div>
                <p className="text-[18px] md:text-[19px] font-serif text-cream font-light">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: lead capture form (bigger) */}
        <div
          className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start anim-word"
          style={{ animationDelay: "300ms" }}
        >
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
