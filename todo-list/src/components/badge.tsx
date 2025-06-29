import type React from "react";
import Text from "./text";

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