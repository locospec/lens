import { Input } from "@/base/components/ui/input";

export interface NumberInputInterface {
  placeholder?: string;
  value: string;
  onUpdateCallback: (val: number | string | undefined) => void;
  className?: string;
}

const NumberInput = ({
  placeholder = "Value",
  value = "",
  onUpdateCallback,
  className = "",
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
      className={className}
    />
  );
};

export default NumberInput;
