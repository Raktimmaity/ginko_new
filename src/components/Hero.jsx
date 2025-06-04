import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ show, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/50 bg-opacity-60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
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

const Hero = () => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState('closed');
  const [showBookTable, setShowBookTable] = useState(false);
  // Dummy user auth object (Replace this with your actual auth logic)
const loggedInUser = JSON.parse(localStorage.getItem("user")) || {
  name: "John Doe",
  email: "john@example.com",
};

  const checkBarStatus = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const totalMinutes = hour * 60 + minute;

    const openingTime = 12 * 60;
    const closingTime = 23 * 60 + 15;
    const openingSoonStart = 11 * 60 + 45;
    const closingSoonStart = 23 * 60;

    if (totalMinutes >= openingSoonStart && totalMinutes < openingTime) {
      setStatus('openingSoon');
    } else if (totalMinutes >= openingTime && totalMinutes <= closingTime) {
      if (totalMinutes >= closingSoonStart) {
        setStatus('closingSoon');
      } else {
        setStatus('open');
      }
    } else {
      setStatus('closed');
    }
  };

  // --- New helper functions for date/time min/max ---
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7);
    return maxDate.toISOString().split("T")[0];
  };

  const openingTime = "12:00";
  const closingTime = "23:15";
  // ---------------------------------------------------

  useEffect(() => {
    checkBarStatus();
    const interval = setInterval(checkBarStatus, 1000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log('Playback prevented:', err);
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(interval);
    };
  }, []);
  const [formData, setFormData] = useState({
  area: "",
  date: "",
  time: "",
  guests: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();

  const bookingData = {
    ...formData,
    name: loggedInUser.name,
    email: loggedInUser.email,
  };

  // Replace this with real API call
  console.log("Submitting Booking:", bookingData);
  alert("Table booked successfully!");
  setShowBookTable(false);
};

  const renderStatusMessage = () => {
    switch (status) {
      case 'openingSoon':
        return (
          <div className="mb-6 font-semibold inline-block py-2 px-4 rounded-full bg-yellow-600 animate-pulse">
            Opening Soon at 12:00 PM
          </div>
        );
      case 'closingSoon':
        return (
          <div className="mb-6 font-semibold inline-block py-2 px-4 rounded-full bg-orange-600 animate-pulse">
            Closing Soon at 11:15 PM
          </div>
        );
      case 'open':
        return (
          <div className="mb-6 font-semibold inline-block py-2 px-4 rounded-full bg-green-600 animate-pulse">
            Open Now
          </div>
        );
      default:
        return (
          <div className="mb-6 font-semibold inline-block py-2 px-4 rounded-full bg-red-600">
            Currently Closed
          </div>
        );
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center justify-center text-white text-center overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bar-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full mix-blend-multiply bg-gray-500 z-10" />

      <motion.div
        className="relative z-20 p-10 rounded-xl max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Where Nights Come <span className="text-yellow-500">Alive</span>
        </h1>
        <p className="mb-6 text-lg md:text-xl">
          Asian, Chinese, Thai, Momos, Salad, Desserts
        </p>

        {renderStatusMessage()}
        <br />
        <button
          onClick={() => setShowBookTable(true)}
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Book a Table <i className="fa-regular fa-calendar-check ml-2"></i>
        </button>
      </motion.div>

      <Modal
    show={showBookTable}
    onClose={() => setShowBookTable(false)}
    title="Book a Table"
  >
    <form className="space-y-4" onSubmit={handleSubmit}>
      <select
        name="area"
        required
        className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
        onChange={handleChange}
        value={formData.area}
      >
        <option value="">Select Area</option>
        <option value="bar">Bar</option>
        <option value="restaurant">Restaurant</option>
      </select>

      {/* Name and Email hidden but still submitted */}
      <input type="hidden" name="name" value={loggedInUser.name} />
      <input type="hidden" name="email" value={loggedInUser.email} />

      <input
        type="date"
        name="date"
        required
        min={getTodayDate()}
        max={getMaxDate()}
        onChange={handleChange}
        value={formData.date}
        className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
      />
      <input
        type="time"
        name="time"
        required
        min={openingTime}
        max={closingTime}
        onChange={handleChange}
        value={formData.time}
        className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
      />
      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        required
        onChange={handleChange}
        value={formData.guests}
        className="w-full px-4 py-2 border border-gray-500 rounded outline-none"
      />
      <button
        type="submit"
        className="bg-yellow-400 w-full py-2 rounded text-white font-bold hover:bg-yellow-500 cursor-pointer"
      >
        Confirm Booking
      </button>
    </form>
  </Modal>
    </section>
  );
};

export default Hero;
