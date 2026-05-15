import React from 'react';
<<<<<<< HEAD
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
=======
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b

const Contact = () => {
  return (
    <section
      id="contact"
<<<<<<< HEAD
      className="section-padding bg-ivory border-t border-ink/5"
    >
      <div className="container-wide">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">04 &mdash; Get in Touch</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-ink mb-5">
            Let&rsquo;s start a <span className="italic">conversation</span>.
          </h2>
          <p className="text-ink-600 max-w-xl mx-auto leading-relaxed">
            Whether it&rsquo;s a role, a collaboration, or a question you&rsquo;ve
            been turning over &mdash; send a note. I read every message and
            reply with care.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left — details */}
          <div className="md:col-span-5 space-y-10">
            <div>
              <p className="eyebrow mb-3">Email</p>
              <a
                href="mailto:ragasree294@gmail.com"
                className="font-serif text-xl md:text-2xl text-ink hover:text-gold transition-colors duration-300 break-all"
              >
                ragasree294@gmail.com
              </a>
            </div>

            <div>
              <p className="eyebrow mb-3">Located</p>
              <p className="font-serif text-xl text-ink">Irving, Texas, USA</p>
            </div>

            <div>
              <p className="eyebrow mb-3">Elsewhere</p>
              <div className="flex items-center gap-6 text-ink-700">
                <a
                  href="https://www.linkedin.com/in/raga-sree0307/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.15em] hover:text-gold transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/ragasree123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-[0.15em] hover:text-gold transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            action="https://formspree.io/f/mqabggkr"
            method="POST"
            className="md:col-span-7 space-y-6 border-l-0 md:border-l md:border-ink/10 md:pl-16"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[0.2em] text-ink-500 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your full name"
                className="w-full bg-transparent border-0 border-b border-ink/20 py-3 text-ink placeholder:text-ink-400 focus:outline-none focus:border-gold transition-colors duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[0.2em] text-ink-500 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@email.com"
                className="w-full bg-transparent border-0 border-b border-ink/20 py-3 text-ink placeholder:text-ink-400 focus:outline-none focus:border-gold transition-colors duration-300"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-[0.2em] text-ink-500 mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                placeholder="Tell me a little about what you have in mind..."
                className="w-full bg-transparent border-0 border-b border-ink/20 py-3 text-ink placeholder:text-ink-400 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
              ></textarea>
            </div>

            <div className="pt-4">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
=======
      className="min-h-screen flex flex-col justify-center items-center bg-gray-50"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">CONTACT</h2>
        <div className="w-10 h-1 bg-purple-600 mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 max-w-xl">
          Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
        </p>
      </div>

      {/* Form Card */}
      <form
        action="https://formspree.io/f/mqabggkr"
        method="POST"
        className="bg-white shadow-xl rounded-lg px-8 py-10 w-[90%] max-w-xl"
      >
        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            placeholder="Enter Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
        >
          SUBMIT
        </button>
      </form>
>>>>>>> 9d747945cd50aaabee7fb8cddc5d0a4a4b97ab2b
    </section>
  );
};

export default Contact;
