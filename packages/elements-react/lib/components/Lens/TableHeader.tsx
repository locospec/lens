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
        const addResizeHandler =
          header.column.columnDef.minSize !== header.column.columnDef.maxSize;

        return (
          <div
            key={header.id}
            className={cn(
              "le-relative le-border-b le-border-r le-text-left le-font-semibold",
              "le-p-[var(--table-cell-padding)] le-min-h-[var(--table-cell-min-height)] le-border-[var(--gray-7)]"
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
