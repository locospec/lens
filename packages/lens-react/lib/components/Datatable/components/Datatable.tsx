import React from "react";
import { DataTableLensContextProvider } from "../context/DataTableContext";
import DatatableList from "./DatatableList";
import type { TableStylingInterface } from "../interface/TableStylingInterface";
import type { ActionsMappingPropInterface } from "../interface/ActionsMappingInterface";
import type { DatatableVariants } from "../context/ContextInterfaces";
import "../styles.css";

export interface DatatableInterface {
  onSelect?: (selected: any[]) => void;
  selectedItems?: string[];
  classNames?: TableStylingInterface;
  disableResizing?: boolean;
  viewId?: string;
  cellActions?: any;
  actionsMapping?: ActionsMappingPropInterface;
  variant?: DatatableVariants;
}

const Datatable: React.FC<DatatableInterface> = ({
  selectedItems = [],
  onSelect = () => {},
  classNames,
  disableResizing = false,
  viewId,
  cellActions,
  actionsMapping,
  variant,
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
      variant={variant}
    >
      <DatatableList />
    </DataTableLensContextProvider>
  );
};

export { Datatable };
