export default function Panel({ title, aside, children, className = '' }) {
  return (
    <section className={`min-w-0 rounded border border-line bg-white ${className}`}>
      <header className="flex items-center justify-between gap-2 border-b border-line px-3 py-2">
        <h2 className="text-sm font-semibold">{title}</h2>
        {aside && <span className="text-xs text-muted">{aside}</span>}
      </header>
      {children}
    </section>
  );
}
