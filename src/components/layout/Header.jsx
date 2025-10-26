import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X, Leaf } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToVolunteerForm = () => {
    document.getElementById('volunteer-form')?.scrollIntoView({ 
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const scrollToCleanupForm = () => {
    document.getElementById('cleanup-form')?.scrollIntoView({ 
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToEventsForm = () => {
    const el = document.getElementById('events-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback: navigate to the page/anchor that contains the EventForm component
      // sets the URL hash so the browser (or your app) can land on the events section
      window.location.hash = '#events-form';
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={scrollToTop}>
            <Leaf className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Trashn'Tech</h1>
              <p className="text-xs text-gray-500">Clean Communities</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToTop}
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Home
            </button>
            <button
              onClick={scrollToVolunteerForm}
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Volunteer
            </button>
            <button
              onClick={scrollToEventsForm}
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Events
            </button>
            <button
              onClick={scrollToCleanupForm}
              className="text-gray-700 hover:text-green-600 font-medium"
            >
              Request Event
            </button>
          </nav>

          {/* Registration Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={scrollToVolunteerForm}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Registration
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-gray-200 mt-4">
            <button
              onClick={scrollToTop}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600"
            >
              Home
            </button>
            <button
              onClick={scrollToVolunteerForm}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600"
            >
              Volunteer
            </button>
            <button
              onClick={scrollToCleanupForm}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:text-green-600"
            >
              Request Event
            </button>
            <div className="px-4 pt-4">
              <Button
                onClick={scrollToVolunteerForm}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Registration
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;