
import React from "react";
import { format } from "date-fns";
import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBookingContext } from "@/contexts/BookingContext";

const BookingConfirmation: React.FC = () => {
  const {
    service,
    practitioner,
    date,
    timeSlot,
    firstName,
    lastName,
    email,
    phone,
    getPractitionersByService,
  } = useBookingContext();

  const selectedPractitioner = getPractitionersByService().find(
    (p) => p.id === practitioner
  );

  return (
    <div className="section-padding">
      <div className="container-custom">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
            <CardDescription>
              Your session has been successfully scheduled
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border rounded-lg p-4 bg-perself-light">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Service</p>
                  <p className="font-medium">
                    {service === "counselling"
                      ? "Counselling & Therapy"
                      : service === "healing"
                      ? "Healing Modalities"
                      : "Assessments & Tools"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Practitioner</p>
                  <p className="font-medium">{selectedPractitioner?.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{date && format(date, "MMMM d, yyyy")}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{timeSlot}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Your Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <span className="text-muted-foreground">Name: </span>
                  {firstName} {lastName}
                </p>
                <p>
                  <span className="text-muted-foreground">Email: </span>
                  {email}
                </p>
                <p>
                  <span className="text-muted-foreground">Phone: </span>
                  {phone}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <p className="text-sm text-center text-muted-foreground">
              A confirmation has been sent to your email. You can reschedule or
              cancel your appointment up to 24 hours beforehand.
            </p>
            <div className="flex space-x-4 justify-center">
              <Button
                variant="outline"
                onClick={() => window.print()}
              >
                Print Details
              </Button>
              <Button
                className="bg-perself-primary hover:bg-perself-dark"
                onClick={() => window.location.href = "/"}
              >
                Return Home
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BookingConfirmation;
