import { flexRender } from "@tanstack/react-table";
import { ResizeHandle } from "./ResizeHandle.tsx";
import type { HeaderGroup } from "@tanstack/react-table";
import { cn } from "../utils/cn.ts";

export interface TableHeaderInterface {
  headerGroup: HeaderGroup<any>;
}

const TableHeader = ({ headerGroup }: TableHeaderInterface) => {
  return (
    <div key={headerGroup.id} className="le-flex ">
      {headerGroup.headers.map((header) => {
        const id = header?.id;
        const { minSize, maxSize } = header.column.columnDef;
        const addResizeHandler =
          minSize !== undefined && maxSize !== undefined
            ? minSize !== maxSize
            : true;

        const align = (header.column.columnDef.meta as any)?.align;
        const align_class = align ? `le-justify-${align}` : "";

        return (
          <div
            key={header.id}
            className={cn(
              "le-table-header-cell",
              "le-relative le-text-left le-font-semibold",
              "le-p-[var(--table-cell-padding)] le-min-h-[var(--table-cell-min-height)]",
              align_class
            )}
            style={{
              width: `calc(var(--header-${id}-size) * 1px)`,
            }}
          >
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
            {addResizeHandler && (
              <ResizeHandle
                header={header}
                isResizing={header.column.getIsResizing()}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export { TableHeader };
