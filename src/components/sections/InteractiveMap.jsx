import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, ZoomOut } from "lucide-react";

const InteractiveMap = ({ onVolunteerClick }) => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const markers = [
    {
      id: 1,
      location: "Oak Ridge Park",
      description: "Cleanup completed — no volunteers needed.",
      severity: "completed",
      x: 65,
      y: 30,
      currentVolunteers: 15,
      volunteersNeeded: 0,
    },
    {
      id: 2,
      location: "William Warren Park",
      description: "Urgent cleanup! We need volunteers — 2 out of 15 joined so far.",
      severity: "high", // red
      x: 55,
      y: 40,
      currentVolunteers: 2,
      volunteersNeeded: 15,
    },
    {
      id: 3,
      location: "Roosevelt Park",
      description: "Cleanup completed — no volunteers needed.",
      severity: "completed",
      x: 45,
      y: 25,
      currentVolunteers: 10,
      volunteersNeeded: 0,
    },
    {
      id: 4,
      location: "Edison Woods",
      description: "Cleanup completed — no volunteers needed.",
      severity: "completed",
      x: 35,
      y: 45,
      currentVolunteers: 8,
      volunteersNeeded: 0,
    },
    {
      id: 5,
      location: "Papaianni Park",
      description: "Cleanup completed — no volunteers needed.",
      severity: "completed",
      x: 55,
      y: 60,
      currentVolunteers: 12,
      volunteersNeeded: 0,
    },
    {
      id: 6,
      location: "Thomas Edison Park",
      description: "Cleanup completed — no volunteers needed.",
      severity: "completed",
      x: 70,
      y: 50,
      currentVolunteers: 9,
      volunteersNeeded: 0,
    },
    {
      id: 7,
      location: "Merrill Park",
      description: "Cleanup completed — no volunteers needed.",
      severity: "completed",
      x: 25,
      y: 35,
      currentVolunteers: 11,
      volunteersNeeded: 0,
    },
    {
      id: 8,
      location: "Dismal Swamp",
      description: "Cleanup completed — no volunteers needed.",
      severity: "completed",
      x: 40,
      y: 70,
      currentVolunteers: 7,
      volunteersNeeded: 0,
    },
  ];

  const getMarkerColor = (severity) => {
    switch (severity) {
      case "high":
        return "bg-red-600 border-red-700";
      case "completed":
        return "bg-gray-400 border-gray-500";
      default:
        return "bg-white border-gray-400";
    }
  };

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.6));

  const handleMarkerClick = (marker) => {
    if (onVolunteerClick) onVolunteerClick(marker);
    setSelectedMarker(marker);
  };

  return (
    <motion.section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="eco-card p-8">
          <div className="map-container h-[500px] relative overflow-hidden">
            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
              <button
                onClick={handleZoomIn}
                className="bg-white hover:bg-gray-100 p-2 rounded-lg shadow-md border border-gray-200"
                disabled={zoomLevel >= 2}
              >
                <ZoomIn className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleZoomOut}
                className="bg-white hover:bg-gray-100 p-2 rounded-lg shadow-md border border-gray-200"
                disabled={zoomLevel <= 0.6}
              >
                <ZoomOut className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Map */}
            <div
              className="w-full h-full transition-transform duration-300 ease-in-out"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: "center center",
              }}
            >
              <img
                alt="Map of Edison, NJ"
                className="w-full h-full object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1587937533522-b2294fd611f5"
              />

              {markers.map((marker) => (
                <motion.div
                  key={marker.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: marker.id * 0.1 }}
                  className="absolute cursor-pointer flex flex-col items-center"
                  style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                  onClick={() => handleMarkerClick(marker)}
                >
                  {/* Floating Label for urgent marker */}
                  {marker.severity === "high" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: -10 }}
                      className="text-xs font-semibold text-white bg-red-600 px-2 py-1 rounded-md mb-1 shadow-md"
                    >
                      NEED VOLUNTEERS
                    </motion.div>
                  )}

                  {/* Pin marker */}
                  <div
                    className={`relative w-5 h-5 rounded-full border-2 shadow-md ${getMarkerColor(
                      marker.severity
                    )}`}
                  >
                    <div
                      className={`absolute left-1/2 bottom-[-8px] transform -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[8px] ${
                        marker.severity === "high"
                          ? "border-t-red-600"
                          : "border-t-gray-500"
                      } border-l-transparent border-r-transparent`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info popup */}
            <AnimatePresence>
              {selectedMarker && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bg-white rounded-lg shadow-xl p-4 border border-green-200 z-10 w-64"
                  style={{
                    left: `${selectedMarker.x}%`,
                    top: `${selectedMarker.y}%`,
                    transform: "translate(calc(-50% + 12px), -120%)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">
                      {selectedMarker.location}
                    </h4>
                    <button
                      onClick={() => setSelectedMarker(null)}
                      className="text-gray-400 hover:text-gray-600 font-bold"
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {selectedMarker.description}
                  </p>
                  {selectedMarker.volunteersNeeded > 0 && (
                    <p className="text-sm text-gray-600">
                      Volunteers: {selectedMarker.currentVolunteers}/
                      {selectedMarker.volunteersNeeded}
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InteractiveMap;