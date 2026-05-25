import { ArrowUpRight, BookOpen } from "lucide-react";

export default function Capstone({ onBrochure }) {
  const skills = ["Data interpretation", "Model & prompt thinking", "Workflow & deployment"];
  return (
    <section id="capstone" className="section bg-cream-alt" data-testid="capstone-section">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="eyebrow-muted mb-6">Capstone</p>
          <h2 className="display-headline text-[36px] sm:text-[44px] lg:text-[56px] text-ink mb-8">
            The Executive{" "}
            <span className="serif-italic text-gold">Decision Dossier</span>.
          </h2>
          <p className="text-[17px] leading-[1.75] text-ink/80 mb-10 max-w-[540px]">
            The capstone is where the full programme comes together. Participants frame a real
            business problem, evaluate evidence, design a practical AI-enabled solution and defend
            it live to decision-makers.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {skills.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-ink/15 text-[14px] text-ink/80 bg-cream/60"
              >
                <span className="w-1.5 h-1.5 bg-gold rounded-full" /> {s}
              </span>
            ))}
          </div>

          <button
            onClick={onBrochure}
            data-testid="capstone-sample-link"
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-ink text-ink hover:text-cream px-6 py-4 font-medium text-[14.5px] transition-colors group"
          >
            <BookOpen size={16} />
            See detailed curriculum in brochure
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="aspect-[5/4] overflow-hidden">
            <img
              src="/experience.png"
              alt="Capstone work — Executive Decision Dossier"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-5 left-5 bg-ink text-cream py-3 px-4">
            <p className="eyebrow !text-gold/80 mb-1 text-[10px]">Live capstone defence</p>
            <p className="font-serif text-[14px]">Week 12</p>
          </div>
        </div>
      </div>
    </section>
  );
}
