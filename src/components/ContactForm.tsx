import { useState } from 'react';
import { User, Phone, Mail, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  mobile: string;
  email: string;
  message: string;
  createdAt: number;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '' });
  const [leads, setLeads] = useState<Lead[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!/^[0-9+\-\s]{6,}$/.test(form.mobile)) e.mobile = 'Enter a valid mobile number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (form.message.trim().length < 5) e.message = 'Tell us a bit more';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const lead: Lead = {
      id: crypto.randomUUID(),
      ...form,
      createdAt: Date.now(),
    };
    setLeads((l) => [lead, ...l]);
    setSubmitted(true);
    setForm({ name: '', mobile: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbxPHwpWcKoYyv2dEez8l-miA8-uNEhMESKjdqaf18TKwcnqIDWdUS_pkrpgoD8L8qU/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(lead),
      });
    } catch (error) {
      console.error('Failed to send to Google Sheet:', error);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-20 sm:py-24">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400 ring-1 ring-white/10">
              <Sparkles className="h-3.5 w-3.5" /> Let's Talk
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Not sure where to start?
              <br />
              <span className="text-brand-400">Our experts can help.</span>
            </h2>
            <p className="mt-5 max-w-md text-base text-white/70">
              Whether you're buying your first apartment, upgrading to a villa, or building an
              investment portfolio — leave your details and a dedicated Future Vista advisor will reach
              out within 24 hours.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <Stat value="10K+" label="Properties" />
              <Stat value="4.9★" label="Client Rating" />
              <Stat value="14 yrs" label="In Dubai" />
            </div>

            {leads.length > 0 && (
              <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Leads captured locally ({leads.length})
                </div>
                <div className="mt-2 max-h-32 overflow-y-auto no-scrollbar space-y-1.5">
                  {leads.slice(0, 4).map((l) => (
                    <div key={l.id} className="text-xs text-white/70">
                      <span className="font-semibold text-white">{l.name}</span> · {l.mobile} ·{' '}
                      {l.email}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: form */}
          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="space-y-4">
                <Field
                  icon={User}
                  label="Full Name"
                  placeholder="Aisha Al Mansoori"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  error={errors.name}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    icon={Phone}
                    label="Mobile"
                    placeholder="+971 50 123 4567"
                    value={form.mobile}
                    onChange={(v) => setForm({ ...form, mobile: v })}
                    error={errors.mobile}
                  />
                  <Field
                    icon={Mail}
                    label="Email"
                    placeholder="you@email.com"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    error={errors.email}
                  />
                </div>
                <Field
                  icon={MessageSquare}
                  label="Message"
                  placeholder="I'm interested in a 2-bed apartment in Dubai Marina..."
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                  error={errors.message}
                  textarea
                />

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-600/30 transition-all hover:bg-brand-700 active:scale-[0.98]"
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Thank you — we'll be in touch!
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-white/50">
                  By submitting you agree to our Privacy Policy & Terms of Service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="font-display text-2xl font-bold text-white">{value}</div>
      <div className="mt-0.5 text-xs text-white/60">{label}</div>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  textarea = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    'w-full rounded-xl border bg-white/5 px-4 py-3 pl-11 text-sm text-white placeholder-white/40 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/30';
  const border = error ? 'border-brand-500' : 'border-white/10 focus:border-brand-500';
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/60">
        {label}
      </label>
      <div className="relative">
        <Icon className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-white/40" />
        {textarea ? (
          <textarea
            rows={3}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${base} ${border} resize-none`}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${base} ${border}`}
          />
        )}
      </div>
      {error && <p className="mt-1 text-xs text-brand-400">{error}</p>}
    </div>
  );
}