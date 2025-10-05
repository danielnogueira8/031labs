"use client";

import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export interface SectionHeadingProps extends ComponentPropsWithoutRef<"header"> {
  badge: string;
  heading: string;
  description?: string;
  size?: "sm" | "md" | "lg" | "xl";
  align?: "left" | "center" | "right";
  headingClassName?: string;
  badgeClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  showDescriptionToScreenReaders?: boolean;
}

const sizeVariants = {
  sm: { badge: "text-xs px-3 py-1", heading: "text-xl sm:text-2xl", description: "text-sm", spacing: "space-y-2" },
  md: { badge: "text-xs sm:text-sm px-4 py-1 sm:px-6", heading: "text-2xl sm:text-3xl md:text-4xl", description: "text-sm sm:text-base", spacing: "space-y-1" },
  lg: { badge: "text-sm px-4 py-1 sm:px-6", heading: "text-3xl sm:text-4xl md:text-5xl", description: "text-base", spacing: "space-y-4 sm:space-y-6" },
  xl: { badge: "text-sm px-6 py-1 sm:px-8", heading: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl", description: "text-lg sm:text-xl", spacing: "space-y-6 sm:space-y-8" },
} as const;

const alignVariants = { left: "text-left", center: "text-center", right: "text-right" } as const;

export function SectionHeading({
  badge,
  heading,
  description,
  size = "md",
  align = "center",
  className,
  headingClassName,
  badgeClassName,
  as: Component = "h2",
  showDescriptionToScreenReaders = false,
  ...props
}: SectionHeadingProps) {
  const variant = sizeVariants[size];
  const alignment = alignVariants[align];

  return (
    <header className={cn("z-10", variant.spacing, alignment, className)} {...props}>
      <div className={cn("bg-white/5 w-fit rounded-3xl border border-white/10", variant.badge, align === "center" && "md:mx-auto", badgeClassName)}>
        <p className="text-foreground/70 align-middle font-medium">{badge}</p>
      </div>
      <Component className={cn("font-semibold", variant.heading, align === "center" && "md:mx-auto", headingClassName)}>
        {heading}
      </Component>
      {description && (
        <p className={cn("text-foreground/70", variant.description, align === "center" && "md:mx-auto", !showDescriptionToScreenReaders && "sr-only")}>{description}</p>
      )}
    </header>
  );
}


