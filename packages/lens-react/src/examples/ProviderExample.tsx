import { useEffect, useState } from "react";
import {
  Datatable,
  LensProvider,
  SimpleFilters,
  View,
} from "../../../lens-react/lib/main";
// import SearchInput from "../../lib/components/SearchInput/SearchInput";
import CustomSearchInput from "./components/CustomSearch";
import { Clock, AArrowDown, Edit3Icon } from "lucide-react";

export interface CallbackInterface {
  url: string;
  data: Record<string, any>;
}

const ProviderExample = () => {
  // const lensConfig = {
  //   endpoint: "/api/data-bench/auction-data",
  //   permissionHeaders: { sample: "" },
  // };
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

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem.map((obj: any) => obj.id));
      setData(selectedItem);
    } else {
      setCheckedIds([]);
      setData([]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setCheckedIds(["uuid_1"]);
    }, 2000);
  }, []);

  return (
    <>
      <LensProvider lensConfiguration={lensConfig3} showDevTools>
        <label className="text-lg">
          This sample shows two data table using the same data but as they are
          wrapped in different View Context theirs search and filters do not
          conflict with each other
        </label>
        <div className="flex flex-col">
          <label className="bg-red-400">{JSON.stringify(checkedIds)}</label>
          <label className="bg-blue-400 max-h-52 overflow-y-scroll">
            {JSON.stringify(data)}
          </label>
        </div>
        <View viewConfiguration={{ context: { sample: "value" } }}>
          <div className="border border-b-0 border-[#eee] py-4 px-2 flex justify-between items-center gap-x-2">
            <CustomSearchInput />
            <SimpleFilters
              classNames={{
                enum: "text-[#A8A8A8] hover:text-[#A1A1A1] rounded-[7px]",
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
                actionsCell: "p-0 gap-x-4 leading-3",
              }}
              rowActions={{
                cities: (rowData: Record<string, any>) => {
                  console.log(rowData);
                },
                id: (rowData: Record<string, any>) => {
                  console.log("FROM ID COLUMNS", rowData);
                },
              }}
              actionsMapping={{
                sample: {
                  url: "/sample/:id/:city.locality.id",
                  icon: Clock,
                  callback: ({ url, data }: CallbackInterface) => {
                    console.log("Sample Callback ", url, data);
                  },
                },
                edit: {
                  icon: Edit3Icon,
                },
                sample2: {
                  component: (
                    <div
                      className="flex items-center gap-x-2 rounded-full bg-red-200 hover:bg-red-300 cursor-pointer p-1"
                      onClick={() => {
                        console.log(">> CLICKED ON ACTIONS COMPONENT");
                      }}
                    >
                      <AArrowDown />
                    </div>
                  ),
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
