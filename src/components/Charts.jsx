import { Bar, BarChart, CartesianGrid, Cell, LabelList, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { CATEGORY_META } from './categoryMeta.js';
import { formatCrore } from '../utils/format.js';
import Panel from './Panel.jsx';

const tooltipStyle = { border: '1px solid #dde2ea', borderRadius: 2, fontSize: 12, boxShadow: 'none', padding: '4px 8px' };

export function DistributionChart({ data }) {
  const total = data.reduce((s, d) => s + d.count, 0);
  const slices = data.filter((d) => d.count > 0);

  return (
    <Panel title="Products by category" aside={`${total} shown`} className="xl:col-span-2">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 p-3">
        <div className="relative h-40 w-40 shrink-0" role="img" aria-label={`Product distribution: ${data.map((d) => `${d.category} ${d.count}`).join(', ')}`}>
          {total > 0 ? (
            <>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={slices} dataKey="count" nameKey="category" innerRadius={48} outerRadius={72} paddingAngle={1} stroke="#fff" strokeWidth={1} animationDuration={300}>
                    {slices.map((d) => <Cell key={d.category} fill={CATEGORY_META[d.category].color} />)}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle} formatter={(v, n) => [`${v} products`, n]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-semibold tabular-nums">{total}</span>
                <span className="text-[11px] text-muted">products</span>
              </div>
            </>
          ) : (
            <p className="flex h-full items-center justify-center text-center text-xs text-muted">No data</p>
          )}
        </div>
        <table className="min-w-0 flex-1 text-sm">
          <caption className="sr-only">Product count by category</caption>
          <tbody>
            {data.map((d) => (
              <tr key={d.category} className="border-b border-line last:border-0">
                <td className="py-1.5 pr-2">
                  <span aria-hidden="true" className="mr-2 inline-block h-2.5 w-2.5 rounded-sm align-middle" style={{ background: CATEGORY_META[d.category].color }} />
                  {d.category}
                </td>
                <td className="py-1.5 text-right tabular-nums">{d.count}</td>
                <td className="w-12 py-1.5 text-right tabular-nums text-muted">{total ? Math.round((d.count / total) * 100) : 0}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export function PortfolioChart({ data }) {
  const total = data.reduce((s, d) => s + d.portfolio, 0);
  return (
    <Panel title="Portfolio by category" aside="₹ crore" className="xl:col-span-3">
      <div className="h-48 p-3" role="img" aria-label={`Portfolio in crore rupees: ${data.map((d) => `${d.category} ${d.portfolio}`).join(', ')}`}>
        {total > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ top: 0, right: 56, bottom: 0, left: 0 }}>
              <CartesianGrid horizontal={false} stroke="#e9edf2" />
              <XAxis type="number" tick={{ fontSize: 11, fill: '#5b6b82' }} axisLine={false} tickLine={false} tickFormatter={(v) => v.toLocaleString('en-IN')} />
              <YAxis type="category" dataKey="category" width={56} tick={{ fontSize: 12, fill: '#14213d' }} axisLine={false} tickLine={false} />
              <Tooltip cursor={{ fill: '#f4f6f9' }} contentStyle={tooltipStyle} formatter={(v) => [formatCrore(v), 'Portfolio']} />
              <Bar dataKey="portfolio" barSize={18} animationDuration={300}>
                {data.map((d) => <Cell key={d.category} fill={CATEGORY_META[d.category].color} />)}
                <LabelList dataKey="portfolio" position="right" fontSize={11} fill="#14213d" formatter={(v) => v.toLocaleString('en-IN')} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="flex h-full items-center justify-center text-xs text-muted">No data</p>
        )}
      </div>
    </Panel>
  );
}
