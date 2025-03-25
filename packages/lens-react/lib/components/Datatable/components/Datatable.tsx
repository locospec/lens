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
  rowActions?: any;
}

const Datatable: React.FC<DatatableInterface> = ({
  selectedItems,
  onSelect,
  classNames,
  disableResizing = false,
  viewId,
  rowActions,
}) => {
  return (
    <DataTableLensContextProvider
      selectedItems={selectedItems}
      onSelect={onSelect}
      classNames={classNames}
      disableResizing={disableResizing}
      viewId={viewId}
      rowActions={rowActions}
    >
      <DatatableList />
    </DataTableLensContextProvider>
  );
};

export { Datatable };
