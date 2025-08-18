import React from "react";
import { Download, Save } from "lucide-react";

const DataManagement = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow  shadow-gray-400">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Management</h3>
      <p className="text-gray-500 mb-6">
        Export data and manage system backups
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-semibold text-gray-700 mb-4">Export Data</h4>
          <div className="flex flex-col gap-3">
            {[
              "Export Student Data",
              "Export School Reports",
              "Export Analytics",
            ].map((text) => (
              <button
                key={text}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 border text-sm border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition"
              >
                <Download size={18} />
                {text}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700 mb-4">Backup</h4>
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-200 transition mb-3">
            <Save size={18} /> Create Backup
          </button>
          <p className="text-sm text-gray-500">Last backup: March 15, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default DataManagement;
