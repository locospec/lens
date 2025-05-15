import { useState } from 'react';
import { useColumnSizing } from './useColumnSizing';
import { useResizeObserver } from './useResizeObserver';

const useColumnResize = (
  tableContainerRef: React.RefObject<HTMLDivElement | null>,
  columns: any[],
  initialWidth: number,
) => {
  const [containerWidth, setContainerWidth] = useState(initialWidth);

  useResizeObserver(tableContainerRef, (entries) => {
    const entry = entries[0];
    setContainerWidth(entry.contentRect.width);
  });

  const { adjustedColumns, isColumnsReady } = useColumnSizing(
    columns,
    containerWidth,
  );

  return { adjustedColumns, isColumnsReady, containerWidth };
};

useColumnResize.displayName = 'useColumnResize';

export { useColumnResize };
