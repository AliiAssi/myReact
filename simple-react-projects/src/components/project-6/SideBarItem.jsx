import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="relative group">
      <div className="flex items-center justify-between p-2">
        <Link
          to={item.path}
          className="block px-4 py-2 text-white hover:bg-gray-700 rounded-md transition-colors"
        >
          {item.label}
        </Link>
        {item.Children && item.Children.length > 0 && (
          <button
            onClick={handleToggle}
            className="text-white hover:text-gray-300 focus:outline-none ml-2"
          >
            <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
          </button>
        )}
      </div>
      {item.Children && item.Children.length > 0 && isOpen && (
        <ul className="ml-6 mt-2 space-y-2 bg-gray-700 rounded-md shadow-md">
          {item.Children.map((child, index) => (
            <SidebarItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
