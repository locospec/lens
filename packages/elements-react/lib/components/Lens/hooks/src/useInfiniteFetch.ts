import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export interface UseInfiniteFetchParams {
  queryKey?: string;
  globalFilter?: string;
  dataEndpoint?: string;
  keepPreviousData?: any;
  dataCallback?: any;
}

const useInfiniteFetch = ({
  queryKey,
  globalFilter,
  dataEndpoint,
  keepPreviousData,
  dataCallback,
}: UseInfiniteFetchParams) => {
  if (!dataCallback && !dataEndpoint && !queryKey) {
    throw new Error(
      "Either dataCallback or dataEndpoint or queryKey must be provided"
    );
  }
  const fetchDataFunction = async ({ pageParam = null }) => {
    const response = await fetch(
      `${dataEndpoint}?cursor=${pageParam}&search=${globalFilter}`
    );
    const responseJson = await response.json();

    if (responseJson?.data && !Array.isArray(responseJson.data)) {
      throw new Error("Expected data to be an array");
    }

    return responseJson;
  };

  const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteQuery({
    queryKey: [queryKey, globalFilter],
    queryFn: dataCallback ? dataCallback : fetchDataFunction,
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
