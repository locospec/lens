"use client";

const ResizeHandle = ({ header, isResizing }: any) => {
  return (
    <div
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      className={`absolute right-0 top-0 h-full w-1 cursor-col-resize touch-none select-none bg-gray-200 hover:bg-gray-400 ${
        isResizing ? "bg-blue-500" : ""
      }`}
    />
  );
};

export { ResizeHandle };
