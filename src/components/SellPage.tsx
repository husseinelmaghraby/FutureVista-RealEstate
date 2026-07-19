import { useState, useMemo } from 'react';
import { Building2, MapPin, Bed, Bath, Maximize, SlidersHorizontal, ArrowUpRight } from 'lucide-react';
// استيراد البيانات الفعلية من مشروعك
import { properties as allProperties } from '../data/propertiesData';

interface Property {
  id: string;
  title: string;
  image: string;
  price: number | string; // مجهزة لتقبل الأرقام من ملف البيانات أو النصوص
  location: string;
  beds: number;
  baths: number;
  area: string;
  developer: string;
  type: string;
  category: 'buy' | 'rent' | 'projects';
  isOffPlan?: boolean;
  paymentPlan?: string;
  luxe?: boolean;
}

export default function SellPage() {
  // تصفية البيانات تلقائيًا لعرض عقارات البيع والمشروعات الجديدة فقط
  const sellProperties = useMemo(() => {
    return allProperties.filter(
      (p) => p.category === 'buy' || p.category === 'projects'
    );
  }, []);

  // تنسيق عرض الأسعار لو كانت أرقام مجردة في ملف البيانات
  const formatPrice = (price: number | string) => {
    if (typeof price === 'number') {
      if (price >= 1000000) return `AED ${(price / 1000000).toFixed(1)}M`;
      if (price >= 1000) return `AED ${(price / 1000).toFixed(0)}K`;
      return `AED ${price}`;
    }
    return price;
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Properties For Sale
          </h1>
          <p className="mt-2 text-slate-500">
            Be the first to invest in Dubai's most anticipated off-plan & ready launches.
          </p>
        </div>

        {/* Filters Button Row */}
        <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-slate-200 pb-6">
          <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50">
            <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
          <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50">
            <MapPin className="h-4 w-4 text-rose-600" /> All Locations
          </button>
          <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50">
            <Building2 className="h-4 w-4 text-rose-600" /> All Types
          </button>
        </div>

        {/* Property Grid */}
        {sellProperties.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sellProperties.map((property) => (
              <div 
                key={property.id} 
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* شارة تحت الإنشاء في حال كانت من قسم المشاريع أو معلمة بـ off-plan */}
                  {(property.category === 'projects' || property.isOffPlan) && (
                    <span className="absolute left-4 top-4 rounded-lg bg-red-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                      Off-Plan
                    </span>
                  )}

                  {/* Price overlay */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold tracking-tight">
                      {formatPrice(property.price)}
                    </div>
                    {property.paymentPlan && (
                      <div className="mt-1 inline-block rounded-md bg-white/20 px-2 py-0.5 text-[11px] font-medium backdrop-blur-sm">
                        {property.paymentPlan}
                      </div>
                    )}
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-1">
                      {property.title}
                    </h3>
                    <button className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-slate-50 text-slate-700 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                    <span className="line-clamp-1">{property.location}</span>
                  </div>

                  <hr className="my-4 border-slate-100" />

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs font-medium text-slate-700">
                    <div className="flex items-center gap-1.5 justify-center bg-slate-50 py-2 rounded-xl">
                      <Bed className="h-3.5 w-3.5 text-slate-400" />
                      <span>{property.beds === 0 ? 'Studio' : `${property.beds} Beds`}</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center bg-slate-50 py-2 rounded-xl">
                      <Bath className="h-3.5 w-3.5 text-slate-400" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5 justify-center bg-slate-50 py-2 rounded-xl">
                      <Maximize className="h-3.5 w-3.5 text-slate-400" />
                      <span className="line-clamp-1">{property.area}</span>
                    </div>
                  </div>

                  {/* Developer & Type Footer */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3 text-xs">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                      <Building2 className="h-3.5 w-3.5 text-slate-400" />
                      <span className="line-clamp-1">{property.developer}</span>
                    </div>
                    <span className="rounded-full bg-red-50 px-3 py-1 font-semibold text-red-600">
                      {property.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-200 bg-white p-12 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-slate-100 text-slate-400">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-slate-900">No properties for sale</h3>
            <p className="mt-1 text-sm text-slate-500">There are currently no listings available under the sale category.</p>
          </div>
        )}

      </div>
    </div>
  );
}