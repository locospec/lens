import { useCallback } from "react";
import type { Condition } from "../interfaces";
import type { AttributeDefinitionType } from "../../../views/Datatable/interface/DatatableInterface";
import { DatePicker } from "@lens/base/components/ui/datepicker";
import NumberInput from "@lens/components/NumberInput/NumberInput";
import NumberRangeInput from "@lens/components/NumberRangeInput/NumberRangeInput";
import EnumInput from "@lens/components/EnumInput/EnumInput";
import { TextInput } from "@lens/components/TextInput";
import { useFilterContext } from "../context";

export interface ValueRendererInterface {
  condition: Condition;
  selectedAttribute: AttributeDefinitionType | null;
  path: number[];
}

const ValueInputRenderer = ({
  condition,
  selectedAttribute,
  path,
}: ValueRendererInterface) => {
  if (
    !condition?.op ||
    ["is_empty", "is_not_empty"].includes(condition?.op) ||
    !selectedAttribute ||
    selectedAttribute.type === "boolean"
  ) {
    return <></>;
  }

  const { updateCondition, filterContainerRef } = useFilterContext();

  const handleValueChange = useCallback(
    (value: string | number | string[] | number[] | boolean) =>
      updateCondition(path, "value", value),
    [updateCondition, path]
  );

  if (["string", "text"].includes(selectedAttribute.type)) {
    return (
      <TextInput
        placeholder={selectedAttribute?.label}
        value={condition?.value as string}
        onUpdateCallback={(v: any) => {
          handleValueChange(v);
        }}
      />
    );
  }

  if (["integer", "decimal"].includes(selectedAttribute.type)) {
    if (condition.op === "between" || condition.op === "not_between") {
      return (
        <NumberRangeInput
          condition={condition}
          selectedAttribute={selectedAttribute}
          handleValueChange={handleValueChange}
        />
      );
    }
    return (
      <NumberInput
        placeholder={selectedAttribute?.label}
        value={condition?.value as string}
        onUpdateCallback={(v: any) => {
          handleValueChange(v);
        }}
      />
    );
  }

  if (["date", "timestamp"].includes(selectedAttribute.type)) {
    return (
      <DatePicker
        containerRef={filterContainerRef}
        callback={handleValueChange}
        defaultDate={condition?.value as any}
      />
    );
  }

  if (selectedAttribute.type === "enum") {
    const asMulti =
      condition?.op === "is_any_of" || condition?.op === "is_none_of";
    return (
      <EnumInput
        defaultValues={(condition.value as string[]) || []}
        key={condition.attribute + "_" + JSON.stringify(path)}
        callback={handleValueChange}
        selectedAttribute={selectedAttribute}
        condition={condition}
        path={path}
        placeholder={`Select ${selectedAttribute.label}`}
        multiple={asMulti}
        filterContainerRef={null}
      />
    );
  }

  return <>{JSON.stringify(selectedAttribute.type)}</>;
};

export default ValueInputRenderer;
