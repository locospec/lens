import type {
  ColumnPinningState,
  RowSelectionState,
  VisibilityState,
} from "@tanstack/react-table";
import { useState } from "react";

const initialiseDatatableStates = ({
  tableSelectedItems,
  defaultColShow,
  defaultColPinning,
  defaultColOrder,
}: {
  tableSelectedItems: RowSelectionState;
  defaultColShow: VisibilityState;
  defaultColPinning: ColumnPinningState;
  defaultColOrder: string[];
}) => {
  const [selectedRows, setSelectedRows] = useState<RowSelectionState>(
    tableSelectedItems || {}
  );
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    defaultColShow || {}
  );
  const [columnPining, setColumnPining] = useState<ColumnPinningState>(
    defaultColPinning || {}
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isInResizeArea, setIsInResizeArea] = useState(false);
  const [columnOrder, setColumnOrder] = useState<string[]>(defaultColOrder);

  return {
    selectedRows,
    setSelectedRows,
    columnVisibility,
    setColumnVisibility,
    columnPining,
    setColumnPining,
    activeId,
    setActiveId,
    isInResizeArea,
    setIsInResizeArea,
    columnOrder,
    setColumnOrder,
  };
};

initialiseDatatableStates.displayName = "initialiseDatatableStates";

export { initialiseDatatableStates };
