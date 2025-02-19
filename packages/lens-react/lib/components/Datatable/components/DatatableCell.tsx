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
  const align_class = align ? `le-justify-${align}` : "";
  const align_class_block =
    align === "end"
      ? "le-text-right"
      : align === "center"
      ? "le-text-center"
      : "le-text-left";
  const isSelected = cell.row.getIsSelected();

  return (
    <div
      className={cn(
        "le-table-cell",
        "le-truncate le-px-4 le-py-2",
        "le-p-[var(--table-cell-padding)] le-min-h-[var(--table-cell-min-height)]",
        "group-hover:le-bg-[var(--gray-a2)]",
        "le-border-b le-border-[var(--gray-7)] data-[state=selected]:le-bg-[var(--gray-a2)]",
        align_class,
        cell.column.id === "actions" && "le-flex le-gap-x-2",
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
