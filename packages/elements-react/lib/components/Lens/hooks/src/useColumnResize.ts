import { useState } from "react";
import { useResizeObserver } from "./useResizeObserver";
import { useColumnSizing } from "./useColumnSizing";

const useColumnResize = (
  tableContainerRef: React.RefObject<HTMLDivElement>,
  columns: any[],
  initialWidth: number
) => {
  const [containerWidth, setContainerWidth] = useState(initialWidth);

  useResizeObserver(tableContainerRef, (entries) => {
    const entry = entries[0];
    setContainerWidth(entry.contentRect.width);
  });

  const { adjustedColumns, isColumnsReady } = useColumnSizing(
    columns,
    containerWidth
  );

  return { adjustedColumns, isColumnsReady, containerWidth };
};

useColumnResize.displayName = "useColumnResize";

export { useColumnResize };
