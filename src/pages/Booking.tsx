
import React, { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon, CheckCircle, Brain, Heart } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [service, setService] = useState<string | undefined>(undefined);
  const [practitioner, setPractitioner] = useState<string | undefined>(undefined);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState(1);
  const [reminders, setReminders] = useState({
    email: true,
    calendar: false,
    whatsapp: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleNextStep = () => {
    if (step === 1 && !service) {
      toast({
        title: "Please select a service",
        description: "You need to select a service to continue",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 2 && !practitioner) {
      toast({
        title: "Please select a practitioner",
        description: "You need to select a practitioner to continue",
        variant: "destructive",
      });
      return;
    }
    
    if (step === 3 && (!date || !timeSlot)) {
      toast({
        title: "Please select date and time",
        description: "You need to select both a date and time slot to continue",
        variant: "destructive",
      });
      return;
    }
    
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      toast({
        title: "Booking Successful!",
        description: `Your appointment has been scheduled for ${format(date!, "MMMM d, yyyy")} at ${timeSlot}.`,
      });
    }, 1500);
  };

  const getPractitionersByService = () => {
    switch (service) {
      case "counselling":
        return [
          { id: "lisa", name: "Dr. Lisa Chen", title: "Clinical Psychologist" },
          { id: "john", name: "John Williams", title: "Therapist" },
          { id: "amara", name: "Dr. Amara Johnson", title: "Child Psychologist" },
        ];
      case "healing":
        return [
          { id: "michael", name: "Michael Roberts", title: "Reiki Master" },
          { id: "sarah", name: "Sarah Lee", title: "Crystal Healer" },
          { id: "david", name: "David Kim", title: "NLP Practitioner" },
        ];
      case "assessment":
        return [
          { id: "james", name: "Dr. James Miller", title: "Assessment Specialist" },
          { id: "emily", name: "Emily Wilson", title: "Psychological Evaluator" },
        ];
      default:
        return [];
    }
  };

  if (isBooked) {
    return (
      <Layout>
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
                      <p className="font-medium">
                        {
                          getPractitionersByService().find(
                            (p) => p.id === practitioner
                          )?.name
                        }
                      </p>
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
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Book Your Session"
        subtitle="Schedule an Appointment"
        description="Take the first step towards your healing journey by scheduling a session with one of our experienced practitioners."
        backgroundImage="https://images.unsplash.com/photo-1606836591695-4d58a73acba9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Schedule Your Appointment"
            subtitle="Booking Process"
            centered
          />

          <div className="max-w-3xl mx-auto">
            {/* Step Indicators */}
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
                    {step > i ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <span>{i}</span>
                    )}
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

            {/* Booking Form */}
            <Card className="border-2">
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
                {step === 1 && (
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
                      <div className="flex items-start">
                        <Brain className="h-6 w-6 text-perself-primary mr-4" />
                        <div>
                          <h3 className="font-semibold mb-1">
                            Counselling & Therapy
                          </h3>
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
                      <div className="flex items-start">
                        <Heart className="h-6 w-6 text-perself-primary mr-4" />
                        <div>
                          <h3 className="font-semibold mb-1">
                            Healing Modalities
                          </h3>
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
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-perself-primary mr-4" />
                        <div>
                          <h3 className="font-semibold mb-1">
                            Assessments & Tools
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            Professional evaluations and interactive tools to
                            assess your mental wellbeing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="grid gap-6">
                    {getPractitionersByService().map((p) => (
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
                            <span className="text-xl font-bold">
                              {p.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <h3 className="font-semibold">{p.name}</h3>
                            <p className="text-perself-primary text-sm">{p.title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {step === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label className="mb-2 block">Select Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                            disabled={(date) => date < new Date()}
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label className="mb-2 block">Select Time</Label>
                      <Select value={timeSlot} onValueChange={setTimeSlot}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="notes">Notes (Optional)</Label>
                        <textarea
                          id="notes"
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          className="w-full border rounded-md p-2 resize-none"
                        ></textarea>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Appointment Reminders</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="emailReminder"
                              checked={reminders.email}
                              onChange={() =>
                                setReminders({
                                  ...reminders,
                                  email: !reminders.email,
                                })
                              }
                              className="mr-2"
                            />
                            <Label htmlFor="emailReminder" className="cursor-pointer">
                              Email Reminder
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="calendarReminder"
                              checked={reminders.calendar}
                              onChange={() =>
                                setReminders({
                                  ...reminders,
                                  calendar: !reminders.calendar,
                                })
                              }
                              className="mr-2"
                            />
                            <Label
                              htmlFor="calendarReminder"
                              className="cursor-pointer"
                            >
                              Add to Google Calendar
                            </Label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="whatsappReminder"
                              checked={reminders.whatsapp}
                              onChange={() =>
                                setReminders({
                                  ...reminders,
                                  whatsapp: !reminders.whatsapp,
                                })
                              }
                              className="mr-2"
                            />
                            <Label
                              htmlFor="whatsappReminder"
                              className="cursor-pointer"
                            >
                              WhatsApp Reminder
                            </Label>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">Booking Summary</h4>
                            <p className="text-sm text-muted-foreground">
                              Review your booking details
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-lg text-perself-primary">
                              {service === "counselling"
                                ? "Counselling & Therapy"
                                : service === "healing"
                                ? "Healing Modalities"
                                : "Assessments & Tools"}
                            </p>
                            <p className="text-sm">
                              with{" "}
                              {
                                getPractitionersByService().find(
                                  (p) => p.id === practitioner
                                )?.name
                              }
                            </p>
                            <p className="text-sm">
                              {date && format(date, "MMMM d, yyyy")} at {timeSlot}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
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
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
