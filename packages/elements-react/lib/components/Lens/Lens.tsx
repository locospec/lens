"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { List } from "./List.tsx";
import type { SelectionType } from "./interfaces/index.ts";
import { LensProvider } from "./context/LensContext.tsx";

const queryClient = new QueryClient();

export interface LensInterface {
  configCallback?: () => any;
  configEndpoint?: string;
  selectionType?: SelectionType;
  onSelect?: (selection: any) => void;
  selectedItems?: string[];
  dataEndpoint: string;
  showDevTools?: boolean;
  showTableMetrics?: boolean;
}

const Lens = ({
  selectedItems = [],
  onSelect,
  configEndpoint,
  dataEndpoint,
  showDevTools = false,
  configCallback,
  showTableMetrics = false,
}: LensInterface) => {
  return (
    <QueryClientProvider client={queryClient}>
      {showDevTools ? <ReactQueryDevtools /> : <></>}
      <LensProvider
        showDevTools={showDevTools}
        showTableMetrics={showTableMetrics}
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
