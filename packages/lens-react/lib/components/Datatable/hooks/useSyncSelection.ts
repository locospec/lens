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

  useEffect(() => {
    const selectedItemsAreDifferentFromSelectedRows =
      getOrderedKeys(selectedItems) !== getOrderedKeys(rowSelection);

    if (selectedItemsAreDifferentFromSelectedRows) {
      const records = Object.keys(selectedItems);
      const data = table
        ? records.map((idx) => {
            return table?.getRow(idx).original;
          })
        : records;

      onSelect(data);
    }
  }, [selectedItems]);

  useEffect(() => {
    const selectedItemsAreDifferentFromSelectedRows =
      getOrderedKeys(selectedItems) !== getOrderedKeys(rowSelection);

    if (selectedItemsAreDifferentFromSelectedRows) {
      setRowSelection(selectedItems);
    }
  }, [rowSelection]);
};

useSyncSelection.displayName = "useSyncSelection";

export { useSyncSelection };
