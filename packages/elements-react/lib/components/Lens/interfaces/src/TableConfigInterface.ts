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
  icon: string;
  text?: string;
  method?: MethodTypes;
  confirmation?: boolean;
}

interface ActionsConfig {
  header: string;
  align?: AlignType;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  options: ActionOption[];
}

interface ColumnConfigInterface {
  accessorKey: string;
  header: string;
  width?: number;
  maxWidth?: number;
  minWidth?: number;
  align?: AlignType;
}

interface TableConfigInterface {
  resource: string;
  identifierKey: string;
  selectionType: SelectionType;
  actions?: ActionsConfig;
  columns: ColumnConfigInterface[];
}

export type {
  SelectionType,
  ColumnConfigInterface,
  TableConfigInterface,
  ActionOption,
  ActionsConfig,
};
