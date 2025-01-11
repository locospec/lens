"use client";

import { ShadAvatar, ShadAvatarImage, ShadAvatarFallback } from "../ShadAvatar";
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
  // Get initials from fallback text for avatar
  const initials = fallback
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  console.log("Blueprint Avatar");

  return (
    <ShadAvatar
      className={cn(sizeClasses[size], variantClasses[variant], className)}
    >
      {image && (
        <ShadAvatarImage
          src={image.src}
          alt={image.alt || fallback || "Avatar"}
          width={image.width}
          height={image.height}
        />
      )}
      <ShadAvatarFallback>{initials || "??"}</ShadAvatarFallback>
    </ShadAvatar>
  );
};

export { Avatar };
