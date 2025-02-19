import { useInfiniteFetch } from "@/components/LensProvider/hooks/useInfiniteFetch";
import { cn } from "@/components/utils/cn";
import React, { useRef } from "react";
import { useDatatableContext } from "../context/DataTableContext";
import { useFetchMoreOnScroll } from "../hooks/useFetchMoreOnScroll";
import {
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useColumnResize } from "../hooks/useColumnResize";
import { useRowVirtualizer } from "../hooks/useRowVirtualizer";
import { useColumnSizeVars } from "../hooks/useColumnSizeVars";
import { useSyncSelection } from "../hooks/useSyncSelection";
import { DatatableHeaderSection } from "./DatatableHeaderSection";
import { createHandleDragEnd } from "../utils/createHandleDragEnd";

const DatatableList = () => {
  const {
    selectionType,
    selectedRows,
    setSelectedRows,
    columns,
    identifierKey,
    sensors,
  } = useDatatableContext();
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [isInResizeArea, setIsInResizeArea] = React.useState(false);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [columnVisibility, setColumnVisibility] = React.useState<any>({});

  const [fixedColumns, _] = React.useState(
    () => columns.filter((c: any) => c?.meta?.fixed).map((c) => c.id) || []
  );
  //   const lensContext = useContext(LensContext);

  const { flatData, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteFetch({});

  const { adjustedColumns, isColumnsReady } = useColumnResize(
    tableContainerRef,
    columns,
    0
  );
  const [columnOrder, setColumnOrder] = React.useState<string[]>(() =>
    columns.map((c) => {
      return c.id!;
    })
  );

  const handleDragEnd = createHandleDragEnd({
    setColumnOrder: setColumnOrder,
    fixedColumns: fixedColumns,
    setActiveId: setActiveId,
  });

  const { fetchMoreOnBottomReached } = useFetchMoreOnScroll(
    tableContainerRef,
    fetchNextPage,
    isFetching,
    hasNextPage
  );

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

  useSyncSelection(selectedRows, selectedRows, setSelectedRows, (id) =>
    console.log(">>>>>>", id)
  );

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatatableList;
