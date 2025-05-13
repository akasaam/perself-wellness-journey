import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  className?: string;
  variant?: "default" | "centered" | "gradient";
}
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  className,
  variant = "default"
}) => {
  return <section className={cn("relative py-24 md:py-32 flex items-center", backgroundImage ? "text-white" : "text-foreground", className)}>
      {backgroundImage && <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true"></div>
          <img src={backgroundImage} alt="Hero background" className="w-full h-full object-cover" />
        </div>}

      {variant === "gradient" && !backgroundImage && <div className="absolute inset-0 bg-gradient-to-r from-muted/50 to-background" aria-hidden="true"></div>}

      <div className="container relative z-10">
        <div className={cn("max-w-2xl space-y-6", variant === "centered" && "mx-auto text-center")}>
          {subtitle && <p className={cn("text-sm font-medium tracking-wider uppercase", backgroundImage ? "text-primary-foreground/80" : "text-primary")}>
              {subtitle}
            </p>}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h1>
          {description && <p className="text-lg text-muted-foreground">
              {description}
            </p>}
          <div className={cn("flex flex-wrap gap-4 pt-2", variant === "centered" && "justify-center")}>
            {ctaText && ctaLink && <Link to={ctaLink}>
                <Button size="lg">
                  {ctaText}
                </Button>
              </Link>}
            {secondaryCtaText && secondaryCtaLink && <Link to={secondaryCtaLink}>
                <Button variant="outline" size="lg" className="text-gray-800">
                  {secondaryCtaText}
                </Button>
              </Link>}
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;