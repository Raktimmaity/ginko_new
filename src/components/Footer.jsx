import React from "react";

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-10 pb-6">
    <div className="container mx-auto px-4 grid md:grid-cols-3 sm:grid-cols-2 gap-8 text-sm">
      {/* Brand Info */}
      <div>
        <h2 className="text-yellow-400 text-xl font-semibold mb-2">Miss Ginko</h2>
        <p className="text-gray-400">
        On a Soulful Journey of her Space
        Curated Asian Cuisine and Handcrafted Cocktails
        </p>
        <p className="mt-2 text-yellow-400">Open daily: 12:00 PM – 11:15 PM</p>
      </div>

      {/* Quick Links */}


      {/* Contact Info */}
      <div>
        <h3 className="text-yellow-400 text-lg font-medium mb-2">Contact</h3>
        <p>169, Rashbihari Avenue, 3rd Floor, City Mart, Ballygunge, Kolkata</p>
        <a href="tel:+919836311220" className="block mt-1 hover:text-yellow-400">
          Call: +91 9836311220
        </a>
      </div>

      {/* Newsletter & Socials */}
      <div>
        <h3 className="text-yellow-400 text-lg font-medium mb-2">Stay Connected</h3>
        <form className="flex flex-col space-y-2">
          <input
            type="email"
            placeholder="Your email"
            className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 placeholder-gray-400 outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
        <div className="flex items-center gap-4 mt-4 text-white text-lg">
          <p className="text-sm text-yellow-400">Follow Us:</p>
          <a href="https://www.facebook.com/iammissginko/" target="_blank"><i className="fa-brands fa-facebook-f hover:text-white transition"></i></a>
          <a href="https://www.instagram.com/iammissginko?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><i className="fa-brands fa-instagram hover:text-white transition"></i></a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Miss Ginko. All rights reserved.
    </div>
  </footer>
);

export default Footer;
