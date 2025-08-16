import { User, Mail, Phone } from "lucide-react";

export default function ProfileSettings({ profile }) {
  return (
    <form className="bg-white rounded-xl p-8 shadow border flex flex-col gap-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Profile Settings
      </h3>

      <label
        htmlFor="full_name"
        className="flex flex-col gap-1 text-gray-700 font-medium"
      >
        <span className="flex items-center gap-2">
          <User size={20} /> Full Name
        </span>
        <input
          id="full_name"
          type="text"
          defaultValue={profile.full_name}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
        />
      </label>

      <label
        htmlFor="email"
        className="flex flex-col gap-1 text-gray-700 font-medium"
      >
        <span className="flex items-center gap-2">
          <Mail size={20} /> Email
        </span>
        <input
          id="email"
          type="email"
          defaultValue={profile.email}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
        />
      </label>

      <label
        htmlFor="phone"
        className="flex flex-col gap-1 text-gray-700 font-medium"
      >
        <span className="flex items-center gap-2">
          <Phone size={20} /> Phone
        </span>
        <input
          id="phone"
          type="tel"
          defaultValue={profile.phone}
          className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
        />
      </label>

      <button
        type="submit"
        className="self-start px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-500 transition"
      >
        Update Profile
      </button>
    </form>
  );
}
