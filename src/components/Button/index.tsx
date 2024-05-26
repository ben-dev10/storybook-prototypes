import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semi-bold",
    "focus:outline-none",
    "disabled:cursor-bot-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "bg-blue-500",
        outline: "border-2",
        ghost: "transition-colors duration-200",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-6 text-lg",
      },
      colorScheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-500 hover:bg-primary-600",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className:
          "text-primary-500 border-primary-500 bg-transparent hover:bg-primary-100",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        className: "text-primary-600 bg-transparent hover:bg-primary-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

// const defaultStyles = "text-white bg-blue-700 text-[13px] px-4 p-[9px] rounded-md hover:bg-blue-600";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorScheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorScheme, className }))}
        {...props}
      />
    );
  }
);

export default Button;
