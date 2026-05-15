import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ({ onCall }) {
  const faqs = [
    {
      q: "Who is this programme designed for?",
      a: "Working professionals with 5–15 years of experience across product, marketing, sales, analytics, operations, research and finance — anyone expected to make or influence decisions in an AI-enabled workplace.",
    },
    {
      q: "How is the programme delivered?",
      a: "Live, online, cohort-based. Three classes a week on an executive-friendly evening schedule, with graded submissions, live faculty review and a final capstone defence.",
    },
    {
      q: "What is the time commitment?",
      a: "Plan for 15–20 hours per week across live sessions, applied work and reading. The programme runs 12 weeks end-to-end.",
    },
    {
      q: "Do I need a technical background?",
      a: "No. You should be comfortable working with data and curious about technical tools. We build foundations in Python / R and ML thinking, then move quickly into applied judgement and decision skills.",
    },
    {
      q: "What is the fee, and are payment plans available?",
      a: "The programme fee is ₹89,000. Flexible payment plans and early-cohort options are available — speak with an advisor for current offers.",
    },
    {
      q: "What do I receive on completion?",
      a: "A verified digital certificate plus a mailed physical copy, a performance scorecard, and a published Executive Decision Dossier you can show to peers, managers and hiring committees.",
    },
  ];

  return (
    <section id="faq" className="section bg-cream" data-testid="faq-section">
      <div className="container-x">
        <p className="eyebrow-muted mb-6">Questions</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          <h2 className="lg:col-span-7 display-headline text-[36px] sm:text-[44px] lg:text-[54px] text-ink">
            Things candidates often <span className="serif-italic text-gold">ask</span>.
          </h2>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-[16px] leading-[1.7] text-ink/75 mb-5">
              Have something else on your mind? Speak directly with a programme advisor.
            </p>
            <button data-testid="faq-talk-advisor-btn" onClick={onCall} className="btn-outline">
              Talk to an advisor
            </button>
          </div>
        </div>

        <Accordion type="single" collapsible className="border-t border-ink/10">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-ink/10 px-0"
              data-testid={`faq-item-${i}`}
            >
              <AccordionTrigger className="py-7 text-left hover:no-underline group">
                <span className="font-serif text-[20px] md:text-[24px] text-ink font-light pr-6">
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-7 text-[15.5px] leading-[1.7] text-ink/75 max-w-[800px]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
