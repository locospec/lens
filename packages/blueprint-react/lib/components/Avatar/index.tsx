import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../utils";

export interface AvatarProps {
  variant?: "circle" | "square";
  size?: "sm" | "md" | "lg";
  image?: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  fallback?: string;
  className?: string;
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const variantClasses = {
  circle: "rounded-full",
  square: "rounded-md",
};

const Avatar = ({
  variant = "circle",
  size = "md",
  image,
  fallback,
  className,
}: AvatarProps) => {
  const initials = fallback
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex shrink-0 overflow-hidden",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {image && (
        <AvatarPrimitive.Image
          src={image.src}
          alt={image.alt || fallback || "Avatar"}
          className="w-full h-full aspect-square"
        />
      )}
      <AvatarPrimitive.Fallback className="flex items-center justify-center w-full h-full rounded-full bg-muted">
        {initials || "??"}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

export { Avatar };
