import { useState } from "react";
import {
  Datatable,
  LensProvider,
  SimpleFilters,
  View,
} from "../../../lens-react/lib/main";
// import SearchInput from "../../lib/components/SearchInput/SearchInput";
import CustomSearchInput from "./components/CustomSearch";

const ProviderExample = () => {
  // const lensConfig = {
  //   endpoint: "/api/data-bench/auction-data",
  //   permissionHeaders: { sample: "" },
  // };
  const lensConfig3 = {
    endpoint: "/api/data-bench/auction-data-3",
    permissionHeaders: { sample: "" },
    context: {
      unique_id: "Sample",
    },
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
    <>
      <LensProvider lensConfiguration={lensConfig3} showDevTools>
        <label className="text-lg">
          This sample shows two data table using the same data but as they are
          wrapped in different View Context theirs search and filters do not
          conflict with each other{" "}
        </label>
        <View viewConfiguration={{ context: { sample: "value" } }}>
          <div className="border border-b-0 border-[#eee] py-4 px-2 flex justify-between items-center gap-x-2">
            <CustomSearchInput />
            <SimpleFilters
              classNames={{
                enum: "bg-[#eee] text-[#A8A8A8] hover:text-[#A1A1A1] hover:bg-[#eee] rounded-[7px]",
              }}
            />
          </div>
          <div className="h-[400px] px-4">
            <Datatable
              selectedItems={checkedIds}
              onSelect={handleSelectionChange}
              classNames={{
                wrapper: "border border-[#eee]",
                headers:
                  "flex gap-x-[14px] pl-[14px] pr-[50px] py-[15px] border-0",
                header: "leading-[16px] p-0",
                resizehandle: "bg-gray-100 hover:bg-gray-300",
                row: "flex gap-x-[14px] pl-[17px] pr-[31px] pt-[15px] pb-4 border-b border-[#eee] hover:bg-gray-50",
                cell: "p-0 border-r-0",
                actionsCell: "flex gap-x-4",
              }}
              rowActions={{
                cities: (rowData: any) => {
                  console.log(rowData);
                },
                id: (rowData: any) => {
                  console.log("FROM ID COLUMNS", rowData);
                },
                sample: () => {
                  console.log("FROM sample COLUMNS");
                },
              }}
            />
          </div>
        </View>
      </LensProvider>
    </>
  );
};

export default ProviderExample;
