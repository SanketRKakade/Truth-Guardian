import React from "react";

const Trending = () => {
  const misinformationItems = [
    {
      title: "5G Networks Spread Viruses",
      description: "Claims suggesting 5G networks are responsible for spreading viruses.",
      credibilityScore: "Low Credibility",
      link: "#"
    },
    {
      title: "Artificial Sweeteners Cause Memory Loss",
      description: "Recent viral posts claiming artificial sweeteners directly cause memory loss.",
      credibilityScore: "Misleading",
      link: "#"
    },
    {
      title: "Ancient Civilization on Mars",
      description: "Social media posts claiming NASA found ruins of an ancient civilization on Mars.",
      credibilityScore: "False",
      link: "#"
    },
    {
      title: "Miracle Weight Loss Cure",
      description: "Claims about a natural supplement that causes immediate weight loss.",
      credibilityScore: "Unverified",
      link: "#"
    },
    {
      title: "Cloud Seeding Conspiracy",
      description: "Posts claiming cloud seeding is causing extreme weather events.",
      credibilityScore: "Debunked",
      link: "#"
    },
    {
      title: "Digital Currency Replacement",
      description: "Claims that all physical currency will be replaced by digital currency next month.",
      credibilityScore: "False",
      link: "#"
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-b from-black to-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-4">Trending Misinformation</h1>
      <p className="text-gray-300 mb-6 text-center">
        Stay informed about current misleading information and their factual corrections.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {misinformationItems.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-gray-800 rounded-xl shadow-lg text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-300 mb-3">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">{item.credibilityScore}</span>
              <a href={item.link} className="text-blue-400 hover:text-blue-500 font-semibold">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
