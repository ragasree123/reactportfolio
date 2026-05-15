import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
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
            >
              Resume
            </a>
          </li>
        </ul>

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
  );
};

export default Navbar;
