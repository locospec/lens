import { SheetContent, SheetTitle } from "@/base/components/ui/sheet";
import React from "react";
import DefaultSheet from "./sheets/DefaultSheet";
// import { SheetContent } from "./index.tsx";

export interface LensSidebarInterface {
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  triggerLabel?: string;
  triggerIcon?: React.ReactNode;
  sidebarTitle?: string;
  children?: React.ReactNode;
}

const LensSidebar = ({ tableContainerRef }: LensSidebarInterface) => {
  return (
    <SheetContent
      containerRef={tableContainerRef}
      className="h-full w-full overflow-y-auto lens-wrapper"
    >
      <DefaultSheet setCurrentSheet={() => {}} />
      {/* {currentSheet === "default" ? (
          <DefaultSheet setCurrentSheet={setCurrentSheet} />
        ) : currentSheet === "layout_options" ? (
          <LayoutSheet
            setCurrentSheet={setCurrentSheet}
            tableContainerRef={tableContainerRef}
            table={table}
          />
        ) : currentSheet === "field_options" ? (
          <FieldsSheet
            setCurrentSheet={setCurrentSheet}
            tableContainerRef={tableContainerRef}
            table={table}
            handleDragEnd={handleDragEnd}
          />
        ) : (
          <></>
        )} */}
      {/* <DefaultShee */}
    </SheetContent>
  );
};

export default LensSidebar;
