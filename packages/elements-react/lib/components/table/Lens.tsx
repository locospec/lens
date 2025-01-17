"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./css/divTable.css";
import { List } from "./List.tsx";
import type { SelectionType } from "./interfaces/index.ts";

const queryClient = new QueryClient();

export interface LensInterface {
  selectionType: SelectionType;
  onSelect?: (selection: any) => void;
  selectedItems?: string[];
  configEndpoint: string;
  dataEndpoint: string;
  showDevTools?: boolean;
}

const Lens = ({
  selectionType = "single",
  selectedItems = [],
  onSelect,
  configEndpoint,
  dataEndpoint,
  showDevTools = false,
}: LensInterface) => (
  <QueryClientProvider client={queryClient}>
    {showDevTools ? <ReactQueryDevtools /> : <></>}
    <List
      onSelect={onSelect}
      selectionType={selectionType}
      selectedItems={selectedItems}
      configEndpoint={configEndpoint}
      dataEndpoint={dataEndpoint}
    />
  </QueryClientProvider>
);

export default Lens;
