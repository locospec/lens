import { FilterGroup } from "@/components/LensProvider/interfaces/FiltersInterface";
import { ReactNode } from "react";

interface SimpleFiltersContextInterface {
  attributesArray: any;
  initialisedFilter: any;
  filterContainerRef: React.RefObject<HTMLDivElement>;
  setFilters: React.Dispatch<any>;
  updateCondition: (path: number[], field: string, value: any) => void;
  filter: any;
  queryEndpoint: string;
  permissionHeaders: {
    [key: string]: string;
  };
  classNames?: SimpleFiltersClassNames;
}

interface CommonWrapperInterface {
  children: ReactNode;
}

interface SimpleFiltersClassNames {
  enum?: string;
  wrapper?: string;
  dateTrigger?: string;
}

interface SimpleFiltersContextProviderInterface extends CommonWrapperInterface {
  defaultFiltersValue?: FilterGroup;
  classNames?: SimpleFiltersClassNames;
}

export type {
  SimpleFiltersContextInterface,
  SimpleFiltersContextProviderInterface,
  SimpleFiltersClassNames,
};
