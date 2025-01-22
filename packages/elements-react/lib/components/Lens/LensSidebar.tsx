import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "../Sheet/index.tsx";

export interface LensSidebarInterface {
  tableContainerRef?: React.RefObject<HTMLDivElement>;
  triggerLabel?: string;
  sidebarTitle?: string;
  children?: React.ReactNode;
}

const LensSidebar = ({
  tableContainerRef,
  triggerLabel = "Open",
  sidebarTitle = "This is side bar title",
  children,
}: LensSidebarInterface) => {
  return (
    <Sheet>
      <SheetTrigger className="le-px-3 le-py-1 le-bg-blue-500 le-gap-x-2 hover:le-bg-blue-600 le-h-8 le-flex le-items-center le-jusitfy-center le-text-white le-font-bold le-rounded-md">
        {triggerLabel}
      </SheetTrigger>
      <SheetContent
        containerRef={tableContainerRef}
        className="le-h-full le-overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>{sidebarTitle}</SheetTitle>
          {children}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default LensSidebar;
