import React, { createContext, useContext, useState } from "react";
import type { ViewContextType, ViewProviderProps } from "./types";
import { LensContext } from "@/main";

export const ViewContext = createContext<ViewContextType | undefined>(
  undefined
);

export const ViewProvider: React.FC<ViewProviderProps> = ({
  children,
  viewId = "default",
}) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("View must be used within a LensProvider");
  }

  const { config } = lensContext;

  const configuration = config[viewId];

  if (configuration === undefined && viewId !== "default") {
    return (
      <>{`Invalid View Id {${viewId}}. Pls check the backend configuration`}</>
    );
  }

  const [filters, setFilters] = useState<any>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const search = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <ViewContext.Provider
      value={{
        contextId: "View",
        config: configuration,
        filters,
        setFilters,
        search,
        searchQuery,
      }}
    >
      {JSON.stringify({ filters: filters, searchQuery })}
      {children}
    </ViewContext.Provider>
  );
};

export const LensConsumer = ViewContext.Consumer;
