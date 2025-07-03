import type { Table } from "@tanstack/react-table";
import { useEffect, useState } from "react";

const useSyncSelection = (
  selectedItems: any,
  selectedRows: any,
  setRowSelection: React.Dispatch<React.SetStateAction<any>>,
  onSelect: (selectedIds: string[]) => void,
  table?: Table<any>,
  identifierKey?: string
) => {
  const getOrderedKeys = (obj: any) => Object.keys(obj).sort().join(",");
  const getArrayKeys = (obj: any) => obj.sort().join(",");
  const [selectedData, setSelectedData] = useState<any>([]);

  useEffect(() => {
    const selectedItemsAreDifferentFromSelectedRows =
      getArrayKeys(selectedItems) !== getOrderedKeys(selectedRows);

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
      getArrayKeys(selectedItems) !== getOrderedKeys(selectedRows);

    if (selectedItemsAreDifferentFromSelectedRows) {
      const records = Object.keys(selectedRows);
      const data =
        table && table.getRowCount() > 0
          ? records
              .map(idx => {
                try {
                  const row = table.getRow(idx);
                  return row ? row.original : null;
                } catch (error) {
                  if (identifierKey) {
                    const row = selectedData.find(
                      (item: any) => item[identifierKey] === idx
                    );
                    return row ?? null;
                  } else {
                    return null;
                  }
                }
              })
              .filter(Boolean)
          : records;

      setSelectedData(data);
      onSelect(data);
    }
  }, [selectedRows]);
};

useSyncSelection.displayName = "useSyncSelection";

export { useSyncSelection };
