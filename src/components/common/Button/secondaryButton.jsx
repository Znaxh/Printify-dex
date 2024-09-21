import React from 'react';

const SecondaryButton = ({ href, children }) => {
  return (
    <a
      href={href}
      className=" text-grey font-bold border border-black px-4 py-2 rounded-md hover:text-green-600 transition duration-300"
    >
      {children}
    </a>
  );
};

export default SecondaryButton;
