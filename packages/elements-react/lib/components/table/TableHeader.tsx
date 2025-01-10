import { flexRender } from "@tanstack/react-table";
import { ResizeHandle } from "./ResizeHandle.tsx";

// This was removed as it was unused columnSizeVars
const TableHeader = ({ headerGroup }: any) => {
  return (
    <div key={headerGroup.id} className="flex">
      {headerGroup.headers.map((header: any) => (
        <div
          key={header.id}
          className="relative border-b border-gray-200 bg-gray-100 px-4 py-2 text-left font-semibold"
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
