// import { useState } from "react";
import {
  // Datatable,
  LensProvider,
  // RawDisplay,
  // SimpleFilters,
  // View,
  ViewsRenderer,
} from "../../lib/main";
// import SearchInput from "../../lib/components/SearchInput/SearchInput";
// import CustomSearchInput from "./components/CustomSearch";

const ViewExample = () => {
  const lensConfig = {
    endpoint: "/api/data-bench/auction-data-2",
    permissionHeaders: { sample: "" },
    newConfig: false,
  };

  // const [checkedIds, setCheckedIds] = useState<string[] | []>([]);

  // const handleSelectionChange = (selectedItem: any) => {
  //   if (selectedItem) {
  //     setCheckedIds(selectedItem);
  //   } else {
  //     setCheckedIds([]);
  //   }
  // };

  return (
    <div className="w-full h-[50vh]">
      <LensProvider lensConfiguration={lensConfig}>
        <div className="px-4 mt-4">
          <ViewsRenderer />
        </div>
      </LensProvider>
    </div>
  );
};

export default ViewExample;
