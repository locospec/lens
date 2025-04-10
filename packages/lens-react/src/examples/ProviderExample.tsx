import { useEffect, useState } from "react";
import {
  Datatable,
  LensProvider,
  SimpleFilters,
  View,
} from "../../../lens-react/lib/main";
// import SearchInput from "../../lib/components/SearchInput/SearchInput";
import CustomSearchInput from "./components/CustomSearch";
// import { Clock, AArrowDown, Edit3Icon } from "lucide-react";

const dataCallback = (data: any) => {
  const dataSource = "sample";
  const processed = "{";
  const cursor = 0;
  const pageSize = 10;
  let completeTestData: any = [];

  completeTestData = Array.from({ length: 200 }, (_, index) => ({
    // label: dataSource + "[" + processed + "]" + index,
    // value: dataSource + "_" + index,
    title: dataSource + "[" + processed + "]" + index,
    const: dataSource + "_" + index,
  }));

  const paginatedTestData = completeTestData.slice(cursor, cursor + pageSize);
  const nextCursor =
    cursor + pageSize < completeTestData.length ? cursor + pageSize : null;
  const meta = {
    count: 2,
    per_page: pageSize,
    has_more: null,
    next_cursor: nextCursor,
    prev_cursor: null,
  };
  return {
    success: true,
    data: paginatedTestData,
    meta: meta,
  };
};

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
    // dataCallback: dataCallback,
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCheckedIds(["uuid_1"]);
  //   }, 2000);
  // }, []);

  return (
    <>
      <LensProvider lensConfiguration={lensConfig3} showDevTools>
        <div className="px-2 py-4">
          <label className="text-lg  dark:text-white text-left">
            {`This sample shows two data table using the same data but as they are
          wrapped in different View Context theirs search and filters do not
          conflict with each other`}
          </label>
        </div>
        <View viewConfiguration={{ context: { sample: "value" } }}>
          <div className="border border-b-0 border-[#eee] py-4 px-2 flex justify-between items-center gap-x-2 mt-10">
            <CustomSearchInput />
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
              variant="vanilla"
              disableResizing
              classNames={{
                wrapper: "border border-[#eee]",
                headers:
                  "border-b border-[#eee] bg-white pl-3 flex gap-x-3 py-[15px]",
                header: "leading-[16px] p-0 bg-white",
                resizehandle: "bg-gray-100 hover:bg-gray-300",
                row: "border-b border-[#eee] hover:bg-gray-50 pl-3 flex gap-x-3 pt-[18px] pb-3",
                cell: "p-0 border-r-0 leading-8 group-hover:bg-gray-50",

                actionsCell: "flex gap-x-4 justify-end px-4",
                actionsHeader: "justify-end text-end text-right pr-4",
              }}
              cellActions={{
                cities: (rowData: Record<string, any>) => {
                  console.log(rowData);
                },
                id: (rowData: Record<string, any>) => {
                  console.log("FROM ID COLUMNS", rowData);
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
