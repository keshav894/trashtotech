import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, TrendingUp, Heart, Recycle, Sprout, Flower2 } from "lucide-react";
import treshImg from "../../images/tresh.jpg";
import smartImg from "../../images/smart.jpg";

const SmartWasteAndCompost = () => {
  const renderSection = (
    title,
    description,
    imageUrl,
    features,
    reverse = false
  ) => (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="waste-section p-6 shadow-lg rounded-xl bg-white"
      >
        <img
          alt={title}
          src={imageUrl}
          className={`w-full ${
            imageUrl === smartImg ? "h-[500px]" : "h-80"
          } object-cover rounded-xl`}
        />
      </motion.div>

      {/* Text & Features */}
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>

        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            className="flex items-start space-x-4"
          >
            <div
              className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}
            >
              <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.section
      id="waste-and-compost"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Smart Waste Bin Section */}
        {renderSection(
          "Smart Waste Segregation",
          "Our intelligent dustbin prototype helps sort waste automatically using AI sensors and smart monitoring.",
          smartImg,
          [
            {
              icon: Leaf,
              title: "Dry Waste Detection",
              description:
                "Automatically identifies and sorts paper, plastic, metal, and glass items using AI sensors.",
              color: "green",
            },
            {
              icon: Droplets,
              title: "Wet Waste Sorting",
              description:
                "Separates organic waste, food scraps, and biodegradable materials for composting.",
              color: "blue",
            },
            {
              icon: TrendingUp,
              title: "Smart Monitoring",
              description:
                "Real-time capacity tracking and automated collection scheduling for efficiency.",
              color: "purple",
            },
            {
              icon: Heart,
              title: "Community Impact",
              description:
                "Tracks recycling rates and environmental impact to motivate community participation.",
              color: "orange",
            },
          ]
        )}

        {/* Composting Section */}
        {renderSection(
          "Composting System",
          "Organic waste collected from parks is converted into nutrient-rich compost to enhance local greenery.",
          treshImg,
          [
            {
              icon: Recycle,
              title: "Organic Waste Collection",
              description: "Collects organic waste from parks and households.",
              color: "green",
            },
            {
              icon: Sprout,
              title: "Composting Process",
              description:
                "Converts collected organic waste into nutrient-rich compost.",
              color: "lime",
            },
            {
              icon: Flower2,
              title: "Garden & Community Use",
              description:
                "Uses compost to enrich local gardens and community greenery.",
              color: "pink",
            },
          ],
          true
        )}
      </div>
    </motion.section>
  );
};

export default SmartWasteAndCompost;