import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgImage from '../assets/img/book_seat.jpg';

const BookSeat = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="book"
        className="relative bg-fixed bg-center bg-cover bg-no-repeat text-white py-32 px-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Book a <span className="text-yellow-400">Seat</span> Now
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Reserve your spot today and enjoy unforgettable nights with us!
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-yellow-500 transition"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 bg-white text-black p-8 rounded-xl shadow-2xl w-[90%] max-w-xl transform -translate-x-1/2 -translate-y-1/2"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-center">Book a Table</h3>
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
                  className="w-full px-4 py-2 border rounded outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded outline-none"
                />
                <input
                  type="date"
                  className="w-full px-4 py-2 border rounded outline-none"
                />
                <input
                  type="time"
                  className="w-full px-4 py-2 border rounded outline-none"
                />
                <input
                  type="number"
                  placeholder="Number of Seats"
                  className="w-full px-4 py-2 border rounded outline-none"
                />
                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded font-semibold"
                  >
                    Confirm
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BookSeat;
