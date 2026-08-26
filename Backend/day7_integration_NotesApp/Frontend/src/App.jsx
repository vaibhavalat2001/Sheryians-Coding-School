import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
    console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault;

  
  };
  return (
    <div className="bg-black h-screen flex flex-col gap-4 text-white p-6">
      <h1 className="text-2xl">Create Notes</h1>
      <form onSubmit={handleSubmit} className="w-100 border bg-zinc-2 gap-4 rounded-xl flex flex-col justify-between p-4">
        <input
          onChange={handleChange}
          name="title"
          className="text-lg outline-none border border-gray-400 rounded p-2"
          type="text"
          placeholder="title"
        />
        <input
          onChange={handleChange}
          name="description"
          className="text-lg outline-none border border-gray-400 rounded p-2"
          type="text"
          placeholder="description"
        />
        <button className="bg-blue-500 active:scale-95 transition duration-300 rounded p-2">
          Create Notes
        </button>
      </form>
    </div>
  );
};

export default App;
