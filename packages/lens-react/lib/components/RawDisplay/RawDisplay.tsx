import { useContext, useEffect, useRef } from "react";
import { useInfiniteFetch } from "../LensProvider/hooks/useInfiniteFetch";
import { ViewContext } from "../Views/View/ViewContext";
import { getProcessedFilters } from "../LensProvider/utils";

const RawDisplay: React.FC = () => {
  const { viewChildRef, filters, searchQuery } = useContext(ViewContext) || {};
  const { flatData, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteFetch({
      globalFilter: searchQuery,
      body: { filters: getProcessedFilters(filters) },
    });
  const ref = viewChildRef || useRef<any>();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement;

    if (div.scrollHeight - div.scrollTop - div.clientHeight < 100) {
      if (hasNextPage && !isFetching) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (ref?.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (scrollHeight - scrollTop - clientHeight < 200) {
        fetchNextPage();
      }
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [JSON.stringify(filters)]);

  return (
    <div
      className="relative w-full h-full flex flex-col gap-y-1 overflow-y-scroll"
      onScroll={handleScroll}
      ref={ref}
    >
      {flatData.map((data: any, index: number) => (
        <div
          className="text-lg h-28 inline-flex border bg-black text-green-400"
          key={index}
        >
          {JSON.stringify(data, null, 2)}
        </div>
      ))}
    </div>
  );
};

RawDisplay.displayName = "RawDisplay";

export { RawDisplay };
