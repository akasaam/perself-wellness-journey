
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        title="About Perself Mindcare"
        subtitle="Our Story"
        description="Learn about our holistic approach to mental wellness and meet the team dedicated to your healing journey."
        backgroundImage="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <SectionTitle title="Our Vision" />
              <p className="text-lg mb-8">
                Perself Mindcare envisions a world where mental wellness is
                prioritized, accessible, and approached with compassion and
                understanding. We strive to create a community where seeking
                help is normalized and everyone has the tools to nurture their
                mental health.
              </p>

              <SectionTitle title="Our Mission" />
              <p className="text-lg">
                Our mission is to provide comprehensive, personalized mental
                wellness services that combine evidence-based therapeutic
                approaches with traditional healing practices. We aim to
                empower individuals to heal, grow, and thrive by addressing
                their unique needs through a holistic approach to mental health.
              </p>
            </div>

            <div>
              <SectionTitle title="Our Values" />
              <div className="space-y-6">
                <div className="bg-perself-light p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2 text-perself-primary">
                    Compassion
                  </h4>
                  <p>
                    We approach every individual with kindness, empathy, and
                    non-judgment, creating a safe space for healing.
                  </p>
                </div>

                <div className="bg-perself-light p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2 text-perself-primary">
                    Holistic Approach
                  </h4>
                  <p>
                    We recognize that mental health is interconnected with
                    physical, emotional, and spiritual well-being, and our
                    treatments reflect this integrated perspective.
                  </p>
                </div>

                <div className="bg-perself-light p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2 text-perself-primary">
                    Personalization
                  </h4>
                  <p>
                    We tailor our approaches to each person's unique needs,
                    history, and goals, acknowledging that there is no
                    one-size-fits-all solution.
                  </p>
                </div>

                <div className="bg-perself-light p-6 rounded-xl">
                  <h4 className="text-xl font-semibold mb-2 text-perself-primary">
                    Empowerment
                  </h4>
                  <p>
                    We aim to equip individuals with the knowledge, tools, and
                    support they need to take an active role in their healing
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-perself-light">
        <div className="container-custom">
          <SectionTitle
            title="Our Approach to Healing"
            subtitle="Methodology"
            centered
          />

          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8 text-center">
              At Perself Mindcare, we believe that true healing encompasses the
              mind, body, and spirit. Our approach combines evidence-based
              therapeutic practices with traditional healing modalities to
              address the whole person, not just the symptoms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-perself-primary">
                  Evidence-Based Therapy
                </h3>
                <p className="text-muted-foreground">
                  We utilize clinically proven techniques like Cognitive
                  Behavioral Therapy and mindfulness practices to help clients
                  develop healthy coping mechanisms and thought patterns.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-perself-primary">
                  Traditional Healing
                </h3>
                <p className="text-muted-foreground">
                  We incorporate time-honored healing modalities such as Reiki,
                  crystal healing, and herbal remedies that address energy
                  imbalances and promote natural healing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-perself-primary">
                  Personalized Care Plans
                </h3>
                <p className="text-muted-foreground">
                  We develop individualized treatment plans that combine the most
                  effective approaches for each client's unique needs, goals, and
                  preferences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-perself-primary">
                  Ongoing Support
                </h3>
                <p className="text-muted-foreground">
                  We provide continuous guidance and resources to support clients
                  throughout their healing journey, both during sessions and in
                  their everyday lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The Experts"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-custom hover:shadow-md">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Lisa Chen"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Lisa Chen</h3>
                <p className="text-perself-primary font-medium mb-3">
                  Clinical Psychologist
                </p>
                <p className="text-muted-foreground mb-4">
                  Dr. Chen specializes in CBT for anxiety and depression, with
                  over 15 years of experience helping clients develop effective
                  coping strategies.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-perself-light text-perself-dark text-sm px-3 py-1 rounded-full">
                      Anxiety
                    </span>
                    <span className="bg-perself-light text-perself-dark text-sm px-3 py-1 rounded-full">
                      Depression
                    </span>
                    <span className="bg-perself-light text-perself-dark text-sm px-3 py-1 rounded-full">
                      CBT
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-custom hover:shadow-md">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Michael Roberts"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Roberts</h3>
                <p className="text-perself-primary font-medium mb-3">
                  Reiki Master & Energy Healer
                </p>
                <p className="text-muted-foreground mb-4">
                  Michael combines traditional Reiki techniques with crystal
                  healing to restore energy balance and promote emotional
                  well-being.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-perself-light text-perself-dark text-sm px-3 py-1 rounded-full">
                      Reiki
                    </span>
                    <span className="bg-perself-light text-perself-dark text-sm px-3 py-1 rounded-full">
                      Crystal Healing
                    </span>
                    <span className="bg-perself-light text-perself-dark text-sm px-3 py-1 rounded-full">
                      Energy Work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-custom hover:shadow-md">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dr. Amara Johnson"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Dr. Amara Johnson</h3>
                <p className="text-perself-primary font-medium mb-3">
                  Child Psychologist & Play Therapist
                </p>
                <p className="text-muted-foreground mb-4">
                  Dr. Johnson specializes in play therapy for children dealing
                  with trauma, anxiety, and developmental challenges.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-perself-light text-perself-dark text-sm px-3 py-1 rounded-full">
                      Play Therapy
                    </span>
                    <span className="bg-perself-light text-perself-dark text-sm px-3 py-1 rounded-full">
                      Child Psychology
                    </span>
                    <span className="bg-perself-light text-perself-dark text-sm px-3 py-1 rounded-full">
                      Trauma
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
