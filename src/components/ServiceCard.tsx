
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
    <Link to={link} className="block h-full">
      <Card className={cn(
        "h-full transition-all hover:shadow-md overflow-hidden",
        variant === "gradient" && "bg-gradient-to-br from-muted to-background",
        variant === "outline" && "border-primary/20 hover:border-primary/50",
        className
      )}>
        <CardHeader>
          <div className={cn(
            "w-12 h-12 rounded-md flex items-center justify-center mb-4 text-primary bg-primary/10",
            variant === "gradient" ? "bg-background" : ""
          )}>
            <span className="text-xl">{icon}</span>
          </div>
          <h3 className="text-xl font-medium">{title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-primary font-medium text-sm">
            <span>Learn More</span>
            <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
