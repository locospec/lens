import { useContext } from "react";
import { FiltersContext } from "./FilterContext";
import { FiltersContextInterface } from "./ContextInterface";

const useFilterContext = (): FiltersContextInterface => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};

export { useFilterContext };
