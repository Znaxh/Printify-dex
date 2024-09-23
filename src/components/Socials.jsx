import React from 'react';

const Socials = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between my-10 px-40 py-2 items-center text-sm'>
      <div>
        <img
          src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
          alt="Printify Logo"
          className="h-16"
        />
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg"
            alt="Facebook Logo"
            className="h-12"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg"
            alt="Instagram Logo"
            className="h-12"
          />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg"
            alt="LinkedIn Logo"
            className="h-12"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg"
            alt="Twitter Logo"
            className="h-12"
          />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg"
            alt="YouTube Logo"
            className="h-12"
          />
        </a>
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg"
            alt="TikTok Logo"
            className="h-12"
          />
        </a>
        <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg"
            alt="Reddit Logo"
            className="h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default Socials;
