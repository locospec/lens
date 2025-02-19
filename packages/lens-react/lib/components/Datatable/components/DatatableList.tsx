import { useInfiniteFetch } from "@/components/LensProvider/hooks/useInfiniteFetch";
import { cn } from "@/components/utils/cn";
import { useDatatableContext } from "../context/DataTableContext";
import { useFetchMoreOnScroll } from "../hooks/useFetchMoreOnScroll";
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
import { useCallback } from "react";

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
  } = useDatatableContext();

  useSyncSelection(selectedRows, selectedRows, setSelectedRows, () => {});

  const { flatData, fetchNextPage, isFetching, hasNextPage } = useInfiniteFetch(
    {}
  );

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
    getRowId: (row) => row[identifierKey],
    initialState: {
      columnPinning: {
        // TODO: This is hard coded needs to be removed and to be fetched
        // from table config once the config is modified allows pinning
        left: ["select", "id"],
        right: ["actions"],
      },
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

  if (!isColumnsReady) {
    return (
      <div
        ref={tableContainerRef}
        className={cn(
          "le-flex le-h-full le-w-full le-items-center le-justify-center le-bg-white"
        )}
      >
        <div className="le-text-gray-500">Calculating column sizes...</div>
      </div>
    );
  }

  return (
    <div className="le-flex le-flex-col le-w-full le-h-full">
      <div
        className={cn(
          "le-flex-1 le-relative twp le-flex le-h-full le-flex-col le-gap-0 le-overflow-hidden",
          "lens-data-table-root"
        )}
      >
        <div
          className="le-relative le-flex-1 le-overflow-auto le-w-full le-h-full"
          onScroll={(e) => {
            fetchMoreOnBottomReached(e.target as HTMLDivElement);
          }}
          ref={tableContainerRef}
        >
          <div
            className={cn("le-w-full le-h-full rt-TableRootTable")}
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
    </div>
  );
};

export default DatatableList;
