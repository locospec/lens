import { useContext } from "react";
import { LensContext } from "./LensProvider";

export const useLensContext = () => {
  const context = useContext(LensContext);
  if (context === undefined) {
    throw new Error("useLensContext must be used within a LensProvider");
  }
  return context;
};

useLensContext.displayName = "useLensContext";
