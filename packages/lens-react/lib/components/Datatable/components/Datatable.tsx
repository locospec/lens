import React from "react";
import { DataTableLensContextProvider } from "../context/DataTableContext";
import DatatableList from "./DatatableList";
import type { TableStylingInterface } from "../interface/TableStylingInterface";
import type { ActionsMappingPropInterface } from "../interface/ActionsMappingInterface";
import type {
  CellRendererMap,
  DatatableVariants,
} from "../context/ContextInterfaces";
import "../styles.css";

export interface DatatableInterface {
  onSelect?: (selected: any[]) => void;
  selectedItems?: string[];
  classNames?: TableStylingInterface;
  disableResizing?: boolean;
  disableReordering?: boolean;
  viewId?: string;
  cellActions?: any;
  cellOverflow?: "wrap" | "clip" | "ellipsis";
  actionsMapping?: ActionsMappingPropInterface;
  variant?: DatatableVariants;
  showSheet?: boolean;
  setShowSheet?: React.Dispatch<React.SetStateAction<boolean>>;
  cellRenderer?: CellRendererMap;
}

const Datatable: React.FC<DatatableInterface> = ({
  selectedItems = [],
  onSelect = () => {},
  classNames,
  disableResizing = false,
  disableReordering = false,
  viewId,
  cellActions,
  actionsMapping,
  variant,
  showSheet,
  setShowSheet,
  cellOverflow,
  cellRenderer,
}) => {
  return (
    <DataTableLensContextProvider
      selectedItems={selectedItems}
      onSelect={onSelect}
      classNames={classNames}
      viewId={viewId}
      cellActions={cellActions}
      actionsMapping={actionsMapping}
      variant={variant}
      disableResizing={disableResizing}
      disableReordering={disableReordering}
      showSheet={showSheet}
      setShowSheet={setShowSheet}
      cellOverflow={cellOverflow}
      cellRenderer={cellRenderer}
    >
      <DatatableList />
    </DataTableLensContextProvider>
  );
};

export { Datatable };
