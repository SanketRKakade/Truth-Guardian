import React from "react";
import { useLocation } from "react-router-dom";

function OutputPage() {
  const location = useLocation();
  const { prediction, confidence } = location.state || { prediction: "No prediction", confidence: 0 };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-white text-center">
        <h1 className="text-3xl font-bold mb-6">Prediction Result</h1>
        <p className="text-xl">
          {prediction === "fake" ? (
            <span className="text-red-400 font-semibold">FAKE {confidence}</span>
            // <span className="text-red-400 font-semibold">{condfidence}</span>
          ) : (
            <span className="text-green-400 font-semibold">REAL {confidence}</span>
          )}  
        </p>
      </div>
    </div>
  );
}

export default OutputPage;
