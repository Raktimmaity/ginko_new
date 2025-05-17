import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
// Special food
import SpecialFood from "../assets/img/special_food.jpg";
import Food1 from "../assets/img/food1.jpg";
import Food2 from "../assets/img/food2.jpg";
import Food3 from "../assets/img/food3.jpg";
import Food4 from "../assets/img/food4.jpg";
import Food5 from "../assets/img/food5.jpg";
import Food6 from "../assets/img/food6.jpg";
import Food7 from "../assets/img/food7.jpg";
import Food8 from "../assets/img/food8.jpg";
import Food9 from "../assets/img/food9.jpg";
import Food10 from "../assets/img/food10.jpg";
import Food11 from "../assets/img/food11.jpg";
import Food12 from "../assets/img/food12.jpg";
import Food13 from "../assets/img/food13.jpg";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const specialImages = [SpecialFood];
  const foodImages = [Food1, Food2, Food3, Food4, Food5, Food6, Food7, Food8, Food9, Food10, Food11, Food12, Food13];

  const handleSwipe = (direction, images) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const renderCards = (images) => {
    return (
      <div className="relative flex justify-center items-center w-full h-full">
        <ChevronLeft
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-yellow-400 hover:text-white"
          size={32}
          onClick={() => handleSwipe("left", images)}
        />
        <div className="w-3/4 flex justify-center items-center">
          <img
            src={images[currentIndex]}
            alt="Menu Item"
            className="object-cover rounded-lg w-full h-[400px] shadow-lg cursor-pointer"
            onClick={() => openModal(images[currentIndex])}
          />
        </div>
        <ChevronRight
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-yellow-400 hover:text-white"
          size={32}
          onClick={() => handleSwipe("right", images)}
        />
      </div>
    );
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-16 p-8 pt-36">
      <h2 className="text-4xl text-yellow-400 font-bold mb-8">Special Category</h2>
      {renderCards(specialImages)}
      <h2 className="text-4xl text-yellow-400 font-bold mb-8">Food Menus</h2>
      {renderCards(foodImages)}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-[250px]">
            <img
              src={modalImage}
              alt="Full View"
              className={`w-full h-full max-w-screen-lg max-h-screen-lg object-contain transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
              onClick={toggleZoom}
            />
            <X
              className="absolute top-4 right-4 cursor-pointer text-yellow-400 hover:text-white"
              size={32}
              onClick={closeModal}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Menu;
 