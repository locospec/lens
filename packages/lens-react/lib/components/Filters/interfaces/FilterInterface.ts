import { AttributeDefinitionMapType } from "./AttributesInterface";
import { GroupOperator, Operator } from "./OperationsInterface";

type FilterSizes = "1" | "2" | "3";
type FilterVariants = "surface" | "soft" | "classic";

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
  toggleAdvancedFilters?: any;
  setIsControllingAdvanced?: any;
  externallyOpenAdvancedFilter?: any;
  simpleFilters?: string[];
  showClearAll?: boolean;
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

export type { FilterBuilderProps, FilterSizes, FilterVariants };
