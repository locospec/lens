import { cn } from "@/components/utils/cn";
import type { Header } from "@tanstack/react-table";
import React from "react";
import { useDatatableContext } from "../context/useDatatableContext.ts";

export interface ResizeHandleProps {
  header: Header<any, unknown>;
  isResizing: boolean;
  setIsInResizeArea: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
}

const ResizeHandle = ({
  header,
  isResizing,
  setIsInResizeArea,
  disabled = false,
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
        "absolute right-0 top-0 h-full w-1 touch-none select-none border-r bg-transparent",
        disabled ? "cursor-not-allowed" : "cursor-col-resize",
        "border-gray-100 hover:border-gray-300",
        isResizing && "border-gray-300",
        classNames && classNames?.resizehandle
      )}
    />
  );
};

export { ResizeHandle };
