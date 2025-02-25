import { Condition, FilterGroup } from "../interfaces";

export interface FunctionProps {
  filter: FilterGroup;
  path: number[];
  dependsOnArray?: string[];
  excludeSelf?: boolean;
}

const getSameLevelConditions = ({
  filter,
  path,
  dependsOnArray,
  excludeSelf = false,
}: FunctionProps): { sameGroup: Condition[]; filters: any } => {
  const [first, ...rest] = path;

  const isFilterGroup = (obj: any): obj is FilterGroup => "conditions" in obj;
  const isCondition = (obj: any): obj is Condition => "attribute" in obj;

  if (rest.length > 0) {
    const nextFilterGroup = filter.conditions[first];
    if (isFilterGroup(nextFilterGroup)) {
      return getSameLevelConditions({
        filter: nextFilterGroup,
        path: rest,
        dependsOnArray,
        excludeSelf,
      });
    } else {
      return { sameGroup: [], filters: filter };
    }
  }

  const samegroup = filter.conditions
    .filter((item): item is Condition => isCondition(item))
    .filter((_, index) => !excludeSelf || (excludeSelf && index !== path[0]))
    .filter((condition: Condition) =>
      dependsOnArray ? dependsOnArray.includes(condition.attribute) : true
    );
  return {
    sameGroup: samegroup,
    filters: { ...filter, conditions: samegroup },
  };
};

export default getSameLevelConditions;
