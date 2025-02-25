import React, { useState } from "react";
import type { FilterGroup } from "./interfaces/src/FilterInterface";
import FilterGroupComponent from "./FilterGroup";
import { JsonHighlighter } from "../../JsonHighlighter";
import { FilterProvider } from "../context/FilterContext";
import { FilterBuilderProps } from "./interfaces/src/FilterInterface";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useFilterFunctions from "./hooks/useFilterFunctions";
import "./FilterBuilder.css";
import { AttributeOptionsArrayType } from "./interfaces";

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
            className="twp le-lens-wrapper le-p-4 le-space-y-4 le-border"
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
