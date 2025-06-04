import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Modal Component

const Modal = ({ show, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/50 bg-opacity-60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black rounded-2xl w-[90%] max-w-md p-6 relative shadow-xl"
            initial={{ scale: 0.9, y: -30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: -30, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 cursor-pointer hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    if (section === "home") {
      navigate("/");
    } else if (section === "menu") {
      navigate("/menu");
    } else if (section === "bookings") {
    navigate("/bookings"); // <-- Added route for My Bookings
    } else {
      if (location.pathname === "/") {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
          offset: -70,
        });
      } else {
        navigate("/", { state: { scrollTo: section } });
      }
    }
    closeMenu();
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 600,
        offset: -70,
      });
    }
  }, [location]);

  // const sections = ["home", "about", "menu", "gallery", "events", "contact"];
  const sections = ["home", "about", "menu", "gallery", "contact", "bookings"];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 p-2 ${
          scrolled ? "bg-gray-800 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-3xl md:text-4xl font-bold tracking-wider text-yellow-400">
            <NavLink to="/">
              <span className="text-white">Miss</span>Ginko
            </NavLink>
          </div>

          <nav className="hidden md:flex gap-8 items-center text-sm md:text-lg">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className="text-white cursor-pointer relative group bg-transparent"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 items-center">
            <div className="bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-full">
              {time}
            </div>
          </div>

          <button
            className="md:hidden text-yellow-400 z-50"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 text-white flex flex-col items-center justify-center space-y-6 text-2xl transform transition-transform duration-500 md:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className="cursor-pointer hover:text-yellow-400 bg-transparent"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <div className="mt-8">
            <div className="bg-yellow-400 text-gray-900 font-bold px-6 py-2 rounded-full">
              {time}
            </div>
          </div>
        </div>
      </header>

      {/* Booking Table Modal */}
      {/* <Modal
        show={showBooking}
        onClose={() => setShowBooking(false)}
        title="Book a Table"
      >
        <form className="space-y-4">
          <select
            className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
            required
          >
            <option value="">Select Area</option>
            <option value="bar">Bar</option>
            <option value="restaurant">Restaurant</option>
          </select>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
          />
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
          />
          <input
            type="time"
            className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
          />
          <input
            type="number"
            placeholder="Number of Guests"
            className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 w-full py-2 rounded text-white font-bold hover:bg-yellow-500 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              alert("Table booked successfully!");
              setShowBooking(false);
            }}
          >
            Confirm Booking
          </button>
        </form>
      </Modal> */}
    </>
  );
};

export default Navbar;
