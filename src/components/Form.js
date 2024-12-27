import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Input cannot be empty!");
      return;
    }
    setError("");
    onSubmit(input);
    setInput("");
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add New Data</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter some data..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-blue-300 focus:outline-none transition"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-lg hover:from-blue-500 hover:to-blue-700 transition shadow"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
