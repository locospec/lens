import { Sheet } from "@lens/base/components/ui/sheet";
import { useInfiniteFetch } from "@lens/components/LensProvider/hooks/useInfiniteFetch";
import { getProcessedFilters } from "@lens/components/LensProvider/utils/getProcessedFilters.tsx";
import LensSidebar from "@lens/components/Sheet/LensSheet.tsx";
import { cn } from "@lens/components/utils/cn";
import { useFetchMoreOnScroll } from "@lens/hooks/src/useFetchMoreOnScroll";
import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useCallback, useEffect, useRef } from "react";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import { useColumnSizeVars } from "../hooks/useColumnSizeVars";
import { useRowVirtualizer } from "../hooks/useRowVirtualizer";
import { useSyncSelection } from "../hooks/useSyncSelection";
import { createHandleDragEnd } from "../utils/createHandleDragEnd";
import { DatatableBody, MemoizedDatatableBody } from "./DatatableBody";
import { DatatableHeaderSection } from "./DatatableHeaderSection";

const DatatableList = () => {
  const tableWrapperRef = useRef(null);
  const {
    selectionType,
    selectedRows,
    setSelectedRows,
    identifierKey,
    tableContainerRef,
    columnVisibility,
    setColumnVisibility,
    setActiveId,
    adjustedColumns,
    isColumnsReady,
    columnOrder,
    setColumnOrder,
    fixedColumns,
    selectedItems,
    onSelect,
    classNames,
    filters,
    columnPining,
    setColumnPining,
    searchQuery,
    viewId,
    modalName,
    viewName,
    expand,
    localContext,
    allowedScopes,
    variantClasses,
    dataCallback,
    showSheet,
    setShowSheet,
    sortPayload,
    processSortPayload,
  } = useDatatableContext();

  const renderSheet = showSheet && setShowSheet ? true : false;

  const { flatData, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteFetch({
      queryKey: `${modalName}-${viewId}`,
      body: {
        filters: getProcessedFilters(filters),
        view: viewName,
        ...(expand.length > 0 && { expand }),
        ...(localContext &&
          Object.keys(localContext).length > 0 && { localContext }),
        ...(allowedScopes &&
          allowedScopes.length > 0 && { scopes: allowedScopes }),
        sorts: processSortPayload(sortPayload),
      },
      globalFilter: searchQuery,
      dataCallback: dataCallback,
    });

  useEffect(() => {
    refetch();
  }, [JSON.stringify(filters), JSON.stringify(sortPayload)]);

  const handleDragEnd = useCallback(
    createHandleDragEnd({
      setColumnOrder: setColumnOrder,
      fixedColumns: fixedColumns,
      setActiveId: setActiveId,
    }),
    [setColumnOrder, fixedColumns, setActiveId]
  );

  const { fetchMoreOnBottomReached } = useFetchMoreOnScroll({
    containerRef: tableContainerRef,
    fetchNextPage,
    isFetching,
    hasNextPage,
  });

  const table = useReactTable({
    data: flatData,
    columns: adjustedColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setSelectedRows,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnPinningChange: setColumnPining,
    getRowId: row => {
      return row[identifierKey];
    },
    initialState: {
      columnPinning: columnPining,
    },
    state: {
      rowSelection: selectedRows,
      columnOrder,
      columnVisibility,
    },
    defaultColumn: {
      minSize: 25,
      maxSize: 800,
    },
    columnResizeMode: "onChange",
    enableMultiRowSelection: selectionType === "multiple",
  });

  const { rows } = table.getRowModel();
  const isResizing = table.getState().columnSizingInfo.isResizingColumn;
  const rowVirtualizer = useRowVirtualizer({ rows, tableContainerRef });

  const columnSizeVars = useColumnSizeVars({
    table,
    adjustedColumns,
    parentWidth: tableContainerRef?.current?.clientWidth,
  });

  useSyncSelection(
    selectedItems,
    selectedRows,
    setSelectedRows,
    onSelect,
    table
  );

  if (!isColumnsReady) {
    return (
      <div
        ref={tableContainerRef}
        className={cn(
          "flex h-full w-full items-center justify-center text-black dark:text-white"
        )}
      >
        <div className="text-gray-700 dark:text-gray-300">
          Calculating column sizes...
        </div>
      </div>
    );
  }

  return (
    <div
      id="table-parent-wrapper"
      className={"relative flex h-full flex-1 flex-col overflow-hidden"}
      ref={tableWrapperRef}
    >
      {renderSheet && (
        <Sheet open={showSheet} onOpenChange={setShowSheet}>
          <LensSidebar
            tableContainerRef={tableWrapperRef}
            handleDragEnd={handleDragEnd}
            table={table}
            show={showSheet}
          />
        </Sheet>
      )}
      <div
        id="table-wrapper"
        className={cn(
          "relative h-full w-full flex-1 overflow-auto bg-white text-sm text-gray-800 dark:bg-black dark:text-white",
          variantClasses.wrapper,
          classNames && classNames?.wrapper
        )}
        onScroll={e => {
          fetchMoreOnBottomReached(e.target as HTMLDivElement);
        }}
        ref={tableContainerRef}
      >
        <div
          id="table-body-wrapper"
          style={{
            ...columnSizeVars,
            width: "100%",
            height: `${rowVirtualizer.getTotalSize()}px`,
            minWidth: `${table.getTotalSize()}px`,
          }}
        >
          <DatatableHeaderSection table={table} columnOrder={columnOrder} />
          {isResizing ? (
            <MemoizedDatatableBody
              table={table}
              rowVirtualizer={rowVirtualizer}
              isFetching={isFetching}
            />
          ) : (
            <DatatableBody
              table={table}
              rowVirtualizer={rowVirtualizer}
              isFetching={isFetching}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DatatableList;
