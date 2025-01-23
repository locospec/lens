import type { Header } from "@tanstack/react-table";
import { cn } from "../utils/cn";

export interface ResizeHandleProps {
  header: Header<any, unknown>;
  isResizing: boolean;
}

const ResizeHandle = ({ header, isResizing }: any) => {
  const resizeHandle = header.getResizeHandler();
  return (
    <div
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={resizeHandle}
      onTouchStart={resizeHandle}
      className={cn(
        "le-translate-x-1/2",
        "le-absolute le-right-0 le-top-0 le-h-full le-w-1 le-cursor-col-resize le-touch-none le-select-none",
        "le-bg-[var(--gray-5)] hover:le-bg-[var(--gray-6)]",
        isResizing && "le-bg-[var(--gray-6)]"
      )}
    />
  );
};

export { ResizeHandle };
