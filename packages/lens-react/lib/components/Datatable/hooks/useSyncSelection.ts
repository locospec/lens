import { useEffect } from "react";

const useSyncSelection = (
  selectedItems: any,
  rowSelection: any,
  setRowSelection: React.Dispatch<React.SetStateAction<any>>,
  onSelect: (selectedIds: string[]) => void
) => {
  const getOrderedKeys = (obj: any) => Object.keys(obj).sort().join(",");

  useEffect(() => {
    const selectedItemsAreDifferentFromSelectedRows =
      getOrderedKeys(selectedItems) !== getOrderedKeys(rowSelection);

    if (selectedItemsAreDifferentFromSelectedRows) {
      onSelect(Object.keys(selectedItems));
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
