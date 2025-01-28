type SizesType = "1" | "2" | "3";
type LensVariantTypes = "ghost" | "surface";
type LensVariantClasses = `le-table-variant-${LensVariantTypes}`;

interface LensContextType {
  showDevTools?: boolean;
  showTableMetrics?: boolean;
  showTopBar?: boolean;
  dataCallback?: any;
  configCallback?: any;
  size: SizesType;
  variant?: LensVariantTypes;
  variantClass?: LensVariantClasses;
  actionsCallback?: any;
}

interface LensInterface {
  onSelect?: (selection: any) => void;
  selectedItems?: string[];
  showDevTools?: boolean;
  showTableMetrics?: boolean;
  showTopBar?: boolean;
  configEndpoint?: string;
  configCallback?: () => any;
  dataEndpoint?: string;
  dataCallback?: (schema: any, request: any) => any;
  size?: SizesType;
  variant?: LensVariantTypes;
  actionsCallback?: any;
}

export type { SizesType, LensInterface, LensContextType };
