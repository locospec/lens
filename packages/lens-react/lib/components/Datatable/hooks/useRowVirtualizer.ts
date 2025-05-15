import { useVirtualizer } from '@tanstack/react-virtual';

export interface useRowVirtualizerInterface {
  rows: any[];
  tableContainerRef: React.RefObject<HTMLDivElement | null>;
}

const useRowVirtualizer = ({
  rows,
  tableContainerRef,
}: useRowVirtualizerInterface) => {
  return useVirtualizer({
    count: rows.length,
    estimateSize: () => 33,
    getScrollElement: () => tableContainerRef.current,
    measureElement:
      typeof window !== 'undefined' &&
      navigator.userAgent.indexOf('Firefox') === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });
};

useRowVirtualizer.displayName = 'useRowVirtualizer';

export { useRowVirtualizer };
