import { TableHeader } from "./TableHeader.tsx";

export interface TableHeaderSectionInterface {
  table: any;
  columnSizeVars: any;
}

const TableHeaderSection = ({
  table,
  columnSizeVars,
}: TableHeaderSectionInterface) => {
  console.log("TableHeaderSection added smaple comment #1");
  return (
    <div className="le-sticky le-top-0 le-z-10 le-bg-white">
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
