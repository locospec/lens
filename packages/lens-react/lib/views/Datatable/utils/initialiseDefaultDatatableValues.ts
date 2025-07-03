import { useMemo } from "react";
import convertIntoObject from "@lens/components/utils/convertIntoObject";
import type { ColumnPinningState } from "@tanstack/react-table";

const initialiseDefaultDatatableValues = (selectedItems: string[]) => {
  const tableSelectedItems: any = useMemo(() => {
    return selectedItems.length > 0 ? convertIntoObject(selectedItems) : {};
  }, [selectedItems]);

  const defaultColShow: any = {};
  const defaultColPinning: ColumnPinningState = {
    left: [],
    right: [],
  };

  return { tableSelectedItems, defaultColShow, defaultColPinning };
};
initialiseDefaultDatatableValues.displayName =
  "initialiseDefaultDatatableValues";

export { initialiseDefaultDatatableValues };
