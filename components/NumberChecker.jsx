// client/components/NumberChecker.js
import React, { useState } from "react";

function NumberChecker() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setError(""); // Clear any previous errors

    fetch("http://127.0.0.1:8000/api/check-number", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ number: number }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setResult(data.message);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("An error occurred while fetching data.");
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl mb-6">Number Checker</h1>
      <div className="mb-3">
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">
          Enter a number (1-100):
        </label>
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={handleChange}
          className="mt-1 p-2 w-full rounded-md border-gray-300"
        />
      </div>

      <div className="mb-6">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Check Number
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {error && <p className="text-red-500">{error}</p>}
          <p className="text-lg font-semibold">Result:</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default NumberChecker;
