import {
  Calendar,
  Wifi,
  Clock,
  FileCheck,
  Award,
  IndianRupee,
  Sparkles,
  ClipboardList,
} from "lucide-react";

export default function Programme() {
  const cells = [
    { Icon: Calendar, label: "Duration", value: "12 weeks · 3 classes a week" },
    { Icon: Wifi, label: "Format", value: "Live online, cohort-based" },
    { Icon: Clock, label: "Session model", value: "Executive-friendly evening schedule" },
    { Icon: FileCheck, label: "Assessment", value: "Graded submissions, live review & capstone defence" },
    { Icon: ClipboardList, label: "Final output", value: "Executive Decision Dossier + milestone artefacts" },
    { Icon: Award, label: "Credential", value: "Certificate of Completion + performance scorecard" },
    { Icon: IndianRupee, label: "Programme fee", value: "₹89,000" },
    { Icon: Sparkles, label: "Experience", value: "High-touch, feedback-driven, professionally serious" },
  ];
  return (
    <section id="programme" className="section bg-cream" data-testid="programme-section">
      <div className="container-x">
        <p className="eyebrow-muted mb-6">The Programme</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink">
              12 weeks. Live. Graded.{" "}
              <span className="serif-italic text-gold block mt-2">
                Professionally serious.
              </span>
            </h2>
            <p className="text-[16px] leading-[1.7] text-ink/75 mt-8 max-w-[460px]">
              Live online cohort, three classes a week, on an executive-friendly evening schedule.
              Graded submissions, expert feedback and a final capstone defence — designed to
              produce a real body of work, not just course completion.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-ink/10">
              {cells.map((c) => (
                <div
                  key={c.label}
                  data-testid={`programme-cell-${c.label.toLowerCase().replace(/\s/g, '-')}`}
                  className="border-r border-b border-ink/10 p-6 bg-cream-alt/50 hover:bg-cream-alt transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <c.Icon size={13} className="text-gold" />
                    <span className="eyebrow-muted">{c.label}</span>
                  </div>
                  <p className="text-[15px] text-ink/85 leading-[1.5]">{c.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
