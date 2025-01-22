import React from "react";
import { SlidersHorizontal } from "lucide-react";
import LensSidebar from "./LensSidebar";

export interface LensViewBarInterface {
  tableContainerRef: React.RefObject<HTMLDivElement>;
  sidebarContent: React.ReactNode;
  showActionBar: boolean;
  setShowActionBar: (showActionBar: boolean) => void;
}

const LensViewBar = ({
  tableContainerRef,
  sidebarContent,
  showActionBar,
  setShowActionBar,
}: LensViewBarInterface) => {
  return (
    <div className="le-h-10 le-bg-green-400 le-flex le-items-center le-w-full le-justify-end le-px-4 le-gap-x-4">
      <button
        className="le-px-3 le-py-1 le-bg-blue-500 le-gap-x-2 hover:le-bg-blue-600 le-h-8 le-flex le-items-center le-jusitfy-center le-text-white le-font-bold le-rounded-md"
        onClick={() => setShowActionBar(!showActionBar)}
      >
        <SlidersHorizontal size={18} />
        {showActionBar ? <>Hide</> : <>Filters</>}
      </button>
      <LensSidebar
        tableContainerRef={tableContainerRef}
        sidebarTitle="Are you absolutely sure?"
      >
        {sidebarContent}
      </LensSidebar>
    </div>
  );
};

export default LensViewBar;
