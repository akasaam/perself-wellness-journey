
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
  variant = "default"
}) => {
  return (
    <Card 
      className={cn(
        "h-full transition-all hover:shadow-md", 
        variant === "highlight" && "bg-gradient-to-br from-card to-muted", 
        variant === "minimal" && "bg-transparent border-primary/10 hover:bg-card", 
        className
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="mr-4 h-10 w-10">
              <AvatarImage 
                src={image || `https://i.pravatar.cc/150?u=${name}`} 
                alt={name} 
              />
              <AvatarFallback className="bg-perself-primary/10 text-perself-primary">
                {name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium text-sm">{name}</h4>
              {title && <p className="text-xs text-muted-foreground">{title}</p>}
            </div>
          </div>
          <div className="flex">
            {Array(5).fill(0).map((_, i) => <Star key={i} size={14} className={cn(i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")} />)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="italic text-muted-foreground text-sm">
          "{quote}"
        </blockquote>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
