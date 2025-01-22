"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { List } from "./List.tsx";
import type { SelectionType } from "./interfaces/index.ts";

const queryClient = new QueryClient();

export interface LensInterface {
  configCallback?: () => any;
  configEndpoint?: string;
  selectionType?: SelectionType;
  onSelect?: (selection: any) => void;
  selectedItems?: string[];
  dataEndpoint: string;
  showDevTools?: boolean;
}

const Lens = ({
  selectedItems = [],
  onSelect,
  configEndpoint,
  dataEndpoint,
  showDevTools = false,
  configCallback,
}: LensInterface) => {
  return (
    <QueryClientProvider client={queryClient}>
      {showDevTools ? <ReactQueryDevtools /> : <></>}
      <List
        onSelect={onSelect}
        selectedItems={selectedItems}
        configEndpoint={configEndpoint || ""}
        dataEndpoint={dataEndpoint}
        configCallback={configCallback}
      />
    </QueryClientProvider>
  );
};

export default Lens;
