import React, { useState, useEffect } from 'react';
import gallery1 from '../assets/img/gallery1.jpg';
import gallery2 from '../assets/img/gallery2.jpg';
import gallery3 from '../assets/img/gallery3.jpg';
import gallery4 from '../assets/img/gallery4.jpg';
import gallery5 from '../assets/img/gallery5.jpg';
import gallery6 from '../assets/img/gallery6.jpg';

const galleryImages = [
  { src: gallery1, caption: "Cocktail Hour Vibes" },
  { src: gallery2, caption: "Live DJ Night" },
  { src: gallery3, caption: "Classy Interior" },
  { src: gallery4, caption: "Signature Drinks" },
  { src: gallery5, caption: "The Buzzing Bar" },
  { src: gallery6, caption: "Evening Lounge" },
];

const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openLightbox = (img, index) => {
    setLightboxImage(img);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setCurrentImageIndex(null);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPreviousImage();
    } else if (e.key === 'ArrowRight') {
      goToNextImage();
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
  };

  useEffect(() => {
    if (lightboxImage) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxImage]);

  return (
    <section id="gallery" className="bg-gray-800 text-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl text-yellow-400 font-bold text-center mb-10">
          Gallery
        </h2>

        {/* Album-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl overflow-hidden shadow-lg transition transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer"
              onClick={() => openLightbox(img, index)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-64 object-cover transition-transform duration-300"
                loading='lazy'
              />
              <div className="absolute inset-0 bg-black/60 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-yellow-400 text-lg font-semibold text-center px-2">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-yellow-400 text-3xl font-bold z-10 hover:text-yellow-300 cursor-pointer"
            >
              ✕
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPreviousImage();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 text-5xl z-10 hover:text-yellow-300 cursor-pointer"
            >
              &#10094;
            </button>

            {/* Lightbox Image */}
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].caption}
              className="w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextImage();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400 text-5xl z-10 hover:text-yellow-300 cursor-pointer"
            >
              &#10095;
            </button>

            {/* Caption */}
            <div className='flex flex-wrap justify-center items-center'>
            <p className="text-gray-900 text-center mt-4 text-lg font-medium bg-yellow-400 inline-block p-2 rounded-full">
              {galleryImages[currentImageIndex].caption}
            </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
