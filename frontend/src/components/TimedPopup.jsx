import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const DELAY_MS = 15000;
const STORAGE_KEY = "epsilon-popup-seen";

export default function TimedPopup() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    course: "Applied AI & Machine Learning",
  });

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch (e) {}
    const t = setTimeout(() => setOpen(true), DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const handleClose = (next) => {
    setOpen(next);
    if (!next) {
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (e) {}
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone) {
      toast.error("Please share your name, email and phone.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contacts`, {
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        preferred_time: "",
        message: `Course of interest: ${form.course}`,
      });
      toast.success("Got it — an advisor will call you back shortly.");
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (e) {}
      setOpen(false);
      setForm({
        full_name: "",
        email: "",
        phone: "",
        course: "Applied AI & Machine Learning",
      });
    } catch (err) {
      toast.error(err?.response?.data?.detail?.[0]?.msg || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-[500px] bg-cream border-ink/15 p-0 overflow-hidden"
        data-testid="timed-popup"
      >
        <div className="bg-ink text-cream px-7 py-6 relative overflow-hidden">
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(184,148,90,0.25), transparent 70%)" }}
          />
          <div className="flex items-center gap-2 mb-3 relative">
            <Sparkles size={14} className="text-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
              Talk to an advisor
            </p>
          </div>
          <DialogHeader className="space-y-0 text-left">
            <DialogTitle className="font-serif text-[26px] md:text-[30px] font-medium leading-[1.15] text-cream">
              Need to talk it through? <span className="serif-italic text-gold">We'll call you.</span>
            </DialogTitle>
            <DialogDescription className="text-[14px] text-cream/70 mt-2">
              Drop your details and an advisor will reach out within one business day.
            </DialogDescription>
          </DialogHeader>
        </div>

        <form onSubmit={submit} className="p-7 space-y-4" data-testid="popup-form">
          <Field label="Name *" htmlFor="pop-name">
            <Input
              id="pop-name"
              data-testid="pop-name"
              value={form.full_name}
              onChange={set("full_name")}
              placeholder="Your full name"
              className="bg-white border-ink/15 rounded-none h-11"
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Email *" htmlFor="pop-email">
              <Input
                id="pop-email"
                type="email"
                data-testid="pop-email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@work.com"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
            <Field label="Phone *" htmlFor="pop-phone">
              <Input
                id="pop-phone"
                data-testid="pop-phone"
                value={form.phone}
                onChange={set("phone")}
                placeholder="+91 9XXXXXXXXX"
                className="bg-white border-ink/15 rounded-none h-11"
              />
            </Field>
          </div>
          <Field label="Course of interest" htmlFor="pop-course">
            <Select value={form.course} onValueChange={set("course")}>
              <SelectTrigger
                id="pop-course"
                data-testid="pop-course"
                className="bg-white border-ink/15 rounded-none h-11"
              >
                <SelectValue placeholder="Select course" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Applied AI & Machine Learning">
                  Applied AI &amp; Machine Learning
                </SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <button
            type="submit"
            disabled={loading}
            data-testid="pop-submit"
            className="w-full justify-center inline-flex items-center gap-2 bg-gold hover:bg-ink text-ink hover:text-cream transition-colors py-3.5 mt-2 disabled:opacity-60 font-medium text-[14px]"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={16} /> Sending…
              </>
            ) : (
              <>
                Schedule Call Back <ArrowRight size={16} />
              </>
            )}
          </button>
          <p className="text-[11px] text-ink/45 text-center font-mono uppercase tracking-wider pt-1">
            No spam. One advisor call. Promise.
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
