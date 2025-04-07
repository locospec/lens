import { useContext } from "react";
import { SimpleFiltersContext } from "./SimpleFiltersContext";

const useSimpleFiltersContext = () => {
  const context = useContext(SimpleFiltersContext);
  if (!context) {
    throw new Error(
      "useSimpleFiltersContext must be used within a SimpleFiltersContextProvider"
    );
  }
  return context;
};
useSimpleFiltersContext.displayName = "useSimpleFiltersContext";

export { useSimpleFiltersContext };
