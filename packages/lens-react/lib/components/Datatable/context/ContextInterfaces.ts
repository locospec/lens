import type { SensorDescriptor, SensorOptions } from "@dnd-kit/core";
import { SelectionType } from "../interface/DatatableInterface";
import { ReactNode } from "react";

interface CommonWrapperInterface {
  children: ReactNode;
}

interface DatatableContextProviderInterface extends CommonWrapperInterface {
  selectionType: SelectionType;
  sensors: SensorDescriptor<SensorOptions>[];
}

interface DataTableContextWrapperInterface
  extends Partial<DatatableContextProviderInterface> {}

interface DatatableContextType
  extends Omit<DatatableContextProviderInterface, "children"> {
  selectedRows: Set<number>;
  handleRowSelection: (rowId: number) => void;
  clearSelection: () => void;
}

export type {
  CommonWrapperInterface,
  DatatableContextType,
  DatatableContextProviderInterface,
  DataTableContextWrapperInterface,
};
