import React from "react";
import LensViewBar from "./LensViewsbar";
import LensBulkActionsbar from "./LensBulkActionsbar";
import { useLensContext } from "./context/LensContext";

export interface TopbarProps {
  tableContainerRef: React.RefObject<HTMLDivElement>;
  sidebarContent: React.ReactNode;
  showActionBar: boolean;
  setShowActionBar: (showActionBar: boolean) => void;
}

const Topbar = ({
  tableContainerRef,
  sidebarContent,
  showActionBar,
  setShowActionBar,
}: TopbarProps) => {
  const { showTopBar } = useLensContext();
  return (
    <>
      {showTopBar && (
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
