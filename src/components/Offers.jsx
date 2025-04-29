import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, number } from "framer-motion";
import rain from "../assets/img/rain.jpg"; // Import the image
import clear from "../assets/img/clear.jpg"; // Import the image
import snow from "../assets/img/snow.jpg"; // Import the image
import normal from "../assets/img/normal.jpg"; // Import the image

const RealTimeOffers = () => {
  const [weather, setWeather] = useState(null);
  const [offer, setOffer] = useState(null);

  const apiKey = "de9417fb44d744b1fe08fb2a805f329b"; // Replace with your actual API key
  const city = "Kolkata"; // Set the city for the weather forecast

  // Fetch weather data from OpenWeatherMap API
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Determine the offer based on weather conditions
  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (weather) {
      const temp = weather.main.temp;
    //   const weatherCondition = "normal"; // Static condition for demonstration
        const weatherCondition = weather.weather[0].main.toLowerCase();

      if (weatherCondition === "rain" || temp < 10) {
        setOffer({
          title: "Rainy Day Discount",
          description: "Enjoy 20% off on all food items!",
          image: rain, // Use the imported `rain` image here
          number: "20%"
        });
      } else if (weatherCondition === "clear" && temp > 25) {
        setOffer({
          title: "Summer Special",
          description: "Get a free cold drink with every main course!",
          image: clear,
          number: "Free Cold Drink"
        });
      } else if (weatherCondition === "snow" || temp <= 0) {
        setOffer({
          title: "Winter Special",
          description:
            "Warm up with a free hot beverage on us with every meal!",
          image: snow,
          number: "Free Hot Beverage"
        });
      } else {
        setOffer({
          title: "Standard Offer",
          description: "Get 10% off on your next visit!",
          image: normal,
          number: "10%"
        });
      }
    }
  }, [weather]);

  if (!offer) {
    return <div>Loading offers...</div>;
  }

  return (
    <section
      id="real-time-offers"
      className="bg-gray-900 text-white py-16 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl text-white font-bold text-center mb-10 relative inline-block after:block after:w-24 after:h-1 after:bg-yellow-400 after:mt-2 after:mx-auto">
          Special<span className="text-yellow-400"> Offers</span>
        </h2>

        <motion.div
          className="p-6 rounded-lg shadow-lg hover:shadow-yellow-400/30 transition relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          style={{
            backgroundImage: `url(${offer.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content on top */}
          <div className="relative z-10">
            <div className="mt-32">
                <h3 className="text-4xl font-semibold mb-2">{offer.title}</h3>
                    <span className=" bg-yellow-400 text-black px-6 py-2 rounded-full text-center font-semibold hover:bg-yellow-500 mt-2 mb-4">
                        {offer.number}
                    </span>
                <p className="text-gray-300 mb-4 mt-7 text-lg">{offer.description}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RealTimeOffers;
