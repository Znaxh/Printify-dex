import React from 'react';

const MainButton = ({ href, children }) => {
  return (
    <a
      href={href}
      className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
    >
      {children}
    </a>
  );
};

export default MainButton;
