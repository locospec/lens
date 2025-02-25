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
import { ViewContext } from "@/components/Views/View/ViewContext";

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined
);
DatatableContext.displayName = "DatatableContext";

const DatatableContextProvider: React.FC<DatatableContextProviderInterface> = ({
  children,
  columns,
  selectedItems,
  viewChildRef,
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

  const tableContainerRef = viewChildRef || useRef<HTMLDivElement>(null);

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
  viewId = "default",
}) => {
  const lensContext = useContext(LensContext);
  if (!lensContext) {
    throw new Error("useInfiniteFetch must be used within LensProvider");
  }

  const viewContext = useContext(ViewContext);

  if (!viewContext) {
    console.warn(
      "No View Context found so the global context of lens will be used to apply global filters. \n This can cause issue while using multiple datatable as filters can cause conflicts between each other. \n Using of View to wrap a data-table is recommneded"
    );
  }

  const viewFilters = viewContext?.filters;
  const searchQuery = viewContext?.searchQuery;
  const viewChildRef = viewContext?.viewChildRef;
  const viewTableConfig = viewContext?.config;

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const { config, isFetched, isError, filters, endpoints, modal_name } =
    lensContext;
  const selectionType = config?.selectionType || "none";
  let tableConfig = viewTableConfig || config[viewId];

  if (!tableConfig) {
    throw new Error(
      "No TableConfig Found, Please check the view id or backend _config call response"
    );
  }
  const { columns, identifierKey = "" } = useTableConfig(tableConfig);

  return (
    <DatatableContextProvider
      selectionType={selectionType}
      sensors={sensors}
      endpoint={endpoints.read}
      columns={columns}
      identifierKey={identifierKey}
      onSelect={onSelect ? onSelect : () => {}}
      selectedItems={selectedItems || []}
      classNames={classNames}
      disableResizing={disableResizing}
      filters={viewFilters || filters}
      searchQuery={searchQuery}
      viewId={viewId}
      modalName={modal_name}
      viewChildRef={viewChildRef}
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
