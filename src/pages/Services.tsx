
import React, { useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Brain, Heart, Puzzle, Quiz, StarHalf } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import StressQuiz from "@/components/quizzes/StressQuiz";
import SelfEsteemQuiz from "@/components/quizzes/SelfEsteemQuiz";
import MemoryGame from "@/components/quizzes/MemoryGame";

const Services = () => {
  const [activeTab, setActiveTab] = useState("counselling");
  const [isStressQuizOpen, setIsStressQuizOpen] = useState(false);
  const [isSelfEsteemQuizOpen, setIsSelfEsteemQuizOpen] = useState(false);
  const [isMemoryGameOpen, setIsMemoryGameOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="How We Can Help"
        description="Discover our range of mental wellness services, from traditional therapy to holistic healing modalities and interactive tools."
        backgroundImage="https://images.unsplash.com/photo-1560438718-eb61ede255eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
        variant="gradient"
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
            <div className="flex justify-center mb-12">
              <TabsList className="rounded-full overflow-hidden shadow-sm w-full max-w-3xl mx-auto bg-muted/30 p-1.5">
                <TabsTrigger
                  value="counselling"
                  className="data-[state=active]:bg-perself-primary data-[state=active]:text-white py-3 px-4 font-medium transition-all flex items-center justify-center rounded-full"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  <span>Counselling & Therapy</span>
                </TabsTrigger>
                <TabsTrigger
                  value="healing"
                  className="data-[state=active]:bg-perself-primary data-[state=active]:text-white py-3 px-4 font-medium transition-all flex items-center justify-center rounded-full"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  <span>Healing Modalities</span>
                </TabsTrigger>
                <TabsTrigger
                  value="assessments"
                  className="data-[state=active]:bg-perself-primary data-[state=active]:text-white py-3 px-4 font-medium transition-all flex items-center justify-center rounded-full"
                >
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>Assessments & Tools</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Counselling & Therapy Content */}
            <TabsContent value="counselling" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-perself-primary/20 rounded-full blur-3xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Counselling and therapy session"
                    className="rounded-2xl shadow-md relative z-10"
                  />
                </div>
                <div>
                  <SectionTitle title="Counselling & Therapy" variant="gradient" />
                  <p className="text-lg mb-6">
                    Our professional therapists provide evidence-based counseling
                    services to address a wide range of mental health challenges.
                    We create a safe, non-judgmental space for you to explore
                    your thoughts, feelings, and behaviors.
                  </p>
                  <div className="space-y-4 mb-8">
                    <ServiceFeature title="One-on-one Sessions">
                      Personalized therapy sessions tailored to your specific
                      needs and goals.
                    </ServiceFeature>
                    <ServiceFeature title="Therapeutic Modalities">
                      We offer various approaches including Cognitive
                      Behavioral Therapy (CBT) and Play Therapy for children.
                    </ServiceFeature>
                    <ServiceFeature title="Issues We Address">
                      Our therapists specialize in treating PTSD, depression,
                      anxiety, stress, relationship issues, and substance
                      dependency.
                    </ServiceFeature>
                  </div>
                  <Link to="/booking">
                    <Button className="magic-button shine-effect">
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
                  <SectionTitle title="Healing Modalities" variant="gradient" />
                  <p className="text-lg mb-6">
                    We offer a variety of traditional and alternative healing
                    practices to complement conventional therapy. These
                    modalities focus on restoring energy balance, promoting
                    relaxation, and supporting your body's natural healing
                    abilities.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <HealingBadge>Crystal Healing</HealingBadge>
                    <HealingBadge>Reiki</HealingBadge>
                    <HealingBadge>Floral Therapy</HealingBadge>
                    <HealingBadge>Colour Therapy</HealingBadge>
                    <HealingBadge>Graphology</HealingBadge>
                    <HealingBadge>Past Life Regression</HealingBadge>
                    <HealingBadge>NLP</HealingBadge>
                    <HealingBadge>Rhythmic Relaxation</HealingBadge>
                    <HealingBadge>Herbal Remedies</HealingBadge>
                    <HealingBadge>Inner-Child Healing</HealingBadge>
                  </div>

                  <Link to="/booking">
                    <Button className="magic-button shine-effect">
                      Book a Healing Session
                    </Button>
                  </Link>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-perself-primary/20 rounded-full blur-3xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Healing modalities"
                    className="rounded-2xl shadow-md relative z-10"
                  />
                </div>
              </div>
            </TabsContent>

            {/* Assessments & Tools Content */}
            <TabsContent value="assessments" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-perself-primary/20 rounded-full blur-3xl"></div>
                  <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Assessments and tools"
                    className="rounded-2xl shadow-md relative z-10"
                  />
                  <div className="absolute -bottom-6 right-6">
                    <Puzzle size={60} className="text-perself-primary/30 transform rotate-12" />
                  </div>
                </div>
                <div>
                  <SectionTitle title="Assessments & Interactive Tools" variant="gradient" />
                  <p className="text-lg mb-6">
                    Take advantage of our interactive assessments and tools
                    designed to help you gain insights into your mental
                    well-being. These self-assessment quizzes can be a first
                    step in understanding your mental health needs.
                  </p>

                  <div className="space-y-6 mb-8 relative">
                    <div className="absolute -right-16 top-20 z-0">
                      <Quiz size={120} className="text-perself-primary/10 transform -rotate-12" />
                    </div>
                    
                    <AssessmentCard 
                      title="Are You Stressed Out? Quiz"
                      description="Evaluate your current stress levels and identify potential stressors in your life."
                      id="stress-quiz"
                      icon={<Quiz className="w-10 h-10" />}
                      onOpen={() => setIsStressQuizOpen(true)}
                    />
                    
                    <AssessmentCard 
                      title="How Do You Rate Your Self-Esteem? Quiz"
                      description="Assess your self-esteem levels and get personalized recommendations to build confidence."
                      id="self-esteem-quiz"
                      icon={<StarHalf className="w-10 h-10" />}
                      onOpen={() => setIsSelfEsteemQuizOpen(true)}
                    />
                    
                    <AssessmentCard 
                      title="Memory Game"
                      description="A fun interactive game to test and improve your memory while promoting mindfulness."
                      id="memory-game"
                      icon={<Puzzle className="w-10 h-10" />}
                      onOpen={() => setIsMemoryGameOpen(true)}
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-perself-primary/20 to-perself-accent/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=5')] opacity-5"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 font-outfit">Find the Right Service for You</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 font-outfit">
            Not sure which service best fits your needs? Schedule a free
            15-minute consultation with one of our experts who can guide you.
          </p>
          <Link to="/contact">
            <Button className="magic-button shine-effect">
              Contact Us for Guidance
            </Button>
          </Link>
        </div>
      </section>

      {/* Quiz Dialogs */}
      <StressQuiz isOpen={isStressQuizOpen} onClose={() => setIsStressQuizOpen(false)} />
      <SelfEsteemQuiz isOpen={isSelfEsteemQuizOpen} onClose={() => setIsSelfEsteemQuizOpen(false)} />
      <MemoryGame isOpen={isMemoryGameOpen} onClose={() => setIsMemoryGameOpen(false)} />
    </Layout>
  );
};

