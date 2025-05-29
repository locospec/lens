import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { createContext } from "react";
import Loader from "../Loader";
import { LensDefaultChildren } from "./components";
import { LensDevTools } from "./devTools/LensDevTools";
import { useFetchConfig } from "./hooks/useFetchConfig";
import type { LensConfigurationInterface, LensContextType } from "./types";
import { fetchDataFromEndpoint } from "./utils/fetchDataFromEndpoint";
import { DatatableInterface } from "../Datatable/components/Datatable";

const queryClient = new QueryClient();

export const LensContext = createContext<LensContextType | undefined>(
  undefined
);

interface LensProviderProps {
  children?: React.ReactNode;
  showDevTools?: boolean;
  lensConfiguration: LensConfigurationInterface;
  errorModalCallback?: () => void;
  tableProps?: DatatableInterface;
}

export const LensProviderBase: React.FC<LensProviderProps> = ({
  lensConfiguration,
  children,
  showDevTools,
  tableProps,
}) => {
  const lens_uuid = `lens-${Math.floor(
    Math.random() * 1000
  ).toString()}-${Math.floor(Math.random() * 1000).toString()}`;

  const {
    endpoint = "",
    configCallback = undefined,
    newConfig = true,
    permissionHeaders,
    context = {},
    view,
  } = lensConfiguration;
  const { modal_name, endpoints } = fetchDataFromEndpoint(endpoint);

  const body: Record<string, any> = {
    globalContext: context,
  };
  if (view) {
    body["view"] = view;
  }
  const {
    data: config,
    isFetched,
    isError,
    error,
  }: any = useFetchConfig({
    configEndpoint: endpoints.config,
    configCallback,
    newConfig,
    permissionHeaders,
    body: JSON.stringify(body),
  });
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-4 text-4xl font-bold">
          {error?.code} {error?.name}
        </h1>
        <p className="mt-2 max-w-md text-sm text-gray-600">{error?.message}</p>
      </div>
    );
  }

  const renderComponnet = children ?? (
    <LensDefaultChildren tableProps={tableProps} />
  );

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
        context,
      }}
    >
      {showDevTools && <LensDevTools key={lens_uuid} config={config} />}
      {config && isFetched ? renderComponnet : <Loader />}
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
