import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2, FileDown } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function HeroForm() {
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
      setForm({
        full_name: "",
        phone: "",
        email: "",
        job_title: "",
        work_experience: "",
        city: "",
      });
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full h-11 bg-white border border-ink/15 px-3 text-[14px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-gold transition-colors";
  const labelClass =
    "font-mono text-[9.5px] uppercase tracking-[0.15em] text-ink/55 mb-1.5 block";

  return (
    <div
      className="bg-cream border border-ink/15 shadow-[0_30px_80px_-40px_rgba(14,21,37,0.35)]"
      data-testid="hero-form-card"
    >
      <div className="bg-ink text-cream px-6 py-5 flex items-center gap-3">
        <span className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
          <FileDown size={16} className="text-gold" />
        </span>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold mb-0.5">
            Cohort 01 · Limited Seats
          </p>
          <h3 className="font-serif text-[20px] font-light leading-tight">
            Get the <span className="serif-italic text-gold">brochure</span>.
          </h3>
        </div>
      </div>

      <form onSubmit={submit} className="p-6 space-y-3.5" data-testid="hero-brochure-form">
        <div>
          <label htmlFor="hf-name" className={labelClass}>Name *</label>
          <input
            id="hf-name"
            data-testid="hf-name"
            value={form.full_name}
            onChange={set("full_name")}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
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

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="hf-exp" className={labelClass}>Work experience</label>
            <select
              id="hf-exp"
              data-testid="hf-exp"
              value={form.work_experience}
              onChange={set("work_experience")}
              className={`${inputClass} appearance-none cursor-pointer`}
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
          className="btn-primary w-full justify-center !py-3.5 mt-2 disabled:opacity-60"
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

        <p className="text-[10.5px] text-ink/45 text-center font-mono uppercase tracking-wider pt-1">
          No spam · 17-page PDF
        </p>
      </form>
    </div>
  );
}
