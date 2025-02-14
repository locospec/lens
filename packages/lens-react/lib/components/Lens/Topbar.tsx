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
  globalFilter: string;
  setGlobalFilter: any;
}

const Topbar = ({
  table,
  tableContainerRef,
  showActionBar,
  setShowActionBar,
  handleDragEnd,
  globalFilter,
  setGlobalFilter,
}: TopbarProps) => {
  const { showTopBar } = useLensContext();
  const [isControllingAdvanced, setIsControllingAdvanced] =
    React.useState(false);
  const [openAdvancedFilter, setOpenAdvancedFilter] = React.useState(false);

  const simpleFiltersCallback = (val: any) => {
    setIsControllingAdvanced(val);
  };

  return (
    <>
      {showTopBar && (
        <div className="le-border-b le-border-[var(--gray-7)] le-flex le-flex-col le-bg-[var(--color-panel)]">
          <LensViewBar
            tableContainerRef={tableContainerRef}
            showActionBar={showActionBar}
            setShowActionBar={setShowActionBar}
            table={table}
            handleDragEnd={handleDragEnd}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
            isControllingAdvanced={isControllingAdvanced}
            setOpenAdvancedFilter={setOpenAdvancedFilter}
          />
          <LensBulkActionsbar
            show={showActionBar}
            setIsControllingAdvanced={simpleFiltersCallback}
            openAdvancedFilter={openAdvancedFilter}
            setOpenAdvancedFilter={setOpenAdvancedFilter}
          />
        </div>
      )}
    </>
  );
};

export default Topbar;
