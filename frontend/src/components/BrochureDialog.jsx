import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2, FileDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BrochureDialog({ open, onOpenChange }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    current_role: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

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
      toast.error("Please share your name, email and phone to get the brochure.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/brochure-leads`, form);
      toast.success("Brochure on its way — check your downloads.");
      triggerDownload();
      onOpenChange(false);
      setForm({ full_name: "", email: "", phone: "", current_role: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[520px] bg-cream border-ink/15"
        data-testid="brochure-dialog"
      >
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
              <FileDown size={18} className="text-gold" />
            </span>
            <p className="eyebrow !text-gold">Programme Brochure · PDF</p>
          </div>
          <DialogTitle className="font-serif text-[28px] font-light text-ink leading-tight">
            Get the full <span className="serif-italic text-gold">brochure</span>.
          </DialogTitle>
          <DialogDescription className="text-[14px] text-ink/65">
            17 pages: curriculum week-by-week, faculty, capstone, certificate and fees. Quick details and the PDF is yours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="space-y-4 mt-2" data-testid="brochure-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full name *" htmlFor="bro-name">
              <Input
                id="bro-name"
                data-testid="brochure-input-name"
                value={form.full_name}
                onChange={set("full_name")}
                placeholder="Your name"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
            <Field label="Email *" htmlFor="bro-email">
              <Input
                id="bro-email"
                type="email"
                data-testid="brochure-input-email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@work.com"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Phone *" htmlFor="bro-phone">
              <Input
                id="bro-phone"
                data-testid="brochure-input-phone"
                value={form.phone}
                onChange={set("phone")}
                placeholder="+91 9XXXXXXXXX"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
            <Field label="Current role" htmlFor="bro-role">
              <Input
                id="bro-role"
                data-testid="brochure-input-role"
                value={form.current_role}
                onChange={set("current_role")}
                placeholder="e.g. Product Manager"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={loading}
            data-testid="brochure-submit-btn"
            className="btn-primary w-full justify-center mt-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={16} /> Preparing…
              </>
            ) : (
              <>
                Download brochure <ArrowRight size={16} />
              </>
            )}
          </button>

          <p className="text-[11px] text-ink/50 text-center font-mono uppercase tracking-wider pt-1">
            No spam. We'll only use these details to share programme info.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="font-mono text-[10px] uppercase tracking-widest text-ink/60 mb-2 block">
        {label}
      </Label>
      {children}
    </div>
  );
}
