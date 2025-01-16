// import { Lens } from "@locospec/elements-react";
import React, { useState } from "react";
// import { makeServer } from "../server/mocks/mirageServer";

const LensStory = () => {
  // useEffect(() => {
  //   makeServer();
  // }, []);
  const [checkedIds, setCheckedIds] = useState([]);

  const handleSelectionChange = (selectedItem) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <div className="flex flex-col p-4 h-screen items-center w-full gap-y-4">
      <h3 className="font-bold text-lg">Table with Multi Select </h3>
      <div className="flex-grow overflow-y-auto border-2 max-h-[500px] w-full">
        {/* <Lens
          selectionType={"multiple"}
          configEndpoint="/api/data-bench/test-data/config"
          dataEndpoint="/api/data-bench/test-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
        /> */}
      </div>
    </div>
  );
};

export default LensStory;
