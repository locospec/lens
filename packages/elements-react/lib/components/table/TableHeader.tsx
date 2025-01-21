import { flexRender } from "@tanstack/react-table";
import { ResizeHandle } from "./ResizeHandle.tsx";

export interface TableHeaderInterface {
  headerGroup: any;
}

// This was removed as it was unused columnSizeVars
const TableHeader = ({ headerGroup }: TableHeaderInterface) => {
  return (
    <div key={headerGroup.id} className="le-flex">
      {headerGroup.headers.map((header: any) => (
        <div
          key={header.id}
          className="le-relative le-border-b le-border-gray-200 le-bg-gray-100 le-px-4 le-py-1.5 le-text-left le-font-semibold"
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
