
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
}) => {
  return (
    <section
      className={cn(
        "relative py-20 md:py-32 flex items-center",
        backgroundImage ? "text-white" : "text-foreground",
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-r from-perself-dark/80 to-perself-dark/50 z-0"
            aria-hidden="true"
          ></div>
          <img
            src={backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          {subtitle && (
            <span className="inline-block mb-3 text-perself-light font-poppins text-lg">
              {subtitle}
            </span>
          )}
          <h1 className="mb-6 font-bold leading-tight animate-fade-up">{title}</h1>
          {description && (
            <p className="text-lg md:text-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {description}
            </p>
          )}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {ctaText && ctaLink && (
              <Link to={ctaLink}>
                <Button className="bg-perself-primary hover:bg-perself-dark text-white font-poppins font-medium py-6 px-8 rounded-full">
                  {ctaText}
                </Button>
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link to={secondaryCtaLink}>
                <Button variant="outline" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white text-white font-poppins font-medium py-6 px-8 rounded-full">
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
