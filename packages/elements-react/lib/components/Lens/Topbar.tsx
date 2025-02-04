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
  handleDragEnd: any;
}

const Topbar = ({
  table,
  tableContainerRef,
  showActionBar,
  setShowActionBar,
  handleDragEnd,
}: TopbarProps) => {
  const { showTopBar } = useLensContext();
  const headers = table.getHeaderGroups()[0].headers;

  return (
    <>
      {showTopBar && (
        <div className="le-w-full le-border-b le-border-[var(--gray-7)] le-flex le-flex-col le-flex-1 le-shrink-0 le-grow-0 le-min-h-12 le-bg-[var(--gray-a2)]">
          <LensViewBar
            tableContainerRef={tableContainerRef}
            showActionBar={showActionBar}
            setShowActionBar={setShowActionBar}
            table={table}
            handleDragEnd={handleDragEnd}
          />
          {showActionBar && <LensBulkActionsbar headers={headers} />}
        </div>
      )}
    </>
  );
};

export default Topbar;
