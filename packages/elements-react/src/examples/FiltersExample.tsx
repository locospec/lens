import React from "react";
import { FilterBuilder, SimpleFilter } from "../../lib/components/Filters";
import { AttributeDefinitionMapType } from "../../lib/components/Filters/src/interfaces";
import { makeServer } from "../mocks/mirageServer";

const FiltersExample = () => {
  React.useEffect(() => {
    makeServer();
    return () => {
      makeServer().shutdown();
    };
  }, []);

  const attributes: AttributeDefinitionMapType = {
    f_name: {
      label: "First Name",
      type: "string",
      isNullable: false,
    },
    l_name: {
      label: "Last Name",
      type: "string",
    },
    pan: {
      label: "PAN",
      type: "string",
      isNullable: false,
    },
    date_of_birth: {
      label: "DOB",
      type: "date",
      isNullable: false,
    },
    age: {
      label: "Age",
      type: "number",
      isNullable: false,
    },
    category: {
      label: "Category",
      type: "enum",
      isNullable: false,
    },
    state: {
      label: "State",
      type: "enum",
      isNullable: false,
    },
    district: {
      label: "District",
      type: "enum",
      isNullable: false,
      dependsOn: ["state"],
    },
    city: {
      label: "City",
      type: "enum",
      isNullable: false,
      dependsOn: ["state", "district"],
    },
    locality: {
      label: "Locality",
      type: "enum",
      isNullable: false,
      dependsOn: ["state", "district", "city"],
    },
    availability: {
      label: "Availablity",
      type: "boolean",
    },
  };

  // const attributes2: AttributeDefinitionMapType = {
  //   state: {
  //     label: "State",
  //     type: "enum",
  //     isNullable: false,
  //   },
  //   district: {
  //     label: "District",
  //     type: "enum",
  //     isNullable: false,
  //     dependsOn: ["state"],
  //   },
  //   city: {
  //     label: "City",
  //     type: "enum",
  //     isNullable: false,
  //     dependsOn: ["state", "district"],
  //   },
  //   locality: {
  //     label: "Locality",
  //     type: "enum",
  //     isNullable: false,
  //     dependsOn: ["state", "district", "city"],
  //   },
  // };

  return (
    <div className="le-w-11/12 le-mt-10 le-mx-auto le-flex le-flex-col le-gap-y-10">
      <FilterBuilder
        label={"Filters surface 1"}
        variant="classic"
        size="2"
        maxDepth={2}
        attributes={attributes}
        queryEndpoint={"/api/data-bench/auction-data/query"}
        // showFilterJSON={false}
      />
      {/* <SimpleFilter
        label={"Filters surface 1"}
        variant="classic"
        size="2"
        maxDepth={2}
        attributes={attributes2}
        queryEndpoint={"/api/data-bench/auction-data/query"}
      /> */}
    </div>
  );
};

export default FiltersExample;
