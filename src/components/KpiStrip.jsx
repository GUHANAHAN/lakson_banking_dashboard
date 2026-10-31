import { formatCrore, formatNumber } from '../utils/format.js';

function Kpi({ label, value, note }) {
  return (
    <div className="bg-white px-3 py-2.5">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-0.5 text-xl font-semibold tabular-nums">{value}</dd>
      <dd className="text-xs text-muted">{note}</dd>
    </div>
  );
}

export default function KpiStrip({ summary, totalCatalogue }) {
  const activeShare = summary.count ? Math.round((summary.active / summary.count) * 100) : 0;
  return (
    <dl aria-label="Key figures for the products shown" className="grid grid-cols-2 gap-px overflow-hidden rounded border border-line bg-line lg:grid-cols-4">
      <Kpi label="Products" value={summary.count} note={`of ${totalCatalogue} in catalogue`} />
      <Kpi label="Active products" value={summary.active} note={`${activeShare}% of products shown`} />
      <Kpi label="Portfolio" value={formatCrore(summary.portfolio)} note="Deposits, spend, loans and AUM" />
      <Kpi label="Customers" value={formatNumber(summary.customers)} note="Across products shown" />
    </dl>
  );
}
