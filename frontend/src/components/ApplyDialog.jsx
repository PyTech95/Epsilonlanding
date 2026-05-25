import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ApplyDialog({ open, onOpenChange }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    current_role: "",
    years_experience: "",
    motivation: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone || !form.current_role || !form.years_experience) {
      toast.error("Please complete every required field.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/applications`, form);
      toast.success("Application received. Our admissions team will reach out within 48 hours.");
      onOpenChange(false);
      setForm({
        full_name: "",
        email: "",
        phone: "",
        current_role: "",
        years_experience: "",
        motivation: "",
      });
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[560px] bg-cream border-ink/15"
        data-testid="apply-dialog"
      >
        <DialogHeader>
          <p className="eyebrow !text-gold mb-2">Apply · Next Cohort</p>
          <DialogTitle className="font-serif text-[28px] font-light text-ink leading-tight">
            Begin your <span className="serif-italic text-gold">application</span>.
          </DialogTitle>
          <DialogDescription className="text-[14px] text-ink/65">
            Tell us a little about yourself. Our admissions team will review and respond within 48 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="space-y-4 mt-2" data-testid="apply-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full name *" htmlFor="apply-name">
              <Input
                id="apply-name"
                data-testid="apply-input-name"
                value={form.full_name}
                onChange={set("full_name")}
                placeholder="Your name"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
            <Field label="Email *" htmlFor="apply-email">
              <Input
                id="apply-email"
                type="email"
                data-testid="apply-input-email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@work.com"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
          </div>
          <Field label="Phone *" htmlFor="apply-phone">
            <Input
              id="apply-phone"
              data-testid="apply-input-phone"
              value={form.phone}
              onChange={set("phone")}
              placeholder="+91 9XXXXXXXXX"
              className="bg-white border-ink/15 rounded-none h-11"
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Current role *" htmlFor="apply-role">
              <Input
                id="apply-role"
                data-testid="apply-input-role"
                value={form.current_role}
                onChange={set("current_role")}
                placeholder="e.g. Senior Product Manager"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
            <Field label="Years of experience *" htmlFor="apply-years">
              <Select value={form.years_experience} onValueChange={set("years_experience")}>
                <SelectTrigger
                  id="apply-years"
                  data-testid="apply-input-years"
                  className="bg-white border-ink/15 rounded-none h-11"
                >
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2">0 – 2 years</SelectItem>
                  <SelectItem value="3-5">3 – 5 years</SelectItem>
                  <SelectItem value="5-10">5 – 10 years</SelectItem>
                  <SelectItem value="10-15">10 – 15 years</SelectItem>
                  <SelectItem value="15+">15+ years</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field label="Why this programme? (optional)" htmlFor="apply-motiv">
            <Textarea
              id="apply-motiv"
              data-testid="apply-input-motivation"
              value={form.motivation}
              onChange={set("motivation")}
              rows={3}
              placeholder="Briefly: what would success look like for you 12 weeks from now?"
              className="bg-white border-ink/15 rounded-none"
            />
          </Field>

          <button
            type="submit"
            disabled={loading}
            data-testid="apply-submit-btn"
            className="btn-primary w-full justify-center mt-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={16} /> Submitting…
              </>
            ) : (
              <>
                Submit application <ArrowRight size={16} />
              </>
            )}
          </button>
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
