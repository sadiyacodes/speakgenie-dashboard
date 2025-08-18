import ProfileSettings from "./ProfileSettings";
import SystemSettings from "./SystemSettings";
import NotificationSettings from "./NotificationSettings";
import DataManagement from "./DataManagement";

export default function SettingsPage({ settings }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">
          Manage your account preferences and system configuration
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <ProfileSettings profile={settings.profile} />
        <SystemSettings system={settings.system} />
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <NotificationSettings notifications={settings.notifications} />
        <DataManagement />
      </div>
    </div>
  );
}
