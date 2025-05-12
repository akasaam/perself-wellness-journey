
import React, { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in Touch"
        description="Have questions or ready to start your healing journey? Reach out to us today."
        backgroundImage="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-custom text-center">
              <div className="mx-auto w-16 h-16 bg-perself-light rounded-full flex items-center justify-center text-perself-primary mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">
                Speak directly with our team
              </p>
              <a
                href="tel:+11234567890"
                className="text-perself-primary font-medium hover:text-perself-dark"
              >
                +1 (123) 456-7890
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-custom text-center">
              <div className="mx-auto w-16 h-16 bg-perself-light rounded-full flex items-center justify-center text-perself-primary mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">
                Send us a message anytime
              </p>
              <a
                href="mailto:info@perselfmindcare.com"
                className="text-perself-primary font-medium hover:text-perself-dark"
              >
                info@perselfmindcare.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-custom text-center">
              <div className="mx-auto w-16 h-16 bg-perself-light rounded-full flex items-center justify-center text-perself-primary mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground mb-4">
                Come to our wellness center
              </p>
              <address className="not-italic text-perself-primary">
                123 Wellness Street<br />
                Mindful City, MC 12345
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-perself-light">
        <div className="container-custom">
          <SectionTitle
            title="Send Us a Message"
            subtitle="Get in Touch"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-perself-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-perself-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-perself-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-perself-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Booking Question">Booking Question</option>
                      <option value="Service Information">
                        Service Information
                      </option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-perself-primary focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="bg-perself-primary hover:bg-perself-dark"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm h-[500px]">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276293250197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1623309486119!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Perself Mindcare Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
            <SectionTitle title="Office Hours" centered />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-center md:text-left">
                  Weekdays
                </h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Monday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Tuesday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Wednesday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Thursday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-center md:text-left">
                  Weekends
                </h4>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>10:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>

                <div className="mt-8 pt-4 border-t">
                  <h4 className="font-semibold mb-2">Holiday Schedule</h4>
                  <p className="text-sm text-muted-foreground">
                    Please note that our office hours may vary during holidays.
                    Contact us to confirm our availability during specific
                    holidays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
