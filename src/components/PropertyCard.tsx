import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin, ArrowUpRight, Heart, CalendarClock, Building2 } from 'lucide-react';
import type { Property } from '../data/propertiesData';

export default function PropertyCard({ property }: { property: Property }) {
  const isOffPlan = property.status === 'Off-plan';
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Link to={`/property/${property.id}`} className="absolute inset-0 z-[1]" aria-label={property.title} />
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/55 via-transparent to-transparent" />

        {/* Status badge */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm ${
              isOffPlan ? 'bg-brand-600 text-white' : 'bg-emerald-500 text-white'
            }`}
          >
            {property.status}
          </span>
          {property.luxe && (
            <span className="rounded-full bg-gold-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-950 shadow-sm">
              Luxe
            </span>
          )}
        </div>

        {/* Favorite */}
        <button
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full glass text-white transition-colors hover:bg-brand-600 hover:text-white"
          aria-label="Save property"
        >
          <Heart className="h-4 w-4" />
        </button>

        {/* Price overlay */}
        <div className="absolute bottom-3 left-3">
          <div className="font-display text-lg font-bold text-white drop-shadow sm:text-xl">
            {property.priceLabel}
          </div>
          {isOffPlan && (
            <div className="mt-0.5 inline-flex items-center gap-1 rounded-full glass px-2 py-0.5 text-[11px] font-medium text-white">
              <CalendarClock className="h-3 w-3" /> {property.paymentPlan} · {property.handover}
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-display text-[15px] font-bold text-ink-900">
              {property.title}
            </h3>
            <div className="mt-1 flex items-center gap-1 text-xs text-ink-500">
              <MapPin className="h-3 w-3 shrink-0 text-brand-500" />
              <span className="truncate">{property.area}</span>
            </div>
          </div>
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-ink-50 text-ink-500 transition-colors group-hover:bg-brand-600 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        {/* Specs */}
        <div className="mt-4 flex items-center gap-4 border-y border-ink-100 py-3 text-xs text-ink-700">
          <Spec icon={Bed} value={property.beds === 0 ? 'Studio' : property.beds} label="Beds" />
          <Spec icon={Bath} value={property.baths} label="Baths" />
          <Spec icon={Maximize} value={`${property.size.toLocaleString()}`} label="sqft" />
        </div>

        {/* Developer */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-ink-500">
            <Building2 className="h-3.5 w-3.5" />
            <span className="font-medium text-ink-700">{property.developer}</span>
          </div>
          <span className="chip bg-brand-50 text-brand-700">{property.type}</span>
        </div>
      </div>
    </article>
  );
}

function Spec({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string | number;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="h-4 w-4 text-brand-500" />
      <span className="font-semibold text-ink-900">{value}</span>
      <span className="text-ink-400">{label}</span>
    </div>
  );
}
