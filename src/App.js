import React, { useState } from "react";
import Button from "./components/Button";
import DataDisplay from "./components/DataDisplay";
import Form from "./components/Form";

const App = () => {
  const [data, setData] = useState([]);

  const handleFormSubmit = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  const handleClearData = () => {
    setData([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-2xl space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
           This is a Responsive Interface
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Form onSubmit={handleFormSubmit} />
          <DataDisplay data={data} />
        </div>
        <div className="text-center">
          <Button label="Clear Data" onClick={handleClearData} />
        </div>
      </div>
    </div>
  );
};

export default App;
