// Button type definitions
export type ButtonVariant = 
  | "primary" 
  | "secondary" 
  | "outline" 
  | "ghost" 
  | "white" 
  | "white-outline";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: ButtonType;
  href?: string;
  disabled?: boolean;
  class?: string;
}
