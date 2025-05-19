import React, { useState } from "react";
import { XCircle } from "lucide-react";

const offers = [
  {
    title: "PRE-BOOK OFFER",
    discount: "Flat 20% OFF",
    details: "Valid from 1:30PM to 11:55PM today. Booking required.",
  },
  {
    title: "INSTANT OFFER",
    discount: "Flat 10% OFF",
    details: "on bill payments.",
  },
  {
    title: "SURPRISE",
    discount: "Get a scratch card",
    details: "after every transaction.",
  },
  {
    title: "EXCLUSIVE OFFER",
    discount: "Flat 10% OFF",
    details: "valid on your next dining payment.",
  },
  {
    title: "BANK OFFER",
    discount: "20% OFF up to ₹1200",
    details: "on Credit Cards and more with other banks.",
    bankOffers: [
      {
        title: "Paytm UPI",
        detail: "Get Assured ₹10 cashback up to ₹100 using Paytm UPI.",
      },
      {
        title: "IDBI Bank Credit Cards",
        detail: "Get 15% OFF up to ₹500. Valid on ₹3000 or more.",
      },
      {
        title: "HSBC TravelOne Credit Card",
        detail: "Get 10% OFF up to ₹1000. Valid through the app.",
      },
      {
        title: "Federal Bank Credit Cards",
        detail: "Get 10% OFF up to ₹500. Valid on ₹3000 or more.",
      },
      {
        title: "Amazon Pay Balance",
        detail: "₹25 cashback up to ₹125. Valid on ₹200 or more.",
      },
      {
        title: "MobiKwik UPI",
        detail: "₹50 instant cashback. Valid on ₹1500 or more.",
      },
    ],
  },
];

const offerTerms = [
  "Applicable for today.",
  "Cannot be combined with other offers or offline deals.",
  "Not applicable to bottled drinks, buffets, seasonal items, or special menus.",
  "Additional service charges may apply.",
  "Subject to restaurant's discretion.",
  "Other T&Cs may apply.",
];

const Offers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleOfferClick = (offer) => {
    setSelectedOffer(offer);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedOffer(null);
  };

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <section className="bg-black py-16 px-4 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Today's <span className="text-yellow-400">Offers</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-yellow-400 hover:text-black transition duration-300 shadow-lg cursor-pointer"
              onClick={() => handleOfferClick(offer)}
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                {offer.title}
              </h3>
              <p className="text-2xl font-bold mb-2">{offer.discount}</p>
              <p className="text-sm mb-2">{offer.details}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedOffer && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex gap-6 relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
            >
              <XCircle className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                {selectedOffer.title} - {selectedOffer.discount}
              </h3>
              <p className="mb-4">{selectedOffer.details}</p>

              {selectedOffer.title === "BANK OFFER" && (
                <>
                  <h4 className="font-bold mb-2">Bank Offers:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {selectedOffer.bankOffers?.map((bankOffer, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{bankOffer.title}:</span> {bankOffer.detail}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Terms Section */}
            <div className="flex-1 bg-gray-500 p-4 rounded-lg overflow-y-auto">
              <h4 className="font-bold mb-2">Terms & Conditions:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                {offerTerms.map((term, idx) => (
                  <li key={idx}>{term}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Offers;
