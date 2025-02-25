import { useContext } from "react";
import { ViewContext } from "./ViewContext";

const useViewContext = () => {
  const context = useContext(ViewContext);

  if (!context) {
    throw new Error("useViewContext should be used Inside View Provider");
  }

  return context;
};

export { useViewContext };
