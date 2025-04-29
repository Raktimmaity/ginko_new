import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import avator from '../assets/img/avator.jpg';

const testimonials = [
  {
    name: "John Doe",
    avatar: "/avatars/avatar1.jpg",
    review: "Amazing vibes and great music. Will definitely come back!",
    rating: 5,
  },
  {
    name: "Peter Smith",
    avatar: "/avatars/avatar2.jpg",
    review: "Loved the cocktails and ambience!",
    rating: 4,
  },
  {
    name: "Sophia Johnson",
    avatar: "/avatars/avatar3.jpg",
    review: "Fantastic service and a great crowd. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Kim",
    avatar: "/avatars/avatar4.jpg",
    review: "A go-to spot for weekend nights!",
    rating: 4,
  },
];

const Reviews = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section id="reviews" className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl text-white font-bold text-center mb-10 relative inline-block after:block after:w-24 after:h-1 after:bg-yellow-400 after:mt-2 after:mx-auto">
          What <span className='text-yellow-400'> People</span> Say
        </h2>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            className="flex transition-transform ease-in-out duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="w-full flex-shrink-0 px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition text-center">
                  <img
                    // src={t.avatar}
                    src={avator}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-yellow-400"
                  />
                  <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{t.review}"</p>
                  <p className="font-semibold text-yellow-400">- {t.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full text-black hover:bg-yellow-500"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full text-black hover:bg-yellow-500"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
