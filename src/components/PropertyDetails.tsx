import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Bed,
  Bath,
  Maximize,
  Building2,
  Eye,
  Hash,
  CalendarClock,
  MapPin,
  MessageCircle,
  Mail,
  Share2,
  Heart,
  Home as HomeIcon,
  CheckCircle2,
} from 'lucide-react';
import { properties, formatPrice } from '../data/propertiesData';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [showAll, setShowAll] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen bg-ink-50/60">
        <div className="container-x py-24 text-center">
          <h1 className="font-display text-2xl font-bold text-ink-900">Property not found</h1>
          <p className="mt-2 text-sm text-ink-500">The property you are looking for is no longer available.</p>
          <Link to="/" className="btn-primary mt-6 inline-flex">
            <ArrowLeft className="h-4 w-4" /> Back Home
          </Link>
        </div>
      </div>
    );
  }

  const images = property.images.length > 0 ? property.images : [property.image, ...property.gallery];
  const mainImage = images[0];
  const thumbs = images.slice(1, 5);
  const remaining = images.length - 5;

  const specs = [
    { icon: Building2, label: 'Type', value: property.type },
    { icon: Maximize, label: 'Size', value: `${property.size.toLocaleString()} sqft` },
    { icon: Bed, label: 'Bedrooms', value: property.beds === 0 ? 'Studio' : property.beds },
    { icon: Bath, label: 'Bathrooms', value: property.baths },
    { icon: Building2, label: 'Developer', value: property.developer },
    { icon: Eye, label: 'View', value: property.view },
    { icon: Hash, label: 'Ref No', value: property.refNo },
    { icon: CalendarClock, label: 'Completion', value: property.completionDate },
  ];

  return (
    <div className="min-h-screen bg-ink-50/60">
      {/* Breadcrumb */}
      <div className="border-b border-ink-100 bg-white">
        <div className="container-x py-4">
          <nav className="flex items-center gap-2 text-xs text-ink-500">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-brand-600">
              <HomeIcon className="h-3.5 w-3.5" /> Home
            </Link>
            <span className="text-ink-300">/</span>
            <Link to={`/listings/${property.category}`} className="capitalize hover:text-brand-600">
              {property.category}
            </Link>
            <span className="text-ink-300">/</span>
            <span className="truncate font-semibold text-ink-800">{property.title}</span>
          </nav>
        </div>
      </div>

      <div className="container-x py-8 sm:py-10">
        {/* Back link */}
        <Link
          to={`/listings/${property.category}`}
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-brand-600"
        >
          <ArrowLeft className="h-4 w-4" /> Back to {property.category} listings
        </Link>

        {/* Title row */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                  property.status === 'Off-plan' ? 'bg-brand-600 text-white' : 'bg-emerald-500 text-white'
                }`}
              >
                {property.status}
              </span>
              {property.luxe && (
                <span className="rounded-full bg-gold-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-950">
                  Luxe
                </span>
              )}
              <span className="inline-flex items-center gap-1 rounded-full bg-ink-100 px-2.5 py-1 text-[11px] font-medium text-ink-600">
                <Hash className="h-3 w-3" /> {property.refNo}
              </span>
            </div>
            <h1 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl lg:text-4xl">
              {property.title}
            </h1>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-ink-600">
              <MapPin className="h-4 w-4 text-brand-500" />
              <span>{property.area}</span>
              <span className="text-ink-300">·</span>
              <span className="text-ink-500">Listed {property.listedTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-600 hover:bg-ink-50"
              aria-label="Share"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-600 hover:bg-brand-50 hover:text-brand-600"
              aria-label="Save"
            >
              <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-2 rounded-2xl overflow-hidden md:grid-cols-4">
          <div className="md:col-span-2 md:row-span-2 h-[300px] md:h-[450px]">
            <img
              src={mainImage}
              alt={property.title}
              className="h-full w-full object-cover"
            />
          </div>
          {thumbs.slice(0, 3).map((src, i) => (
            <div key={i} className="relative h-[140px] md:h-[221px]">
              <img src={src} alt={`${property.title} ${i + 2}`} className="h-full w-full object-cover" />
            </div>
          ))}
          {thumbs[3] && (
            <button
              onClick={() => setShowAll(true)}
              className="group relative h-[140px] md:h-[221px]"
            >
              <img src={thumbs[3]} alt="More" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-ink-950/55 transition-colors group-hover:bg-ink-950/65" />
              <span className="absolute inset-0 grid place-items-center text-sm font-bold text-white">
                {remaining > 0 ? `+${remaining} Photos` : 'Show All Photos'}
              </span>
            </button>
          )}
        </div>

        {/* Body grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left: info */}
          <div className="lg:col-span-2">
            {/* Price */}
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
              <div>
                <div className="text-xs uppercase tracking-wider text-ink-500">
                  {property.category === 'rent' ? 'Annual Rent' : 'Asking Price'}
                </div>
                <div className="mt-1 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                  {formatPrice(property.price)}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-ink-600">
                <CalendarClock className="h-4 w-4 text-brand-500" />
                <span>
                  {property.paymentPlan} · {property.handover}
                </span>
              </div>
            </div>

            {/* Spec cards */}
            <h2 className="mb-3 font-display text-lg font-bold text-ink-900">Property Specifications</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {specs.map((s) => (
                <div key={s.label} className="rounded-xl bg-gray-50/50 p-4">
                  <div className="flex items-center gap-2 text-brand-600">
                    <s.icon className="h-4 w-4" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                      {s.label}
                    </span>
                  </div>
                  <div className="mt-1.5 text-sm font-bold text-ink-900">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <h2 className="mt-8 mb-3 font-display text-lg font-bold text-ink-900">Description</h2>
            <p className="text-sm leading-relaxed text-ink-700">{property.description}</p>

            {/* Highlights */}
            <h2 className="mt-8 mb-3 font-display text-lg font-bold text-ink-900">Highlights</h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                'Prime location with strong rental demand',
                'Award-winning developer track record',
                'Flexible payment plan available',
                'High ROI potential in off-plan corridor',
                'Premium community amenities',
                'RERA-regulated listing',
              ].map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-ink-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: sticky brand inquiry */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
                <div className="mb-4 flex items-center gap-3 border-b border-ink-100 pb-4">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-ink-950 text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold uppercase tracking-wider text-ink-900">
                      Future Vista
                    </div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
                      Real Estate
                    </div>
                  </div>
                </div>
                <div className="mb-4 text-sm text-ink-600">
                  Interested in this property? Reach out to our team for pricing, payment plans,
                  and viewings.
                </div>
                <a
                  href={`https://wa.me/97145550199?text=${encodeURIComponent(
                    `Hello, I'm interested in ${property.title} (Ref: ${property.refNo})`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
                </a>
                <a
                  href="mailto:info@futurevista.ae"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4" /> Message / Email Inquiry
                </a>
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-ink-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Typically replies within minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {showAll && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4"
          onClick={() => setShowAll(false)}
        >
          <button
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close gallery"
          >
            ✕
          </button>
          <div className="grid max-h-[90vh] max-w-5xl grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${property.title} ${i + 1}`}
                className="h-48 w-full rounded-lg object-cover sm:h-64"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
