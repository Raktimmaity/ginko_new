import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import avator1 from '../assets/img/avator1.jpg';
import avator2 from '../assets/img/avator2.jpg';
import avator3 from '../assets/img/avator3.jpg';
import avator4 from '../assets/img/avator4.jpg';
import avator5 from '../assets/img/avator5.jpg';

const testimonials = [
  {
    name: "Gaurab Majumdar",
    avatar: avator1,
    review: "Amazing vibes and great music. Will definitely come back!",
    rating: 5,
  },
  {
    name: "Bidisha",
    avatar: avator2,
    review: "This was my second visit to the place, love the vibes and absolutely love the food, the cocktails can be better though given the price points. The calamari was delicious and I absolutely loved the Yakuza Roll ❤️",
    rating: 4,
  },
  {
    name: "Kash Bhattacharyya",
    avatar: avator3,
    review: "We went to Miss Ginko to try their Valentine's Day special meal, and it was a fantastic experience🤩! The atmosphere is absolutely Instagram-worthy, with photo opportunities around every corner😁. The food and service were excellent, and the staff was exceptionally nice😍. Their sushi is incredible—by far the finest I've ever had! Every meal I tried was equally impressive😎. So celebrate Valentine's Day this year at the stylish and modern 'Miss Ginko'😃. The menu includes 5 courses...here can you get a salad, sushi, two tapas, a main course, and a dessert. Not only that, but you can choose a fun activity like painting, cooking, or making sushi with your Valentine ❤️. It sounds enjoyable, doesn't it?🔥",
    rating: 5,
  },
  {
    name: "Srijon Bardhan",
    avatar: avator4,
    review: "EXTREMELY EXPENSIVE PLACE ALERT. This Restro-pub in Gariahat is set in a futuristic year where INR 1100 is same as INR 500. This place is dark and loud at night. They have live music everyday from 10pm onwards. Food is good but very less in quantity. It's like a boutique restaurant. Any dish you buy is minimum INR 400 for veg and min INR 550 for non veg. Drinks are priced out of this world. A pint of beer is minimum INR 700 and their LIIT is INR 1100 and they don't even serve it in a mug but just in a small tall glass. They didn't keep the drinks menu in Zomato because if you know you may not go. So I am putting their drinks menu for other users and some photos of foods I had here. This is not a family friendly place. Its more a pub and less a restaurant.",
    rating: 3,
  },
  {
    name: "Roshmi Bag",
    avatar: avator5,
    review: "This is the 2nd time I visited this place. Although a little overpriced, the food tastes amazing, so do the drinks. And the ambiance is to die for.",
    rating: 5,
  }
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
            {testimonials.map((t, i) => {
              const [isExpanded, setIsExpanded] = useState(false);
              const toggleExpand = () => setIsExpanded(!isExpanded);
              const isLongReview = t.review.length > 150;
              const displayedReview = isExpanded ? t.review : `${t.review.slice(0, 150)}...`;

              return (
                <motion.div
                  key={i}
                  className="w-full flex-shrink-0 px-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-400/30 transition text-center">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-yellow-400"
                    />
                    <div className="flex justify-center gap-1 text-yellow-400 mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">
                      "{displayedReview}"
                      {isLongReview && (
                        <span
                          onClick={toggleExpand}
                          className="text-yellow-400 cursor-pointer ml-2 font-extrabold"
                        >
                          {isExpanded ? 'Read Less' : 'Read More'}
                        </span>
                      )}
                    </p>
                    <p className="font-semibold text-yellow-400">- {t.name}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

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

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${i === currentIndex ? 'bg-yellow-400' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
