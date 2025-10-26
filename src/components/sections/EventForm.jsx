import React from "react";

/**
 * Loads images from src/assets/events using Vite's import.meta.glob.
 * Ensure your project uses Vite. If using Webpack/CRA, switch to require.context.
 */
const imagesMap = import.meta.glob("/src/assets/events/*.{jpg,jpeg,png}", { eager: true, as: "url" });
const images = Object.values(imagesMap || {});

const EventForm = () => {
  return (
    <section id="events-form" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Events</h2>

      {images.length === 0 ? (
        <p className="text-gray-500"></p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="rounded overflow-hidden shadow-sm bg-gray-50">
              <img
                src={src}
                alt={`Event ${idx + 1}`}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default EventForm;