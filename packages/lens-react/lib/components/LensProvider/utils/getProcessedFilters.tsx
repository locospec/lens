import { FilterGroup } from "../interfaces/FiltersInterface";
import { cleanFilterGroup } from "./cleanFilters";

const getProcessedFilters = (filters?: FilterGroup) => {
  if (filters) {
    if (Object.keys(filters).length === 0) {
      return {};
    }
    const clone = structuredClone(filters);
    const cleaned = cleanFilterGroup(clone);

    return cleaned.conditions.length > 0 ? cleaned : {};
  }
  return {};
};

getProcessedFilters.displayName = "getProcessedFilters";
export { getProcessedFilters };
