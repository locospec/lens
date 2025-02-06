import { GroupOperator, Operator } from "./interfaces/src/OperationsInterface";

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
