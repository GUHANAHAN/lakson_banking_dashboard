import { X } from 'lucide-react';
import { CATEGORIES } from '../data/products.js';
import { CATEGORY_META } from './categoryMeta.js';

export default function Sidebar({ active, counts, total, open, onSelect, onClose }) {
  const items = ['All', ...CATEGORIES];

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-30 bg-ink/40 lg:hidden"
        />
      )}
      <aside
        id="app-sidebar"
        aria-label="Primary"
        className={`fixed inset-y-0 left-0 z-40 flex w-56 flex-col border-r border-line bg-white lg:visible lg:translate-x-0 ${
          open ? 'translate-x-0' : 'invisible -translate-x-full'
        }`}
      >
        <div className="flex h-12 items-center justify-between border-b border-line px-4">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-ink text-xs font-bold text-white">ABC</span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">ABC Bank</p>
              <p className="text-[11px] text-muted">Product analytics</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded p-1 text-muted hover:bg-canvas lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav aria-label="Product categories" className="flex-1 overflow-y-auto py-2">
          <ul>
            {items.map((key) => {
              const { label, icon: Icon } = CATEGORY_META[key];
              const isActive = active === key;
              const count = key === 'All' ? total : counts[key];
              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => onSelect(key)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex w-full items-center gap-2.5 border-l-2 px-4 py-2 text-left text-sm ${
                      isActive
                        ? 'border-accent bg-accent-soft font-semibold text-accent'
                        : 'border-transparent text-ink hover:bg-canvas'
                    }`}
                  >
                    <Icon size={16} aria-hidden="true" />
                    <span className="flex-1">{label}</span>
                    <span className="text-xs tabular-nums text-muted">{count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
        <p className="border-t border-line px-4 py-2 text-[11px] text-muted">Fictional sample data</p>
      </aside>
    </>
  );
}
