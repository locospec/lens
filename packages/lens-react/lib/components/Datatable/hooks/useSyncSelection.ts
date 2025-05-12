import type { Table } from "@tanstack/react-table";
import { useEffect } from "react";

const useSyncSelection = (
  selectedItems: any,
  rowSelection: any,
  setRowSelection: React.Dispatch<React.SetStateAction<any>>,
  onSelect: (selectedIds: string[]) => void,
  table?: Table<any>
) => {
  const getOrderedKeys = (obj: any) => Object.keys(obj).sort().join(",");
  const getArrayKeys = (obj: any) => obj.sort().join(",");

  useEffect(() => {
    const selectedItemsAreDifferentFromSelectedRows =
      getArrayKeys(selectedItems) !== getOrderedKeys(rowSelection);

    if (selectedItemsAreDifferentFromSelectedRows) {
      const selectedItemsObject = selectedItems.reduce(
        (acc: Record<string, boolean>, item: string) => {
          acc[item] = true;
          return acc;
        },
        {}
      );
      setRowSelection(selectedItemsObject);
    }
  }, [selectedItems]);

  useEffect(() => {
    const selectedItemsAreDifferentFromSelectedRows =
      getArrayKeys(selectedItems) !== getOrderedKeys(rowSelection);

    if (selectedItemsAreDifferentFromSelectedRows) {
      const records = Object.keys(rowSelection);
      const data =
        table && table.getRowCount() > 0
          ? records
            .map((idx) => {
              const row = table.getRow(idx);
              return row ? row.original : null;
            })
            .filter(Boolean)
          : records;
      onSelect(data);
    }
  }, [rowSelection]);
};

useSyncSelection.displayName = "useSyncSelection";

export { useSyncSelection };
