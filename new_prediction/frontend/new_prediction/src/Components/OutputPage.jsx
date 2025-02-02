import React from 'react';
import { useLocation } from 'react-router-dom';

function OutputPage() {
  const location = useLocation();
  const { prediction } = location.state || { prediction: 'No prediction' };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold text-center mb-6">Prediction Result</h1>
        <p className="text-center text-xl">
          {prediction === 'fake' ? (
            <span className="text-red-500">This news is FAKE.</span>
          ) : (
            <span className="text-green-500">This news is REAL.</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default OutputPage;
