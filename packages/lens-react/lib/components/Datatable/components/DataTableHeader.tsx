import type { HeaderGroup } from "@tanstack/react-table";
import DatatableHeaderItem from "./DatatableHeaderItem.tsx";
import { cn } from "@lens/components/utils/cn.ts";
import { useDatatableContext } from "../context/useDatatableContext.ts";

export interface TableHeaderInterface {
  headerGroup: HeaderGroup<any>;
  columnOrder: string[];
  setIsInResizeArea: any;
  isInResizeArea: any;
}

const DataTableHeader = ({
  headerGroup,
  columnOrder,
  setIsInResizeArea,
  isInResizeArea,
}: TableHeaderInterface) => {
  const { classNames, variantClasses } = useDatatableContext();

  return (
    <div
      key={headerGroup.id}
      className={cn(
        "sticky flex top-0 z-10 backdrop-blur-[100px]",
        variantClasses.header_row,
        classNames && classNames?.headers
      )}
    >
      {headerGroup.headers.map((header) => {
        return (
          <DatatableHeaderItem
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

export { DataTableHeader };
