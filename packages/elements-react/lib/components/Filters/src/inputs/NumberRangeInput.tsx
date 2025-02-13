import NumberInput from "./NumberInput";

export interface NumberRangeInputInterface {
  condition: any;
  selectedAttribute: any;
  handleValueChange: any;
}

const NumberRangeInput = ({
  condition,
  selectedAttribute,
  handleValueChange,
}: NumberRangeInputInterface) => {
  return (
    <>
      <NumberInput
        placeholder={selectedAttribute?.label}
        value={(condition?.value?.start || "") as string}
        onUpdateCallback={(v: any) => {
          handleValueChange({ start: v, end: condition?.value?.end || 0 });
        }}
        className="le-max-w-24"
      />
      <NumberInput
        placeholder={selectedAttribute?.label}
        value={(condition?.value?.end || "") as string}
        onUpdateCallback={(v: any) => {
          handleValueChange({
            start: condition?.value?.start || 0,
            end: v,
          });
        }}
        className="le-max-w-24"
      />
    </>
  );
};

export default NumberRangeInput;
