import type { SensorDescriptor, SensorOptions } from "@dnd-kit/core";
import { SelectionType } from "../interface/DatatableInterface";
import { ReactNode } from "react";
import {
  AccessorKeyColumnDef,
  RowSelectionState,
  VisibilityState,
} from "@tanstack/react-table";

interface CommonWrapperInterface {
  children: ReactNode;
}

interface DatatableContextProviderInterface extends CommonWrapperInterface {
  selectionType: SelectionType;
  sensors: SensorDescriptor<SensorOptions>[];
  endpoint: string;
  columns: never[] | AccessorKeyColumnDef<unknown, never>[];
  identifierKey: string;
}

interface DataTableLensContextProviderInterface
  extends Partial<DatatableContextProviderInterface> {}

interface DatatableContextType
  extends Omit<DatatableContextProviderInterface, "children"> {
  selectedRows: RowSelectionState;
  setSelectedRows: React.Dispatch<React.SetStateAction<RowSelectionState>>;
  columnVisibility: VisibilityState;
  setColumnVisibility: React.Dispatch<React.SetStateAction<VisibilityState>>;
  tableContainerRef: React.RefObject<HTMLDivElement>;
}

export type {
  CommonWrapperInterface,
  DatatableContextType,
  DatatableContextProviderInterface,
  DataTableLensContextProviderInterface,
};
