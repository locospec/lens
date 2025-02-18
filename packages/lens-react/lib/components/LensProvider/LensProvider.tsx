import React, { createContext, useState, useEffect } from "react";
import type { LensContextType, LensProviderProps } from "./types";
import { useFetchConfig } from "../Lens/hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useFilterFunctions from "./hooks/useFilterFunction";

const queryClient = new QueryClient();

export const LensContext = createContext<LensContextType | undefined>(
  undefined
);

export const LensProviderBase: React.FC<LensProviderProps> = ({
  lensConfiguration,
  children,
}) => {
  const [data, setData] = useState<any[]>([]);
  // const [config, setConfig] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { addCondition, addGroup, removeItem, updateCondition } =
    useFilterFunctions({ setFilter: setFilters });

  const search = (query: string) => {
    setSearchTerm(query);
  };

  const {
    data: config,
    isFetched,
    // isError,
  } = useFetchConfig({ configEndpoint: lensConfiguration.endpoint });

  console.log(">>>>>>", config);

  return (
    <LensContext.Provider
      value={{
        data,
        isLoading,
        error,
        filters,
        search,
        config,
        addCondition,
        addGroup,
        removeItem,
        updateCondition,
      }}
    >
      {children}
    </LensContext.Provider>
  );
};

export const LensProvider: React.FC<LensProviderProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LensProviderBase {...props} />
    </QueryClientProvider>
  );
};

export const LensConsumer = LensContext.Consumer;
