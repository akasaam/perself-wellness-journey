
import React from "react";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useBookingContext } from "@/contexts/BookingContext";

const BookingStepIndicator: React.FC = () => {
  const { step } = useBookingContext();

  return (
    <div className="flex justify-between mb-10 relative">
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={cn(
            "relative z-10 flex flex-col items-center",
            step >= i ? "text-perself-primary" : "text-gray-400"
          )}
        >
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center mb-2",
              step > i
                ? "bg-perself-primary text-white"
                : step === i
                ? "bg-white text-perself-primary border-2 border-perself-primary"
                : "bg-white text-gray-400 border-2 border-gray-300"
            )}
          >
            {step > i ? <CheckCircle className="h-5 w-5" /> : <span>{i}</span>}
          </div>
          <span className="text-xs font-medium hidden md:block">
            {i === 1
              ? "Select Service"
              : i === 2
              ? "Choose Practitioner"
              : i === 3
              ? "Pick Date & Time"
              : "Your Information"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BookingStepIndicator;
