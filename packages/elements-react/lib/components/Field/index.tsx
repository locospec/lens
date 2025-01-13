import { useState } from "react";
import { Label } from "../Label";
import { Input } from "../Input";

type FormFieldProps = {
  label: string;
  placeholder: string;
};

export const Field = ({ label, placeholder }: FormFieldProps) => {
  console.log("Loading elements-react Field in this page #11");

  const [inputCustomCountValue, setInputCustomCountValue] = useState("");

  return (
    <>
      <Label className="bg-blue-200">{label}</Label>
      <Input
        placeholder={placeholder}
        value={inputCustomCountValue}
        onChange={(e) => setInputCustomCountValue(e.target.value)}
        className="border border-gray-200"
      />
    </>
  );
};
