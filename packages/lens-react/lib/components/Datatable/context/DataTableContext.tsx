import { createContext, useContext, useRef, useState } from "react";
import { LensContext } from "@/main";
import type {
  DatatableContextType,
  DatatableContextProviderInterface,
  DataTableLensContextProviderInterface,
} from "./ContextInterfaces";
import {
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { RowSelectionState, VisibilityState } from "@tanstack/react-table";
import { useTableConfig } from "../hooks/useTableConfig";
import { useColumnResize } from "../hooks/useColumnResize";

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined
);
DatatableContext.displayName = "DatatableContext";

const useDatatableContext = () => {
  const context = useContext(DatatableContext);
  if (!context) {
    throw new Error(
      "useDatatableContext must be used within a DatatableContextProvider"
    );
  }
  return context;
};

useDatatableContext.displayName = "useDatatableContext";

const DatatableContextProvider: React.FC<DatatableContextProviderInterface> = ({
  children,
  columns,
  ...props
}) => {
  const [selectedRows, setSelectedRows] = useState<RowSelectionState>({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isInResizeArea, setIsInResizeArea] = useState(false);
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    columns.map((c) => {
      return c.id!;
    })
  );

  const fixedColumns =
    columns.filter((c: any) => c?.meta?.fixed).map((c) => c.id) || [];

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const { adjustedColumns, isColumnsReady } = useColumnResize(
    tableContainerRef,
    columns,
    0
  );

  return (
    <DatatableContext.Provider
      value={{
        selectedRows,
        setSelectedRows,
        tableContainerRef,
        columnVisibility,
        setColumnVisibility,
        activeId,
        setActiveId,
        isInResizeArea,
        setIsInResizeArea,
        columns,
        columnOrder,
        setColumnOrder,
        adjustedColumns,
        isColumnsReady,
        fixedColumns,
        ...props,
      }}
    >
      {children}
    </DatatableContext.Provider>
  );
};
DatatableContextProvider.displayName = "DatatableContextProvider";

const DataTableLensContextProvider: React.FC<
  DataTableLensContextProviderInterface
> = ({ children }) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("useInfiniteFetch must be used within LensProvider");
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const { config, endpoint, isFetched, isError } = lensContext;
  const selectionType = config?.selectionType || "none";

  const { columns, identifierKey = "" } = useTableConfig(config);

  return (
    <DatatableContextProvider
      selectionType={selectionType}
      sensors={sensors}
      endpoint={endpoint}
      columns={columns}
      identifierKey={identifierKey}
    >
      {isFetched ? isError ? <>Error</> : children : "loading table...."}
    </DatatableContextProvider>
  );
};
DataTableLensContextProvider.displayName = "DataTableLensContextProvider";

export {
  useDatatableContext,
  DatatableContext,
  DatatableContextProvider,
  DataTableLensContextProvider,
};
