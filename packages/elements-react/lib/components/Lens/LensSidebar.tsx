import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../Sheet/index.tsx";
import { Settings } from "lucide-react";
import DefaultSheet from "./sheets/DefaultSheet.tsx";
import type { SheetOptionsType } from "./sheets/interface.ts";
import LayoutSheet from "./sheets/LayoutSheet.tsx";
import FieldsSheet from "./sheets/FieldsSheet.tsx";

export interface LensSidebarInterface {
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  triggerLabel?: string;
  triggerIcon?: React.ReactNode;
  sidebarTitle?: string;
  children?: React.ReactNode;
  table: any;
  handleDragEnd: any;
}

const LensSidebar = ({
  tableContainerRef,
  triggerLabel = "Open",
  triggerIcon,
  table,
  handleDragEnd,
}: LensSidebarInterface) => {
  const [currentSheet, setCurrentSheet] =
    React.useState<SheetOptionsType>("default");

  const resetSheetStatus = () => {
    setCurrentSheet("default");
  };

  return (
    <Sheet
      onOpenChange={(value) => {
        !value && resetSheetStatus();
      }}
    >
      <SheetTrigger className="le-px-3 le-py-1 le-bg-[var(--gray-a4)] le-gap-x-1 le-h-8 le-flex le-items-center le-jusitfy-center le-text-[var(--gray-9)] le-rounded-md">
        {triggerIcon ? triggerIcon : <Settings size={15} />}
        {triggerLabel}
      </SheetTrigger>
      <SheetContent
        containerRef={tableContainerRef}
        className="le-h-full le-w-full le-overflow-y-auto le-lens-wrapper"
      >
        {currentSheet === "default" ? (
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
        )}
      </SheetContent>
    </Sheet>
  );
};

export default LensSidebar;
