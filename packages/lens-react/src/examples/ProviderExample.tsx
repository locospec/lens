import { useState } from "react";
import {
  Datatable,
  LensProvider,
  SimpleFilters,
  View,
} from "../../../lens-react/lib/main";
import CustomSearchInput from "./components/CustomSearch";

export interface CallbackInterface {
  url: string;
  data: Record<string, any>;
}

const ProviderExample = () => {
  const lensConfig3 = {
    endpoint: "/api/data-bench/auction-data-3",
    permissionHeaders: { sample: "" },
    context: {
      distributer_id: "abc",
    },
    view: "default_view",
  };

  const [checkedIds, setCheckedIds] = useState<any[] | []>([]);
  const [data, setData] = useState<any[] | []>([]);
  if (data.length > 10) {
    console.warn("data length is more than 10");
  }
  const [showSheet, setShowSheet] = useState(false);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem.map((obj: any) => obj.id));
      setData(selectedItem);
    } else {
      setCheckedIds([]);
      setData([]);
    }
  };

  return (
    <>
      <LensProvider lensConfiguration={lensConfig3} showDevTools>
        <div className="px-2 py-4">
          <label className="text-left text-lg dark:text-white">
            {`This sample shows two data table using the same data but as they are
          wrapped in different View Context theirs search and filters do not
          conflict with each other`}
          </label>
        </div>
        <View viewConfiguration={{ context: { sample: "value" } }}>
          <div className="*: mt-10 flex items-center justify-between gap-x-2 border border-b-0 border-[#eee] px-2 py-4">
            <div className="flex h-full flex-col justify-between gap-y-2">
              <button
                className="h-9 border border-gray-500 bg-gray-100 p-2 text-center"
                onClick={() => {
                  setShowSheet((prev: any) => !prev);
                }}
              >
                Customise
              </button>
              <CustomSearchInput />
            </div>
            <SimpleFilters
              classNames={{
                enum: "text-[#A8A8A8] hover:text-[#A1A1A1] rounded-[7px]",
                popoverWrapper: "max-h-[40vh] h-[300px]",
                popover: "max-h-[300px]",
                // separator: "bg-red-600",
                // searchInput: "bg-yellow-400",
                // searchInputWrapper: "bg-yellow-600",
                // searchIcon: "text-green-400",
                // items: "",
              }}
            />
          </div>
          <div className="h-[400px] px-4">
            <Datatable
              selectedItems={checkedIds}
              onSelect={handleSelectionChange}
              showSheet={showSheet}
              setShowSheet={setShowSheet}
              // variant="vanilla"
              // disableResizing
              // disableReordering
              classNames={{
                headers: "bg-neutral-0",
              }}
              cellActions={{
                cities: (rowData: Record<string, any>) => {
                  console.log(rowData);
                },
                id: (rowData: Record<string, any>) => {
                  console.log("FROM ID COLUMNS", rowData);
                },
              }}
              cellRenderer={{
                cities: (rowData: Record<string, any>) => {
                  return (
                    <div className="w-fit rounded-3xl bg-red-400 px-3 py-2 text-white">
                      {rowData.cities}
                    </div>
                  );
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
