import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ضفنا الهوك للتنقل
import { MessageCircle, X, Send, Sparkles, Phone } from 'lucide-react';

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const navigate = useNavigate(); // هوك التنقل البرمجي
  const [messages, setMessages] = useState<{ from: 'bot' | 'user'; text: string }[]>([
    { from: 'bot', text: "Hi! I'm Sara, your Future Vista property advisor. Not sure where to start? I can help you find the perfect home." },
  ]);
  const [input, setInput] = useState('');

  const send = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!input.trim()) return;
    const text = input.trim();
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: 'bot',
          text: "Thanks! I'll connect you with a specialist for that. Drop your number or tap 'Contact Us' below and we'll reach out within 24 hours.",
        },
      ]);
    }, 700);
  };

  return (
    <>
      {/* Chat widget */}
      <div
        className={`fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-[360px] transition-all duration-300 sm:right-6 ${
          chatOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-brand-600 to-brand-700 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/20 font-display text-lg font-bold">
                  F
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-brand-600 bg-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-bold">Sara · Future Vista</div>
                <div className="text-[11px] text-white/80">Typically replies in 5 min</div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/15"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 space-y-3 overflow-y-auto bg-ink-50 p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${
                    m.from === 'user'
                      ? 'rounded-br-sm bg-brand-600 text-white'
                      : 'rounded-bl-sm bg-white text-ink-800 shadow-soft'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={send} className="flex items-center gap-2 border-t border-ink-100 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-full bg-ink-50 px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
            />
            <button
              type="submit"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 text-white transition-colors hover:bg-brand-700"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Footer CTA */}
          <button
            onClick={() => {
              setChatOpen(false);
              navigate('/contact'); // توجيه مباشر لصفحة الكونتكت بدون ريفريش
            }}
            className="flex w-full items-center justify-center gap-2 border-t border-ink-100 bg-ink-50 py-3 text-xs font-bold uppercase tracking-wide text-brand-700 hover:bg-ink-100"
          >
            <Phone className="h-3.5 w-3.5" /> Open Contact Form
          </button>
        </div>
      </div>

      {/* "Future Vista Assistant" pill */}
      <button
        onClick={() => setChatOpen((o) => !o)}
        className="group fixed bottom-24 left-4 z-50 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-ink-900 shadow-card transition-all hover:bg-brand-600 hover:text-white sm:left-6"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-brand-500/40" />
          <Sparkles className="relative h-4 w-4 text-brand-600 group-hover:text-white" />
        </span>
        <span className="hidden sm:inline">Future Vista Assistant</span>
        <span className="sm:hidden">Help</span>
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/971529555810"
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-card transition-all hover:scale-105 hover:shadow-lg sm:right-6"
        aria-label="Chat on WhatsApp"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-[#25D366]/50" />
          <MessageCircle className="relative h-5 w-5" />
        </span>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </>
  );
}