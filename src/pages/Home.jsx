import React from 'react';
import { TypeAnimation } from 'react-type-animation';
<<<<<<< HEAD
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-ivory text-ink overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #1A1A1A 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container-wide w-full px-6 md:px-12 pt-32 pb-20 grid md:grid-cols-12 gap-12 items-center relative">
        {/* Left column — text */}
        <div className="md:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="gold-rule" />
            <span className="eyebrow">Portfolio &mdash; 2026</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ink">
            Ragasree
            <br />
            <span className="italic text-ink-700">Thatipamula</span>
          </h1>

          <div className="text-xl md:text-2xl text-ink-600 font-light min-h-[2.5rem]">
            <TypeAnimation
              sequence={[
                'Data Analyst',
                2000,
                'Insights Storyteller',
                2000,
=======
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-grey-900 to-black text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-6 gap-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-400 text-xl">Hey, There I'm</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Ragasree <span>Thatipamula</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-blue-500 font-semibold">
            <TypeAnimation
              sequence={[
                'Software Developer', 2000,
                'Frontend Engineer', 2000,
                'React Developer', 2000,
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
<<<<<<< HEAD
              cursor={true}
            />
          </div>

          <p className="text-ink-600 text-base md:text-lg max-w-xl leading-relaxed mt-2">
            Turning raw, complex data into the kind of clarity that moves
            decisions forward. Six years of building dashboards, forecasting
            models, and the quiet infrastructure behind better choices.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="/resume.pdf" download className="btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn-outline">
              View Work
            </a>
          </div>

          <div className="flex items-center gap-6 mt-8 text-ink-600">
            <a
              href="https://www.linkedin.com/in/raga-sree0307/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gold transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/ragasree123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gold transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Right column — portrait */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/40" />
            <div className="relative w-72 h-[22rem] md:w-80 md:h-[26rem] overflow-hidden bg-ink-300">
              <img
                src="/picture1.png"
                alt="Ragasree Thatipamula"
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
=======
            />
          </h2>

          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md w-fit"
          >
            Resume
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-full border-4 border-blue-600 overflow-hidden shadow-lg w-72 h-72 md:w-80 md:h-80 transform hover:scale-105 transition duration-300">

            <img
              src="/picture1.png" // ✅ Place your image in public folder
              alt="Profile"
              className="w-full h-full object-cover"
            />
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-500 hover:text-gold transition-colors duration-300 animate-pulse"
        aria-label="Scroll to About"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <FaArrowDown size={12} />
      </a>
=======
      
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
    </section>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Hero;
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
