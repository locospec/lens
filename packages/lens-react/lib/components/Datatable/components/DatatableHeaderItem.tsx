import { CSSProperties } from "react";
import { flexRender } from "@tanstack/react-table";
import { ResizeHandle } from "./ResizeHandle.tsx";
import {
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/components/utils/cn.ts";
import { getColumnPinningStyles } from "../hooks/getColumnPinningStyles.ts";

const DatatableHeaderItem = ({
  header,
  isInResizeArea,
  columnOrder,
  setIsInResizeArea,
}: any) => {
  const fixed = (header.column.columnDef.meta as any)?.fixed;
  const { column } = header;

  const css = getColumnPinningStyles(column);

  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useSortable({
      id: header.column.id,
      disabled: fixed || isInResizeArea,
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
  const addResizeHandler =
    minSize !== undefined && maxSize !== undefined ? minSize !== maxSize : true;

  const align = (header.column.columnDef.meta as any)?.align;
  const align_class = align ? `justify-${align}` : "";

  return (
    <SortableContext
      key={`${header.id}-${columnOrder.join("-")}`}
      items={columnOrder}
      strategy={horizontalListSortingStrategy}
    >
      <div
        key={header.id}
        className={cn(
          "tabheader-cell truncate",
          "relative text-left font-semibold",
          "p-[var(--tabcell-padding)] min-h-[var(--tabcell-min-height)]",
          "border-b border-[var(--gray-7)]",
          align_class,
          header.id === "actions" ? "flex gap-x-2" : ""
        )}
        style={{
          width: `calc(var(--header-${id}-size) * 1px)`,
          ...style,
          ...css,
        }}
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
        {addResizeHandler && (
          <ResizeHandle
            header={header}
            isResizing={header.column.getIsResizing()}
            setIsInResizeArea={setIsInResizeArea}
          />
        )}
      </div>
    </SortableContext>
  );
};

export default DatatableHeaderItem;
