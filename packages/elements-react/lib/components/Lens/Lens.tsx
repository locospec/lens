"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { List } from "./List.tsx";
import type { SelectionType } from "./interfaces/index.ts";
import { LensProvider } from "./context/LensContext.tsx";

const queryClient = new QueryClient();

export interface LensInterface {
  selectionType?: SelectionType;
  onSelect?: (selection: any) => void;
  selectedItems?: string[];
  showDevTools?: boolean;
  showTableMetrics?: boolean;
  configEndpoint?: string;
  configCallback?: () => any;
  dataEndpoint?: string;
  dataCallback?: (schema: any, request: any) => any;
}

const Lens = ({
  selectedItems = [],
  onSelect,
  showDevTools = false,
  showTableMetrics = false,
  configEndpoint,
  configCallback,
  dataEndpoint,
  dataCallback,
}: LensInterface) => {
  return (
    <QueryClientProvider client={queryClient}>
      {showDevTools ? <ReactQueryDevtools /> : <></>}
      <LensProvider
        showDevTools={showDevTools}
        showTableMetrics={showTableMetrics}
        dataCallback={dataCallback}
      >
        <List
          onSelect={onSelect}
          selectedItems={selectedItems}
          configEndpoint={configEndpoint || ""}
          dataEndpoint={dataEndpoint}
          configCallback={configCallback}
        />
      </LensProvider>
    </QueryClientProvider>
  );
};

export default Lens;
