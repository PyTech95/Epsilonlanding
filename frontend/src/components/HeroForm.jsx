import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2, FileDown, Sparkles } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function HeroForm({ dark = false }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    job_title: "",
    work_experience: "",
    city: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target ? e.target.value : e }));

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "Epsilon_Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone) {
      toast.error("Please share your name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/brochure-leads`, form);
      toast.success("Brochure on its way — check your downloads.");
      triggerDownload();
      setForm({ full_name: "", phone: "", email: "", job_title: "", work_experience: "", city: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-12 bg-white border border-ink/15 px-4 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all";
  const labelClass =
    "font-mono text-[10px] uppercase tracking-[0.16em] text-ink/65 mb-1.5 block";

  return (
    <div
      className="bg-cream border border-cream/40 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] relative overflow-hidden"
      data-testid="hero-form-card"
    >
      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-16 translate-x-16 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="px-7 pt-7 pb-5 relative">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={14} className="text-gold" />
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
            Limited Seats · Apply Today
          </p>
        </div>
        <h3 className="font-serif text-[28px] md:text-[32px] font-medium leading-[1.1] text-ink">
          Get the <span className="serif-italic text-gold">brochure</span>
        </h3>
        <p className="text-[14px] text-ink/65 mt-2">
          Curriculum, faculty, fees — instantly to your inbox.
        </p>
      </div>

      <form onSubmit={submit} className="px-7 pb-7 space-y-4" data-testid="hero-brochure-form">
        <div>
          <label htmlFor="hf-name" className={labelClass}>Full name *</label>
          <input
            id="hf-name"
            data-testid="hf-name"
            value={form.full_name}
            onChange={set("full_name")}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hf-phone" className={labelClass}>Phone *</label>
            <input
              id="hf-phone"
              data-testid="hf-phone"
              value={form.phone}
              onChange={set("phone")}
              placeholder="+91 9XXXXXXXXX"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="hf-email" className={labelClass}>Email *</label>
            <input
              id="hf-email"
              type="email"
              data-testid="hf-email"
              value={form.email}
              onChange={set("email")}
              placeholder="you@work.com"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="hf-job" className={labelClass}>Job title</label>
          <input
            id="hf-job"
            data-testid="hf-job"
            value={form.job_title}
            onChange={set("job_title")}
            placeholder="e.g. Senior Product Manager"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="hf-exp" className={labelClass}>Work experience</label>
            <select
              id="hf-exp"
              data-testid="hf-exp"
              value={form.work_experience}
              onChange={set("work_experience")}
              className={`${inputClass} appearance-none cursor-pointer pr-10`}
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230E1525' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 14px center",
              }}
            >
              <option value="">Select range</option>
              <option value="0-2">0 – 2 years</option>
              <option value="3-5">3 – 5 years</option>
              <option value="5-10">5 – 10 years</option>
              <option value="10-15">10 – 15 years</option>
              <option value="15+">15+ years</option>
            </select>
          </div>
          <div>
            <label htmlFor="hf-city" className={labelClass}>City</label>
            <input
              id="hf-city"
              data-testid="hf-city"
              value={form.city}
              onChange={set("city")}
              placeholder="e.g. Bengaluru"
              className={inputClass}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          data-testid="hf-submit"
          className="w-full justify-center inline-flex items-center gap-2 bg-gold hover:bg-ink text-ink hover:text-cream transition-colors !py-4 mt-3 disabled:opacity-60 font-medium text-[15px]"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={16} /> Preparing…
            </>
          ) : (
            <>
              Download Brochure <ArrowRight size={16} />
            </>
          )}
        </button>

        <p className="text-[11px] text-ink/50 text-center font-mono uppercase tracking-wider pt-1">
          No spam · 17-page PDF
        </p>
      </form>
    </div>
  );
}
