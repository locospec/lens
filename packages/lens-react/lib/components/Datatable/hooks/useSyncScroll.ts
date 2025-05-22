import { useRef } from "react";

const useSyncScroll = () => {
  const headerScrollRef = useRef<HTMLDivElement>(null);
  const bodyScrollRef = useRef<HTMLDivElement>(null);
  const bodyLeftScrollRef = useRef<HTMLDivElement>(null);

  const syncScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const scrollTop = e.currentTarget.scrollTop;

    const header = headerScrollRef.current;
    const body = bodyScrollRef.current;
    const bodyLeft = bodyLeftScrollRef.current;

    if (!header || !body || !bodyLeft) return;

    if (e.currentTarget === header && body.scrollLeft !== scrollLeft) {
      body.scrollLeft = scrollLeft;
    } else if (e.currentTarget === body && header.scrollLeft !== scrollLeft) {
      header.scrollLeft = scrollLeft;
    }

    if (e.currentTarget === body && bodyLeft.scrollTop !== scrollTop) {
      bodyLeft.scrollTop = scrollTop;
    } else if (e.currentTarget === bodyLeft && body.scrollTop !== scrollTop) {
      body.scrollTop = scrollTop;
    }
  };

  return {
    headerScrollRef,
    bodyScrollRef,
    bodyLeftScrollRef,
    syncScroll,
  };
};

export { useSyncScroll };
