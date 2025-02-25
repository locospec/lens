import { cn } from "@/components/utils/cn";
import React from "react";
import { NumberInput } from "../NumberInput";
import "./NumberRangeInput.modules.css";

export interface NumberRangeInputInterface {
  condition: any;
  selectedAttribute: any;
  handleValueChange: any;
}

const errorClasses = "border border-red-500 !ring-red-500 horizontal-shake";
const defaultClasses = "max-w-32";

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
