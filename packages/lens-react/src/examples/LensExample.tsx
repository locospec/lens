import React from "react";
import { Lens } from "../../lib/main";

const LensExample = () => {
  const [checkedIds, setCheckedIds] = React.useState([]);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <div className="le-h-[80vh] le-w-11/12 le-mt-10 le-mx-auto">
      <Lens
        configEndpoint="/api/data-bench/auction-data/config"
        dataEndpoint="/api/data-bench/auction-data/fetch"
        queryEndpoint="/api/data-bench/auction-data/query"
        onSelect={(value) => {
          handleSelectionChange(value);
        }}
        selectedItems={checkedIds}
        variant="surface"
        size="3"
        showTopBar
        // showThemeSwitcher
        dataEndpointHeaders={{ sdas: "Dasdasd" }}
      />
    </div>
  );
};

export default LensExample;
