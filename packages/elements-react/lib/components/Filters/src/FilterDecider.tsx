import SimpleFilter from "./SimpleFilter";
import FilterBuilder from "./FilterBuilder";

const FilterDecider = ({ ...props }: any) => {
  console.log(props);
  if (props?.asSimpleFilters || false) {
    return <SimpleFilter {...props} />;
  }
  return <FilterBuilder {...props} />;
};

export default FilterDecider;
