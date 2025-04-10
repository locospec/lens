import type { SensorDescriptor, SensorOptions } from "@dnd-kit/core";
import { SelectionType } from "../interface/DatatableInterface";
import { ReactNode } from "react";
import {
  AccessorKeyColumnDef,
  ColumnPinningState,
  RowSelectionState,
  VisibilityState,
} from "@tanstack/react-table";
import { TableStylingInterface } from "../interface/TableStylingInterface";
import { ActionsMappingPropInterface } from "../interface/ActionsMappingInterface";

interface CommonWrapperInterface {
  children: ReactNode;
}

type DatatableVariants =
  | "vanilla"
  | "plum"
  | "citrus"
  | "blossom"
  | "cosmic"
  | undefined;

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
  viewId?: string;
  modalName?: string;
  searchQuery?: string;
  viewChildRef?: React.RefObject<HTMLDivElement>;
  cellActions?: any;
  viewName: string;
  expand: string[];
  localContext: any;
  allowedScopes?: string[];
  actionsMapping?: ActionsMappingPropInterface;
  variant?: DatatableVariants;
  variantClasses?: any;
  dataCallback?: any;
}

interface DataTableLensContextProviderInterface
  extends Partial<DatatableContextProviderInterface> {}

interface DatatableContextType
  extends Omit<DatatableContextProviderInterface, "children"> {
  selectedRows: RowSelectionState;
  setSelectedRows: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  columnVisibility: VisibilityState;
  setColumnVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>;
  columnPining: ColumnPinningState;
  setColumnPining: React.Dispatch<React.SetStateAction<ColumnPinningState>>;
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
  DatatableVariants,
  CommonWrapperInterface,
  DatatableContextType,
  DatatableContextProviderInterface,
  DataTableLensContextProviderInterface,
};
