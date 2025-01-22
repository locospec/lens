import React from "react";
import { TableHeader } from "./TableHeader.tsx";

export interface TableHeaderSectionInterface {
  table: any;
  columnSizeVars: any;
  tableContainerRef?: React.RefObject<HTMLDivElement>;
}

const TableHeaderSection = ({ table }: TableHeaderSectionInterface) => {
  return (
    <div className="le-sticky le-top-0 le-z-10 le-bg-white">
      {table.getHeaderGroups().map((headerGroup: any) => (
        <TableHeader key={headerGroup.id} headerGroup={headerGroup} />
      ))}
    </div>
  );
};

export { TableHeaderSection };
