import { cn } from "@/components/utils/cn";
import type { Header } from "@tanstack/react-table";
import React from "react";
import { useDatatableContext } from "../context/useDatatableContext.ts";

export interface ResizeHandleProps {
  header: Header<any, unknown>;
  isResizing: boolean;
  setIsInResizeArea: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
  isLast?: boolean;
}

const ResizeHandle = ({
  header,
  isResizing,
  setIsInResizeArea,
  disabled = false,
  isLast = false,
}: ResizeHandleProps) => {
  const resizeHandle = header.getResizeHandler();
  const { classNames, variantClasses } = useDatatableContext();

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
        " absolute right-0 top-0 h-full w-1 touch-none select-none",
        variantClasses.resize_handler,
        disabled ? "cursor-not-allowed" : "cursor-col-resize",
        disabled && variantClasses.resize_handler_isresizing,
        classNames && classNames?.resizehandle
      )}
      data-isresising={isResizing ? "true" : "false"}
      data-islast={isLast ? "true" : "false"}
    />
  );
};

export { ResizeHandle };
