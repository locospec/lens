import { AttributeTypes } from "../interfaces";
import {
  OperatorsList,
  TypeOperatorsMap,
} from "../interfaces/src/OperationsInterface";

export const NULL_OPERATORS: OperatorsList = [
  { label: "Is null", value: "isNull" },
  { label: "Is not null", value: "isNotNull" },
];

export const ENUM_OPERATORS: OperatorsList = [
  { label: "Equals", value: "eq" },
  { label: "Not equals", value: "neq" },
  { label: "In", value: "in" },
  { label: "Not in", value: "notIn" },
];

export const DATE_OPERATORS: OperatorsList = [
  { label: "Equals", value: "eq" },
  { label: "Not equals", value: "neq" },
  { label: "Greater than", value: "gt" },
  { label: "Less than", value: "lt" },
  { label: "Greater than or equal", value: "gte" },
  { label: "Less than or equal", value: "lte" },
];

export const BOOLEAN_OPERATORS: OperatorsList = [
  { label: "Equals", value: "eq" },
  { label: "Not equals", value: "neq" },
];

export const NUMBER_OPERATORS: OperatorsList = [
  { label: "Equals", value: "eq" },
  { label: "Not equals", value: "neq" },
  { label: "Greater than", value: "gt" },
  { label: "Less than", value: "lt" },
  { label: "Greater than or equal", value: "gte" },
  { label: "Less than or equal", value: "lte" },
  { label: "In", value: "in" },
  { label: "Not in", value: "notIn" },
];

export const STRING_OPERATORS: OperatorsList = [
  { label: "Equals", value: "eq" },
  { label: "Not equals", value: "neq" },
  { label: "Like", value: "like" },
  { label: "Not like", value: "notLike" },
  { label: "In", value: "in" },
  { label: "Not in", value: "notIn" },
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
