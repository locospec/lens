import { LensContext } from "@/main";
import { useContext, useEffect, useState } from "react";

const DEFAULT_DELAY = 500;

interface UseDebouncedSearchOptions {
  value: string;
  delay?: number;
}

const useDebouncedSearch = ({
  value,
  delay = DEFAULT_DELAY,
}: UseDebouncedSearchOptions) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("useDebouncedSearch must be used within LensProvider");
  }
  const { searchQuery, search } = lensContext;
  const [debouncedQuery, setDebouncedQuery] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      search(debouncedQuery);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [debouncedQuery, search]);

  return { searchQuery, debouncedQuery, setDebouncedQuery };
};
useDebouncedSearch.displayName = "useDebouncedSearch";

export { useDebouncedSearch };
