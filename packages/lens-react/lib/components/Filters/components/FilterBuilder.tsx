import React from "react";
import type { FilterBuilderProps } from "../interfaces";
import { FilterGroup as FilterGroupComponent } from "./index";
import { FilterContextProvider } from "../context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useFilterFunctions from "@lens/components/LensProvider/hooks/useFilterFunction";
import { JsonHighlighter } from "@lens/components/JsonHighlighter";
import { useViewContext } from "@lens/components/Views/View";
import { cn } from "@/lib/utils";

const queryClient = new QueryClient();

const FilterBuilder: React.FC<FilterBuilderProps> = ({
  maxDepth = 2,
  showFilterJSON = true,
  wrapperClassName = "",
}) => {
  const filterContainerRef = React.useRef<HTMLDivElement>(null);

  const viewContext = useViewContext();
  const { setFilters, filters } = viewContext;

  const { updateCondition, addCondition, addGroup, removeItem, clearAll } =
    useFilterFunctions({
      setFilter: setFilters,
    });

  return (
    <QueryClientProvider client={queryClient}>
      <FilterContextProvider
        filterContainerRef={filterContainerRef}
        maxDepth={maxDepth}
        setFilters={setFilters}
        updateCondition={updateCondition}
        addCondition={addCondition}
        addGroup={addGroup}
        removeItem={removeItem}
        clearAll={clearAll}
      >
        <div
          className={cn("lens-wrapper py-4 space-y-4 border", wrapperClassName)}
          ref={filterContainerRef}
        >
          <FilterGroupComponent
            path={[]}
            currentDepth={0}
            maxDepth={maxDepth}
            group={filters}
            onAddCondition={addCondition}
            onAddGroup={addGroup}
            onRemove={removeItem}
            onUpdate={updateCondition}
            clearAll={clearAll}
          />
          {showFilterJSON && <JsonHighlighter json={filters} />}
        </div>
      </FilterContextProvider>
    </QueryClientProvider>
  );
};

export default FilterBuilder;
