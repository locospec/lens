import { Lens } from "@locospec/elements-react";
import React, { useEffect, useState } from "react";
import { makeServer } from "../server/mocks/mirageServer";

// Example component with DataTable
const LensStory = () => {
  useEffect(() => {
    makeServer();
  }, []);
  const [checkedIds, setCheckedIds] = useState([]);

  const handleSelectionChange = (selectedItem) => {
    if (selectedItem) {
      setCheckedIds([selectedItem]);
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <div className="flex flex-col p-4 h-screen ">
      <h3>This is an example story component with Ladle!</h3>
      <div className="flex-grow overflow-y-auto border-2 max-h-[500px]">
        <Lens
          selectionType={"single"}
          configEndpoint="/api/data-bench/test-data/config"
          dataEndpoint="/api/data-bench/test-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
        />
      </div>
    </div>
  );
};

export default LensStory;
