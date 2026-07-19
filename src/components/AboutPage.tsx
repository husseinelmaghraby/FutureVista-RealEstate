import { BarChart3, Globe2, Users2, UserCheck, ShieldCheck, Lightbulb, Star, Sparkles as Handshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-ink-950">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0">
          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />
        </div>
        <div className="container-x relative text-center">
          <h1 className="font-display text-3xl font-bold text-white sm:text-5xl">
            About Future Vista Properties
          </h1>
        </div>
      </section>

      {/* Intro copy */}
      <section className="border-t border-white/10">
        <div className="container-x max-w-4xl space-y-6 py-16 text-sm leading-relaxed text-white/70 sm:text-base">
          <p>
            With almost two decades of operation, standing the test of time through the ups and
            downs of global and regional economic dynamics, Future Vista Properties is one of
            the largest and most technologically advanced real estate companies in Dubai. On
            track to grow our network of professional real estate agents and dedicated support
            staff, Future Vista operates multiple branches across Dubai's most important
            communities.
          </p>
          <p>
            Future Vista Properties has built a fully holistic real estate ecosystem that
            provides clients, brokers, and employees with the best working and operating
            experience.
          </p>
          <p>
            Our comprehensive in-house services include Property Sales, Property Resale, Property
            Rental, Property Management, Conveyancing, Mortgage Advisory and Brokerage, Real
            Estate Development, Real Estate Development Management, Holiday Homes, PropTech,
            Interior Design, Construction Project Management, Property Engineered Snagging and
            Inspection, Property and Project Handover, and a Real Estate Training Academy.
          </p>
          <p>
            We take pride in our close collaboration with the Dubai Land Department and the
            government of Dubai. This partnership aims to create more value for all market
            stakeholders, enhance marketplace sustainability and growth, and continuously update,
            evolve, and innovate regulatory practices — guided by the vision of the leadership of
            Dubai.
          </p>
          <p>
            Our leadership team brings decades of real estate experience locally and globally.
            Their positive impact on the overall market has established Future Vista Properties
            as a trusted and authoritative voice in the property brokerage space in Dubai and the
            region.
          </p>
          <p>
            These services are designed to enable our brokers and back-office team members to
            deliver exceptional value to our clients. Our methodical approach ensures the highest
            quality in every service we offer, driven by data analytics, research, and customer
            service.
          </p>
          <p>
            Our team's hard work and dedication generate strong annual growth, all within a
            positive working culture governed by our core values: integrity, transparency,
            authenticity, respect, innovation, and kindness. Grounded in our deep belief in the
            power of teamwork, collaboration, and social responsibility, we invite and welcome
            clients, channel partners, other real estate companies, and market stakeholders to
            work together to create the best possible future for the Dubai real estate market.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-t border-white/10 pb-16">
        <div className="container-x grid gap-4 pt-10 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-display text-lg font-bold text-white">Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              To be the foremost real estate leader in Dubai, recognized globally for our
              innovation, integrity, and excellence, while fostering a sustainable and thriving
              marketplace for all stakeholders.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="font-display text-lg font-bold text-white">Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              To deliver exceptional real estate services through a comprehensive and
              technologically advanced ecosystem that empowers clients, brokers, and employees.
              We aim to drive value creation, enhance marketplace sustainability, and continuously
              innovate regulatory practices by collaborating with government entities and
              leveraging our expertise and market insights.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted partner */}
      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="container-x">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Every real estate decision. One trusted partner.
            </h2>
            <p className="mt-3 text-sm text-white/60 sm:text-base">
              We help people make well-informed decisions across every property decision through:
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <FeatureCard
              icon={BarChart3}
              title="Tech and Data"
              desc="This is how we deliver institutional-grade insight. Decisions are evidence-based, not opinion-led."
            />
            <FeatureCard
              icon={Globe2}
              title="Scale and size, as a knowledge hub"
              desc="Our scale translates into accumulated market knowledge and pattern recognition that smaller platforms cannot replicate."
            />
            <FeatureCard
              icon={Users2}
              title="Ecosystem knowledge across all services"
              desc="Stronger decisions occur when services like sales and mortgage inform each other, rather than operating in silos."
            />
            <FeatureCard
              icon={UserCheck}
              title="Client Centricity"
              desc="We prioritize long-term relationships, advising against transactions when needed to protect your best interests."
            />
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-8 sm:grid-cols-4">
            <Stat value="10,000+" label="Active Listings" />
            <Stat value="14 Years" label="of Experience" />
            <Stat value="24 Offices" label="across Dubai" />
            <Stat value="4.9★" label="Client Rating" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Core Values</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ValueCard
              icon={ShieldCheck}
              title="Integrity"
              desc="We uphold the highest ethical standards, ensuring transparency and honesty in all our interactions."
            />
            <ValueCard
              icon={Lightbulb}
              title="Innovation"
              desc="We continuously seek innovative solutions and leverage cutting-edge technology to enhance our services and operations."
            />
            <ValueCard
              icon={Star}
              title="Excellence"
              desc="We hold ourselves to the highest standards, striving for excellence in every client interaction and transaction."
            />
            <ValueCard
              icon={Handshake}
              title="Respect"
              desc="We treat every client, partner, and colleague with fairness, dignity, and genuine care."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-base font-bold text-white">{title}</h3>
        <Icon className="h-5 w-5 shrink-0 text-brand-400" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-base font-bold text-white">{title}</h3>
        <Icon className="h-5 w-5 shrink-0 text-brand-400" />
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-2xl font-bold text-white sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs text-white/60 sm:text-sm">{label}</div>
    </div>
  );
}