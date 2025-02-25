import { ViewContext } from "@/components/Views/View/ViewContext";
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
  const viewContext = useContext(ViewContext);
  let parentType = "";
  let parentContext = undefined;
  if (viewContext) {
    parentType = "ViewContext";
    parentContext = viewContext;
  } else if (lensContext) {
    parentType = "LensContext";
    parentContext = lensContext;
  }

  if (!parentContext) {
    throw new Error("useDebouncedSearch must be used within LensContext ");
  }
  const { searchQuery, search } = parentContext;

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
