import { products } from './products.js';

// Simulates a network request so loading and error states are real.
// Open the app with ?simulate=error to see the error state.
export function fetchProducts() {
  const shouldFail =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).get('simulate') === 'error';
  const delay = import.meta.env?.MODE === 'test' ? 0 : 500;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(new Error('The product service did not respond.'));
      else resolve(products);
    }, delay);
  });
}
