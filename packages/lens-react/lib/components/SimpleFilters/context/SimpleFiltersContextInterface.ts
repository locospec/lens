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
  classNames: any;
}

interface CommonWrapperInterface {
  children: ReactNode;
}
interface SimpleFiltersContextProviderInterface extends CommonWrapperInterface {
  defaultFiltersValue?: any;
  classNames?: any;
}

export type {
  SimpleFiltersContextInterface,
  SimpleFiltersContextProviderInterface,
};
