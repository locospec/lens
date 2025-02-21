import {
  LensProvider,
  SimpleFilters,
  useLensContext,
} from "../../../lens-react/lib/main";
import { RawDisplay } from "../../../lens-react/lib/main";
import CustomSearchInput from "./components/CustomSearch";

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
    <LensProvider lensConfiguration={configEndpoint}>
      <div className="border border-b-0 border-[#eee] p-2 flex justify-between items-center">
        <CustomSearchInput />
        <SimpleFilters
          classNames={{
            enum: "bg-[#eee] text-[#A8A8A8] hover:text-[#A1A1A1] hover:bg-[#eee] rounded-[7px]",
          }}
        />
      </div>
      <DisplayContext />
      <div className="h-[400px]">
        <RawDisplay />
      </div>
    </LensProvider>
  );
};

export default RawDataExample;
