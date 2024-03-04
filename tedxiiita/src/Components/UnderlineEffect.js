import React, { useState } from 'react';

const UnderlineEffect = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const underlineStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    backgroundColor: 'red',
    opacity: isHovering ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={underlineStyle} />
      {children}
      
    </div>
  );
};

export default UnderlineEffect;