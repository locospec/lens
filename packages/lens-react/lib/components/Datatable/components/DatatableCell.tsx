import { cn } from "@lens/components/utils/cn";
import type { Cell } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { useDatatableContext } from "../context/useDatatableContext";
import { getColumnPinningStyles } from "../hooks/getColumnPinningStyles";
import { getStyleClasses } from "../utils/getStylesClassesForDataTable";

export interface DatatableCellProps {
  cell: Cell<any, unknown>;
}

const DatatableCell = ({ cell }: DatatableCellProps) => {
  const width = {
    width: `calc(var(--col-${cell.column.id}-size) * 1px)`,
  };
  const column = cell.column;

  const css = getColumnPinningStyles(column);

  const {
    classNames,
    cellActions,
    variantClasses,
    cellOverFlowStyles,
    cellRenderer,
  } = useDatatableContext();
  const customCellRenderer =
    (cellRenderer && cellRenderer[cell.column.id]) ?? null;

  if (customCellRenderer) {
    return (
      <div className="flex items-center" style={{ ...width, ...css }}>
        {customCellRenderer(cell.row.original)}
      </div>
    );
  }

  const isPinned = column.getIsPinned();
  const isSelected = cell.row.getIsSelected();
  const align = (cell.column.columnDef.meta as any)?.align;
  const styles = getStyleClasses(align);
  const isAction = cell.column.id === "actions";
  const isLast = cell.column.getIsLastColumn();
  const cellAction = cellActions && (cellActions[cell.column.id] ?? null);

  return (
    <div
      className={cn(
        isAction || isPinned ? "flex items-center gap-x-4" : "truncate",
        "px-2 py-2",
        "data-[state=checked]:bg-gray-100",
        "dark:data-[state=checked]:bg-gray-800",
        cellOverFlowStyles,
        "border-gray-100",
        "dark:border-gray-100",
        variantClasses.cell,
        isPinned &&
          cn(
            "border-gray-100 bg-white group-hover:bg-gray-100",
            "dark:border-gray-100 dark:bg-gray-700 dark:group-hover:bg-gray-800",
            variantClasses.pinned_cells
          ),
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
      onClick={e => {
        if (cellAction) {
          e.stopPropagation();
          cellAction(cell.row.original);
        }
      }}
      data-islast={isLast ? "true" : "false"}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
};

export { DatatableCell };
