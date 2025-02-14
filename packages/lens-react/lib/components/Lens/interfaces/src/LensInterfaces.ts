import { AttributeDefinitionMapType } from "@/components/Filters/src/interfaces";
import { FilterGroup } from "@/components/Filters/src/interfaces/src/FilterInterface";

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
  filtersConfiguration: AttributeDefinitionMapType | undefined;
  setFiltersConfiguration: React.Dispatch<
    React.SetStateAction<AttributeDefinitionMapType | undefined>
  >;
  filters: FilterGroup | undefined;
  setFilters: React.Dispatch<React.SetStateAction<FilterGroup | undefined>>;
  queryEndpoint?: string;
  dataEndpointHeaders?: any;
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
  queryEndpoint?: string;
  dataEndpointHeaders?: any;
}

export type {
  SizesType,
  LensVariantTypes,
  LensVariantClasses,
  LensInterface,
  LensContextType,
};
