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
        "le-absolute le-right-0 le-top-0 le-h-full le-w-0.5 le-cursor-col-resize le-touch-none le-select-none",
        "le-bg-transparent hover:le-bg-[var(--gray-6)]",
        isResizing && "le-bg-[var(--gray-6)]"
      )}
    />
  );
};

export { ResizeHandle };
