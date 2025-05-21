import { cn } from "@lens/components/utils/cn";
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
        "absolute top-0 right-0 flex h-full w-1 touch-none items-center justify-end select-none",
        disabled ? "cursor-not-allowed" : "cursor-col-resize"
      )}
      data-isresising={isResizing ? "true" : "false"}
      data-islast={isLast ? "true" : "false"}
    >
      <div
        className={cn(
          disabled ? "hidden" : "opactity-1",
          "h-1/2 w-0.5 rounded-l-md",
          "bg-gray-300 hover:bg-gray-500",
          "dark:bg-gray-500 dark:hover:bg-gray-400",
          variantClasses.resize_handler,
          classNames && classNames?.resizehandle
        )}
      />
    </div>
  );
};

export { ResizeHandle };
