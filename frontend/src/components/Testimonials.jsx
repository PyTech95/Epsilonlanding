import { Quote } from "lucide-react";

export default function Testimonials() {
  const items = [
    {
      quote:
        "I started the programme wanting to understand machine learning without getting lost in theory. The concepts needed to be immediately practical — Prof. Bhupathi helped me connect statistics to forecasting and campaign performance at work, and make quicker decisions.",
      name: "Priyam C.",
      role: "Senior Marketing & Sales Analyst",
    },
    {
      quote:
        "Before this, I understood AI mostly through a handful of features. Kent helped me understand what was actually happening underneath the models, what the outputs meant, and where the limits and biases were. That has changed how I make product decisions.",
      name: "Sanjay J.",
      role: "Product & Technical Manager",
    },
    {
      quote:
        "I've used data software for years, but this programme helped me understand the reasoning behind the methods. I'm now far more confident explaining the why of an analysis, and communicating technical material to my leadership.",
      name: "Jeremy H.",
      role: "Financial Planning & Analysis Manager",
    },
    {
      quote:
        "Classes with Professor Bhupathi were something I looked forward to every week. Engaging, rigorous, and full of skills I'll carry into every part of my career. He's also remarkably approachable. Highly recommend the programme.",
      name: "Akriti J.",
      role: "Senior Data Scientist",
    },
  ];

  return (
    <section className="section bg-cream-alt" data-testid="testimonials-section">
      <div className="container-x">
        <p className="eyebrow-muted mb-6">In their own words</p>
        <h2 className="display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink mb-14 max-w-[820px]">
          What past participants <span className="serif-italic text-gold">say</span>.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
          {items.map((it, i) => (
            <div
              key={i}
              data-testid={`testimonial-${i}`}
              className="bg-cream-alt p-8 md:p-10 flex flex-col hover:bg-cream transition-colors"
            >
              <Quote className="text-gold/60 mb-5" size={24} strokeWidth={1.5} />
              <p className="font-serif text-[19px] md:text-[20px] leading-[1.55] text-ink/85 font-light mb-8 flex-1">
                "{it.quote}"
              </p>
              <div className="pt-5 border-t border-ink/10">
                <p className="font-serif text-[18px] text-ink font-light">{it.name}</p>
                <p className="font-mono text-[11px] uppercase tracking-wider text-gold mt-1">
                  {it.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
