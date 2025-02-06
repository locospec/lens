import { FilterBuilder } from "../../lib/components/Filters";
import { AttributeDefinitionMapType } from "../../lib/components/Filters/src/interfaces";

const FiltersExample = () => {
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
    availability: {
      label: "Availablity",
      type: "boolean",
      isNullable: false,
    },
  };

  return (
    <div className="le-w-11/12 le-mt-10 le-mx-auto">
      <FilterBuilder
        label={"Filters surface 1"}
        variant="classic"
        size="2"
        maxDepth={2}
        attributes={attributes}
        // showFilterJSON={false}
      />
    </div>
  );
};

export default FiltersExample;
