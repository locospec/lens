import { useEffect } from "react";

const useSyncSelection = (
  selectedItems: any,
  rowSelection: any,
  setRowSelection: React.Dispatch<React.SetStateAction<any>>,
  onSelect: (selectedIds: string[]) => void
) => {
  const getOrderedKeys = (obj: any) => Object.keys(obj).sort().join(",");

  const selectedItemsAreDifferentFromSelectedRows =
    getOrderedKeys(selectedItems) !== getOrderedKeys(rowSelection);

  useEffect(() => {
    if (selectedItemsAreDifferentFromSelectedRows) {
      setRowSelection(selectedItems);
    }
  }, [selectedItems]);

  useEffect(() => {
    if (selectedItemsAreDifferentFromSelectedRows) {
      onSelect(Object.keys(rowSelection));
    }
  }, [rowSelection]);
};

useSyncSelection.displayName = "useSyncSelection";

export { useSyncSelection };
