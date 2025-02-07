import React, { useState, useCallback } from "react";
import type { FilterGroup } from "./types";
import FilterGroupComponent from "./FilterGroup";
import { JsonHighlighter } from "../../JsonHighlighter";
import { FilterProvider } from "./context/FilterContext";
import { FilterBuilderProps } from "./interfaces/src/FilterInterface";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import "./FilterBuilder.css";

const FilterBuilder: React.FC<FilterBuilderProps> = ({
  maxDepth = 2,
  showFilterJSON = true,
  size = "1",
  variant = "surface",
  label = "Filters",
  attributes,
  queryEndpoint,
}) => {
  const [filter, setFilter] = useState<FilterGroup>({
    op: "and",
    conditions: [],
  });
  const filterContainerRef = React.useRef<HTMLDivElement>(null);
  const attributesArray: any = Object.keys(attributes).map((key) => {
    return { value: key, ...attributes[key] };
  });

  const addCondition = useCallback((parentPath: number[] = []) => {
    setFilter((current) => {
      const newFilter = { ...current };
      let target = newFilter;
      for (const index of parentPath) {
        target = target.conditions[index] as FilterGroup;
      }
      target.conditions.push({ attribute: "", op: undefined, value: "" });
      return newFilter;
    });
  }, []);

  const addGroup = useCallback((parentPath: number[] = []) => {
    setFilter((current) => {
      const newFilter = { ...current };
      let target = newFilter;

      for (const index of parentPath) {
        target = target.conditions[index] as FilterGroup;
      }

      target.conditions.push({
        op: "and",
        conditions: [
          {
            attribute: "",
            op: undefined,
            value: "",
          },
        ],
      });

      return newFilter;
    });
  }, []);

  const removeItem = useCallback((path: number[]) => {
    setFilter((current) => {
      const newFilter = { ...current };
      let target = newFilter;

      for (let i = 0; i < path.length - 1; i++) {
        target = target.conditions[path[i]] as FilterGroup;
      }

      target.conditions.splice(path[path.length - 1], 1);

      return newFilter;
    });
  }, []);

  const updateCondition = useCallback(
    (path: number[], field: string, value: any) => {
      setFilter((current) => {
        const newFilter = { ...current };

        // If path is empty, we're updating the root group
        if (path.length === 0) {
          return {
            ...newFilter,
            [field]: value,
          };
        }

        // For nested updates
        let target = newFilter;

        // Navigate to the parent
        for (let i = 0; i < path.length - 1; i++) {
          target = target.conditions[path[i]] as FilterGroup;
        }

        // Update the specific item
        const lastIndex = path[path.length - 1];
        const item = target.conditions[lastIndex];

        if ("conditions" in item) {
          // Updating a group
          target.conditions[lastIndex] = {
            ...item,
            [field]: value,
          };
        } else {
          // Updating a condition
          target.conditions[lastIndex] = {
            ...item,
            [field]: value,
          };
        }

        return newFilter;
      });
    },
    []
  );

  return (
    <ThemeProvider>
      <FilterProvider
        size={size}
        variant={variant}
        attributesArray={attributesArray}
        attributesObject={attributes}
        updateCondition={updateCondition}
        filterContainerRef={filterContainerRef}
        queryEndpoint={queryEndpoint}
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
    </ThemeProvider>
  );
};

export default FilterBuilder;
