"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { List } from "./List.tsx";
import { LensProvider } from "./context/LensContext.tsx";
import type { LensInterface } from "./interfaces";
import "./Lens.css";

const queryClient = new QueryClient();

const Lens = ({
  selectedItems = [],
  onSelect,
  showDevTools = false,
  showTableMetrics = false,
  configEndpoint,
  configCallback,
  dataEndpoint,
  dataCallback,
  size = "1",
  variant = "surface",
  showTopBar = false,
  actionsCallback,
}: LensInterface) => {
  return (
    <QueryClientProvider client={queryClient}>
      {showDevTools ? <ReactQueryDevtools /> : <></>}
      <LensProvider
        showDevTools={showDevTools}
        showTableMetrics={showTableMetrics}
        dataCallback={dataCallback}
        configCallback={configCallback}
        size={size}
        variant={variant}
        variantClass={`le-table-variant-${variant}`}
        showTopBar={showTopBar}
        actionsCallback={actionsCallback}
      >
        <List
          onSelect={onSelect}
          selectedItems={selectedItems}
          configEndpoint={configEndpoint || ""}
          dataEndpoint={dataEndpoint}
        />
      </LensProvider>
    </QueryClientProvider>
  );
};

export default Lens;
