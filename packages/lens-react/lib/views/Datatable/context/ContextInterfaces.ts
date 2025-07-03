import type { SensorDescriptor, SensorOptions } from "@dnd-kit/core";
import {
  AccessorKeyColumnDef,
  ColumnPinningState,
  RowSelectionState,
  VisibilityState,
} from "@tanstack/react-table";
import { ReactNode } from "react";
import { ActionsMappingPropInterface } from "../interface/ActionsMappingInterface";
import { SelectionType } from "../interface/DatatableInterface";
import { TableStylingInterface } from "../interface/TableStylingInterface";

type CellRendererFn<T = any> = (rowData: T) => React.ReactNode;

type CellRendererMap<T = any> = {
  [columnKey: string]: CellRendererFn<T>;
};

interface CommonWrapperInterface {
  children: ReactNode;
}

type DatatableVariants =
  | "vanilla"
  | "stripped"
  | "plum"
  | "citrus"
  | "blossom"
  | "cosmic"
  | undefined;

type SortType = "ASC" | "DESC" | "NONE";

type SortPayloadType = Record<string, SortType>;

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
  modelName?: string;
  searchQuery?: string;
  viewChildRef?: React.RefObject<HTMLDivElement | null>;
  cellActions?: any;
  queryName: string;
  expand: string[];
  allowedScopes?: string[];
  actionsMapping?: ActionsMappingPropInterface;
  variant?: DatatableVariants;
  variantClasses?: any;
  dataCallback?: any;
  disableReordering?: boolean;
  showSheet?: boolean;
  setShowSheet?: React.Dispatch<React.SetStateAction<boolean>>;
  cellOverflow?: "wrap" | "clip" | "ellipsis";
  cellOverFlowStyles: string;
  cellRenderer?: CellRendererMap;
  rowAction?: any;
  sortPayload: SortPayloadType;
  setSortPayload: React.Dispatch<React.SetStateAction<SortPayloadType>>;
  processSortPayload?: any;
  enableSorting?: any;
  readPerPage?: number;
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
  tableContainerRef: React.RefObject<HTMLDivElement | null>;
}

export type {
  CellRendererMap,
  CommonWrapperInterface,
  DatatableContextProviderInterface,
  DatatableContextType,
  DataTableLensContextProviderInterface,
  DatatableVariants,
  SortPayloadType,
  SortType,
};
