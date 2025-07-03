import { Condition } from "../LensProvider/interfaces/FiltersInterface";
import { AttributeDefinitionType } from "../../views/Datatable/interface/DatatableInterface";

interface EnumInputInterface {
  placeholder?: string;
  emptyLabel?: string;
  callback?: (values: string | string[]) => void;
  defaultValues?: string[];
  selectedAttribute: AttributeDefinitionType;
  condition: Condition;
  path: number[];
  resetInput?: string;
  multiple?: boolean;
  filterContainerRef: any;
  className?: any;
}

export type { EnumInputInterface };
