
import React, { createContext, useContext, useState, ReactNode } from "react";

type Practitioner = {
  id: string;
  name: string;
  title: string;
};

type Reminders = {
  email: boolean;
  calendar: boolean;
  whatsapp: boolean;
};

interface BookingContextType {
  step: number;
  setStep: (step: number) => void;
  service: string | undefined;
  setService: (service: string | undefined) => void;
  practitioner: string | undefined;
  setPractitioner: (practitioner: string | undefined) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  timeSlot: string | undefined;
  setTimeSlot: (timeSlot: string | undefined) => void;
  firstName: string;
  setFirstName: (firstName: string) => void;
  lastName: string;
  setLastName: (lastName: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  notes: string;
  setNotes: (notes: string) => void;
  reminders: Reminders;
  setReminders: (reminders: Reminders) => void;
  isSubmitting: boolean;
  setIsSubmitting: (isSubmitting: boolean) => void;
  isBooked: boolean;
  setIsBooked: (isBooked: boolean) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleSubmit: (e: React.FormEvent) => void;
  getPractitionersByService: () => Practitioner[];
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }
  return context;
};

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<string | undefined>(undefined);
  const [practitioner, setPractitioner] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [reminders, setReminders] = useState({
    email: true,
    calendar: false,
    whatsapp: false,
  });

  const { toast } = useToast();

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

  const contextValue = {
    step,
    setStep,
    service,
    setService,
    practitioner,
    setPractitioner,
    date,
    setDate,
    timeSlot,
    setTimeSlot,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    notes,
    setNotes,
    reminders,
    setReminders,
    isSubmitting,
    setIsSubmitting,
    isBooked,
    setIsBooked,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
    getPractitionersByService,
  };

  return <BookingContext.Provider value={contextValue}>{children}</BookingContext.Provider>;
};

// Fix missing import
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
