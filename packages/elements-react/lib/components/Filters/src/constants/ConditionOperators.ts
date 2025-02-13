import { AttributeTypes } from "../interfaces";
import {
  OperatorsList,
  TypeOperatorsMap,
} from "../interfaces/src/OperationsInterface";

export const NULL_OPERATORS: OperatorsList = [
  { label: "Is empty", value: "is_empty" },
  { label: "Is not empty", value: "is_not_empty" },
];

export const ENUM_OPERATORS: OperatorsList = [
  { label: "Is", value: "is" },
  { label: "Is not", value: "is_not" },
  { label: "Is any of", value: "is_any_of" },
  { label: "Is none of", value: "is_none_of" },
];

export const DATE_OPERATORS: OperatorsList = [
  { label: "Is", value: "is" },
  { label: "Is not", value: "is_not" },
  { label: "Greater than", value: "greater_than" },
  { label: "Less than", value: "less_than" },
  { label: "Greater than or equal", value: "greater_than_or_equal" },
  { label: "Less than or equal", value: "less_than_or_equal" },
  { label: "Between", value: "between" },
  { label: "Not between", value: "not_between" },
];

export const BOOLEAN_OPERATORS: OperatorsList = [
  { label: "Is true", value: "is_true" },
  { label: "Is false", value: "is_false" },
];

export const NUMBER_OPERATORS: OperatorsList = [
  { label: "Is", value: "is" },
  { label: "Is not", value: "is_not" },
  { label: "Greater than", value: "greater_than" },
  { label: "Less than", value: "less_than" },
  { label: "Greater than or equal", value: "greater_than_or_equal" },
  { label: "Less than or equal", value: "less_than_or_equal" },
  { label: "Between", value: "between" },
  { label: "Not between", value: "not_between" },
];

export const STRING_OPERATORS: OperatorsList = [
  { label: "Is", value: "is" },
  { label: "Is not", value: "is_not" },
  { label: "Contains", value: "contains" },
  { label: "Does not contain", value: "not_contains" },
  { label: "Starts with", value: "starts_with" },
  { label: "Ends with", value: "ends_with" },
  { label: "Matches regex", value: "matches_regex" },
];

export const GROUP_OPERATORS: OperatorsList = [
  { label: "AND", value: "and" },
  { label: "OR", value: "or" },
];

export const returnOperators = (type: AttributeTypes, isNullable: boolean) => {
  let returnList = TYPE_OPERATORS_MAP[type];
  if (isNullable) {
    returnList = [...returnList, ...NULL_OPERATORS];
  }
  return returnList;
};

export const TYPE_OPERATORS_MAP: TypeOperatorsMap = {
  boolean: BOOLEAN_OPERATORS,
  enum: ENUM_OPERATORS,
  string: STRING_OPERATORS,
  number: NUMBER_OPERATORS,
  date: DATE_OPERATORS,
};
