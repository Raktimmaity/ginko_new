import React, { useState, useEffect, useRef } from "react";
import { scroller } from "react-scroll";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Modal Component
const Modal = ({ show, onClose, title, children, footer }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show, onClose]);

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
            ref={modalRef}
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
            {footer && (
              <div className="mt-4 text-sm text-center text-gray-600">
                {footer}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

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
      navigate("/bookings");
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
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-2 text-sm font-bold rounded-full bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Login
            </button>
            <button
              onClick={() => setShowSignup(true)}
              className="px-4 py-2 text-sm font-bold rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition"
            >
              Signup
            </button>
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
          <div className="flex gap-6 mt-8">
            <button
              onClick={() => {
                setShowLogin(true);
                closeMenu();
              }}
              className="px-4 py-2 font-bold rounded-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Login
            </button>
            <button
              onClick={() => {
                setShowSignup(true);
                closeMenu();
              }}
              className="px-4 py-2 font-bold rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition"
            >
              Signup
            </button>
          </div>
        </div>
      </header>

      {/* Login Modal */}
      <Modal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        title="Login"
        footer={
          <>
            Don&apos;t have an account?{" "}
            <button
              className="text-yellow-500 underline hover:text-yellow-600"
              onClick={() => {
                setShowLogin(false);
                setShowSignup(true);
              }}
            >
              Sign up
            </button>
          </>
        }
      >
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-400 rounded outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-400 rounded outline-none"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded font-bold hover:bg-yellow-500"
            onClick={(e) => {
              e.preventDefault();
              alert("Login submitted");
              setShowLogin(false);
            }}
          >
            Login
          </button>
        </form>
      </Modal>

      {/* Signup Modal */}
      <Modal
        show={showSignup}
        onClose={() => setShowSignup(false)}
        title="Signup"
        footer={
          <>
            Already registered?{" "}
            <button
              className="text-yellow-500 underline hover:text-yellow-600"
              onClick={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            >
              Login
            </button>
          </>
        }
      >
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-400 rounded outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-400 rounded outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-400 rounded outline-none"
          />
          <button
            type="submit"
            className="w-full bg-yellow-400 text-white py-2 rounded font-bold hover:bg-yellow-500"
            onClick={(e) => {
              e.preventDefault();
              alert("Signup submitted");
              setShowSignup(false);
            }}
          >
            Signup
          </button>
        </form>
      </Modal>
    </>
  );
};

export default Navbar;
