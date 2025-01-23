import { TableCell } from "./TableCell.tsx";
import type { VirtualItem, Virtualizer } from "@tanstack/react-virtual";
import type { Row } from "@tanstack/react-table";
import { cn } from "../utils/cn.ts";

export interface TableRowInterface {
  row: Row<any>;
  virtualRow: VirtualItem;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
}

const TableRow = ({ row, virtualRow, rowVirtualizer }: TableRowInterface) => {
  const isSelected = row.getIsSelected();
  const translate = { transform: `translateY(${virtualRow.start}px)` };

  return (
    <div
      className={cn(
        "le-absolute le-top-0 le-flex le-w-full le-border-b le-border-[var(--gray-7)]",
        "le-bg-[var(--gray-1)] hover:le-bg-[var(--gray-2)]",
        isSelected && "le-bg-[var(--gray-2)]"
      )}
      data-index={virtualRow.index}
      ref={(node) => rowVirtualizer.measureElement(node)}
      key={row.id}
      style={translate}
      data-state={isSelected && "selected"}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export { TableRow };
