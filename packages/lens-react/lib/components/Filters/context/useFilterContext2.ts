import { useContext } from "react";
import { FiltersContext } from "./FilterContext2";
import { FiltersContextInterface } from "./ContextInterface2";

export const useFilterContext2 = (): FiltersContextInterface => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFilterContext2 must be used within a FilterProvider");
  }
  return context;
};
