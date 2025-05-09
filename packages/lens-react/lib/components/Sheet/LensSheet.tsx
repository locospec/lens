import React, { useEffect } from "react";
import DefaultSheet from "./sheets/DefaultSheet";
import { SheetOptionsType } from "./sheets/interface";
import FieldsSheet from "./sheets/FieldsSheet";
import { SheetContent, SheetTitle } from "@lens/base/components/ui/sheet";
// import { SheetContent } from "./index.tsx";

export interface LensSidebarInterface {
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  triggerLabel?: string;
  triggerIcon?: React.ReactNode;
  sidebarTitle?: string;
  children?: React.ReactNode;
  table?: any;
  show?: boolean;
}

const LensSidebar = ({
  tableContainerRef,
  table,
  show,
}: LensSidebarInterface) => {
  const [currentSheet, setCurrentSheet] =
    React.useState<SheetOptionsType>("default");

  useEffect(() => {
    if (!show) {
      setCurrentSheet("default");
    }
  }, [show]);

  return (
    <SheetContent
      containerRef={tableContainerRef}
      className="h-full w-full overflow-y-auto lens-wrapper"
    >
      {currentSheet === "default" && (
        <DefaultSheet setCurrentSheet={setCurrentSheet} />
      )}
      {currentSheet === "field_options" && (
        <FieldsSheet
          setCurrentSheet={setCurrentSheet}
          tableContainerRef={tableContainerRef}
          table={table}
          // handleDragEnd={handleDragEnd}
        />
      )}
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
