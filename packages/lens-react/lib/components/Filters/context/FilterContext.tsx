import { createContext, useContext } from "react";
import type {
  FilterContextType,
  FilterProviderProps,
} from "./ContextInterface";

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

export const FilterProvider = ({ children, ...props }: FilterProviderProps) => {
  return (
    <FilterContext.Provider value={props}>{children}</FilterContext.Provider>
  );
};
