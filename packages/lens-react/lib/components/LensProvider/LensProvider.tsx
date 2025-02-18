import React, { createContext, useState } from "react";
import type { LensContextType, LensProviderProps } from "./types";
import { useFetchConfig } from "../Lens/hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const LensContext = createContext<LensContextType | undefined>(
  undefined
);

export const LensProviderBase: React.FC<LensProviderProps> = ({
  lensConfiguration,
  children,
}) => {
  const { endpoint } = lensConfiguration;
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<any>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const search = (query: string) => {
    setSearchQuery(query);
  };

  const {
    data: config,
    isFetched,
    isError,
  } = useFetchConfig({ configEndpoint: endpoint });

  return (
    <LensContext.Provider
      value={{
        error,
        filters,
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

export const LensProvider: React.FC<LensProviderProps> = (props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LensProviderBase {...props} />
    </QueryClientProvider>
  );
};

export const LensConsumer = LensContext.Consumer;
