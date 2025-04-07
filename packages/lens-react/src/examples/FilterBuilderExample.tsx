import { FilterBuilder } from "../../lib/components/Filters";
import { LensProvider, SimpleFilters, View } from "../../lib/main";
// import SearchInput from "../../lib/components/SearchInput/SearchInput";

const FilterBuilderExample = () => {
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
          <FilterBuilder
            maxDepth={2}
            showAdvancedOption
            showFilterJSON={false}
          />
        </div>
      </View>
    </LensProvider>
  );
};

export default FilterBuilderExample;
