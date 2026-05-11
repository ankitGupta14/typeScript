import { useEffect, useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [state, setState] = useState<UseFetchResult<T>>({
    data: null,
    loading: true,
    error: null,
  });

// useEffect to make fetch request 

return state

}