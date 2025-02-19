import React, { createContext, useState } from "react";
import type { LensContextType, LensProviderProps } from "./types";
import { useFetchConfig } from "./hooks/useFetchConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const LensContext = createContext<LensContextType | undefined>(
  undefined
);

export const LensProviderBase: React.FC<LensProviderProps> = ({
  lensConfiguration,
  children,
}) => {
  const { endpoint } = lensConfiguration;
  const [error, _] = useState<string | null>(null);
  const [filters, setFilters] = useState<any>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const search = (query: string) => {
    setSearchQuery(query);
  };

  const {
    data: config,
    isFetched,
    isError,
  } = useFetchConfig({ configEndpoint: `${endpoint}/config` });

  return (
    <LensContext.Provider
      value={{
        error,
        filters,
        setFilters,
        search,
        config,
        isFetched,
        isError,
        endpoint,
        searchQuery,
        lensConfiguration,
      }}
    >
      {children}
    </LensContext.Provider>
  );
};

export const LensProvider: React.FC<LensProviderProps> = ({
  showDevTools = false,
  ...props
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {showDevTools && <ReactQueryDevtools />}
      <LensProviderBase {...props} />
    </QueryClientProvider>
  );
};

export const LensConsumer = LensContext.Consumer;
