import { cn } from "@lens/base/lib/utils";
import React, { JSX } from "react";
import { textVariants } from "./variants";

type Variant = keyof typeof textVariants;
type AsProp = keyof JSX.IntrinsicElements;

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: Variant;
  as?: AsProp;
}

const Text = ({
  variant = "body",
  className,
  children,
  ...props
}: TypographyProps) => {
  const Component = "label";
  const styles = textVariants[variant] || "";

  return (
    <Component className={cn(styles, className)} {...props}>
      {children}
    </Component>
  );
};

export { Text };
