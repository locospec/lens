import React from "react";

import { cn } from "@/base/lib/utils";
import { DataTableLensContextProvider } from "../context/DataTableContext";
import DatatableList from "./DatatableList";

export interface DatatableInterface {
  onSelect: (selected: any[]) => void;
  selectedItems: string[];
}

const Datatable: React.FC<DatatableInterface> = ({
  selectedItems,
  onSelect,
}) => {
  return (
    <DataTableLensContextProvider
      selectedItems={selectedItems}
      onSelect={onSelect}
    >
      <div className={cn("w-full h-full flex flex-col overflow-hidden")}>
        <DatatableList />
      </div>
    </DataTableLensContextProvider>
  );
};

export { Datatable };
