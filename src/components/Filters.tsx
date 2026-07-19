import { useState } from 'react';
import { SlidersHorizontal, MapPin, Building, BedDouble, X, RotateCcw, Check } from 'lucide-react';
import { locations, propertyTypes, bedroomOptions } from '../data/propertiesData';

export interface FilterState {
  location: string;
  type: string;
  beds: string;
  minPrice: number;
  maxPrice: number;
}

export const defaultFilters: FilterState = {
  location: 'All Locations',
  type: 'All Types',
  beds: 'Any',
  minPrice: 0,
  maxPrice: 35000000,
};

interface Props {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  resultCount: number;
}

const pricePresets = [
  { label: 'Any', min: 0, max: 35000000 },
  { label: 'Under 1M', min: 0, max: 1000000 },
  { label: '1M – 3M', min: 1000000, max: 3000000 },
  { label: '3M – 8M', min: 3000000, max: 8000000 },
  { label: '8M – 20M', min: 8000000, max: 20000000 },
  { label: '20M+', min: 20000000, max: 35000000 },
];

export default function Filters({ filters, onChange, resultCount }: Props) {
  const [open, setOpen] = useState(false);

  const update = (patch: Partial<FilterState>) => onChange({ ...filters, ...patch });
  const reset = () => onChange(defaultFilters);

  const activeCount =
    (filters.location !== 'All Locations' ? 1 : 0) +
    (filters.type !== 'All Types' ? 1 : 0) +
    (filters.beds !== 'Any' ? 1 : 0) +
    (filters.minPrice !== 0 || filters.maxPrice !== 35000000 ? 1 : 0);

  return (
    <div className="relative">
      {/* Inline filter bar */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => setOpen((o) => !o)}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
            open || activeCount > 0
              ? 'border-brand-600 bg-brand-600 text-white shadow-lg shadow-brand-600/25'
              : 'border-ink-200 bg-white text-ink-800 hover:border-brand-500 hover:text-brand-600'
          }`}
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeCount > 0 && (
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-white/25 px-1 text-[11px] font-bold">
              {activeCount}
            </span>
          )}
        </button>

        {/* Quick selects */}
        <div className="flex flex-1 flex-wrap items-center gap-2">
          <SelectChip
            icon={MapPin}
            value={filters.location}
            options={locations}
            onChange={(v) => update({ location: v })}
          />
          <SelectChip
            icon={Building}
            value={filters.type}
            options={propertyTypes as string[]}
            onChange={(v) => update({ type: v })}
          />
          <SelectChip
            icon={BedDouble}
            value={filters.beds}
            options={bedroomOptions}
            onChange={(v) => update({ beds: v })}
          />
        </div>

        <div className="ml-auto flex items-center gap-3">
          <span className="hidden text-sm text-ink-500 sm:inline">
            <span className="font-bold text-ink-900">{resultCount}</span> listings
          </span>
          {activeCount > 0 && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold text-ink-600 hover:bg-ink-100 hover:text-brand-600"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Expanded panel */}
      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-ink-900">Advanced Filters</h3>
              <button
                onClick={() => setOpen(false)}
                className="grid h-8 w-8 place-items-center rounded-lg text-ink-500 hover:bg-ink-100"
                aria-label="Close filters"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-4">
              {/* Location */}
              <FilterGroup label="Location" icon={MapPin}>
                <div className="flex flex-wrap gap-1.5">
                  {locations.map((l) => (
                    <button
                      key={l}
                      onClick={() => update({ location: l })}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        filters.location === l
                          ? 'bg-brand-600 text-white'
                          : 'bg-ink-50 text-ink-700 hover:bg-ink-100'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </FilterGroup>

              {/* Type */}
              <FilterGroup label="Property Type" icon={Building}>
                <div className="flex flex-wrap gap-1.5">
                  {propertyTypes.map((t) => (
                    <button
                      key={t}
                      onClick={() => update({ type: t })}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        filters.type === t
                          ? 'bg-brand-600 text-white'
                          : 'bg-ink-50 text-ink-700 hover:bg-ink-100'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </FilterGroup>

              {/* Beds */}
              <FilterGroup label="Bedrooms" icon={BedDouble}>
                <div className="flex flex-wrap gap-1.5">
                  {bedroomOptions.map((b) => (
                    <button
                      key={b}
                      onClick={() => update({ beds: b })}
                      className={`min-w-9 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                        filters.beds === b
                          ? 'bg-brand-600 text-white'
                          : 'bg-ink-50 text-ink-700 hover:bg-ink-100'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </FilterGroup>

              {/* Price */}
              <FilterGroup label="Price Range" icon={SlidersHorizontal}>
                <div className="space-y-2.5">
                  {pricePresets.map((p) => {
                    const active = filters.minPrice === p.min && filters.maxPrice === p.max;
                    return (
                      <button
                        key={p.label}
                        onClick={() => update({ minPrice: p.min, maxPrice: p.max })}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                          active
                            ? 'bg-brand-50 text-brand-700 ring-1 ring-brand-200'
                            : 'text-ink-700 hover:bg-ink-50'
                        }`}
                      >
                        {p.label}
                        {active && <Check className="h-3.5 w-3.5" />}
                      </button>
                    );
                  })}
                </div>
              </FilterGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-500">
        <Icon className="h-3.5 w-3.5 text-brand-500" />
        {label}
      </div>
      {children}
    </div>
  );
}

function SelectChip({
  icon: Icon,
  value,
  options,
  onChange,
}: {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-ink-800 transition-colors hover:border-brand-500 hover:text-brand-600"
      >
        <Icon className="h-3.5 w-3.5 text-brand-500" />
        <span className="max-w-[140px] truncate">{value}</span>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-30 mt-2 max-h-64 w-56 overflow-y-auto rounded-xl border border-ink-100 bg-white p-1.5 shadow-card animate-scaleIn">
          {options.map((o) => (
            <button
              key={o}
              onClick={() => {
                onChange(o);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-medium transition-colors ${
                value === o ? 'bg-brand-50 text-brand-700' : 'text-ink-700 hover:bg-ink-50'
              }`}
            >
              {o}
              {value === o && <Check className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
