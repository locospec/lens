import { TableHeader } from "./TableHeader.tsx";

export interface TableHeaderSectionInterface {
  table: any;
  columnSizeVars: any;
}

const TableHeaderSection = ({
  table,
  columnSizeVars,
}: TableHeaderSectionInterface) => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      {table.getHeaderGroups().map((headerGroup: any) => (
        <TableHeader
          key={headerGroup.id}
          headerGroup={headerGroup}
          columnSizeVars={columnSizeVars}
        />
      ))}
    </div>
  );
};

export { TableHeaderSection };
