import React from "react";

// import { cn } from "@/base/lib/utils";
import { DataTableLensContextProvider } from "../context/DataTableContext";
import DatatableList from "./DatatableList";
import { TableStylingInterface } from "../interface/TableStylingInterface";

export interface DatatableInterface {
  onSelect: (selected: any[]) => void;
  selectedItems: string[];
  classNames?: TableStylingInterface;
  disableResizing?: boolean;
}

const Datatable: React.FC<DatatableInterface> = ({
  selectedItems,
  onSelect,
  classNames,
  disableResizing = false,
}) => {
  return (
    <DataTableLensContextProvider
      selectedItems={selectedItems}
      onSelect={onSelect}
      classNames={classNames}
      disableResizing={disableResizing}
    >
      <DatatableList />
    </DataTableLensContextProvider>
  );
};

export { Datatable };
