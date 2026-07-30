import { useMemo, useRef, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Building2, ArrowRight, Sparkles } from 'lucide-react';
import Header from './components/Header';
import HeroSlider, { type SearchTab } from './components/HeroSlider';
import PropertyCard from './components/PropertyCard';
import Filters, { defaultFilters, type FilterState } from './components/Filters';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import CategoryPage from './components/CategoryPage';
import PropertyDetails from './components/PropertyDetails';
import AboutPage from './components/AboutPage';
import { properties } from './data/propertiesData';
import AgentsPage from './components/AgentsPage';

const categoryLabels: Record<SearchTab, string> = {
  rent: 'Rent',
  buy: 'Buy',
  projects: 'New Projects',
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings/:category" element={<LayoutWithChrome><CategoryPage /></LayoutWithChrome>} />
        <Route path="/property/:id" element={<LayoutWithChrome><PropertyDetails /></LayoutWithChrome>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<LayoutWithChrome><AboutPage /></LayoutWithChrome>} />
        <Route path="/agents" element={<LayoutWithChrome><AgentsPage /></LayoutWithChrome>} />
      </Routes>
    </BrowserRouter>
  );
}

function LayoutWithChrome({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const goToContact = () => navigate('/contact');
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {children}
      <ContactForm />
      <Footer />
      <FloatingActions onContactClick={goToContact} />
    </div>
  );
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
      <FloatingActions onContactClick={() => {}} />
    </div>
  );
}

function HomePage() {
  const [activeTab, setActiveTab] = useState<SearchTab>('projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const listingsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return properties.filter((p) => {
      if (p.category !== activeTab) return false;
      if (filters.location !== 'All Locations' && p.location !== filters.location && !p.area.includes(filters.location))
        return false;
      if (filters.type !== 'All Types') {
        if (filters.type === 'Luxe' && !p.luxe) return false;
        if (filters.type !== 'Luxe' && p.type !== filters.type) return false;
      }
      if (filters.beds !== 'Any') {
        if (filters.beds === 'Studio' && p.beds !== 0) return false;
        if (filters.beds === '5+' && p.beds < 5) return false;
        if (filters.beds !== 'Studio' && filters.beds !== '5+' && p.beds !== Number(filters.beds)) return false;
      }
      if (p.price < filters.minPrice || p.price > filters.maxPrice) return false;
      if (q) {
        const haystack = `${p.title} ${p.location} ${p.area} ${p.developer} ${p.type}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [activeTab, searchQuery, filters]);

  const scrollToResults = () => {
    setTimeout(() => {
      listingsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <HeroSlider
        activeTab={activeTab}
        onTabChange={(t) => {
          setActiveTab(t);
          setSearchQuery('');
          scrollToResults();
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={() => {
          if (searchQuery.trim()) {
            navigate(`/listings/${activeTab}`);
          } else {
            scrollToResults();
          }
        }}
      />

      {/* Listings */}
      <section ref={listingsRef} className="bg-ink-50/60 py-16 sm:py-20">
        <div className="container-x">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                <Sparkles className="h-3.5 w-3.5" /> {categoryLabels[activeTab]}
              </span>
              <h2 className="mt-3 section-title">
                {activeTab === 'projects' ? 'New Off-Plan Launches' : activeTab === 'buy' ? 'Properties for Sale' : 'Homes for Rent'}
              </h2>
              <p className="mt-2 max-w-xl text-sm text-ink-600">
                {activeTab === 'projects'
                  ? 'Be the first to invest in Dubai\'s most anticipated off-plan developments.'
                  : activeTab === 'buy'
                  ? 'Curated ready and off-plan properties from the city\'s top developers.'
                  : 'Flexible rental homes across Dubai\'s most sought-after communities.'}
              </p>
            </div>
            <button
              onClick={() => navigate(`/listings/${activeTab}`)}
              className="btn-outline self-start sm:self-auto"
            >
              View All <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <Filters filters={filters} onChange={setFilters} resultCount={filtered.length} />

          {filtered.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-ink-200 bg-white p-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-ink-100 text-ink-400">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-ink-900">No matches found</h3>
              <p className="mt-1 text-sm text-ink-500">
                Try adjusting your filters or search query to find more properties.
              </p>
              <button
                onClick={() => {
                  setFilters(defaultFilters);
                  setSearchQuery('');
                }}
                className="btn-primary mt-5"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <FloatingActions onContactClick={() => navigate('/contact')} />
    </div>
  );
}