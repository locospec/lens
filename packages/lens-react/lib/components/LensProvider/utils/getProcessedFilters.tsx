import { FilterGroup } from "../interfaces/FiltersInterface";
import { cleanFilterGroupWithCount } from "./cleanFilters";

const getProcessedFilters = (filters?: FilterGroup) => {
  if (filters) {
    if (Object.keys(filters).length === 0) {
      return {};
    }

    const clone = structuredClone(filters);
    const { cleaned, count } = cleanFilterGroupWithCount(clone);

    if (
      cleaned &&
      typeof cleaned === "object" &&
      "conditions" in cleaned &&
      Array.isArray((cleaned as FilterGroup).conditions)
    ) {
      return (cleaned as FilterGroup).conditions.length > 0
        ? { cleaned, count }
        : { cleaned: {}, count: 0 };
    }
    return { cleaned: {}, count: 0 };
  }
  return { cleaned: {}, count: 0 };
};

getProcessedFilters.displayName = "getProcessedFilters";
export { getProcessedFilters };
