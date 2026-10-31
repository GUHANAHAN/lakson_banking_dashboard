const inr = new Intl.NumberFormat('en-IN');

export const formatNumber = (n) => inr.format(n);
export const formatCrore = (n) => `₹${inr.format(n)} Cr`;

export function formatMetric({ value, format }) {
  switch (format) {
    case 'percent':
      return `${value.toFixed(2)}%`;
    case 'rupee':
      return `₹${inr.format(value)}`;
    case 'years':
      return `${value} ${value === 1 ? 'year' : 'years'}`;
    default:
      return String(value);
  }
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
