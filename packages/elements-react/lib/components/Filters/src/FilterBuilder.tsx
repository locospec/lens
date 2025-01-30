import React, { useState, useCallback } from "react";
import type { FilterGroup } from "./types";
import FilterGroupComponent from "./FilterGroup";
import { JsonHighlighter } from "../../JsonHighlighter";

export interface FilterBuilderProps {
  maxDepth?: number;
}

const FilterBuilder: React.FC<FilterBuilderProps> = ({ maxDepth = 2 }) => {
  const [filter, setFilter] = useState<FilterGroup>({
    op: "and",
    conditions: [],
  });

  const addCondition = useCallback((parentPath: number[] = []) => {
    setFilter((current) => {
      const newFilter = { ...current };
      let target = newFilter;

      for (const index of parentPath) {
        target = target.conditions[index] as FilterGroup;
      }

      target.conditions.push({
        attribute: "",
        op: "eq",
        value: "",
      });

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
            op: "eq",
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
    <div className="twp le-p-4 le-space-y-4 le-bg-gray-100 le-rounded-lg le-shadow">
      <label>Filters</label>
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
      <JsonHighlighter json={filter} />
    </div>
  );
};

export default FilterBuilder;
