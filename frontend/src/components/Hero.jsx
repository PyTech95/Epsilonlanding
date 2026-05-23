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
      className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden"
      data-testid="hero-section"
      aria-labelledby="hero-headline"
    >
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* LEFT: copy + image collage */}
        <div className="lg:col-span-7">
          <div
            className="flex items-center gap-3 mb-8 anim-word"
            style={{ animationDelay: "0ms" }}
          >
            <div className="relative w-10 h-px overflow-hidden">
              <div className="absolute inset-0 bg-gold anim-draw-in" />
            </div>
            <span className="eyebrow">Professional Certificate · Cohort 01</span>
          </div>

          <h1
            id="hero-headline"
            className="display-headline text-[38px] sm:text-[54px] lg:text-[68px] text-ink mb-6"
          >
            <span className="anim-word" style={{ animationDelay: "120ms" }}>Applied </span>
            <span className="anim-word serif-italic" style={{ animationDelay: "240ms" }}>AI</span>
            <span className="anim-word" style={{ animationDelay: "360ms" }}> &amp; Machine Learning,</span>
            <br className="hidden sm:block" />
            <span className="anim-word text-gold" style={{ animationDelay: "480ms" }}> for</span>{" "}
            <span className="anim-word text-gold" style={{ animationDelay: "600ms" }}>decision-makers.</span>
          </h1>

          <p
            className="text-[16px] md:text-[17px] leading-[1.7] text-ink/75 max-w-[560px] mb-8 anim-word"
            style={{ animationDelay: "780ms" }}
          >
            A 12-week live executive programme that turns technical fluency into{" "}
            <em className="serif-italic text-ink">strategic value</em>. Stronger judgement.
            Sharper evidence discipline. Confident, credible business action.
          </p>

          {/* Image + Promise card collage */}
          <div
            className="relative mb-8 anim-word"
            style={{ animationDelay: "900ms" }}
          >
            <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden bg-cream-alt">
              <img
                src="/hero.png"
                alt="Working professional learning online"
                className="absolute inset-0 w-full h-full object-cover object-top anim-ken-burns"
              />
              <div className="absolute top-3 left-3 w-10 h-px bg-gold" />
              <div className="absolute top-3 left-3 w-px h-10 bg-gold" />
              <div className="absolute bottom-3 right-3 w-10 h-px bg-gold" />
              <div className="absolute bottom-3 right-3 w-px h-10 bg-gold" />

              <div className="absolute top-4 right-4 anim-float">
                <div className="bg-cream/90 backdrop-blur-sm border border-ink/10 px-3 py-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink/80">
                    Cohort 01 · Live
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-ink text-cream p-5 max-w-[480px]" data-testid="epsilon-promise">
              <p className="eyebrow !text-gold/80 mb-2">The Epsilon Promise</p>
              <p className="font-serif text-[18px] md:text-[20px] leading-[1.35] serif-italic">
                "Turning technical fluency into strategic value."
              </p>
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-3 mb-2 anim-word"
            style={{ animationDelay: "1020ms" }}
          >
            <button data-testid="hero-apply-btn" onClick={onApply} className="btn-primary group">
              Apply for the cohort
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button data-testid="hero-schedule-btn" onClick={onCall} className="btn-outline">
              Schedule a call with an advisor
            </button>
          </div>

          {/* Stats strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 hair-border">
            {stats.map(({ label, value, Icon }, i) => (
              <div
                key={label}
                className={`p-4 anim-word ${i !== 0 ? "md:border-l border-ink/10" : ""} ${
                  i >= 2 ? "border-t md:border-t-0 border-ink/10" : ""
                } ${i === 1 ? "border-l border-ink/10" : ""} ${i === 3 ? "border-l border-ink/10" : ""}`}
                style={{ animationDelay: `${1200 + i * 80}ms` }}
                data-testid={`hero-stat-${label.toLowerCase()}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Icon size={12} className="text-gold" />
                  <span className="eyebrow-muted text-[10px]">{label}</span>
                </div>
                <p className="text-[16px] md:text-[17px] font-serif text-ink font-light">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: lead capture form */}
        <div
          className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start anim-word"
          style={{ animationDelay: "300ms" }}
        >
          <HeroForm />
        </div>
      </div>

      {/* Decorative glow */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(184,148,90,0.15), transparent 70%)",
        }}
      />
    </section>
  );
}
