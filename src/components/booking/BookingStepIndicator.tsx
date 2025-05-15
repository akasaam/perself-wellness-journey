
import React from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBookingContext } from "@/contexts/BookingContext";
import { Progress } from "@/components/ui/progress";

const BookingStepIndicator: React.FC = () => {
  const { step } = useBookingContext();
  
  // Calculate progress percentage
  const progressPercentage = ((step - 1) / 3) * 100;
  
  const steps = [
    { number: 1, label: "Select Service" },
    { number: 2, label: "Choose Practitioner" },
    { number: 3, label: "Pick Date & Time" },
    { number: 4, label: "Your Information" },
  ];

  return (
    <div className="mb-10 relative">
      {/* Progress bar using shadcn UI Progress component */}
      <div className="px-4 md:px-12 mb-7">
        <Progress value={progressPercentage} className="h-1 bg-gray-200" />
      </div>
      
      {/* Step indicators */}
      <div className="flex justify-between px-4 md:px-12">
        {steps.map((stepItem) => (
          <div
            key={stepItem.number}
            className={cn(
              "flex flex-col items-center relative -mt-5",
              step >= stepItem.number ? "text-perself-primary" : "text-gray-400"
            )}
          >
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                step > stepItem.number
                  ? "bg-perself-primary text-white"
                  : step === stepItem.number
                  ? "bg-white text-perself-primary border-2 border-perself-primary"
                  : "bg-white text-gray-400 border-2 border-gray-300"
              )}
            >
              {step > stepItem.number ? (
                <CheckCircle className="h-5 w-5" />
              ) : (
                <span>{stepItem.number}</span>
              )}
            </div>
            <span className="text-xs font-medium mt-2 text-center hidden md:block">
              {stepItem.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingStepIndicator;
