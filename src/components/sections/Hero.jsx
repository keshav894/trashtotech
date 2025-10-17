import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Users, Calendar } from "lucide-react";

const Hero = () => {
  const scrollToVolunteerForm = () => {
    document.getElementById('volunteer-form')?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  const scrollToCleanupForm = () => {
    document.getElementById('cleanup-form')?.scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 text-white pt-20">
      <div className="container mx-auto px-8 text-center">
        <div className="max-w-6xl mx-auto py-16">
          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-bold mb-10">
            <span className="bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
              Trashn'Tech
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-3xl md:text-5xl mb-12 font-medium text-white drop-shadow-md">
            🌳 Building Cleaner Communities Together 🌱
          </p>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-16 text-white max-w-4xl mx-auto leading-relaxed">
            Join our community cleanup initiative. Whether you want to volunteer 
            or organize an event, we're here to help make your neighborhood cleaner and greener.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button
              onClick={scrollToVolunteerForm}
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 hover:scale-105 transition-all duration-300 px-12 py-6 text-xl font-bold rounded-xl shadow-xl"
            >
              <Users className="w-6 h-6 mr-3" />
              Volunteer With Us
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <Button
              onClick={scrollToCleanupForm}
              size="lg"
              className="bg-transparent border-3 border-white text-white hover:bg-white hover:text-green-600 hover:scale-105 transition-all duration-300 px-12 py-6 text-xl font-bold rounded-xl shadow-xl"
            >
              <Calendar className="w-6 h-6 mr-3" />
              Request Event
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;