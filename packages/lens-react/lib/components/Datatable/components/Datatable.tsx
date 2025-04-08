import React from "react";
import { DataTableLensContextProvider } from "../context/DataTableContext";
import DatatableList from "./DatatableList";
import type { TableStylingInterface } from "../interface/TableStylingInterface";
import type { ActionsMappingPropInterface } from "../interface/ActionsMappingInterface";
import type { DatatableVariants } from "../context/ContextInterfaces";
import "../styles.css";

export interface DatatableInterface {
  onSelect: (selected: any[]) => void;
  selectedItems: string[];
  classNames?: TableStylingInterface;
  disableResizing?: boolean;
  viewId?: string;
  rowActions?: any;
  actionsMapping?: ActionsMappingPropInterface;
  variant?: DatatableVariants;
}

const Datatable: React.FC<DatatableInterface> = ({
  selectedItems,
  onSelect,
  classNames,
  disableResizing = false,
  viewId,
  rowActions,
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
      rowActions={rowActions}
      actionsMapping={actionsMapping}
      variant={variant}
    >
      <DatatableList />
    </DataTableLensContextProvider>
  );
};

export { Datatable };
