export default function Footer({ onBrochure }) {
  return (
    <footer className="bg-ink text-cream/80 pt-20 pb-10" data-testid="site-footer">
      <div className="container-x">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cream/10">
          <div className="md:col-span-5">
            <div className="mb-5">
              <img
                src="/logo.png"
                alt="Epsilon Executive Education"
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-[14px] text-cream/65 leading-[1.7] max-w-[380px]">
              A live executive school for decision-makers in the AI era. Named for the difference
              between what is expected and what is actually achieved.
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow !text-gold/80 mb-4">Programme</p>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#programme" className="hover:text-cream">Overview</a></li>
              <li><a href="#curriculum" className="hover:text-cream">Curriculum</a></li>
              <li><a href="#faculty" className="hover:text-cream">Faculty</a></li>
              <li><a href="#capstone" className="hover:text-cream">Capstone</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow !text-gold/80 mb-4">Apply</p>
            <ul className="space-y-3 text-[14px]">
              <li><a href="#top" className="hover:text-cream">Cohort 01</a></li>
              <li><a href="#faq" className="hover:text-cream">FAQ</a></li>
              <li><button onClick={onBrochure} data-testid="footer-brochure-btn" className="hover:text-cream text-left">Brochure</button></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow !text-gold/80 mb-4">Contact</p>
            <ul className="space-y-3 text-[14px]">
              <li>admissions@epsilonexec.com</li>
              <li>Mon – Fri · 10 am – 7 pm IST</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[12px] text-cream/55">
          <p>© {new Date().getFullYear()} Epsilon Executive Education. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Terms</a>
            <a href="#" className="hover:text-cream">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
