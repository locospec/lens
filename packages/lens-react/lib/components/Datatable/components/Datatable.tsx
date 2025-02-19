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
      <div
        className={cn(
          "le-w-full le-h-full le-flex le-flex-col le-overflow-hidden"
        )}
      >
        <DatatableList />
      </div>
    </DataTableLensContextProvider>
  );
};

export { Datatable };
