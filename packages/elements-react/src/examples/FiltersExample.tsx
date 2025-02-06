import { FilterBuilder } from "../../lib/components/Filters";
import { AttributeDefinitionMapType } from "../../lib/components/Filters/src/interfaces";

const FiltersExample = () => {
  const attributes: AttributeDefinitionMapType = {
    f_name: {
      label: "First Name",
      type: "string",
    },
    l_name: {
      label: "Last Name",
      type: "string",
    },
    date_of_birth: {
      label: "DOB",
      type: "date",
    },
    age: {
      label: "Age",
      type: "number",
    },
    category: {
      label: "Category",
      type: "enum",
    },
    availability: {
      label: "Availablity",
      type: "boolean",
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
