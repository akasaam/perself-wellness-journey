
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
import { Clock, Calendar, CreditCard, CheckCircle } from "lucide-react";

const BookingForm: React.FC = () => {
  const { step, handlePreviousStep, handleNextStep, handleSubmit, isSubmitting } = useBookingContext();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3">
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
      </div>
      
      <div className="lg:col-span-2">
        <div className="bg-[#4C9A7D] text-white p-6 rounded-lg shadow-sm">
          <h3 className="font-bold text-xl mb-6">What to Expect</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Session Duration</h4>
                <p className="text-sm opacity-90">Most sessions are 50-60 minutes, depending on the service selected.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Calendar className="h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Preparing Your Space</h4>
                <p className="text-sm opacity-90">For online sessions, find a quiet, private space where you won't be disturbed.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CreditCard className="h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Payment Options</h4>
                <p className="text-sm opacity-90">We accept all major credit cards, insurance, and other sliding scale options.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Cancellation Policy</h4>
                <p className="text-sm opacity-90">Please provide at least 24 hours notice for cancellations or rescheduling.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium">Confidentiality</h4>
                <p className="text-sm opacity-90">All sessions are completely private and confidential in accordance with ethical standards.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h4 className="mb-3 text-sm">Need help choosing the right service?</h4>
            <Button variant="outline" className="bg-white text-[#4C9A7D] hover:bg-gray-100 border-white">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
