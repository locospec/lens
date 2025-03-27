import { useInfiniteFetch } from "@/components/LensProvider/hooks/useInfiniteFetch";
import { cn } from "@/components/utils/cn";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import {
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useRowVirtualizer } from "../hooks/useRowVirtualizer";
import { useColumnSizeVars } from "../hooks/useColumnSizeVars";
import { useSyncSelection } from "../hooks/useSyncSelection";
import { DatatableHeaderSection } from "./DatatableHeaderSection";
import { createHandleDragEnd } from "../utils/createHandleDragEnd";
import { DatatableBody, MemoizedDatatableBody } from "./DatatableBody";
import { useCallback, useEffect } from "react";
import { useFetchMoreOnScroll } from "@/hooks/src/useFetchMoreOnScroll";
import { getProcessedFilters } from "@/components/LensProvider/utils/getProcessedFilters.tsx";

const DatatableList = () => {
  const {
    selectionType,
    selectedRows,
    setSelectedRows,
    identifierKey,
    sensors,
    tableContainerRef,
    columnVisibility,
    setColumnVisibility,
    activeId,
    setActiveId,
    isInResizeArea,
    setIsInResizeArea,
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
  } = useDatatableContext();

  const { flatData, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteFetch({
      queryKey: `${modalName}-${viewId}`,
      body: { filters: getProcessedFilters(filters), view: viewName },
      globalFilter: searchQuery,
    });

  useEffect(() => {
    refetch();
  }, [JSON.stringify(filters)]);

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
    getRowId: (row) => row[identifierKey],
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
    selectedRows,
    selectedItems,
    setSelectedRows,
    onSelect,
    table
  );

  if (!isColumnsReady) {
    return (
      <div
        ref={tableContainerRef}
        className={cn(
          "flex h-full w-full items-center justify-center bg-white"
        )}
      >
        <div className="text-gray-500">Calculating column sizes...</div>
      </div>
    );
  }

  return (
    <div
      className={"flex-1 relative flex h-full flex-col gap-0 overflow-hidden"}
    >
      {JSON.stringify(selectedRows)}
      <div
        className={cn(
          "relative flex-1 overflow-auto w-full h-full border border-gray-200",
          classNames && classNames?.wrapper
        )}
        onScroll={(e) => {
          fetchMoreOnBottomReached(e.target as HTMLDivElement);
        }}
        ref={tableContainerRef}
      >
        <div
          style={{
            ...columnSizeVars,
            width: "100%",
            height: `${rowVirtualizer.getTotalSize()}px`,
            minWidth: `${table.getTotalSize()}px`,
          }}
        >
          <DatatableHeaderSection
            table={table}
            columnSizeVars={columnSizeVars}
            tableContainerRef={tableContainerRef}
            columnOrder={columnOrder}
            handleDragEnd={handleDragEnd}
            setActiveId={setActiveId}
            activeId={activeId}
            setIsInResizeArea={setIsInResizeArea}
            isInResizeArea={isInResizeArea}
            sensors={sensors}
          />
          {isResizing ? (
            <MemoizedDatatableBody
              table={table}
              rowVirtualizer={rowVirtualizer}
            />
          ) : (
            <DatatableBody table={table} rowVirtualizer={rowVirtualizer} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DatatableList;
