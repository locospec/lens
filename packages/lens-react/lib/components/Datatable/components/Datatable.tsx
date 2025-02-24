import React from "react";
import { DataTableLensContextProvider } from "../context/DataTableContext";
import DatatableList from "./DatatableList";
import { TableStylingInterface } from "../interface/TableStylingInterface";

export interface DatatableInterface {
  onSelect: (selected: any[]) => void;
  selectedItems: string[];
  classNames?: TableStylingInterface;
  disableResizing?: boolean;
  viewId?: string;
}

const Datatable: React.FC<DatatableInterface> = ({
  selectedItems,
  onSelect,
  classNames,
  disableResizing = false,
  viewId,
}) => {
  return (
    <DataTableLensContextProvider
      selectedItems={selectedItems}
      onSelect={onSelect}
      classNames={classNames}
      disableResizing={disableResizing}
      viewId={viewId}
    >
      <DatatableList />
    </DataTableLensContextProvider>
  );
};

export { Datatable };
