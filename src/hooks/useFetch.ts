import { useEffect, useState } from 'react';

interface FetchFunction<T, P> {
  (params?: P): Promise<T>;
}

interface UseFetch<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T, P>(fetchFn: FetchFunction<T, P>, params?: P): UseFetch<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : '';

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFn(params);
        setData(result);
      } catch (e) {
        setError(e as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFn, stringParams]);
  return {
    data,
    isLoading,
    error
  };
};
