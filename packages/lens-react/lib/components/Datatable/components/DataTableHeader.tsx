import { cn } from "@lens/components/utils/cn.ts";
import type { HeaderGroup } from "@tanstack/react-table";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import DatatableHeaderItem from "./DatatableHeaderItem.tsx";

export interface TableHeaderInterface {
  headerGroup: HeaderGroup<any>;
  columnOrder: string[];
}

const DataTableHeader = ({
  headerGroup,
  columnOrder,
}: TableHeaderInterface) => {
  const { classNames, variantClasses, isInResizeArea } = useDatatableContext();

  return (
    <div
      id="datatable-header-row"
      key={headerGroup.id}
      className={cn(
        "group sticky top-0 z-10 flex",
        "border-b-2 border-gray-300 font-normal",
        "dark:border-gray-100",
        variantClasses.header_row,
        classNames && classNames?.headers
      )}
      data-resizing={isInResizeArea}
    >
      {headerGroup.headers.map(header => {
        return (
          <DatatableHeaderItem
            key={`${header.id}-${columnOrder.join("-")}`}
            header={header}
          />
        );
      })}
    </div>
  );
};

export { DataTableHeader };
