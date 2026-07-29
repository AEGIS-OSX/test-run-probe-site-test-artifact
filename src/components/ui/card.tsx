import type { HTMLAttributes, ReactNode } from "react";

type CardPadding = "sm" | "md" | "lg";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding;
  children: ReactNode;
}

const paddingStyles: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

function Card({ padding = "md", className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] ${paddingStyles[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

Card.displayName = "Card";

export { Card };
export type { CardProps, CardPadding };
