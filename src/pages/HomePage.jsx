import Hero from "../components/sections/Hero";
import InteractiveMap from "../components/sections/InteractiveMap";
import VolunteerSection from "../components/sections/VolunteerSection";
import SmartWasteBin from "../components/sections/SmartWasteBin";
import ImpactStats from "../components/sections/ImpactStats";
import Footer from "../components/layout/Footer"; // Correct path to Footer component
import React, { useState } from "react";

const HomePage = () => {
  const [markers, setMarkers] = useState([
    { id: 1, location: "Roosevelt Park", description: "Large cleanup near lake area", x: 40, y: 30, severity: "white", volunteersNeeded: 20, currentVolunteers: 0 },
    { id: 2, location: "Thomas Edison Park", description: "Playground and tennis court cleanup", x: 55, y: 45, severity: "white", volunteersNeeded: 15, currentVolunteers: 0 },
    { id: 3, location: "Papaianni Park", description: "Walking trail litter collection", x: 25, y: 70, severity: "white", volunteersNeeded: 12, currentVolunteers: 0 },
    { id: 4, location: "Edison State Park", description: "Picnic area needs cleaning", x: 65, y: 35, severity: "white", volunteersNeeded: 10, currentVolunteers: 0 },
    { id: 5, location: "Oak Tree Pond", description: "Nature trail cleanup", x: 80, y: 60, severity: "white", volunteersNeeded: 8, currentVolunteers: 0 },
    { id: 6, location: "Durham Woods Park", description: "Playground cleanup", x: 30, y: 50, severity: "white", volunteersNeeded: 5, currentVolunteers: 0 },
    { id: 7, location: "Minnie B. Veal Park", description: "Community area litter pickup", x: 50, y: 75, severity: "white", volunteersNeeded: 10, currentVolunteers: 0 },
    { id: 8, location: "Edison Tower Park", description: "Historical site cleanup", x: 70, y: 25, severity: "white", volunteersNeeded: 15, currentVolunteers: 0 },
  ]);

  const [selectedPark, setSelectedPark] = useState(null);

  const stats = {
    litterReported: markers.length,
    volunteersActive: markers.reduce((total, marker) => total + marker.currentVolunteers, 0),
    wasteCollected: markers.reduce((total, marker) => total + (marker.currentVolunteers * 5), 0),
    areasCleanedUp: markers.filter(marker => marker.currentVolunteers > 0).length,
  };

  const handleVolunteerSignUp = (parkName) => {
    setMarkers((prev) =>
      prev.map((marker) =>
        marker.location === parkName && marker.currentVolunteers < marker.volunteersNeeded
          ? { ...marker, currentVolunteers: marker.currentVolunteers + 1 }
          : marker
      )
    );
  };

  const handleRequestHelp = (parkName, severity, description, volunteersNeeded) => {
    setMarkers((prev) =>
      prev.map((marker) =>
        marker.location === parkName
          ? { ...marker, severity, description, volunteersNeeded: parseInt(volunteersNeeded), currentVolunteers: 0 }
          : marker
      )
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main content grows to push footer down */}
      <main className="flex-grow">
        <Hero />
        <ImpactStats stats={stats} />
        <InteractiveMap
          markers={markers}
          onVolunteerClick={(marker) => setSelectedPark(marker.location)}
        />
        <VolunteerSection
          parks={markers}
          onVolunteerSignUp={handleVolunteerSignUp}
          onRequestHelp={handleRequestHelp}
          selectedPark={selectedPark}
        />
        <SmartWasteBin />
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default HomePage;