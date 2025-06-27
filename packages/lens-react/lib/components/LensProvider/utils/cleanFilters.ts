import { Condition, FilterGroup } from "../interfaces/FiltersInterface";

type CleanResult = {
  cleaned: Condition | FilterGroup | null;
  count: number;
};

const cleanConditionsWithCount = (
  condition: Condition | FilterGroup
): CleanResult => {
  if ("conditions" in condition) {
    let totalCount = 0;

    const cleanedConditions = condition.conditions
      .map(cleanConditionsWithCount)
      .filter(result => {
        totalCount += result.count;
        return result.cleaned !== null;
      })
      .map(result => result.cleaned!) as (Condition | FilterGroup)[];

    if (cleanedConditions.length === 0) {
      return { cleaned: null, count: 0 };
    }

    return {
      cleaned: { ...condition, conditions: cleanedConditions },
      count: totalCount,
    };
  } else {
    const hasAttribute = !!condition.attribute;
    const isEmptyOp =
      condition.op === "is_empty" || condition.op === "is_not_empty";
    const hasValue =
      "value" in condition &&
      !(
        condition.value === "" ||
        condition.value === null ||
        (Array.isArray(condition.value) && condition.value.length === 0)
      );

    const isValid = hasAttribute && !!condition.op && (isEmptyOp || hasValue);

    return {
      cleaned: isValid ? condition : null,
      count: isValid ? 1 : 0,
    };
  }
};

const cleanFilterGroupWithCount = (group: FilterGroup) => {
  const result = cleanConditionsWithCount(group);
  return result;
};

export { cleanConditionsWithCount, cleanFilterGroupWithCount };
