
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  className?: string;
  variant?: "default" | "gradient" | "outline";
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
  variant = "default",
}) => {
  return (
    <Link to={link}>
      <div
        className={cn(
          "group hover-lift magic-card h-full rounded-2xl p-6 md:p-8 transition-custom relative overflow-hidden",
          variant === "gradient" && "bg-gradient-to-br from-white to-perself-light/30",
          variant === "outline" && "border-2 border-perself-primary/20 hover:border-perself-primary/50",
          className
        )}
      >
        {variant === "gradient" && (
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-perself-primary/10 rounded-full blur-2xl group-hover:bg-perself-primary/20 transition-all"></div>
        )}
        
        <div className={cn(
          "mb-6 w-16 h-16 rounded-2xl flex items-center justify-center text-perself-primary relative animate-pulse-glow",
          variant === "gradient" 
            ? "bg-white shadow-md" 
            : "bg-perself-light group-hover:bg-perself-primary group-hover:text-white transition-custom"
        )}>
          <span className="text-2xl">{icon}</span>
        </div>
        
        <h3 className={cn(
          "text-xl font-outfit font-semibold mb-3 group-hover:text-perself-primary transition-custom",
          variant === "gradient" && "bg-gradient-to-r from-perself-dark to-perself-primary bg-clip-text text-transparent"
        )}>
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <div className={cn(
          "flex items-center font-poppins",
          variant === "gradient" ? "text-perself-dark" : "text-perself-primary"
        )}>
          <span className="mr-2 font-medium">Learn More</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
        </div>
        
        {variant === "outline" && (
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-perself-primary to-perself-secondary group-hover:w-full transition-all duration-500 ease-out"></div>
        )}
      </div>
    </Link>
  );
};

export default ServiceCard;
