import { cn } from "@lens/components/utils/cn.ts";
import type { HeaderGroup, Table } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { CSSProperties } from "react";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import { getColumnPinningStyles } from "../hooks/getColumnPinningStyles.ts";
import { getStyleClasses } from "../utils/getStylesClassesForDataTable.ts";
import { ResizeHandle } from "./ResizeHandle.tsx";
import { SortSection } from "./SortSection.tsx";

// --- DatatableHeaderItem ---
interface DatatableHeaderItemInterface {
  header?: any;
}

const DatatableHeaderItem = ({ header }: DatatableHeaderItemInterface) => {
  const { column } = header;
  const {
    classNames,
    disableResizing,
    variantClasses,
    sortPayload,
    setSortPayload,
    enableSorting,
  } = useDatatableContext();

  const css = getColumnPinningStyles(column);

  const style: CSSProperties = {
    position: "relative",
    transition: "width transform 0.2s ease-in-out",
    whiteSpace: "nowrap",
  };

  const id = header?.id;
  const { minSize, maxSize } = header.column.columnDef;
  const enableResizeHandler =
    minSize !== undefined && maxSize !== undefined ? minSize !== maxSize : true;
  const isLast = column.getIsLastColumn();
  const align = (header.column.columnDef.meta as any)?.align;
  const styles = getStyleClasses(align);
  const isAction = column.id === "actions";
  const isSelect = column.id === "select";

  return (
    <div
      key={header.id}
      className={cn(
        "group/header relative flex truncate px-2 py-2 text-xs font-medium",
        "cursor-pointer bg-gray-50 text-gray-800",
        "dark:bg-black dark:text-gray-100 dark:group-hover:bg-gray-800",
        "group-data-[resizing=false]:hover:bg-gray-100",
        variantClasses.header_cell,
        styles?.text,
        isSelect && "flex items-center justify-center",
        classNames && classNames.header,
        (isAction && classNames?.actionsHeader) || ""
      )}
      style={{
        width: `calc(var(--header-${id}-size) * 1px)`,
        ...style,
        ...css,
      }}
      data-islast={isLast}
    >
      <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
      </span>
      {enableSorting && !["serialize", "select", "actions"].includes(id) && (
        <SortSection
          id={id}
          sortType={sortPayload[id] || "NONE"}
          setSortPayload={setSortPayload}
        />
      )}
      {!disableResizing && (
        <ResizeHandle
          header={header}
          isResizing={header.column.getIsResizing()}
          disabled={!enableResizeHandler}
          isLast={isLast}
        />
      )}
    </div>
  );
};

// --- DataTableHeader ---
interface TableHeaderInterface {
  headerGroup: HeaderGroup<any>;
  columnOrder: string[];
}

const DataTableHeader = ({
  headerGroup,
  columnOrder,
}: TableHeaderInterface) => {
  const { classNames, variantClasses } = useDatatableContext();

  return (
    <div
      id="datatable-header-row"
      key={headerGroup.id}
      className={cn(
        "group sticky top-0 z-10 flex",
        "border-b-2 border-gray-300 font-normal",
        "dark:border-gray-100",
        variantClasses.header_row,
        classNames && classNames?.headers
      )}
    >
      {headerGroup.headers.map(header => {
        return (
          <DatatableHeaderItem
            key={`${header.id}-${columnOrder.join("-")}`}
            header={header}
          />
        );
      })}
    </div>
  );
};

// --- DatatableHeaderSection ---
export interface DatatableHeaderSectionInterface {
  table: Table<any>;
  columnOrder: string[];
}

const DatatableHeaderSection = ({
  table,
  columnOrder,
}: DatatableHeaderSectionInterface) => {
  return (
    <>
      {table.getHeaderGroups().map(headerGroup => {
        return (
          <DataTableHeader
            key={headerGroup.id}
            headerGroup={headerGroup}
            columnOrder={columnOrder}
          />
        );
      })}
    </>
  );
};

export { DatatableHeaderSection, DataTableHeader, DatatableHeaderItem };
