import { cn } from "@lens/components/utils/cn";
import type { Header } from "@tanstack/react-table";
import { useDatatableContext } from "../context/useDatatableContext.ts";

export interface ResizeHandleProps {
  header: Header<any, unknown>;
  isResizing: boolean;
  disabled?: boolean;
  isLast?: boolean;
}

const ResizeHandle = ({
  header,
  isResizing,
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
        "absolute right-0 top-0 z-20 flex h-full w-1 touch-none select-none items-center justify-end",
        disabled ? "cursor-not-allowed" : "cursor-ew-resize"
      )}
      data-isresising={isResizing ? "true" : "false"}
      data-islast={isLast ? "true" : "false"}
    >
      <div
        className={cn(
          disabled ? "hidden" : "opacity-100",
          "hover:scale-y-120 hover:scale-x-120 h-1/2 w-0.5 transform rounded-l-md transition-all duration-200 ease-in-out hover:origin-center",
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
