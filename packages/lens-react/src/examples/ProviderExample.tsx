import { useEffect, useRef } from "react";
import { LensProvider, useLensContext } from "../../../lens-react/lib/main";
import { useInfiniteFetch } from "../../lib/components/LensProvider/hooks/useInfiniteFetch";

const DisplayContext = () => {
  const { config } = useLensContext();
  return (
    <div className="le-text-[10px] le-border le-bg-black le-text-green-400 le-p-2">
      {JSON.stringify(config, null, 2)}
    </div>
  );
};

const DisplayData = () => {
  const { flatData, fetchNextPage, hasNextPage, isFetching } = useInfiniteFetch(
    {}
  );
  const ref = useRef<any>();

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const div = e.target as HTMLDivElement;

    if (div.scrollHeight - div.scrollTop - div.clientHeight < 100) {
      console.log("Reached bottom of the scrollable area", hasNextPage);

      if (hasNextPage && !isFetching) {
        fetchNextPage();
      }
    }
  };

  useEffect(() => {
    if (ref?.current) {
      const { scrollHeight, scrollTop, clientHeight } = ref.current;
      if (scrollHeight - scrollTop - clientHeight < 500) {
        fetchNextPage();
      }
    }
  }, []);

  return (
    <div
      className="le-flex le-flex-col le-gap-y-2 le-h-[400px] le-overflow-y-scroll"
      onScroll={handleScroll}
      ref={ref}
    >
      {flatData.map((data: any, index: number) => (
        <div
          className="le-text-sm le-inline-flex le-border le-bg-black le-text-green-400"
          key={index}
        >
          {JSON.stringify(data, null, 2)}
        </div>
      ))}
    </div>
  );
};

const ProviderExample = () => {
  const configEndpoint = {
    endpoint: "/api/data-bench/auction-data",
  };

  return (
    <>
      <LensProvider lensConfiguration={configEndpoint}>
        <DisplayData />
        {/* <DisplayContext /> */}
      </LensProvider>
    </>
  );
};

export default ProviderExample;
