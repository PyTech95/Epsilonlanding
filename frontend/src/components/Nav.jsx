import { ArrowRight } from "lucide-react";

export default function Nav({ onApply, onCall, onBrochure }) {
  const linkClass = "text-[14px] text-ink/80 hover:text-ink transition-colors";
  const links = [
    { label: "Programme", href: "#programme" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Faculty", href: "#faculty" },
    { label: "Capstone", href: "#capstone" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header
      data-testid="site-nav"
      className="sticky top-0 z-40 bg-cream/80 backdrop-blur-md border-b border-ink/10"
    >
      <div className="container-x flex items-center justify-between h-[78px]">
        <a href="#top" className="flex items-center gap-2 group" data-testid="nav-logo">
          <span className="logo-monogram relative">
            <span className="serif-italic">ε</span>
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-[3px] bg-gold" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-[22px] tracking-[0.18em] text-ink font-light">EPSILON</span>
            <span className="font-mono text-[9px] tracking-[0.32em] text-muted-foreground mt-1">
              EXECUTIVE EDUCATION
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClass} data-testid={`nav-${l.label.toLowerCase()}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="nav-schedule-call"
            onClick={onCall}
            className="hidden sm:inline-flex text-[14px] text-ink underline-offset-4 hover:underline"
          >
            Schedule a call
          </button>
          <button data-testid="nav-apply-now" onClick={onApply} className="btn-primary text-[14px] !py-3 !px-5">
            Apply Now <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </header>
  );
}
