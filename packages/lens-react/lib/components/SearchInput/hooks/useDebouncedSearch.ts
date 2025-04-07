import { ViewContext } from "@/components/Views/View/ViewContext";
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
  const viewContext = useContext(ViewContext);

  if (!viewContext) {
    throw new Error(`useDebouncedSearch must be used within ViewContext`);
  }
  const { searchQuery, search } = viewContext;

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
