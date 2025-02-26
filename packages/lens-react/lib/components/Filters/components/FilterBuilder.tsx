import React, { useContext } from "react";
import type { FilterBuilderProps } from "../interfaces";
import { FilterGroup as FilterGroupComponent } from "./index";
import { FilterContextProvider } from "../context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useFilterFunctions from "@/components/LensProvider/hooks/useFilterFunction";
import { ViewContext } from "@/components/Views/View/ViewContext";
import { JsonHighlighter } from "@/components/JsonHighlighter";

const queryClient = new QueryClient();

const FilterBuilder: React.FC<FilterBuilderProps> = ({
  maxDepth = 2,
  showFilterJSON = true,
}) => {
  const filterContainerRef = React.useRef<HTMLDivElement>(null);

  const viewContext = useContext(ViewContext);
  if (!viewContext) {
    throw new Error("Filter Builder Must be used within the context of ");
  }
  const { setFilters, filters } = viewContext;

  const { updateCondition, addCondition, addGroup, removeItem } =
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
      >
        <div
          className="twp lens-wrapper p-4 space-y-4 border"
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
          />
          {showFilterJSON && <JsonHighlighter json={filters} />}
        </div>
      </FilterContextProvider>
    </QueryClientProvider>
  );
};

export default FilterBuilder;
