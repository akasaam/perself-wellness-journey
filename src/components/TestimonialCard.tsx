
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  title?: string;
  quote: string;
  rating?: number;
  image?: string;
  className?: string;
  variant?: "default" | "minimal" | "highlight";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  quote,
  rating = 5,
  image,
  className,
  variant = "default",
}) => {
  return (
    <div
      className={cn(
        "magic-card relative group overflow-hidden",
        variant === "highlight" && "border-perself-primary/30 bg-gradient-to-br from-white to-perself-light/30",
        variant === "minimal" && "bg-transparent border border-perself-primary/10 hover:bg-white hover:shadow-sm",
        className
      )}
    >
      {variant === "highlight" && (
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-perself-primary/10 rounded-full blur-3xl group-hover:bg-perself-primary/20 transition-all"></div>
      )}
      
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center">
          {image ? (
            <div className="relative mr-4">
              <div className="absolute inset-0 rounded-full bg-perself-primary/20 blur-md -z-10 group-hover:bg-perself-primary/30 transition-all"></div>
              <img
                src={image}
                alt={name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-full bg-perself-light text-perself-primary flex items-center justify-center mr-4 border-2 border-white shadow-sm">
              <span className="text-xl font-bold">{name.charAt(0)}</span>
            </div>
          )}
          <div>
            <h4 className="font-semibold text-base">{name}</h4>
            {title && <p className="text-sm text-muted-foreground">{title}</p>}
          </div>
        </div>
        <div className="flex">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Star
                key={i}
                size={16}
                className={cn(
                  i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
                )}
              />
            ))}
        </div>
      </div>
      
      <blockquote className={cn(
        "text-muted-foreground italic relative z-10",
        variant === "highlight" && "text-perself-dark"
      )}>
        <span className="text-4xl absolute -top-2 -left-1 font-serif text-perself-primary/20">"</span>
        <span className="relative">{quote}</span>
        <span className="text-4xl absolute -bottom-8 -right-1 font-serif text-perself-primary/20">"</span>
      </blockquote>
      
      {variant === "default" && (
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-perself-primary to-perself-secondary group-hover:w-full transition-all duration-500 ease-out"></div>
      )}
    </div>
  );
};

export default TestimonialCard;
