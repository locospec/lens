import { useCallback, useEffect } from "react";

const useFetchMoreOnScroll = (
  containerRef: React.RefObject<HTMLDivElement>,
  fetchNextPage: () => void,
  isFetching: boolean,
  hasNextPage: boolean
) => {
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        console.log(" CONTAINER VALUES ARE", {
          scrollHeight,
          scrollTop,
          clientHeight,
          calc: scrollHeight - scrollTop - clientHeight,
        });
        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetching &&
          hasNextPage
        ) {
          console.log(">> FETCHING NEXT PAGE");
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, hasNextPage]
  );

  useEffect(() => {
    fetchMoreOnBottomReached(containerRef.current);
  }, [fetchMoreOnBottomReached]);

  return { fetchMoreOnBottomReached };
};

useFetchMoreOnScroll.displayName = "useFetchMoreOnScroll";

export { useFetchMoreOnScroll };
