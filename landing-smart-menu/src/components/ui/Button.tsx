import Link from "next/link";
import { cn } from "@/lib/cn";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

// Polymorphic props: requires href for Link, allows onClick/etc for button
type LinkProps = ButtonBaseProps & {
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ActionProps = ButtonBaseProps & {
  href?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = LinkProps | ActionProps;

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-300 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-95";

  const variants = {
    primary:
      "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30",
    secondary:
      "bg-secondary text-primary hover:bg-secondary/80 hover:-translate-y-0.5",
    outline:
      "border border-primary/20 bg-transparent text-primary hover:bg-primary/5 hover:border-primary/50",
    ghost: "bg-transparent text-primary hover:bg-secondary hover:text-accent",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-12 px-8 text-sm",
    lg: "h-14 px-10 text-base",
  };

  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (props.href) {
    const { href, ...rest } = props as LinkProps;
    return (
      <Link href={href} className={combinedClassName} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...(props as ActionProps)}>
      {children}
    </button>
  );
}
