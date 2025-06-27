import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">

        {/* Left Section */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-2xl font-bold mb-4">RAGASREE THATIPAMULA</h1>
          <p className="max-w-lg text-white-400">
            A Web developer with a Front-end focus creates the front end of websites and web apps, which contributes to the overall product's success.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">SOCIAL</h2>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/ragasree-thatipamula-4a83a2184" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-500" size={24} />
            </a>
            <a href="https://github.com/ragasree123" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-blue-500" size={24} />
            </a>
            <a href="https://x.com/Ragasree10" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-500" size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-blue-500" size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaCode className="hover:text-blue-500" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-white-400">
        &copy;Copyright {new Date().getFullYear()} . Made by 
        <a 
          href="#" 
          className="text-white underline ml-1"
        >
          Ragasree
        </a>
      </div>
	
    </footer>
  );
};

export default Footer;
