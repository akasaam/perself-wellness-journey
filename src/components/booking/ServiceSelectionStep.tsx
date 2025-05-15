
import React from "react";
import { Brain, Heart, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBookingContext } from "@/contexts/BookingContext";

const ServiceSelectionStep: React.FC = () => {
  const { service, setService } = useBookingContext();

  return (
    <div className="grid gap-6">
      <div
        className={cn(
          "border-2 rounded-lg p-4 cursor-pointer transition-custom",
          service === "counselling"
            ? "border-perself-primary bg-perself-light"
            : "border-transparent hover:border-gray-200"
        )}
        onClick={() => setService("counselling")}
      >
        <div className="flex items-center">
          <Brain className="h-6 w-6 text-perself-primary mr-4" />
          <div>
            <h3 className="font-semibold mb-1">Counselling & Therapy</h3>
            <p className="text-muted-foreground text-sm">
              Professional therapy sessions for anxiety, depression,
              stress, PTSD, and more
            </p>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-2 rounded-lg p-4 cursor-pointer transition-custom",
          service === "healing"
            ? "border-perself-primary bg-perself-light"
            : "border-transparent hover:border-gray-200"
        )}
        onClick={() => setService("healing")}
      >
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-perself-primary mr-4" />
          <div>
            <h3 className="font-semibold mb-1">Healing Modalities</h3>
            <p className="text-muted-foreground text-sm">
              Alternative healing approaches including Reiki,
              Crystal Healing, and more
            </p>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-2 rounded-lg p-4 cursor-pointer transition-custom",
          service === "assessment"
            ? "border-perself-primary bg-perself-light"
            : "border-transparent hover:border-gray-200"
        )}
        onClick={() => setService("assessment")}
      >
        <div className="flex items-center">
          <CheckCircle className="h-6 w-6 text-perself-primary mr-4" />
          <div>
            <h3 className="font-semibold mb-1">Assessments & Tools</h3>
            <p className="text-muted-foreground text-sm">
              Professional evaluations and interactive tools to
              assess your mental wellbeing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelectionStep;
