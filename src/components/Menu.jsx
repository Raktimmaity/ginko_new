import React, { useState } from "react";

const menuItems = [
  // Non-veg
  { name: "Planung Manao - Thai Style Steamed Fish", price: "₹900/1200", category: "food", type: "non-veg", image: "/images/steamed-fish.jpg" },
  { name: "Ikan Sambal", price: "₹1100", category: "food", type: "non-veg", image: "/images/ikan-sambal.jpg" },
  { name: "Whole Bhetki", price: "₹1200", category: "food", type: "non-veg", image: "/images/whole-bhetki.jpg" },
  { name: "Gaeng Leuang Pla - Yellow Curry", price: "₹900", category: "food", type: "non-veg", image: "/images/yellow-curry.jpg" },
  { name: "Kaming Goong", price: "₹1500", category: "food", type: "non-veg", image: "/images/kaming-goong.jpg" },
  { name: "Prawns", price: "₹1600", category: "food", type: "non-veg", image: "/images/prawns.jpg" },
  { name: "Stemed Crab Meat Butter Garlic", price: "₹650", category: "food", type: "non-veg", image: "/images/crab-butter-garlic.jpg" },
  { name: "Whole Singapore Style Chill Crab", price: "₹795/995", category: "food", type: "non-veg", image: "/images/singapore-style-crab.jpg" },
  { name: "Lobster Kaeng Panang", price: "₹2999", category: "food", type: "non-veg", image: "/images/lobster-kaeng-panang.jpg" },
  { name: "Lobster Gang Garee", price: "₹2999", category: "food", type: "non-veg", image: "/images/lobster-gang-garee.jpg" },
  { name: "Lobster", price: "₹2999", category: "food", type: "non-veg", image: "/images/lobster.jpg" },

  // Soups
  { name: "Thai Soup", price: "₹375/395/425", category: "food", type: "soup", image: "/images/thai-soup.jpg" },
  { name: "Tom Yum Soup", price: "₹375/395/425", category: "food", type: "soup", image: "/images/tom-yum-soup.jpg" },
  { name: "Korean Soup", price: "₹375/395/425", category: "food", type: "soup", image: "/images/korean-soup.jpg" },
  { name: "Laksha Soup", price: "₹375/395/425", category: "food", type: "soup", image: "/images/laksha-soup.jpg" },
  { name: "Prawn & Vermicelli Soup", price: "₹425", category: "food", type: "soup", image: "/images/prawn-vermicelli-soup.jpg" },

  { name: "BBQ Ribs", price: "$15", category: "food", type: "non-veg", image: "/images/bbq-ribs.jpg" },

  // Vegetarian
  { name: "Vegetable Stir Fry", price: "₹500", category: "food", type: "veg", image: "/images/veg-stir-fry.jpg" },
  { name: "Paneer Tikka", price: "₹600", category: "food", type: "veg", image: "/images/paneer-tikka.jpg" },
  { name: "Vegetable Soup", price: "₹250", category: "food", type: "soup", image: "/images/veg-soup.jpg" },

  // Desserts
  { name: "Chocolate Lava Cake", price: "₹350", category: "food", type: "dessert", image: "/images/chocolate-lava-cake.jpg" },
  { name: "Tiramisu", price: "₹300", category: "food", type: "dessert", image: "/images/tiramisu.jpg" },

  // Bar
  // Single Malt
  { name: "Glenlivet 15 Yrs", price: "₹700", category: "bar", type: "single-malt", image: "/images/glenlivet.jpg" },
  { name: "Glenfiddich 15 Yrs", price: "₹750", category: "bar", type: "single-malt", image: "/images/glenfiddich.jpg" },
  { name: "Macallan 15", price: "$25", category: "bar", type: "single-malt", image: "/images/macallan-15.jpg" },

  { name: "Classic Mojito", price: "$10", category: "bar", type: "cocktail", image: "/images/classic-mojito.jpg" },
  { name: "Whiskey Sour", price: "$11", category: "bar", type: "cocktail", image: "/images/whiskey-sour.jpg" },
  { name: "Craft Beer", price: "$7", category: "bar", type: "beer", image: "/images/craft-beer.jpg" },
  { name: "Heineken", price: "$6", category: "bar", type: "beer", image: "/images/heineken.jpg" },

  // Wines
  { name: "Red Wine", price: "$20", category: "bar", type: "wine", image: "/images/red-wine.jpg" },
  { name: "White Wine", price: "$18", category: "bar", type: "wine", image: "/images/white-wine.jpg" },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("food");

  const filteredItems = menuItems.filter((item) => item.category === selectedCategory);
  const soupItems = filteredItems.filter((item) => item.type === "soup");
  const nonVegItems = filteredItems.filter((item) => item.type === "non-veg");
  const vegItems = filteredItems.filter((item) => item.type === "veg");
  const dessertItems = filteredItems.filter((item) => item.type === "dessert");

  const barTypes = [...new Set(filteredItems.map(item => item.type))];
  const groupedBarItems = barTypes.reduce((acc, type) => {
    acc[type] = filteredItems.filter(item => item.type === type);
    return acc;
  }, {});

  return (
    <section id="menu" className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl text-yellow-400 font-bold mb-8">Our Menu</h2>

        {/* Category Switch */}
        <div className="flex justify-center gap-4 mb-10">
          {["food", "bar"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-700 text-white hover:bg-yellow-500"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Food Section */}
        {selectedCategory === "food" && (
          <div className="space-y-10">
            {soupItems.length > 0 && (
              <fieldset className="border border-yellow-400 rounded p-4">
                <legend className="text-lg text-yellow-400 px-2 font-bold">Soups</legend>
                <div className="grid gap-4 md:grid-cols-2">
                  {soupItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow hover:shadow-yellow-400/40 transition">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                      <span className="font-medium">{item.name}</span>
                      <span className="text-yellow-400 font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </fieldset>
            )}

            {nonVegItems.length > 0 && (
              <fieldset className="border border-yellow-400 rounded p-4">
                <legend className="text-lg text-yellow-400 px-2 font-bold">Non-Veg</legend>
                <div className="grid gap-4 md:grid-cols-2">
                  {nonVegItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow hover:shadow-yellow-400/40 transition">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                      <span className="font-medium">{item.name}</span>
                      <span className="text-yellow-400 font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </fieldset>
            )}

            {vegItems.length > 0 && (
              <fieldset className="border border-yellow-400 rounded p-4">
                <legend className="text-lg text-yellow-400 px-2 font-bold">Vegetarian</legend>
                <div className="grid gap-4 md:grid-cols-2">
                  {vegItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow hover:shadow-yellow-400/40 transition">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                      <span className="font-medium">{item.name}</span>
                      <span className="text-yellow-400 font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </fieldset>
            )}

            {dessertItems.length > 0 && (
              <fieldset className="border border-yellow-400 rounded p-4">
                <legend className="text-lg text-yellow-400 px-2 font-bold">Desserts</legend>
                <div className="grid gap-4 md:grid-cols-2">
                  {dessertItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow hover:shadow-yellow-400/40 transition">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                      <span className="font-medium">{item.name}</span>
                      <span className="text-yellow-400 font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </fieldset>
            )}
          </div>
        )}

        {/* Bar Section */}
        {selectedCategory === "bar" && (
          <div className="space-y-10">
            {Object.entries(groupedBarItems).map(([type, items]) => (
              <fieldset key={type} className="border border-yellow-400 rounded p-4">
                <legend className="text-lg text-yellow-400 px-2 font-bold">
                  {type.replace("-", " ").replace(/\b\w/g, c => c.toUpperCase())}
                </legend>
                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow hover:shadow-yellow-400/40 transition">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                      <span className="font-medium">{item.name}</span>
                      <span className="text-yellow-400 font-bold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
