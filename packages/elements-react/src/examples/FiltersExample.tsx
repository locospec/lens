import { FilterBuilder } from "../../lib/components/Filters";

const FiltersExample = () => {
  return (
    <div className="le-w-11/12 le-mt-10 le-mx-auto">
      <FilterBuilder
        label={"Filters surface 1"}
        variant="classic"
        size="2"
        maxDepth={2}
        // showFilterJSON={false}
      />
    </div>
  );
};

export default FiltersExample;
