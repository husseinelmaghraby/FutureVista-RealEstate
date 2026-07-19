import { Phone, Users, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const featuredAgents = [
  { name: 'Sarah Ahmed', role: 'Luxury Villas Specialist', phone: '+971 4 555 0199' },
  { name: 'Michael Scott', role: 'Commercial & Retail Expert', phone: '+971 4 555 0200' },
  { name: 'Elena Rostova', role: 'Downtown & Marina Consultant', phone: '+971 4 555 0201' },
  { name: 'Karim Omar', role: 'Off-Plan Investment Advisor', phone: '+971 4 555 0202' },
];

export default function AgentsPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-ink-50/50 py-24 sm:py-32">
      {/* Background decoration elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

      <div className="container-x">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-950 sm:text-5xl">
            Meet Our Elite Agents
          </h1>
          <p className="mt-4 text-base text-ink-600">
            Connect with Dubai's most trusted real estate consultants. Expert guidance tailored to your property investments.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAgents.map((agent) => (
            <div
              key={agent.name}
              onClick={() => navigate('/contact')}
              className="group cursor-pointer rounded-2xl border border-ink-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-card"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                  <Users className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-ink-300 transition-colors duration-300 group-hover:text-brand-600" />
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-ink-950 transition-colors duration-200 group-hover:text-brand-600">
                {agent.name}
              </h3>
              <p className="mt-1 text-sm text-ink-500">{agent.role}</p>
              
              <div className="mt-6 border-t border-ink-100 pt-4">
                <p className="flex items-center gap-2 text-sm font-medium text-ink-700 transition-colors duration-200 group-hover:text-ink-900">
                  <Phone className="h-4 w-4 text-brand-600" /> {agent.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}