export default function Stats() {
  return (
    <section className="bg-ink text-cream py-16 sm:py-20 md:py-28 lg:py-32" data-testid="stats-section">
      <div className="container-x grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
        <div className="md:pr-12 lg:pr-16 md:border-r border-cream/15 pb-10 md:pb-0 border-b md:border-b-0 border-cream/15">
          <p className="eyebrow !text-gold mb-6">The shift, in numbers</p>
          <p className="giant-numeral">91<span className="text-[0.5em] align-top">%</span></p>
          <p className="text-[15px] sm:text-[17px] mt-5 max-w-md text-cream/80 leading-[1.6]">
            of Indian leaders believe they need to adopt AI to stay competitive.
          </p>
          <p className="eyebrow !text-cream/40 mt-6 text-[10px]">Source · Microsoft Work Trend Index</p>
        </div>
        <div className="md:pl-12 lg:pl-16">
          <p className="eyebrow !text-gold mb-6">The shift, in numbers</p>
          <p className="giant-numeral">69<span className="text-[0.5em] align-top">%</span></p>
          <p className="text-[15px] sm:text-[17px] mt-5 max-w-md text-cream/80 leading-[1.6]">
            of skills used in most jobs in India are projected to change by 2030.
          </p>
          <p className="eyebrow !text-cream/40 mt-6 text-[10px]">Source · NDTV Profit Tech</p>
        </div>
      </div>
    </section>
  );
}
