import React, { useState } from "react";

const categories = [
  { id: "photography", name: "Photography", subcategories: ["Portrait", "Landscape"] },
  { id: "videography", name: "Videography", subcategories: ["Reels", "Landscape"] },
  { id: "motion", name: "Motion Design", subcategories: ["3D Animation", "Logo Animation"] },
];

const works = {
  photography: {
    Portrait: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EFRjxF1Q6v2lNR3ExSzHufdKVkRNzVcGXQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EFRjxF1Q6v2lNR3ExSzHufdKVkRNzVcGXQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1EFRjxF1Q6v2lNR3ExSzHufdKVkRNzVcGXQ&s",
    ],
    Landscape: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrlzvCKpZBFN6iVzlTP65Iex3d3sT3dXQLQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrlzvCKpZBFN6iVzlTP65Iex3d3sT3dXQLQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNrlzvCKpZBFN6iVzlTP65Iex3d3sT3dXQLQ&s",
    ],
  },
  videography: {
    Reels: [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/tgbNymZ7vqY",
      "https://www.youtube.com/embed/tgbNymZ7vqY",
    ],
    Landscape: [
      "https://www.youtube.com/embed/mN4qEw2OzF8",
      "https://www.youtube.com/embed/3UO2A2p6Nck",
      "https://www.youtube.com/embed/3UO2A2p6Nck",
    ],
  },
  motion: {
    "3D Animation": [
      "https://www.youtube.com/embed/xyz123",
      "https://www.youtube.com/embed/abc456",
      "https://www.youtube.com/embed/abc456",
    ],
    "Logo Animation": [
      "https://www.youtube.com/embed/pqr789",
      "https://www.youtube.com/embed/lmn321",
      "https://www.youtube.com/embed/lmn321",
    ],
  },
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("photography");
  const [activeSubcategory, setActiveSubcategory] = useState(
    categories.find((cat) => cat.id === "photography").subcategories[0]
  );

  return (
    <section className="w-11/12 sm:w-4/5 mx-auto py-16 pt-[120px]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
        My Portfolio
      </h2>
      <p className="text-base sm:text-lg text-center text-gray-600 mb-8">
        Explore my creative work in different fields.
      </p>

      {/* Category Tabs */}
      <div className="flex justify-center gap-2 sm:gap-6 mb-4 sm:mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setActiveSubcategory(category.subcategories[0]);
            }}
            className={`px-2 py-2 text-sm sm:px-3 sm:py-3 sm:text-lg font-medium rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Subcategory Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8">
        {categories
          .find((cat) => cat.id === activeCategory)
          ?.subcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => setActiveSubcategory(subcategory)}
              className={`px-4 py-2 text-sm sm:text-lg font-medium rounded-full transition-all duration-300 ${
                activeSubcategory === subcategory
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
            >
              {subcategory}
            </button>
          ))}
      </div>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {works[activeCategory][activeSubcategory].map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.05] transition-transform duration-300"
          >
            {/* Check if it's a YouTube video or image */}
            {activeCategory === "videography" || activeCategory === "motion" ? (
              <iframe
                src={item}
                className="w-full h-48 sm:h-[400px]"
                title={`Video ${index}`}
                allowFullScreen
              ></iframe>
            ) : (
              <img src={item} alt={activeSubcategory} className="w-full object-cover" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
