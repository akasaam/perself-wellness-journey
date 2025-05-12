
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
  variant = "default",
}) => {
  return (
    <section
      className={cn(
        "relative py-24 md:py-36 flex items-center",
        backgroundImage ? "text-white" : "text-foreground",
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-r from-perself-dark/90 via-perself-dark/70 to-perself-dark/60 z-0"
            aria-hidden="true"
          ></div>
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {variant === "gradient" && !backgroundImage && (
        <div className="absolute inset-0 magic-gradient opacity-10" aria-hidden="true"></div>
      )}

      <div className="container-custom relative z-10">
        <div className={cn(
          "max-w-2xl",
          variant === "centered" && "mx-auto text-center"
        )}>
          {subtitle && (
            <span className={cn(
              "inline-block mb-3 font-poppins text-lg md:text-xl",
              backgroundImage ? "text-perself-light" : "text-perself-primary"
            )}>
              {subtitle}
            </span>
          )}
          <h1 className="mb-6 font-bold leading-tight animate-fade-up">
            {title.split(' ').map((word, i) => (
              <span key={i} className="relative inline-block">
                <span className="relative z-10">{word} </span>
                {variant === "gradient" && i === title.split(' ').length - 1 && (
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-perself-primary/20 -z-0" aria-hidden="true"></span>
                )}
              </span>
            ))}
          </h1>
          {description && (
            <p className="text-lg md:text-xl mb-8 animate-fade-up opacity-90" style={{ animationDelay: "0.2s" }}>
              {description}
            </p>
          )}
          <div className={cn(
            "flex flex-wrap gap-4 animate-fade-up",
            variant === "centered" && "justify-center"
          )} style={{ animationDelay: "0.3s" }}>
            {ctaText && ctaLink && (
              <Link to={ctaLink}>
                <Button className="magic-button">
                  {ctaText}
                </Button>
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link to={secondaryCtaLink}>
                <Button variant="outline" className="frosted-glass hover:bg-white/30 border-white/80 text-foreground font-poppins font-medium py-6 px-8 rounded-full hover:border-perself-primary">
                  {secondaryCtaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
