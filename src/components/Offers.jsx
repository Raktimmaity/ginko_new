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
    <section className="bg-black py-16 px-4 text-white min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          Today's <span className="text-yellow-400">Offers</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
  <div
    key={index}
    className="group bg-gray-800 rounded-lg p-6 hover:bg-yellow-400 hover:text-black transition duration-300 shadow-lg cursor-pointer flex flex-col justify-between"
    onClick={() => handleOfferClick(offer)}
  >
    <h3 className="text-xl font-semibold mb-4 text-yellow-400 group-hover:text-black">
      {offer.title}
    </h3>
    <p className="text-2xl font-bold mb-2">{offer.discount}</p>
    <p className="text-sm">{offer.details}</p>
  </div>
))}

        </div>
      </div>

      {showModal && selectedOffer && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={handleClickOutside}
        >
          <div className="bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row gap-6 p-6 relative max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 transition text-white rounded-full p-1"
              aria-label="Close modal"
            >
              <XCircle className="w-6 h-6" />
            </button>

            {/* Left Side - Offer Details */}
            <div className="flex-1 overflow-auto pr-4">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">
                {selectedOffer.title} - {selectedOffer.discount}
              </h3>
              <p className="mb-6 text-lg">{selectedOffer.details}</p>

              {selectedOffer.title === "BANK OFFER" && (
                <>
                  <h4 className="font-semibold mb-3 text-lg">Bank Offers:</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    {selectedOffer.bankOffers?.map((bankOffer, idx) => (
                      <li key={idx}>
                        <span className="font-semibold">{bankOffer.title}:</span>{" "}
                        {bankOffer.detail}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Right Side - Terms & Conditions */}
            <div className="flex-1 bg-gray-700 rounded-lg p-6 overflow-auto max-h-[70vh]">
              <h4 className="font-bold text-yellow-400 mb-4 text-lg">
                Terms & Conditions:
              </h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
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
