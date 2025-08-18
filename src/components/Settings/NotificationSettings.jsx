import { Bell, Mail, AlertCircle, Download, Save } from "lucide-react";
import { useState } from "react";

export default function NotificationSettings({ notifications }) {
  const [notificationData, setNotificationData] = useState(notifications);

  const toggle = (key) => {
    setNotificationData((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <div className="bg-white p-8 rounded-xl shadow  shadow-gray-400 h-full mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Notification Preferences
        </h3>
        <p className="text-gray-500 mb-6">
          Manage how and when you receive notifications
        </p>

        <div className="flex flex-col gap-6">
          {[
            {
              key: "email_notifications",
              icon: Mail,
              title: "Email Notifications",
              desc: "Receive updates via email",
            },
            {
              key: "performance_reports",
              icon: Bell,
              title: "Performance Reports",
              desc: "Weekly performance summaries",
            },
            {
              key: "new_school_alerts",
              icon: AlertCircle,
              title: "New School Alerts",
              desc: "Notifications for new school registrations",
            },
          ].map(({ key, icon: Icon, title, desc }) => (
            <div
              key={key}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <Icon size={24} className="text-indigo-600" />
                <div>
                  <h4 className="font-semibold text-gray-900">{title}</h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              </div>
              <label className="relative inline-block w-12 h-6 cursor-pointer">
                <input
                  type="checkbox"
                  id={key}
                  checked={notificationData[key]}
                  onChange={() => toggle(key)}
                  className="opacity-0 w-0 h-0"
                />
                <span className="absolute left-0 top-0 right-0 bottom-0 bg-gray-300 rounded-full transition"></span>
                <span
                  className="absolute left-1 top-1 bottom-1 w-4 h-4 bg-white rounded-full transition transform"
                  style={{
                    transform: notificationData[key]
                      ? "translateX(1.5rem)"
                      : "translateX(0)",
                  }}
                ></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
