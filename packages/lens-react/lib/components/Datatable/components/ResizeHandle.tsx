import { cn } from "@lens/components/utils/cn";
import type { Header } from "@tanstack/react-table";
import React from "react";
import { useDatatableContext } from "../context/useDatatableContext.ts";
import { head } from "lodash";

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
      className={cn(
        "absolute top-0 right-0 z-20 flex h-full w-1 touch-none items-center justify-end select-none",
        disabled ? "cursor-not-allowed" : "cursor-ew-resize"
      )}
      data-isresising={isResizing ? "true" : "false"}
      data-islast={isLast ? "true" : "false"}
    >
      <div
        className={cn(
          disabled ? "hidden" : "opacity-100",
          "h-1/2 w-0.5 rounded-l-md transition-all duration-200 ease-in-out transform hover:scale-y-120 hover:scale-x-120 hover:origin-center",
          "bg-gray-300 hover:bg-gray-600",
          "dark:bg-gray-500 dark:hover:bg-gray-300",
          header.column.getIsResizing() && "bg-gray-700",
          variantClasses.resize_handler,
          classNames && classNames?.resizehandle
        )}
      />
    </div>
  );
};

export { ResizeHandle };
