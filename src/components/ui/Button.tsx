import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  className,
  href,
  ...props
}) => {
  const baseStyles = "font-body font-medium transition-all duration-300 inline-block text-center";
  
  const variants = {
    primary: "bg-transparent border-2 border-current hover:bg-current hover:text-white",
    secondary: "bg-transparent border-2 border-current hover:bg-current hover:text-white",
    tertiary: "bg-transparent border-2 border-current hover:bg-current hover:text-white",
  };
  
  const sizes = {
    small: "px-6 py-2 text-sm",
    medium: "px-8 py-3 text-base",
    large: "px-10 py-4 text-lg",
  };

  const Component = href ? "a" : "button";
  const extraProps = href ? { href } : {};

  return (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...extraProps}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};
