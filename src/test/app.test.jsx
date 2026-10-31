import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../App.jsx';
import { products } from '../data/products.js';
import { filterProducts, groupByCategory, summarize } from '../utils/products.js';


async function setup() {
  const user = userEvent.setup();
  render(<App />);
  await screen.findByRole('heading', { name: 'Products' });
  return user;
}
const tableRows = () => {
  const region = screen.getByRole('region', { name: /products table/i });
  return within(region).getAllByRole('row').slice(1);
};

describe('data utilities', () => {
  it('has only the four requested categories', () => {
    expect(new Set(products.map((p) => p.category))).toEqual(new Set(['Savings', 'Cards', 'Loans', 'Wealth']));
  });
  it('chart data matches filtered products', () => {
    const list = filterProducts(products, { category: 'Loans', status: 'Active', query: '' });
    const g = groupByCategory(list);
    expect(g.find((x) => x.category === 'Loans').count).toBe(list.length);
    expect(g.find((x) => x.category === 'Cards').count).toBe(0);
    expect(g.reduce((s, x) => s + x.portfolio, 0)).toBe(summarize(list).portfolio);
  });
});

describe('dashboard', () => {
  it('shows all products initially, then filters by each category', async () => {
    const user = await setup();
    expect(tableRows()).toHaveLength(products.length);
    for (const c of ['Savings', 'Cards', 'Loans', 'Wealth']) {
      await user.click(within(screen.getByRole('group', { name: 'Category' })).getByRole('button', { name: c }));
      expect(tableRows()).toHaveLength(products.filter((p) => p.category === c).length);
    }
  });

  it('sidebar navigation switches category and title', async () => {
    const user = await setup();
    const nav = screen.getByRole('navigation', { name: 'Product categories' });
    await user.click(within(nav).getByRole('button', { name: /Cards/ }));
    expect(screen.getByRole('heading', { level: 1, name: 'Cards' })).toBeInTheDocument();
    expect(tableRows()).toHaveLength(products.filter((p) => p.category === 'Cards').length);
  });

  it('combines search and status filters, and clears them', async () => {
    const user = await setup();
    await user.type(screen.getByRole('searchbox', { name: 'Search products' }), 'loan');
    await user.selectOptions(screen.getByLabelText('Status'), 'Discontinued');
    const expected = filterProducts(products, { category: 'All', status: 'Discontinued', query: 'loan' });
    expect(tableRows()).toHaveLength(expected.length);
    expect(expected.length).toBeGreaterThan(0);

    await user.type(screen.getByRole('searchbox'), 'zzzz');
    expect(screen.getByText(/No products match/)).toBeInTheDocument();

    await user.click(screen.getAllByRole('button', { name: 'Clear filters' })[0]);
    expect(tableRows()).toHaveLength(products.length);
    expect(screen.getByRole('searchbox')).toHaveValue('');
    expect(screen.getByLabelText('Status')).toHaveValue('All');
  });

  it('opens and closes the details modal (X button, Escape, footer button, backdrop)', async () => {
    const user = await setup();
    const open = () => user.click(screen.getByRole('button', { name: 'View details for Auto Loan' }));

    await open();
    const dialog = screen.getByRole('dialog', { name: 'Auto Loan' });
    expect(dialog).toHaveTextContent('LON-303');
    await user.click(screen.getByRole('button', { name: 'Close details' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await open();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await open();
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    await open();
    fireEvent.mouseDown(screen.getByRole('dialog').parentElement);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('KPI numbers follow the filtered list', async () => {
    const user = await setup();
    await user.click(within(screen.getByRole('group', { name: 'Category' })).getByRole('button', { name: 'Wealth' }));
    const kpis = screen.getByLabelText(/key figures/i);
    const wealth = products.filter((p) => p.category === 'Wealth');
    expect(within(kpis).getByText(String(wealth.length), { selector: 'dd' })).toBeInTheDocument();
  });
});
