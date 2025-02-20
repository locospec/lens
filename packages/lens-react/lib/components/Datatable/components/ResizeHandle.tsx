import { cn } from "@/components/utils/cn";
import type { Header } from "@tanstack/react-table";
import React from "react";

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
        "absolute right-0 top-0 h-full w-0.5 cursor-col-resize touch-none select-none",
        "bg-transparent hover:bg-[var(--gray-6)]",
        isResizing && "bg-[var(--gray-6)]"
      )}
    />
  );
};

export { ResizeHandle };
