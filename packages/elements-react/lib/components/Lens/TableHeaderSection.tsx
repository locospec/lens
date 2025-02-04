import React from "react";
import { TableHeader } from "./TableHeader.tsx";
import type { Table } from "@tanstack/react-table";

export interface TableHeaderSectionInterface {
  table: Table<any>;
  columnSizeVars?: any;
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  columnOrder: string[];
}

const TableHeaderSection = ({
  table,
  columnOrder,
}: TableHeaderSectionInterface) => {
  return (
    <div className="le-sticky le-top-0 le-z-10 le-backdrop-blur-[100px]">
      {table.getHeaderGroups().map((headerGroup) => {
        return (
          <TableHeader
            key={headerGroup.id}
            headerGroup={headerGroup}
            columnOrder={columnOrder}
          />
        );
      })}
    </div>
  );
};

export { TableHeaderSection };
