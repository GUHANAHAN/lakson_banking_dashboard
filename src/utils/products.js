import { CATEGORIES } from '../data/products.js';

export function filterProducts(products, { category, status, query }) {
  const q = query.trim().toLowerCase();
  return products.filter((p) => {
    if (category !== 'All' && p.category !== category) return false;
    if (status !== 'All' && p.status !== status) return false;
    if (!q) return true;
    return [p.name, p.id, p.category, p.status].some((v) => v.toLowerCase().includes(q));
  });
}

export function summarize(list) {
  const active = list.filter((p) => p.status === 'Active').length;
  return {
    count: list.length,
    active,
    portfolio: list.reduce((s, p) => s + p.portfolio, 0),
    customers: list.reduce((s, p) => s + p.customers, 0),
  };
}

// One row per category (including zeros) so charts always show all four.
export function groupByCategory(list) {
  return CATEGORIES.map((category) => {
    const items = list.filter((p) => p.category === category);
    return {
      category,
      count: items.length,
      portfolio: items.reduce((s, p) => s + p.portfolio, 0),
    };
  });
}

export function countByCategory(list) {
  return Object.fromEntries(groupByCategory(list).map((g) => [g.category, g.count]));
}
