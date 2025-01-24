import { flexRender } from "@tanstack/react-table";
import { ResizeHandle } from "./ResizeHandle.tsx";
import type { HeaderGroup } from "@tanstack/react-table";

export interface TableHeaderInterface {
  headerGroup: HeaderGroup<any>;
}

const TableHeader = ({ headerGroup }: TableHeaderInterface) => {
  const no_of_colums = headerGroup.headers.length;
  return (
    <div
      key={headerGroup.id}
      className="le-flex le-border-[var(--gray-9)] le-bg-[var(--gray-3)]"
    >
      {headerGroup.headers.map((header, index) => (
        <div
          key={header.id}
          className="le-relative le-border-b le-px-4 le-py-1.5 le-text-left le-font-semibold"
          style={{
            width: `calc(var(--header-${header?.id}-size) * 1px)`,
          }}
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
          {index < no_of_colums - 1 && (
            <ResizeHandle
              header={header}
              isResizing={header.column.getIsResizing()}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export { TableHeader };
