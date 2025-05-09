import { Input } from "@lens/base/components/ui/input";

export interface TextInputInterface {
  placeholder?: string;
  value: string;
  onUpdateCallback: (val: string) => void;
  className?: string;
}

const TextInput = ({
  placeholder = "Value",
  value = "",
  onUpdateCallback,
  className = "",
}: TextInputInterface) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onUpdateCallback(e.target.value);
      }}
      type={"text"}
      className={className}
    />
  );
};

export default TextInput;
