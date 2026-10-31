import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { PORTFOLIO_LABELS } from '../data/products.js';
import { formatCrore, formatDate, formatMetric, formatNumber } from '../utils/format.js';
import StatusBadge from './StatusBadge.jsx';

export default function ProductModal({ product, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const focusable = dialogRef.current.querySelectorAll('button, [href], input, select, [tabindex]:not([tabindex="-1"])');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const details = [
    [PORTFOLIO_LABELS[product.category], formatCrore(product.portfolio)],
    ['Customers', formatNumber(product.customers)],
    ...product.metrics.map((m) => [m.label, formatMetric(m)]),
    ['Launched', formatDate(product.launched)],
    ['Product ID', product.id],
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 sm:items-center sm:p-4"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="max-h-[90vh] w-full overflow-y-auto rounded-t border border-line bg-white sm:max-w-lg sm:rounded"
      >
        <header className="flex items-start justify-between gap-3 border-b border-line px-4 py-3">
          <div className="min-w-0">
            <h2 id="modal-title" className="text-base font-semibold">{product.name}</h2>
            <p className="mt-0.5 flex flex-wrap items-center gap-x-3 text-xs text-muted">
              <span>{product.category}</span>
              <StatusBadge status={product.status} />
            </p>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close details" className="rounded p-1 text-muted hover:bg-canvas hover:text-ink">
            <X size={18} />
          </button>
        </header>

        <div className="space-y-4 px-4 py-4">
          <p className="text-sm">{product.description}</p>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line">
            {details.map(([label, value]) => (
              <div key={label} className="bg-white px-3 py-2">
                <dt className="text-xs text-muted">{label}</dt>
                <dd className="text-sm font-semibold tabular-nums">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <footer className="flex justify-end border-t border-line px-4 py-3">
          <button type="button" onClick={onClose} className="h-8 rounded border border-line px-4 text-sm hover:bg-canvas">Close</button>
        </footer>
      </div>
    </div>
  );
}
