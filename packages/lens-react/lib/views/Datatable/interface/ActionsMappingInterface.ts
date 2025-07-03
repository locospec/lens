import { LucideProps } from "lucide-react";
import React from "react";

interface CallbackInterface {
  url: string;
  data: Record<string, any>;
}

interface ActionConfig {
  url: string;
  icon: React.ReactNode;
  callback: (params: CallbackInterface) => void;
}

interface ActionsMappingProps {
  actionsMapping: {
    [actionKey: string]: ActionConfig;
  };
}

type ActionIconType =
  | React.ReactNode
  | React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;

interface ActionOption {
  key: string;
  label: string;
  url: string;
}

interface ActionItem {
  label?: string;
  url?: string;
  icon?: ActionIconType;
  styles?: string;
  confirmation?: boolean;
  callback?: (params: CallbackInterface) => void;
  options?: ActionOption[];
  component?: (row: any) => React.JSX.Element;
}

interface ActionsMappingPropInterface {
  [key: string]: ActionItem;
}

export type {
  ActionIconType,
  CallbackInterface,
  ActionConfig,
  ActionsMappingProps,
  ActionsMappingPropInterface,
};
