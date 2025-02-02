import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InputPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!text.trim()) {
      setShowModal(true);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://192.168.28.165:8000/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ claim: text }), // Send the claim in the request body
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
  
        // Extract the prediction directly from the response
        const finalPrediction = data.prediction; // "true" or "false"
        const confidence = data.confidence;
  
        // Navigate to the OutputPage with the prediction result
        navigate("/OutputPage", { state: { prediction: finalPrediction , confidence: confidence } });
      } else {
        throw new Error("Failed to fetch prediction");
      }
    } catch (err) {
      setError("Error fetching prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Input Card */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Analyze News</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="5"
            className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter news text"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {loading ? "Processing..." : "Submit"}
            </button>
          </div>
        </form>
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>

      {/* Modal for Empty Input */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-white">
            <h2 className="text-xl font-bold text-red-500 mb-4">Error</h2>
            <p className="text-gray-300 mb-4">Please enter some text before submitting.</p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-500 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputPage;
