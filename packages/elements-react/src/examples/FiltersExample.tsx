import { FilterBuilder } from "../../lib/components/Filters";

const FiltersExample = () => {
  return (
    <div className="le-mx-0">
      <div className="le-mt-2 le-w-[98vw]">
        <FilterBuilder
          label={"Filters surface 1"}
          variant="classic"
          size="2"
          maxDepth={2}
          // showFilterJSON={false}
        />
      </div>
    </div>
  );
};

export default FiltersExample;
