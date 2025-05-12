
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  variant?: "default" | "gradient" | "minimal";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className,
  variant = "default",
}) => {
  return (
    <div
      className={cn(
        "mb-10",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <p className={cn(
          "text-sm font-medium tracking-wider uppercase mb-2",
          variant === "gradient" ? "text-primary" : 
          variant === "minimal" ? "text-muted-foreground" : 
          "text-primary"
        )}>
          {subtitle}
        </p>
      )}
      <h2 className={cn(
        "text-3xl font-semibold tracking-tight",
        variant === "gradient" ? "bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" : ""
      )}>
        {title}
      </h2>
      {variant !== "gradient" && (
        <div className={cn(
          "h-1 w-16 mt-4 rounded-full bg-primary/30",
          centered ? "mx-auto" : ""
        )}></div>
      )}
    </div>
  );
};

export default SectionTitle;
