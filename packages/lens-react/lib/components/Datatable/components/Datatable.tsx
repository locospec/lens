import React from "react";

import { cn } from "@/base/lib/utils";
import { DataTableLensContextProvider } from "../context/DataTableContext";
import DatatableList from "./DatatableList";

export interface DatatableInterface {
  selectedItems?: any;
  onSelect?: any;
}

const Datatable: React.FC<DatatableInterface> = (
  {
    // selectedItems,
    // onSelect,
  }
) => {
  return (
    <DataTableLensContextProvider
    // selectedItem={selectedItems}
    // onSelect={onSelect}
    >
      <div className={cn("w-full h-full flex flex-col overflow-hidden")}>
        <DatatableList />
      </div>
    </DataTableLensContextProvider>
  );
};

export { Datatable };
