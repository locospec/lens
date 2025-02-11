import { Input } from "@/base/components/ui/input";

export interface NumberInputInterface {
  placeholder?: string;
  value: string;
  onUpdateCallback: (val: number | string | undefined) => void;
}

const NumberInput = ({
  placeholder = "Value",
  value = "",
  onUpdateCallback,
}: NumberInputInterface) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        const val = parseInt(e.target.value);
        onUpdateCallback(isNaN(val) ? undefined : val);
      }}
      type="number"
    />
  );
};

export default NumberInput;
