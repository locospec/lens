import { cn } from "@/components/utils/cn";
import NumberInput from "./NumberInput";
import React from "react";

export interface NumberRangeInputInterface {
  condition: any;
  selectedAttribute: any;
  handleValueChange: any;
}

const errorClasses =
  "le-border le-border-red-500 !le-ring-red-500 le-horizontal-shake";
const defaultClasses = "le-max-w-32";

const NumberRangeInput = ({
  condition,
  selectedAttribute,
  handleValueChange,
}: NumberRangeInputInterface) => {
  const [inputClasses, setInputClasses] = React.useState(defaultClasses);

  const validateRange = (start: number, end: number) => {
    if (start > end) {
      setInputClasses(cn(defaultClasses, errorClasses));
      return false;
    }
    setInputClasses(cn(defaultClasses));
    return true;
  };

  return (
    <>
      <NumberInput
        placeholder={"Start " + selectedAttribute?.label}
        value={(condition?.value?.start || "") as string}
        onUpdateCallback={(v: any) => {
          validateRange(v, condition?.value?.end);
          handleValueChange({ start: v, end: condition?.value?.end || 0 });
        }}
        className={inputClasses}
      />
      <NumberInput
        placeholder={"End " + selectedAttribute?.label}
        value={(condition?.value?.end || "") as string}
        onUpdateCallback={(v: any) => {
          validateRange(condition?.value?.start, v);
          handleValueChange({
            start: condition?.value?.start || 0,
            end: v,
          });
        }}
        className={inputClasses}
      />
    </>
  );
};

export default NumberRangeInput;
