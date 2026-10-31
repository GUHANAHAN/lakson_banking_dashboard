import { Menu, Search, X } from 'lucide-react';

export default function TopBar({ title, query, onQueryChange, onMenu }) {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-white">
      <div className="flex h-auto flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2 lg:px-5">
        <button
          type="button"
          onClick={onMenu}
          aria-label="Open navigation"
          aria-controls="app-sidebar"
          className="-ml-1 rounded p-1.5 text-ink hover:bg-canvas lg:hidden"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-base font-semibold">{title}</h1>

        <div className="relative order-last w-full sm:order-none sm:ml-auto sm:w-72">
          <label htmlFor="product-search" className="sr-only">Search products</label>
          <Search size={15} aria-hidden="true" className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search by name, ID, category or status"
            className="h-8 w-full rounded border border-line bg-white pl-8 pr-8 text-sm placeholder:text-muted focus:border-accent"
          />
          {query && (
            <button
              type="button"
              onClick={() => onQueryChange('')}
              aria-label="Clear search"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded p-1 text-muted hover:text-ink"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="ml-auto flex items-center gap-2 sm:ml-0">
          <span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-semibold text-white">G</span>
          <div className="hidden leading-tight md:block">
            <p className="text-sm font-semibold">Guhanahan</p>
            <p className="text-[11px] text-muted">Dashboard Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
