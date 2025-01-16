import { TableCell } from "./TableCell.tsx";

export interface TableRowInterface {
  row: any;
  virtualRow: any;
  rowVirtualizer: any;
}

const TableRow = ({ row, virtualRow, rowVirtualizer }: TableRowInterface) => {
  return (
    <div
      className={`absolute top-0 flex w-full hover:bg-gray-50 ${
        row.getIsSelected() ? "bg-blue-50" : ""
      }`}
      data-index={virtualRow.index}
      ref={(node) => rowVirtualizer.measureElement(node)}
      key={row.id}
      style={{
        transform: `translateY(${virtualRow.start}px)`,
      }}
      data-state={row.getIsSelected() && "selected"}
    >
      {row.getVisibleCells().map((cell: any) => (
        <TableCell key={cell.id} cell={cell} />
      ))}
    </div>
  );
};

export { TableRow };
