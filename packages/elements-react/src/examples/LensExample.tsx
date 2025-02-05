import React, { useState } from "react";
import { Lens } from "../../lib/main";
import { makeServer } from "../mocks/mirageServer";
import { FilterBuilder } from "../../lib/components/Filters";

const LensExample = () => {
  React.useEffect(() => {
    // makeServer();
    // return () => {
    //   makeServer().shutdown();
    // };
  }, []);

  const [checkedIds, setCheckedIds] = useState([]);

  const handleSelectionChange = (selectedItem: any) => {
    if (selectedItem) {
      setCheckedIds(selectedItem);
    } else {
      setCheckedIds([]);
    }
  };

  const returnAssetsConfig = () => {
    return {
      resource: "asset_types",
      identifierKey: "uuid",
      selectionType: "none",
      columns: [
        {
          accessorKey: "uuid",
          header: "UUID",
          width: 500,
        },
        {
          accessorKey: "asset_type_name",
          header: "Asset Type",
          width: 500,
        },
        {
          accessorKey: "name",
          header: "Sub Asset",
          width: 500,
        },
      ],
    };
  };

  const fetchDataFunction = async ({ pageParam = null, globalFilter = "" }) => {
    console.log(" >> FETCH DATA FUNCTION CALLED");
    try {
      // `http://127.0.0.1:8000/table-data/asset_types?cursor=${pageParam}&search=${globalFilter}`
      const response = await fetch(
        `http://127.0.0.1:8000/test-lcs?cursor=${pageParam}&search=${globalFilter}`
      );
      console.log(">>> responseJson", response);

      const responseJson = await response.json();
      console.log(">>> responseJson", responseJson);
      if (responseJson?.data && !Array.isArray(responseJson.data)) {
        throw new Error("Expected data to be an array");
      }

      return responseJson;
    } catch (e) {
      console.error("ERROR HERE: ", e);
    }
  };

  return (
    <div className="le-mx-0">
      <div className="le-h-[60vh] le-w-[95vw] le-mt-10  le-mx-auto">
        {/* <div className="le-w-full le-overflow-x-hidden"> */}
        {/* <div className="le-mx-auto le-h-[480px] le-w-full le-bg-white"> */}
        <Lens
          // configEndpoint="/api/data-bench/auction-data/config"
          // configEndpoint="/api/data-bench/auction-data/config"
          configCallback={returnAssetsConfig}
          // dataEndpoint="/api/data-bench/auction-data/fetch"
          dataCallback={fetchDataFunction}
          // dataEndpoint="http://127.0.0.1:8000/table-data/asset_types"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
          variant="surface"
          size="3"
          showTopBar
          showThemeSwitcher
        />
        {/* </div> */}
      </div>
      {/* <div className="le-h-[60vh] le-w-[95vw] le-mt-10  le-mx-auto">
        <Lens
          configEndpoint="/api/data-bench/auction-data/config"
          dataEndpoint="/api/data-bench/auction-data/fetch"
          onSelect={(value) => {
            handleSelectionChange(value);
          }}
          selectedItems={checkedIds}
          variant="surface"
          size="3"
          showTopBar
          showThemeSwitcher
        />
      </div> */}
      <div className="le-mt-10">
        <FilterBuilder
          label={"Filters surface 1"}
          variant="classic"
          size="2"
          maxDepth={4}
          showFilterJSON={false}
        />
      </div>
      {/* <FilterBuilder
        label={"Filters classic 2"}
        variant="classic"
        size="2"
        showFilterJSON={false}
      />
      <FilterBuilder
        label={"Filters soft 3"}
        variant="soft"
        size="3"
        showFilterJSON={false}
      /> */}
    </div>
  );
};

export default LensExample;
