type SelectionType = "single" | "multiple" | "none";

interface ColumnConfigInterface {
  accessorKey: string;
  header: string;
  width?: number;
  maxWidth?: number;
  minWidth?: number;
}

interface TableConfigInterface {
  resource: string;
  identifierKey: string;
  selectionType: SelectionType;
  columns: ColumnConfigInterface[];
}

export type { SelectionType, ColumnConfigInterface, TableConfigInterface };
