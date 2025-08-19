import type React from "react";
import Icon from "./icon";
import { cva } from "class-variance-authority";

export const buttonIconVariants = cva(`
  inline-flex items-center justify-center cursor-pointer transition group
`, {
  variants: {
    variant: {
      primary: "bg-green-base hover:bg-green-dark",
      secondary: "bg-pink-base hover:bg-pink-dark",
      tertiary: "bg-transparent hover:bg-gray-200"
    },
    size: {
      sm: "w-6 h-6 p-1 rounded"
    },
    disabled: {
      true: "opacity-50 pointer-events-none"
    }
  }
})

interface ButtonIconProps extends Omit<React.ComponentProps<"button">, "size" | "disabled"> {
  icon: React.ComponentProps<typeof Icon>["svg"]
}


export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon: IconComponent,
  ...props
}) {
  return <button> <Icon svg={} /> </button>
}