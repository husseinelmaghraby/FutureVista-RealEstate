import { useEffect, useRef, useState } from 'react';
import { Search, ArrowRight, MapPin, CalendarClock, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../data/propertiesData';

export type SearchTab = 'rent' | 'buy' | 'projects';

interface Props {
  activeTab: SearchTab;
  onTabChange: (t: SearchTab) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSearchSubmit: () => void;
}

const tabs: { key: SearchTab; label: string }[] = [
  { key: 'rent', label: 'Rent' },
  { key: 'buy', label: 'Buy' },
  { key: 'projects', label: 'Projects' },
];

export default function HeroSlider({
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  const go = (n: number) => setIndex((n + heroSlides.length) % heroSlides.length);
  const slide = heroSlides[index];

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col md:block"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
     {/* Background slides */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <div
    className="flex h-full transition-transform duration-[1200ms] ease-in-out"
    style={{
      width: `${heroSlides.length * 100}%`,
      transform: `translateX(-${index * (100 / heroSlides.length)}%)`,
    }}
  >
    {heroSlides.map((s, i) => (
      <div
        key={s.id}
        className="relative h-full shrink-0"
        style={{ width: `${100 / heroSlides.length}%` }}
      >
        <img
          src={s.image}
          alt={s.title}
          className="h-full w-full object-cover"
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      </div>
    ))}
  </div>
  <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/45 to-ink-950/90" />
  <div className="absolute inset-0 bg-gradient-to-r from-ink-950/60 via-transparent to-transparent" />
</div>

      {/* Slide arrows (Hidden on mobile for cleaner look, swipe/indicators can be used) */}
      <button
        onClick={() => go(index - 1)}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full glass text-white hover:bg-white/20 transition md:grid"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go(index + 1)}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full glass text-white hover:bg-white/20 transition md:grid"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide indicators */}
      <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            className="group flex items-center gap-2"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? 'w-10 bg-brand-500' : 'w-4 bg-white/40 group-hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Center content & Search Bar container */}
      <div className="container-x relative z-10 flex-1 flex flex-col justify-center pt-[calc(var(--header-h)+20px)] pb-6 md:pb-52 md:h-full">
        <div className="mx-auto w-full max-w-3xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white animate-fadeIn sm:mb-5 sm:px-4 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
            {slide.tag}
          </span>
          <h1 className="font-display text-2xl font-bold leading-[1.15] text-white text-balance my-2 sm:text-5xl lg:text-6xl animate-slideUp">
            Find Your Address
            <br />
            <span className="text-brand-400">In Dubai's Skyline</span>
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-base text-white/80 animate-fadeIn">
            Browse 10,000+ curated off-plan, ready, and luxe properties — backed by real-time
            market data and award-winning agents.
          </p>
        </div>

        {/* Floating search bar */}
        <div className="mx-auto mt-4 w-full max-w-3xl animate-slideUp sm:mt-8">
          {/* Tabs */}
          <div className="mb-3 flex justify-center">
            <div className="inline-flex items-center justify-center gap-1 rounded-full bg-white p-1 shadow-lg shadow-ink-950/20">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => onTabChange(t.key)}
                  className={`relative rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm ${
                    activeTab === t.key
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearchSubmit();
            }}
            className="flex flex-col gap-2 rounded-xl bg-white p-1.5 shadow-glow md:flex-row md:items-center md:rounded-full md:pl-5"
          >
            <div className="flex flex-1 items-center gap-2 rounded-lg bg-white px-3 md:gap-3 md:bg-transparent md:px-0">
              <Search className="h-4 w-4 shrink-0 text-ink-400 sm:h-5 sm:w-5" />
              <input
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by area or project name..."
                className="w-full bg-transparent py-2.5 text-xs sm:text-sm font-medium text-ink-900 placeholder-ink-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-brand-600/30 transition-all hover:bg-brand-700 active:scale-[0.98] md:w-auto md:rounded-full md:px-6 md:py-3.5 md:text-sm"
            >
              <span>Search</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Dynamic project details overlay */}
      <div className="relative z-10 w-full mt-auto md:absolute md:inset-x-0 md:bottom-0">
        <div className="container-x pb-6 sm:pb-8">
          <div className="relative overflow-hidden rounded-2xl glass border border-white/10 p-4 shadow-glow sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-white">
                    <span className="h-1 w-1 rounded-full bg-white" /> Featured
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-white/85">
                    <MapPin className="h-3 w-3" /> {slide.location}
                  </span>
                </div>
                <h2 className="font-display text-base font-bold text-white sm:text-2xl lg:text-[28px]">
                  {slide.title}
                </h2>
                <p className="mt-1 max-w-2xl text-xs sm:text-sm text-white/75">{slide.subtitle}</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-end lg:flex-col lg:items-end">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                  <div>
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/55">Price</div>
                    <div className="font-display text-sm font-bold text-white sm:text-xl">{slide.price}</div>
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/55">Payment Plan</div>
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white">
                      <CalendarClock className="h-3.5 w-3.5 text-brand-400" />
                      {slide.paymentPlan}
                    </div>
                  </div>
                </div>
                <button className="group inline-flex items-center justify-center gap-2 self-start rounded-full bg-white px-4 py-2.5 text-[11px] sm:text-[13px] font-bold uppercase tracking-wide text-ink-900 transition-all hover:bg-brand-600 hover:text-white sm:self-start lg:self-end">
                  Discover More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* Slide dots (mobile) */}
            <div className="mt-4 flex items-center justify-center gap-1.5 lg:hidden">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => go(i)}
                  className={`h-1 rounded-full transition-all ${
                    i === index ? 'w-8 bg-brand-500' : 'w-3 bg-white/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}