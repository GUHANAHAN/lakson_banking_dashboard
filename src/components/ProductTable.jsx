import { formatCrore, formatMetric } from '../utils/format.js';
import Panel from './Panel.jsx';
import StatusBadge from './StatusBadge.jsx';

export default function ProductTable({ products, onView, onClear, hasFilters }) {
  return (
    <Panel title="Products" aside={`${products.length} listed`}>
      {products.length === 0 ? (
        <div className="px-4 py-10 text-center">
          <p className="text-sm font-semibold">No products match the current filters</p>
          <p className="mt-1 text-sm text-muted">Change the search text or filters to see more products.</p>
          {hasFilters && (
            <button type="button" onClick={onClear} className="mt-3 h-8 rounded border border-line px-3 text-sm text-accent hover:bg-accent-soft">
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto" tabIndex={0} role="region" aria-label="Products table, scrolls horizontally on small screens">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-head text-xs text-muted">
              <tr className="border-b border-line">
                <th scope="col" className="px-3 py-2 font-semibold">Product</th>
                <th scope="col" className="px-3 py-2 font-semibold">Category</th>
                <th scope="col" className="px-3 py-2 font-semibold">Status</th>
                <th scope="col" className="px-3 py-2 text-right font-semibold">Portfolio</th>
                <th scope="col" className="px-3 py-2 font-semibold">Key metric</th>
                <th scope="col" className="px-3 py-2 text-right font-semibold"><span className="sr-only">Actions</span></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-line last:border-0 hover:bg-head">
                  <td className="px-3 py-2">
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-xs text-muted">{p.id}</p>
                  </td>
                  <td className="px-3 py-2">{p.category}</td>
                  <td className="px-3 py-2"><StatusBadge status={p.status} /></td>
                  <td className="whitespace-nowrap px-3 py-2 text-right tabular-nums">{formatCrore(p.portfolio)}</td>
                  <td className="px-3 py-2">
                    <p className="tabular-nums">{formatMetric(p.metrics[0])}</p>
                    <p className="text-xs text-muted">{p.metrics[0].label}</p>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <button
                      type="button"
                      onClick={(e) => onView(p, e.currentTarget)}
                      aria-label={`View details for ${p.name}`}
                      className="h-7 whitespace-nowrap rounded border border-line px-2.5 text-xs text-accent hover:bg-accent-soft"
                    >
                      View details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Panel>
  );
}
