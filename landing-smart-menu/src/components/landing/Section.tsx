import { cn } from "@/lib/cn";

import { Container } from "@/components/ui/Container";

import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}
