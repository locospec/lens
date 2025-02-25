import { useState } from "react";
import {
  Datatable,
  LensProvider,
  // RawDisplay,
  SimpleFilters,
  View,
} from "../../../lens-react/lib/main";
// import SearchInput from "../../lib/components/SearchInput/SearchInput";
import CustomSearchInput from "./components/CustomSearch";

const ProviderExample2 = () => {
  const lensConfig = {
    endpoint: "/api/data-bench/auction-data-2",
    permissionHeaders: { sample: "" },
    // configCallback: () => {
    //   console.log("sdabdjhagdhaghda");
    // },
  };

  const [checkedIds, setCheckedIds] = useState<string[] | []>([]);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <LensProvider lensConfiguration={lensConfig}>
      <div className="px-4">
        <div className="border border-b-0 border-[#eee] py-4 px-2 flex justify-between items-center gap-x-2">
          <CustomSearchInput />
          <SimpleFilters
            classNames={{
              enum: "bg-[#eee] text-[#A8A8A8] hover:text-[#A1A1A1] hover:bg-[#eee] rounded-[7px]",
            }}
          />
        </div>

        <div className="h-[400px]">
          <Datatable
            selectedItems={checkedIds}
            onSelect={handleSelectionChange}
          />
        </div>
        {/* <RawDisplay /> */}
      </div>
      <View viewId="view_1">
        <h1>Independent View Context with specific View</h1>
        <div className="w-full bg-yellow-50 mt-10 flex flex-col gap-4">
          <CustomSearchInput />
          <SimpleFilters
            classNames={{
              enum: "bg-[#eee] text-[#A8A8A8] hover:text-[#A1A1A1] hover:bg-[#eee] rounded-[7px]",
            }}
          />
        </div>
      </View>
    </LensProvider>
  );
};

export default ProviderExample2;
