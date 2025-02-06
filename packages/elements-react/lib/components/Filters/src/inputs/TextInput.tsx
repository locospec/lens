import { Input } from "@/base/components/ui/input";
import React from "react";

export interface TextInputInterface {
  placeholder?: string;
  value: string;
  onUpdateCallback: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
      onChange={onUpdateCallback}
    />
  );
};

export default TextInput;
