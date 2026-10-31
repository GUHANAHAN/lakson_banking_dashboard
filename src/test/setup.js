import '@testing-library/jest-dom/vitest';

// jsdom has no layout engine, so give Recharts a fixed size.
globalThis.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, value: 400 });
Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { configurable: true, value: 200 });
