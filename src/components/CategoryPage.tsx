import { useMemo } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Building2, Sparkles, ArrowRight, Home as HomeIcon } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { properties } from '../data/propertiesData';

const categoryMeta: Record<string, { title: string; subtitle: string }> = {
  buy: {
    title: 'Properties for Sale',
    subtitle: "Curated ready and off-plan properties from the city's top developers.",
  },
  rent: {
    title: 'Homes for Rent',
    subtitle: "Flexible rental homes across Dubai's most sought-after communities.",
  },
  projects: {
    title: 'New Off-Plan Launches',
    subtitle: "Be the first to invest in Dubai's most anticipated off-plan developments.",
  },
  commercial: {
    title: 'Commercial Properties',
    subtitle: 'Grade-A offices, retail, and industrial spaces across Dubai.',
  },
  luxe: {
    title: 'Luxe Residences',
    subtitle: 'Ultra-luxury homes, penthouses, and private estates.',
  },
};

const typeFilterMap: Record<string, string> = {
  apartment: 'Apartment',
  villa: 'Villa',
  penthouse: 'Penthouse',
  townhouse: 'Townhouse',
  office: 'Commercial',
  retail: 'Commercial',
  furnished: 'Apartment',
  annual: 'Apartment',
  signature: 'Penthouse',
  mansions: 'Villa',
  brand: 'Penthouse',
  offices: 'Commercial',
  warehouses: 'Commercial',
  staff: 'Apartment',
};

export default function CategoryPage() {
  const { category = 'buy' } = useParams();
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type')?.toLowerCase() ?? '';
  const typeFilter = typeFilterMap[typeParam];

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (category === 'luxe') {
        if (!p.luxe) return false;
      } else if (category === 'commercial') {
        if (p.type !== 'Commercial') return false;
      } else if (p.category !== category) {
        return false;
      }
      if (typeFilter && p.type !== typeFilter) return false;
      return true;
    });
  }, [category, typeFilter]);

  const meta = categoryMeta[category] ?? categoryMeta.buy;

  return (
    <div className="min-h-screen bg-ink-50/60">
      {/* Breadcrumb + header */}
      <div className="border-b border-ink-100 bg-white">
        <div className="container-x py-10 sm:py-14">
          <nav className="mb-4 flex items-center gap-2 text-xs text-ink-500">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-600">
              <HomeIcon className="h-3.5 w-3.5" /> Home
            </Link>
            <span className="text-ink-300">/</span>
            <span className="font-semibold text-ink-800">{meta.title}</span>
          </nav>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                <Sparkles className="h-3.5 w-3.5" /> {meta.title}
              </span>
              <h1 className="mt-3 section-title">{meta.title}</h1>
              <p className="mt-2 max-w-xl text-sm text-ink-600">{meta.subtitle}</p>
            </div>
            <div className="text-sm text-ink-500">
              <span className="font-semibold text-ink-900">{filtered.length}</span> properties
              {typeFilter && <span className="ml-1">in {typeFilter}s</span>}
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-ink-200 bg-white p-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink-100 text-ink-400">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">No matches found</h3>
              <p className="mt-1 text-sm text-ink-500">
                Try a different category or filter to find more properties.
              </p>
              <Link to="/" className="btn-primary mt-5 inline-flex">
                Back Home <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
