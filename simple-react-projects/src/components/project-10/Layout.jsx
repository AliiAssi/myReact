import React, { useState } from "react";
import tabs from '../../data/data__.jsx'; // Import your tabs data

function Layout() {
  // Set the initial active tab to the first tab in the array
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg">
        {/* Tab Headers */}
        <div className="p-4 flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id} // Ensure each tab has a unique key
              className={`py-2 px-4 text-lg font-medium ${
                activeTab.id === tab.id ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="p-6">
          <div>
            {activeTab.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
