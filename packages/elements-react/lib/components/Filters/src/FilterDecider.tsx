import SimpleFilter from "./SimpleFilter";
import FilterBuilder from "./FilterBuilder";

const FilterDecider = ({ ...props }: any) => {
  if (props?.asSimpleFilters || false) {
    return <SimpleFilter {...props} />;
  }
  return <FilterBuilder {...props} />;
};

export default FilterDecider;
