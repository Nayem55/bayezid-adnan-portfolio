import React, { useState } from "react";

const categories = [
  { id: "photography", name: "Photography" },
  { id: "videography", name: "Videography" },
  { id: "motion", name: "Motion Design" },
];

const works = {
  photography: [
    "https://www.nijolcreative.com/wp-content/uploads/2023/07/The-Best-Wedding-Photography-Bangladesh-by-Nijol-Creative-Photography.jpg",
    "https://www.nijolcreative.com/wp-content/uploads/2023/07/The-Best-Wedding-Photography-Bangladesh-by-Nijol-Creative-Photography.jpg",
    "https://www.nijolcreative.com/wp-content/uploads/2023/07/The-Best-Wedding-Photography-Bangladesh-by-Nijol-Creative-Photography.jpg",
    "https://www.nijolcreative.com/wp-content/uploads/2023/07/The-Best-Wedding-Photography-Bangladesh-by-Nijol-Creative-Photography.jpg",
    "https://www.nijolcreative.com/wp-content/uploads/2023/07/The-Best-Wedding-Photography-Bangladesh-by-Nijol-Creative-Photography.jpg",
    "https://www.nijolcreative.com/wp-content/uploads/2023/07/The-Best-Wedding-Photography-Bangladesh-by-Nijol-Creative-Photography.jpg",
  ],
  videography: [
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
  ],
  motion: [
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
    "https://www.scad.edu/sites/default/files/styles/swarm16x9_768/public/Academics/Motion%20media%20design/student-work-motion-media-design-blown-away.jpg",
  ],
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("photography");

  return (
    <section className="w-11/12 sm:w-4/5 mx-auto py-16 pt-[120px]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
        My Portfolio
      </h2>
      <p className="text-base sm:text-lg text-center text-gray-600 mb-8">
        Explore my creative work in different fields.
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-5 py-2 text-base sm:text-lg font-medium rounded-full transition-all duration-300 ${
              activeTab === category.id
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Work Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {works[activeTab].map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-[1.05] transition-transform duration-300"
          >
            <img src={image} alt={activeTab} className="w-full h-48 sm:h-60 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
