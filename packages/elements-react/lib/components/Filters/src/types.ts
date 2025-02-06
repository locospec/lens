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

export interface Condition {
  attribute: string;
  op?: Operator;
  value?: string | number | boolean | null;
}

export interface FilterGroup {
  op: GroupOperator;
  conditions: (Condition | FilterGroup)[];
}

export interface OperatorOption {
  label: string;
  value: Operator | GroupOperator;
}

export const CONDITION_OPERATORS: OperatorOption[] = [
  { label: "Equals", value: "eq" },
  { label: "Not equals", value: "neq" },
  { label: "Greater than", value: "gt" },
  { label: "Less than", value: "lt" },
  { label: "Greater than or equal", value: "gte" },
  { label: "Less than or equal", value: "lte" },
  { label: "Like", value: "like" },
  { label: "Not like", value: "notLike" },
  { label: "In", value: "in" },
  { label: "Not in", value: "notIn" },
  { label: "Is null", value: "isNull" },
  { label: "Is not null", value: "isNotNull" },
];

export const GROUP_OPERATORS: OperatorOption[] = [
  { label: "AND", value: "and" },
  { label: "OR", value: "or" },
];
