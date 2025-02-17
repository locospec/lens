import type { HeaderGroup } from "@tanstack/react-table";
import TableHeaderItem from "./TableHeaderItem.tsx";

export interface TableHeaderInterface {
  headerGroup: HeaderGroup<any>;
  columnOrder: string[];
  setIsInResizeArea: any;
  isInResizeArea: any;
}

const TableHeader = ({
  headerGroup,
  columnOrder,
  setIsInResizeArea,
  isInResizeArea,
}: TableHeaderInterface) => {
  return (
    <div key={headerGroup.id} className="le-flex le-w-full">
      {headerGroup.headers.map((header) => {
        return (
          <TableHeaderItem
            key={`${header.id}-${columnOrder.join("-")}`}
            header={header}
            isInResizeArea={isInResizeArea}
            columnOrder={columnOrder}
            setIsInResizeArea={setIsInResizeArea}
          />
        );
      })}
    </div>
  );
};

export { TableHeader };
