import React from 'react';

const Background = () => {
  return (
    <ul className="background">
      {[...Array(37)].map((_, index) => (
        <li key={index}></li>
      ))}
    </ul>
  );
};

export default Background;