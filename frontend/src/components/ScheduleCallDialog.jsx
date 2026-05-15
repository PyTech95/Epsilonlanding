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

export default function ScheduleCallDialog({ open, onOpenChange }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    preferred_time: "",
    message: "",
  });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone) {
      toast.error("Please share your name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contacts`, form);
      toast.success("Request received. An advisor will be in touch shortly.");
      onOpenChange(false);
      setForm({ full_name: "", email: "", phone: "", preferred_time: "", message: "" });
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[520px] bg-cream border-ink/15"
        data-testid="schedule-dialog"
      >
        <DialogHeader>
          <p className="eyebrow !text-gold mb-2">Speak with an advisor</p>
          <DialogTitle className="font-serif text-[28px] font-light text-ink leading-tight">
            Schedule a <span className="serif-italic text-gold">call</span>.
          </DialogTitle>
          <DialogDescription className="text-[14px] text-ink/65">
            Walk through fit, curriculum or payment plans with our admissions team.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={submit} className="space-y-4 mt-2" data-testid="schedule-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full name *" htmlFor="call-name">
              <Input
                id="call-name"
                data-testid="call-input-name"
                value={form.full_name}
                onChange={set("full_name")}
                placeholder="Your name"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
            <Field label="Email *" htmlFor="call-email">
              <Input
                id="call-email"
                type="email"
                data-testid="call-input-email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@work.com"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Phone *" htmlFor="call-phone">
              <Input
                id="call-phone"
                data-testid="call-input-phone"
                value={form.phone}
                onChange={set("phone")}
                placeholder="+91 9XXXXXXXXX"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
            <Field label="Preferred time" htmlFor="call-time">
              <Select value={form.preferred_time} onValueChange={set("preferred_time")}>
                <SelectTrigger
                  id="call-time"
                  data-testid="call-input-time"
                  className="bg-white border-ink/15 rounded-none h-11"
                >
                  <SelectValue placeholder="Select a window" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Mornings · 10 am – 12 pm IST</SelectItem>
                  <SelectItem value="afternoon">Afternoons · 12 pm – 4 pm IST</SelectItem>
                  <SelectItem value="evening">Evenings · 5 pm – 8 pm IST</SelectItem>
                  <SelectItem value="weekend">Weekends</SelectItem>
                </SelectContent>
              </Select>
            </Field>
          </div>
          <Field label="Anything specific you'd like to discuss?" htmlFor="call-msg">
            <Textarea
              id="call-msg"
              data-testid="call-input-message"
              value={form.message}
              onChange={set("message")}
              rows={3}
              placeholder="e.g. fit for my role, payment plans, group enrolment..."
              className="bg-white border-ink/15 rounded-none"
            />
          </Field>

          <button
            type="submit"
            disabled={loading}
            data-testid="call-submit-btn"
            className="btn-primary w-full justify-center mt-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={16} /> Submitting…
              </>
            ) : (
              <>
                Request callback <ArrowRight size={16} />
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
