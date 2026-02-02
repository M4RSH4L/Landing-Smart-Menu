import Link from "next/link";

import { cn } from "@/lib/cn";

import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-tight transition",
        variant === "primary" &&
          "bg-zinc-950 text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950",
        variant === "secondary" &&
          "border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950",
        className,
      )}
    >
      {children}
    </Link>
  );
}
