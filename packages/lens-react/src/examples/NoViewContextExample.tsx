import { useState } from "react";
import { Datatable, LensProvider, SimpleFilters } from "../../lib/main";
// import SearchInput from "../../lib/components/SearchInput/SearchInput";
import CustomSearchInput from "./components/CustomSearch";

const NoViewContextExample = () => {
  const lensConfig = {
    endpoint: "/api/data-bench/auction-data",
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
      <label className="text-lg">
        This sample shows a Data table that uses search and filters defined in
        Global Scope of the LensProvider
      </label>
      <div className="border border-b-0 border-[#eee] py-4 px-2 flex justify-between items-center">
        <CustomSearchInput />
        <SimpleFilters
          classNames={{
            wrapper: "",
            enum: "!bg-[#eee] text-[#A8A8A8] hover:text-[#A1A1A1] hover:bg-[#eee] rounded-[7px]",
            dateTrigger:
              "!bg-[#eee] text-[#A8A8A8] hover:text-[#A1A1A1] hover:bg-[#eee] rounded-[7px]",
          }}
        />
      </div>
      <div className="h-[400px] px-4">
        <Datatable
          selectedItems={checkedIds}
          onSelect={handleSelectionChange}
          classNames={{
            wrapper: "border border-[#eee]",
            headers: "flex gap-x-[14px] pl-[14px] pr-[50px] py-[15px] border-0",
            header: "leading-[16px] p-0",
            resizehandle: "bg-gray-100 hover:bg-gray-300",
            row: "flex gap-x-[14px] pl-[17px] pr-[31px] pt-[15px] pb-4 border-b border-[#eee] hover:bg-gray-50",
            cell: "p-0 border-r-0",
            actionsCell: "flex gap-x-4",
          }}
        />
      </div>
    </LensProvider>
  );
};

export default NoViewContextExample;
