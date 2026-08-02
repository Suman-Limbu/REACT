import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debouncedSearch, setDebouncedSearch] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(value);
    }, [delay]);
    return () => clearTimeout(timer);
  }, [value]);
  return debouncedSearch;
};
