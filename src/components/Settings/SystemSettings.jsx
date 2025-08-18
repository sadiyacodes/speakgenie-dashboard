import { Globe, Clock } from "lucide-react";
import { useState } from "react";

export default function SystemSettings({ system }) {
  const [formData, setFormData] = useState(system);

  const handleChange = (field, value) =>
    setFormData({ ...formData, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    console.log("System settings:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-8 shadow  shadow-gray-400 flex flex-col gap-6"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">System Settings</h3>

      <label
        htmlFor="language"
        className="flex flex-col gap-1 text-gray-700 font-medium"
      >
        <span className="flex items-center gap-2">
          <Globe size={20} /> Default Language
        </span>
        <select
          id="language"
          value={formData.default_language}
          onChange={(e) => handleChange("default_language", e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
        >
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
        </select>
      </label>

      <label
        htmlFor="timezone"
        className="flex flex-col gap-1 text-gray-700 font-medium"
      >
        <span className="flex items-center gap-2">
          <Clock size={20} /> Time Zone
        </span>
        <select
          id="timezone"
          value={formData.time_zone}
          onChange={(e) => handleChange("time_zone", e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
        >
          <option>UTC-5 (Eastern Time)</option>
          <option>UTC-6 (Central Time)</option>
          <option>UTC-7 (Mountain Time)</option>
          <option>UTC-8 (Pacific Time)</option>
        </select>
      </label>

      <button
        type="submit"
        className="self-start px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 transition"
      >
        Save Settings
      </button>
    </form>
  );
}
