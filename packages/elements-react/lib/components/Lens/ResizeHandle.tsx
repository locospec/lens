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
        "le-absolute le-right-0 le-top-0 le-h-full le-w-0.5 le-cursor-col-resize le-touch-none le-select-none",
        "le-bg-transparent hover:le-bg-[var(--gray-6)]",
        isResizing && "le-bg-[var(--gray-6)]"
      )}
    />
  );
};

export { ResizeHandle };
