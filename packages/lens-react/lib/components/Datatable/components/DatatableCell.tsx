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

  const isPinned = column.getIsPinned();
  const css = getColumnPinningStyles(column);
  const isSelected = cell.row.getIsSelected();
  const align = (cell.column.columnDef.meta as any)?.align;
  const styles = getStyleClasses(align);
  const isAction = cell.column.id === "actions";
  const isLast = cell.column.getIsLastColumn();

  const {
    classNames,
    cellActions,
    variantClasses,
    cellOverFlowStyles,
    cellRenderer,
  } = useDatatableContext();
  const cellAction = cellActions && (cellActions[cell.column.id] ?? null);

  const customCellRenderer =
    (cellRenderer && cellRenderer[cell.column.id]) ?? null;

  return (
    <div
      className={cn(
        isAction || isPinned ? "flex items-center gap-x-4" : "truncate",
        "px-2 py-4 leading-3",
        cellOverFlowStyles,
        variantClasses.cell,
        isPinned && variantClasses.pinned_cells,
        styles?.items,
        styles?.text,
        classNames?.cell || "",
        (isPinned && classNames?.pinned_cells) || "",
        (isAction && classNames?.actionsCell) || ""
      )}
      data-even={cell.row.index % 2 === 0 ? "true" : "false"}
      key={cell.id}
      style={{ ...width, ...css }}
      data-state={isSelected && "checked"}
      onClick={() => cellAction && cellAction(cell.row.original)}
      data-islast={isLast ? "true" : "false"}
    >
      {customCellRenderer
        ? customCellRenderer(cell.row.original)
        : flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
};

export { DatatableCell };
