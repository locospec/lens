import { useViewContext } from "@lens/components/Views/View";
import { useLensContext } from "@lens/main";
import { createContext, useRef } from "react";
import { fetchStylesFromVariants } from "../hooks/fetchStylesFromVariants";
import { useColumnResize } from "../hooks/useColumnResize";
import { useTableConfig } from "../hooks/useTableConfig";
import { getCellOverFlowStyles } from "../utils/getCellOverFlowStyles";
import { initialiseDatatableStates } from "../utils/initialiseDatatableStates";
import { initialiseDefaultColumnsConfig } from "../utils/initialiseDefaultColumnsConfig";
import { initialiseDefaultDatatableValues } from "../utils/initialiseDefaultDatatableValues";
import { initialiseDnDSensors } from "../utils/initialiseDnDSensors";
import type {
  DatatableContextProviderInterface,
  DatatableContextType,
  DataTableLensContextProviderInterface,
} from "./ContextInterfaces";

const DatatableContext = createContext<DatatableContextType | undefined>(
  undefined
);
DatatableContext.displayName = "DatatableContext";

const DatatableContextProvider: React.FC<DatatableContextProviderInterface> = ({
  children,
  columns,
  selectedItems,
  viewChildRef,
  variant = "vanilla",
  ...props
}) => {
  const { defaultColPinning, defaultColShow, tableSelectedItems } =
    initialiseDefaultDatatableValues(selectedItems);

  const { defaultColOrder, fixedColumns } = initialiseDefaultColumnsConfig(
    columns,
    defaultColShow,
    defaultColPinning
  );

  const {
    selectedRows,
    setSelectedRows,
    columnVisibility,
    setColumnVisibility,
    columnPining,
    setColumnPining,
    activeId,
    setActiveId,
    isInResizeArea,
    setIsInResizeArea,
    columnOrder,
    setColumnOrder,
  } = initialiseDatatableStates({
    tableSelectedItems,
    defaultColShow,
    defaultColPinning,
    defaultColOrder,
  });

  const tableContainerRef = viewChildRef || useRef<HTMLDivElement | null>(null);
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
  cellActions,
  actionsMapping,
  variant,
  disableReordering,
  showSheet,
  setShowSheet,
  cellOverflow,
  cellRenderer,
}) => {
  const lensContext = useLensContext();
  const viewContext = useViewContext();
  const sensors = initialiseDnDSensors();
  const DATA_TABLE_STYLING_CLASSES = fetchStylesFromVariants(variant);
  const cellOverFlowStyles = getCellOverFlowStyles(cellOverflow);

  const { isFetched, isError, endpoints, modal_name, lensConfiguration } =
    lensContext;
  const { dataCallback, permissionHeaders } = lensConfiguration;

  const {
    filters,
    searchQuery,
    viewChildRef,
    config,
    context: localContext,
  } = viewContext;
  const viewName = config?.name || "default_view";

  if (cellActions) {
    const visibleAttributes =
      config?.columns.map((column: any) => column?.id) || [];
    Object.keys(cellActions).forEach(key => {
      if (!visibleAttributes.includes(key)) {
        console.error(
          `Table does not contain the attribute: "${key}"`,
          "\n Please use one of the following to configure cell actions :",
          visibleAttributes
        );
      }
    });
  }
  const selectionType = config?.selectionType || "none";
  let tableConfig = config;
  const expand = tableConfig?.expand || [];

  if (!tableConfig) {
    throw new Error(
      "No TableConfig Found, Please check the view id or backend _config call response"
    );
  }
  const {
    columns,
    identifierKey = "",
    allowedScopes,
  } = useTableConfig(
    tableConfig,
    actionsMapping,
    DATA_TABLE_STYLING_CLASSES,
    permissionHeaders
  );

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
      filters={filters}
      searchQuery={searchQuery}
      viewId={viewId}
      modalName={modal_name}
      viewChildRef={viewChildRef}
      cellActions={cellActions}
      viewName={viewName}
      expand={expand}
      localContext={localContext}
      allowedScopes={allowedScopes}
      variant={variant}
      variantClasses={DATA_TABLE_STYLING_CLASSES}
      dataCallback={dataCallback}
      disableResizing={disableResizing}
      disableReordering={disableReordering}
      showSheet={showSheet}
      setShowSheet={setShowSheet}
      cellOverFlowStyles={cellOverFlowStyles}
      cellRenderer={cellRenderer}
    >
      {isFetched ? (
        isError ? (
          <>Error in Datatable Context</>
        ) : (
          children
        )
      ) : (
        <DatatableLoader />
      )}
    </DatatableContextProvider>
  );
};
DataTableLensContextProvider.displayName = "DataTableLensContextProvider";

const DatatableLoader = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-2">
      <div className="relative flex h-20 w-20 animate-spin items-center justify-center rounded-full border-4 border-white border-t-gray-600 opacity-100"></div>
      <label className="text-lg font-semibold">
        Lens Powered Datatable is rendering your configurations. Please be
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
