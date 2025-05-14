
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { BookingProvider, useBookingContext } from "@/contexts/BookingContext";
import BookingStepIndicator from "@/components/booking/BookingStepIndicator";
import BookingForm from "@/components/booking/BookingForm";
import BookingConfirmation from "@/components/booking/BookingConfirmation";

const BookingContent: React.FC = () => {
  const { isBooked } = useBookingContext();

  if (isBooked) {
    return <BookingConfirmation />;
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionTitle
          title="Schedule Your Appointment"
          subtitle="Booking Process"
          centered
        />

        <div className="max-w-7xl mx-auto px-4 w-full">
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
        backgroundImage="https://images.unsplash.com/photo-1606836591695-4d58a73acba9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      <BookingProvider>
        <BookingContent />
      </BookingProvider>
    </Layout>
  );
};

export default Booking;
