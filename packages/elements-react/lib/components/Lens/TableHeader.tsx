import { flexRender } from "@tanstack/react-table";
import { ResizeHandle } from "./ResizeHandle.tsx";
import type { HeaderGroup } from "@tanstack/react-table";
import { cn } from "../utils/cn.ts";

export interface TableHeaderInterface {
  headerGroup: HeaderGroup<any>;
}

//le-border-[var(--gray-9)] le-bg-[var(--gray-4)]
const TableHeader = ({ headerGroup }: TableHeaderInterface) => {
  return (
    <div key={headerGroup.id} className="le-flex ">
      {headerGroup.headers.map((header) => (
        <div
          key={header.id}
          className={cn(
            "le-relative le-border-b le-border-r le-border-[var(--gray-7)] le-text-left le-font-semibold",
            "le-p-[var(--table-cell-padding)] le-min-h-[var(--table-cell-min-height)]"
          )}
          style={{
            width: `calc(var(--header-${header?.id}-size) * 1px)`,
          }}
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
          <ResizeHandle
            header={header}
            isResizing={header.column.getIsResizing()}
          />
        </div>
      ))}
    </div>
  );
};

export { TableHeader };
