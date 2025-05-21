import {
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@lens/components/utils/cn.ts";
import { flexRender } from "@tanstack/react-table";
import { ChevronsUpDownIcon } from "lucide-react";
import { CSSProperties } from "react";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import { getColumnPinningStyles } from "../hooks/getColumnPinningStyles.ts";
import { getStyleClasses } from "../utils/getStylesClassesForDataTable.ts";
import { ResizeHandle } from "./ResizeHandle.tsx";

const DatatableHeaderItem = ({
  header,
  isInResizeArea,
  columnOrder,
  setIsInResizeArea,
}: any) => {
  const fixed = (header.column.columnDef.meta as any)?.fixed;
  const { column } = header;
  const { classNames, disableResizing, variantClasses, disableReordering } =
    useDatatableContext();

  const css = getColumnPinningStyles(column);

  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useSortable({
      id: header.column.id,
      disabled: ["left", "right"].includes(fixed) || isInResizeArea,
    });

  const style: CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: "relative",
    transform: CSS.Translate.toString(transform),
    transition: "width transform 0.2s ease-in-out",
    whiteSpace: "nowrap",
    zIndex: isDragging ? 1 : 0,
  };

  const id = header?.id;
  const { minSize, maxSize } = header.column.columnDef;
  const enableResizeHandler =
    minSize !== undefined && maxSize !== undefined ? minSize !== maxSize : true;
  const isLast = column.getIsLastColumn();
  const align = (header.column.columnDef.meta as any)?.align;
  const styles = getStyleClasses(align);
  const isAction = column.id === "actions";

  return (
    <SortableContext
      key={`${header.id}-${columnOrder.join("-")}`}
      items={columnOrder}
      strategy={horizontalListSortingStrategy}
    >
      <div
        key={header.id}
        className={cn(
          "group/header relative flex truncate px-2 py-2 text-xs",
          "bg-gray-100 text-gray-500 hover:bg-gray-200",
          "dark:bg-black dark:text-gray-100 dark:group-hover:bg-gray-800",
          variantClasses.header_cell,
          !disableReordering && enableResizeHandler
            ? "cursor-grab"
            : "cursor-pointer",
          styles?.text,
          classNames && classNames.header,
          (isAction && classNames?.actionsHeader) || ""
        )}
        style={{
          width: `calc(var(--header-${id}-size) * 1px)`,
          ...style,
          ...css,
        }}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        data-islast={isLast}
      >
        <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </span>
        {!["serialize", "actions"].includes(id) && (
          <div
            className="z-50 ml-1 flex h-full items-center justify-center opacity-0 group-hover/header:opacity-100"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              console.log("TODO: Sorting Logic goes here");
            }}
          >
            <div className="rounded p-0.5 hover:bg-gray-300">
              <ChevronsUpDownIcon className="h-3 w-3" />
            </div>
          </div>
        )}
        {!disableResizing && (
          <ResizeHandle
            header={header}
            isResizing={header.column.getIsResizing()}
            setIsInResizeArea={setIsInResizeArea}
            disabled={!enableResizeHandler}
            isLast={isLast}
          />
        )}
      </div>
    </SortableContext>
  );
};

export default DatatableHeaderItem;
