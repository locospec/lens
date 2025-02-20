import { DatatableCell } from "./DatatableCell.tsx";
import type { VirtualItem, Virtualizer } from "@tanstack/react-virtual";
import type { Row } from "@tanstack/react-table";
import { cn } from "@/components/utils/cn.ts";
import { useDatatableContext } from "../context/DataTableContext.tsx";

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
  const { classNames } = useDatatableContext();

  return (
    <div
      className={cn(
        "absolute top-0 flex w-full border-b",
        "hover:bg-gray-200 data-[state=selected]:bg-gray-200",
        classNames && classNames?.row
      )}
      data-index={virtualRow.index}
      ref={(node) => rowVirtualizer.measureElement(node)}
      key={row.id}
      style={translate}
      data-state={isSelected && "selected"}
    >
      {row.getVisibleCells().map((cell) => (
        <DatatableCell key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export { DatatableRow };
