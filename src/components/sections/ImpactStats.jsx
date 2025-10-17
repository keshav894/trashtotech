import React from "react";
import { Users, Clock, Trash2, MapPin } from "lucide-react";

const ImpactStats = () => {
  const stats = [
    {
      icon: Users,
      number: "15",
      label: "Volunteers",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      number: "1",
      label: "Park Cleaned",
      sublabel: "Oakridge Park",
      color: "text-blue-600"
    },
    {
      icon: Trash2,
      number: "15",
      label: "kg of Trash Collected",
      color: "text-purple-600"
    },
    {
      icon: Clock,
      number: "5.6",
      label: "kg of Organic Waste",
      sublabel: "Composted",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
          <p className="text-gray-600 text-lg">
            See the difference we're making together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <Icon className={`w-12 h-12 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="text-sm text-gray-500 mt-1">
                    {stat.sublabel}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            Stats updated as of October 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;