import { useCallback, useEffect, useState } from 'react';
import { fetchProducts } from '../data/api.js';

export function useProducts() {
  const [state, setState] = useState({ status: 'loading', data: [], error: null });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setState((s) => ({ ...s, status: 'loading', error: null }));
    fetchProducts()
      .then((data) => !cancelled && setState({ status: 'ready', data, error: null }))
      .catch((err) => !cancelled && setState({ status: 'error', data: [], error: err.message }));
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const reload = useCallback(() => setAttempt((a) => a + 1), []);
  return { ...state, reload };
}
