import { ArrowUpRight } from "lucide-react";

export default function FutureRoles() {
  const roles = [
    "Product Manager",
    "Sales, Growth or Marketing Manager",
    "Revenue Operations Manager",
    "Finance or FP&A Manager",
    "Director of Analytics or Data Science",
    "AI Support Technician",
  ];
  return (
    <section className="section bg-cream" data-testid="future-roles-section">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <p className="eyebrow-muted mb-6">Future job roles</p>
          <h2 className="display-headline text-[36px] sm:text-[44px] lg:text-[52px] text-ink mb-8">
            Where graduates <span className="serif-italic text-gold">go next</span>.
          </h2>
          <p className="text-[16px] leading-[1.7] text-ink/75 max-w-[480px]">
            A body of work that proves real professional growth — and opens the door to roles that
            sit closer to the decisions.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-ink/10">
            {roles.map((r, i) => (
              <div
                key={r}
                data-testid={`role-${i}`}
                className="border-r border-b border-ink/10 p-6 bg-cream hover:bg-cream-alt transition-colors group flex items-center justify-between"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2">
                    Role · 0{i + 1}
                  </p>
                  <p className="font-serif text-[20px] text-ink font-light leading-tight">{r}</p>
                </div>
                <ArrowUpRight size={16} className="text-ink/30 group-hover:text-gold transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
