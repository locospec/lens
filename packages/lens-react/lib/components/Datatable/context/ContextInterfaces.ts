import type { SensorDescriptor, SensorOptions } from "@dnd-kit/core";
import { SelectionType } from "../interface/DatatableInterface";
import { ReactNode } from "react";
import {
  AccessorKeyColumnDef,
  RowSelectionState,
  VisibilityState,
} from "@tanstack/react-table";
import { TableStylingInterface } from "../interface/TableStylingInterface";

interface CommonWrapperInterface {
  children: ReactNode;
}

interface DatatableContextProviderInterface extends CommonWrapperInterface {
  selectionType: SelectionType;
  sensors: SensorDescriptor<SensorOptions>[];
  endpoint: string;
  columns: never[] | AccessorKeyColumnDef<unknown, never>[];
  identifierKey: string;
  onSelect: (selected: any[]) => void;
  selectedItems: string[];
  classNames?: TableStylingInterface;
  disableResizing: boolean;
  filters?: any;
}

interface DataTableLensContextProviderInterface
  extends Partial<DatatableContextProviderInterface> {}

interface DatatableContextType
  extends Omit<DatatableContextProviderInterface, "children"> {
  selectedRows: RowSelectionState;
  setSelectedRows: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  columnVisibility: VisibilityState;
  setColumnVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>;
  activeId: string | null;
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
  isInResizeArea: boolean;
  setIsInResizeArea: React.Dispatch<React.SetStateAction<boolean>>;
  columnOrder: string[];
  setColumnOrder: React.Dispatch<React.SetStateAction<string[]>>;
  adjustedColumns: any;
  isColumnsReady: any;
  fixedColumns: (string | undefined)[];
  tableContainerRef: React.RefObject<HTMLDivElement>;
}

export type {
  CommonWrapperInterface,
  DatatableContextType,
  DatatableContextProviderInterface,
  DataTableLensContextProviderInterface,
};
