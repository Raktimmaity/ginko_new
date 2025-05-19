import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState('closed'); // 'open', 'closed', 'openingSoon', 'closingSoon'

  const checkBarStatus = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const totalMinutes = hour * 60 + minute;

    const openingTime = 12 * 60; // 12:00 PM = 720
    const closingTime = 23 * 60 + 15; // 11:15 PM = 1395

    const openingSoonStart = 11 * 60 + 45; // 11:45 AM = 705
    const closingSoonStart = 23 * 60; // 11:00 PM = 1380

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

  useEffect(() => {
    checkBarStatus(); // initial check
    const interval = setInterval(checkBarStatus, 1000); // update every second

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
      {/* Background Video */}
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

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full mix-blend-multiply bg-gray-500 z-10" />

      {/* Content */}
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

        {/* Dynamic Status Message */}
        {renderStatusMessage()}
        <br />
        <a
          href="#about"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition animate-bounce"
        >
          Explore More <i className="fa-regular fa-circle-down"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
