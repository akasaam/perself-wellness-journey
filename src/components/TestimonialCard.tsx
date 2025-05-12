
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
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  quote,
  rating = 5,
  image,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-2xl shadow-sm transition-custom hover:shadow-md",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-perself-light text-perself-primary flex items-center justify-center mr-3">
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
      <blockquote className="text-muted-foreground italic">"{quote}"</blockquote>
    </div>
  );
};

export default TestimonialCard;
