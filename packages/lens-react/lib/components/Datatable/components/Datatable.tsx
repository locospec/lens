import React from "react";
import { DataTableLensContextProvider } from "../context/DataTableContext";
import DatatableList from "./DatatableList";
import { TableStylingInterface } from "../interface/TableStylingInterface";
import { ActionsMappingPropInterface } from "../interface/ActionsMappingInterface";

export interface DatatableInterface {
  onSelect?: (selected: any[]) => void;
  selectedItems?: string[];
  classNames?: TableStylingInterface;
  disableResizing?: boolean;
  viewId?: string;
  cellActions?: any;
  actionsMapping?: ActionsMappingPropInterface;
}

const Datatable: React.FC<DatatableInterface> = ({
  selectedItems = [],
  onSelect = () => {},
  classNames,
  disableResizing = false,
  viewId,
  cellActions,
  actionsMapping,
}) => {
  return (
    <DataTableLensContextProvider
      selectedItems={selectedItems}
      onSelect={onSelect}
      classNames={classNames}
      disableResizing={disableResizing}
      viewId={viewId}
      cellActions={cellActions}
      actionsMapping={actionsMapping}
    >
      <DatatableList />
    </DataTableLensContextProvider>
  );
};

export { Datatable };
