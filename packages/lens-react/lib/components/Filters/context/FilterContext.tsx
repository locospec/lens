import { createContext, useContext } from "react";
import type {
  FilterContextType,
  FilterProviderProps,
} from "./ContextInterface";
import { useLensContext } from "@/main";
import { useViewContext } from "@/components/Views/View";

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children, ...props }: FilterProviderProps) => {
  const lensContext = useLensContext();
  if (!lensContext) {
    throw new Error("FilterProvider must be used within a Lens Provider");
  }
  const viewContext = useViewContext();
  if (!viewContext) {
    throw new Error("FilterProvider must be used within a View");
  }
  const { endpoints } = lensContext;
  const { filters, setFilters } = viewContext;
  console.log(">>>>>>>>", filters, setFilters, endpoints.read_relation_option);

  return (
    <FilterContext.Provider value={props}>{children}</FilterContext.Provider>
  );
};
