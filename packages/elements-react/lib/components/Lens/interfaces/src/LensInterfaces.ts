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
  setSize: React.Dispatch<React.SetStateAction<SizesType>>;
  setVariant: React.Dispatch<React.SetStateAction<LensVariantTypes>>;
  sensors: any;
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
  showThemeSwitcher?: boolean;
}

export type {
  SizesType,
  LensVariantTypes,
  LensVariantClasses,
  LensInterface,
  LensContextType,
};
