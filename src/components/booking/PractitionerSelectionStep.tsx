
import React from "react";
import { cn } from "@/lib/utils";
import { useBookingContext } from "@/contexts/BookingContext";

const PractitionerSelectionStep: React.FC = () => {
  const { practitioner, setPractitioner, getPractitionersByService } = useBookingContext();
  const practitioners = getPractitionersByService();

  return (
    <div className="grid gap-6">
      {practitioners.map((p) => (
        <div
          key={p.id}
          className={cn(
            "border-2 rounded-lg p-4 cursor-pointer transition-custom",
            practitioner === p.id
              ? "border-perself-primary bg-perself-light"
              : "border-transparent hover:border-gray-200"
          )}
          onClick={() => setPractitioner(p.id)}
        >
          <div className="flex items-center">
            <div
              className="w-12 h-12 rounded-full bg-perself-primary/20 
                        text-perself-primary flex items-center justify-center mr-4"
            >
              <span className="text-xl font-bold">{p.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-perself-primary text-sm">{p.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PractitionerSelectionStep;
