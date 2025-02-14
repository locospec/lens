import {
  // FilterBuilder,
  // SimpleFilter,
  FilterDecider,
} from "../../lib/components/Filters";
import { AttributeDefinitionMapType } from "../../lib/components/Filters/src/interfaces";

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
    options: [
      { label: "One", value: "One" },
      { label: "Two", value: "Two" },
      { label: "Three", value: "Four" },
    ],
  },
  state: {
    label: "State",
    type: "enum",
    isNullable: false,
    modelName: "state",
  },
  district: {
    label: "District",
    type: "enum",
    isNullable: false,
    dependsOn: ["state"],
    modelName: "district",
  },
  city: {
    label: "City",
    type: "enum",
    isNullable: false,
    dependsOn: ["state", "district"],
    modelName: "city",
  },
  locality: {
    label: "Locality",
    type: "enum",
    isNullable: false,
    dependsOn: ["state", "district", "city"],
    modelName: "locality",
  },
  availability: {
    label: "Availablity",
    type: "boolean",
  },
};

// const attributes2: AttributeDefinitionMapType = {
//   // state: {
//   //   label: "State",
//   //   type: "enum",
//   //   isNullable: false,
//   // },
//   // district: {
//   //   label: "District",
//   //   type: "enum",
//   //   isNullable: false,
//   //   dependsOn: ["state"],
//   // },
//   city: {
//     label: "City",
//     type: "enum",
//     isNullable: false,
//     dependsOn: ["state", "district"],
//     modelName: "city",
//   },
//   locality: {
//     label: "Locality",
//     type: "enum",
//     isNullable: false,
//     dependsOn: ["state", "district", "city"],
//     modelName: "locality",
//   },
// };

const FiltersExample = () => {
  return (
    <div className="le-w-11/12 le-mt-10 le-mx-auto le-flex le-flex-col le-gap-y-10">
      {/* <FilterDecider
        label={"Filters surface 1"}
        variant="classic"
        size="2"
        maxDepth={2}
        attributes={attributes}
        queryEndpoint={"/api/data-bench/auction-data/query"}
        // showFilterJSON={false}
        // asSimpleFilters={asSimple}
      /> */}
      <FilterDecider
        label={"Auction Filters"}
        // variant="classic"
        // size="2"
        maxDepth={2}
        attributes={attributes}
        queryEndpoint={"/api/data-bench/auction-data/query"}
        asSimpleFilters
        showAdvancedOption
        // simpleFilters={["state", "city"]}
      />
    </div>
  );
};

export default FiltersExample;
