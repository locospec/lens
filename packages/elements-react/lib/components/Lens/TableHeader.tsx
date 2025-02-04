import { CSSProperties } from "react";
import { flexRender } from "@tanstack/react-table";
import type { HeaderGroup } from "@tanstack/react-table";
import { ResizeHandle } from "./ResizeHandle.tsx";
import { cn } from "../utils/cn.ts";
import {
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface TableHeaderInterface {
  headerGroup: HeaderGroup<any>;
  columnOrder: string[];
}

const TableHeader = ({ headerGroup, columnOrder }: TableHeaderInterface) => {
  return (
    <div key={headerGroup.id} className="le-flex">
      {headerGroup.headers.map((header) => {
        const fixed = (header.column.columnDef.meta as any)?.fixed;

        const { attributes, isDragging, listeners, setNodeRef, transform } =
          useSortable({
            id: header.column.id,
            disabled: fixed,
          });

        const style: CSSProperties = {
          opacity: isDragging ? 0.8 : 1,
          position: "relative",
          transform: CSS.Translate.toString(transform), // translate instead of transform to avoid squishing
          transition: "width transform 0.2s ease-in-out",
          whiteSpace: "nowrap",
          zIndex: isDragging ? 1 : 0,
        };

        const id = header?.id;
        const { minSize, maxSize } = header.column.columnDef;
        const addResizeHandler =
          minSize !== undefined && maxSize !== undefined
            ? minSize !== maxSize
            : true;

        const align = (header.column.columnDef.meta as any)?.align;
        const align_class = align ? `le-justify-${align}` : "";
        const align_class_block =
          align === "end"
            ? "le-text-right"
            : align === "center"
            ? "le-text-center"
            : "le-text-left";

        return (
          <SortableContext
            key={header.id}
            items={columnOrder}
            strategy={horizontalListSortingStrategy}
          >
            <div
              key={header.id}
              className={cn(
                "le-table-header-cell le-truncate",
                "le-relative le-text-left le-font-semibold",
                "le-p-[var(--table-cell-padding)] le-min-h-[var(--table-cell-min-height)]",
                "le-border-b le-border-[var(--gray-7)]",
                header.id === "actions" ? align_class_block : align_class,
                header.id === "actions" ? "le-flex le-gap-x-2" : ""
              )}
              style={{
                width: `calc(var(--header-${id}-size) * 1px)`,
                ...style,
              }}
              ref={setNodeRef}
              {...attributes}
              {...listeners}
            >
              {header.isPlaceholder
                ? null
                : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              {addResizeHandler && (
                <ResizeHandle
                  header={header}
                  isResizing={header.column.getIsResizing()}
                />
              )}
            </div>
          </SortableContext>
        );
      })}
    </div>
  );
};

export { TableHeader };
