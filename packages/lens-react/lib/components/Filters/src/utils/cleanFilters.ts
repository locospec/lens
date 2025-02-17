import {
  Condition,
  FilterGroup,
} from "@/components/Filters/src/interfaces/src/FilterInterface";

const cleanConditions = (
  condition: Condition | FilterGroup
): Condition | FilterGroup | null => {
  if ("conditions" in condition) {
    condition.conditions = condition.conditions
      .map(cleanConditions)
      .filter((cond) => cond !== null);

    if (condition.conditions.length === 0) {
      return null;
    }
  } else {
    if (
      condition.value === "" ||
      condition.value === null ||
      (Array.isArray(condition.value) && condition.value.length === 0)
    ) {
      return null;
    }
  }

  return condition;
};

const cleanFilterGroup = (group: FilterGroup): FilterGroup => {
  group.conditions = group.conditions
    .map(cleanConditions)
    .filter((cond) => cond !== null) as (Condition | FilterGroup)[];

  return group;
};

export { cleanConditions, cleanFilterGroup };
