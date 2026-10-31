# Banking Products Dashboard

React + Vite + Tailwind CSS + Recharts + Lucide. All data is fictional and local (`src/data/products.js`).

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # filter, chart-data and modal tests
npm run build
```


## Structure
- `src/data` – mock data and a simulated async fetch
- `src/utils` – filtering, aggregation, formatting (pure functions)
- `src/hooks/useProducts.js` – loading / ready / error state
- `src/components` – Sidebar, TopBar, KpiStrip, Charts, Filters, ProductTable, ProductModal, States


Live Demo: https://lakson-banking-dashboard-nine.vercel.app
