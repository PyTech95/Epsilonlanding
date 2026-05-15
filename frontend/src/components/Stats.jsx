export default function Stats() {
  return (
    <section className="bg-ink text-cream py-24 md:py-32" data-testid="stats-section">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0">
        <div className="md:pr-16 md:border-r border-cream/15">
          <p className="eyebrow !text-gold mb-8">The shift, in numbers</p>
          <p className="giant-numeral">91<span className="text-[0.5em] align-top">%</span></p>
          <p className="text-[18px] mt-6 max-w-md text-cream/80 leading-[1.55]">
            of Indian leaders believe they need to adopt AI to stay competitive.
          </p>
          <p className="eyebrow !text-cream/40 mt-8">Source · Microsoft Work Trend Index</p>
        </div>
        <div className="md:pl-16">
          <p className="eyebrow !text-gold mb-8">The shift, in numbers</p>
          <p className="giant-numeral">69<span className="text-[0.5em] align-top">%</span></p>
          <p className="text-[18px] mt-6 max-w-md text-cream/80 leading-[1.55]">
            of skills used in most jobs in India are projected to change by 2030.
          </p>
          <p className="eyebrow !text-cream/40 mt-8">Source · NDTV Profit Tech</p>
        </div>
      </div>
    </section>
  );
}
