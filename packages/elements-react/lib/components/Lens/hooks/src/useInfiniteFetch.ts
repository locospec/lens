import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export interface UseInfiniteFetchParams {
  queryKey: string;
  globalFilter: string;
  dataEndpoint: string;
  keepPreviousData: any;
}

const useInfiniteFetch = ({
  queryKey,
  globalFilter,
  dataEndpoint,
  keepPreviousData,
}: UseInfiniteFetchParams) => {
  const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteQuery({
    queryKey: [queryKey, globalFilter],
    queryFn: async ({ pageParam = null }) => {
      const response = await fetch(
        `${dataEndpoint}?cursor=${pageParam}&search=${globalFilter}`
      );
      const responseJson = await response.json();
      return responseJson;
    },
    initialPageParam: null,
    getNextPageParam: (lastPage: any) => lastPage.next_cursor,
    getPreviousPageParam: (firstPage) => firstPage.prev_cursor,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  const flatData = useMemo(
    () => data?.pages?.flatMap((page) => page.data) ?? [],
    [data]
  );

  return { flatData, fetchNextPage, isFetching, hasNextPage };
};

useInfiniteFetch.displayName = "useInfiniteFetch";

export { useInfiniteFetch };
