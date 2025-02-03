import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center text-center p-6">
      {/* Header Section */}
<<<<<<< HEAD
      <br />
      <h1 className="text-5xl font-bold text-white mb-4">Truth Guardian</h1>
      <br />
      <p className="text-gray-400 text-lg mb-8 max-w-4xl">
=======
      <h1 className="text-5xl font-bold text-white mb-4">Truth Guardian</h1>
      <p className="text-gray-400 text-lg mb-8 max-w-3xl">
>>>>>>> 33df984 (Removed redundant files)
        Your trusted companion in the fight against misinformation. Analyze
        content, detect falsehoods, and make informed decisions with our
        advanced credibility scoring system.
      </p>

      {/* Buttons Section */}
      <div className="flex space-x-4 mb-12">
        <button
<<<<<<< HEAD
          className="bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300 flex items-center gap-2"
          onClick={() => navigate("/InputPage")} // Navigate to AnalyzePage
        >
          Start Analyzing
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>

        <button
          className="bg-gray-800 text-white py-3 px-9 rounded-lg hover:bg-gray-700 transition duration-300 flex items-center gap-2"
          onClick={() => navigate("/trending")} // Navigate to Trending
        >
          View Trending
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trending-up"
=======
          className="bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300"
          onClick={() => navigate("/InputPage")} // Navigate to AnalyzePage
        >
          Start Analyzing →
        </button>
        <button
          className="bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
          onClick={() => navigate("/trending")} // Navigate to Trending
        >
          View Trending{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trending-up"
>>>>>>> 33df984 (Removed redundant files)
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </button>
      </div>

      {/* Key Features Section */}
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-white shadow-md flex flex-col items-center text-center">
<<<<<<< HEAD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-shield"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
=======
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
>>>>>>> 33df984 (Removed redundant files)
            <h3 className="text-xl font-semibold text-white mb-2">
              Truth Meter
            </h3>
            <p className="text-gray-400">
              Advanced algorithm providing accurate credibility scores with
              detailed breakdowns.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-white shadow-md flex flex-col items-center text-center">
<<<<<<< HEAD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trending-up"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
=======
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
>>>>>>> 33df984 (Removed redundant files)
            <h3 className="text-xl font-semibold text-white mb-2">
              Trending Analysis
            </h3>
            <p className="text-gray-400">
              Stay informed about current misleading information trends and
              their debunking.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-white shadow-md flex flex-col items-center text-center">
<<<<<<< HEAD
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-circle-user-round"
            >
              <path d="M18 20a6 6 0 0 0-12 0" />
              <circle cx="12" cy="10" r="4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
=======
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
>>>>>>> 33df984 (Removed redundant files)
            <h3 className="text-xl font-semibold text-white mb-2">
              Personal Dashboard
            </h3>
            <p className="text-gray-400">
              Track your analysis history and manage your preferences in one
              place.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-2xl text-white mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Fight Misinformation?
        </h2>
        <p className="text-lg text-gray-400 mb-6">
          Join our community of truth-seekers and help create a more informed
          digital world.
        </p>
        <button
          className="bg-white text-black py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-300"
          onClick={() => navigate("/InputPage")}
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default Home;
