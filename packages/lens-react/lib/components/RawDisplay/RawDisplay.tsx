import { useEffect, useRef } from "react";
import { useInfiniteFetch } from "../LensProvider/hooks/useInfiniteFetch";
import { useLensContext } from "../LensProvider";

const RawDisplay: React.FC = () => {
  const { filters } = useLensContext();
  const { flatData, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteFetch({});
  const ref = useRef<any>();

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
      className="w-full h-full flex flex-col gap-y-1 overflow-y-scroll"
      onScroll={handleScroll}
      ref={ref}
    >
      {flatData.map((data: any, index: number) => (
        <div
          className="text-sm h-20 inline-flex border bg-black text-green-400"
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
