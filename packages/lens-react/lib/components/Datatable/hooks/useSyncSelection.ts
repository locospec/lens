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
      setRowSelection(selectedItems);
    }
  }, [selectedItems]);

  useEffect(() => {
    const selectedItemsAreDifferentFromSelectedRows =
      getArrayKeys(selectedItems) !== getOrderedKeys(rowSelection);

    if (selectedItemsAreDifferentFromSelectedRows) {
      const records = Object.keys(rowSelection);
      const data =
        table && table.getRowCount() > 0
          ? records.map((idx) => {
              return table.getRow(idx).original;
            })
          : records;
      onSelect(data);
    }
  }, [rowSelection]);
};

useSyncSelection.displayName = "useSyncSelection";

export { useSyncSelection };
