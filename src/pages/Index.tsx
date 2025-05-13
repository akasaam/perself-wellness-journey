import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Brain, CheckCircle, Calendar } from "lucide-react";
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <HeroSection title="Healing begins with acceptance." description="At Perself Mindcare, we believe in a holistic approach to mental wellness. Our team of experts provides personalized care to guide you towards a healthier and more balanced life." ctaText="Book a Session" ctaLink="/booking" secondaryCtaText="Take a Quiz" secondaryCtaLink="/services" backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" className="min-h-[90vh]" />

      {/* About Section */}
      <section className="section-padding bg-perself-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img alt="Tranquil setting for mental wellness" className="rounded-2xl shadow-lg" src="https://i.pinimg.com/originals/c3/ff/e4/c3ffe4bb8002c5570eeae547c0310d83.gif" />
            </div>
            <div className="animate-fade-up">
              <SectionTitle title="Welcome to Perself Mindcare" subtitle="About Us" />
              <p className="text-lg mb-6">
                Perself Mindcare is a holistic wellness center dedicated to nurturing 
                your mental health through evidence-based therapies and traditional 
                healing practices. We recognize that each person's journey is unique, 
                and we tailor our approaches to your specific needs.
              </p>
              <p className="text-lg mb-8">
                Our mission is to create a safe, empathetic space where you can explore, 
                heal, and grow. We believe that healing begins when you accept the need 
                for help, and we're here to guide you every step of the way.
              </p>
              <Link to="/about">
                <Button className="bg-perself-primary hover:bg-perself-dark">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Our Services" subtitle="How We Can Help" centered className="max-w-2xl mx-auto" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ServiceCard title="Counselling & Therapy" description="One-on-one sessions using evidence-based approaches like CBT and Play Therapy to address issues including PTSD, depression, and anxiety." icon={<Brain size={24} />} link="/services" />
            <ServiceCard title="Healing Modalities" description="Alternative healing approaches including Reiki, Crystal Healing, Floral Therapy, and many other traditional methods to restore balance." icon={<Heart size={24} />} link="/services" />
            <ServiceCard title="Assessments & Tools" description="Interactive questionnaires and tools to help gauge your mental wellbeing, including stress levels and self-esteem evaluations." icon={<CheckCircle size={24} />} link="/services" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-perself-primary to-perself-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards mental wellness today. Schedule a session
            with one of our experienced therapists or healing practitioners.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/booking">
              <Button className="bg-white text-perself-primary hover:bg-perself-light">
                <Calendar className="mr-2" size={18} />
                Book Your Session
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="border-white hover:bg-white/20  text-gray-800">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle title="What Our Clients Say" subtitle="Testimonials" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard name="Sarah Johnson" title="Anxiety Management Client" quote="The CBT techniques I learned at Perself have completely changed how I handle my anxiety. I finally feel like I'm in control of my thoughts." rating={5} image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" />
            <TestimonialCard name="Michael Lee" title="Depression Recovery Client" quote="After my first Reiki session, I felt a shift in my energy that I hadn't experienced before. Combined with therapy, it's been transformative." rating={5} image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" />
            <TestimonialCard name="Emma Rodriguez" title="Stress Management Client" quote="The holistic approach at Perself addressed aspects of my well-being that other therapists missed. I'm grateful for their comprehensive care." rating={5} image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" />
          </div>
        </div>
      </section>

      {/* Blog Preview/Tips Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle title="Wellness Tips & Insights" subtitle="From Our Blog" centered />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm transition-custom hover:shadow-md">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Meditation practice" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  5 Daily Mindfulness Practices
                </h3>
                <p className="text-muted-foreground mb-4">
                  Simple techniques to incorporate mindfulness into your everyday
                  routine for improved mental clarity.
                </p>
                <Link to="/blog/mindfulness-practices" className="text-perself-primary font-medium hover:text-perself-dark">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm transition-custom hover:shadow-md">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Healthy nutrition" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  The Mind-Diet Connection
                </h3>
                <p className="text-muted-foreground mb-4">
                  Exploring how nutrition affects mental health and mood
                  regulation through gut-brain connection.
                </p>
                <Link to="/blog/mind-diet-connection" className="text-perself-primary font-medium hover:text-perself-dark">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm transition-custom hover:shadow-md">
              <img alt="Mental health journaling" className="w-full h-48 object-cover" src="https://i.pinimg.com/736x/96/5b/a2/965ba23717993bcc1f897101952bc9f8.jpg" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Journaling for Mental Health
                </h3>
                <p className="text-muted-foreground mb-4">
                  How keeping a daily journal can help process emotions and
                  increase self-awareness.
                </p>
                <Link to="/blog/journaling-mental-health" className="text-perself-primary font-medium hover:text-perself-dark">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/blog">
              <Button variant="outline" className="border-perself-primary text-perself-primary hover:bg-perself-light">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-perself-accent">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for mental wellness tips, event
              updates, and exclusive resources.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input type="email" placeholder="Your email address" className="px-4 py-3 rounded-full flex-grow max-w-md border-gray-300 focus:border-perself-primary focus:ring focus:ring-perself-light focus:ring-opacity-50" required />
              <Button className="bg-perself-primary hover:bg-perself-dark rounded-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;