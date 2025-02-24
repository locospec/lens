import { createContext, useContext, useMemo, useRef, useState } from "react";
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
import type {
  ColumnPinningState,
  RowSelectionState,
  VisibilityState,
} from "@tanstack/react-table";
import { useTableConfig } from "../hooks/useTableConfig";
import { useColumnResize } from "../hooks/useColumnResize";
import convertIntoObject from "@/components/utils/convertIntoObject";
import { CustomColumnMeta } from "../interface/CustomColumnDef";

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined
);
DatatableContext.displayName = "DatatableContext";

const DatatableContextProvider: React.FC<DatatableContextProviderInterface> = ({
  children,
  columns,
  selectedItems,
  ...props
}) => {
  const tableSelectedItems: any = useMemo(() => {
    return selectedItems.length > 0 ? convertIntoObject(selectedItems) : {};
  }, [selectedItems]);

  const defaultColShow: any = {};
  const defaultColPinning: ColumnPinningState = {
    left: [],
    right: [],
  };

  const defaultColOrder = columns.map((col) => {
    const meta = col?.meta as CustomColumnMeta;
    const id = col.accessorKey || col.id || "";
    const { fixed, show } = meta;
    if (id && !show) {
      defaultColShow[id] = false;
    }
    if (id && fixed) {
      if (fixed === "left") {
        (defaultColPinning?.left as string[]).push(id);
      }
      if (fixed === "right") {
        (defaultColPinning?.right as string[]).push(id);
      }
    }

    return id;
  });

  const [selectedRows, setSelectedRows] =
    useState<RowSelectionState>(tableSelectedItems);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    defaultColShow || {}
  );
  const [columnPining, setColumnPining] = useState<ColumnPinningState>(
    defaultColPinning || {}
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isInResizeArea, setIsInResizeArea] = useState(false);
  const [columnOrder, setColumnOrder] = useState<string[]>(defaultColOrder);

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
        columnPining,
        setColumnPining,
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
        selectedItems,
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
> = ({
  children,
  onSelect,
  selectedItems,
  classNames,
  disableResizing = false,
}) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("useInfiniteFetch must be used within LensProvider");
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const { config, endpoint, isFetched, isError, filters } = lensContext;
  const selectionType = config?.selectionType || "none";

  const { columns, identifierKey = "" } = useTableConfig(config);

  return (
    <DatatableContextProvider
      selectionType={selectionType}
      sensors={sensors}
      endpoint={endpoint}
      columns={columns}
      identifierKey={identifierKey}
      onSelect={onSelect ? onSelect : () => {}}
      selectedItems={selectedItems || []}
      classNames={classNames}
      disableResizing={disableResizing}
      filters={filters}
    >
      {isFetched ? isError ? <>Error</> : children : "loading table...."}
    </DatatableContextProvider>
  );
};
DataTableLensContextProvider.displayName = "DataTableLensContextProvider";

export {
  DatatableContext,
  DatatableContextProvider,
  DataTableLensContextProvider,
};
