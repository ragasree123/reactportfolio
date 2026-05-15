import React from 'react';

const Contact = () => {
  return (
    <section
      id="contact"
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
    </section>
  );
};

export default Contact;
