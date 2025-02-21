import { flexRender } from "@tanstack/react-table";
import type { Cell } from "@tanstack/react-table";
import { getColumnPinningStyles } from "../hooks/getColumnPinningStyles";
import { cn } from "@/components/utils/cn";
import { getStyleClasses } from "../utils/getStylesClassesForDataTable";
import { useDatatableContext } from "../context/useDatatableContext";

export interface DatatableCellProps {
  cell: Cell<any, unknown>;
}

const DatatableCell = ({ cell }: DatatableCellProps) => {
  const width = {
    width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
  };
  const column = cell.column;

  const css = getColumnPinningStyles(column);
  const isSelected = cell.row.getIsSelected();

  const align = (cell.column.columnDef.meta as any)?.align;
  const styles = getStyleClasses(
    ["select"].includes(cell.column.id) ? undefined : align
  );
  const isAction = cell.column.id === "actions";
  const isLast = cell.column.getIsLastColumn();

  const { classNames } = useDatatableContext();

  return (
    <div
      className={cn(
        "truncate  px-2 py-4 text-gray-600 leading-3",
        isAction || isLast
          ? "flex gap-x-4 border-r-0"
          : "border-r border-gray-100",
        styles?.items,
        styles?.text,
        classNames && isAction ? classNames?.actionsCell : classNames?.cell
      )}
      key={cell.id}
      style={{ ...width, ...css }}
      data-state={isSelected && "selected"}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
};

export { DatatableCell };
