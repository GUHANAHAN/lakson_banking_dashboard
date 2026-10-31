import { RotateCw, TriangleAlert } from 'lucide-react';

const block = 'animate-pulse rounded-sm bg-line';

export function LoadingState() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading products" className="space-y-4">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line lg:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="space-y-2 bg-white px-3 py-3">
            <div className={`${block} h-3 w-20`} />
            <div className={`${block} h-6 w-28`} />
          </div>
        ))}
      </div>
      <div className="rounded border border-line bg-white p-3">
        {[0, 1, 2, 3, 4, 5].map((i) => <div key={i} className={`${block} mb-3 h-8 last:mb-0`} />)}
      </div>
      <span className="sr-only">Loading products…</span>
    </div>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <div role="alert" className="rounded border border-line bg-white px-4 py-10 text-center">
      <TriangleAlert size={20} aria-hidden="true" className="mx-auto text-[#b7791f]" />
      <p className="mt-2 text-sm font-semibold">Products could not be loaded</p>
      <p className="mt-1 text-sm text-muted">{message}</p>
      <button type="button" onClick={onRetry} className="mt-3 inline-flex h-8 items-center gap-1.5 rounded border border-line px-3 text-sm text-accent hover:bg-accent-soft">
        <RotateCw size={14} aria-hidden="true" /> Try again
      </button>
    </div>
  );
}
