import React from "react";
import { SlidersHorizontal } from "lucide-react";
import LensSidebar from "./LensSidebar";
import TextInput from "../Filters/src/inputs/TextInput";

export interface LensViewBarInterface {
  tableContainerRef: React.RefObject<HTMLDivElement>;
  showActionBar: boolean;
  setShowActionBar: (showActionBar: boolean) => void;
  table?: any;
  handleDragEnd: any;
  globalFilter: string;
  setGlobalFilter: any;
  isControllingAdvanced?: boolean;
  setOpenAdvancedFilter?: any;
}

const LensViewBar = ({
  tableContainerRef,
  showActionBar,
  setShowActionBar,
  table,
  handleDragEnd,
  globalFilter,
  setGlobalFilter,
  isControllingAdvanced,
  setOpenAdvancedFilter,
}: LensViewBarInterface) => {
  return (
    <div className="le-h-12 le-bg-[var(--gray-a2)] le-flex le-items-center le-w-full le-justify-end le-px-4 le-gap-x-4">
      <TextInput
        placeholder="Search"
        value={globalFilter}
        onUpdateCallback={setGlobalFilter}
        className="le-max-w-40"
      />
      <button
        className="le-px-3 le-py-1 le-bg-[var(--gray-a4)] le-gap-x-1 le-h-8 le-flex le-items-center le-jusitfy-center le-text-[var(--gray-9)] le-rounded-md"
        onClick={() =>
          !isControllingAdvanced
            ? setShowActionBar(!showActionBar)
            : setOpenAdvancedFilter((prev: any) => !prev)
        }
      >
        <SlidersHorizontal size={18} />
        Filters
      </button>
      <LensSidebar
        table={table}
        tableContainerRef={tableContainerRef}
        triggerLabel="Customise"
        sidebarTitle="Customize View"
        handleDragEnd={handleDragEnd}
      />
    </div>
  );
};

export default LensViewBar;
