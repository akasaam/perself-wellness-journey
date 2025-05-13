
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceSelectionStep from "./ServiceSelectionStep";
import PractitionerSelectionStep from "./PractitionerSelectionStep";
import DateTimeSelectionStep from "./DateTimeSelectionStep";
import UserDetailsStep from "./UserDetailsStep";
import { useBookingContext } from "@/contexts/BookingContext";

const BookingForm: React.FC = () => {
  const { step, handlePreviousStep, handleNextStep, handleSubmit, isSubmitting } = useBookingContext();

  return (
    <Card className="border-2 shadow-sm">
      <CardHeader>
        <CardTitle>
          {step === 1
            ? "Select a Service"
            : step === 2
            ? "Choose a Practitioner"
            : step === 3
            ? "Select Date and Time"
            : "Your Information"}
        </CardTitle>
        <CardDescription>
          {step === 1
            ? "Choose the type of service you're looking for"
            : step === 2
            ? "Select the practitioner you'd like to work with"
            : step === 3
            ? "Pick a convenient date and time for your session"
            : "Provide your contact details to complete the booking"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {step === 1 && <ServiceSelectionStep />}
        {step === 2 && <PractitionerSelectionStep />}
        {step === 3 && <DateTimeSelectionStep />}
        {step === 4 && <UserDetailsStep />}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button variant="outline" onClick={handlePreviousStep}>
            Previous
          </Button>
        )}
        {step < 4 ? (
          <Button
            className="bg-perself-primary hover:bg-perself-dark"
            onClick={handleNextStep}
          >
            Continue
          </Button>
        ) : (
          <Button
            className="bg-perself-primary hover:bg-perself-dark"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Confirm Booking"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BookingForm;
