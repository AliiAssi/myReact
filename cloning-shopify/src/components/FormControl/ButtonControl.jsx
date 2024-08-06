import React from 'react';
import PropTypes from 'prop-types';

const ButtonControl = ({ value = 'Button', type = 'button', className = '', onClick = () => {} }) => {
  // Base styles for the button
  const baseStyles = "px-4 py-2 rounded-md shadow-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-50";
  
  // Combine base styles with custom class names
  const combinedStyles = `${baseStyles} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
    >
      {value}
    </button>
  );
};

// Define prop types for the component
ButtonControl.propTypes = {
  value: PropTypes.string,    // Button text
  type: PropTypes.oneOf(['button', 'submit', 'reset']), // Button type
  className: PropTypes.string, // Custom class names for additional styling
  onClick: PropTypes.func // Click handler function
};

export default ButtonControl;
