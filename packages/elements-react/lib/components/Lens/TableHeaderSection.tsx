import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { Button } from "../Button/index.tsx";
import { TableHeader } from "./TableHeader.tsx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "../Sheet/index.tsx";

export interface TableHeaderSectionInterface {
  table: any;
  columnSizeVars: any;
  tableContainerRef?: React.RefObject<HTMLDivElement>;
}

const TableHeaderSection = ({
  table,
}: // tableContainerRef,
TableHeaderSectionInterface) => {
  // const [showActionBar, setShowActionBar] = React.useState(false);

  return (
    <div className="le-sticky le-top-0 le-z-10 le-bg-white">
      {/* <div className="le-h-10 le-bg-green-400 le-flex le-items-center le-w-full le-justify-end le-px-4 le-gap-x-4">
        <Button
          className="le-px-1 le-py-1 le-bg-blue-500 le-gap-x-2 hover:le-bg-blue-600 le-h-8 le-flex le-items-center le-jusitfy-center le-text-white le-font-bold le-rounded-md"
          onClick={() => setShowActionBar(!showActionBar)}
        >
          <SlidersHorizontal size={18} />
          {showActionBar ? <>Hide</> : <>Filters</>}
        </Button>
        <Sheet>
          <SheetTrigger className="le-px-3 le-py-1 le-bg-blue-500 le-gap-x-2 hover:le-bg-blue-600 le-h-8 le-flex le-items-center le-jusitfy-center le-text-white le-font-bold le-rounded-md">
            Open
          </SheetTrigger>
          <SheetContent containerRef={tableContainerRef}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      {showActionBar && (
        <div className="le-h-10 le-bg-red-400 le-flex le-items-center le-text-lg le-font-bold">
          Bulk Actions Bar
        </div>
      )} */}
      {table.getHeaderGroups().map((headerGroup: any) => (
        <TableHeader key={headerGroup.id} headerGroup={headerGroup} />
      ))}
    </div>
  );
};

export { TableHeaderSection };
