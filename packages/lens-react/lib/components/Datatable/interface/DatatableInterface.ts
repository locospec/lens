export type AttributeTypes = "string" | "number" | "boolean" | "date" | "enum";
export type FixedType = false | "left" | "right";

export interface AttributeDefinitionType {
  label: string;
  type: AttributeTypes;
  isNullable?: boolean;
  dependsOn?: string[];
  modelName?: string;
  options?: { label: string; value: string }[];
}

export type AttributeDefinitionMapType = {
  [key: string]: AttributeDefinitionType;
};

type SelectionType = "single" | "multiple" | "none";
type AlignType = "start" | "center" | "end";
type MethodTypes =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE";

interface ActionOption {
  key: string;
  url: string;
  icon?: string;
  label?: string;
  method?: MethodTypes;
  confirmation?: boolean;
  options?: {
    key: string;
    label: string;
    url: string;
  }[];
}

interface ActionsConfig {
  header: string;
  align?: AlignType;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  fixed?: FixedType;
  show?: boolean;
  items: ActionOption[];
}

interface ColumnConfigInterface {
  accessorKey: string;
  header: string;
  width?: number;
  maxWidth?: number;
  minWidth?: number;
  align?: AlignType;
  fixed?: FixedType;
  show?: boolean;
}

interface SerializeInterface {
  header?: string;
  align?: AlignType;
  fixed?: FixedType;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
}

interface TableConfigInterface {
  resource: string;
  identifierKey: string;
  selectionType: SelectionType;
  selectionKey?: string;
  actions?: ActionsConfig;
  serialize?: SerializeInterface;
  columns: ColumnConfigInterface[];
  filters?: AttributeDefinitionMapType;
  allowedScopes?: string[];
}

export type {
  MethodTypes,
  SelectionType,
  AlignType,
  ColumnConfigInterface,
  TableConfigInterface,
  ActionOption,
  ActionsConfig,
};
