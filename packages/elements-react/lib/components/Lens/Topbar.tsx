import React from "react";
import LensViewBar from "./LensViewsbar";
import LensBulkActionsbar from "./LensBulkActionsbar";
import { useLensContext } from "./context/LensContext";
import type { Table as TanStackTableType } from "@tanstack/react-table";

export interface TopbarProps {
  table: TanStackTableType<any>;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  showActionBar: boolean;
  setShowActionBar: (showActionBar: boolean) => void;
}

const Topbar = ({
  table,
  tableContainerRef,
  showActionBar,
  setShowActionBar,
}: TopbarProps) => {
  const { showTopBar } = useLensContext();
  const headers = table.getHeaderGroups()[0].headers;

  return (
    <>
      {showTopBar && (
        <div className="le-border-b le-flex le-flex-col">
          <LensViewBar
            tableContainerRef={tableContainerRef}
            showActionBar={showActionBar}
            setShowActionBar={setShowActionBar}
          />
          {showActionBar && <LensBulkActionsbar headers={headers} />}
        </div>
      )}
    </>
  );
};

export default Topbar;
