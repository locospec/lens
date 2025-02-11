import { Input } from "@/base/components/ui/input";

export interface TextInputInterface {
  placeholder?: string;
  value: string;
  onUpdateCallback: (val: string) => void;
}

const TextInput = ({
  placeholder = "Value",
  value = "",
  onUpdateCallback,
}: TextInputInterface) => {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        onUpdateCallback(e.target.value);
      }}
      type={"text"}
    />
  );
};

export default TextInput;
