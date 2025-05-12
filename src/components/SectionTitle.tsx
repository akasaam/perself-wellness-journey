
import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className,
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
        <span className="inline-block mb-2 text-perself-primary font-poppins uppercase tracking-wider text-sm">
          {subtitle}
        </span>
      )}
      <h2 className="font-bold">{title}</h2>
      <div className={cn(
        "h-1 w-24 bg-perself-primary mt-4",
        centered ? "mx-auto" : ""
      )}></div>
    </div>
  );
};

export default SectionTitle;
