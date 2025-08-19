import type React from "react";
import Icon from "./icon";
import { cva } from "class-variance-authority";

export const buttonIconVariants = cva(`
  inline-flex items-center justify-center cursor-pointer transition group
`)

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