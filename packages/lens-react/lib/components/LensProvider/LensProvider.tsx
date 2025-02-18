import React, { createContext, useState, useEffect } from "react";
import type { LensContextType, LensProviderProps } from "./types";
import { useFetchConfig } from "../Lens/hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useFilterFunctions from "./hooks/useFilterFunction";
import { useInfiniteFetch } from "./hooks/useInfiniteFetch";
import { getProcessedFilters } from "./utils";

const queryClient = new QueryClient();

export const LensContext = createContext<LensContextType | undefined>(
  undefined
);

export const LensProviderBase: React.FC<LensProviderProps> = ({
  lensConfiguration,
  children,
}) => {
  const { endpoint, permissionHeaders = {} } = lensConfiguration;
  const [data, setData] = useState<any[]>([]);
  // const [config, setConfig] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<any>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { addCondition, addGroup, removeItem, updateCondition } =
    useFilterFunctions({ setFilter: setFilters });

  const search = (query: string) => {
    setSearchQuery(query);
  };

  const {
    data: config,
    isFetched,
    // isError,
  } = useFetchConfig({ configEndpoint: endpoint });

  const { flatData, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteFetch({
      queryKey: endpoint,
      globalFilter: searchQuery,
      dataEndpoint: endpoint,
      // keepPreviousData,
      // dataCallback,
      body: { filters: getProcessedFilters(filters) },
      headers: permissionHeaders,
    });

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
        flatData,
        fetchNextPage,
        isFetching,
        hasNextPage,
        refetch,
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
