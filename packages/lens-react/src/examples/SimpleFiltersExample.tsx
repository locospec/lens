import { LensProvider, SimpleFilters, View } from "../../lib/main";
// import SearchInput from "../../lib/components/SearchInput/SearchInput";

const SimpleFiltersExample = () => {
  const lensConfig = {
    endpoint: "/api/data-bench/auction-data-2",
    permissionHeaders: { sample: "" },
  };

  return (
    <LensProvider lensConfiguration={lensConfig}>
      <label className="text-lg">
        This sample shows only Simple Filters within Lens component
      </label>
      <View>
        <div className="border border-b-0 border-[#eee] py-4 px-2 flex justify-between items-center">
          <SimpleFilters
            classNames={{
              wrapper: "",
              enum: "!bg-[#eee] text-[#A8A8A8] hover:text-[#A1A1A1] hover:bg-[#eee] rounded-[7px]",
              dateTrigger:
                "!bg-[#eee] text-[#A8A8A8] hover:text-[#A1A1A1] hover:bg-[#eee] rounded-[7px]",
            }}
          />
        </div>
      </View>
    </LensProvider>
  );
};

export default SimpleFiltersExample;
