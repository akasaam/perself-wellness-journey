
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
        "mb-12",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <div className="relative mb-2 inline-block">
          <span className={cn(
            "inline-block font-outfit uppercase tracking-wider text-sm md:text-base",
            variant === "gradient" ? "bg-gradient-to-r from-perself-primary to-perself-secondary bg-clip-text text-transparent font-bold" : 
            variant === "minimal" ? "text-perself-secondary" : 
            "text-perself-primary"
          )}>
            {subtitle}
          </span>
          {variant !== "minimal" && (
            <div className={cn(
              "absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100",
              centered ? "left-0 right-0 mx-auto" : "",
              variant === "gradient" ? "bg-gradient-to-r from-perself-primary to-perself-secondary" : "bg-perself-primary"
            )}></div>
          )}
        </div>
      )}
      <h2 className={cn(
        "font-outfit font-bold",
        variant === "gradient" ? "bg-gradient-to-r from-perself-primary to-perself-secondary bg-clip-text text-transparent" : ""
      )}>
        {title}
      </h2>
      {variant !== "gradient" && (
        <div className={cn(
          "h-1 w-24 mt-4 rounded-full",
          centered ? "mx-auto" : "",
          variant === "minimal" ? "bg-perself-secondary/30" : "bg-gradient-to-r from-perself-primary to-perself-primary/50"
        )}></div>
      )}
    </div>
  );
};

export default SectionTitle;
