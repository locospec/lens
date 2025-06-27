import React, { useCallback, useMemo } from "react";
import type {
  FilterGroup,
  GroupOperator,
} from "../interfaces/FiltersInterface";

export interface useFilterFunctionProps {
  setFilter: React.Dispatch<React.SetStateAction<FilterGroup>>;
  callback?: (filter: any) => any;
}

function cloneFilterGroup(group: FilterGroup): FilterGroup {
  return {
    op: group.op,
    conditions: group.conditions.map(cond =>
      "conditions" in cond ? cloneFilterGroup(cond as FilterGroup) : { ...cond }
    ),
  };
}

function getGroupAtPath(root: FilterGroup, path: number[]): FilterGroup {
  return path.reduce((acc, idx) => acc.conditions[idx] as FilterGroup, root);
}

function isGroup(item: any): item is FilterGroup {
  return "conditions" in item;
}

const useFilterFunctions = ({
  setFilter,
  callback,
}: useFilterFunctionProps) => {
  const addCondition = useCallback(
    (parentPath: number[] = []) => {
      setFilter(current => {
        const newFilter = cloneFilterGroup(current);
        const target = getGroupAtPath(newFilter, parentPath);
        target.conditions.push({ attribute: "", op: undefined, value: "" });
        callback?.(newFilter);
        return newFilter;
      });
    },
    [setFilter, callback]
  );

  const addGroup = useCallback(
    (parentPath: number[] = []) => {
      setFilter(current => {
        const newFilter = cloneFilterGroup(current);
        const target = getGroupAtPath(newFilter, parentPath);

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

        callback?.(newFilter);
        return newFilter;
      });
    },
    [setFilter, callback]
  );

  const removeItem = useCallback(
    (path: number[]) => {
      setFilter(current => {
        const newFilter = cloneFilterGroup(current);
        const target = getGroupAtPath(newFilter, path.slice(0, -1));
        target.conditions.splice(path[path.length - 1], 1);
        callback?.(newFilter);
        return newFilter;
      });
    },
    [setFilter, callback]
  );

  const updateCondition = useCallback(
    (path: number[], field: string, value: any) => {
      setFilter(current => {
        const newFilter = cloneFilterGroup(current);

        if (path.length === 0) {
          return { ...newFilter, [field]: value };
        }

        const target = getGroupAtPath(newFilter, path.slice(0, -1));
        const lastIndex = path[path.length - 1];
        const item = target.conditions[lastIndex];

        if (isGroup(item)) {
          target.conditions[lastIndex] = { ...item, [field]: value };
        } else {
          const updated = { ...item, [field]: value };

          if (field === "attribute") {
            updated.op = undefined;
          }

          target.conditions[lastIndex] = updated;
        }

        callback?.(newFilter);
        return newFilter;
      });
    },
    [setFilter, callback]
  );

  const clearAll = useCallback(() => {
    const newFilter: FilterGroup = {
      op: "and" as GroupOperator,
      conditions: [],
    };
    setFilter(newFilter);
    callback?.(newFilter);
  }, [setFilter, callback]);

  return useMemo(
    () => ({
      addCondition,
      addGroup,
      removeItem,
      updateCondition,
      clearAll,
    }),
    [addCondition, addGroup, removeItem, updateCondition, clearAll]
  );
};

export default useFilterFunctions;
