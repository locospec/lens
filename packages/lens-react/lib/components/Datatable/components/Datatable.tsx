import React from "react";

import { cn } from "@/base/lib/utils";
import { DataTableLensContextProvider } from "../context/DataTableContext";
import DatatableList from "./DatatableList";

export interface DatatableInterface {}

const Datatable: React.FC<DatatableInterface> = ({}) => {
  return (
    <DataTableLensContextProvider>
      <div
        className={cn(
          "twp lens-data-table-root le-w-full le-h-full le-flex le-flex-col le-overflow-hidden"
        )}
      >
        <DatatableList />
      </div>
    </DataTableLensContextProvider>
  );
};

export { Datatable };
