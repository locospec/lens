import { ReactNode } from "react";
import {
  FilterSizes,
  FilterVariants,
  AttributeOptionsArrayType,
  AttributeDefinitionMapType,
  FilterGroup,
} from "../interfaces";

interface FilterContextType {
  size: FilterSizes;
  variant: FilterVariants;
  attributesArray: AttributeOptionsArrayType;
  attributesObject: AttributeDefinitionMapType;
  filterContainerRef?: any;
  queryEndpoint: string;
  filter: FilterGroup;
  dataEndpointHeaders?: any;
  updateCondition: (path: number[], field: string, value: any) => void;
  addCondition: (parentPath?: number[]) => void;
  addGroup: (parentPath?: number[]) => void;
  removeItem: (path: number[]) => void;
  maxDepth: number;
}

interface FilterProviderProps extends FilterContextType {
  children: ReactNode;
}

export type { FilterContextType, FilterProviderProps };
