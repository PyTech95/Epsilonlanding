import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const SOCIALS = [
  { name: "Instagram", href: "#", Icon: Instagram },
  { name: "Facebook", href: "#", Icon: Facebook },
  { name: "LinkedIn", href: "#", Icon: Linkedin },
  { name: "YouTube", href: "#", Icon: Youtube },
];

export default function Nav({ onApply, onCall, onBrochure }) {
  const [open, setOpen] = useState(false);
  const linkClass = "text-[14px] text-ink/80 hover:text-ink transition-colors";
  const links = [
    { label: "Programme", href: "#programme" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Faculty", href: "#faculty" },
    { label: "Capstone", href: "#capstone" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-testid="site-nav"
      className="sticky top-0 z-40 bg-cream/85 backdrop-blur-md border-b border-ink/10"
    >
      <div className="container-x flex items-center justify-between h-[72px] md:h-[78px]">
        <a href="#top" className="flex items-center group" data-testid="nav-logo">
          <img
            src="/logo.png"
            alt="Epsilon Executive Education"
            className="h-10 md:h-14 w-auto transition-transform group-hover:scale-[1.02]"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`${linkClass} relative group`}
              data-testid={`nav-${l.label.toLowerCase()}`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Social icons - desktop only */}
          <div className="hidden xl:flex items-center gap-1 mr-2 pr-3 border-r border-ink/10">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                data-testid={`nav-social-${name.toLowerCase()}`}
                aria-label={name}
                className="w-8 h-8 inline-flex items-center justify-center text-ink/55 hover:text-gold transition-colors"
              >
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <button
            data-testid="nav-schedule-call"
            onClick={onCall}
            className="hidden md:inline-flex text-[14px] text-ink underline-offset-4 hover:underline"
          >
            Schedule a call
          </button>
          <button
            data-testid="nav-apply-now"
            onClick={onApply}
            className="hidden sm:inline-flex items-center gap-2 bg-gold hover:bg-ink hover:text-cream text-ink text-[13px] py-3 px-4 md:px-5 font-medium transition-colors"
          >
            Apply Now <ArrowRight size={14} />
          </button>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center border border-ink/15 text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-cream z-30 transition-transform duration-300 overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        data-testid="nav-mobile-drawer"
      >
        <div className="container-x py-10 flex flex-col gap-1">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-[26px] text-ink py-3 border-b border-ink/10 font-medium flex items-center justify-between group"
              style={{
                animation: open ? `fadeUp 0.45s ${100 + i * 50}ms ease both` : "none",
              }}
            >
              <span>{l.label}</span>
              <ArrowRight size={18} className="text-gold opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}

          <div className="flex flex-col gap-3 mt-8">
            <button
              onClick={() => {
                setOpen(false);
                onApply();
              }}
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink py-4 font-medium"
            >
              Apply for the cohort <ArrowRight size={16} />
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onCall();
              }}
              className="inline-flex items-center justify-center gap-2 border border-ink/15 text-ink py-4"
            >
              Schedule a call
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onBrochure();
              }}
              className="text-[14px] text-ink/70 hover:text-ink mt-2 underline underline-offset-4"
            >
              Download the brochure (PDF)
            </button>
          </div>

          {/* Mobile socials */}
          <div className="flex items-center gap-4 mt-10 pt-8 border-t border-ink/10">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">Follow</p>
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                data-testid={`mobile-social-${name.toLowerCase()}`}
                aria-label={name}
                className="w-10 h-10 rounded-full border border-ink/15 flex items-center justify-center text-ink/70 hover:text-gold hover:border-gold transition-colors"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
