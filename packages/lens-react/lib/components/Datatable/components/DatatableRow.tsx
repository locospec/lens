import { cn } from "@lens/components/utils/cn.ts";
import type { Row } from "@tanstack/react-table";
import type { VirtualItem, Virtualizer } from "@tanstack/react-virtual";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import { DatatableCell } from "./DatatableCell.tsx";

export interface DatatableRowInterface {
  row: Row<any>;
  virtualRow: VirtualItem;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
}

const DatatableRow = ({
  row,
  virtualRow,
  rowVirtualizer,
}: DatatableRowInterface) => {
  const isSelected = row.getIsSelected();
  const translate = { transform: `translateY(${virtualRow.start}px)` };
  const { classNames, variantClasses, rowAction } = useDatatableContext();

  return (
    <div
      className={cn(
        "group absolute top-0 flex w-full border-b border-dotted",
        "border-gray-100 bg-white hover:bg-gray-100 data-[state=checked]:bg-gray-200",
        "dark:border-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800 dark:data-[state=checked]:bg-gray-800",
        variantClasses.row,
        classNames && classNames?.row
      )}
      data-index={virtualRow.index}
      data-even={virtualRow.index % 2 === 0 ? "true" : "false"}
      ref={node => rowVirtualizer.measureElement(node)}
      key={row.id}
      style={translate}
      data-state={isSelected && "checked"}
      onClick={() => {
        rowAction && rowAction(row.original);
      }}
    >
      {row.getVisibleCells().map(cell => (
        <DatatableCell key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export { DatatableRow };
