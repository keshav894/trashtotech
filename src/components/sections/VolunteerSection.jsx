import React, { useState } from "react";
import { UserPlus, Clipboard, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";

const VolunteerSection = () => {
  // --- Volunteer Form State ---
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phone: "",
    park: "",
  });
  const [volunteerLoading, setVolunteerLoading] = useState(false);
  const [volunteerStatus, setVolunteerStatus] = useState({ success: false, error: null });

  // --- Cleanup Form State ---
  const [cleanupData, setCleanupData] = useState({
    organizationName: "",
    contactPerson: "",
    email: "",
    phone: "",
    preferredDate: "",
    expectedParticipants: "",
    park: "",
    requirements: "",
  });
  const [cleanupLoading, setCleanupLoading] = useState(false);
  const [cleanupStatus, setCleanupStatus] = useState({ success: false, error: null });

  // 🏞️ Updated with William Warren Park
  const parkOptions = [
    "Roosevelt Park",
    "Central Park",
    "Madison Park",
    "Liberty Park",
    "Lincoln Park",
    "City Garden",
    "Oak Ridge Park",
    "William Warren Park", // ✅ Added this
  ];

  // --- Generic Change Handlers ---
  const handleVolunteerChange = (e) => {
    const { name, value } = e.target;
    setVolunteerData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCleanupChange = (e) => {
    const { name, value } = e.target;
    setCleanupData((prev) => ({ ...prev, [name]: value }));
  };

  // --- Volunteer Form Submission ---
  const handleVolunteerSubmit = async (e) => {
    e.preventDefault();
    setVolunteerLoading(true);
    setVolunteerStatus({ success: false, error: null });
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_VOLUNTEER_TEMPLATE_ID,
        volunteerData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setVolunteerStatus({ success: true, error: null });
      setVolunteerData({ name: "", email: "", phone: "", park: "" });
      setTimeout(() => setVolunteerStatus({ success: false, error: null }), 5000);
    } catch (err) {
      console.error(err);
      setVolunteerStatus({ success: false, error: "Failed to send message. Please try again." });
    } finally {
      setVolunteerLoading(false);
    }
  };

  // --- Cleanup Form Submission ---
  const handleCleanupSubmit = async (e) => {
    e.preventDefault();
    setCleanupLoading(true);
    setCleanupStatus({ success: false, error: null });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CLEANUP_TEMPLATE_ID,
        cleanupData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setCleanupStatus({ success: true, error: null });
      setCleanupData({
        organizationName: "",
        contactPerson: "",
        email: "",
        phone: "",
        preferredDate: "",
        expectedParticipants: "",
        park: "",
        requirements: "",
      });
      setTimeout(() => setCleanupStatus({ success: false, error: null }), 5000);
    } catch (err) {
      console.error(err);
      setCleanupStatus({ success: false, error: "Failed to submit request. Please try again." });
    } finally {
      setCleanupLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600">
            Join our community and make a difference in your neighborhood
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Volunteer Form */}
          <div id="volunteer-form" className="rounded-lg shadow-lg p-8 bg-white">
            <div className="flex items-center mb-6">
              <UserPlus className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Volunteer Sign Up</h3>
            </div>

            {volunteerStatus.success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you for signing up! We'll contact you soon.
              </div>
            )}
            {volunteerStatus.error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {volunteerStatus.error}
              </div>
            )}

            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <Input
                placeholder="Full Name"
                name="name"
                value={volunteerData.name}
                onChange={handleVolunteerChange}
                required
                className="border-black bg-white"
              />
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={volunteerData.email}
                onChange={handleVolunteerChange}
                required
                className="border-black bg-white"
              />
              <Input
                placeholder="Phone"
                name="phone"
                value={volunteerData.phone}
                onChange={handleVolunteerChange}
                required
                className="border-black bg-white"
              />
              <select
                className="w-full p-3 border border-black rounded-md bg-white"
                name="park"
                value={volunteerData.park}
                onChange={handleVolunteerChange}
                required
              >
                <option value="">Select a park (Check the map for availability)...</option>
                {parkOptions.map((park) => (
                  <option key={park} value={park}>
                    {park}
                  </option>
                ))}
              </select>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold flex items-center justify-center"
                disabled={volunteerLoading}
              >
                {volunteerLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {volunteerLoading ? "Signing Up..." : "Sign Up as Volunteer"}
              </Button>
            </form>
          </div>

          {/* Cleanup Form */}
          <div id="cleanup-form" className="rounded-lg shadow-lg p-8 bg-white h-fit">
            <div className="flex items-center mb-6">
              <Clipboard className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">Request Cleanup Event</h3>
            </div>

            {cleanupStatus.success && (
              <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6">
                Request submitted! We'll contact you to schedule the event.
              </div>
            )}
            {cleanupStatus.error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                {cleanupStatus.error}
              </div>
            )}

            <form onSubmit={handleCleanupSubmit} className="space-y-6">
              <Input
                placeholder="Organization/Group Name"
                name="organizationName"
                value={cleanupData.organizationName}
                onChange={handleCleanupChange}
                required
                className="border-black bg-white"
              />
              <Input
                placeholder="Contact Person"
                name="contactPerson"
                value={cleanupData.contactPerson}
                onChange={handleCleanupChange}
                required
                className="border-black bg-white"
              />
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={cleanupData.email}
                onChange={handleCleanupChange}
                required
                className="border-black bg-white"
              />
              <Input
                placeholder="Phone"
                name="phone"
                value={cleanupData.phone}
                onChange={handleCleanupChange}
                required
                className="border-black bg-white"
              />
              <Input
                type="date"
                placeholder="Preferred Event Date"
                name="preferredDate"
                value={cleanupData.preferredDate}
                onChange={handleCleanupChange}
                required
                className="border-black bg-white"
              />
              <Input
                type="number"
                placeholder="Expected Participants"
                min="1"
                name="expectedParticipants"
                value={cleanupData.expectedParticipants}
                onChange={handleCleanupChange}
                required
                className="border-black bg-white"
              />
              <select
                className="w-full p-3 border border-black rounded-md bg-white"
                name="park"
                value={cleanupData.park}
                onChange={handleCleanupChange}
                required
              >
                <option value="">Select a park...</option>
                {parkOptions.map((park) => (
                  <option key={park} value={park}>
                    {park}
                  </option>
                ))}
              </select>
              <Textarea
                placeholder="Special Requirements"
                name="requirements"
                value={cleanupData.requirements}
                onChange={handleCleanupChange}
                rows={3}
                className="border-black bg-white"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold flex items-center justify-center"
                disabled={cleanupLoading}
              >
                {cleanupLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {cleanupLoading ? "Submitting..." : "Submit Cleanup Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;