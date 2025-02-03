import React from "react";
import { SlidersHorizontal } from "lucide-react";
import LensSidebar from "./LensSidebar";

export interface LensViewBarInterface {
  tableContainerRef: React.RefObject<HTMLDivElement>;
  showActionBar: boolean;
  setShowActionBar: (showActionBar: boolean) => void;
  table?: any;
}

const LensViewBar = ({
  tableContainerRef,
  showActionBar,
  setShowActionBar,
  table,
}: LensViewBarInterface) => {
  return (
    <div className="le-h-12 le-bg-[var(--gray-a2)] le-flex le-items-center le-w-full le-justify-end le-px-4 le-gap-x-4">
      <button
        className="le-px-3 le-py-1 le-bg-[var(--gray-a4)] le-gap-x-1 le-h-8 le-flex le-items-center le-jusitfy-center le-text-[var(--gray-9)] le-rounded-md"
        onClick={() => setShowActionBar(!showActionBar)}
      >
        <SlidersHorizontal size={18} />
        {showActionBar ? <>Hide</> : <>Filters</>}
      </button>
      <LensSidebar
        table={table}
        tableContainerRef={tableContainerRef}
        triggerLabel="Customise"
        sidebarTitle="Customize View"
      />
    </div>
  );
};

export default LensViewBar;
