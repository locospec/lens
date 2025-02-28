import { createContext, useRef, useState } from "react";
import { useLensContext } from "@/main";
import type {
  DatatableContextType,
  DatatableContextProviderInterface,
  DataTableLensContextProviderInterface,
} from "./ContextInterfaces";
import type {
  ColumnPinningState,
  RowSelectionState,
  VisibilityState,
} from "@tanstack/react-table";
import { useTableConfig } from "../hooks/useTableConfig";
import { useColumnResize } from "../hooks/useColumnResize";
import { CustomColumnMeta } from "../interface/CustomColumnDef";
import { initialiseDnDSensors } from "../utils/initialiseDnDSensors";
import { useViewContext } from "@/components/Views/View";
import { initialiseDefaultDatatableValues } from "../utils/initialiseDefaultDatatableValues";

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
  const { defaultColPinning, defaultColShow, tableSelectedItems } =
    initialiseDefaultDatatableValues(selectedItems);

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
  const lensContext = useLensContext();
  const viewContext = useViewContext();
  const sensors = initialiseDnDSensors();

  const { isFetched, isError, endpoints, modal_name } = lensContext;
  const { filters, searchQuery, viewChildRef, config } = viewContext;

  const selectionType = config?.selectionType || "none";
  let tableConfig = config;

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
      filters={filters}
      searchQuery={searchQuery}
      viewId={viewId}
      modalName={modal_name}
      viewChildRef={viewChildRef}
    >
      {isFetched ? isError ? <>Error</> : children : <DatatableLoader />}
    </DatatableContextProvider>
  );
};
DataTableLensContextProvider.displayName = "DataTableLensContextProvider";

const DatatableLoader = () => {
  return (
    <div className="w-full h-full  flex flex-col items-center justify-center gap-y-2">
      <div className="relative flex items-center justify-center w-20 h-20 border-4 border-white rounded-full opacity-100 border-t-gray-600 animate-spin"></div>
      <label className="text-lg font-semibold">
        Lens Powered Dtatatable is rendering your configurations. Please be
        patient..
      </label>
    </div>
  );
};

export {
  DatatableContext,
  DatatableContextProvider,
  DataTableLensContextProvider,
};
