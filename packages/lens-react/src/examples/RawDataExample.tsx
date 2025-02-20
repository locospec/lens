import { LensProvider, useLensContext } from "../../../lens-react/lib/main";
import { RawDisplay } from "../../../lens-react/lib/main";

const DisplayContext = () => {
  const { config } = useLensContext();
  return (
    <div className="text-[10px] border bg-red-800 text-green-400 p-2">
      {JSON.stringify(config, null, 2)}
    </div>
  );
};

const RawDataExample = () => {
  const configEndpoint = {
    endpoint: "/api/data-bench/auction-data",
  };

  return (
    <>
      <LensProvider lensConfiguration={configEndpoint}>
        <DisplayContext />
        <div className="h-[400px]">
          <RawDisplay />
        </div>
      </LensProvider>
    </>
  );
};

export default RawDataExample;
