import { useContext } from "react";
import { DatatableContext } from "./DataTableContext";

const useDatatableContext = () => {
  const context = useContext(DatatableContext);
  if (!context) {
    throw new Error(
      "useDatatableContext must be used within a DatatableContextProvider"
    );
  }
  return context;
};

useDatatableContext.displayName = "useDatatableContext";

export { useDatatableContext };
