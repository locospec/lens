import { flexRender } from "@tanstack/react-table";
import { ResizeHandle } from "./ResizeHandle.tsx";
import type { HeaderGroup } from "@tanstack/react-table";

export interface TableHeaderInterface {
  headerGroup: HeaderGroup<any>;
}

const TableHeader = ({ headerGroup }: TableHeaderInterface) => {
  return (
    <div
      key={headerGroup.id}
      className="le-flex le-border-[var(--gray-9)] le-bg-[var(--gray-4)]"
    >
      {headerGroup.headers.map((header) => (
        <div
          key={header.id}
          className="le-relative le-border-b le-border-r le-border-[var(--gray-7)] le-px-4 le-py-1.5 le-text-left le-font-semibold"
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
