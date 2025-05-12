
import React, { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, Heart, CheckCircle } from "lucide-react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("counselling");

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="How We Can Help"
        description="Discover our range of mental wellness services, from traditional therapy to holistic healing modalities and interactive tools."
        backgroundImage="https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Services Tabs */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs
            defaultValue="counselling"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 mb-12">
              <TabsTrigger
                value="counselling"
                className="data-[state=active]:bg-perself-primary data-[state=active]:text-white py-6"
              >
                <Brain className="mr-2 h-5 w-5" />
                Counselling & Therapy
              </TabsTrigger>
              <TabsTrigger
                value="healing"
                className="data-[state=active]:bg-perself-primary data-[state=active]:text-white py-6"
              >
                <Heart className="mr-2 h-5 w-5" />
                Healing Modalities
              </TabsTrigger>
              <TabsTrigger
                value="assessments"
                className="data-[state=active]:bg-perself-primary data-[state=active]:text-white py-6"
              >
                <CheckCircle className="mr-2 h-5 w-5" />
                Assessments & Tools
              </TabsTrigger>
            </TabsList>

            {/* Counselling & Therapy Content */}
            <TabsContent value="counselling" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Counselling and therapy session"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <SectionTitle title="Counselling & Therapy" />
                  <p className="text-lg mb-6">
                    Our professional therapists provide evidence-based counseling
                    services to address a wide range of mental health challenges.
                    We create a safe, non-judgmental space for you to explore
                    your thoughts, feelings, and behaviors.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">One-on-one Sessions</h4>
                      <p>
                        Personalized therapy sessions tailored to your specific
                        needs and goals.
                      </p>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Therapeutic Modalities</h4>
                      <p>
                        We offer various approaches including Cognitive
                        Behavioral Therapy (CBT) and Play Therapy for children.
                      </p>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Issues We Address
                      </h4>
                      <p>
                        Our therapists specialize in treating PTSD, depression,
                        anxiety, stress, relationship issues, and substance
                        dependency.
                      </p>
                    </div>
                  </div>
                  <Link to="/booking">
                    <Button className="bg-perself-primary hover:bg-perself-dark">
                      Schedule a Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Healing Modalities Content */}
            <TabsContent value="healing" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="order-2 md:order-1">
                  <SectionTitle title="Healing Modalities" />
                  <p className="text-lg mb-6">
                    We offer a variety of traditional and alternative healing
                    practices to complement conventional therapy. These
                    modalities focus on restoring energy balance, promoting
                    relaxation, and supporting your body's natural healing
                    abilities.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">Crystal Healing</h4>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">Reiki</h4>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">Floral Therapy</h4>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">Colour Therapy</h4>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">Graphology</h4>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">Past Life Regression</h4>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">NLP</h4>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">Rhythmic Relaxation</h4>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">Herbal Remedies</h4>
                    </div>
                    <div className="bg-perself-light p-4 rounded-lg">
                      <h4 className="font-semibold">Inner-Child Healing</h4>
                    </div>
                  </div>

                  <Link to="/booking">
                    <Button className="bg-perself-primary hover:bg-perself-dark">
                      Book a Healing Session
                    </Button>
                  </Link>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Healing modalities"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Assessments & Tools Content */}
            <TabsContent value="assessments" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Assessments and tools"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <SectionTitle title="Assessments & Interactive Tools" />
                  <p className="text-lg mb-6">
                    Take advantage of our interactive assessments and tools
                    designed to help you gain insights into your mental
                    well-being. These self-assessment quizzes can be a first
                    step in understanding your mental health needs.
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="border border-perself-primary rounded-lg overflow-hidden">
                      <div className="bg-perself-primary text-white p-4">
                        <h4 className="font-semibold">
                          "Are You Stressed Out?" Quiz
                        </h4>
                      </div>
                      <div className="p-4">
                        <p className="mb-4">
                          Evaluate your current stress levels and identify
                          potential stressors in your life.
                        </p>
                        <Button variant="outline" className="w-full">
                          Take the Quiz
                        </Button>
                      </div>
                    </div>

                    <div className="border border-perself-primary rounded-lg overflow-hidden">
                      <div className="bg-perself-primary text-white p-4">
                        <h4 className="font-semibold">
                          "How Do You Rate Your Self-Esteem?" Quiz
                        </h4>
                      </div>
                      <div className="p-4">
                        <p className="mb-4">
                          Assess your self-esteem levels and get personalized
                          recommendations to build confidence.
                        </p>
                        <Button variant="outline" className="w-full">
                          Take the Quiz
                        </Button>
                      </div>
                    </div>

                    <div className="border border-perself-primary rounded-lg overflow-hidden">
                      <div className="bg-perself-primary text-white p-4">
                        <h4 className="font-semibold">Memory Game</h4>
                      </div>
                      <div className="p-4">
                        <p className="mb-4">
                          A fun interactive game to test and improve your memory
                          while promoting mindfulness.
                        </p>
                        <Button variant="outline" className="w-full">
                          Play the Game
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-perself-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Find the Right Service for You</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Not sure which service best fits your needs? Schedule a free
            15-minute consultation with one of our experts who can guide you.
          </p>
          <Link to="/contact">
            <Button className="bg-perself-primary hover:bg-perself-dark">
              Contact Us for Guidance
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
