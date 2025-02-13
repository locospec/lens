import { AttributeTypes } from "./AttributesInterface";

export type Operator =
  | "is"
  | "is_not"
  | "is_empty"
  | "is_not_empty"
  | "greater_than"
  | "less_than"
  | "greater_than_or_equal"
  | "less_than_or_equal"
  | "between"
  | "not_between"
  | "contains"
  | "not_contains"
  | "starts_with"
  | "ends_with"
  | "matches_regex"
  | "is_any_of"
  | "is_none_of"
  | "is_true"
  | "is_false"
  | "is_relative";

export type GroupOperator = "and" | "or";

export interface OperatorOption {
  label: string;
  value: Operator | GroupOperator;
}

export type OperatorsList = OperatorOption[];

export type TypeOperatorsMap = Record<AttributeTypes, OperatorsList>;
