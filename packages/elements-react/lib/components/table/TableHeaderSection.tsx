import { TableHeader } from "./TableHeader.tsx";

const TableHeaderSection = ({ table, columnSizeVars }: any) => {
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
