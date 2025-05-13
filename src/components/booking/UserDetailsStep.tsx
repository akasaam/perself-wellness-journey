
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { useBookingContext } from "@/contexts/BookingContext";

const UserDetailsStep: React.FC = () => {
  const {
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
    handleSubmit,
    service,
    date,
    timeSlot,
    getPractitionersByService,
    practitioner,
  } = useBookingContext();

  const selectedPractitioner = getPractitionersByService().find(
    (p) => p.id === practitioner
  );

  return (
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
                with {selectedPractitioner?.name}
              </p>
              <p className="text-sm">
                {date && format(date, "MMMM d, yyyy")} at {timeSlot}
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserDetailsStep;
