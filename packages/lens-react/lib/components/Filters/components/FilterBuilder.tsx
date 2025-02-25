import React, { useState } from "react";
import type {
  FilterGroup,
  AttributeOptionsArrayType,
  FilterBuilderProps,
} from "../interfaces";
import { FilterGroup as FilterGroupComponent } from "./index";
import { JsonHighlighter } from "../../JsonHighlighter";
import { FilterProvider } from "../context";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useFilterFunctions from "@/components/LensProvider/hooks/useFilterFunction";

const queryClient = new QueryClient();

const FilterBuilder: React.FC<FilterBuilderProps> = ({
  maxDepth = 2,
  showFilterJSON = true,
  size = "1",
  variant = "surface",
  label = "Filters",
  attributes,
  queryEndpoint,
  defaultFiltersValue,
}) => {
  const [filter, setFilter] = useState<FilterGroup>(
    defaultFiltersValue || {
      op: "and",
      conditions: [],
    }
  );
  const filterContainerRef = React.useRef<HTMLDivElement>(null);
  const attributesArray: AttributeOptionsArrayType = Object.keys(
    attributes
  ).map((key) => {
    return { value: key, ...attributes[key] };
  });

  const { addCondition, addGroup, removeItem, updateCondition } =
    useFilterFunctions({ setFilter });

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <FilterProvider
          size={size}
          variant={variant}
          attributesArray={attributesArray}
          attributesObject={attributes}
          addCondition={addCondition}
          addGroup={addGroup}
          removeItem={removeItem}
          updateCondition={updateCondition}
          filterContainerRef={filterContainerRef}
          queryEndpoint={queryEndpoint}
          filter={filter}
          maxDepth={maxDepth}
        >
          <div
            className="twp lens-wrapper p-4 space-y-4 border"
            ref={filterContainerRef}
          >
            <label>{label}</label>
            <FilterGroupComponent
              group={filter}
              path={[]}
              currentDepth={0}
              maxDepth={maxDepth}
              onAddCondition={addCondition}
              onAddGroup={addGroup}
              onRemove={removeItem}
              onUpdate={updateCondition}
            />
            {showFilterJSON && <JsonHighlighter json={filter} />}
          </div>
        </FilterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default FilterBuilder;
