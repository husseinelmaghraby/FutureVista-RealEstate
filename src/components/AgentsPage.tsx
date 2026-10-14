import { Phone, ArrowUpRight, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// استيراد صورة Safae مباشرةً من مجلد assets
import safaeImg from '../assets/safae.jpg';

interface Agent {
  name: string;
  role: string;
  phone: string;
  whatsapp: string;
  image?: string;
}

const featuredAgents: Agent[] = [
  {
    name: 'Safae Haouar',
    role: 'Luxury Property & Investment Advisor',
    phone: '+971 55 920 8078',
    whatsapp: '971559208078',
    image: safaeImg,
  },
];

export default function AgentsPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-ink-50/50 py-24 sm:py-32">
      {/* Background decoration elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

      <div className="container-x max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Meet Our Elite Agents
          </h1>
          <p className="mt-4 text-base text-ink-600">
            Connect with Dubai's most trusted real estate consultants. Expert guidance tailored to your property investments.
          </p>
        </div>

        {/* Grid Cards مع تحديد مقاس العرض max-w عشان الكارت نفسه ما يبقاش عريض قوي على الديسكتوب */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {featuredAgents.map((agent) => (
            <div
              key={agent.name}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-ink-200/80 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-card w-full max-w-[300px]"
            >
              <div className="flex flex-col items-center w-full">
                {/* إطار الصورة الطولي الأصلي وزي ما هو تماماً */}
                <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-brand-50/30 p-1 border border-brand-100/60">
                  {agent.image ? (
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="h-full w-full rounded-xl object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center rounded-xl bg-brand-50 font-display text-3xl font-bold text-brand-600">
                      {agent.name.charAt(0)}
                    </div>
                  )}

                  {/* زرار التواصل السريع أعلى الصورة */}
                  <button
                    onClick={() => navigate('/contact')}
                    className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-ink-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-brand-600 hover:text-white"
                    title="Contact Agent"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>

                {/* البيانات متسنترة وفي النص */}
                <div className="mt-5 text-center">
                  <h3 className="font-display text-xl font-bold text-ink-950 transition-colors duration-200 group-hover:text-brand-600">
                    {agent.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink-500 min-h-[32px]">{agent.role}</p>
                </div>
              </div>

              {/* أزرار الاتصال والواتساب بالأسفل */}
              <div className="mt-6 w-full border-t border-ink-100 pt-4 flex items-center justify-between gap-2">
                <a
                  href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-xs font-semibold text-ink-700 transition-colors hover:text-brand-600"
                >
                  <Phone className="h-4 w-4 text-brand-600" />
                  <span>{agent.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${agent.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-600 transition-colors hover:bg-emerald-500 hover:text-white"
                  title={`Chat with ${agent.name} on WhatsApp`}
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}