import { AttributeTypes } from "./AttributesInterface";

export type Operator =
  | "eq"
  | "neq"
  | "gt"
  | "lt"
  | "gte"
  | "lte"
  | "like"
  | "notLike"
  | "in"
  | "notIn"
  | "isNull"
  | "isNotNull";

export type GroupOperator = "and" | "or";

export interface OperatorOption {
  label: string;
  value: Operator | GroupOperator;
}

export type OperatorsList = OperatorOption[];

export type TypeOperatorsMap = Record<AttributeTypes, OperatorsList>;
