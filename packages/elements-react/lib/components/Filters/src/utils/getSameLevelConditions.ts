import { Condition, FilterGroup } from "../types";

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
}: FunctionProps): Condition[] => {
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
      return [];
    }
  }

  return filter.conditions
    .filter((item): item is Condition => isCondition(item))
    .filter((_, index) => !excludeSelf || (excludeSelf && index !== path[0]))
    .filter((condition: Condition) =>
      dependsOnArray ? dependsOnArray.includes(condition.attribute) : true
    );
};

export default getSameLevelConditions;
