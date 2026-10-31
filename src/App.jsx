import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useProducts } from './hooks/useProducts.js';
import { countByCategory, filterProducts, groupByCategory, summarize } from './utils/products.js';
import { CATEGORY_META } from './components/categoryMeta.js';
import Sidebar from './components/Sidebar.jsx';
import TopBar from './components/TopBar.jsx';
import KpiStrip from './components/KpiStrip.jsx';
import { DistributionChart, PortfolioChart } from './components/Charts.jsx';
import Filters from './components/Filters.jsx';
import ProductTable from './components/ProductTable.jsx';
import ProductModal from './components/ProductModal.jsx';
import { ErrorState, LoadingState } from './components/States.jsx';

export default function App() {
  const { status: loadStatus, data, error, reload } = useProducts();

  const [category, setCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [navOpen, setNavOpen] = useState(false);
  const triggerRef = useRef(null);

  const filtered = useMemo(
    () => filterProducts(data, { category, status: statusFilter, query }),
    [data, category, statusFilter, query],
  );
  const summary = useMemo(() => summarize(filtered), [filtered]);
  const grouped = useMemo(() => groupByCategory(filtered), [filtered]);
  const navCounts = useMemo(() => countByCategory(data), [data]);

  const hasFilters = category !== 'All' || statusFilter !== 'All' || query.trim() !== '';
  const clearFilters = () => {
    setCategory('All');
    setStatusFilter('All');
    setQuery('');
  };

  const selectCategory = (key) => {
    setCategory(key);
    setNavOpen(false);
  };

  const openProduct = (product, trigger) => {
    triggerRef.current = trigger;
    setSelected(product);
  };
  const closeProduct = useCallback(() => {
    setSelected(null);
    triggerRef.current?.focus?.();
  }, []);

  useEffect(() => {
    if (!navOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setNavOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [navOpen]);

  return (
    <div className="min-h-full">
      <Sidebar
        active={category}
        counts={navCounts}
        total={data.length}
        open={navOpen}
        onSelect={selectCategory}
        onClose={() => setNavOpen(false)}
      />

      <div className="min-w-0 lg:pl-56">
        <TopBar
          title={CATEGORY_META[category].label}
          query={query}
          onQueryChange={setQuery}
          onMenu={() => setNavOpen(true)}
        />

        <main className="mx-auto max-w-[1600px] space-y-4 p-4 lg:p-5">
          {loadStatus === 'loading' && <LoadingState />}
          {loadStatus === 'error' && <ErrorState message={error} onRetry={reload} />}
          {loadStatus === 'ready' && (
            <>
              <KpiStrip summary={summary} totalCatalogue={data.length} />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                <DistributionChart data={grouped} />
                <PortfolioChart data={grouped} />
              </div>
              <Filters
                category={category}
                status={statusFilter}
                onCategory={setCategory}
                onStatus={setStatusFilter}
                onClear={clearFilters}
                hasFilters={hasFilters}
                shown={filtered.length}
                total={data.length}
              />
              <ProductTable products={filtered} onView={openProduct} onClear={clearFilters} hasFilters={hasFilters} />
            </>
          )}
        </main>
      </div>

      {selected && <ProductModal product={selected} onClose={closeProduct} />}
    </div>
  );
}
