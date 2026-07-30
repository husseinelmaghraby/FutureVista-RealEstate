import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Send } from 'lucide-react';
import logoImg from '../assets/logofuture.png';

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://www.facebook.com/share/18eJUMsjnd/?mibextid=wwXIfr',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/future.vista',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/future-vista-dubai/',
  },
];

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: 'Dubai Properties',
    links: [
      { label: 'Downtown Dubai', to: '/listings/buy' },
      { label: 'Dubai Marina', to: '/listings/buy' },
      { label: 'Business Bay', to: '/listings/buy' },
      { label: 'Palm Jumeirah', to: '/listings/buy' },
      { label: 'JVC', to: '/listings/buy' },
      { label: 'Dubai Creek Harbour', to: '/listings/buy' },
      { label: 'Bluewaters Island', to: '/listings/buy' },
      { label: 'Meydan City', to: '/listings/buy' },
    ],
  },
  {
    title: 'Properties for Sale',
    links: [
      { label: 'Apartments for Sale', to: '/listings/buy?type=apartment' },
      { label: 'Villas for Sale', to: '/listings/buy?type=villa' },
      { label: 'Penthouses', to: '/listings/buy?type=penthouse' },
      { label: 'Townhouses', to: '/listings/buy?type=townhouse' },
      { label: 'Off-Plan Projects', to: '/listings/projects' },
      { label: 'Commercial Spaces', to: '/listings/commercial' },
      { label: 'Luxury Mansions', to: '/listings/luxe?type=mansions' },
      { label: 'Brand Residences', to: '/listings/luxe?type=brand' },
    ],
  },
];

const quickLinks: { label: string; to: string }[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Buy', to: '/listings/buy' },
  { label: 'Sell', to: '/listings/buy' },
  { label: 'Our Agents', to: '/agents' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-x py-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">Stay ahead of the market.</h3>
              <p className="mt-1.5 text-sm text-white/60">
                Get exclusive off-plan launches, price alerts, and Dubai market reports — straight to your inbox.
              </p>
            </div>
            <form className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none"
              />
              <button className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-700">
                Subscribe <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="grid h-15 w-16 place-items-center rounded-lg bg-ink-950 p-1">
                <img src={logoImg} alt="FV Icon" className="h-full w-full object-contain" />
              </div>
              <span>
                <span className="block font-display text-xl font-bold">Future Vista</span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">Dubai · Est. 2010</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Your trusted partner in Dubai real estate. Specializing in luxury properties, off-plan investments, and tailored real estate solutions across the UAE.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:border-brand-500 hover:bg-brand-600 hover:text-white"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-brand-400">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                      >
                        <span className="h-px w-0 bg-brand-500 transition-all group-hover:w-3" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-brand-400">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="group inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-white"
                    >
                      <span className="h-px w-0 bg-brand-500 transition-all group-hover:w-3" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-ink-950">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} FUTURE VISTA. All rights reserved. Powered by FUTURE VISTA.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}