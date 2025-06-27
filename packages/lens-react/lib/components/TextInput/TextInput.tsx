import React, { useState, useEffect, useRef } from "react";
import { Input } from "@lens/base/components/ui/input";

export interface TextInputInterface {
  placeholder?: string;
  value: string;
  onUpdateCallback: (val: string) => void;
  className?: string;
  debounceMs?: number;
}

const TextInput = ({
  placeholder = "Value",
  value = "",
  onUpdateCallback,
  className = "",
  debounceMs = 300,
}: TextInputInterface) => {
  const [internalValue, setInternalValue] = useState(value);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setInternalValue(next);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      onUpdateCallback(next);
    }, debounceMs);
  };

  return (
    <Input
      placeholder={placeholder}
      value={internalValue}
      onChange={handleChange}
      type="text"
      className={className}
    />
  );
};

export default TextInput;
