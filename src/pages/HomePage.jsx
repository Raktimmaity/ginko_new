// pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Events from '../components/Events';
import Reviews from '../components/Reviews';
import BookSeat from '../components/BookSeat';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Events />
      <Reviews />
      <BookSeat />
      <Contact />
    </>
  );
};

export default HomePage;
