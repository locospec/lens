import type { Column } from "@tanstack/react-table";
import { CSSProperties } from "react";

const getColumnPinningStyles = (
  column: Column<any>
  // isHeader?: boolean
): CSSProperties => {
  const isPinned = column.getIsPinned();
  // const isLastLeftPinnedColumn =
  //   isPinned === "left" && column.getIsLastColumn("left");
  // const isFirstRightPinnedColumn =
  //   isPinned === "right" && column.getIsFirstColumn("right");

  return {
    // boxShadow: isLastLeftPinnedColumn
    //   ? isHeader
    //     ? "-4px 0 4px -3px gray inset"
    //     : "-4px 0 4px -4px gray inset"
    //   : isFirstRightPinnedColumn
    //   ? isHeader
    //     ? "3px 0 4px -3px gray inset"
    //     : "4px 0 4px -4px gray inset"
    //   : undefined,
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    // opacity: isPinned ? 0.95 : 1,
    position: isPinned ? "sticky" : "relative",
    // background: isPinned ? "#fff" : "",
    // width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };
};

export { getColumnPinningStyles };
