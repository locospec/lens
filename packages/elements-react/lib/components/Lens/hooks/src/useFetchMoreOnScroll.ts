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
        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetching &&
          hasNextPage
        ) {
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

export { useFetchMoreOnScroll };
