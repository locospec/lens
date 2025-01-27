import { SelectionType } from "./TableConfigInterface";

type SizesType = "1" | "2" | "3";
type LensVariantTypes = "ghost" | "surface" | "stripped";

interface LensContextType {
  showDevTools?: boolean;
  showTableMetrics?: boolean;
  dataCallback?: any;
  configCallback?: any;
  size: SizesType;
  variant?: LensVariantTypes;
}

interface LensInterface {
  selectionType?: SelectionType;
  onSelect?: (selection: any) => void;
  selectedItems?: string[];
  showDevTools?: boolean;
  showTableMetrics?: boolean;
  configEndpoint?: string;
  configCallback?: () => any;
  dataEndpoint?: string;
  dataCallback?: (schema: any, request: any) => any;
  size?: SizesType;
  variant?: LensVariantTypes;
}

export type { SizesType, LensInterface, LensContextType };
