import React from "react";

const Footer = () => {
  const teamMembers = [
    {
      role: "President",
      name: "Keshav Matrey",
      email: "keshav.matrey@gmail.com",
    },
    {
      role: "Vice President",
      name: "Varad Mali",
      email: "varadmali08@gmail.com",
    },
    {
      role: "Outreach Head",
      name: "Vansh Sheth",
      email: "vanshsheth2008@gmail.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section: About + Quick Links + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">
                Trash
              </span>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                'n
              </span>
              <span className="text-2xl font-bold text-white">
                Tech
              </span>
            </div>
            <p className="text-gray-400">
              Building cleaner communities through technology and collaboration.
            </p>
            <p className="mt-4 text-gray-400">
              General Email:{" "}
              <a
                href="mailto:trash.totech26@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                trash.totech26@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Quick Links</span>
            <div className="space-y-2">
              <a href="#map" className="text-gray-400 hover:text-white transition-colors block">
                Map
              </a>
              <a href="#volunteer" className="text-gray-400 hover:text-white transition-colors block">
                Volunteer
              </a>
              <a href="#impact" className="text-gray-400 hover:text-white transition-colors block">
                Impact Stats
              </a>
              <a href="#smart-bins" className="text-gray-400 hover:text-white transition-colors block">
                Smart Bins
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contact</span>
            <div className="space-y-2 text-gray-400">
              <p>trash.totech26@gmail.com</p>
              <p>+1(848)338-5051</p>
              <p>Join our mission for cleaner communities!</p>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mt-8 border-t border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-400">
          {teamMembers.map((member) => (
            <div key={member.email} className="text-center md:text-left">
              <p className="font-semibold">{member.role}</p>
              <p>{member.name}</p>
              <p>
                <a
                  href={`mailto:${member.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {member.email}
                </a>
              </p>
              <p>{member.phone}</p>
            </div>
          ))}
        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Trash'nTech. Making our planet cleaner, one community at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;