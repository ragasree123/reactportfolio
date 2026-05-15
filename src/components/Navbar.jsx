<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
<<<<<<< HEAD
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, link: 'home', label: 'Home' },
    { id: 2, link: 'about', label: 'About' },
    { id: 3, link: 'experience', label: 'Experience' },
    { id: 4, link: 'projects', label: 'Projects' },
    { id: 5, link: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/90 backdrop-blur-md border-b border-ink/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto">
        {/* Wordmark */}
        <a href="#home" className="group inline-flex flex-col leading-none">
          {/* Name line — all caps, wide letter-spacing */}
          <span className="font-sans font-medium text-[13px] md:text-sm uppercase text-ink tracking-[0.4em] md:tracking-[0.5em]">
            Ragasree
            <span className="inline-block mx-2 md:mx-3 text-gold font-serif italic normal-case tracking-normal text-base relative -top-[1px]">
              /
            </span>
            <span className="text-ink-700">Thatipamula</span>
          </span>

          {/* Eyebrow tagline — small italic serif for contrast */}
          <span className="hidden sm:flex items-center gap-2 mt-2 pl-px">
            <span className="block w-3 h-px bg-gold group-hover:w-6 transition-all duration-500" />
            <span className="font-serif italic text-[11px] text-ink-500 tracking-wide">
              Data Analyst
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center">
          {links.map(({ id, link, label }) => (
            <li key={id} className="group relative">
              <a
                href={`#${link}`}
                className="text-sm uppercase tracking-[0.2em] text-ink-700 hover:text-ink transition-colors duration-300"
              >
                {label}
              </a>
              <span className="absolute left-0 -bottom-2 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
            </li>
          ))}

          <li>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-2.5 border border-ink text-ink text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-ink hover:text-ivory"
=======

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'experience' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className="fixed w-full bg-black/30 backdrop-blur-md shadow-md z-50">
      <div className="flex justify-between items-center px-8 py-4">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img 
            src="/picture1.png" 
            alt="Profile" 
            className="w-12 h-12 rounded-full border-2 border-blue-500"
          />
          <a href="#home" className="text-xl md:text-2xl font-bold text-blue-600">
            RAGASREE THATIPAMULA
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(({ id, link }) => (
            <li key={id} className="group relative cursor-pointer">
              <a
                href={`#${link}`}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a 
              href="/resume.pdf"
              download
              className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
            >
              Resume
            </a>
          </li>
        </ul>

<<<<<<< HEAD
        {/* Mobile Toggle */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden text-ink-700 hover:text-ink transition-colors"
          aria-label="Toggle navigation"
        >
          {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden bg-ivory border-t border-ink/10">
          <ul className="flex flex-col items-center py-10 gap-8">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <a
                  href={`#${link}`}
                  onClick={() => setNav(false)}
                  className="text-sm uppercase tracking-[0.2em] text-ink-700 hover:text-gold transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                onClick={() => setNav(false)}
                className="inline-flex items-center px-6 py-2.5 border border-ink text-ink text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:bg-ink hover:text-ivory"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
=======
        {/* Mobile Menu Icon */}
        <div 
          onClick={() => setNav(!nav)} 
          className="md:hidden cursor-pointer text-gray-700"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <ul className="flex flex-col items-center absolute top-20 left-0 w-full bg-white/90 backdrop-blur-md gap-8 py-10 shadow-md">
          {links.map(({ id, link }) => (
            <li key={id} className="text-xl font-medium">
              <a
                href={`#${link}`}
                onClick={() => setNav(false)}
                className="hover:text-blue-600"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="/resume.pdf"
              download
              className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => setNav(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
  );
};

export default Navbar;
