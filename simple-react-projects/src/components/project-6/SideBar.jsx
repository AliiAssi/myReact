import React from 'react';
import SidebarItem from './SideBarItem'; // Ensure the correct import path

const Sidebar = ({ items }) => (
  <nav className="w-64 min-h-screen bg-gray-800 text-white shadow-lg">
    <div className="p-4 border-b border-gray-700">
      <h1 className="text-xl font-semibold">Sidebar</h1>
    </div>
    <ul className="space-y-2 mt-2">
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </ul>
  </nav>
);

export default Sidebar;
