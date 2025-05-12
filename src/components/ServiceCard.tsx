
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
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  link,
  className,
}) => {
  return (
    <Link to={link}>
      <div
        className={cn(
          "group bg-white h-full rounded-2xl p-6 shadow-sm transition-custom hover:shadow-md hover:border-perself-primary hover:border-opacity-50 border-2 border-transparent",
          className
        )}
      >
        <div className="mb-4 bg-perself-light rounded-full w-14 h-14 flex items-center justify-center text-perself-primary group-hover:bg-perself-primary group-hover:text-white transition-custom">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-perself-primary transition-custom">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center text-perself-primary">
          <span className="mr-2 font-poppins">Learn More</span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
