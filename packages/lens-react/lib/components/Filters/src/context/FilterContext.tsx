import { createContext, useContext, ReactNode } from "react";
import type { FilterContextType } from "../interfaces";

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = (): FilterContextType => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

interface FilterProviderProps extends FilterContextType {
  children: ReactNode;
}

export const FilterProvider = ({ children, ...props }: FilterProviderProps) => {
  return (
    <FilterContext.Provider value={props}>{children}</FilterContext.Provider>
  );
};
