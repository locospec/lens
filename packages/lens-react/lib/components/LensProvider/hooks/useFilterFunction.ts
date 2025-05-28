import React, { useCallback } from "react";
import type { FilterGroup } from "../interfaces/FiltersInterface";

export interface useFilterFunctionProps {
  setFilter: React.Dispatch<React.SetStateAction<FilterGroup>>;
  callback?: (filter: any) => any;
}

const useFilterFunctions = ({
  setFilter,
  callback,
}: useFilterFunctionProps) => {
  const addCondition = useCallback((parentPath: number[] = []) => {
    setFilter(current => {
      const newFilter = { ...current };
      let target = newFilter;
      for (const index of parentPath) {
        target = target.conditions[index] as FilterGroup;
      }
      target.conditions.push({ attribute: "", op: undefined, value: "" });
      callback && callback(newFilter);
      return newFilter;
    });
  }, []);

  const addGroup = useCallback((parentPath: number[] = []) => {
    setFilter(current => {
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

      callback && callback(newFilter);
      return newFilter;
    });
  }, []);

  const removeItem = useCallback((path: number[]) => {
    setFilter(current => {
      const newFilter = { ...current };
      let target = newFilter;

      for (let i = 0; i < path.length - 1; i++) {
        target = target.conditions[path[i]] as FilterGroup;
      }

      target.conditions.splice(path[path.length - 1], 1);

      callback && callback(newFilter);
      return newFilter;
    });
  }, []);

  const updateCondition = useCallback(
    (path: number[], field: string, value: any) => {
      setFilter(current => {
        const newFilter = { ...current };

        if (path.length === 0) {
          return {
            ...newFilter,
            [field]: value,
          };
        }

        let target = newFilter;

        for (let i = 0; i < path.length - 1; i++) {
          target = target.conditions[path[i]] as FilterGroup;
        }

        const lastIndex = path[path.length - 1];
        const item = target.conditions[lastIndex];

        if ("conditions" in item) {
          target.conditions[lastIndex] = {
            ...item,
            [field]: value,
          };
        } else {
          if (field === "attribute") {
            target.conditions[lastIndex] = {
              [field]: value,
            };
          } else if (field === "op") {
            target.conditions[lastIndex] = {
              attribute: item.attribute,
              [field]: value,
            };
          } else {
            // HERE WE CAN ADD OR MODIFY LOGIC FOR WHEN FIELD "value" IS CHANGED
            target.conditions[lastIndex] = {
              ...item,
              [field]: value,
            };
          }
        }

        callback && callback(newFilter);
        return newFilter;
      });
    },
    []
  );

  return { addCondition, addGroup, removeItem, updateCondition };
};

export default useFilterFunctions;
