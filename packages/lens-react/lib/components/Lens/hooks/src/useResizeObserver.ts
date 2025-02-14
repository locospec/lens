import { useEffect } from "react";

export interface ResizeObserverCallback {
  (entries: ResizeObserverEntry[]): void;
}

const useResizeObserver = (
  ref: React.RefObject<HTMLElement>,
  callback: ResizeObserverCallback
): void => {
  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(callback);
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref, callback]);
};

useResizeObserver.displayName = "useResizeObserver";

export { useResizeObserver };
