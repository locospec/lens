import {
  AttributeDefinitionMapType,
  AttributeOptionsArrayType,
} from "./AttributesInterface";

type FilterSizes = "1" | "2" | "3";
type FilterVariants = "surface" | "soft" | "classic";

interface FilterContextType {
  size: FilterSizes;
  variant: FilterVariants;
  attributesArray: AttributeOptionsArrayType;
  attributesObject: AttributeDefinitionMapType;
  updateCondition: (path: number[], field: string, value: any) => void;
  filterContainerRef?: any;
  queryEndpoint: string;
}

interface FilterBuilderProps {
  maxDepth?: number;
  showFilterJSON?: boolean;
  size?: FilterSizes;
  variant?: FilterVariants;
  label?: string;
  attributes: AttributeDefinitionMapType;
  queryEndpoint: string;
}

export type {
  FilterContextType,
  FilterBuilderProps,
  FilterSizes,
  FilterVariants,
};
