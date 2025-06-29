import type React from "react";
import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva("inline-flex items-center justify-center rounded-full", {
  variants: {
    variant: {
      primary: "bg-green-light",
      secondary: "bg-pink-light"
    },
    size: {
      sm: "py-0.5 px-2"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "sm"
  }
});

interface BadgeProps extends React.ComponentProps<"div"> {}

export default function Badge({
  variant,
  size,
  className,
  children,
}: BadgeProps) {

  return(
    <div>
      <Text variant="body-sm-bold">{children}</Text>
    </div>
  );

}