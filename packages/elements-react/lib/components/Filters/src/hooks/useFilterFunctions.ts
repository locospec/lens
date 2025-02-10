import React, { useCallback } from "react";
import type { FilterGroup } from "../interfaces/src/FilterInterface";

export interface useFilterFunctionProps {
  setFilter: React.Dispatch<React.SetStateAction<FilterGroup>>;
}

const useFilterFunctions = ({ setFilter }: useFilterFunctionProps) => {
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

  return { addCondition, addGroup, removeItem, updateCondition };
};

export default useFilterFunctions;
