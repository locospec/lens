import { FilterGroup } from "@/components/LensProvider/interfaces/FiltersInterface";
import { ReactNode } from "react";

interface FiltersContextInterface {
  attributesArray: any;
  attributesObject: any;
  initialisedFilter: any;
  filterContainerRef: React.RefObject<HTMLDivElement>;
  setFilters: React.Dispatch<any>;
  updateCondition: (path: number[], field: string, value: any) => void;
  addCondition: (parentPath?: number[]) => void;
  addGroup: (parentPath?: number[]) => void;
  removeItem: (path: number[]) => void;
  maxDepth: number;
  filter: FilterGroup;
  queryEndpoint: string;
  permissionHeaders: {
    [key: string]: string;
  };
  classNames?: FiltersClassNames;
  viewId?: string;
}

interface CommonWrapperInterface {
  children: ReactNode;
}

interface FiltersClassNames {
  enum?: string;
  wrapper?: string;
  dateTrigger?: string;
}

interface FiltersContextProviderInterface extends CommonWrapperInterface {
  defaultFiltersValue?: FilterGroup;
  classNames?: FiltersClassNames;
  viewId?: string;
  maxDepth?: number;
  filterContainerRef: React.RefObject<HTMLDivElement>;
  setFilters: React.Dispatch<any>;
  updateCondition: (path: number[], field: string, value: any) => void;
  addCondition: (parentPath?: number[]) => void;
  addGroup: (parentPath?: number[]) => void;
  removeItem: (path: number[]) => void;
}

export type {
  FiltersContextInterface,
  FiltersContextProviderInterface,
  FiltersClassNames,
};
