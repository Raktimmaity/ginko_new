import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl text-white font-bold text-center mb-10 relative inline-block after:block after:w-24 after:h-1 after:bg-yellow-400 after:mt-2 after:mx-auto">
        <span className='text-yellow-400'>Contact</span> Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 font-semibold transition"
            >
              Send Message
            </button>
          </form>

          {/* Embedded Google Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Zinco Bar Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1140.7670967115982!2d88.3653129030755!3d22.5203035068815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277ee9f0d64a9%3A0xb4eaeb7aabe21fa8!2sMiss%20Ginko!5e1!3m2!1sen!2sin!4v1745476735925!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
