"use client";

const ResizeHandle = ({ header, isResizing }: any) => {
  return (
    <div
      onDoubleClick={() => header.column.resetSize()}
      onMouseDown={header.getResizeHandler()}
      onTouchStart={header.getResizeHandler()}
      className={`le-absolute le-right-0 le-top-0 le-h-full le-w-1 le-cursor-col-resize le-touch-none le-select-none le-bg-gray-200 hover:le-bg-gray-400 ${
        isResizing ? "le-bg-blue-500" : ""
      }`}
    />
  );
};

export { ResizeHandle };
