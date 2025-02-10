import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export interface UseInfiniteFetchParams {
  queryKey?: string;
  globalFilter?: string;
  dataEndpoint?: string;
  keepPreviousData?: any;
  dataCallback?: any;
  refreshDep?: any[];
  body?: any;
}

const useInfiniteFetch = ({
  queryKey,
  globalFilter,
  dataEndpoint,
  keepPreviousData,
  dataCallback,
  refreshDep,
  body,
}: UseInfiniteFetchParams) => {
  if (!dataCallback && !dataEndpoint && !queryKey) {
    throw new Error(
      "Either dataCallback or dataEndpoint or queryKey must be provided"
    );
  }
  const fetchDataFunction = async ({ pageParam = null }) => {
    const response = await fetch(`${dataEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cursor: pageParam,
        search: globalFilter,
        ...body,
      }),
    });
    const responseJson = await response.json();

    if (responseJson?.data && !Array.isArray(responseJson.data)) {
      throw new Error("Expected data to be an array");
    }

    return responseJson;
  };

  const { data, fetchNextPage, isFetching, hasNextPage, refetch } =
    useInfiniteQuery({
      queryKey: refreshDep ? refreshDep : [queryKey, globalFilter],
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

  return { flatData, fetchNextPage, isFetching, hasNextPage, refetch };
};

useInfiniteFetch.displayName = "useInfiniteFetch";

export { useInfiniteFetch };
