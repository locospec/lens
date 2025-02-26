import React, { createContext, useState } from "react";
import type { LensContextType, LensProviderProps } from "./types";
import { useFetchConfig } from "./hooks/useFetchConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { fetchDataFromEndpoint } from "./utils/fetchDataFromEndpoint";

const queryClient = new QueryClient();

export const LensContext = createContext<LensContextType | undefined>(
  undefined
);

export const LensProviderBase: React.FC<LensProviderProps> = ({
  lensConfiguration,
  children,
}) => {
  // const lens_uuid = `lens-${Math.floor(
  //   Math.random() * 1000
  // ).toString()}-${Math.floor(Math.random() * 1000).toString()}`;

  const { endpoint = "", configCallback = undefined } = lensConfiguration;
  const [error, _] = useState<string | null>(null);
  const { modal_name, endpoints } = fetchDataFromEndpoint(endpoint);

  const {
    data: config,
    isFetched,
    isError,
  } = useFetchConfig({ configEndpoint: endpoints.config, configCallback });

  if (isError) {
    return <>Error</>;
  }

  return (
    <LensContext.Provider
      value={{
        error,
        config,
        isFetched,
        isError,
        endpoint,
        endpoints,
        modal_name,
        lensConfiguration,
      }}
    >
      {config && isFetched ? children : <Loader />}
    </LensContext.Provider>
  );
};

const Loader = () => {
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center gap-y-2">
      <div className="relative flex items-center justify-center w-20 h-20 border-4 border-white rounded-full opacity-100 border-t-gray-600 animate-spin"></div>
      <label className="text-lg font-semibold">
        Lens is Loading your configurations. Please be patient..
      </label>
    </div>
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
