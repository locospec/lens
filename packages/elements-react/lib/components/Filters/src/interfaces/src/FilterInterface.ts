import {
  AttributeDefinitionMapType,
  AttributeOptionsArrayType,
} from "./AttributesInterface";
import { GroupOperator, Operator } from "./OperationsInterface";

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
  filter: FilterGroup;
  dataEndpointHeaders?: any;
}

interface FilterBuilderProps {
  maxDepth?: number;
  showFilterJSON?: boolean;
  size?: FilterSizes;
  variant?: FilterVariants;
  label?: string;
  attributes: AttributeDefinitionMapType;
  queryEndpoint: string;
  setFiltersCallback?: any;
  defaultFiltersValue?: any;
  showAdvancedOption?: boolean;
  dataEndpointHeaders?: any;
}

export interface Condition {
  attribute: string;
  op?: Operator;
  value?: string | number | boolean | string[] | number[] | null;
}

export interface FilterGroup {
  op: GroupOperator;
  conditions: (Condition | FilterGroup)[];
}

export interface OperatorOption {
  label: string;
  value: Operator | GroupOperator;
}

export type {
  FilterContextType,
  FilterBuilderProps,
  FilterSizes,
  FilterVariants,
};
