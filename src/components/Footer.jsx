import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-ink text-ivory-100 px-6 md:px-12 pt-20 pb-8 border-t border-ink-700">
      <div className="container-wide">
        <div className="grid md:grid-cols-12 gap-12 pb-12 border-b border-ivory-100/10">
          {/* Brand */}
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Ragasree Thatipamula
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
          <p>&copy; {new Date().getFullYear()} Ragasree Thatipamula</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
