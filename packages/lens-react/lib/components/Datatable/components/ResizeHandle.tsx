import { cn } from "@/components/utils/cn";
import type { Header } from "@tanstack/react-table";
import React from "react";
import { useDatatableContext } from "../context/DataTableContext";

export interface ResizeHandleProps {
  header: Header<any, unknown>;
  isResizing: boolean;
  setIsInResizeArea: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResizeHandle = ({
  header,
  isResizing,
  setIsInResizeArea,
}: ResizeHandleProps) => {
  const resizeHandle = header.getResizeHandler();
  const { classNames } = useDatatableContext();

  return (
    <div
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={resizeHandle}
      onTouchStart={resizeHandle}
      onMouseEnter={() => {
        setIsInResizeArea(true);
      }}
      onMouseLeave={() => {
        setIsInResizeArea(false);
      }}
      className={cn(
        "absolute right-0 top-0 h-full w-1 cursor-col-resize touch-none select-none",
        "bg-gray-200 hover:bg-gray-400",
        isResizing && "bg-gray-400",
        classNames && classNames?.resizehandle
      )}
    />
  );
};

export { ResizeHandle };
