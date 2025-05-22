import type { Table } from "@tanstack/react-table";
import { DataTableHeader } from "./DataTableHeader.tsx";

export interface DatatableHeaderSectionInterface {
  table: Table<any>;
  columnOrder: string[];
}

const DatatableHeaderSection = ({
  table,
  columnOrder,
}: DatatableHeaderSectionInterface) => {
  return (
    <>
      {table.getHeaderGroups().map(headerGroup => {
        return (
          <DataTableHeader
            key={headerGroup.id}
            headerGroup={headerGroup}
            columnOrder={columnOrder}
          />
        );
      })}
    </>
  );
};

export { DatatableHeaderSection };
