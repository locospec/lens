import { FilterBuilder } from "../../lib/components/Filters";
import { AttributeOption } from "../../lib/components/Filters/src/types";

const FiltersExample = () => {
  const attributes: AttributeOption[] = [
    { label: "First Name", value: "f_name", type: "string" },
    { label: "Last Name", value: "l_name", type: "string" },
    { label: "DOB", value: "date_of_birth", type: "date" },
    { label: "Age", value: "age", type: "number" },
  ];

  return (
    <div className="le-w-11/12 le-mt-10 le-mx-auto le-bg-red-100">
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
