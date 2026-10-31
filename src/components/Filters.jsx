import { FilterX } from 'lucide-react';
import { CATEGORIES, STATUSES } from '../data/products.js';

export default function Filters({ category, status, onCategory, onStatus, onClear, hasFilters, shown, total }) {
  return (
    <section aria-label="Filters" className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded border border-line bg-white px-3 py-2">
      <div role="group" aria-label="Category" className="flex flex-wrap gap-1">
        {['All', ...CATEGORIES].map((c) => {
          const on = category === c;
          return (
            <button
              key={c}
              type="button"
              aria-pressed={on}
              onClick={() => onCategory(c)}
              className={`h-8 rounded border px-3 text-sm ${
                on ? 'border-accent bg-accent-soft font-semibold text-accent' : 'border-line hover:bg-canvas'
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="status-filter" className="text-sm text-muted">Status</label>
        <select
          id="status-filter"
          value={status}
          onChange={(e) => onStatus(e.target.value)}
          className="h-8 rounded border border-line bg-white px-2 text-sm"
        >
          <option value="All">All statuses</option>
          {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <button
        type="button"
        onClick={onClear}
        disabled={!hasFilters}
        className="inline-flex h-8 items-center gap-1.5 rounded border border-line px-3 text-sm text-accent hover:bg-accent-soft disabled:cursor-not-allowed disabled:text-muted disabled:hover:bg-transparent"
      >
        <FilterX size={14} aria-hidden="true" />
        Clear filters
      </button>

      <p className="ml-auto text-xs text-muted" role="status" aria-live="polite">
        Showing {shown} of {total} products
      </p>
    </section>
  );
}
