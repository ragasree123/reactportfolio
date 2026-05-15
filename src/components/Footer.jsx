import React from 'react';
<<<<<<< HEAD
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-ink text-ivory-100 px-6 md:px-12 pt-20 pb-8 border-t border-ink-700">
      <div className="container-wide">
        <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-ivory-100/10">
          {/* Brand */}
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Ragasree Thatipamula<span className="text-gold"></span>
            </h2>
            <p className="text-ivory-100/70 max-w-md leading-relaxed">
              Data analyst with an analytics and insights focus &mdash; building
              the quiet foundation behind better business decisions.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <p className="eyebrow text-ivory-100/50 mb-5">Explore</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-gold transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gold transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <p className="eyebrow text-ivory-100/50 mb-5">Connect</p>
            <div className="flex items-center gap-5 mb-5">
              <a
                href="https://www.linkedin.com/in/raga-sree0307/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-ivory-100/80 hover:text-gold transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/ragasree123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-ivory-100/80 hover:text-gold transition-colors duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <a
              href="mailto:ragasree294@gmail.com"
              className="text-sm text-ivory-100/70 hover:text-gold transition-colors duration-300"
            >
              ragasree294@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 text-xs uppercase tracking-[0.2em] text-ivory-100/40">
          <p>&copy; {new Date().getFullYear()} Ragasree Thatipamula</p>gi
        </div>
      </div>
=======
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
	
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
    </footer>
  );
};

export default Footer;