interface ServiceFeatureProps {
  title: string;
  children: React.ReactNode;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-perself-primary/10 hover:border-perself-primary/30 transition-all group hover-lift">
      <h4 className="font-semibold mb-2 group-hover:text-perself-primary transition-colors">{title}</h4>
      <p className="text-muted-foreground">
        {children}
      </p>
    </div>
  );
};

interface HealingBadgeProps {
  children: React.ReactNode;
}

const HealingBadge: React.FC<HealingBadgeProps> = ({ children }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-perself-primary/10 hover:border-perself-primary/30 transition-all hover-lift text-center group">
      <h4 className="font-semibold group-hover:text-perself-primary transition-colors">{children}</h4>
    </div>
  );
};

interface AssessmentCardProps {
  title: string;
  description: string;
  id: string;
  icon: React.ReactNode;
  onOpen: () => void;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({ title, description, id, icon, onOpen }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md border border-perself-primary/20 hover:border-perself-primary/40 transition-all hover-lift hover:shadow-lg relative z-10">
      <div className="bg-gradient-to-r from-perself-primary to-perself-secondary text-white p-4 flex items-center gap-3">
        <div className="p-2 bg-white/20 rounded-full">
          {icon}
        </div>
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className="p-6 bg-white bg-gradient-to-br from-white to-perself-light/30">
        <p className="mb-6 text-muted-foreground">
          {description}
        </p>
        <Button 
          variant="outline" 
          className="w-full rounded-lg border-perself-primary/30 hover:bg-perself-primary/10 font-medium text-perself-primary hover:text-perself-primary"
          onClick={onOpen}
        >
          Take the Quiz
        </Button>
      </div>
    </div>
  );
};

export default Services;
