import { useState, useMemo } from "react";

export interface Column {
  size?: number;
  [key: string]: any;
}

const useColumnSizing = (columns: Column[], containerWidth: number) => {
  const [isColumnsReady, setIsColumnsReady] = useState(false);
  const [adjustedColumns, setAdjustedColumns] = useState<any>(columns);

  useMemo(() => {
    if (!containerWidth || !columns.length) return columns;

    const totalMinWidth = columns.reduce(
      (acc: number, col: Column) => acc + (col.size || 200),
      0
    );

    const scaleFactor = containerWidth / totalMinWidth;

    const newColumns = columns.map((col: Column) => ({
      ...col,
      size: Math.floor((col.size || 200) * scaleFactor),
    }));

    setAdjustedColumns(newColumns);
    setIsColumnsReady(true);

    return newColumns;
  }, [columns, containerWidth]);

  return { adjustedColumns, isColumnsReady };
};

useColumnSizing.displayName = "useColumnSizing";

export { useColumnSizing };
