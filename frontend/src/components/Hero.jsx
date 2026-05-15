import { ArrowRight, Calendar, Wifi, Clock, IndianRupee, ArrowUpRight } from "lucide-react";

export default function Hero({ onApply, onCall }) {
  const stats = [
    { label: "Duration", value: "12 weeks", Icon: Calendar },
    { label: "Format", value: "Live online", Icon: Wifi },
    { label: "Effort", value: "15–20 hrs / wk", Icon: Clock },
    { label: "Fee", value: "₹1.25 lakh", Icon: IndianRupee },
  ];

  return (
    <section id="top" className="relative pt-20 pb-20 md:pt-24 md:pb-28" data-testid="hero-section">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 reveal">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-px bg-gold" />
            <span className="eyebrow">Professional Certificate · Cohort 01</span>
          </div>

          <h1 className="display-headline text-[44px] sm:text-[60px] lg:text-[78px] text-ink mb-8">
            Applied <span className="serif-italic">AI</span> &amp; Machine Learning,
            <span className="text-gold"> for</span>{" "}
            <span className="text-gold">decision-makers.</span>
          </h1>

          <p className="text-[17px] leading-[1.7] text-ink/75 max-w-[560px] mb-10">
            A 12-week live executive programme that turns technical fluency into{" "}
            <em className="serif-italic text-ink">strategic value</em>. Stronger judgement.
            Sharper evidence discipline. Confident, credible business action.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button data-testid="hero-apply-btn" onClick={onApply} className="btn-primary">
              Apply for the cohort <ArrowRight size={16} />
            </button>
            <button data-testid="hero-schedule-btn" onClick={onCall} className="btn-outline">
              Schedule a call with an advisor
            </button>
          </div>

          <a
            href="#programme"
            data-testid="hero-brochure-link"
            className="inline-flex items-center gap-2 text-[14px] text-ink/70 hover:text-ink"
          >
            <span className="w-5 h-5 inline-flex items-center justify-center border border-ink/30 rounded-sm text-[10px]">
              ↓
            </span>
            Download the full brochure (PDF)
            <ArrowUpRight size={13} className="opacity-60" />
          </a>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 hair-border">
            {stats.map(({ label, value, Icon }, i) => (
              <div
                key={label}
                className={`p-5 ${i !== 0 ? "md:border-l border-ink/10" : ""} ${
                  i >= 2 ? "border-t md:border-t-0 border-ink/10" : ""
                } ${i === 1 ? "border-l border-ink/10" : ""} ${i === 3 ? "border-l border-ink/10" : ""}`}
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

        <div className="lg:col-span-5 relative reveal">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558203728-00f45181dd84?w=900&q=80"
              alt="Executive learner focused on screen"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/10" />
          </div>
          <div className="absolute bottom-6 left-6 right-12 bg-ink text-cream p-7" data-testid="epsilon-promise">
            <p className="eyebrow !text-gold/80 mb-3">The Epsilon Promise</p>
            <p className="font-serif text-[22px] leading-[1.3] serif-italic">
              "Turning technical fluency into strategic value."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
