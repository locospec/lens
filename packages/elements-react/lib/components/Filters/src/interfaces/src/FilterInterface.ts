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
}

interface FilterBuilderProps {
  maxDepth?: number;
  showFilterJSON?: boolean;
  size?: FilterSizes;
  variant?: FilterVariants;
  label?: string;
  attributes: AttributeDefinitionMapType;
}

export type {
  FilterContextType,
  FilterBuilderProps,
  FilterSizes,
  FilterVariants,
};
