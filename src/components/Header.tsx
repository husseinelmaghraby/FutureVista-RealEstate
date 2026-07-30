import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Phone,
  Menu,
  X,
  Building2,
  Home,
  KeyRound,
  Crown,
  Store,
  TrendingUp,
  Compass,
  MoreHorizontal,
  Tag,
  Users,
  Wrench,
  MapPin,
} from 'lucide-react';

import logoImg from '../assets/logofuture.png';
interface NavChild {
  label: string;
  desc?: string;
  icon?: React.ComponentType<{ className?: string }>;
  to: string;
}
interface NavItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  to?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: 'New Projects', icon: Building2, to: '/' },
  {
    label: 'Buy',
    icon: Home,
    to: '/listings/buy',
    children: [
      { label: 'Apartments for Sale', desc: 'Studios to 4-bed apartments', icon: Home, to: '/listings/buy?type=apartment' },
      { label: 'Villas for Sale', desc: 'Standalone & townhouses', icon: Building2, to: '/listings/buy?type=villa' },
      { label: 'Penthouses', desc: 'Sky-high luxury living', icon: Crown, to: '/listings/buy?type=penthouse' },
      { label: 'Commercial', desc: 'Offices & retail spaces', icon: Store, to: '/listings/commercial' },
    ],
  },
  /*
  {
    label: 'Rent',
    icon: KeyRound,
    to: '/listings/rent',
    children: [
      { label: 'Apartments for Rent', desc: 'Short & long term', icon: Home, to: '/listings/rent?type=apartment' },
      { label: 'Villas for Rent', desc: 'Family-friendly homes', icon: Building2, to: '/listings/rent?type=villa' },
      { label: 'Furnished Homes', desc: 'Move-in ready', icon: KeyRound, to: '/listings/rent?type=furnished' },
      { label: 'Annual Rentals', desc: 'Best priced leases', icon: Tag, to: '/listings/rent?type=annual' },
    ],
  },
  */
  {
    label: 'Luxe',
    icon: Crown,
    to: '/listings/luxe',
    children: [
      { label: 'Signature Penthouses', desc: 'Exclusive listings', icon: Crown, to: '/listings/luxe?type=signature' },
      { label: 'Private Islands', desc: 'Ultra-luxury estates', icon: MapPin, to: '/listings/luxe' },
      { label: 'Mansions', desc: 'Palm & Meydan', icon: Building2, to: '/listings/luxe?type=mansions' },
      { label: 'Brand Residences', desc: 'Designer interiors', icon: Crown, to: '/listings/luxe?type=brand' },
    ],
  },
  {
    label: 'Commercial',
    icon: Store,
    to: '/listings/commercial',
    children: [
      { label: 'Offices', desc: 'Grade-A workspaces', icon: Building2, to: '/listings/commercial?type=offices' },
      { label: 'Retail Spaces', desc: 'High footfall locations', icon: Store, to: '/listings/commercial?type=retail' },
      { label: 'Warehouses', desc: 'Logistics & storage', icon: Store, to: '/listings/commercial?type=warehouses' },
      { label: 'Staff Housing', desc: 'Accommodation solutions', icon: Home, to: '/listings/commercial?type=staff' },
    ],
  },
  { label: 'Sell', icon: Tag, to: '/listings/projects' },
{ label: 'Agents', icon: Users, to: '/agents' },
  /* { label: 'Services', icon: Wrench, to: '/listings/buy' },*/
  /*
  {
    label: 'Trends',
    icon: TrendingUp,
    to: '/listings/buy',
    children: [
      { label: 'Market Reports', desc: 'Q-by-Q analytics', icon: TrendingUp, to: '/listings/buy' },
      { label: 'Price Index', desc: 'Live AED/sqft trends', icon: TrendingUp, to: '/listings/buy' },
      { label: 'ROI Calculator', desc: 'Yield projections', icon: Compass, to: '/listings/buy' },
    ],
  },
  */
  
  /*
  {
    label: 'Explore',
    icon: Compass,
    to: '/listings/buy',
    children: [
      { label: 'Neighbourhoods', desc: 'Area guides', icon: MapPin, to: '/listings/buy' },
      { label: 'Developers', desc: 'Top builders', icon: Building2, to: '/listings/buy' },
      { label: 'Investment Zones', desc: 'Freehold areas', icon: Compass, to: '/listings/buy' },
      { label: 'Mortgage Hub', desc: 'Finance your home', icon: Wrench, to: '/listings/buy' },
    ],
  },
  */
  {
    label: 'More',
    icon: MoreHorizontal,
    to: '#',
    children: [
      { label: 'About US', desc: 'Our story', icon: Users, to: '/about' },
    /*  { label: 'Careers', desc: 'Join the team', icon: Users, to: '/listings/buy' },*/
     /* { label: 'Media Centre', desc: 'Press & news', icon: Compass, to: '/listings/buy' },*/
{ label: 'Contact', desc: 'Reach out', icon: Phone, to: '/contact' },    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-soft backdrop-blur-md'
          : 'bg-gradient-to-b from-black/55 via-black/25 to-transparent'
      }`}
    >
      {/* 1. Top utility bar */}
      <div className="hidden" />

      {/* 2. Main nav */}
      <div className="container-x flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center gap-2.5 group">
          {/* تم إضافة المربع الأسود هنا للديسكتوب */}
          <div className="grid h-14 w-14 place-items-center rounded-lg bg-ink-950 p-1 shrink-0 transition-transform group-hover:scale-105">
            <img
              src={logoImg}
              alt="FV Icon"
              className="h-full w-full object-contain"
            />
          </div>

          <span className="leading-none flex flex-col items-center text-center">
            <span
              className={`block font-display text-[15px] font-bold tracking-wider uppercase ${
                scrolled ? 'text-ink-900' : 'text-white'
              }`}
            >
              FUTURE VISTA
            </span>
            <span
              className={`mt-1 block text-[7.5px] font-semibold uppercase tracking-[0.3em] ${
                scrolled ? 'text-ink-500' : 'text-white/70'
              }`}
            >
              REAL ESTATE
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-1 xl:gap-1.5 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const hasChildren = !!item.children?.length;
            const open = openDropdown === item.label;
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                <Link
                  to={item.to ?? '#'}
                  className={`flex items-center gap-1 rounded-lg px-2 py-1.5 text-[12px] font-medium transition-all ${
                    scrolled ? 'text-ink-800 hover:bg-ink-50' : 'text-white/95 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="h-3 w-3 opacity-65 shrink-0" />
                  <span className="whitespace-nowrap">{item.label}</span>
                  {hasChildren && <ChevronDown className={`h-2.5 w-2.5 opacity-60 transition-transform duration-200 shrink-0 ${open ? 'rotate-180' : ''}`} />}
                </Link>
               {hasChildren && open && (
  <div className="hidden md:block absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-2">
                    <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white p-2 shadow-card animate-scaleIn">
                      {item.children!.map((c) => {
                        const CIcon = c.icon ?? ChevronDown;
                        return (
                          <Link
                            key={c.label}
                            to={c.to}
                            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-ink-50"
                          >
                            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                              <CIcon className="h-4 w-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-ink-900">{c.label}</span>
                              {c.desc && <span className="block text-xs text-ink-500">{c.desc}</span>}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

       {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/contact"
            className={`hidden items-center gap-1 rounded-full px-3 py-1.5 text-[12px] font-semibold transition-all sm:flex ${
              scrolled
                ? 'bg-ink-900 text-white hover:bg-ink-800'
                : 'bg-white/15 text-white backdrop-blur hover:bg-white/25'
            }`}
          >
            <Phone className="h-3 w-3" /> Contact
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className={`grid h-9 w-9 place-items-center rounded-lg transition-colors md:hidden ${
              scrolled ? 'text-ink-900 hover:bg-ink-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-ink-950/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[420px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-ink-100 p-4">
            {/* اللوجو المطور للموبايل بـ Tailwind كلاسس نظيفة وجوا المربع الأسود */}
            <div className="flex items-center gap-2.5">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-ink-950 p-1 shrink-0">
                <img 
                  src={logoImg} 
                  alt="FV Icon" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-display text-sm font-bold text-ink-900 tracking-wider uppercase">FUTURE VISTA</span>
                <span className="text-[7.5px] font-semibold text-ink-500 tracking-[0.2em] uppercase mt-1">REAL ESTATE</span>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            {navItems.map((item) => {
  const Icon = item.icon;
  const hasChildren = !!item.children?.length;

  if (!hasChildren) {
    return (
      <Link
        key={item.label}
        to={item.to ?? '#'}
        onClick={() => setMobileOpen(false)}
        className="flex items-center gap-3 border-b border-ink-50 px-3 py-3.5 text-sm font-semibold text-ink-900 hover:bg-ink-50"
      >
        <Icon className="h-4 w-4 text-brand-600" />
        <span className="flex-1">{item.label}</span>
      </Link>
    );
  }

  return (
    <details key={item.label} className="group border-b border-ink-50">
      <summary className="flex cursor-pointer list-none items-center gap-3 px-3 py-3.5 text-sm font-semibold text-ink-900">
        <Icon className="h-4 w-4 text-brand-600" />
        <span className="flex-1">{item.label}</span>
        <ChevronDown className="h-4 w-4 text-ink-400 transition-transform group-open:rotate-180" />
      </summary>
      <div className="pb-2 pl-11">
        {item.children!.map((c) => (
          <Link
            key={c.label}
            to={c.to}
            onClick={() => setMobileOpen(false)}
            className="block rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-ink-50 hover:text-brand-600"
          >
            {c.label}
          </Link>
        ))}
      </div>
    </details>
  );
})}
          </div>
         <div className="border-t border-ink-100 p-4">
  <Link
    to="/contact"
    onClick={() => setMobileOpen(false)}
    className="btn-primary w-full"
  >
    <Phone className="h-4 w-4" /> Contact
  </Link>
</div>
        </aside>
      </div>
    </header>
  );
}