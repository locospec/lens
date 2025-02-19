import { ReactNode } from "react";
import { SelectionType } from "../interface/DatatableInterface";

interface DatatableContextType {
  selectedRows: Set<number>;
  selectionType: SelectionType;
  handleRowSelection: (rowId: number) => void;
  clearSelection: () => void;
}

interface DatatableContextLensProviderInterface {
  children?: ReactNode;
}

interface DatatableContextProviderInterface
  extends DatatableContextLensProviderInterface {
  selectionType: SelectionType;
}

export type {
  DatatableContextType,
  DatatableContextLensProviderInterface,
  DatatableContextProviderInterface,
};
