
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { BookingProvider, useBookingContext } from "@/contexts/BookingContext";
import BookingStepIndicator from "@/components/booking/BookingStepIndicator";
import BookingForm from "@/components/booking/BookingForm";
import BookingConfirmation from "@/components/booking/BookingConfirmation";
import { AspectRatio } from "@/components/ui/aspect-ratio"; 

const BookingContent: React.FC = () => {
  const { isBooked } = useBookingContext();

  if (isBooked) {
    return <BookingConfirmation />;
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle
          title="Schedule Your Appointment"
          subtitle="Booking Process"
          centered
          className="mb-12"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <AspectRatio ratio={16/9} className="bg-muted overflow-hidden rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Booking consultation" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className="lg:col-span-1 bg-perself-light/30 p-6 rounded-lg shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-medium mb-4 text-perself-primary">Why Book With Us?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-perself-primary"></span>
                <span>Experienced practitioners with proven results</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-perself-primary"></span>
                <span>Personalized treatment plans for your needs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-perself-primary"></span>
                <span>Flexible scheduling including evenings & weekends</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-perself-primary"></span>
                <span>Virtual and in-person session options</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <BookingStepIndicator />
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

const Booking: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Book Your Session"
        subtitle="Schedule an Appointment"
        description="Take the first step towards your healing journey by scheduling a session with one of our experienced practitioners."
        backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      <BookingProvider>
        <BookingContent />
      </BookingProvider>
    </Layout>
  );
};

export default Booking;
