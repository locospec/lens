import { flexRender } from "@tanstack/react-table";
import type { Cell } from "@tanstack/react-table";
import { getColumnPinningStyles } from "../hooks/getColumnPinningStyles";
import { cn } from "@/components/utils/cn";

export interface DatatableCellProps {
  cell: Cell<any, unknown>;
}

const DatatableCell = ({ cell }: DatatableCellProps) => {
  const width = {
    width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
  };
  const column = cell.column;

  const css = getColumnPinningStyles(column);

  const align = (cell.column.columnDef.meta as any)?.align;
  const align_class = align ? `justify-${align}` : "";
  const align_class_block =
    align === "end"
      ? "text-right"
      : align === "center"
      ? "text-center"
      : "text-left";
  const isSelected = cell.row.getIsSelected();

  return (
    <div
      className={cn(
        "table-cell",
        "truncate px-4 py-2",
        "p-[var(--table-cell-padding)] min-h-[var(--table-cell-min-height)]",
        "group-hover:bg-[var(--gray-a2)]",
        "border-b border-[var(--gray-7)] data-[state=selected]:bg-[var(--gray-a2)]",
        align_class,
        cell.column.id === "actions" && "flex gap-x-2",
        cell.column.id === "actions" && align_class_block
      )}
      key={cell.id}
      style={{ ...width, ...css }}
      // style={{ ...width }}
      data-state={isSelected && "selected"}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
};

export { DatatableCell };
