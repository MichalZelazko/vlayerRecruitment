import { cva } from "class-variance-authority";

const buttonStyles = cva(
  "inline-flex items-center justify-center py-3 px-8 rounded-md font-bold transition-colors duration-200",
  {
    variants: {
      variant: {
        primary:
          "text-white bg-secondary-500 hover:bg-secondary-100 focus:ring-secondary-800 focus:ring-2 active:bg-secondary-600 disabled:bg-disabled",
        secondary:
          "bg-base-0 text-base-1000 border-2 border-base-300 hover:border-secondary-300 focus:border-secondary-300 focus:text-secondary-300 active:border-secondary-1000 active:text-secondary-1000 disabled:border-disabled disabled:text-disabled",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button className={buttonStyles({ variant, className })} {...props}>
      {props.children}
    </button>
  );
}
