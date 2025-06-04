import React from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import BookSeat from './components/BookSeat';
import MenuPage from './components/Menu_old';
import Menu from './components/Menu';
import Offers from './components/Offers';
import Services from './components/Services';

function Home(){

  const route = createBrowserRouter([
    {
      path: "/",
      element:(
        <>
        <Navbar/>
        <Hero/>
        <About/>
        <Services />
        <Gallery />
        <Offers/>
        {/* <Events /> */}
        <Reviews/>
        {/* <BookSeat/> */}
        <Contact />
        <Footer />
        </>
      )
    },
    {
      path: "/menu",
      element:(
        <>
          <Navbar/>
          <Menu/>
          <Footer/>
        </>
      )
    }
  ])

  return(
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default Home;