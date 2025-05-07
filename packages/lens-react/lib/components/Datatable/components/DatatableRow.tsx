import { DatatableCell } from "./DatatableCell.tsx";
import type { VirtualItem, Virtualizer } from "@tanstack/react-virtual";
import type { Row } from "@tanstack/react-table";
import { cn } from "@/components/utils/cn.ts";
import { useDatatableContext } from "../context/useDatatableContext.ts";

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
  const { classNames, variantClasses } = useDatatableContext();

  return (
    <div
      className={cn(
        "absolute top-0 flex w-full cursor-pointer group",
        variantClasses.row,
        classNames && classNames?.row
      )}
      data-index={virtualRow.index}
      data-even={virtualRow.index % 2 === 0 ? "true" : "false"}
      ref={(node) => rowVirtualizer.measureElement(node)}
      key={row.id}
      style={translate}
      data-state={isSelected && "checked"}
    >
      {row.getVisibleCells().map((cell) => (
        <DatatableCell key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export { DatatableRow };
