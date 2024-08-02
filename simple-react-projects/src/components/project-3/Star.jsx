import React, { useState } from 'react';

function Star({ size, selected, setSelected, onIndex }) {
  const [color, setColor] = useState("white");

  // Handle click to update the selected index
  const handleClick = () => {
    setSelected(onIndex);
  };

  // Update color based on hover or selection
  const handleMouseEnter = () => {
    if (onIndex > selected) {
      setColor("lightgray"); // Change color on hover
    }
  };

  const handleMouseLeave = () => {
    if (onIndex > selected) {
      setColor("white"); // Reset color on mouse leave
    }
  };

  // Set color based on selection
  const computedColor = onIndex <= selected ? "yellow" : color;

  const starPath = `M${size / 2} 0 L${size / 1.5} ${size} L0 ${size / 2.5} L${size} ${size / 2.5} L${size / 3} ${size} Z`;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      className="block cursor-pointer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        d={starPath}
        fill={computedColor}
      />
    </svg>
  );
}

export default Star;
