import React from "react";
import LensViewBar from "./LensViewsbar";
import LensBulkActionsbar from "./LensBulkActionsbar";

export interface TopbarProps {
  tableContainerRef: React.RefObject<HTMLDivElement>;
  sidebarContent: React.ReactNode;
  showActionBar: boolean;
  setShowActionBar: (showActionBar: boolean) => void;
  displayActionBar: boolean;
}

const Topbar = ({
  tableContainerRef,
  sidebarContent,
  showActionBar,
  setShowActionBar,
  displayActionBar,
}: TopbarProps) => {
  return (
    <>
      {displayActionBar && (
        <>
          <LensViewBar
            tableContainerRef={tableContainerRef}
            sidebarContent={sidebarContent}
            showActionBar={showActionBar}
            setShowActionBar={setShowActionBar}
          />
          {showActionBar && <LensBulkActionsbar />}
        </>
      )}
    </>
  );
};

export default Topbar;
